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
    <section id="about" className="premium-section bg-gradient-to-br from-background via-muted/20 to-secondary/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Visual */}
          <div
            className={`relative h-96 md:h-[500px] lg:h-[600px] hidden md:block transition-all duration-1000 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <img
              src="/professional-education-consultant-helping-diverse-.jpg"
              alt="Expert education consultants with diverse students discussing UK university admission"
              className="relative w-full h-full object-cover rounded-3xl shadow-premium-hover group-hover:shadow-premium-hover group-hover:scale-[1.02] transition-all duration-500 border-2 border-white/20"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div
            className={`space-y-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="text-primary font-semibold text-xs tracking-widest uppercase">Why Choose Express Consultancy</p>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight premium-heading text-balance">
                Excellence in UK Education Consulting
              </h2>
              <p className="text-xl text-foreground/75 leading-relaxed font-medium max-w-lg">
                Express Consultancy has been the trusted partner for international students seeking admission to top UK universities. With offices in Pakistan and the UK, we provide personalized, professional guidance throughout your entire journey.
              </p>
            </div>

            <div className="space-y-5">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group p-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  style={{ 
                    animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : "none",
                    animationDelay: `${index * 80}ms`
                  }}
                >
                  <CheckCircle
                    className="text-primary flex-shrink-0 mt-1 group-hover:scale-125 group-hover:text-secondary transition-all duration-300"
                    size={24}
                  />
                  <p className="text-foreground/80 font-medium text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
