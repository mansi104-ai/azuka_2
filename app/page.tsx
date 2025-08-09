"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Award, Globe, Users, Leaf, TreePine, Factory, CheckCircle, Star, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from '@/hooks/use-language'
import { getTranslation } from '@/lib/i18n'

export default function HomePage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Phase 1: Hook - Problem-Focused Hero */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2">
                🔥 URGENT: Fire Season Alert
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-orange-100 max-w-[600px]">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg text-orange-200 max-w-[600px]">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                  {t('getFreeSample')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  {t('learnMore')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hay-fire-danger.png"
                alt="Hay bale fire danger"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                DANGER ZONE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Authority - Trust Indicators */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
              {t('authorityTitle')}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              India's Leading Baler Twine Manufacturer & Exporter
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">{t('yearsExperience')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">{t('customersServed')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">{t('countriesExport')}</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-blue-600 mb-2">ISO</div>
                <div className="text-gray-600">{t('isocertified')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 3: Value - Free Expert Guide */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">FREE EXPERT GUIDE</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800 mb-6">
                {t('valueTitle')}
              </h2>
              <div className="space-y-4">
                {[
                  "How to test moisture content before baling",
                  "Proper stacking techniques to prevent heating", 
                  "Warning signs of dangerous temperature buildup",
                  "Emergency procedures if bales start heating"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-6 bg-green-600 hover:bg-green-700" size="lg">
                Download Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/expert-guide-preview.png"
                alt="Expert guide preview"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Worth ₹5,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Mission */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              {t('missionTitle')}
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              {t('missionDescription')}
            </p>
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Our mission is to reduce open field burning and air pollution by promoting baling of crop waste. 
              Every roll of Azuka Baler Twine helps convert crop waste into fuel – saving trees, replacing coal, and protecting clean air.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Factory className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <div className="text-3xl font-bold mb-2">50,000 tons</div>
                <div className="text-green-100">{t('coalReplaced')} Annually</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <div className="text-3xl font-bold mb-2">75,000 tons</div>
                <div className="text-green-100">{t('co2Prevented')} Annually</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <TreePine className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <div className="text-3xl font-bold mb-2">2.3 Million</div>
                <div className="text-green-100">{t('treesEquivalent')} Saved</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phase 4: Bridge to Products */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
              {t('productsTitle')}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Premium quality twines engineered for Indian farming conditions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Azuka RUFFKNOT",
                tagline: t('ruffknotTagline'),
                description: "Heavy-duty twine for tough baling conditions",
                features: ["Extra strength polypropylene", "UV resistant", "Works with all balers"],
                image: "/ruffknot-product.png",
                badge: "BESTSELLER"
              },
              {
                name: "Azuka MaxKnot",
                tagline: t('maxknotTagline'),
                description: "Maximum strength for maximum yields",
                features: ["Superior tensile strength", "Consistent quality", "Reduced breakage"],
                image: "/maxknot-product.png",
                badge: "PREMIUM"
              },
              {
                name: "Azuka XtremeBALE",
                tagline: t('xtremebaleTagline'),
                description: "For the toughest baling challenges",
                features: ["Extreme weather resistance", "High knot strength", "Long-lasting"],
                image: "/xtremebale-product.png",
                badge: "NEW"
              }
            ].map((product, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10 bg-red-500 text-white">
                    {product.badge}
                  </Badge>
                )}
                <div className="relative h-48">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-800">{product.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium italic">
                    "{product.tagline}"
                  </CardDescription>
                  <p className="text-gray-600">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Sample <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 5: Irresistible Offer */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2 mb-4">
              LIMITED TIME OFFER
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              {t('offerTitle')}
            </h2>
            <p className="text-2xl text-blue-100 mb-8">
              {t('offerSubtitle')}
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: "🎁",
                title: "Free Sample Spool",
                description: "Delivered to your farm"
              },
              {
                icon: "💰",
                title: "30-Day Money Back",
                description: "100% satisfaction guarantee"
              },
              {
                icon: "📞",
                title: "Dealer Pricing",
                description: "Bulk order discounts"
              },
              {
                icon: "🎓",
                title: "Free Training",
                description: "Technical support included"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold flex-1">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91-98765-43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 flex-1">
                WhatsApp Sample Request
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              ⏰ Offer valid for next 48 hours only | 🚚 Free delivery across India
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
              What Farmers Are Saying
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                location: "Punjab",
                quote: "Azuka twine saved my entire harvest. No more fire risks!",
                rating: 5
              },
              {
                name: "Suresh Patil",
                location: "Maharashtra", 
                quote: "Best quality twine I've used in 20 years of farming.",
                rating: 5
              },
              {
                name: "Manjeet Singh",
                location: "Haryana",
                quote: "Strong, reliable, and great customer service.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
