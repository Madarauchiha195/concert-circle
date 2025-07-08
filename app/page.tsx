"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, ArrowRight, Play, Ticket, Menu } from "lucide-react"
import Beams from "@/components/Beams"
import Masonry from "@/components/Masonry"
import Stack from "@/components/Stack"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const testimonials = [
  {
    quote:
      "Concert Circle transformed how we organize our tours. The platform is intuitive and the support is incredible. We've been able to reach new audiences and create unforgettable experiences.",
    name: "Sarah Johnson",
    title: "Indie Artist & Performer",
  },
  {
    quote:
      "Best concert discovery platform! I've found so many amazing local artists through Concert Circle. The user experience is seamless and the variety of events is outstanding.",
    name: "Mike Chen",
    title: "Music Enthusiast",
  },
  {
    quote:
      "The gig planning tools are game-changing. We organized our biggest festival yet with their platform. Everything from ticketing to artist management was handled perfectly.",
    name: "Alex Rivera",
    title: "Event Organizer",
  },
  {
    quote:
      "As a venue owner, Concert Circle has revolutionized how we book and manage events. The analytics and booking system have increased our revenue by 40%.",
    name: "Emma Thompson",
    title: "Venue Manager",
  },
  {
    quote:
      "The live streaming features during the pandemic kept our music alive. Now we use it to reach global audiences for every show. Absolutely essential for modern artists.",
    name: "David Rodriguez",
    title: "Band Leader",
  },
  {
    quote:
      "Concert Circle's community features helped me connect with fellow musicians and collaborate on amazing projects. It's more than just a booking platform.",
    name: "Jessica Martinez",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "The mobile app is fantastic! I can discover new concerts, buy tickets, and even live stream events on the go. Perfect for music lovers like me.",
    name: "Ryan Thompson",
    title: "Concert Enthusiast",
  },
  {
    quote:
      "From small intimate gigs to massive festivals, Concert Circle handles everything seamlessly. The customer support is top-notch too.",
    name: "Amanda Foster",
    title: "Event Coordinator",
  },
  {
    quote:
      "The analytics dashboard gives us incredible insights into our audience. We've been able to optimize our performances and grow our fanbase significantly.",
    name: "Marcus Williams",
    title: "DJ & Producer",
  },
  {
    quote:
      "Concert Circle made it possible for us to reach international audiences through their live streaming platform. Game changer for independent artists!",
    name: "Luna Park",
    title: "Indie Band",
  },
]

const navItems = [
  { label: "Home", href: "/" },
  { label: "Concert", href: "/concerts" },
  { label: "Gig", href: "/gig-plan" },
  { label: "Artists", href: "/artists" },
  { label: "Festivals", href: "/festivals" },
]

