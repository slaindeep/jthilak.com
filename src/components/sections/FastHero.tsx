import Link from 'next/link'
import Image from 'next/image'

export function FastHero() {
  return (
    <section className="relative hero-gradient text-white section-padding overflow-hidden">
      {/* Ocean Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="/media/office consult.png"
        >
          <source src="/media/ocean-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/10"></div>
      </div>
      
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Leading Legal Excellence Since 1999
              </div>
              
              <h1 className="text-balance mb-8 leading-[1.1]">
                Your Strategic Partner for 
                <span className="block text-secondary font-black">Cutting-Edge</span>
                Corporate Legal Solutions
              </h1>
              
              <p className="lead text-white/90 mb-12 max-w-xl">
                Top-Tier Legal Services in UAE & Fractional General Counsel Across the Middle East, Africa, and Asia. 
                25+ Years of Expertise in Corporate, Commercial, and Contract Law.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/contact" 
                  className="btn-secondary text-center font-semibold"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary text-center font-semibold"
                >
                  Our Expertise
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-secondary mb-1">25+</div>
                  <div className="text-sm text-white/80">Years PQE</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-secondary mb-1">3</div>
                  <div className="text-sm text-white/80">Continents</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-secondary mb-1">100+</div>
                  <div className="text-sm text-white/80">Projects</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <Image
                  src="/media/office consult.png"
                  alt="Professional legal consultation at TFF Legal office"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Technology-Enabled</div>
                    <div className="text-xs text-neutral">Legal Solutions</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white rounded-xl shadow-xl p-4">
                <div className="text-sm font-medium opacity-90">Trusted by</div>
                <div className="text-lg font-bold">Government & Fortune 500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}