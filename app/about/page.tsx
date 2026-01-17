import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Target, Heart, Globe, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our priority. We treat every case with the dedication it deserves.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Honest guidance and clear communication at every step of your journey.",
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Serving clients from 20+ countries with cultural sensitivity and understanding.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Consultant",
    image: "/team-member-woman-professional-headshot-corporate-.jpg",
    bio: "10+ years in immigration consulting with expertise in EB-1A and EB-2 NIW cases.",
  },
  {
    name: "Michael Chen",
    role: "Senior Immigration Strategist",
    image: "/team-member-man-professional-headshot-corporate-as.jpg",
    bio: "Former USCIS analyst with deep knowledge of petition evaluation criteria.",
  },
  {
    name: "Dr. Priya Patel",
    role: "Research & Documentation Lead",
    image: "/team-member-woman-professional-headshot-corporate-2.jpg",
    bio: "PhD holder specializing in crafting compelling narratives for academic professionals.",
  },
]

const milestones = [
  { year: "2018", event: "101Migrate Founded", description: "Started with a mission to simplify immigration" },
  { year: "2020", event: "100+ Approved Cases", description: "Reached our first major milestone" },
  { year: "2022", event: "Global Expansion", description: "Expanded services to 20+ countries" },
  { year: "2024", event: "500+ Consultations", description: "Helped hundreds achieve their dreams" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Your Trusted Partner in
              <span className="block text-gradient">Immigration Success</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mb-8">
              101Migrate is a premier immigration consulting firm specializing in EB-2 NIW and EB-1A employment-based
              U.S. immigration pathways. We combine expertise with personalized attention.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-background/60">Consultations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-sm text-background/60">Approved Cases</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-background/60">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/team-of-immigration-consultants-working-together-i.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm opacity-80">Success Rate</p>
              </div>
            </div>

            <div>
              <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Empowering Dreams,
                <span className="text-primary block">One Visa at a Time</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to demystify the U.S. immigration process and empower extraordinary individuals to
                achieve their American dream through strategic guidance, expert drafting support, and comprehensive
                petition preparation.
              </p>
              <p className="text-muted-foreground mb-8">
                We believe that talent knows no borders. Our team is dedicated to helping exceptional professionals from
                around the world navigate the complex immigration landscape with confidence and clarity.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              What Drives Us <span className="text-primary">Every Day</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-3xl border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Meet the Experts <span className="text-primary">Behind Your Success</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team combines deep immigration expertise with a passion for helping professionals achieve their
              dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-background">{member.name}</h3>
                    <p className="text-secondary">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Milestones Along <span className="text-secondary">The Way</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-background/20 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <div className="bg-background/5 p-6 rounded-2xl inline-block">
                      <span className="text-secondary font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-2">{milestone.event}</h3>
                      <p className="text-background/60 mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-secondary z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-muted/50 rounded-[2.5rem] p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Start Your <span className="text-primary">Immigration Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a consultation with our experts and take the first step towards achieving your American dream.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg group"
            >
              <Link href="/contact">
                Book Your Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
