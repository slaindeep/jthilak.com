import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48">
      <div className="container relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="group">
                <Image
                  src="/media/TFF Law Logo Colour Version.png"
                  alt="TFF Legal"
                  width={400}
                  height={650}
                  className="h-64 md:h-80 lg:h-96 w-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </Link>
            </div>
            
            {/* Content Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Corporate Lawyer UAE{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Legal Solutions Simplified
                </span>
              </h1>
          
              <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl lg:max-w-none">
                Premier <strong>legal services Dubai</strong> and <strong>fractional general counsel</strong> 
                across the Middle East, Africa, and Asia. Expert <strong>corporate lawyer UAE</strong> with 
                25+ years experience in <strong>cross-border legal services</strong> and Technology-Enabled solutions 
                for <strong>foreign investment legal advice</strong>.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-blue-900/30 dark:to-blue-800/30 dark:opacity-100">
          </div>
        </div>
      </div>
    </section>
  )
}