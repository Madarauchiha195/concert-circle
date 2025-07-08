"use client"

import type React from "react"

import { useState } from "react"
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

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-gray-800 p-2"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
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
        <footer className="py-16 px-4 bg-black border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Concert Circle</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Connecting artists and audiences through unforgettable live music experiences.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Explore</h3>
                <ul className="space-y-2 text-gray-400">
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
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">About Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Help</h3>
                <ul className="space-y-2 text-gray-400">
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
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">© 2024 Concert Circle. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
