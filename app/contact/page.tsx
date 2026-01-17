"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Send, MapPin, Mail, Clock, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@101migrate.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    description: "Mon-Fri 9am-6pm EST",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "9:00 AM - 6:00 PM EST",
    description: "Monday to Friday",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Worldwide",
    description: "Remote consultations available",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Let's Start Your
              <span className="block text-gradient">Immigration Journey</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl">
              Book a consultation or send us a message. Our team of experts is ready to help you navigate your path to
              the American dream.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-lg font-medium text-primary">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" required placeholder="John" className="h-12 rounded-xl bg-muted/50" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" required placeholder="Doe" className="h-12 rounded-xl bg-muted/50" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-12 rounded-xl bg-muted/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        className="h-12 rounded-xl bg-muted/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-2">
                        Country *
                      </label>
                      <select
                        id="country"
                        required
                        className="w-full h-12 rounded-xl border border-input bg-muted/50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select your country</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="ghana">Ghana</option>
                        <option value="kenya">Kenya</option>
                        <option value="south-africa">South Africa</option>
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full h-12 rounded-xl border border-input bg-muted/50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="consultation">Strategy Consultation ($200)</option>
                        <option value="eb2-niw">EB-2 NIW Drafting Support</option>
                        <option value="eb1a">EB-1A Drafting Support</option>
                        <option value="review">Petition Review</option>
                        <option value="rfe">RFE Assistance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your background and how we can help..."
                        rows={5}
                        className="rounded-xl bg-muted/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right - Image & Community */}
            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/contact/consultation-meeting.jpg"
                  alt="Book a Consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-background mb-2">Book a Consultation</h3>
                  <p className="text-background/80 mb-4">Get personalized guidance from our expert team</p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-foreground rounded-full">
                    <Link href="/booking">
                      Schedule Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Community Section */}
              <div id="community" className="bg-muted/50 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Join Our Community</h3>
                <div className="space-y-4">
                  <a
                    href="https://t.me/101migrate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0088cc]/10 flex items-center justify-center">
                        <Send className="w-6 h-6 text-[#0088cc]" />
                      </div>
                      <div>
                        <p className="font-semibold">Telegram Group</p>
                        <p className="text-sm text-muted-foreground">300+ members</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp Group</p>
                        <p className="text-sm text-muted-foreground">Get instant support</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-foreground text-background rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-4">Prefer to Talk?</h3>
                <p className="text-background/70 mb-6">
                  Schedule a call with our team and let's discuss your immigration goals.
                </p>
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-foreground rounded-full group"
                >
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 w-5 h-5" />
                    Call +1 (234) 567-890
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
