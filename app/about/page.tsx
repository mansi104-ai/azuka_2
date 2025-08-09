"use client"

import Image from "next/image"
import { Award, Users, Globe, Shield, Target, Heart, Leaf } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      position: "Chief Executive Officer",
      image: "/ceo-headshot.png",
      description: "25+ years in agricultural industry",
    },
    {
      name: "Priya Patel",
      position: "Chief Technology Officer",
      image: "/professional-cto-headshot.png",
      description: "Expert in polymer technology",
    },
    {
      name: "Amit Kumar",
      position: "Sales Director",
      image: "/sales-director-headshot.png",
      description: "Leading our global expansion",
    },
  ]

  const milestones = [
    { year: "1999", event: "Company Founded", description: "Started with a vision to serve Indian farmers" },
    { year: "2005", event: "ISO Certification", description: "Achieved ISO 9001:2015 certification" },
    { year: "2010", event: "Export Expansion", description: "Started exporting to 10+ countries" },
    { year: "2015", event: "Technology Upgrade", description: "Invested in advanced manufacturing" },
    { year: "2020", event: "Sustainability Focus", description: "Launched eco-friendly product lines" },
    { year: "2024", event: "Global Leader", description: "Serving 50+ countries worldwide" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About Azuka Agri</h1>
            <p className="text-xl text-blue-100">Empowering farmers with premium agricultural solutions since 1999</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">OUR STORY</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1999 with a simple mission: to provide Indian farmers with world-class agricultural
                  solutions that increase productivity while protecting the environment.
                </p>
                <p>
                  What started as a small manufacturing unit in Chandigarh has grown into India's leading baler twine
                  manufacturer, serving over 10,000 farmers across 50+ countries.
                </p>
                <p>
                  Our commitment to quality, innovation, and sustainability has made us the trusted choice for farmers
                  who demand the best for their operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-agricultural-facility.png"
                alt="Azuka Agri manufacturing facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Foundation</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To reduce open field burning and air pollution by promoting baling of crop waste, helping farmers earn
                  more while protecting the environment.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A future where no field is burned, no air is choked, and every farmer prospers by doing the right
                  thing for our planet.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-800">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quality, sustainability, innovation, and farmer-first approach guide everything we do in our journey
                  towards a cleaner, greener future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Impact in Numbers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Satisfied Farmers</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
                <div className="text-gray-600">9001:2015 Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Journey</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-[60px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-blue-800">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Meet Our Leadership</h2>
            <p className="text-gray-600 mt-4">Experienced professionals driving innovation in agriculture</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-blue-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Quality Certifications</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="font-semibold text-lg mb-2">ISO 9001:2015</h3>
                <p className="text-blue-100 text-sm">Quality Management System</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <h3 className="font-semibold text-lg mb-2">ISO 14001</h3>
                <p className="text-blue-100 text-sm">Environmental Management</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                <h3 className="font-semibold text-lg mb-2">Export Excellence</h3>
                <p className="text-blue-100 text-sm">Government of India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
