"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText, Search, MessageSquare, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "eb2-niw",
    icon: FileText,
    title: "EB-2 NIW Drafting Support",
    shortDesc: "National Interest Waiver Experts",
    description:
      "Comprehensive assistance in preparing your National Interest Waiver petition. We help articulate your proposed endeavor, demonstrate its national importance, and establish why you are well-positioned to advance it.",
    features: [
      "Proposed endeavor development",
      "National importance analysis",
      "Qualification assessment",
      "Evidence organization",
      "Complete petition drafting",
    ],
    image: "/eb2-niw-visa-guide-document-with-professional-sett.jpg",
    price: "From $2,500",
  },
  {
    id: "eb1a",
    icon: Award,
    title: "EB-1A Drafting Support",
    shortDesc: "Extraordinary Ability Visa",
    description:
      "Expert support for Extraordinary Ability visa applications. We strategically organize and present your achievements to meet the rigorous USCIS criteria for this prestigious visa category.",
    features: [
      "Criteria analysis & selection",
      "Evidence compilation",
      "Achievement documentation",
      "Reference letter drafting",
      "Petition preparation",
    ],
    image: "/eb1a-visa-guide-document-with-american-flag-and-pa.jpg",
    price: "From $3,000",
  },
  {
    id: "review",
    icon: Search,
    title: "Petition Review Services",
    shortDesc: "Expert Analysis & Feedback",
    description:
      "Get expert eyes on your petition before submission. Our review service provides detailed feedback on your materials, identifying strengths and areas for improvement.",
    features: [
      "Comprehensive document review",
      "Strategic recommendations",
      "USCIS compliance check",
      "Evidence gap analysis",
      "Detailed improvement plan",
    ],
    image: "/man.jpg",
    price: "From $500",
  },
  {
    id: "consultation",
    icon: MessageSquare,
    title: "Strategy Consultations",
    shortDesc: "Personalized Expert Guidance",
    description:
      "Book personalized consultation sessions with our experts to evaluate your profile, discuss options, and develop a winning strategy for your immigration case.",
    features: ["Profile evaluation", "Pathway recommendation", "Timeline planning", "Evidence strategy", "Q&A session"],
    image: "/hands.jpg",
    price: "$200/hour",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id)
  const active = services.find((s) => s.id === activeService)!

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-up delay-100">
            Immigration Services
            <span className="block text-primary">Made Smarter</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
            The one-stop gateway to fulfill your U.S. immigration dreams. Our services are designed to guide your
            process with ease.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeService === service.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card hover:bg-muted text-foreground/70 hover:text-foreground border border-border",
              )}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={active.image || "/placeholder.svg"}
                alt={active.title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Price Tag */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-foreground px-6 py-4 rounded-2xl shadow-xl">
              <span className="text-sm font-medium opacity-80">Starting</span>
              <p className="text-2xl font-bold">{active.price}</p>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <active.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="text-secondary font-medium text-sm">{active.shortDesc}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold">{active.title}</h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{active.description}</p>

            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-foreground">What's Included:</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2 bg-transparent">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
