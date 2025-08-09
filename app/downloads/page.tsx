"use client"

import { Download, FileText, ImageIcon, Video, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DownloadsPage() {
  const downloads = [
    {
      category: "Product Catalogs",
      items: [
        {
          title: "Complete Product Catalog 2024",
          description: "Comprehensive catalog featuring all Azuka products with specifications",
          type: "PDF",
          size: "12.5 MB",
          icon: <BookOpen className="h-5 w-5" />,
          popular: true,
        },
        {
          title: "Azuka RUFFKNOT Brochure",
          description: "Detailed brochure for our bestselling RUFFKNOT series",
          type: "PDF",
          size: "3.2 MB",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "MaxKnot Technical Specifications",
          description: "Technical specs and performance data for MaxKnot twine",
          type: "PDF",
          size: "1.8 MB",
          icon: <FileText className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Technical Guides",
      items: [
        {
          title: "Baler Twine Selection Guide",
          description: "How to choose the right twine for your baling operations",
          type: "PDF",
          size: "5.4 MB",
          icon: <BookOpen className="h-5 w-5" />,
          popular: true,
        },
        {
          title: "Hay Storage Best Practices",
          description: "Expert guide to prevent fire risks and maintain hay quality",
          type: "PDF",
          size: "8.7 MB",
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          title: "Baler Maintenance Checklist",
          description: "Seasonal maintenance guide for optimal baler performance",
          type: "PDF",
          size: "2.1 MB",
          icon: <FileText className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Certificates & Quality",
      items: [
        {
          title: "ISO 9001:2015 Certificate",
          description: "Quality management system certification",
          type: "PDF",
          size: "1.2 MB",
          icon: <Award className="h-5 w-5" />,
        },
        {
          title: "Export Quality Certificate",
          description: "Government of India export quality certification",
          type: "PDF",
          size: "0.8 MB",
          icon: <Award className="h-5 w-5" />,
        },
        {
          title: "Test Reports & Analysis",
          description: "Third-party quality test reports and material analysis",
          type: "PDF",
          size: "4.3 MB",
          icon: <FileText className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Marketing Materials",
      items: [
        {
          title: "High-Resolution Product Images",
          description: "Professional product photos for marketing and presentations",
          type: "ZIP",
          size: "45.2 MB",
          icon: <ImageIcon className="h-5 w-5" />,
        },
        {
          title: "Company Logo Pack",
          description: "Azuka Agri logos in various formats and resolutions",
          type: "ZIP",
          size: "8.9 MB",
          icon: <ImageIcon className="h-5 w-5" />,
        },
        {
          title: "Product Demo Videos",
          description: "Demonstration videos showing product performance",
          type: "ZIP",
          size: "156 MB",
          icon: <Video className="h-5 w-5" />,
        },
      ],
    },
    {
      category: "Safety & Environment",
      items: [
        {
          title: "Safety Data Sheets (SDS)",
          description: "Complete safety information for all products",
          type: "PDF",
          size: "6.7 MB",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "Environmental Impact Report",
          description: "Our contribution to reducing air pollution and carbon footprint",
          type: "PDF",
          size: "11.3 MB",
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          title: "Sustainability Guidelines",
          description: "Best practices for sustainable farming with our products",
          type: "PDF",
          size: "4.8 MB",
          icon: <BookOpen className="h-5 w-5" />,
        },
      ],
    },
  ]

  const handleDownload = (title: string) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${title}`)
    alert(`Download started: ${title}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Downloads & Resources</h1>
            <p className="text-xl text-blue-100">
              Access product catalogs, technical guides, certificates, and marketing materials
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            {downloads.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">
                  {category.category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow relative">
                      {item.popular && (
                        <Badge className="absolute top-4 right-4 bg-orange-500 text-white">Popular</Badge>
                      )}
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">{item.icon}</div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-blue-800 line-clamp-2">{item.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                              <span className="text-xs text-gray-500">{item.size}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-2">{item.description}</CardDescription>
                        <Button
                          onClick={() => handleDownload(item.title)}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Quick Access</h2>
            <p className="text-gray-600 mt-4">Most requested downloads for immediate access</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDownload("Complete Product Catalog 2024")}
            >
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Product Catalog</h3>
                <p className="text-sm text-gray-600">Complete 2024 catalog</p>
              </CardContent>
            </Card>
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDownload("Baler Twine Selection Guide")}
            >
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Selection Guide</h3>
                <p className="text-sm text-gray-600">Choose the right twine</p>
              </CardContent>
            </Card>
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDownload("ISO 9001:2015 Certificate")}
            >
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Certificates</h3>
                <p className="text-sm text-gray-600">Quality certifications</p>
              </CardContent>
            </Card>
            <Card
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDownload("High-Resolution Product Images")}
            >
              <CardContent className="pt-6">
                <ImageIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Product Images</h3>
                <p className="text-sm text-gray-600">High-res photos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Custom Materials */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Need Custom Materials?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us for custom brochures, technical specifications, or marketing
            materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 flex-1">Contact Sales Team</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 flex-1 bg-transparent"
            >
              Request Custom Material
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
