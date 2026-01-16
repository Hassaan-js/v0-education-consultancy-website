"use client"

import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Bilal Ahmed",
    university: "Ulster University",
    course: "Business Management",
    image: "/young-pakistani-man-professional-headshot.jpg",
    quote:
      "I applied for a study visa through Express Consultancy in 2022 and I'm extremely pleased with their services. The team members were genuinely professional and exceptionally helpful, especially Mr. Shujat Abbasi, the manager, who provided excellent guidance throughout the process. Within just one and a half months, my entire application was processed, and I successfully obtained my UK visa. I wholeheartedly recommend their services.",
    rating: 5,
  },
  {
    name: "Hazam Kiani",
    university: "Teesside University",
    course: "Computer Science",
    image: "/young-pakistani-man-casual-headshot.jpg",
    quote:
      "Supportive staff, really help you with everything you don't need to be worried about any working. They charge nothing until work is done. You can call and meet them whenever you want and they are really trust worthy.",
    rating: 5,
  },
  {
    name: "Muhammad Jamal",
    university: "Anglia Ruskin University",
    course: "Healthcare Management",
    image: "/pakistani-man-with-glasses-professional.jpg",
    quote:
      "Very efficient, reliable and professional people at Express Consultancy. Level of support and guidance through the process was exceptional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Talha Naseer",
    university: "University of Bedfordshire",
    course: "MBA",
    image: "/young-pakistani-man-smiling-professional.jpg",
    quote:
      "Reliable and efficient advisory for study abroad and immigration. Every step in the whole process were smooth. Excellent work ethics and informational contacts. Working offices both in UK and Pak. And all that i got from personal experiences.",
    rating: 5,
  },
  {
    name: "Mustajab Ahmad",
    university: "Northumbria University",
    course: "Engineering",
    image: "/young-pakistani-man-formal-attire.jpg",
    quote:
      "EC was a great help during my journey to study in the UK. I was one of the pioneer and they guided me in choosing the right university and course. Their support made the application and visa processes much easier because they have a registered office in the UK and you can directly involve with the Uni and develop more understanding. I highly recommend Express Consultancy to any student wanting to study abroad.",
    rating: 5,
  },
  {
    name: "Rohaan Zaheer",
    university: "University of Hull",
    course: "International Business",
    image: "/pakistani-man-casual-portrait.jpg",
    quote:
      "I visit lot of consultants but Express Consultancy is on top they help me about my visa. Staff was really friendly and always ready to help you, Thank you very much for your services",
    rating: 5,
  },
]

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2))
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
    setAutoPlay(false)
  }

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

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-12 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="card-premium">
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
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i)
                  setAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-8" : "bg-primary/40 hover:bg-primary/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
