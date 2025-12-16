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
    <section id="services" className="premium-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block mx-auto">
            <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors duration-300">
              Comprehensive Solutions
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground premium-heading">
            UK Education & Visa Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            End-to-end support for your UK study visa, university admissions, and career pathways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`card-premium group relative transition-all duration-500 ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-500" />

                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-md">
                    <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
