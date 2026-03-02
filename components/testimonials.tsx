"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Bilal Ahmed",
    location: "Ulster University",
    quote:
      "I applied for a study visa through Express Consultancy in 2022 and I'm extremely pleased with their services. The team members were genuinely professional and exceptionally helpful, especially Mr. Shujat Abbasi, the manager, who provided excellent guidance throughout the process. Within just one and a half months, my entire application was processed, and I successfully obtained my UK visa. I wholeheartedly recommend their services.",
    rating: 5,
    reviews: 4,
    image: "/young-pakistani-man-professional-headshot.jpg",
  },
  {
    name: "Hazam Kiani",
    location: "Teesside University",
    quote:
      "Supportive staff, really help you with everything you don't need to be worried about any working. They charge nothing until work is done. You can call and meet them whenever you want and they are really trust worthy.",
    rating: 5,
    reviews: 2,
    image: "/young-pakistani-man-casual-headshot.jpg",
  },
  {
    name: "Muhammad Jamal",
    location: "Anglia Ruskin University",
    quote:
      "Very efficient, reliable and professional people at Express Consultancy. Level of support and guidance through the process was exceptional. Highly recommended!",
    rating: 5,
    reviews: 3,
    image: "/pakistani-man-with-glasses-professional.jpg",
  },
  {
    name: "Talha Naseer",
    location: "University of Bedfordshire",
    quote:
      "Reliable and efficient advisory for study abroad and immigration. Every step in the whole process were smooth. Excellent work ethics and informational contacts. Working offices both in UK and Pak. And all that i got from personal experiences.",
    rating: 5,
    reviews: 6,
    image: "/young-pakistani-man-smiling-professional.jpg",
  },
  {
    name: "Mustajab Ahmad",
    location: "Northumbria University",
    quote:
      "EC was a great help during my journey to study in the UK. I was one of the pioneer and they guided me in choosing the right university and course. Their support made the application and visa processes much easier because they have a registered office in the UK and you can directly involve with the Uni and develop more understanding. I highly recommend Express Consultancy to any student wanting to study abroad.",
    rating: 5,
    reviews: 5,
    image: "/young-pakistani-man-formal-attire.jpg",
  },
  {
    name: "Rohaan Zaheer",
    location: "University of Hull",
    quote:
      "I visit lot of consultants but Express Consultancy is on top they help me about my visa. Staff was really friendly and always ready to help you, Thank you very much for your services",
    rating: 5,
    reviews: 4,
    image: "/pakistani-man-casual-portrait.jpg",
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
    <section id="testimonials" className="premium-section bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-24">
          <div className="inline-block mx-auto">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-primary font-semibold text-xs tracking-widest uppercase">Student Success Stories</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground premium-heading text-balance">
            What Our Students Say
          </h2>
          <p className="text-xl text-foreground/75 max-w-3xl mx-auto font-medium">
            Real experiences from international students who achieved their UK education dreams with Express Consultancy's expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`card-premium group relative overflow-hidden transition-all duration-500 ${
                visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-500" />

              <div className="relative z-10 space-y-6 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote size={24} className="text-primary/20 group-hover:text-primary/50 transition-colors duration-300" />
                </div>

                <p className="text-foreground/85 leading-relaxed text-base font-medium flex-grow">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border/60 pt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="flex-grow">
                    <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-primary text-sm font-semibold">
                      {testimonial.location}
                    </p>
                    <p className="text-foreground/60 text-xs font-medium">
                      {testimonial.reviews} review{testimonial.reviews > 1 ? "s" : ""} • a year ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
