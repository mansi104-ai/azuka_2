import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Best Practices for Hay Storage: Preventing Moisture and Fire Risks",
      excerpt: "Learn essential techniques for proper hay storage that will protect your investment and ensure safety on your farm.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Safety",
      image: "/hay-storage-barn-ventilation.png",
      slug: "hay-storage-best-practices"
    },
    {
      title: "Calculating Your Baler Twine Needs: A Complete Guide",
      excerpt: "Master the art of estimating twine requirements for different bale types and sizes to optimize your purchasing decisions.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Tips",
      image: "/placeholder.svg?height=200&width=300",
      slug: "calculating-baler-twine-needs"
    },
    {
      title: "How Hay Baling Helps Reduce Air Pollution",
      excerpt: "Discover the environmental benefits of proper hay baling and how it contributes to cleaner air in agricultural communities.",
      author: "Mike Davis",
      date: "March 5, 2024",
      category: "Environment",
      image: "/placeholder.svg?height=200&width=300",
      slug: "hay-baling-reduces-pollution"
    },
    {
      title: "Square vs Round Bales: Which is Right for Your Operation?",
      excerpt: "Compare the advantages and disadvantages of different bale types to make the best choice for your farming needs.",
      author: "John Smith",
      date: "February 28, 2024",
      category: "Equipment",
      image: "/placeholder.svg?height=200&width=300",
      slug: "square-vs-round-bales"
    },
    {
      title: "Seasonal Maintenance Tips for Your Baler",
      excerpt: "Keep your baler running smoothly with our comprehensive maintenance checklist for each season.",
      author: "Sarah Johnson",
      date: "February 20, 2024",
      category: "Maintenance",
      image: "/placeholder.svg?height=200&width=300",
      slug: "seasonal-baler-maintenance"
    },
    {
      title: "Understanding Twine Strength and Quality Specifications",
      excerpt: "Learn what to look for in high-quality baler twine and how different specifications affect performance and value.",
      author: "Mike Davis",
      date: "February 15, 2024",
      category: "Quality",
      image: "/placeholder.svg?height=200&width=300",
      slug: "twine-strength-specifications"
    }
  ]

  const categories = ["All", "Safety", "Tips", "Environment", "Equipment", "Maintenance", "Quality"]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Blog & Learning Center
            </h1>
            <p className="text-xl text-blue-100">
              Expert insights, tips, and best practices for modern farming operations
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest farming tips, product updates, and industry insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
