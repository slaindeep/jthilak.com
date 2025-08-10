import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { EmailCapture } from "@/components/ui/EmailCapture";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "Corporate Lawyer UAE | Legal Services Dubai | TFF Legal - Fractional General Counsel",
  description:
    "Expert corporate lawyer UAE with 25+ years experience. Premier legal services Dubai, fractional general counsel, cross-border legal services for foreign investors in Middle East.",
};

export default function FastHome() {
  return (
    <div>
      <HeroCarousel />

      {/* Our Legal Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Strategic Legal Solutions for Complex Business Challenges
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              With over 25 years of experience at the heart of global commerce,
              we are experts in managing risk and handling complex legal
              matters, always in pursuit of our clients&apos; interests. Our
              integrated approach combines corporate law, regulatory expertise,
              and strategic advisory services to help you navigate commercial
              and legal challenges successfully.
            </p>
            <p>
              To understand how business leaders are addressing the evolving
              legal landscape, we work closely with CEOs, General Counsel, and
              senior executives across multiple sectors throughout the MENA
              region. Our focus areas include corporate governance, cross-border
              transactions, regulatory compliance, and strategic risk
              management.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Explore Our Expertise
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Expertise Carousel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out">
                {/* Slide 1 - Corporate Law & M&A */}
                <div className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6">
                  {/* Corporate Law Card */}
                  <div className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-60 relative overflow-hidden">
                      <Image
                        src="/media/fractionalgencounsel.png"
                        alt="Corporate Law & M&A Services"
                        fill
                        className="object-cover"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        Corporate Law & M&A
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Expert guidance for mergers, acquisitions, and corporate restructuring.
                      </p>
                      <Link
                        href="/services#corporate"
                        className="text-primary font-semibold hover:text-primary-600 transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  {/* Technology & Fintech Card */}
                  <div className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-60 relative overflow-hidden">
                      <Image
                        src="/media/Legaltechnology.png"
                        alt="Technology & Fintech Legal Services"
                        fill
                        className="object-cover"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        Technology & Fintech
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Legal compliance for fintech, AI governance, and digital transformation.
                      </p>
                      <Link
                        href="/services#technology"
                        className="text-primary font-semibold hover:text-primary-600 transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>

                  {/* Cross-Border Transactions Card */}
                  <div className="relative group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-60 relative overflow-hidden">
                      <Image
                        src="/media/FonsFarabi.png"
                        alt="Cross-Border Transactions Legal Services"
                        fill
                        className="object-cover"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        Cross-Border Transactions
                      </h3>
                      <p className="text-gray-600 mb-4">
                        International trade law and foreign investment structuring.
                      </p>
                      <Link
                        href="/services#international"
                        className="text-primary font-semibold hover:text-primary-600 transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 bg-primary rounded-full transition-opacity"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full transition-opacity"></button>
              <button className="w-3 h-3 bg-gray-300 rounded-full transition-opacity"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights - Report Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM9 9h6l-6-6v6z"
                  />
                </svg>
                Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                TFF Legal Insights REPORT 2025:
                <span className="block text-primary">
                  Legal Technology in MENA
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our comprehensive analysis examines how legal technology is
                transforming corporate legal services across the Middle East and
                North Africa. Discover key trends, regulatory developments, and
                strategic opportunities shaping the future of legal practice in
                the region.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-primary">
                    Report
                  </span>
                </div>
                <span className="text-sm text-gray-500">|</span>
                <span className="text-sm text-gray-500">Legal Technology</span>
              </div>

              <Link
                href="/insights/legal-technology-mena-2024"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Download Report
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Legal Technology Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/media/Legaltechnology.png"
                  alt="Legal Technology in MENA Report 2024"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content - Podcast Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Podcast Image */}
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/media/jitheeshprofilepic.jpg"
                  alt="Legal Leadership Podcast with Jitheesh Thilak"
                  fill
                  className="object-cover object-[center_20%] z-10"
                  quality={100}
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 13vw"
                />
              </div>
            </div>

            <div className="lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-4">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
                Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Legal Leadership Podcast:
                <span className="block text-secondary">Coming Soon</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join Jitheesh Thilak for in-depth discussions on complex legal
                matters, cross-border transactions, and strategic insights from
                25+ years of experience in corporate law. Our upcoming podcast
                series will cover MENA region legal landscapes, international
                business law, and expert guidance for navigating today&apos;s
                complex legal challenges.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-secondary">
                    Podcast
                  </span>
                </div>
                <span className="text-sm text-gray-500">|</span>
                <span className="text-sm text-gray-500">Launching Soon</span>
              </div>

              <div className="max-w-md">
                <EmailCapture
                  title="Get Notified When We Launch"
                  description="Be the first to listen to our expert legal insights and analysis."
                  buttonText="Notify Me"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legal Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
            Discover our latest legal services
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Fractional General Counsel Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/media/fractionalgencounsel.png"
                  alt="Fractional General Counsel Services"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Fractional General Counsel
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic legal leadership for growing businesses -
                  executive-level legal guidance without the full-time overhead.
                  Integrated corporate governance and risk management solutions.
                </p>
                <Link
                  href="/services#fractional-gc"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Discover more
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Corporate Legal Advisory Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/media/FonsFarabi.png"
                  alt="Corporate Legal Advisory Services"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Corporate Legal Advisory
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive business law services for complex transactions -
                  M&A advisory, regulatory compliance, and cross-border
                  investment structuring across MENA markets.
                </p>
                <Link
                  href="/services#corporate-advisory"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Find out more
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News/Insights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
            Latest News
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/media/fractionalgencounsel.png"
                  alt="TFF Legal Fintech Practice Expansion"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                TFF Legal expands fintech practice with new regulatory expertise
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>15 March 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                TFF Legal strengthens its fintech practice with specialized
                expertise in digital asset regulations and cryptocurrency
                compliance across the UAE and broader MENA region.
              </p>
            </article>

            {/* News Article 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/media/jitheeshprofilepic.jpg"
                  alt="Jitheesh Thilak Appointed as Fractional General Counsel"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                Jitheesh Thilak appointed as fractional general counsel for
                regional tech startup
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>8 March 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leading MENA technology company selects TFF Legal&apos;s
                fractional general counsel service to navigate rapid growth and
                cross-border expansion plans.
              </p>
            </article>

            {/* News Article 3 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/media/office consult.png"
                  alt="TFF Legal Cross-Border M&A Transaction"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                TFF Legal advised on major cross-border M&A transaction
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>28 February 2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Successfully completed legal advisory services for multinational
                corporation&apos;s strategic acquisition of UAE-based technology
                platform, valued at AED 450 million.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Enhanced Footer/CTA - Join TFF Legal & Legal Excellence */}
      <section className="section-padding bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Join TFF Legal */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join TFF Legal
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We are always seeking talented, ambitious legal professionals to
                become part of our story. Join a dynamic team committed to
                delivering excellence across the MENA region.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
              >
                Join us
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Legal Excellence Matters */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Legal Excellence Matters
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                TFF Legal is committed to the highest standards of legal
                practice and professional ethics. We deliver sophisticated legal
                counsel built on integrity, innovation, and deep regional
                expertise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
              >
                Find out more
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Stay up to date with TFF Legal
              </h3>
              <p className="text-gray-300 mb-8">
                Sign up to receive legal updates straight to your inbox!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap">
                  Subscribe here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
