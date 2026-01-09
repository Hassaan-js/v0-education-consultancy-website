"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, TrendingUp, Users, Lightbulb, Code, Globe, ArrowRight } from "lucide-react"
import LeadFormModal from "./lead-form-modal"

const courses = [
  {
    icon: BookOpen,
    title: "Management Studies",
    description: "Business administration, MBA, and strategic management programs for future leaders.",
    color: "from-primary to-secondary",
  },
  {
    icon: TrendingUp,
    title: "Business & Economics",
    description: "Economics, finance, and commerce programs for global business careers.",
    color: "from-secondary to-blue-500",
  },
  {
    icon: Code,
    title: "Technology & Engineering",
    description: "IT, software engineering, and computer science degrees for tech careers.",
    color: "from-primary/80 to-accent",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Advanced research programs and postgraduate studies at leading universities.",
    color: "from-accent to-orange-500",
  },
  {
    icon: Users,
    title: "Social Sciences",
    description: "Psychology, sociology, and law exploring human behavior and justice.",
    color: "from-rose-500 to-primary",
  },
  {
    icon: Globe,
    title: "International Studies",
    description: "Global politics, international relations, and cultural studies in multicultural UK.",
    color: "from-secondary to-primary",
  },
]

export default function PopularCourses() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")
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

  const handleLearnMore = (title: string) => {
    setSelectedCourse(title)
    setShowLeadForm(true)
  }

  return (
    <section id="courses" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <BookOpen size={16} className="text-primary" />
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Popular Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Explore Top <span className="text-primary">Courses & Fields</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Discover a wide range of academic programs tailored to your career aspirations in the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon
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
                <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden">
                  <div className={`absolute top-0 left-10 right-10 h-1.5 bg-gradient-to-r ${course.color} rounded-b-full`} />

                  <div className={`w-20 h-20 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="text-white" size={40} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium mb-8">
                    {course.description}
                  </p>

                  <button
                    onClick={() => handleLearnMore(course.title)}
                    className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/btn"
                  >
                    Learn More
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
