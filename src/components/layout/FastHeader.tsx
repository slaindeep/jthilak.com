import Image from "next/image";
import Link from "next/link";

export function FastHeader() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/media/TFF Law Logo Colour Version.png"
              alt="TFF Legal"
              width={160}
              height={53}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Industries
            </Link>
            <Link
              href="/publications"
              className="text-gray-900 hover:text-blue-600 font-medium"
            >
              Publications
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
