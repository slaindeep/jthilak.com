export const metadata = {
  title: 'Industries We Serve | Legal Services for Real Estate, Hospitality, Technology | TFF Legal',
  description: 'TFF Legal serves diverse industries including real estate development, hospitality, technology startups, healthcare, and financial services across Middle East, Africa, and Asia.',
  keywords: 'legal services industries, real estate legal services, hospitality law, technology startup lawyer, healthcare legal services, financial services law Middle East',
}

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Effective legal advice grounded in deep appreciation of your industry. 
            We combine sector-specific insight with rigorous legal analysis to deliver 
            practical, commercially relevant solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-center">
              <span className="text-2xl font-bold text-blue-600">9</span>
              <p className="text-sm text-gray-600">Industries</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-center">
              <span className="text-2xl font-bold text-blue-600">100+</span>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-center">
              <span className="text-2xl font-bold text-blue-600">3</span>
              <p className="text-sm text-gray-600">Continents</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm text-center">
              <span className="text-2xl font-bold text-blue-600">25+</span>
              <p className="text-sm text-gray-600">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Real Estate and Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate & Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Supporting complex acquisitions, development projects, leasing, and asset management 
                with practical, market-aware advice across traditional and next-generation real estate.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Property acquisitions and disposals
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Development agreements and structuring
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  REITs and tokenization advisory
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Master planning and infrastructure
                </div>
              </div>
            </div>

            {/* Hospitality and Tourism */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hospitality & Tourism</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advising hotel owners, operators, management companies, designers, and consultants 
                on management agreements, franchising, development, licensing, and regulatory compliance.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Hotel management and franchise agreements
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Mixed-use and branded residences
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Destination development projects
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Tourism investment structuring
                </div>
              </div>
            </div>

            {/* Technology and Startups */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology & Startups</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Partnering with innovative companies at every stage—from formation and funding to 
                IP protection, licensing, and scaling operations across emerging technologies.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Incorporation and funding strategies
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Blockchain and cryptocurrency compliance
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI and data protection regulatory
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Smart contracts and Web3 ventures
                </div>
              </div>
            </div>

            {/* Private Investors and Funds */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Investors & Funds</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advising private investors, family offices, and investment funds on structuring, 
                regulatory compliance, cross-border transactions, and risk management.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Fund formation and structuring
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Cross-border investment transactions
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Regulatory compliance and reporting
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Family office legal structures
                </div>
              </div>
            </div>

            {/* Financial Services */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Supporting banks, financial institutions, and market participants with structuring, 
                compliance, transactional work, and regulatory frameworks.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Banking and finance transactions
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Regulatory compliance and licensing
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Fintech and digital banking
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Islamic finance structuring
                </div>
              </div>
            </div>

            {/* Construction and Infrastructure */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction & Infrastructure</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advising on large-scale projects, PPP structures, risk allocation, contract management, 
                and infrastructure development across the region.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Large-scale infrastructure projects
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  PPP structures and agreements
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Construction contract management
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Risk allocation and insurance
                </div>
              </div>
            </div>

            {/* Healthcare and Life Sciences */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-rose-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare & Life Sciences</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advising on licensing, compliance, structuring, and complex transactions in 
                regulated healthcare environments across the region.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Healthcare licensing and compliance
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Medical device and pharmaceutical
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Healthcare facility development
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                  Telemedicine and digital health
                </div>
              </div>
            </div>

            {/* Manufacturing and Industry */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing & Industry</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Supporting cross-border supply chains, distribution agreements, joint ventures, 
                and regulatory frameworks for industrial operations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Cross-border supply chain agreements
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Distribution and franchise agreements
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Industrial joint ventures
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Environmental and safety compliance
                </div>
              </div>
            </div>

            {/* Energy and Sustainability */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy & Sustainability</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Helping clients navigate ESG goals, renewable energy projects, and regulatory 
                frameworks to support sustainable business growth.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Renewable energy project development
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  ESG compliance and reporting
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Carbon credit and offset agreements
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Sustainability-linked financing
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep understanding of legal, commercial, and cultural landscapes across key markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Middle East</h3>
              <p className="text-gray-600 mb-4">UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>• GCC legal harmonization expertise</p>
                <p>• Islamic finance and Sharia compliance</p>
                <p>• Free zone and mainland structures</p>
                <p>• Vision 2030 and NEOM projects</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Africa</h3>
              <p className="text-gray-600 mb-4">Nigeria, South Africa, Kenya, Egypt, Morocco</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>• AfCFTA trade agreement expertise</p>
                <p>• Mining and natural resources</p>
                <p>• Infrastructure development projects</p>
                <p>• Cross-border investment frameworks</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Asia</h3>
              <p className="text-gray-600 mb-4">India, Singapore, Malaysia, Thailand, Vietnam</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>• ASEAN trade and investment</p>
                <p>• Technology transfer agreements</p>
                <p>• Manufacturing and supply chain</p>
                <p>• Digital economy regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to discuss how we can support your industry-specific legal needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Schedule Industry Consultation
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
  )
}