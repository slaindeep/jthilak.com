type JsonLd = Record<string, unknown>

interface StructuredDataProps {
  data: JsonLd
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "TFF Legal",
  "alternateName": "Thilak Fons & Farabi Legal",
  "description": "Premier legal consultancy delivering tailored corporate legal solutions across the Middle East, Africa, and Asia. Specializing in fractional general counsel, cross-border transactions, and Technology-Enabled legal services.",
  "url": "https://jthilak.com",
  "logo": "https://jthilak.com/media/TFF Law Logo Colour Version.png",
  "image": "https://jthilak.com/media/TFF Law Logo Colour Version.png",
  "telephone": "+971-XXX-XXXX",
  "email": "info@tfflegal.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country", 
      "name": "Saudi Arabia"
    },
    {
      "@type": "Continent",
      "name": "Middle East"
    },
    {
      "@type": "Continent",
      "name": "Africa"
    },
    {
      "@type": "Continent",
      "name": "Asia"
    }
  ],
  "serviceType": [
    "Corporate Law",
    "Fractional General Counsel",
    "Cross-border Legal Services",
    "Real Estate Law",
    "Hospitality Law",
    "Technology Law",
    "Investment Law",
    "Commercial Law"
  ],
  "foundingDate": "2021",
  "founder": {
    "@type": "Person",
    "name": "Jitheesh Thilak",
    "jobTitle": "Managing Partner",
    "description": "International corporate lawyer with over 25 years of experience across Middle East, Africa, and Asia",
    "image": "https://jthilak.com/media/jitheeshprofilepic.jpg",
    "sameAs": [
      "https://linkedin.com/in/legalstrategist"
    ]
  },
  "employee": {
    "@type": "Person",
    "name": "Jitheesh Thilak",
    "jobTitle": "Managing Partner & Chief Legal Counsel"
  },
  "priceRange": "$$$$",
  "hasCredential": [
    "English Solicitor",
    "Indian Lawyer",
    "25+ years PQE"
  ],
  "knowsAbout": [
    "Corporate Law",
    "International Law",
    "Investment Law",
    "Real Estate Law",
    "Hospitality Law", 
    "Technology Law",
    "Cross-border Transactions",
    "Middle East Law",
    "UAE Law",
    "Saudi Arabia Law"
  ]
}

export const personSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jitheesh Thilak",
  "jobTitle": "Managing Partner & Chief Legal Counsel",
  "description": "International corporate lawyer with over 25 years of experience advising leading businesses across the Middle East, Africa, and South Asia",
  "image": "https://jthilak.com/media/jitheeshprofilepic.jpg",
  "url": "https://jthilak.com/about",
  "sameAs": [
    "https://linkedin.com/in/legalstrategist"
  ],
  "worksFor": {
    "@type": "LegalService",
    "name": "TFF Legal"
  },
  "hasCredential": [
    "English Solicitor",
    "Indian Lawyer"
  ],
  "knowsAbout": [
    "Corporate Law",
    "International Law", 
    "Investment Law",
    "Real Estate Law",
    "Hospitality Law",
    "Cross-border Transactions"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Law University"
    }
  ],
  "award": [
    "25+ years Post Qualification Experience",
    "Pioneer in Middle East Legal Services"
  ]
}