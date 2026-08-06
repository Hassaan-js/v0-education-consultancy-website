import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

// Initialize fonts
const geist = Geist({ subsets: ["latin"], display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://expressconsultancy.co.uk"),
  title: {
    default: "Express Consultancy | UK Study Visa & University Admissions Experts",
    template: "%s | Express Consultancy",
  },
  description:
    "Premier UK education consultancy with 12+ years expertise in study visa processing, university admissions to Oxford, Cambridge, LSE, Imperial. 100% visa approval rate. Expert guidance for international students.",
  keywords: [
    "UK study visa",
    "education consultancy UK",
    "university admissions UK",
    "study abroad consultants",
    "UK student visa experts",
    "Oxford admissions",
    "Cambridge admissions",
    "Russell Group universities",
    "UK visa guidance",
    "international student support",
    "study in UK",
    "UK education consultancy Reading",
  ],
  authors: [{ name: "Express Consultancy PVT", url: "https://expressconsultancy.co.uk" }],
  creator: "Express Consultancy",
  publisher: "Express Consultancy PVT",
  category: "Education",
  alternates: {
    canonical: "https://expressconsultancy.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://expressconsultancy.co.uk",
    title: "Express Consultancy | UK Study Visa & University Admissions Experts",
    description:
      "Premier UK education consultancy with 12+ years expertise in study visas, university admissions to top UK universities including Oxford, Cambridge, LSE, Imperial. 100% visa approval rate.",
    siteName: "Express Consultancy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Express Consultancy - Premier UK Education & Study Visa Experts",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Consultancy | UK Study Visa & University Admissions",
    description:
      "Expert guidance for UK study visas, university admissions to Oxford, Cambridge, LSE, Imperial. 12+ years expertise, 100% approval rate.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#b8172d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="canonical" href="https://expressconsultancy.co.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Express Consultancy PVT",
              alternateName: "Express Consultancy",
              url: "https://expressconsultancy.co.uk",
              logo: "https://expressconsultancy.co.uk/logo.png",
              image: "https://expressconsultancy.co.uk/og-image.jpg",
              description:
                "Premier UK education consultancy with 12+ years expertise specializing in study visa processing, university admissions to Oxford, Cambridge, LSE, Imperial and other Russell Group universities. 100% visa approval rate.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1 Alfred Street",
                addressLocality: "Reading",
                addressRegion: "Berkshire",
                postalCode: "RG1 7AT",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.4542645",
                longitude: "-0.9781303",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+44-7871-820508",
                  contactType: "Customer Service",
                  areaServed: "GB",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+44-7871-820508",
                  contactType: "Admissions",
                  areaServed: "GB",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/express-consultancy",
                "https://www.facebook.com/expressconsultancy",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
              priceRange: "££",
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
