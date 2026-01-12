"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Cambridge University, UK",
    quote:
      "Express Consultancy made my UK university admission seamless. Their visa expertise and support throughout the process was invaluable. Highly recommended!",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Ali Raza",
    location: "University of Manchester, UK",
    quote:
      "Outstanding service from start to finish. The team's knowledge of UK immigration and university requirements is unmatched. Got my visa approved on first attempt!",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    name: "Zara Khan",
    location: "London School of Economics, UK",
    quote:
      "Professional, knowledgeable, and genuinely caring team. They treated my case with utmost importance and ensured smooth admission to LSE. Best decision ever!",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Ahmed Malik",
    location: "University of Oxford, UK",
    quote:
      "Express Consultancy's personalized approach and 100% visa success rate speaks for itself. They guided me through every step professionally and confidently.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
]

export default function Testimonials() {
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
    <section id="testimonials" className="premium-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block mx-auto">
            <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors duration-300">
              Student Success Stories
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground premium-heading">What Our Students Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`card-premium group transition-all duration-500 ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -right-4 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Quote size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-base italic font-medium">"{testimonial.quote}"</p>

              <div className="border-t border-border/60 pt-6 flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-border/60"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-foreground text-base">{testimonial.name}</p>
                  <p className="text-primary text-sm font-semibold">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
