"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is 101Migrate a law firm?",
    answer:
      "No, 101Migrate is not a law firm and we do not provide legal advice. We offer educational, strategic, and drafting support services. Clients are responsible for filing petitions independently or through a licensed U.S. immigration attorney.",
  },
  {
    question: "What is the difference between EB-2 NIW and EB-1A?",
    answer:
      "EB-2 NIW (National Interest Waiver) is for professionals with advanced degrees or exceptional ability whose work benefits the U.S. national interest. EB-1A is for individuals with extraordinary ability in sciences, arts, education, business, or athletics, requiring a higher standard of evidence. Both allow self-petition without employer sponsorship.",
  },
  {
    question: "How long does the petition process typically take?",
    answer:
      "Timeline varies based on individual circumstances, USCIS processing times, and whether premium processing is used. Our support process typically takes 4-8 weeks to prepare materials, while USCIS processing can range from a few weeks (premium) to several months (regular processing).",
  },
  {
    question: "Do I need a lawyer if I use your services?",
    answer:
      "While our services help prepare comprehensive petition materials, we recommend consulting with a licensed immigration attorney for legal advice and final review. Some clients file independently (self-petition), while others work with attorneys using our prepared materials.",
  },
  {
    question: "What if my petition receives a Request for Evidence (RFE)?",
    answer:
      "We offer RFE response support services. Our team can help analyze the RFE, develop a response strategy, and draft additional documentation to address USCIS concerns. Many RFEs are successfully resolved with proper response.",
  },
  {
    question: "How do I know if I qualify for EB-2 NIW or EB-1A?",
    answer:
      "We recommend starting with a consultation session where we evaluate your profile against USCIS criteria. Factors include your education, work experience, achievements, publications, awards, and the nature of your proposed work in the U.S.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Frequently Asked
              <span className="text-primary block">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our services and the employment-based immigration process.
            </p>
            <p className="text-muted-foreground">
              Have a question not answered here?{" "}
              <a href="#contact" className="text-secondary hover:underline font-medium">
                Contact us
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card rounded-xl border border-border overflow-hidden transition-all duration-300",
                  openIndex === index && "shadow-lg",
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      openIndex === index ? "bg-primary text-primary-foreground" : "bg-muted",
                    )}
                  >
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96" : "max-h-0",
                  )}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
