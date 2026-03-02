"use client"

import { Globe, FileText, Plane, Users, BookOpen, Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Globe,
    title: "UK Study Visa Consultation",
    description:
      "Expert guidance on UK student visa requirements, application process, and documentation. Our specialists ensure smooth visa approval with 100% success rate.",
    keywords: "study visa, student visa, visa guidance",
  },
  {
    icon: FileText,
    title: "University Applications & Admissions",
    description:
      "Complete support selecting suitable universities, preparing applications, personal statements, and securing admission offers from top UK institutions.",
    keywords: "university applications, admissions, personal statements",
  },
  {
    icon: BookOpen,
    title: "Test Preparation Guidance",
    description:
      "Strategic guidance for IELTS, TOEFL, GRE, GMAT and other standardized tests required for UK university admissions.",
    keywords: "IELTS preparation, test coaching, exam guidance",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Settlement",
    description:
      "Comprehensive support on accommodation, travel arrangements, insurance, banking, and cultural orientation for your UK arrival.",
    keywords: "pre-departure, accommodation, settlement",
  },
  {
    icon: Users,
    title: "Spouse & Family Visa Services",
    description:
      "Dedicated assistance for dependent visas, spouse visas, and family settlement in the UK with compliance expertise.",
    keywords: "spouse visa, family visa, dependent visas",
  },
  {
    icon: Briefcase,
    title: "Post-Study Work Visas",
    description: "Navigate Graduate Route and work visa options to build your career in the UK after graduation.",
    keywords: "graduate route, post-study work, career visa",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="premium-section bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <div className="inline-block mx-auto">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-primary font-semibold text-xs tracking-widest uppercase">Comprehensive Solutions</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground premium-heading text-balance">
            UK Education & Visa Services
          </h2>
          <p className="text-xl text-foreground/75 max-w-3xl mx-auto font-medium leading-relaxed">
            End-to-end support for your UK study visa, university admissions, test preparation, and career pathways with expert guidance at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = [
              "from-primary to-rose-500",
              "from-secondary to-purple-500",
              "from-accent to-orange-500",
              "from-primary to-secondary",
              "from-secondary to-accent",
              "from-rose-500 to-primary",
            ]
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`card-premium group relative overflow-hidden transition-all duration-500 cursor-pointer ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${hoveredCard === index ? "shadow-premium-hover scale-105" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-500" />

                <div className="relative z-10 space-y-6">
                  <div className={`bg-gradient-to-br ${colors[index]} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-foreground/75 text-base leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
