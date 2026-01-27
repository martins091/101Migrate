"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const heroSlides = [
  {
    id: 1,
    title: "Your Gateway to the",
    highlight: "American Dream",
    subtitle: "Expert EB-2 NIW & EB-1A Support",
    description:
      "Join 500+ African professionals who have successfully navigated their U.S. immigration journey with our strategic guidance and expert support.",
    image: "/african-professional-business-success.jpg",
    cta: "Start Your Journey",
  },
  {
    id: 2,
    title: "Strategic Immigration",
    highlight: "Made Simple",
    subtitle: "Comprehensive Petition Support",
    description:
      "From initial evaluation to petition submission, we provide end-to-end support that maximizes your chances of approval.",
    image: "/african-team-collaboration-meeting.jpg",
    cta: "Explore Services",
  },
  {
    id: 3,
    title: "Expert Guidance",
    highlight: "Every Step",
    subtitle: "Personalized Consultation",
    description:
      "Work directly with immigration experts who understand your unique profile and craft strategies tailored to your strengths.",
    image: "/african-consultant-client-meeting.jpg",
    cta: "Book Consultation",
  },
]

const trustIndicators = [
  { value: "500+", label: "Successful Cases" },
  { value: "10+", label: "Countries Served" }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 1000)
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-blob delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-background/5 rounded-full animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-background/5 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-background">
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 transition-all duration-700",
                currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
              </span>
              <span className="text-sm font-medium text-background/90">{heroSlides[currentSlide].subtitle}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
              <span
                className={cn(
                  "block transition-all duration-700 delay-100",
                  currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                {heroSlides[currentSlide].title}
              </span>
              <span
                className={cn(
                  "block mt-2 transition-all duration-700 delay-200",
                  currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
              >
                <span className="text-gradient">{heroSlides[currentSlide].highlight}</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={cn(
                "text-lg md:text-xl text-background/70 max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-300",
                currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row items-start gap-4 mb-12 transition-all duration-700 delay-400",
                currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-7 rounded-full text-lg font-medium shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group hover:scale-105"
              >
                <Link href="/booking">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="glass hover:bg-background/20 text-background px-8 py-7 rounded-full text-lg font-medium transition-all duration-300 group"
              >
                <Link href="/about">
                  <Play className="mr-2 w-5 h-5 fill-secondary text-secondary" />
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={cn(
                "flex flex-wrap gap-8 md:gap-12 transition-all duration-700 delay-500",
                currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{item.value}</div>
                  <div className="text-sm text-background/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Image Container */}
              <div
                className={cn(
                  "relative aspect-[4/5] rounded-3xl overflow-hidden transition-all duration-1000",
                  currentSlide >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-95",
                )}
              >
                <Image
                  src="/immigration/insung-yoon-3wyIGmq1Juw-unsplash.jpg"
                  // src="/african-professional-success-portrait.jpg"
                  alt="Success Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-background font-semibold">500+ Approved Cases</p>
                      <p className="text-background/70 text-sm">Across 10+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-background hover:bg-background/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-background/40 hover:bg-background/60",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-background hover:bg-background/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-background/60">
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 origin-center translate-x-8">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-background/60 to-transparent mt-4" />
      </div>
    </section>
  )
}
