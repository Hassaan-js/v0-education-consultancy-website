"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Hassan",
    university: "University of Oxford",
    course: "Master's in Computer Science",
    image: "/professional-man-portrait.jpg",
    quote:
      "Express Consultancy transformed my dream into reality. Their visa guidance was seamless, and I got admitted to Oxford with a full scholarship!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    university: "London School of Economics",
    course: "MBA",
    image: "/professional-woman-portrait.jpg",
    quote:
      "The team's expertise in university selection and application strategy was absolutely invaluable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    university: "University of Cambridge",
    course: "PhD in Research",
    image: "/professional-woman-smiling.jpg",
    quote:
      "Best decision ever. From visa to settlement, they handled everything professionally and promptly. Outstanding support!",
    rating: 5,
  },
  {
    name: "Khalid Al-Mansouri",
    university: "Imperial College London",
    course: "Engineering",
    image: "/professional-man-counselor.jpg",
    quote:
      "Their post-study work visa guidance helped me secure a top tech job in London. Amazing support throughout my journey!",
    rating: 5,
  },
]

export default function SuccessStories() {
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
    <section
      id="stories"
      className="premium-section bg-gradient-to-b from-background to-muted/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-28">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              ⭐
            </div>
            <p className="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20 hover:bg-primary/15 transition-colors duration-300">
              Student Success
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground premium-heading text-balance">
            Success Stories from Our Students
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Real testimonials from students who achieved their dreams with Express Consultancy's dedicated guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`card-premium transition-all duration-500 ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-accent text-accent hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed font-medium text-foreground/80 italic mb-12 relative">
                <span className="text-4xl text-primary/30 absolute -left-4 -top-2">"</span>
                {testimonial.quote}
                <span className="text-4xl text-primary/30 absolute -right-4 -bottom-4">"</span>
              </p>

              <div className="flex items-center gap-4 border-t border-border/60 pt-8">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-18 h-18 rounded-full object-cover shadow-lg border-3 border-primary/20 hover:border-primary/40 transition-all duration-300"
                  loading="lazy"
                />
                <div className="space-y-2">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-base text-primary font-bold">{testimonial.university}</p>
                  <p className="text-xs text-foreground/70 font-semibold uppercase tracking-wide">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
