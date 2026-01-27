"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
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
        image: "/testimonial-woman-scientist-professional-portrait.jpg",
        rating: 5,
    },
    {
        id: 2,
        content:
            "After struggling with my EB-1A petition for months, I found 101Migrate. Their thorough review identified gaps I hadn't noticed and their drafting support elevated my entire application. Approved in just 4 months!",
        author: "James L.",
        role: "Software Architect",
        country: "United Kingdom",
        image: "/testimonial-man-tech-professional-portrait.jpg",
        rating: 5,
    },
    {
        id: 3,
        content:
            "The consultation session alone was worth every penny. The team provided clarity on my pathway and a roadmap I could follow. Their ongoing support made the entire process manageable and less stressful.",
        author: "Dr. Maria G.",
        role: "Medical Researcher",
        country: "Brazil",
        image: "/testimonial-woman-doctor-professional-portrait.jpg",
        rating: 5,
    },
    {
        id: 4,
        content:
            "As an entrepreneur, proving extraordinary ability was challenging. 101Migrate helped me frame my achievements in a compelling narrative. Their expertise in EB-1A criteria is unmatched.",
        author: "Chen W.",
        role: "Tech Entrepreneur",
        country: "China",
        image: "/testimonial-man-entrepreneur-professional-portrait.jpg",
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
        <section id="testimonials" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
            </div>

            {/* Large Quote Mark */}
            <div className="absolute top-20 left-10 opacity-5">
                <Quote className="w-64 h-64" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Success Stories
          </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                        Trusted by Professionals
                        <span className="block text-secondary">Worldwide</span>
                    </h2>
                    <p className="text-lg md:text-xl text-background/70">
                        Join hundreds of successful applicants who achieved their immigration goals with our expert support.
                    </p>
                </div>

                {/* Testimonial Display */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

                        {/* Left - Image (COMMENTED OUT) */}
                        {/*
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105",
                    )}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="font-bold text-xl text-background">{testimonials[activeIndex].author}</p>
                  <p className="text-background/80">{testimonials[activeIndex].role}</p>
                  <p className="text-secondary text-sm">{testimonials[activeIndex].country}</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/30 rounded-3xl -z-10" />
            </div>
            */}

                        {/* Right - Content */}
                        <div className="lg:col-span-3">
                            <div className="relative">
                                <Quote className="w-16 h-16 text-primary mb-6" />

                                <div className="min-h-[200px]">
                                    {testimonials.map((testimonial, index) => (
                                        <p
                                            key={testimonial.id}
                                            className={cn(
                                                "text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed transition-all duration-500 absolute",
                                                index === activeIndex
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-4 pointer-events-none",
                                            )}
                                        >
                                            "{testimonial.content}"
                                        </p>
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-12 pt-8 border-t border-background/10">
                                    <div className="flex items-center gap-4">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={cn(
                                                    "h-1 rounded-full transition-all duration-500",
                                                    index === activeIndex ? "w-12 bg-secondary" : "w-4 bg-background/30 hover:bg-background/50",
                                                )}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={prev}
                                            className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                                            aria-label="Previous testimonial"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={next}
                                            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                                            aria-label="Next testimonial"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}










// "use client"
//
// import { useState, useEffect, useCallback } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
// import { cn } from "@/lib/utils"
//
// const testimonials = [
//   {
//     id: 1,
//     content:
//       "101Migrate transformed my EB-2 NIW application. Their strategic approach and attention to detail resulted in an approval without any RFE. The team's expertise made all the difference in presenting my case effectively.",
//     author: "Dr. Priya S.",
//     role: "Research Scientist",
//     country: "India",
//     image: "/testimonial-woman-scientist-professional-portrait.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     content:
//       "After struggling with my EB-1A petition for months, I found 101Migrate. Their thorough review identified gaps I hadn't noticed and their drafting support elevated my entire application. Approved in just 4 months!",
//     author: "James L.",
//     role: "Software Architect",
//     country: "United Kingdom",
//     image: "/testimonial-man-tech-professional-portrait.jpg",
//     rating: 5,
//   },
//   {
//     id: 3,
//     content:
//       "The consultation session alone was worth every penny. The team provided clarity on my pathway and a roadmap I could follow. Their ongoing support made the entire process manageable and less stressful.",
//     author: "Dr. Maria G.",
//     role: "Medical Researcher",
//     country: "Brazil",
//     image: "/testimonial-woman-doctor-professional-portrait.jpg",
//     rating: 5,
//   },
//   {
//     id: 4,
//     content:
//       "As an entrepreneur, proving extraordinary ability was challenging. 101Migrate helped me frame my achievements in a compelling narrative. Their expertise in EB-1A criteria is unmatched.",
//     author: "Chen W.",
//     role: "Tech Entrepreneur",
//     country: "China",
//     image: "/testimonial-man-entrepreneur-professional-portrait.jpg",
//     rating: 5,
//   },
// ]
//
// export function TestimonialsSection() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isAnimating, setIsAnimating] = useState(false)
//
//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isAnimating) return
//       setIsAnimating(true)
//       setActiveIndex(index)
//       setTimeout(() => setIsAnimating(false), 500)
//     },
//     [isAnimating],
//   )
//
//   const next = useCallback(() => {
//     goToSlide((activeIndex + 1) % testimonials.length)
//   }, [activeIndex, goToSlide])
//
//   const prev = useCallback(() => {
//     goToSlide((activeIndex - 1 + testimonials.length) % testimonials.length)
//   }, [activeIndex, goToSlide])
//
//   useEffect(() => {
//     const interval = setInterval(next, 8000)
//     return () => clearInterval(interval)
//   }, [next])
//
//   return (
//     <section id="testimonials" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
//       </div>
//
//       {/* Large Quote Mark */}
//       <div className="absolute top-20 left-10 opacity-5">
//         <Quote className="w-64 h-64" />
//       </div>
//
//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
//           <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
//             Success Stories
//           </span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
//             Trusted by Professionals
//             <span className="block text-secondary">Worldwide</span>
//           </h2>
//           <p className="text-lg md:text-xl text-background/70">
//             Join hundreds of successful applicants who achieved their immigration goals with our expert support.
//           </p>
//         </div>
//
//         {/* Testimonial Display */}
//         <div className="max-w-5xl mx-auto">
//           <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
//             {/* Left - Image */}
//             <div className="lg:col-span-2 relative">
//               <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
//                 {testimonials.map((testimonial, index) => (
//                   <div
//                     key={testimonial.id}
//                     className={cn(
//                       "absolute inset-0 transition-all duration-700",
//                       index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105",
//                     )}
//                   >
//                     <Image
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.author}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
//                   </div>
//                 ))}
//
//                 {/* Author Info Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center gap-1 mb-3">
//                     {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
//                     ))}
//                   </div>
//                   <p className="font-bold text-xl text-background">{testimonials[activeIndex].author}</p>
//                   <p className="text-background/80">{testimonials[activeIndex].role}</p>
//                   <p className="text-secondary text-sm">{testimonials[activeIndex].country}</p>
//                 </div>
//               </div>
//
//               {/* Decorative */}
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/30 rounded-3xl -z-10" />
//             </div>
//
//             {/* Right - Content */}
//             <div className="lg:col-span-3">
//               <div className="relative">
//                 <Quote className="w-16 h-16 text-primary mb-6" />
//
//                 <div className="min-h-[200px]">
//                   {testimonials.map((testimonial, index) => (
//                     <p
//                       key={testimonial.id}
//                       className={cn(
//                         "text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed transition-all duration-500 absolute",
//                         index === activeIndex
//                           ? "opacity-100 translate-y-0"
//                           : "opacity-0 translate-y-4 pointer-events-none",
//                       )}
//                     >
//                       "{testimonial.content}"
//                     </p>
//                   ))}
//                 </div>
//
//                 {/* Navigation */}
//                 <div className="flex items-center justify-between mt-12 pt-8 border-t border-background/10">
//                   <div className="flex items-center gap-4">
//                     {testimonials.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={cn(
//                           "h-1 rounded-full transition-all duration-500",
//                           index === activeIndex ? "w-12 bg-secondary" : "w-4 bg-background/30 hover:bg-background/50",
//                         )}
//                         aria-label={`Go to testimonial ${index + 1}`}
//                       />
//                     ))}
//                   </div>
//
//                   <div className="flex gap-3">
//                     <button
//                       onClick={prev}
//                       className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
//                       aria-label="Previous testimonial"
//                     >
//                       <ChevronLeft className="w-6 h-6" />
//                     </button>
//                     <button
//                       onClick={next}
//                       className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
//                       aria-label="Next testimonial"
//                     >
//                       <ChevronRight className="w-6 h-6" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
