import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Download, CheckCircle2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { notFound } from "next/navigation"

const guides = {
  "complete-eb1a-visa-guide": {
    title: "Complete EB-1A Visa Guide",
    description:
      "Everything you need to know about the EB-1A Extraordinary Ability visa, including criteria breakdown and evidence strategies.",
    image: "/resources/eb1a-guide.jpg",
    type: "Guide",
    pages: 45,
    lastUpdated: "January 2026",
    contents: [
      "Introduction to EB-1A Visa Category",
      "Understanding the 10 Criteria",
      "Evidence Collection Strategies",
      "Building Your Petition Narrative",
      "Common Mistakes to Avoid",
      "RFE Prevention Tips",
      "Sample Evidence Templates",
      "Timeline and Processing Information",
    ],
    highlights: [
      "Detailed breakdown of all 10 EB-1A criteria",
      "Real examples of successful evidence",
      "Step-by-step petition building guide",
      "Expert tips from immigration professionals",
    ],
  },
  "eb2-niw-comprehensive-resource": {
    title: "EB-2 NIW Comprehensive Resource",
    description:
      "In-depth guide covering the three-prong test, proposed endeavor development, and petition preparation strategies.",
    image: "/resources/eb2-niw-guide.jpg",
    type: "Guide",
    pages: 52,
    lastUpdated: "January 2026",
    contents: [
      "Understanding EB-2 NIW Category",
      "The Three-Prong Test Explained",
      "Developing Your Proposed Endeavor",
      "National Interest Argument",
      "Qualifying Without a Job Offer",
      "Evidence Documentation",
      "Recommendation Letters Guide",
      "Processing Times and Strategies",
    ],
    highlights: [
      "Complete three-prong test breakdown",
      "Proposed endeavor writing guide",
      "Sample recommendation letter templates",
      "Matter of Dhanasar framework explained",
    ],
  },
  "green-card-process-overview": {
    title: "Green Card Process Overview",
    description:
      "Essential guide for understanding the employment-based green card process, timelines, and requirements.",
    image: "/resources/green-card-guide.jpg",
    type: "Resource",
    pages: 38,
    lastUpdated: "December 2025",
    contents: [
      "Employment-Based Green Card Categories",
      "EB-1, EB-2, and EB-3 Comparison",
      "Priority Dates Explained",
      "Adjustment of Status vs. Consular Processing",
      "Required Documentation",
      "Timeline Expectations",
      "Maintaining Status During Process",
      "Post-Approval Steps",
    ],
    highlights: [
      "Clear comparison of all EB categories",
      "Priority date tracking guide",
      "Documentation checklist",
      "Status maintenance tips",
    ],
  },
  "evidence-checklist-eb1a": {
    title: "Evidence Checklist for EB-1A",
    description: "Comprehensive checklist of evidence types and documentation needed for each EB-1A criterion.",
    image: "/resources/evidence-checklist.jpg",
    type: "Checklist",
    pages: 24,
    lastUpdated: "January 2026",
    contents: [
      "Awards & Recognition Evidence",
      "Membership Evidence Requirements",
      "Published Material Documentation",
      "Judging Panel Participation",
      "Original Contributions Proof",
      "Scholarly Articles Evidence",
      "Exhibitions Documentation",
      "Leadership Role Evidence",
      "High Salary Documentation",
      "Commercial Success Evidence",
    ],
    highlights: [
      "Criterion-by-criterion checklist",
      "Evidence quality requirements",
      "Organization tips",
      "Filing best practices",
    ],
  },
  "sample-eb1a-petition": {
  title: "Sample EB-1A Petition",
  description:
    "Realistic sample EB-1A petition demonstrating proper structure, formatting, and evidence presentation for an extraordinary ability case.",
  image: "/eb1a-visa-guide-document-with-american-flag-and-pa.jpg",
  type: "Sample Petition",
  pages: 30,
  lastUpdated: "January 2026",
  contents: [
    "Cover Letter & Table of Contents",
    "Petitioner & Beneficiary Information",
    "Summary of Extraordinary Ability",
    "Criterion-by-Criterion Legal Arguments",
    "Exhibits & Supporting Evidence Index",
    "Expert Opinion Letters",
    "Final Legal Conclusion",
  ],
  highlights: [
    "Shows professional petition formatting",
    "Illustrates strong legal argument style",
    "Helps understand petition flow",
    "Great reference for self-petitioners",
  ],
},

"sample-eb2-niw-petition": {
  title: "Sample EB-2 NIW Petition",
  description:
    "Sample EB-2 NIW petition showing how to structure a strong proposed endeavor and satisfy the three-prong test.",
  image: "/eb2-niw-visa-guide-document-with-professional-sett.jpg",
  type: "Sample Petition",
  pages: 34,
  lastUpdated: "January 2026",
  contents: [
    "Cover Letter & Case Summary",
    "Proposed Endeavor Explanation",
    "Substantial Merit & National Importance",
    "Well Positioned to Advance Endeavor",
    "Balancing Test Argument",
    "Evidence Index",
    "Recommendation Letters",
  ],
  highlights: [
    "Demonstrates Matter of Dhanasar framework",
    "Strong national interest arguments",
    "Clear logical flow",
    "Useful for drafting your own NIW case",
  ],
},

}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides[slug as keyof typeof guides]

  if (!guide) {
    notFound()
  }

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
          <Link href="/resources" className="inline-flex items-center text-secondary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                {guide.type}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                {guide.title}
              </h1>
              <p className="text-xl text-background/70 mb-8">{guide.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-background/60">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{guide.pages} Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>PDF Format</span>
                </div>
                <div>Updated: {guide.lastUpdated}</div>
              </div>
            </div>
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src={guide.image || "/placeholder.svg"}
                alt={guide.title}
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What's Inside */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">What's Inside</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {guide.contents.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Key Highlights</h2>
                <div className="space-y-4">
                  {guide.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Request Form */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-8 border border-border sticky top-32">
                <h3 className="text-2xl font-serif font-bold mb-4">Get Free Access</h3>
                <p className="text-muted-foreground mb-6">
                  Enter your email to receive instant access to this resource.
                </p>
                <form className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Your Name" className="h-12 rounded-xl bg-muted/50" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="h-12 rounded-xl bg-muted/50" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 group"
                  >
                    Request Access
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
