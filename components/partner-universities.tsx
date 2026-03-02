"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const universities = [
  { name: "Ulster University", logo: "/universities/ulster.jpg", website: "https://www.ulster.ac.uk" },
  { name: "Teesside University", logo: "/universities/teesside.jpg", website: "https://www.tees.ac.uk" },
  { name: "Anglia Ruskin University", logo: "/universities/anglia-ruskin.jpg", website: "https://www.anglia.ac.uk" },
  { name: "Keele University", logo: "/universities/keele.jpg", website: "https://www.keele.ac.uk" },
  {
    name: "London Metropolitan University",
    logo: "/universities/london-metro.jpg",
    website: "https://www.londonmet.ac.uk",
  },
  { name: "University of Hull", logo: "/universities/hull.jpg", website: "https://www.hull.ac.uk" },
  { name: "Middlesex University", logo: "/universities/middlesex.jpg", website: "https://www.mdx.ac.uk" },
  { name: "University of Bedfordshire", logo: "/universities/bedfordshire.jpg", website: "https://www.beds.ac.uk" },
  { name: "University of Wolverhampton", logo: "/universities/wolverhampton.jpg", website: "https://www.wlv.ac.uk" },
  { name: "Northumbria University", logo: "/universities/northumbria.jpg", website: "https://www.northumbria.ac.uk" },
  { name: "University of Portsmouth", logo: "/universities/portsmouth.jpg", website: "https://www.port.ac.uk" },
  {
    name: "Glasgow Caledonian University",
    logo: "/universities/glasgow-caledonian.jpg",
    website: "https://www.gcu.ac.uk",
  },
  {
    name: "Canterbury Christ Church University",
    logo: "/universities/canterbury.jpg",
    website: "https://www.canterbury.ac.uk",
  },
  { name: "University of Roehampton", logo: "/universities/roehampton.jpg", website: "https://www.roehampton.ac.uk" },
  { name: "Coventry University", logo: "/universities/coventry.jpg", website: "https://www.coventry.ac.uk" },
]

export default function PartnerUniversities() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % universities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="premium-section bg-gradient-to-br from-background via-muted/30 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <div className="inline-block mx-auto">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-primary font-semibold text-xs tracking-widest uppercase">Our Network</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground premium-heading text-balance">
            Partner Universities
          </h2>
          <p className="text-xl text-foreground/75 max-w-3xl mx-auto font-medium">
            We partner with 40+ top-tier universities across the UK and beyond. Connect with world-class institutions through our network.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {universities.map((uni, index) => (
            <a
              key={index}
              href={uni.website}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium group cursor-pointer flex flex-col items-stretch transition-all duration-500 overflow-hidden hover:shadow-premium-hover"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : "none",
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative flex-1 w-full min-h-[160px] p-4 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:from-primary/5 group-hover:to-secondary/5 transition-colors duration-300">
                <Image
                  src={uni.logo || "/placeholder.svg"}
                  alt={`${uni.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-gradient-to-b from-white to-gray-50 border-t border-border/60 group-hover:from-primary/5 group-hover:to-secondary/5 transition-colors duration-300">
                <p className="font-bold text-center text-sm text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {uni.name}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary text-xs font-semibold">Visit</span>
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
