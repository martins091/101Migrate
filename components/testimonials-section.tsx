"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "101Migrate transformed my EB-2 NIW application. Their strategic approach and attention to detail resulted in an approval without any RFE. The team's expertise made all the difference in presenting my case effectively.",
    author: "Dr. Priya S.",
    role: "Research Scientist",
    country: "India",
    rating: 5,
  },
  {
    id: 2,
    content:
      "After struggling with my EB-1A petition for months, I found 101Migrate. Their thorough review identified gaps I hadn't noticed and their drafting support elevated my entire application. Approved in just 4 months!",
    author: "James L.",
    role: "Software Architect",
    country: "United Kingdom",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The consultation session alone was worth every penny. The team provided clarity on my pathway and a roadmap I could follow. Their ongoing support made the entire process manageable and less stressful.",
    author: "Dr. Maria G.",
    role: "Medical Researcher",
    country: "Brazil",
    rating: 5,
  },
  {
    id: 4,
    content:
      "As an entrepreneur, proving extraordinary ability was challenging. 101Migrate helped me frame my achievements in a compelling narrative. Their expertise in EB-1A criteria is unmatched.",
    author: "Chen W.",
    role: "Tech Entrepreneur",
    country: "China",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating],
  )

  const next = useCallback(() => {
    goToSlide((activeIndex + 1) % testimonials.length)
  }, [activeIndex, goToSlide])

  const prev = useCallback(() => {
    goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)
  }, [activeIndex, goToSlide])

  useEffect(() => {
    const interval = setInterval(next, 8000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      {/* Large Quote Icon */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Trusted by Professionals
            <span className="block text-secondary">Worldwide</span>
          </h2>

          <p className="text-lg text-background/70">
            Join hundreds of successful applicants who achieved their immigration goals with our expert support.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto text-center">

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
          </div>

          {/* Quote */}
          <div className="relative min-h-[200px] mb-10">
            {testimonials.map((t, index) => (
              <p
                key={t.id}
                className={cn(
                  "text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed transition-all duration-500 absolute w-full",
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none",
                )}
              >
                "{t.content}"
              </p>
            ))}
          </div>

          {/* Author Info */}
          <div className="mb-10">
            <p className="font-bold text-xl">{testimonials[activeIndex].author}</p>
            <p className="text-background/80">{testimonials[activeIndex].role}</p>
            <p className="text-secondary text-sm">{testimonials[activeIndex].country}</p>
          </div>

          {/* Dots + Arrows */}
          <div className="flex items-center justify-between border-t border-background/10 pt-8">

            {/* Dots */}
            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    index === activeIndex
                      ? "w-12 bg-secondary"
                      : "w-4 bg-background/30 hover:bg-background/50",
                  )}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
