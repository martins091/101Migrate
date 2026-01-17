import { MessageSquare, FileSearch, Edit3, Send, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description:
      "Book a consultation to discuss your background, goals, and determine the best pathway for your situation.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Profile Assessment",
    description: "We analyze your qualifications, achievements, and evidence to develop a winning strategy.",
  },
  {
    number: "03",
    icon: Edit3,
    title: "Drafting & Preparation",
    description: "Our experts draft compelling petition materials that highlight your extraordinary qualifications.",
  },
  {
    number: "04",
    icon: Send,
    title: "Review & Refinement",
    description: "Thorough review and refinement of all materials to ensure the strongest possible presentation.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Submission Ready",
    description: "Receive your complete petition package ready for filing with USCIS or your immigration attorney.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            Your Journey in
            <span className="text-secondary"> 5 Simple Steps</span>
          </h2>
          <p className="text-lg text-background/70">
            We've streamlined the immigration support process to make your experience as smooth and stress-free as
            possible.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-all duration-300 h-full">
                  {/* Number */}
                  <div className="text-6xl font-serif font-bold text-secondary/20 mb-4">{step.number}</div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                      <div className="w-2 h-2 border-r-2 border-t-2 border-secondary rotate-45" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
