"use client"

import Image from "next/image"
import { Leaf, TreePine, Factory, Users, Target, Heart, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function MissionPage() {
  const impactStats = [
    {
      icon: <Factory className="h-8 w-8" />,
      value: "50,000",
      unit: "tons",
      label: "Coal Replaced Annually",
      description: "Every ton of baled crop waste replaces coal in power plants",
      color: "text-yellow-600",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      value: "75,000",
      unit: "tons",
      label: "CO₂ Prevented Annually",
      description: "Reduced carbon emissions from preventing field burning",
      color: "text-green-600",
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      value: "2.3",
      unit: "million",
      label: "Trees Equivalent Saved",
      description: "Environmental impact equivalent to planting trees",
      color: "text-green-700",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "10,000+",
      unit: "farmers",
      label: "Farmers Empowered",
      description: "Helping farmers earn more while protecting environment",
      color: "text-blue-600",
    },
  ]

  const goals = [
    {
      title: "Zero Field Burning by 2030",
      description: "Eliminate crop residue burning in our operational areas",
      progress: 65,
      target: "100% by 2030",
    },
    {
      title: "1 Million Farmers Reached",
      description: "Educate and equip farmers with sustainable solutions",
      progress: 45,
      target: "1M by 2028",
    },
    {
      title: "Carbon Neutral Operations",
      description: "Achieve net-zero carbon footprint in manufacturing",
      progress: 78,
      target: "100% by 2026",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Clean Fields, Clean Skies
            </h1>
            <p className="text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              We dream of a future where no field is burned, no air is choked, and every farmer earns more by doing the
              right thing.
            </p>
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Azuka Baler Twine supports that dream by converting crop waste into valuable fuel, saving trees, replacing
              coal, and protecting clean air for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800 mb-6">
                Our Environmental Mission
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Our mission is to reduce open field burning and air pollution by promoting baling of crop waste. Every
                  roll of Azuka Baler Twine helps convert crop waste into fuel – saving trees, replacing coal, and
                  protecting clean air.
                </p>
                <p>
                  We believe that environmental responsibility and farmer prosperity go hand in hand. By providing
                  high-quality baler twine, we enable farmers to convert their crop residue into a valuable resource
                  instead of burning it.
                </p>
                <p>
                  This simple change creates a ripple effect: cleaner air, reduced carbon emissions, additional income
                  for farmers, and a sustainable future for agriculture.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/clean-fields-mission.png"
                alt="Clean fields and blue skies"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our Environmental Impact</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Measurable results from our commitment to sustainable agriculture
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`${stat.color} mx-auto mb-4`}>{stat.icon}</div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">
                      {stat.value}
                      <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>
                    </div>
                    <div className="font-semibold text-gray-800">{stat.label}</div>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                The Challenge We're Solving
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <Factory className="h-5 w-5" />
                    Air Pollution Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 text-sm">
                    Crop residue burning contributes to 40% of Delhi's air pollution during winter months, affecting
                    millions of people's health and quality of life.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <TreePine className="h-5 w-5" />
                    Resource Waste
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 text-sm">
                    23 million tons of crop residue burned annually in India - enough biomass to replace millions of
                    tons of coal in power generation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Lost Income
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700 text-sm">
                    Farmers lose potential income of ₹3,000-5,000 per acre by burning crop residue instead of converting
                    it into valuable biomass fuel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800 mb-8">
              Our Solution: Baling for a Better Future
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Quality Twine</h3>
                <p className="text-sm text-gray-600">
                  Provide farmers with reliable baler twine for efficient crop residue baling
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Bale Creation</h3>
                <p className="text-sm text-gray-600">Convert loose crop residue into compact, transportable bales</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Biomass Fuel</h3>
                <p className="text-sm text-gray-600">
                  Sell bales to power plants as clean biomass fuel alternative to coal
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Clean Air</h3>
                <p className="text-sm text-gray-600">
                  Eliminate field burning, reduce pollution, and create additional farmer income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Progress */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Our 2030 Goals</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Ambitious targets to create lasting environmental and social impact
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {goals.map((goal, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-blue-800">{goal.title}</CardTitle>
                      <CardDescription>{goal.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{goal.progress}%</div>
                      <div className="text-sm text-gray-500">{goal.target}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={goal.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Every farmer who chooses Azuka Baler Twine becomes a partner in our mission for cleaner air and sustainable
            agriculture. Together, we can create a better future.
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="font-semibold text-lg mb-2">For Farmers</h3>
                <p className="text-green-100 text-sm">
                  Earn ₹3,000-5,000 extra per acre by baling instead of burning crop residue
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-red-300" />
                <h3 className="font-semibold text-lg mb-2">For Communities</h3>
                <p className="text-green-100 text-sm">
                  Breathe cleaner air and enjoy healthier living conditions for your family
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold text-lg mb-2">For Planet</h3>
                <p className="text-green-100 text-sm">Contribute to global climate goals and sustainable development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
