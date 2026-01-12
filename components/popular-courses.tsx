"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, TrendingUp, Users, Lightbulb, Code, Globe } from "lucide-react"

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

  const handleLearnMore = (courseTitle: string) => {
    const message = `Hi! I'd like to learn more about ${courseTitle} programs in the UK.`
    window.open(`https://wa.me/447871820508?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section
      id="courses"
      className="premium-section bg-gradient-to-b from-background via-white/50 to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-28">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              🎓
            </div>
            <p className="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20 hover:bg-primary/15 transition-colors duration-300">
              Academic Excellence
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground premium-heading text-balance">
            Popular Courses & Fields
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore diverse academic programs available at our premier partner universities across the UK and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`card-premium group overflow-hidden transition-all duration-500 ${
                  visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${course.color} shadow-lg`} />
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${course.color} opacity-8 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-8 sm:p-10">
                  <div
                    className={`bg-gradient-to-br ${course.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    <Icon className="text-white" size={40} />
                  </div>

                  <h3 className="text-2xl md:text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-base text-foreground/70 leading-relaxed font-medium mb-10">{course.description}</p>

                  <button
                    onClick={() => handleLearnMore(course.title)}
                    className="inline-flex items-center gap-3 text-primary font-bold text-base hover:gap-5 transition-all duration-300 group/btn hover:text-secondary"
                  >
                    Learn More
                    <span className="inline-block group-hover/btn:translate-x-2 transition-transform duration-300 text-xl">
                      →
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
