"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState("en")

  useEffect(() => {
    // Auto-detect language based on geolocation and browser settings
    const detectLanguage = async () => {
      try {
        // Try to get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords

              // Simple geolocation-based language detection for India
              if (latitude >= 8.4 && latitude <= 37.6 && longitude >= 68.7 && longitude <= 97.25) {
                // User is in India, detect regional language
                const browserLang = navigator.language.toLowerCase()

                if (browserLang.includes("hi")) setLanguageState("hi")
                else if (browserLang.includes("pa")) setLanguageState("pa")
                else if (browserLang.includes("mr")) setLanguageState("mr")
                else if (browserLang.includes("kn")) setLanguageState("kn")
                else setLanguageState("hi") // Default to Hindi for India
              }
            },
            () => {
              // Fallback to browser language if geolocation fails
              const browserLang = navigator.language.toLowerCase()
              if (browserLang.includes("hi")) setLanguageState("hi")
              else if (browserLang.includes("pa")) setLanguageState("pa")
              else if (browserLang.includes("mr")) setLanguageState("mr")
              else if (browserLang.includes("kn")) setLanguageState("kn")
            },
          )
        }
      } catch (error) {
        console.log("Language detection failed, using default")
      }
    }

    // Check for saved language preference
    const savedLang = localStorage.getItem("azuka-language")
    if (savedLang) {
      setLanguageState(savedLang)
    } else {
      detectLanguage()
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("azuka-language", lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
