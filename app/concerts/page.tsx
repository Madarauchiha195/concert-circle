"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Music, Search, Filter, Heart, Share2, ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Beams from "@/components/Beams"

const concerts = [
  {
    id: 1,
    title: "BRING ME THE HORIZON",
    artist: "Live Concert Experience",
    date: "2024-02-15",
    time: "19:00",
    venue: "Madison Square Garden",
    location: "New York, NY",
    price: "₹89000",
    category: "Rock",
    image: "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2019/10/BMTH-website-asset-2019-sq-1024x1024.jpg?height=300&width=400",
    status: "Available",
  },
  {
    id: 2,
    title: "MAROON 5",
    artist: "World Tour 2024",
    date: "2024-02-20",
    time: "20:30",
    venue: "The Forum",
    location: "Los Angeles, CA",
    price: "₹12000",
    category: "Pop",
    image: "https://media.npr.org/assets/music/news/2010/09/maroon-5af6f2c1145368cf09ec543767a4db98644a297f.jpg?height=300&width=400",
    status: "Limited",
  },
  {
    id: 3,
    title: "YELLOW CLAW",
    artist: "Electronic Night",
    date: "2024-02-25",
    time: "22:00",
    venue: "Ultra Music Hall",
    location: "Miami, FL",
    price: "₹95000",
    category: "Electronic",
    image: "https://cdn-images.dzcdn.net/images/artist/daf1dafef6edc4a630259cecfbe9089b/1900x1900-000000-80-0-0.jpg?height=300&width=400",
    status: "Available",
  },
  {
    id: 4,
    title: "ARCTIC MONKEYS",
    artist: "Indie Vibes Tour",
    date: "2024-03-01",
    time: "19:30",
    venue: "The Fillmore",
    location: "San Francisco, CA",
    price: "₹25000",
    category: "Indie",
    image: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f?height=300&width=400",
    status: "Available",
  },
]

const navItems = [
  { label: "Home", href: "/" },
  { label: "Concerts", href: "/concerts" },
  { label: "Gig", href: "/gig-plan" },
  { label: "Artists", href: "/artists" },
  { label: "Festivals", href: "/festivals" },
]

export default function ConcertsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const filteredConcerts = concerts.filter((concert) => {
    const matchesSearch =
      concert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      concert.artist.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || concert.category.toLowerCase() === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation - Fixed Style */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center"></div>
                <span className="text-xl font-bold text-white">Concert Circle</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" className="text-white hover:bg-gray-800">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white">
                  Register
                </Button>
              </div>

              {/* Mobile Hamburger & Dropdown */}
              <div className="md:hidden relative" ref={mobileMenuRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Menu"
                  className="text-white hover:bg-gray-800 p-2"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                >
                  <Menu className="w-5 h-5" />
                </Button>
                {mobileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-lg bg-gray-900 border border-gray-700 shadow-lg z-50 animate-fade-in">
                    <div className="flex flex-col py-2">
                      {navItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="px-4 py-2 text-white hover:bg-gray-800 rounded transition-colors text-base"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-700 my-2" />
                      <Link href="/login" className="px-4 py-2 text-white hover:bg-gray-800 rounded transition-colors text-base" onClick={() => setMobileMenuOpen(false)}>
                        Login
                      </Link>
                      <Link href="/register" className="px-4 py-2 text-white hover:bg-gray-800 rounded transition-colors text-base" onClick={() => setMobileMenuOpen(false)}>
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                    FEEL THE BEAT
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      LIVE THE NIGHT
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Join us for an unforgettable night of music and energy. This is more than a concert
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8"
                  >
                    Booking Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 bg-transparent"
                  >
                    See All Events
                  </Button>
                </div>
              </div>

              {/* Concert Image */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl overflow-hidden">
                  <Image
                    src="https://i.ytimg.com/vi/NeZ-5NSYwuA/maxresdefault.jpg?height=400&width=600"
                    alt="Concert Crowd"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <div className="text-white">
                      <div className="text-sm opacity-80 mb-2">LIVE NOW</div>
                      <h3 className="text-2xl font-bold mb-2">Epic Concert Experience</h3>
                      <p className="text-sm opacity-80">Join thousands of music lovers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Event Highlight */}
        <section className="py-16 px-4 ">
          <div className="container mx-auto">
            <div className="bg-gray-900/25 rounded-3xl p-8 border border-gray-800">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-4">UPCOMING EVENT</Badge>
                  <h2 className="text-4xl font-black text-white mb-4">BRING ME THE HORIZON</h2>
                  <p className="text-gray-300 mb-6">
                    Join Bring Me The Horizon live for a night of pure energy, genre-bending sound, and unfiltered
                    emotion.
                  </p>
                  <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500">
                    CHECK EVENT
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl overflow-hidden">
                  <Image
                    src="https://assets.cntraveller.in/photos/678a3ec11918a57460ac16ff/16:9/w_1024%2Cc_limit/GettyImages-2184509045.jpg?height=300&width=500"
                    alt="Bring Me The Horizon"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search concerts or artists..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="pop">Pop</SelectItem>
                    <SelectItem value="electronic">Electronic</SelectItem>
                    <SelectItem value="indie">Indie</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500">
                  <Filter className="w-4 h-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* This Year's Gonna Be Fun */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-16">
              THIS YEAR'S
              <br />
              GONNA BE FUN.
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredConcerts.map((concert) => (
                <Card
                  key={concert.id}
                  className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
                      <Image
                        src={concert.image || "/placeholder.svg"}
                        alt={concert.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70">
                        <Heart className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70">
                        <Share2 className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                    {concert.status === "Sold Out" && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Badge className="bg-red-600/80 text-white">SOLD OUT</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {concert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">₹{Number(concert.price.replace(/[^\d]/g, "")).toLocaleString("en-IN")}</div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500"
                        disabled={concert.status === "Sold Out"}
                      >
                        CHECK EVENT ({concert.id})
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredConcerts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No concerts found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all concerts.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 bg-black border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  </div>
                  <span className="text-xl font-bold text-white">Concert Circle</span>
                </div>
                <p className="text-gray-400">
                  Concert Circle is your ultimate destination for live music experiences. Discover concerts, live
                  streams, and events near you.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/concerts" className="text-gray-400 hover:text-white transition-colors">
                      Live Streams
                    </Link>
                  </li>
                  <li>
                    <Link href="/gig-plan" className="text-gray-400 hover:text-white transition-colors">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/artists" className="text-gray-400 hover:text-white transition-colors">
                      Artists
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Subscribe</h4>
                <p className="text-gray-400 mb-4">Stay up to date with the latest concerts and events.</p>
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-l-md"
                  />
                  <Button className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500 rounded-r-md">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500">&copy; 2024 Concert Circle. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
