"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from '@/hooks/use-language'
import { getTranslation } from '@/lib/i18n'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
            AZUKA
          </div>
          <span className="font-semibold text-blue-800">AGRI</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('home')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('products')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <Link href="/products/ruffknot" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Azuka RUFFKNOT</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Built to Bind, Engineered to Last
                    </p>
                  </Link>
                  <Link href="/products/maxknot" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Azuka MaxKnot</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Max Strength. Max Yields.
                    </p>
                  </Link>
                  <Link href="/products/xtremebale" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Azuka XtremeBALE</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Tie the Toughest Bales
                    </p>
                  </Link>
                  <Link href="/products/balemax" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Azuka BaleMAX</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Round Baling, Reinvented
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('about')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/calculator" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('calculator')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('blog')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  {t('contact')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button className="bg-blue-600 hover:bg-blue-700 hidden md:inline-flex">
            <Link href="/contact">{t('getFreeSample')}</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('home')}
            </Link>
            <Link href="/products" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('products')}
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('about')}
            </Link>
            <Link href="/calculator" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('calculator')}
            </Link>
            <Link href="/blog" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('blog')}
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium" onClick={() => setIsOpen(false)}>
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
