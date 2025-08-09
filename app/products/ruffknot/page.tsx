"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Shield, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RuffknotPage() {
  const specifications = [
    { property: "Material", value: "100% Virgin Polypropylene" },
    { property: "Tensile Strength", value: "200+ kg" },
    { property: "Length per Spool", value: "2000 meters" },
    { property: "Knot Strength", value: "180+ kg" },
    { property: "UV Resistance", value: "12+ months outdoor" },
    { property: "Color", value: "Orange/Blue/Green" },
    { property: "Packaging", value: "Individual spools in cartons" },
    { property: "Shelf Life", value: "5+ years in proper storage" },
  ]

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Extra Strength",
      description: "200+ kg tensile strength for heavy-duty baling operations",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "UV Resistant",
      description: "12+ months outdoor resistance against sun damage",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Universal Compatibility",
      description: "Works with all major baler brands and models",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Consistent Quality",
      description: "Every spool meets strict quality standards",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      quote: "RUFFKNOT has never let me down. Strong, reliable, and perfect for my John Deere baler.",
      rating: 5,
      image: "/farmer-testimonial-1.png",
    },
    {
      name: "Suresh Patil",
      location: "Maharashtra",
      quote: "Best twine I've used in 15 years. No breakage, no problems. Highly recommended!",
      rating: 5,
      image: "/farmer-testimonial-2.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-orange-600 font-semibold px-4 py-2">BESTSELLER</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Azuka RUFFKNOT
              </h1>
              <p className="text-2xl text-orange-100 font-medium italic">"Built to Bind, Engineered to Last"</p>
              <p className="text-lg text-orange-200 max-w-[600px]">
                The most trusted baler twine in India. Extra strength polypropylene construction ensures your bales stay
                secure in all conditions. Preferred by 10,000+ farmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
                  Get Free Sample <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ruffknot-hero-image.png"
                alt="Azuka RUFFKNOT baler twine"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                IN STOCK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Why Choose RUFFKNOT?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Engineered for Indian farming conditions with unmatched reliability
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="specifications" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="storage">Storage Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed product specifications for Azuka RUFFKNOT</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium">{spec.property}</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Perfect For</CardTitle>
                  <CardDescription>Ideal applications for RUFFKNOT baler twine</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-600">Crop Types</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Wheat straw baling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Rice straw baling</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Hay and fodder</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Cotton stalks</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-600">Baler Compatibility</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>John Deere balers</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>New Holland balers</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Massey Ferguson</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>All Indian brands</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Storage & Handling</CardTitle>
                  <CardDescription>Best practices to maintain twine quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Storage Conditions</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Store in cool, dry place away from direct sunlight</li>
                        <li>• Maintain temperature below 35°C</li>
                        <li>• Keep humidity levels below 60%</li>
                        <li>• Protect from rodents and insects</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Handling Tips</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Handle spools carefully to avoid damage</li>
                        <li>• Use FIFO (First In, First Out) rotation</li>
                        <li>• Check for cuts or abrasions before use</li>
                        <li>• Keep original packaging until use</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">What Farmers Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Ready to Try RUFFKNOT?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers. Get your free sample today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold flex-1">
              Get Free Sample
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 flex-1 bg-transparent"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <p className="text-orange-200 text-sm mt-4">🚚 Free delivery across India | 💰 Bulk pricing available</p>
        </div>
      </section>
    </div>
  )
}
