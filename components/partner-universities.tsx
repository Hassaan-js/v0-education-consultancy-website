"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const universities = [
  { name: "Oxford", logo: "/universities/oxford.jpg", tier: "Russell Group" },
  { name: "Cambridge", logo: "/universities/cambridge.jpg", tier: "Russell Group" },
  { name: "LSE", logo: "/universities/lse.jpg", tier: "Russell Group" },
  { name: "Imperial", logo: "/universities/imperial.jpg", tier: "Russell Group" },
  { name: "UCL", logo: "/universities/ucl.jpg", tier: "Russell Group" },
  { name: "Edinburgh", logo: "/universities/edinburgh.jpg", tier: "Russell Group" },
  { name: "Manchester", logo: "/universities/manchester.jpg", tier: "Russell Group" },
  { name: "Durham", logo: "/universities/durham.jpg", tier: "Russell Group" },
]

export default function PartnerUniversities() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`card-premium group cursor-pointer flex flex-col items-center justify-center aspect-square transition-all duration-500 hover:shadow-2xl ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative w-20 h-20 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={uni.logo || "/placeholder.svg"}
                  alt={`${uni.name} logo`}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <p className="font-bold text-center text-xs md:text-sm text-foreground">{uni.name}</p>
              <p className="text-xs text-gray-600 text-center font-medium mt-1">{uni.tier}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
