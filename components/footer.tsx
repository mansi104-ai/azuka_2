"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export function Footer() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">AZUKA</div>
              <span className="font-semibold text-blue-400">AGRI</span>
            </div>
            <p className="text-gray-300 text-sm">
              India's leading manufacturer of premium baler twine and agricultural solutions. Trusted by farmers
              worldwide for quality and reliability.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white text-sm">
                {t("home")}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm">
                {t("about")}
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white text-sm">
                {t("products")}
              </Link>
              <Link href="/calculator" className="block text-gray-300 hover:text-white text-sm">
                {t("calculator")}
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white text-sm">
                {t("blog")}
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm">
                {t("contact")}
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Products</h3>
            <div className="space-y-2">
              <Link href="/products/ruffknot" className="block text-gray-300 hover:text-white text-sm">
                Azuka RUFFKNOT
              </Link>
              <Link href="/products/maxknot" className="block text-gray-300 hover:text-white text-sm">
                Azuka MaxKnot
              </Link>
              <Link href="/products/xtremebale" className="block text-gray-300 hover:text-white text-sm">
                Azuka XtremeBALE
              </Link>
              <Link href="/products/balemax" className="block text-gray-300 hover:text-white text-sm">
                Azuka BaleMAX
              </Link>
              <Link href="/products/reaptuff" className="block text-gray-300 hover:text-white text-sm">
                Azuka ReapTuff
              </Link>
              <Link href="/products/agriforce" className="block text-gray-300 hover:text-white text-sm">
                Azuka AgriForce
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+91-98765-43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@azukaagri.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Industrial Area, Phase-II
                  <br />
                  Chandigarh, India - 160002
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Azuka Agri. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
