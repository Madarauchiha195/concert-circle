"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Music, Calendar, IndianRupee, Users, Mic, CheckCircle, Menu } from "lucide-react"
import Beams from "@/components/Beams"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Live Streams", href: "/concerts" },
  { label: "Events", href: "/gig-plan" },
  { label: "Artists", href: "/artists" },
  { label: "Festivals", href: "/festivals" },
]

export default function GigPlanPage() {
  const [formData, setFormData] = useState({
    eventName: "",
    artist: "",
    date: "",
    venue: "",
    budget: "",
    preferences: {
      soundSystem: false,
      lighting: false,
      security: false,
      catering: false,
      photography: false,
      livestream: false,
    },
    description: "",
    expectedAttendees: "",
    contactEmail: "",
    contactPhone: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: checked,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/gig-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // formData should match your backend schema
    });
    if (response.ok) {
      setFormData({
        eventName: "",
        artist: "",
        date: "",
        venue: "",
        budget: "",
        preferences: {
          soundSystem: false,
          lighting: false,
          security: false,
          catering: false,
          photography: false,
          livestream: false,
        },
        description: "",
        expectedAttendees: "",
        contactEmail: "",
        contactPhone: "",
      });
      setIsSubmitted(true);
      // Success logic (e.g., show a success message)
    } else {
      // Error logic (e.g., show an error message)
    }
  }

  if (isSubmitted) {
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

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm max-w-md w-full text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Gig Plan Submitted!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for submitting your gig plan. Our team will review your request and get back to you within 24
                hours.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500"
                >
                  Submit Another Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Link href="/concerts">Browse Concerts</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                </div>
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
                  Sign Up
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

        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6">
              PLAN YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                PERFECT GIG
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your event vision and we'll help bring it to life. From intimate acoustic sets to massive
              festivals.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl font-black">
                    <Mic className="w-6 h-6 mr-3" />
                    EVENT DETAILS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="eventName" className="text-white font-semibold">
                        Event Name *
                      </Label>
                      <Input
                        id="eventName"
                        value={formData.eventName}
                        onChange={(e) => handleInputChange("eventName", e.target.value)}
                        placeholder="Enter your event name"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artist" className="text-white font-semibold">
                        Artist/Performer *
                      </Label>
                      <Input
                        id="artist"
                        value={formData.artist}
                        onChange={(e) => handleInputChange("artist", e.target.value)}
                        placeholder="Artist or band name"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white font-semibold">
                        Event Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue" className="text-white font-semibold">
                        Venue *
                      </Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) => handleInputChange("venue", e.target.value)}
                        placeholder="Venue name and location"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Budget and Capacity */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl font-black">
                    <IndianRupee className="w-6 h-6 mr-3" />
                    BUDGET & CAPACITY
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white font-semibold">
                        Budget Range *
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                          <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                          <SelectItem value="15k-50k">₹15,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹100,000</SelectItem>
                          <SelectItem value="over-100k">Over ₹100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expectedAttendees" className="text-white font-semibold">
                        Expected Attendees
                      </Label>
                      <Input
                        id="expectedAttendees"
                        value={formData.expectedAttendees}
                        onChange={(e) => handleInputChange("expectedAttendees", e.target.value)}
                        placeholder="Estimated number of attendees"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl font-black">
                    <Users className="w-6 h-6 mr-3" />
                    SERVICES & PREFERENCES
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries({
                      soundSystem: "Professional Sound System",
                      lighting: "Stage Lighting",
                      security: "Security Services",
                      catering: "Catering Services",
                      photography: "Event Photography",
                      livestream: "Live Streaming",
                    }).map(([key, label]) => (
                      <div key={key} className="flex items-center space-x-3">
                        <Checkbox
                          id={key}
                          checked={formData.preferences[key as keyof typeof formData.preferences]}
                          onCheckedChange={(checked) => handlePreferenceChange(key, checked as boolean)}
                          className="border-gray-600 data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-500"
                        />
                        <Label htmlFor={key} className="text-white font-medium">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-2xl font-black">
                    <Calendar className="w-6 h-6 mr-3" />
                    ADDITIONAL INFORMATION
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white font-semibold">
                      Event Description
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Tell us more about your event vision, special requirements, or any other details..."
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px] focus:border-gray-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail" className="text-white font-semibold">
                        Contact Email *
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                        placeholder="your@email.com"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone" className="text-white font-semibold">
                        Contact Phone
                      </Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 text-white border border-gray-500 shadow-lg text-xl px-16 py-4 font-black"
                >
                  SUBMIT GIG PLAN
                </Button>
                <p className="text-gray-400 text-sm mt-4">
                  Our team will review your submission and contact you within 24 hours.
                </p>
              </div>
            </form>
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
