import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://orca.com.pk"),
  title: {
    default: "ORCA | Enterprise Operations Redefined",
    template: "%s | ORCA",
  },
  description: "ORCA is a global group building the intelligence, people, and systems behind better business through AI, BPO, insurance, and digital growth.",
  keywords: ["ORCA Enterprises", "BPO Pakistan", "AI solutions", "digital transformation", "insurance services", "business process outsourcing"],
  authors: [{ name: "ORCA Enterprises" }],
  creator: "ORCA Enterprises",
  publisher: "ORCA Enterprises Private Limited",
  alternates: { canonical: "https://orca.com.pk" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orca.com.pk",
    title: "ORCA | Enterprise Operations Redefined",
    description: "A global group building the intelligence, people, and systems behind better business.",
    siteName: "ORCA",
  },
  twitter: { card: "summary_large_image", title: "ORCA | Enterprise Operations Redefined", description: "AI, BPO, insurance, and digital growth for businesses ready to move." },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#07101c" />
        <meta name="format-detection" content="telephone=yes" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ORCA Enterprises Private Limited",
          url: "https://orca.com.pk",
          description: "A global group spanning AI, BPO, insurance, and digital growth.",
          address: { "@type": "PostalAddress", streetAddress: "Office No. 5, 2nd Floor, Muzafar Chamber, Blue Area", addressLocality: "Islamabad", addressCountry: "PK" },
          email: "info@orca.com.pk",
          telephone: "+92 333 555 3781",
          sameAs: ["https://linkedin.com/company/orca-enterprises"],
        }) }} />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  )
}
