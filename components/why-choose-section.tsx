"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, Shield, Eye, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Users,
    title: "You-Centric Approach",
    description: "Partnering with a team that treats you as a unique individual helps ease the burden of immigration.",
  },
  {
    icon: Shield,
    title: "Experienced Team",
    description:
      "Our seasoned immigration professionals have walked this path with countless dreamers and understand every challenge.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "Clear communication and guidance at every step of your immigration process with no hidden surprises.",
  },
  {
    icon: Award,
    title: "Real Success Stories",
    description:
      "Our clients' success stories aren't just wins—they're families united, careers launched, and dreams fulfilled.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Consultations" },
  { value: 300, suffix: "+", label: "Approved Cases" },
  { value: 20, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Success Rate" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/happy-immigrant-family-receiving-visa-approval-cel.jpg" alt="Success Story" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/professional-consultant-working-on-laptop-in-offic.jpg" alt="Expert Team" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image src="/diverse-group-of-professionals-celebrating-success.jpg" alt="Client Success" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/professional-immigration-consultant-meeting-with-c.jpg" alt="Consultation" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background rounded-2xl p-6 shadow-2xl grid grid-cols-4 gap-6 w-[calc(100%+2rem)] max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-background/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              We Ensure <span className="text-primary">Prompt Services</span> for Visa & Immigration
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Choosing 101Migrate means partnering with a team that understands both the legal and personal aspects of
              your immigration journey.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-5 p-5 rounded-2xl hover:bg-muted/50 transition-colors group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
