"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/modern-city-skyline-new-york-at-golden-hour-with-.jpg"
              alt="New York Skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                Free Consultation Available
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background leading-tight mb-6">
                Need Expert Guidance on U.S. Immigration Pathways?
              </h2>

              <p className="text-xl text-background/70 mb-10 max-w-2xl">
                Schedule a consultation today and let us help you build a compelling case that showcases your
                exceptional abilities and national interest.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 rounded-full text-lg font-medium group"
                >
                  <Link href="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-background/10 hover:bg-background/20 text-background border border-background/20 px-8 py-7 rounded-full text-lg font-medium group"
                >
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-background/10 rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-background/10 rounded-full" />
        </div>

        {/* Community Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* <a
            href="https://t.me/101migrate"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-colors">
                <Send className="w-6 h-6 text-[#0088cc]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Join Telegram Community</h3>
                <p className="text-muted-foreground text-sm">Connect with 300+ members</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
          </a> */}

          <a
            href="https://chat.whatsapp.com/JMGsctcfScp4vRURr8FiIN?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Join WhatsApp Group</h3>
                <p className="text-muted-foreground text-sm">Get instant updates & support</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  )
}
