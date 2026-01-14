"use client"

import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Bilal Ahmed",
    location: "Oxford University",
    quote:
      "I applied for a study visa through Express Consultancy in 2022 and I'm extremely pleased with their services. The team members were genuinely professional and exceptionally helpful, especially Mr. Shahid Abass, the manager, who provided excellent guidance throughout the process. Within just one and a half months, my entire application was processed, and I moved to the UK. I wholeheartedly recommend their services.",
    rating: 5,
    reviews: 1,
    image: "/testimonials/bilal-ahmed.jpg",
  },
  {
    name: "Hazam Kiani",
    location: "Cambridge University",
    quote:
      "Supportive staff, really help you with everything you don't need to be worried about any working. They charge nothing until work is done. You can check and meet them whenever you want and they are really trust worthy.",
    rating: 5,
    reviews: 2,
    image: "/testimonials/hazam-kiani.jpg",
  },
  {
    name: "Muhammad Jamal",
    location: "Imperial College London",
    quote:
      "Very efficient, reliable and professional people at Express Consultancy. Level of support and guidance through the process was exceptional. Highly recommended!",
    rating: 5,
    reviews: 3,
    image: "/testimonials/muhammad-jamal.jpg",
  },
  {
    name: "Talha Naseer",
    location: "LSE (London School of Economics)",
    quote:
      "Reliable and efficient advisory for study abroad and immigration. Every step in the whole process were smooth. Excellent work ethics and contacts. Working offices both in UK and Pak. And all that I got from personal experiences.",
    rating: 5,
    reviews: 6,
    image: "/testimonials/talha-naseer.jpg",
  },
  {
    name: "MustaJab AHMAD",
    location: "University of Manchester",
    quote:
      "EC was a great help during my journey to study in the UK. I was one of the pioneer and they guided me in choosing the right university and course. Their support made the application and visa processes much easier because they have a registered office in the UK and you can directly involve with the Uni and develop more understanding. I highly recommend Express Consultancy to any student wanting to study abroad.",
    rating: 5,
    reviews: 5,
    image: "/testimonials/mustajab-ahmad.jpg",
  },
  {
    name: "Rohaan Zaheer",
    location: "University of Edinburgh",
    quote:
      "I visit lot of consultants but Express Consultancy is on top they help me about my visa. Staff was really friendly and always ready to help you. Thank you very much for your services",
    rating: 5,
    reviews: 4,
    image: "/testimonials/rohaan-zaheer.jpg",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
                <span className="text-xs text-gray-500 ml-2">a year ago</span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm italic font-medium">"{testimonial.quote}"</p>

              <div className="border-t border-border/60 pt-4 flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-border/60"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-primary text-xs font-semibold">
                    {testimonial.reviews} review{testimonial.reviews > 1 ? "s" : ""}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
