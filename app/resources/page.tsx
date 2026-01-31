import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, BookOpen, Download, Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const guides = [
  {
    id: 1,
    slug: "complete-eb1a-visa-guide",
    type: "Guide",
    icon: FileText,
    title: "Complete EB-1A Visa Guide",
    description:
      "Everything you need to know about the EB-1A Extraordinary Ability visa, including criteria breakdown and evidence strategies.",
    image: "/resources/eb1a-guide.jpg",
    downloadable: true,
  },
  {
    id: 2,
    slug: "eb2-niw-comprehensive-resource",
    type: "Guide",
    icon: BookOpen,
    title: "EB-2 NIW Comprehensive Resource",
    description:
      "In-depth guide covering the three-prong test, proposed endeavor development, and petition preparation strategies.",
    image: "/resources/eb2-niw-guide.jpg",
    downloadable: true,
  },
  {
    id: 3,
    slug: "green-card-process-overview",
    type: "Resource",
    icon: Download,
    title: "Green Card Process Overview",
    description:
      "Essential guide for understanding the employment-based green card process, timelines, and requirements.",
    image: "/resources/green-card-guide.jpg",
    downloadable: true,
  },
  {
    id: 4,
    slug: "evidence-checklist-eb1a",
    type: "Checklist",
    icon: FileText,
    title: "Evidence Checklist for EB-1A",
    description: "Comprehensive checklist of evidence types and documentation needed for each EB-1A criterion.",
    image: "/resources/evidence-checklist.jpg",
    downloadable: true,
  },
  {
    id: 5,
    slug: "sample-eb1a-petition",
    type: "Sample Petition",
    icon: FileText,
    title: "Sample EB-1A Petition",
    description:
      "Realistic sample EB-1A petition illustrating structure, formatting, and evidence presentation.",
    image: "/eb1a-visa-guide-document-with-american-flag-and-pa.jpg",
    downloadable: true,
  },
  {
    id: 6,
    slug: "sample-eb2-niw-petition",
    type: "Sample Petition",
    icon: FileText,
    title: "Sample EB-2 NIW Petition",
    description:
      "Sample EB-2 NIW petition showing strong proposed endeavor framing and three-prong test arguments.",
    image: "/eb2-niw-visa-guide-document-with-professional-sett.jpg",
    downloadable: true,
  },

]

const webinars = [
  {
    slug: "understanding-eb2-niw-requirements",
    title: "Understanding EB-2 NIW Requirements",
    date: "January 27, 2026",
    time: "11:00 AM CST",
    description: "Live webinar covering the latest NIW requirements and strategies for success.",
    image: "/resources/webinar-niw.jpg",
    videoUrl: "https://www.youtube.com/embed/5tvapuyboRQ",
  },
  {
    slug: "eb1a-criteria-deep-dive",
    title: "EB-1A Criteria Deep Dive",
    date: "February 10, 2026",
    time: "2:00 PM EST",
    description: "Detailed breakdown of each EB-1A criterion with real case examples.",
    image: "/resources/webinar-eb1a.jpg",
    videoUrl: "https://www.youtube.com/embed/uKphTFbcBtc",
  },
]


const blogPosts = [
  {
    slug: "5-common-mistakes-niw-petitions",
    title: "5 Common Mistakes in NIW Petitions",
    excerpt:
      "Avoid these critical errors that can lead to RFEs or denials in your National Interest Waiver application.",
    image: "/resources/blog-mistakes.jpg",
    date: "January 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-document-extraordinary-ability",
    title: "How to Document Extraordinary Ability",
    excerpt: "Strategic approaches to gathering and presenting evidence for your EB-1A petition.",
    image: "/resources/blog-documentation.jpg",
    date: "January 5, 2026",
    readTime: "10 min read",
  },
  {
    slug: "understanding-three-prong-test",
    title: "Understanding the Three-Prong Test",
    excerpt: "A comprehensive guide to meeting all three requirements of the EB-2 NIW petition.",
    image: "/resources/blog-three-prong.jpg",
    date: "December 28, 2025",
    readTime: "12 min read",
  },
]

export default function ResourcesPage() {
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
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Free Immigration
              <span className="block text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-background/70 max-w-2xl">
              Access our comprehensive collection of guides, checklists, and resources to help you understand the
              immigration process better.
            </p>
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Free Downloads
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Comprehensive <span className="text-primary">Guides & Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Request access to our detailed immigration guides and resources completely free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guides.map((guide, index) => (
              <Link
                href={`/resources/${guide.slug}`}
                key={guide.id}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-secondary/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-foreground font-bold">{index + 1}</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                    {guide.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{guide.description}</p>
                  <div className="w-full py-3 rounded-full border-2 border-border group-hover:border-secondary group-hover:bg-secondary group-hover:text-foreground transition-all flex items-center justify-center font-medium">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
              Live Events
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Upcoming <span className="text-primary">Webinars</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our live sessions to learn directly from immigration experts and get your questions answered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webinars.map((webinar) => (
              <Link
                href={`/resources/webinars/${webinar.slug}`}
                key={webinar.title}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={webinar.videoUrl}
                    title={webinar.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <span>{webinar.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{webinar.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
                Latest Articles
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Immigration <span className="text-primary">Insights</span>
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-2 px-6 bg-transparent">
              <Link href="/resources/blog">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                href={`/resources/blog/${post.slug}`}
                key={post.title}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
