"use client"

import { useState } from "react"
import { Calculator, Info, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function CalculatorPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [formData, setFormData] = useState({
    baleType: "",
    baleSize: "",
    balesPerDay: "",
    workingDays: "",
    twineLength: "",
    safetyMargin: "10",
  })

  const [results, setResults] = useState<{
    totalBales: number
    twineNeeded: number
    spoolsNeeded: number
    estimatedCost: number
  } | null>(null)

  const baleTypes = {
    round: { name: "Round Bales", twinePerBale: 200 },
    square: { name: "Square Bales", twinePerBale: 150 },
    big: { name: "Big Square Bales", twinePerBale: 300 },
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateTwine = () => {
    const balesPerDay = Number.parseInt(formData.balesPerDay) || 0
    const workingDays = Number.parseInt(formData.workingDays) || 0
    const safetyMargin = Number.parseInt(formData.safetyMargin) || 10

    const totalBales = balesPerDay * workingDays
    const twinePerBale = baleTypes[formData.baleType as keyof typeof baleTypes]?.twinePerBale || 200
    const baseTwineNeeded = totalBales * twinePerBale
    const twineNeeded = baseTwineNeeded * (1 + safetyMargin / 100)

    // Assuming 2000m per spool and ₹450 per spool
    const spoolsNeeded = Math.ceil(twineNeeded / 2000)
    const estimatedCost = spoolsNeeded * 450

    setResults({
      totalBales,
      twineNeeded: Math.round(twineNeeded),
      spoolsNeeded,
      estimatedCost,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Baler Twine Calculator</h1>
            <p className="text-xl text-blue-100">
              Calculate exactly how much twine you need for your baling operations
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Twine Requirement Calculator
                </CardTitle>
                <CardDescription>Enter your baling details to get accurate twine requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bale-type">Bale Type *</Label>
                  <Select value={formData.baleType} onValueChange={(value) => handleInputChange("baleType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bale type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(baleTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          {type.name} ({type.twinePerBale}m per bale)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bales-per-day">Bales per Day *</Label>
                    <Input
                      id="bales-per-day"
                      type="number"
                      placeholder="e.g., 50"
                      value={formData.balesPerDay}
                      onChange={(e) => handleInputChange("balesPerDay", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="working-days">Working Days *</Label>
                    <Input
                      id="working-days"
                      type="number"
                      placeholder="e.g., 30"
                      value={formData.workingDays}
                      onChange={(e) => handleInputChange("workingDays", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="safety-margin">Safety Margin (%)</Label>
                  <Select
                    value={formData.safetyMargin}
                    onValueChange={(value) => handleInputChange("safetyMargin", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5% - Minimal extra</SelectItem>
                      <SelectItem value="10">10% - Recommended</SelectItem>
                      <SelectItem value="15">15% - Conservative</SelectItem>
                      <SelectItem value="20">20% - Maximum safety</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateTwine}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!formData.baleType || !formData.balesPerDay || !formData.workingDays}
                >
                  Calculate Twine Requirements
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-800">Your Twine Requirements</CardTitle>
                    <CardDescription>Based on your baling operation details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{results.totalBales}</div>
                        <div className="text-sm text-gray-600">Total Bales</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{results.twineNeeded.toLocaleString()}m</div>
                        <div className="text-sm text-gray-600">Twine Needed</div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{results.spoolsNeeded}</div>
                        <div className="text-sm text-gray-600">Spools Required</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">
                          ₹{results.estimatedCost.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Estimated Cost</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Download className="mr-2 h-4 w-4" />
                        Get Quote for This Requirement
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tips Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Pro Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-blue-100 text-blue-800 mt-0.5">1</Badge>
                    <p className="text-sm text-gray-600">
                      Always add 10-15% safety margin for unexpected breakage or extra bales
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-blue-100 text-blue-800 mt-0.5">2</Badge>
                    <p className="text-sm text-gray-600">
                      Store twine in dry conditions to maintain strength and prevent degradation
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-blue-100 text-blue-800 mt-0.5">3</Badge>
                    <p className="text-sm text-gray-600">
                      Check your baler's manual for specific twine length recommendations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-blue-100 text-blue-800 mt-0.5">4</Badge>
                    <p className="text-sm text-gray-600">
                      Buy in bulk during off-season for better pricing and availability
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Recommended Products</h2>
            <p className="text-gray-600 mt-4">Choose the right twine for your baling needs</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800">Azuka RUFFKNOT</CardTitle>
                <CardDescription>"Built to Bind, Engineered to Last"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Perfect for heavy-duty baling operations. Extra strength polypropylene construction.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Sample</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800">Azuka MaxKnot</CardTitle>
                <CardDescription>"Max Strength. Max Yields."</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Superior tensile strength for maximum yields. Consistent quality you can trust.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Sample</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-800">Azuka XtremeBALE</CardTitle>
                <CardDescription>"Tie the Toughest Bales"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  For extreme weather conditions. High knot strength and UV resistance.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Sample</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