export default function LandingPage() {
  const concertCards = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=500&auto=format",
      title: "Summer Music Festival",
      date: "July 15, 2024",
      venue: "Central Park, NYC",
    },
    {
      id: 2,
      img: "/images/maroon5.png",
      title: "Maroon 5 Live",
      date: "August 20, 2024",
      venue: "Madison Square Garden",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500&auto=format",
      title: "Jazz Under Stars",
      date: "September 5, 2024",
      venue: "Blue Note Club",
    },
    {
      id: 4,
      img: "https://clubbookers.com/wp-content/uploads/2023/01/E11even.jpg",
      title: "Electronic Nights",
      date: "October 12, 2024",
      venue: "Warehouse District",
    },
  ]

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
        {/* Navigation - Clean and Simple */}
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

              {/* Mobile - simple icon (no slide-out menu) */}
              <Button
                variant="ghost"
                size="sm"
                aria-label="Menu"
                className="md:hidden text-white hover:bg-gray-800 p-2"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black text-white leading-tight">
                    LET'S JOIN
                    <br />
                    CONCERT OF THE
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      BIGGEST BAND
                    </span>
                    <br />
                    <span className="text-purple-400">IN THE WORLD</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
                    The latest concert ticket ordering platform that is easy to reach, fast, and at low prices. Find
                    your favorite band, order tickets now.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/concerts">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg text-base lg:text-lg px-6 lg:px-8 w-full sm:w-auto"
                    >
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Book Now
                    </Button>
                  </Link>
                  <Link href="/concerts">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800 text-base lg:text-lg px-6 lg:px-8 bg-transparent w-full sm:w-auto"
                    >
                      See All Events
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Artist Photos Grid - Smaller for Mobile */}
              <div className="relative mt-8 lg:mt-0">
                <Masonry
                  items={[
                    {
                      id: "1",
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBQgchSKq-tGG0rBEjP_-N4K-AHJ-NwPh7paNhsmdb8_C_f_pEZGy85M1_-r8b8PzDtSXKdzuaPNnXJzAy5SYnHUW6XjzjF1na1_IXG4Z",
                      colorImg:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBQgchSKq-tGG0rBEjP_-N4K-AHJ-NwPh7paNhsmdb8_C_f_pEZGy85M1_-r8b8PzDtSXKdzuaPNnXJzAy5SYnHUW6XjzjF1na1_IXG4Z",
                      url: "/artists/coldplay",
                      height: 400,
                      artist: "Coldplay",
                    },
                    {
                      id: "2",
                      img: "/images/maroon5.png",
                      colorImg: "/images/maroon5.png",
                      url: "/artists/maroon5",
                      height: 320,
                      artist: "Maroon 5",
                    },
                    {
                      id: "3",
                      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzzGd9WCuPYxRKEvMTyqZKUL90LiVfmC2FScBJ4a3W6khCDhub0kKRifnHLTHe3qaUTsMydKQbl0SSF1OiO3Y1pTDGADvA8gKSHl0jZIhLWQ",
                      colorImg:
                        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzzGd9WCuPYxRKEvMTyqZKUL90LiVfmC2FScBJ4a3W6khCDhub0kKRifnHLTHe3qaUTsMydKQbl0SSF1OiO3Y1pTDGADvA8gKSHl0jZIhLWQ",
                      url: "/artists/onedirection",
                      height: 480,
                      artist: "One Direction",
                    },
                    {
                      id: "4",
                      img: "https://static-cdn.toi-media.com/www/uploads/2023/08/WhatsApp-Image-2023-08-29-at-23.28.39.jpeg",
                      colorImg:
                        "https://static-cdn.toi-media.com/www/uploads/2023/08/WhatsApp-Image-2023-08-29-at-23.28.39.jpeg",
                      url: "/artists/imaginedragons",
                      height: 350,
                      artist: "Imagine Dragons",
                    },
                    {
                      id: "5",
                      img: "https://images.ecestaticos.com/eErd_7Gk1RL6KukNABbY5Vf_hwI=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbaa%2F9ae%2F1f4%2Fbaa9ae1f467ad37e775b1c404d2f0e9e.jpg",
                      colorImg:
                        "https://images.ecestaticos.com/eErd_7Gk1RL6KukNABbY5Vf_hwI=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbaa%2F9ae%2F1f4%2Fbaa9ae1f467ad37e775b1c404d2f0e9e.jpg",
                      url: "/artists/edsheeran",
                      height: 420,
                      artist: "Ed Sheeran",
                    },
                    {
                      id: "6",
                      img: "https://static.toiimg.com/thumb/imgsize-23456,msid-92037952,width-600,resizemode-4/92037952.jpg",
                      colorImg:
                        "https://static.toiimg.com/thumb/imgsize-23456,msid-92037952,width-600,resizemode-4/92037952.jpg",
                      url: "/artists/arijitsingh",
                      height: 380,
                      artist: "Arijit Singh",
                    },
                    {
                      id: "7",
                      img: "https://assets.vogue.in/photos/66e40db0b4d351b26c9c1390/3:4/w_2560%2Cc_limit/GettyImages-1484340653.jpg",
                      colorImg:
                        "https://assets.vogue.in/photos/66e40db0b4d351b26c9c1390/3:4/w_2560%2Cc_limit/GettyImages-1484340653.jpg",
                      url: "/artists/diljitdosanjh",
                      height: 380,
                      artist: "Diljit Dosanjh",
                    },
                    {
                      id: "8",
                      img: "https://yt3.googleusercontent.com/hXT_E7EUeCD27ImQiYQHMJ5L068w2CpnfFg9VMG_Gq_1gV2iFuZoNLgqnlnphFafNGSiZmpWIQ=s900-c-k-c0x00ffffff-no-rj",
                      colorImg:
                        "https://yt3.googleusercontent.com/hXT_E7EUeCD27ImQiYQHMJ5L068w2CpnfFg9VMG_Gq_1gV2iFuZoNLgqnlnphFafNGSiZmpWIQ=s900-c-k-c0x00ffffff-no-rj",
                      url: "/artists/yoyohoneysingh",
                      height: 380,
                      artist: "Yo Yo Honey Singh",
                    },
                  ]}
                  ease="power3.out"
                  duration={0.6}
                  stagger={0.05}
                  animateFrom="bottom"
                  scaleOnHover={true}
                  hoverScale={0.98}
                  blurToFocus={true}
                  colorShiftOnHover={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section with Stack - Mobile Responsive */}
        <section className="py-12 lg:py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-12 gap-4">
              <h2 className="text-3xl sm:text-3xl lg:text-5xl font-black text-white">SCHEDULE OF THIS YEAR</h2>
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-sm lg:text-base">
                Show All
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Stack Component */}
              <div className="flex justify-center order-2 lg:order-1">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 500, height: 400 }}
                  cardsData={concertCards}
                  animationConfig={{ stiffness: 260, damping: 20 }}
                />
              </div>

              {/* Event List - Mobile Responsive */}
              <div className="space-y-3 lg:space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-3 lg:space-x-6 p-3 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl metallic-card">
                  <div className="text-center min-w-[40px] lg:min-w-[60px]">
                    <div className="text-lg lg:text-2xl font-bold text-white">15</div>
                    <div className="text-xs lg:text-sm text-gray-400">DEC</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm lg:text-xl font-bold text-white mb-1 truncate">When We Were Young</h3>
                    <p className="text-xs lg:text-base text-gray-400 truncate">Wembley Stadium, UK</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 min-w-[60px] lg:min-w-[80px]"
                  >
                    <Ticket className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                    <span className="hidden sm:inline">Book</span>
                  </Button>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-6 p-3 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl metallic-card">
                  <div className="text-center min-w-[40px] lg:min-w-[60px]">
                    <div className="text-lg lg:text-2xl font-bold text-white">10</div>
                    <div className="text-xs lg:text-sm text-gray-400">MAY</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm lg:text-xl font-bold text-white mb-1 truncate">Summer Night Festival</h3>
                    <p className="text-xs lg:text-base text-gray-400 truncate">Rio de Janeiro, BRA</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 min-w-[60px] lg:min-w-[80px]"
                  >
                    <Ticket className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                    <span className="hidden sm:inline">Book</span>
                  </Button>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-6 p-3 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-600/30 shadow-2xl metallic-card">
                  <div className="text-center min-w-[40px] lg:min-w-[60px]">
                    <div className="text-lg lg:text-2xl font-bold text-white">22</div>
                    <div className="text-xs lg:text-sm text-gray-400">JUL</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm lg:text-xl font-bold text-white mb-1 truncate">Rock Revolution</h3>
                    <p className="text-xs lg:text-base text-gray-400 truncate">Los Angeles, USA</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 min-w-[60px] lg:min-w-[80px]"
                  >
                    <Ticket className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                    <span className="hidden sm:inline">Book</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section - Metallic Cards */}
        <section className="py-12 lg:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 lg:mb-6">WHAT WE DO</h2>
              <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Your complete music experience platform. From discovering new artists to organizing massive concerts.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Event Organization</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Plan and organize concerts, festivals, and live music events with our comprehensive management tools.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Artist Connection</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Connect talented artists with eager audiences and create meaningful musical experiences together.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <Ticket className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Ticket Sales</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Seamless ticket purchasing experience with secure payments and instant confirmations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Concert Circle Section - Metallic Cards */}
        <section className="py-12 lg:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 lg:mb-6">WHY CONCERT CIRCLE</h2>
              <p className="text-base lg:text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what makes us the best choice for artists, fans, and event organizers.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Fast & Easy Access</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Instantly discover, book, and manage events with a seamless, user-friendly platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <Play className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Live Streaming</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Enjoy high-quality live streams of concerts and events from anywhere in the world.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-transparent via-gray-800/30 to-transparent backdrop-blur-xl border-gray-600/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group metallic-card">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg metallic-shine">
                    <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold text-white mb-2 md:mb-3 lg:mb-4">Community & Support</h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-300 leading-relaxed">
                    Join a vibrant community with 24/7 support for artists, fans, and organizers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section with More Testimonials and Proper Hover Pause */}
        <section className="py-12 lg:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 lg:mb-6">
                WHAT ARTISTS & FANS SAY
              </h2>
              <p className="text-base lg:text-xl text-gray-300 max-w-2xl mx-auto">
                Hear from the artists, fans, and organizers who make Concert Circle their go-to platform.
              </p>
            </div>
            <div className="relative">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="py-4 lg:py-8"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 lg:mb-6">
              READY TO ROCK THE MUSIC WORLD?
            </h2>
            <p className="text-base lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Join thousands of artists and music lovers who are already creating amazing experiences with Concert
              Circle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/concerts">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg text-base lg:text-lg px-6 lg:px-8 w-full sm:w-auto"
                >
                  Explore Concerts
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/gig-plan">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 lg:text-lg px-6 lg:px-8 bg-transparent w-full sm:w-auto"
                >
                  Plan Your Event
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 lg:py-16 px-4 bg-black border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center"></div>
                  <span className="text-lg lg:text-xl font-bold text-white">Concert Circle</span>
                </div>
                <p className="text-sm lg:text-base text-gray-400 mb-4">
                  Connecting artists and audiences through unforgettable live music experiences.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs lg:text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></span>
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs lg:text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></span>
                  </div>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white text-xs lg:text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Explore</h3>
                <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                  <li>
                    <Link href="/concerts" className="hover:text-white transition-colors">
                      Live Streams
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-white transition-colors">
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/bundles" className="hover:text-white transition-colors">
                      Bundle Offers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">About Us</h3>
                <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-white transition-colors">
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/bundles" className="hover:text-white transition-colors">
                      Bundle Offers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Help</h3>
                <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="hover:text-white transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="hover:text-white transition-colors">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/language" className="hover:text-white transition-colors">
                      Language
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs lg:text-sm">© 2024 Concert Circle. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 lg:space-x-6">
                <Link href="/privacy" className="text-gray-500 hover:text-white text-xs lg:text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-white text-xs lg:text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-500 hover:text-white text-xs lg:text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
