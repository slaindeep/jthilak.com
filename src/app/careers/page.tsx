import { ContactForm } from '@/components/ui/ContactForm';
import { EmailCapture } from '@/components/ui/EmailCapture';

export const metadata = {
  title: 'Careers at TFF Legal | Legal Jobs Dubai UAE | Law Firm Opportunities',
  description: 'Join TFF Legal team in Dubai, UAE. Explore career opportunities for experienced lawyers, legal consultants, and support professionals in our growing legal practice.',
  keywords: 'TFF Legal careers, legal jobs Dubai, law firm jobs UAE, legal consultant positions, lawyer opportunities Dubai',
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isActive: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: "senior-legal-counsel",
    title: "Senior Legal Counsel",
    department: "Legal",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    description: "We&apos;re seeking an experienced Senior Legal Counsel to join our growing practice. You&apos;ll work on complex corporate transactions, provide strategic legal guidance to clients, and contribute to our fractional general counsel services.",
    requirements: [
      "LLB or equivalent legal degree",
      "5+ years of corporate legal experience",
      "Strong knowledge of UAE commercial law",
      "Experience with cross-border transactions",
      "Excellent written and verbal communication skills",
      "Fluency in English; Arabic is a plus"
    ],
    benefits: [
      "Competitive salary package",
      "Performance-based bonuses",
      "Professional development opportunities",
      "Health and wellness benefits",
      "Flexible working arrangements",
      "International exposure"
    ],
    isActive: true
  },
  {
    id: "legal-associate",
    title: "Legal Associate",
    department: "Legal",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our dynamic team as a Legal Associate. You'll support senior lawyers on various matters including contract drafting, legal research, and client advisory services.",
    requirements: [
      "LLB or equivalent legal degree",
      "2-4 years of legal practice experience",
      "Strong research and analytical skills",
      "Proficiency in contract drafting and review",
      "Detail-oriented with excellent organizational skills",
      "Tech-savvy with legal research tools"
    ],
    benefits: [
      "Competitive compensation",
      "Comprehensive training programs",
      "Mentorship opportunities",
      "Health insurance coverage",
      "Career progression pathways",
      "Work-life balance"
    ],
    isActive: true
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    department: "Business Development",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive growth initiatives and client relationships for our legal practice. You'll identify new business opportunities and support our expansion across the Middle East region.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "3+ years in business development or sales",
      "Experience in professional services preferred",
      "Strong networking and relationship-building skills",
      "Knowledge of Middle East business landscape",
      "Excellent presentation and communication skills"
    ],
    benefits: [
      "Base salary plus commission structure",
      "Performance incentives",
      "Travel opportunities",
      "Professional development budget",
      "Flexible working options",
      "Health and wellness benefits"
    ],
    isActive: true
  }
];

const companyValues = [
  {
    title: "Excellence",
    description: "We deliver exceptional legal solutions with the highest professional standards.",
    icon: "⭐"
  },
  {
    title: "Innovation",
    description: "We embrace technology and modern approaches to enhance legal service delivery.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We maintain unwavering ethical standards in all our professional relationships.",
    icon: "🛡️"
  },
  {
    title: "Collaboration",
    description: "We work as a cohesive team to achieve the best outcomes for our clients.",
    icon: "🤝"
  }
];

export default function CareersPage() {
  const activePositions = jobPositions.filter(job => job.isActive);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Legal Team
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Build your career with TFF Legal, where innovation meets excellence. 
              Be part of a dynamic team shaping the future of legal services in the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#positions" 
                className="inline-flex items-center bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a 
                href="#culture" 
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-colors"
              >
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at TFF Legal?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We foster an environment where legal professionals can thrive, innovate, and make a meaningful impact on our clients&apos; success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Growth</h4>
                      <p className="text-gray-600 text-sm">Continuous learning opportunities and career development programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Technology-Forward Environment</h4>
                      <p className="text-gray-600 text-sm">Work with cutting-edge legal technology and digital tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">International Exposure</h4>
                      <p className="text-gray-600 text-sm">Cross-border transactions and diverse client portfolio</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work-Life Balance</h4>
                      <p className="text-gray-600 text-sm">Flexible working arrangements and comprehensive benefits</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    25+ Years of Excellence
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Join a firm with a proven track record of success across the Middle East, 
                    where your expertise will contribute to shaping the legal landscape.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Established legal practice since 1999
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Multi-jurisdictional expertise
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Growing client portfolio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Explore our current opportunities and take the next step in your legal career
            </p>
          </div>

          <div className="space-y-8">
            {activePositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                      {position.department}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {position.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-teal-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="#apply"
                    className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Apply for this Position
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {activePositions.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👔</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No Open Positions Currently
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                While we don&apos;t have any open positions at the moment, we&apos;re always interested in connecting with talented legal professionals. 
                Submit your information below and we&apos;ll reach out when opportunities arise.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-600">
              Submit your application or connect with us for future opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Application Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Application</h3>
              <ContactForm />
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h3>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <EmailCapture
                  title="Get Career Updates"
                  description="Be the first to know about new opportunities and career insights"
                  placeholder="Enter your email for career updates"
                  buttonText="Subscribe to Updates"
                  variant="default"
                  className="mb-8"
                />
                
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Other Ways to Connect</h4>
                  <div className="space-y-4">
                    <a 
                      href="mailto:careers@tfflegal.com" 
                      className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      careers@tfflegal.com
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/legalstrategist" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Career Opportunities?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;d love to discuss how you can contribute to our growing legal practice
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}