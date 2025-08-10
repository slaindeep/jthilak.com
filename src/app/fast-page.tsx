import { FastHero } from '@/components/sections/FastHero'
import Link from 'next/link'

export const metadata = {
  title: 'Corporate Lawyer UAE | Legal Services Dubai | TFF Legal - Fractional General Counsel',
  description: 'Expert corporate lawyer UAE with 25+ years experience. Premier legal services Dubai, fractional general counsel, cross-border legal services for foreign investors in Middle East.',
}

export default function FastHome() {
  return (
    <div>
      <FastHero />
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver practical, business-focused legal solutions tailored to your industry and strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2">Fractional General Counsel UAE</h3>
              <p className="text-gray-600 mb-2">Expert fractional general counsel services without the overhead of a big legal team</p>
              <p className="text-sm text-gray-500 mb-4">
                Your fractional GC integrates seamlessly with your leadership, advising on strategy, 
                structuring, contracts, and risk management across the Middle East.
              </p>
              <Link href="/services#fractional-gc" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More About Fractional General Counsel →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-2">Cross-Border Legal Services</h3>
              <p className="text-gray-600 mb-2">Strategic corporate lawyer UAE support for international businesses</p>
              <p className="text-sm text-gray-500 mb-4">
                We combine traditional legal excellence with modern technology and System-Driven tools 
                to deliver efficient legal services Dubai for foreign investors.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Legal Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Global Reach</h2>
              <p className="text-gray-600 mb-6">
                At TFF Legal, we deliver sophisticated legal support across the Middle East, 
                Africa, and Asia, with a deep understanding of the legal, commercial, and 
                cultural landscapes in these diverse regions.
              </p>
              <p className="text-gray-600 mb-8">
                We specialise in guiding foreign investors seeking to enter and succeed in 
                the Middle East market, offering clear, practical advice to navigate complex 
                local regulations.
              </p>
              <Link 
                href="/about" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Learn About Our Team
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Continents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">9</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}