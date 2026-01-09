"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Cambridge University, UK",
    quote: "Express Consultancy made my UK university admission seamless. Their visa expertise and support throughout the process was invaluable.",
    rating: 5,
    image: "/professional-woman-portrait.jpg",
  },
  {
    name: "Ali Raza",
    location: "University of Manchester, UK",
    quote: "Outstanding service from start to finish. The team's knowledge of UK immigration and university requirements is unmatched.",
    rating: 5,
    image: "/professional-man-portrait.jpg",
  },
  {
    name: "Zara Khan",
    location: "LSE, UK",
    quote: "Professional, knowledgeable, and genuinely caring team. They treated my case with utmost importance. Best decision ever!",
    rating: 5,
    image: "/professional-woman-smiling.jpg",
  },
  {
    name: "Ahmed Malik",
    location: "University of Oxford, UK",
    quote: "Their personalized approach and 100% visa success rate speaks for itself. They guided me through every step confidently.",
    rating: 5,
    image: "/professional-man-counselor.jpg",
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Quote size={14} className="text-primary fill-primary" />
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Student Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            What Our <span className="text-primary">Students Say</span>
          </h2>
        </div>

        <div className="relative group/slider">
          <div className="embla overflow-hidden px-4" ref={emblaRef}>
            <div className="embla__container flex -ml-8">
              {testimonials.map((t, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 pl-8 md:flex-[0_0_50%] lg:flex-[0_0_40%]">
                  <div className="h-full bg-gray-50 border border-gray-100 p-10 rounded-[3rem] transition-all duration-500 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group relative">
                    <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote size={48} />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-lg font-medium leading-relaxed italic mb-8 relative z-10">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/10" />
                      <div>
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-tight">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover/slider:opacity-100 -translate-x-6">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all opacity-0 group-hover/slider:opacity-100 translate-x-6">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
