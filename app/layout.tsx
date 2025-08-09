import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azuka Agri - Premium Baler Twine & Agricultural Solutions",
  description:
    "India's leading manufacturer of high-quality baler twine, nets, and rope solutions for agriculture. Trusted by 10,000+ farmers across 50+ countries.",
  keywords:
    "baler twine manufacturer india, hay baler twine supplier, agricultural twine exporter, reaper binder twine, round baler twine, bale net wrap",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
