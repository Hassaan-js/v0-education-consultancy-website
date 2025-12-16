"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  "12+ years of proven expertise in UK education consulting and visa processing",
  "100% visa approval rate with specialized knowledge of UK immigration regulations",
  "Expert advisors educated from top UK universities with direct experience",
  "Partnerships with 40+ leading UK universities and institutions",
  "Personalized guidance for every student's unique profile and aspirations",
  "24/7 support from offices in Pakistan and across multiple locations",
  "Transparent, ethical practices with zero hidden charges",
  "Comprehensive support from application to settlement in the UK",
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" className="premium-section bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div
            className={`relative h-96 md:h-full hidden md:block transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl blur-3xl" />
            <img
              src="/professional-education-consultant-helping-diverse-.jpg"
              alt="Expert education consultants with diverse students discussing UK university admission"
              className="w-full h-full object-cover rounded-3xl shadow-premium"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors duration-300">
                  Why Choose Express Consultancy
                </p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight premium-heading">
                Excellence in UK Education Consulting
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Express Consultancy has been the trusted partner for international students seeking admission to top UK
                universities. With offices in Pakistan and the UK, we provide personalized, professional guidance
                throughout your entire journey.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle
                    className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-secondary transition-all duration-300"
                    size={22}
                  />
                  <p className="text-gray-700 font-medium text-base leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
