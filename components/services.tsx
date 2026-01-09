"use client"

import { Globe, FileText, Plane, Users, BookOpen, Briefcase, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import LeadFormModal from "./lead-form-modal"

const services = [
  {
    icon: Globe,
    title: "UK Study Visa Consultation",
    description:
      "Expert guidance on UK student visa requirements, application process, and documentation. Our specialists ensure smooth visa approval with 100% success rate.",
  },
  {
    icon: FileText,
    title: "University Admissions",
    description:
      "Complete support selecting suitable universities, preparing applications, personal statements, and securing admission offers from top UK institutions.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation Guidance",
    description:
      "Strategic guidance for IELTS, TOEFL, GRE, GMAT and other standardized tests required for UK university admissions.",
  },
  {
    icon: Plane,
    title: "Departure & Settlement",
    description:
      "Comprehensive support on accommodation, travel arrangements, insurance, banking, and cultural orientation for your UK arrival.",
  },
  {
    icon: Users,
    title: "Spouse & Family Visas",
    description:
      "Dedicated assistance for dependent visas, spouse visas, and family settlement in the UK with compliance expertise.",
  },
  {
    icon: Briefcase,
    title: "Post-Study Work Visas",
    description: "Navigate Graduate Route and work visa options to build your career in the UK after graduation.",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [selectedService, setSelectedService] = useState("")
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

  const handleInquiry = (title: string) => {
    setSelectedService(title)
    setShowLeadForm(true)
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
            <Globe size={16} className="text-secondary" />
            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Our Comprehensive <span className="text-primary">Consultancy Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Tailored solutions to navigate your UK education journey with confidence and ease.
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
                className={`transition-all duration-700 ${visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2.5rem] hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group h-full flex flex-col">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium mb-8 flex-grow">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleInquiry(service.title)}
                    className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/btn"
                  >
                    Get Info
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <LeadFormModal
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        formType="inquiry"
      />
    </section>
  )
}
