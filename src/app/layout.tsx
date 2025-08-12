import type { Metadata } from "next";
import "./globals.css";
import { FastHeader } from "@/components/layout/FastHeader";
import { FastFooter } from "@/components/layout/FastFooter";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "TFF Legal - Corporate Lawyer UAE | Legal Services Dubai | Fractional General Counsel",
  description: "Premier legal consultancy in UAE & Middle East. Expert corporate lawyer, fractional general counsel services, cross-border legal solutions for foreign investors. 25+ years experience.",
  keywords: "corporate lawyer UAE, legal services Dubai, fractional general counsel, legal consultant Middle East, foreign investment lawyer UAE, business lawyer Saudi Arabia, cross-border legal services, technology startup lawyer",
  authors: [{ name: "Jitheesh Thilak", url: "https://jthilak.com" }],
  creator: "TFF Legal",
  publisher: "TFF Legal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jthilak.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jthilak.com',
    siteName: 'TFF Legal',
    title: 'TFF Legal - Corporate Lawyer UAE | Legal Services Dubai',
    description: 'Premier legal consultancy in UAE & Middle East. Expert corporate lawyer, fractional general counsel services, cross-border legal solutions for foreign investors.',
    images: [
      {
        url: '/media/TFF Law Logo Colour Version.png',
        width: 1200,
        height: 630,
        alt: 'TFF Legal - Corporate Lawyer UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TFF Legal - Corporate Lawyer UAE | Legal Services Dubai',
    description: 'Premier legal consultancy in UAE & Middle East. Expert corporate lawyer, fractional general counsel services, cross-border legal solutions.',
    images: ['/media/TFF Law Logo Colour Version.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FastHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <FastFooter />
        <WhatsAppFloat phoneNumber="971559878888" />
      </body>
    </html>
  );
}