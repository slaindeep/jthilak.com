"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-200 py-2"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-6 bg-white shadow-xl rounded-xl border border-gray-100">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Legal Services
                      </h3>
                    </div>
                    <Link
                      href="/services"
                      className="group block space-y-1 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        All Services
                      </div>
                      <p className="text-sm text-gray-600 leading-snug">
                        Comprehensive legal solutions across all practice areas
                      </p>
                    </Link>
                    <Link
                      href="/services#fractional-gc"
                      className="group block space-y-1 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        Fractional General Counsel
                      </div>
                      <p className="text-sm text-gray-600 leading-snug">
                        Strategic legal leadership without the overhead
                      </p>
                    </Link>
                    <Link
                      href="/services#corporate"
                      className="group block space-y-1 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                        Corporate & Commercial
                      </div>
                      <p className="text-sm text-gray-600 leading-snug">
                        Business law, M&A, and commercial transactions
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/industries"
                  className="text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-200 py-2"
                >
                  Industries
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/publications"
                  className="text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-200 py-2"
                >
                  Insights
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
