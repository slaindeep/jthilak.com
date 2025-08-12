import Image from "next/image";

export const metadata = {
  title:
    "About Jitheesh Thilak - TFF Legal | Corporate Lawyer UAE with 25+ Years Experience",
  description:
    "Meet Jitheesh Thilak, Managing Partner of TFF Legal with over 25 years of international legal experience across the Middle East, Africa, and Asia. Expert corporate lawyer UAE.",
  keywords:
    "Jitheesh Thilak, corporate lawyer UAE, legal experience Middle East, managing partner TFF Legal, international lawyer Dubai",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet Jitheesh Thilak
              </h1>
              <p className="text-xl text-blue-600 mb-6 font-semibold">
                Founder, CEO & Chief Legal Counsel
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I lead a premier legal consultancy delivering tailored corporate
                legal solutions across borders. With over{" "}
                <strong>23 years of PQE</strong>, including 22 years in the
                Middle East, I&apos;ve developed expertise as an{" "}
                <strong>
                  International Corporate, Commercial, and Investment Lawyer
                </strong>{" "}
                and strategist.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    23+ Years Experience
                  </span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    Dual-Qualified Lawyer
                  </span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">
                    3 Continents
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/media/jitheeshprofilepic.jpg"
                  alt="Jitheesh Thilak - Managing Partner TFF Legal"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years PQE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              &ldquo;At <strong className="text-blue-600">TFF Legal</strong>, we
              believe{" "}
              <strong>
                law need not be complicated—it should be an effective tool for
                business growth.
              </strong>
              &rdquo;
            </blockquote>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Business-Centered
                </h3>
                <p className="text-gray-600">
                  Your business needs are at the centre of our world
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Technology-Enabled
                </h3>
                <p className="text-gray-600">
                  Advanced technology and System-Driven tools for efficiency
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Cross-border expertise across Middle East, Africa, and Asia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Profile
            </h2>
            <p className="text-xl text-gray-600">
              Delivering strategic legal excellence across multiple
              jurisdictions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                As <strong>Founder, CEO & Chief Legal Counsel</strong> of TFF
                Legal, I bring over 25 years of Post-Qualification Experience
                (PQE) as an International Corporate, Commercial, and Investment
                Lawyer. My expertise spans three continents, with deep
                specialization in Middle Eastern markets and cross-border
                transactions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                My practice focuses on delivering{" "}
                <strong>
                  Technology-Enabled and System-Driven Legal Solutions
                </strong>
                that combine traditional legal excellence with cutting-edge
                methodologies. I specialize in Corporate Law, Commercial
                Transactions, Contract Negotiations, Investment Structures, Real
                Estate Development, Hospitality Law, and Regulatory Compliance.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Through TFF Legal, I provide{" "}
                <strong>Fractional General Counsel</strong> services to
                startups, SMEs, government projects, and multinational
                corporations across Real Estate, Hospitality, Tourism, and
                Technology sectors. My approach integrates strategic business
                thinking with practical legal solutions, ensuring clients
                receive not just legal advice, but comprehensive
                business-focused counsel.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">
                    Core Specializations
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Corporate Governance & Compliance</li>
                    <li>• Mergers & Acquisitions</li>
                    <li>• Contract Law & Negotiations</li>
                    <li>• Real Estate & Hospitality Transactions</li>
                    <li>• Investment Structuring</li>
                    <li>• Technology & Startup Legal Advisory</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-green-800">
                    Geographic Expertise
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• United Arab Emirates (Primary)</li>
                    <li>• Saudi Arabia & GCC Countries</li>
                    <li>• Middle East & North Africa</li>
                    <li>• Sub-Saharan Africa</li>
                    <li>• Asia-Pacific Markets</li>
                    <li>• Cross-Border Transactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialized knowledge across key legal domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Corporate Law</h3>
              <p className="text-sm text-gray-600">
                Governance, M&A, strategic transactions
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21h18M5 21V7l8-4v18M9 9h1m-1 4h1m4-4h1m-1 4h1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real Estate</h3>
              <p className="text-sm text-gray-600">
                Development, acquisitions, complex transactions
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hospitality</h3>
              <p className="text-sm text-gray-600">
                Hotel agreements, development
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cross-Border</h3>
              <p className="text-sm text-gray-600">
                International transactions, compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can support your legal and business
            objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
