"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const universities = [
  { name: "Ulster University", logo: "/universities/ulster.jpg", website: "https://www.ulster.ac.uk" },
  { name: "Teesside University", logo: "/universities/teesside.jpg", website: "https://www.tees.ac.uk" },
  { name: "Anglia Ruskin University", logo: "/universities/anglia-ruskin.jpg", website: "https://www.anglia.ac.uk" },
  { name: "Keele University", logo: "/universities/keele.png", website: "https://www.keele.ac.uk" },
  {
    name: "London Metropolitan University",
    logo: "/universities/london-metro.png",
    website: "https://www.londonmet.ac.uk",
  },
  { name: "University of Hull", logo: "/universities/hull.png", website: "https://www.hull.ac.uk" },
  { name: "Middlesex University", logo: "/universities/middlesex.png", website: "https://www.mdx.ac.uk" },
  { name: "University of Bedfordshire", logo: "/universities/bedfordshire.png", website: "https://www.beds.ac.uk" },
  { name: "University of Wolverhampton", logo: "/universities/wolverhampton.jpg", website: "https://www.wlv.ac.uk" },
  { name: "Northumbria University", logo: "/universities/northumbria.png", website: "https://www.northumbria.ac.uk" },
  { name: "University of Portsmouth", logo: "/universities/portsmouth.png", website: "https://www.port.ac.uk" },
  {
    name: "Glasgow Caledonian University",
    logo: "/universities/glasgow-caledonian.png",
    website: "https://www.gcu.ac.uk",
  },
  {
    name: "Canterbury Christ Church University",
    logo: "/universities/canterbury.png",
    website: "https://www.canterbury.ac.uk",
  },
  { name: "University of Roehampton", logo: "/universities/roehampton.png", website: "https://www.roehampton.ac.uk" },
  { name: "Coventry University", logo: "/universities/coventry.png", website: "https://www.coventry.ac.uk" },
]

export default function PartnerUniversities() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % universities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="premium-section bg-gradient-to-b from-muted/40 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/15 transition-colors inline-block mx-auto backdrop-blur-sm">
            Our Network
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground premium-heading">
            Partner Universities
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We work with 40+ top-tier universities across the UK. Here are some of our key partners.
          </p>
        </div>

        <div className="overflow-hidden relative">
          <button
            type="button"
            aria-label="Scroll partner universities backward"
            onClick={() => setScrollPosition((prev) => (prev - 1 + universities.length) % universities.length)}
            className="flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-primary/20 bg-white/90 text-primary shadow-lg transition hover:bg-primary hover:text-white"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div
            className="flex gap-4 px-14 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${scrollPosition * (100 / 5)}%)`,
            }}
          >
            {universities.map((uni, index) => (
              <a
                key={index}
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5 card-premium group cursor-pointer flex flex-col items-center justify-center aspect-square !p-2 md:!p-3 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4 group-hover:scale-110 transition-transform duration-300">
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5 card-premium group cursor-pointer flex flex-col items-center justify-center aspect-square !px-4 !py-6 md:!px-6 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={uni.logo || "/placeholder.svg"}
                    alt={`${uni.name} logo`}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="font-bold text-center text-xs md:text-sm text-foreground text-balance">{uni.name}</p>
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Scroll partner universities forward"
            onClick={() => setScrollPosition((prev) => (prev + 1) % universities.length)}
            className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-primary/20 bg-white/90 text-primary shadow-lg transition hover:bg-primary hover:text-white"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
