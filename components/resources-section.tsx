"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const resources = [
  {
    id: 1,
    type: "Guide",
    icon: FileText,
    title: "EB-1A Visa Process Resource",
    description: "Complete guide to understanding and preparing your EB-1A petition with criteria breakdown.",
    image: "/eb1a-visa-guide-document-with-american-flag-and-pa.jpg",
    cta: "Request Access",
  },
  {
    id: 2,
    type: "Guide",
    icon: BookOpen,
    title: "Free EB2-NIW Visa Resource",
    description: "Comprehensive resource for National Interest Waiver applications and requirements.",
    image: "/eb2-niw-visa-guide-document-with-professional-sett.jpg",
    cta: "Request Access",
  },
  {
    id: 3,
    type: "Resource",
    icon: Download,
    title: "Free Green Card Resources",
    description: "Essential guides for understanding the green card process and requirements.",
    image: "/green-card-immigration-documents-with-us-passport-.jpg",
    cta: "Request Access",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Free Resources
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Request & Get Access
              <span className="block text-primary">to Our Free Resources</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Access our comprehensive collection of immigration guides and resources to help you understand the process
            better.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-secondary/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">{index + 1}</span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                  {resource.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <resource.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-secondary hover:text-foreground hover:border-secondary group/btn bg-transparent"
                >
                  <Link href="/resources">
                    {resource.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
