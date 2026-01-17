import { Target, Shield, Users, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies tailored to your unique profile and career achievements.",
  },
  {
    icon: Shield,
    title: "Compliance First",
    description: "All services designed with USCIS requirements and best practices in mind.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with deep expertise in employment-based immigration.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of helping professionals achieve their green card goals.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -skew-x-12 origin-top-right" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              About 101Migrate
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Your Trusted Partner in
              <span className="text-primary block">Immigration Success</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              101Migrate provides premium educational and strategic support services for professionals pursuing EB-2 NIW
              and EB-1A employment-based U.S. immigration pathways. We combine deep expertise with personalized
              attention to help you present the strongest possible case.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to demystify the immigration process and empower extraordinary individuals to achieve their
              American dream through strategic guidance, expert drafting support, and comprehensive petition
              preparation.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src="/professional-team-meeting-in-modern-office-with-ci.jpg" alt="101Migrate Team" className="w-full h-full object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold">300+</p>
                    <p className="text-muted-foreground text-sm">Successful Cases</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
