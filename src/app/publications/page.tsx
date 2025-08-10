import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { EmailCapture } from '@/components/ui/EmailCapture'

export const metadata = {
  title: 'Publications & Articles - TFF Legal | Legal Insights & Industry Analysis',
  description: 'Latest legal publications, articles, and insights from TFF Legal experts on corporate law, real estate, hospitality, and technology across the Middle East.',
  keywords: 'legal articles, publications TFF Legal, legal insights Middle East, corporate law analysis, legal expertise UAE',
}

const featuredArticles = [
  {
    id: 1,
    title: "The Future of Legal Tech in the Middle East",
    excerpt: "Exploring how AI and technology are transforming legal services across the region, from contract automation to predictive analytics.",
    author: "Jitheesh Thilak",
    date: "December 2024",
    category: "Technology",
    readTime: "5 min read",
    image: "/media/office consult.png",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Business Practices: A Legal Perspective",
    excerpt: "Understanding ESG compliance requirements and how businesses can integrate sustainability into their legal frameworks.",
    author: "Jitheesh Thilak",
    date: "November 2024",
    category: "ESG & Sustainability",
    readTime: "7 min read",
    image: "/media/consultingmeetingroom.png",
    featured: true
  },
  {
    id: 3,
    title: "Cross-Border Investment in the GCC: Legal Considerations",
    excerpt: "Key legal aspects for international investors looking to establish operations in Gulf Cooperation Council countries.",
    author: "Jitheesh Thilak",
    date: "October 2024",
    category: "Corporate Law",
    readTime: "6 min read",
    image: "/media/jitheeshconsultingclient.png",
    featured: false
  }
]

const articles = [
  {
    id: 4,
    title: "Hospitality Development Agreements: Best Practices",
    excerpt: "Essential considerations for hotel development projects in the Middle East, covering management agreements, branding, and operational structures.",
    author: "Jitheesh Thilak",
    date: "September 2024",
    category: "Hospitality",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Real Estate Tokenization: Regulatory Framework",
    excerpt: "Comprehensive analysis of the regulatory landscape for real estate tokenization and digital asset investments in the UAE.",
    author: "Jitheesh Thilak",
    date: "August 2024",
    category: "Real Estate",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Fractional General Counsel: The Strategic Advantage",
    excerpt: "How businesses can leverage fractional legal leadership to optimize costs while maintaining high-quality legal support.",
    author: "Jitheesh Thilak",
    date: "July 2024",
    category: "Corporate Strategy",
    readTime: "4 min read"
  },
  {
    id: 7,
    title: "Data Protection in the Digital Age: MENA Compliance",
    excerpt: "Navigating data protection requirements across Middle East and North Africa jurisdictions for technology companies.",
    author: "Jitheesh Thilak",
    date: "June 2024",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "Infrastructure PPP Projects: Legal Structure Optimization",
    excerpt: "Key legal considerations for structuring public-private partnership agreements in large-scale infrastructure development.",
    author: "Jitheesh Thilak",
    date: "May 2024",
    category: "Infrastructure",
    readTime: "9 min read"
  }
]

const categories = ["All", "Technology", "Corporate Law", "Real Estate", "Hospitality", "ESG & Sustainability", "Infrastructure"]

export default function PublicationsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Publications & Insights
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert legal analysis, industry insights, and thought leadership from TFF Legal&apos;s experienced team
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture
                title="Legal Reports & Guides Coming Soon"
                description="Subscribe to get notified when our comprehensive legal guides and industry reports are available for download."
                buttonText="Get Notified"
                placeholder="Enter your email address"
                variant="dark"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured Article */}
            <div className="lg:col-span-2">
              <article className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredArticles[0].image}
                      alt={featuredArticles[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {featuredArticles[0].category}
                      </span>
                      <span>{featuredArticles[0].date}</span>
                      <span>{featuredArticles[0].readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticles[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/media/jitheeshprofilepic.jpg"
                          alt={featuredArticles[0].author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-700 font-medium">
                          {featuredArticles[0].author}
                        </span>
                      </div>
                      <Button>Read Article</Button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Secondary Featured Articles */}
            {featuredArticles.slice(1, 3).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 font-medium">
                      {article.author}
                    </span>
                    <Button size="sm" variant="outline">Read More</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Publications</h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-700 font-medium">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                    <Button size="sm" variant="outline">Read</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Legal Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest legal developments and industry analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. Privacy protected.
          </p>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Legal Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our publications provide insights, but every situation is unique. 
            Let&apos;s discuss your specific legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}