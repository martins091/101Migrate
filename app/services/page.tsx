import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  FileText,
  Award,
  Search,
  MessageSquare,
  CheckCircle2,
  Zap,
  Clock,
  Users,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "consultation",
    icon: MessageSquare,
    title: "1-1 Clarity Consultation Session",
    subtitle: "Immigration Visa Strategy",
    price: "$200",
    duration: "1 Hour",
    description:
      "We evaluate your credentials, map your approval pathway, and include detailed analysis of three-prong requirements (EB2) or criteria assessment (EB1A, O1A).",
    features: [
      "1 Hour Comprehensive Workshop",
      "Credentials & Achievement Analysis",
      "Visa Eligibility Review (EB1A, EB2/NIW, O1A, L1A, H1B)",
      "Strategic Pathway Mapping",
      "Personalized Roadmap Document",
    ],
    image: "/hands.jpg",
  },
  {
    id: "eb2-niw",
    icon: FileText,
    title: "EB-2 NIW Drafting Support",
    subtitle: "National Interest Waiver",
    price: "From $2,500",
    duration: "4-8 Weeks",
    description:
      "Comprehensive assistance in preparing your National Interest Waiver petition. We help articulate your proposed endeavor, demonstrate its national importance, and establish why you are well-positioned to advance it.",
    features: [
      "Proposed Endeavor Development",
      "National Importance Analysis",
      "Well-Positioned Prong Strategy",
      "Evidence Organization & Guidance",
      "Complete Petition Drafting",
      "Recommendation Letter Templates",
    ],
    image: "/eb2-niw-visa-guide-document-with-professional-sett.jpg",
  },
  {
    id: "eb1a",
    icon: Award,
    title: "EB-1A Drafting Support",
    subtitle: "Extraordinary Ability Visa",
    price: "From $3,000",
    duration: "4-8 Weeks",
    description:
      "Expert support for Extraordinary Ability visa applications. We strategically organize and present your achievements to meet the rigorous USCIS criteria for this prestigious visa category.",
    features: [
      "Criteria Analysis & Selection",
      "Evidence Compilation Strategy",
      "Achievement Documentation",
      "Reference Letter Drafting",
      "Comprehensive Petition Preparation",
      "National/International Recognition Strategy",
    ],
    image: "/eb1a-visa-guide-document-with-american-flag-and-pa.jpg",
  },
  {
    id: "review",
    icon: Search,
    title: "Petition Review Services",
    subtitle: "Expert Analysis & Feedback",
    price: "From $500",
    duration: "1-2 Weeks",
    description:
      "Get expert eyes on your petition before submission. Our review service provides detailed feedback on your materials, identifying strengths to highlight and weaknesses to address.",
    features: [
      "Comprehensive Document Review",
      "Strategic Recommendations",
      "USCIS Compliance Check",
      "Evidence Gap Analysis",
      "Detailed Improvement Report",
    ],
    image: "/man.jpg",
  },
]

const additionalServices = [
  {
    title: "RFE/NOID Assistance",
    description: "Expert help responding to Requests for Evidence or Notices of Intent to Deny.",
    icon: Shield,
  },
  {
    title: "Adjustment of Status",
    description: "Support for transitioning from visa holder to permanent resident status.",
    icon: Users,
  },
  {
    title: "Petition Submission Services",
    description: "Complete submission support including form preparation and filing guidance.",
    icon: FileText,
  },
  {
    title: "New Immigrant Services",
    description: "Career support, financial guidance, and settlement assistance for new immigrants.",
    icon: Zap,
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Immigration Services
              <span className="block text-gradient">Made Smarter</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl mb-8">
              The one-stop gateway to fulfill your U.S. immigration dreams. Our services are designed to guide your
              process with ease and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
              >
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-background/10 hover:bg-background/20 text-background border border-background/20 rounded-full px-8"
              >
                <Link href="#services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Core Services
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Expert Case Filing <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver successful outcomes for professionals through our comprehensive editorial services.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-secondary text-foreground p-4 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-secondary font-medium">{service.subtitle}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">{service.title}</h3>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
                    Service Cost: {service.price}
                  </div>

                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 group"
                  >
                    <Link href="/contact">
                      Request Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Additional Support
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              More Ways We Can <span className="text-primary">Help</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-3xl border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Need Expert Guidance on <span className="text-secondary">U.S. Immigration Pathways?</span>
            </h2>
            <p className="text-xl text-background/70 mb-10">
              Schedule a consultation today and let us help you build a compelling case that showcases your exceptional
              abilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg group"
              >
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-background/10 hover:bg-background/20 text-background border border-background/20 rounded-full px-10 py-7 text-lg"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  Speak With an Agent
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
