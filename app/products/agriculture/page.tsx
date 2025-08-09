import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AgricultureProductsPage() {
  const products = [
    {
      name: "Square Baler Twine",
      description: "High-strength polypropylene twine designed for square balers",
      features: ["UV resistant", "High tensile strength", "Consistent quality", "Easy handling"],
      image: "/square-hay-bales.png"
    },
    {
      name: "Round Baler Twine",
      description: "Premium twine specifically engineered for round baling operations",
      features: ["Superior knot strength", "Weather resistant", "Smooth feeding", "Reduced waste"],
      image: "/round-hay-bales.png"
    },
    {
      name: "Big Baler Twine",
      description: "Heavy-duty twine for large square balers and high-volume operations",
      features: ["Extra strength", "Long length spools", "Minimal breakage", "Cost effective"],
      image: "/placeholder-zp39x.png"
    },
    {
      name: "Reaper Binder Twine",
      description: "Traditional twine for reaper binder machines and specialty applications",
      features: ["Natural fiber blend", "Traditional quality", "Reliable performance", "Heritage craftsmanship"],
      image: "/traditional-farming-equipment-twine.png"
    },
    {
      name: "Bale Net Wrap",
      description: "Advanced net wrapping solution for faster, more efficient baling",
      features: ["Faster baling", "Better bale shape", "Weather protection", "Easy storage"],
      image: "/placeholder-r2b1w.png"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Agriculture Products
            </h1>
            <p className="text-xl text-blue-100">
              Premium baler twine and net wrap solutions designed for modern farming operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid gap-6 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-blue-800">{product.name}</CardTitle>
                      <CardDescription className="text-lg">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid gap-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Link href="/contact" className="flex items-center">
                            Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline">
                          <Link href="/downloads">Download Specs</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
              Why Choose Our Agriculture Products?
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Engineered for performance, built for reliability
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Premium Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Made from high-quality polypropylene and natural fibers for maximum strength and durability
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Weather Resistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  UV stabilized and weather resistant to maintain performance in all conditions
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800">Consistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous quality control ensures every spool meets our high standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your farming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Contact Expert</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/calculator">Use Calculator</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
