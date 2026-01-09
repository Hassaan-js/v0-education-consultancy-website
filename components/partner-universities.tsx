"use client"

import { useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { GraduationCap, ExternalLink } from "lucide-react"

const universities = [
  { name: "Ulster University", url: "https://www.ulster.ac.uk/", color: "from-blue-500/10 to-indigo-500/10" },
  { name: "Teesside University", url: "https://www.tees.ac.uk/", color: "from-orange-500/10 to-red-500/10" },
  { name: "Anglia Ruskin University", url: "https://www.aru.ac.uk/", color: "from-purple-500/10 to-pink-500/10" },
  { name: "Keele University", url: "https://www.keele.ac.uk/", color: "from-green-500/10 to-emerald-500/10" },
  { name: "London Metropolitan University", url: "https://www.londonmet.ac.uk/", color: "from-red-500/10 to-rose-500/10" },
  { name: "University of Hull", url: "https://www.hull.ac.uk/", color: "from-yellow-500/10 to-amber-500/10" },
  { name: "Middlesex University", url: "https://www.mdx.ac.uk/", color: "from-blue-600/10 to-cyan-500/10" },
  { name: "University of Bedfordshire", url: "https://www.beds.ac.uk/", color: "from-teal-500/10 to-green-500/10" },
  { name: "University of Wolverhampton", url: "https://www.wlv.ac.uk/", color: "from-amber-600/10 to-orange-500/10" },
  { name: "Northumbria University", url: "https://www.northumbria.ac.uk/", color: "from-slate-500/10 to-gray-500/10" },
  { name: "University of Portsmouth", url: "https://www.port.ac.uk/", color: "from-indigo-600/10 to-purple-500/10" },
  { name: "Glasgow Caledonian University", url: "https://www.gcu.ac.uk/", color: "from-sky-500/10 to-blue-500/10" },
  { name: "Canterbury Christ Church", url: "https://www.canterbury.ac.uk/", color: "from-violet-500/10 to-indigo-500/10" },
  { name: "University of Roehampton", url: "https://www.roehampton.ac.uk/", color: "from-pink-600/10 to-rose-500/10" },
]

export default function PartnerUniversities() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="universities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 scale-90">
            <GraduationCap size={16} className="text-secondary" />
            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase">Our Global Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Partner <span className="text-primary">Universities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We collaborate with prestigious UK institutions to provide you with the best educational opportunities.
          </p>
        </div>

        <div className="relative group">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4">
              {universities.map((uni, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]">
                  <a
                    href={uni.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/card h-full"
                  >
                    <div className={`h-full bg-gradient-to-br ${uni.color} border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden`}>
                      <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <ExternalLink size={16} className="text-primary" />
                      </div>

                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-500">
                        <GraduationCap size={32} className="text-primary" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover/card:text-primary transition-colors line-clamp-2">
                        {uni.name}
                      </h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        Official Partner
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .embla {
          cursor: grab;
        }
        .embla:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  )
}
