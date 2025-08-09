"use client"

import Image from "next/image"
import { Star, Quote, MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Rajesh Kumar Singh",
      location: "Ludhiana, Punjab",
      farmSize: "50 acres",
      product: "Azuka RUFFKNOT",
      rating: 5,
      date: "March 2024",
      quote:
        "I've been using Azuka RUFFKNOT for 3 years now. Never had a single breakage during baling season. The twine is so strong that my John Deere baler runs smoothly without any issues. Best investment for my farming operation!",
      image: "/farmer-testimonial-1.png",
      verified: true,
    },
    {
      name: "Suresh Patil",
      location: "Pune, Maharashtra",
      farmSize: "25 acres",
      product: "Azuka MaxKnot",
      rating: 5,
      date: "February 2024",
      quote:
        "MaxKnot has transformed my baling operations. The consistent quality means I can focus on farming instead of worrying about twine failures. My bales are perfectly tied every time. Highly recommended to all farmers!",
      image: "/farmer-testimonial-2.png",
      verified: true,
    },
    {
      name: "Manjeet Singh Gill",
      location: "Bathinda, Punjab",
      farmSize: "100 acres",
      product: "Azuka XtremeBALE",
      rating: 5,
      date: "January 2024",
      quote:
        "XtremeBALE is perfect for our harsh weather conditions. Even in extreme heat and dust, the twine performs excellently. We've increased our baling efficiency by 30% since switching to Azuka.",
      image: "/placeholder-user.jpg",
      verified: true,
    },
    {
      name: "Ramesh Chandra",
      location: "Meerut, Uttar Pradesh",
      farmSize: "35 acres",
      product: "Azuka BaleMAX",
      rating: 5,
      date: "December 2023",
      quote:
        "BaleMAX is specifically designed for round baling and it shows. Perfect knot strength, no stretching issues, and works great with my New Holland baler. Customer service is also excellent.",
      image: "/placeholder-user.jpg",
      verified: true,
    },
    {
      name: "Prakash Reddy",
      location: "Hyderabad, Telangana",
      farmSize: "40 acres",
      product: "Azuka ReapTuff",
      rating: 5,
      date: "November 2023",
      quote:
        "ReapTuff is ideal for our cotton and paddy operations. The UV resistance is outstanding - stored bales maintain their integrity for months. Great value for money and reliable performance.",
      image: "/placeholder-user.jpg",
      verified: true,
    },
    {
      name: "Harpreet Kaur",
      location: "Amritsar, Punjab",
      farmSize: "60 acres",
      product: "Azuka AgriForce",
      rating: 5,
      date: "October 2023",
      quote:
        "AgriForce net wrap has revolutionized our silage making. Faster wrapping, better preservation, and the bales stay fresh longer. Our cattle love the quality of silage we're producing now.",
      image: "/placeholder-user.jpg",
      verified: true,
    },
  ]

  const stats = [
    { label: "Customer Satisfaction", value: "98.5%", description: "Based on 2,500+ reviews" },
    { label: "Repeat Customers", value: "94%", description: "Farmers who buy again" },
    { label: "Average Rating", value: "4.9/5", description: "Across all products" },
    { label: "Recommendation Rate", value: "96%", description: "Would recommend to others" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">What Farmers Say</h1>
            <p className="text-xl text-blue-100">
              Real stories from real farmers who trust Azuka for their baling needs
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Trusted by Thousands</h2>
            <p className="text-gray-600 mt-4">Our commitment to quality speaks through our customer satisfaction</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Customer Stories</h2>
            <p className="text-gray-600 mt-4">
              Hear directly from farmers across India about their experience with Azuka products
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {testimonial.verified && (
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white">✓ Verified</Badge>
                )}
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg text-blue-800">{testimonial.name}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-blue-600">{testimonial.product}</span>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-1" />
                    <p className="text-gray-600 italic pl-6 mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                    <span>{testimonial.farmSize} farm</span>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">Video Testimonials</h2>
            <p className="text-gray-600 mt-4">Watch farmers share their success stories with Azuka products</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative bg-gray-300 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      ▶
                    </div>
                    <p className="text-gray-600 text-sm">Video Testimonial {video}</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Farmer Success Story #{video}</h3>
                  <p className="text-sm text-gray-600">
                    Real farmer sharing their experience with Azuka baler twine and the impact on their operations.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Join Our Satisfied Customers</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the quality and reliability that thousands of farmers trust. Get your free sample today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold flex-1">
              Get Free Sample
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md flex-1">
              Share Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
