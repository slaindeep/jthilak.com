export const metadata = {
  title: 'Legal Services UAE | Fractional General Counsel Dubai | Corporate Law Services',
  description: 'Comprehensive legal services UAE including fractional general counsel, corporate law, real estate, hospitality, and technology law. Expert legal support for Middle East businesses.',
  keywords: 'legal services UAE, fractional general counsel Dubai, corporate law services, real estate lawyer Middle East, hospitality legal services, technology law UAE',
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Practical, business-focused legal solutions tailored to your industry and strategy. 
              We combine traditional legal excellence with modern technology and System-Driven tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Schedule Consultation
              </a>
              <a 
                href="#services" 
                className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional General Counsel - Featured Service */}
      <section id="fractional-gc" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block text-sm font-semibold mb-6">
                FEATURED SERVICE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fractional General Counsel
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert legal leadership without the overhead of a big legal team. Your fractional GC 
                integrates seamlessly with your leadership, providing strategic guidance when you need it most.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Strategic Legal Leadership</h4>
                    <p className="text-gray-600">C-level legal guidance integrated with your business strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Technology-Enabled Efficiency</h4>
                    <p className="text-gray-600">Modern technology tools for contract review and legal research</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Cost-Effective Solution</h4>
                    <p className="text-gray-600">Senior legal expertise without full-time hire costs</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition inline-block"
              >
                Learn More About Fractional GC
              </a>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">What&apos;s Included</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-lg mb-2">Strategic Planning</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Legal strategy development</li>
                    <li>• Risk assessment and management</li>
                    <li>• Regulatory compliance planning</li>
                  </ul>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-lg mb-2">Contract Management</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Template creation and review</li>
                    <li>• Negotiation strategy</li>
                    <li>• AI-powered contract analysis</li>
                  </ul>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-lg mb-2">Team Development</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Legal team training and development</li>
                    <li>• Process optimization</li>
                    <li>• Technology implementation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Board Advisory</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Board meeting preparation</li>
                    <li>• Governance best practices</li>
                    <li>• Strategic legal input</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver integrated support across a range of practice areas, combining traditional 
              legal acumen with modern technology for enhanced efficiency and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate & Commercial */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Corporate & Commercial</h3>
              <p className="text-gray-600 mb-6">Business-focused legal support with emphasis on contract structuring, drafting, and negotiation.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Strategic contract structuring and negotiation</li>
                <li>• Business formation and corporate structuring</li>
                <li>• Shareholder and joint venture agreements</li>
                <li>• M&A and strategic transactions</li>
              </ul>
              <a href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</a>
            </div>

            {/* Real Estate */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l8-4v18M9 9h1m-1 4h1m4-4h1m-1 4h1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Estate Transactions</h3>
              <p className="text-gray-600 mb-6">Expert legal support for traditional and next-generation real estate investment and development.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Property acquisitions and disposals</li>
                <li>• Development agreements and structuring</li>
                <li>• REITs and tokenization advisory</li>
                <li>• Joint development partnerships</li>
              </ul>
              <a href="/contact" className="text-green-600 font-semibold hover:text-green-800">Learn More →</a>
            </div>

            {/* Hospitality */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hospitality</h3>
              <p className="text-gray-600 mb-6">Sector-specific legal solutions for hotel owners, operators, investors, and management companies.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Hotel management and franchise agreements</li>
                <li>• Mixed-use and branded residence structuring</li>
                <li>• Tourism investment structuring</li>
                <li>• Development and repositioning projects</li>
              </ul>
              <a href="/contact" className="text-purple-600 font-semibold hover:text-purple-800">Learn More →</a>
            </div>

            {/* Technology & Startups */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technology & Startups</h3>
              <p className="text-gray-600 mb-6">Supporting technology companies and Web 3.0 innovators to thrive in evolving markets.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Incorporation and funding strategies</li>
                <li>• Blockchain and cryptocurrency compliance</li>
                <li>• Smart contract drafting and audit</li>
                <li>• IP protection and licensing</li>
              </ul>
              <a href="/contact" className="text-orange-600 font-semibold hover:text-orange-800">Learn More →</a>
            </div>

            {/* Risk & ESG Advisory */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Risk & ESG Advisory</h3>
              <p className="text-gray-600 mb-6">Identify, assess, and mitigate risks while advancing Environmental, Social, and Governance goals.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• ESG policy development and compliance</li>
                <li>• Risk management frameworks</li>
                <li>• Supply chain due diligence</li>
                <li>• Sustainability reporting obligations</li>
              </ul>
              <a href="/contact" className="text-teal-600 font-semibold hover:text-teal-800">Learn More →</a>
            </div>

            {/* Dispute Management */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-rose-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-1m3 1l3-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Dispute Management</h3>
              <p className="text-gray-600 mb-6">Strategic support to protect interests while maintaining valuable business relationships.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Negotiation and settlement strategy</li>
                <li>• Mediation and alternative dispute resolution</li>
                <li>• Litigation risk assessment</li>
                <li>• Crisis management and reputation protection</li>
              </ul>
              <a href="/contact" className="text-rose-600 font-semibold hover:text-rose-800">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Technology-Enabled Legal Solutions</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We integrate cutting-edge technology and AI tools to deliver faster, more accurate, 
                and cost-effective legal services without compromising quality or confidentiality.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Contract Analysis</h4>
                  <p className="text-gray-400">AI-powered review and risk assessment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Legal Research</h4>
                  <p className="text-gray-400">Advanced search and precedent analysis</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Due Diligence</h4>
                  <p className="text-gray-400">Automated document review and analysis</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Compliance Monitoring</h4>
                  <p className="text-gray-400">Real-time regulatory change tracking</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-2xl font-bold mb-6">Technology Partners</h3>
              <p className="text-gray-300 mb-6">
                We partner with leading US technology companies to develop innovative, 
                tech-driven legal solutions for both traditional and modern businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>AI-powered contract review platforms</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>Advanced legal research databases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>Blockchain and smart contract tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>Secure document management systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss your legal needs and explore how we can support your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Schedule Consultation
            </a>
            <a 
              href="/about" 
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}