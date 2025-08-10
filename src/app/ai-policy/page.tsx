export const metadata = {
  title: 'AI Policy | TFF Legal - Artificial Intelligence Use in Legal Services',
  description: 'TFF Legal AI Policy explaining our responsible use of artificial intelligence and machine learning tools in legal research, contract analysis, and client services.',
  keywords: 'TFF Legal AI policy, artificial intelligence legal services, AI legal tools, responsible AI use',
}

export default function AIPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Policy
          </h1>
          <p className="text-xl text-gray-600">
            Our responsible approach to artificial intelligence in legal services
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Effective: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Our AI Philosophy</h2>
              <p className="text-blue-800">
                At TFF Legal, we embrace artificial intelligence as a powerful tool to enhance the 
                quality, efficiency, and accessibility of legal services while maintaining the highest 
                standards of professional responsibility and client confidentiality.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. How We Use AI Technology</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-green-800">Legal Research</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Case law analysis and precedent identification</li>
                  <li>• Regulatory change monitoring</li>
                  <li>• Jurisdiction-specific legal research</li>
                  <li>• Cross-border compliance analysis</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-purple-800">Contract Analysis</h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Risk assessment and identification</li>
                  <li>• Clause comparison and benchmarking</li>
                  <li>• Due diligence document review</li>
                  <li>• Contract template optimization</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-orange-800">Process Efficiency</h3>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• Document drafting assistance</li>
                  <li>• Legal workflow automation</li>
                  <li>• Client communication enhancement</li>
                  <li>• Project management optimization</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3 text-teal-800">Quality Assurance</h3>
                <ul className="text-teal-700 space-y-2 text-sm">
                  <li>• Document accuracy checking</li>
                  <li>• Consistency verification</li>
                  <li>• Compliance validation</li>
                  <li>• Error detection and prevention</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. AI Governance Principles</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🛡️ Client Confidentiality</h3>
                <p className="text-gray-600">
                  All AI tools used comply with attorney-client privilege requirements. Client data 
                  is processed through secure, confidential channels with appropriate privacy safeguards.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">👨‍💼 Human Oversight</h3>
                <p className="text-gray-600">
                  AI-generated content and analysis is always reviewed and validated by qualified legal 
                  professionals. Final legal advice and strategic decisions remain exclusively human-driven.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">🔍 Transparency</h3>
                <p className="text-gray-600">
                  We inform clients when AI tools are used in their matters and explain how these 
                  technologies contribute to service delivery and cost efficiency.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">⚖️ Professional Standards</h3>
                <p className="text-gray-600">
                  Our AI use complies with all applicable legal ethics rules, professional conduct 
                  standards, and regulatory requirements in our jurisdictions of practice.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security and Privacy</h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3 text-red-800">Security Measures</h3>
              <ul className="text-red-700 space-y-2">
                <li>• End-to-end encryption for all data processing</li>
                <li>• Zero-retention policies with AI service providers</li>
                <li>• Secure, jurisdiction-compliant data centers</li>
                <li>• Regular security audits and compliance reviews</li>
                <li>• Access controls and authentication protocols</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Quality Control and Validation</h2>
            <p className="text-gray-600 mb-4">Our multi-layer quality assurance process ensures:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                <h4 className="font-semibold mb-2">AI Processing</h4>
                <p className="text-sm text-gray-600">Automated analysis with advanced algorithms</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <h4 className="font-semibold mb-2">Legal Review</h4>
                <p className="text-sm text-gray-600">Professional lawyer validation and refinement</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <h4 className="font-semibold mb-2">Client Delivery</h4>
                <p className="text-sm text-gray-600">Final human-approved legal advice and solutions</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations and Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3">What AI Cannot Do</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Replace professional legal judgment and expertise</li>
                <li>• Provide final legal advice without human review</li>
                <li>• Understand nuanced client-specific circumstances</li>
                <li>• Navigate complex ethical or strategic decisions</li>
                <li>• Guarantee outcomes or assume legal liability</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Technology Partners</h2>
            <p className="text-gray-600 mb-6">
              We partner with leading, reputable AI technology providers who share our commitment to:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Legal industry compliance and security standards</li>
              <li>• Professional confidentiality requirements</li>
              <li>• Ethical AI development and deployment</li>
              <li>• Regular security audits and updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Continuous Improvement</h2>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <p className="text-green-800">
                We continuously evaluate and improve our AI tools and processes, staying current with 
                technological advances, regulatory changes, and best practices in legal technology. 
                This includes regular training for our legal team on AI capabilities and limitations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Client Rights and Choices</h2>
            <p className="text-gray-600 mb-4">Clients have the right to:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Understand how AI tools are used in their matters</li>
              <li>• Request traditional (non-AI) service delivery methods</li>
              <li>• Receive explanations of AI-assisted analysis</li>
              <li>• Access human lawyers for all strategic decisions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Regulatory Compliance</h2>
            <p className="text-gray-600 mb-6">
              Our AI use complies with emerging regulations including the EU AI Act, UAE AI principles, 
              and professional conduct rules in all jurisdictions where we practice. We monitor 
              regulatory developments and adapt our practices accordingly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact and Questions</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                For questions about our AI policy or to discuss AI use in your legal matter:
              </p>
              <div className="text-gray-700">
                <p><strong>TFF Legal</strong></p>
                <p>Email: ai-policy@tfflegal.com</p>
                <p>Email: info@tfflegal.com</p>
                <p>Phone: +971 XXX XXX XXX</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This AI Policy is reviewed and updated regularly to reflect 
                technological advances and regulatory changes. The latest version is always available 
                on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}