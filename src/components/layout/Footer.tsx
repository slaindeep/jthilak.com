import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/media/TFF Law Logo Colour Version.png"
              alt="TFF Legal"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground max-w-md">
              Premier legal consultancy delivering tailored corporate legal solutions 
              across the Middle East, Africa, and Asia with deep understanding of 
              legal, commercial, and cultural landscapes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services#fractional-gc" className="hover:text-foreground">Fractional General Counsel</Link></li>
              <li><Link href="/services#corporate" className="hover:text-foreground">Corporate & Commercial</Link></li>
              <li><Link href="/services#real-estate" className="hover:text-foreground">Real Estate</Link></li>
              <li><Link href="/services#hospitality" className="hover:text-foreground">Hospitality</Link></li>
              <li><Link href="/services#technology" className="hover:text-foreground">Technology & Startups</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/industries" className="hover:text-foreground">Industries</Link></li>
              <li><Link href="/publications" className="hover:text-foreground">Publications</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Thilak Fons & Farabi Legal FZ LLC. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}