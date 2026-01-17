import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const blogPosts = {
  "5-common-mistakes-niw-petitions": {
    title: "5 Common Mistakes in NIW Petitions",
    excerpt:
      "Avoid these critical errors that can lead to RFEs or denials in your National Interest Waiver application.",
    image: "/resources/blog-mistakes.jpg",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "101Migrate Team",
    content: `
      <p>The EB-2 National Interest Waiver (NIW) is a popular pathway for skilled professionals seeking a U.S. green card without employer sponsorship. However, many applicants make critical mistakes that lead to Requests for Evidence (RFEs) or outright denials.</p>
      
      <h2>1. Vague Proposed Endeavor</h2>
      <p>One of the most common mistakes is failing to clearly define your proposed endeavor. USCIS wants to see a specific, well-articulated plan for your work in the United States. Generic statements like "I will continue my research" are not sufficient.</p>
      <p><strong>Solution:</strong> Clearly describe what you plan to do, how you'll do it, and the specific impact your work will have.</p>
      
      <h2>2. Insufficient Evidence of National Importance</h2>
      <p>Many applicants struggle to demonstrate that their work has implications beyond their immediate field or local area. The three-prong test requires showing that your endeavor has national or global importance.</p>
      <p><strong>Solution:</strong> Provide evidence of how your work addresses broad challenges, cite policies or initiatives that align with your work, and obtain recommendation letters that speak to the national impact.</p>
      
      <h2>3. Weak Recommendation Letters</h2>
      <p>Generic recommendation letters that simply praise the applicant without providing specific examples or explaining why waiving the job offer requirement benefits the United States are a common weakness.</p>
      <p><strong>Solution:</strong> Work with recommenders to craft detailed letters that address the three-prong test and provide specific examples of your contributions and their impact.</p>
      
      <h2>4. Inadequate Documentation of Achievements</h2>
      <p>Claiming achievements without providing solid documentation is a recipe for an RFE. Every claim you make should be backed by evidence.</p>
      <p><strong>Solution:</strong> For each achievement, provide primary source documentation such as awards certificates, publication records, citation metrics, and media coverage.</p>
      
      <h2>5. Ignoring the "Well-Positioned" Prong</h2>
      <p>The second prong of the Matter of Dhanasar framework requires demonstrating that you are well-positioned to advance your proposed endeavor. Many applicants focus so heavily on their endeavor's importance that they neglect this crucial element.</p>
      <p><strong>Solution:</strong> Document your education, experience, skills, achievements, and resources that demonstrate your ability to successfully pursue your endeavor.</p>
      
      <h2>Conclusion</h2>
      <p>Avoiding these common mistakes can significantly improve your chances of NIW approval. Take the time to carefully craft your petition, gather strong evidence, and consider seeking professional guidance to ensure your application presents the strongest possible case.</p>
    `,
  },
  "how-to-document-extraordinary-ability": {
    title: "How to Document Extraordinary Ability",
    excerpt: "Strategic approaches to gathering and presenting evidence for your EB-1A petition.",
    image: "/resources/blog-documentation.jpg",
    date: "January 5, 2026",
    readTime: "10 min read",
    author: "101Migrate Team",
    content: `
      <p>The EB-1A visa for individuals with extraordinary ability is one of the most prestigious immigration categories. To qualify, you must demonstrate extraordinary ability in your field through sustained national or international acclaim. Here's how to effectively document your achievements.</p>
      
      <h2>Understanding the Criteria</h2>
      <p>USCIS evaluates EB-1A petitions based on 10 criteria. You need to meet at least 3 of them. However, meeting criteria alone isn't enough—you must demonstrate that your achievements place you among the small percentage at the very top of your field.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>A common misconception is that more evidence is always better. In reality, well-organized, high-quality evidence is far more effective than volumes of marginally relevant documents. Focus on your strongest achievements.</p>
      
      <h2>Criterion-by-Criterion Strategy</h2>
      <p><strong>Awards:</strong> Document the selection process, number of applicants, and prestige of the awarding organization. Include any media coverage of the award.</p>
      <p><strong>Memberships:</strong> Provide evidence of the organization's membership requirements, particularly showing that membership requires outstanding achievement.</p>
      <p><strong>Published Material:</strong> Gather articles about you and your work in major media or professional publications. Include circulation data and the publication's significance.</p>
      
      <h2>Building a Compelling Narrative</h2>
      <p>Your evidence should tell a coherent story of sustained excellence. Connect your achievements to demonstrate a pattern of extraordinary accomplishment, not just isolated successes.</p>
      
      <h2>Expert Recommendation Letters</h2>
      <p>Strong recommendation letters from recognized experts can provide crucial context for your achievements. Choose recommenders who can speak specifically to your extraordinary contributions and their impact on the field.</p>
    `,
  },
  "understanding-three-prong-test": {
    title: "Understanding the Three-Prong Test",
    excerpt: "A comprehensive guide to meeting all three requirements of the EB-2 NIW petition.",
    image: "/resources/blog-three-prong.jpg",
    date: "December 28, 2025",
    readTime: "12 min read",
    author: "101Migrate Team",
    content: `
      <p>The Matter of Dhanasar decision in 2016 established a new framework for evaluating EB-2 National Interest Waiver petitions. This three-prong test replaced the previous standard and provides clearer guidance for applicants.</p>
      
      <h2>Prong 1: Substantial Merit and National Importance</h2>
      <p>Your proposed endeavor must have both substantial merit and national importance. "Substantial merit" can include value in business, entrepreneurialism, science, technology, culture, health, or education. "National importance" requires showing implications beyond a specific locality.</p>
      <p><strong>Key strategies:</strong> Connect your work to national priorities, government initiatives, or broad societal challenges. Document the potential reach and impact of your endeavor.</p>
      
      <h2>Prong 2: Well-Positioned to Advance the Endeavor</h2>
      <p>You must demonstrate that you are well-positioned to advance your proposed endeavor. USCIS considers factors including education, skills, knowledge, record of success, model or plan for future activities, and progress toward achieving the endeavor.</p>
      <p><strong>Key strategies:</strong> Highlight relevant education and training, document past successes, present a clear and realistic plan, show any progress already made.</p>
      
      <h2>Prong 3: Beneficial to Waive the Job Offer Requirement</h2>
      <p>The final prong requires showing that it would be beneficial to the United States to waive the job offer and labor certification requirements. This involves a balancing test weighing factors like urgency, uniqueness of skills, and potential for economic impact.</p>
      <p><strong>Key strategies:</strong> Explain why the labor certification process would be impractical, demonstrate unique contributions you can make, show urgency or time-sensitivity if applicable.</p>
      
      <h2>Putting It All Together</h2>
      <p>A successful NIW petition addresses all three prongs with specific, well-documented evidence. The petition should tell a compelling story that connects your background, your proposed endeavor, and the national interest.</p>
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link href="/resources" className="inline-flex items-center text-secondary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 text-sm text-background/60 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">{post.title}</h1>
            <p className="text-xl text-background/70">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative aspect-[21/9] -mt-8 rounded-3xl overflow-hidden shadow-2xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-16 p-8 md:p-12 bg-muted/30 rounded-3xl text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Need Expert Guidance?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our team of immigration experts can help you navigate the complexities of your visa application.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full group">
                <Link href="/booking">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
