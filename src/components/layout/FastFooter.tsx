import Image from 'next/image'
import Link from 'next/link'

export function FastFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/media/TFF_Law_Logo_White_Version[1].png"
              alt="TFF Legal"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 max-w-md">
              Premier legal consultancy delivering tailored corporate legal solutions 
              across the Middle East, Africa, and Asia with deep understanding of 
              legal, commercial, and cultural landscapes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services#fractional-gc" className="hover:text-white">Fractional General Counsel</Link></li>
              <li><Link href="/services#services" className="hover:text-white">Corporate & Commercial</Link></li>
              <li><Link href="/services#services" className="hover:text-white">Real Estate</Link></li>
              <li><Link href="/services#services" className="hover:text-white">Hospitality</Link></li>
              <li><Link href="/services#services" className="hover:text-white">Technology & Startups</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/publications" className="hover:text-white">Publications</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 Thilak Fons & Farabi Legal FZ LLC. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}