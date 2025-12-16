"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Play } from "lucide-react"
import VideoPlayer from "./video-player"

const videoTestimonials = [
  {
    name: "Student Success Story",
    university: "UK University",
    course: "Study Abroad Program",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Student%20Review%20Express%20Consultancy-h9yKqZSyu5oEM6vmT46OidiQkhFbla.mp4",
    thumbnail: "/student-testimonial-woman.jpg",
    rating: 5,
    highlight: "Watch our student share their journey with Express Consultancy",
  },
]

export default function VideoTestimonials() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
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
      id="video-testimonials"
      className="premium-section bg-gradient-to-b from-muted/50 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-28">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              🎥
            </div>
            <p className="text-secondary font-bold text-xs tracking-widest uppercase bg-secondary/10 px-6 py-3 rounded-full backdrop-blur-sm border border-secondary/20 hover:bg-secondary/15 transition-colors duration-300">
              Video Testimonials
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground premium-heading text-balance">
            Hear Directly from Our Students
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Watch inspiring stories of students who achieved their UK education dreams with Express Consultancy's expert
            guidance and support.
          </p>
        </div>

        {/* Selected Video Player */}
        {selectedVideo !== null && (
          <div className="mb-20 animate-fadeInScale">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{videoTestimonials[selectedVideo].name}</h3>
                <p className="text-primary font-semibold mt-2">{videoTestimonials[selectedVideo].university}</p>
                <p className="text-foreground/70 text-sm mt-1">{videoTestimonials[selectedVideo].course}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Close
              </button>
            </div>
            <VideoPlayer
              videoUrl={videoTestimonials[selectedVideo].videoUrl}
              thumbnail={videoTestimonials[selectedVideo].thumbnail}
              title={videoTestimonials[selectedVideo].name}
            />
            <p className="mt-8 text-lg text-foreground/80 italic font-medium leading-relaxed">
              "{videoTestimonials[selectedVideo].highlight}"
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <div
            ref={(el) => {
              cardsRef.current[0] = el
            }}
            className={`card-premium cursor-pointer group transition-all duration-500 max-w-2xl ${
              visibleCards.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            onClick={() => setSelectedVideo(0)}
          >
            {/* Video Thumbnail */}
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-black">
              <img
                src={videoTestimonials[0].thumbnail || "/placeholder.svg"}
                alt={videoTestimonials[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-9 h-9 text-black fill-black" />
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1.5 mb-4 justify-center">
              {[...Array(videoTestimonials[0].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-accent text-accent hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Student Info */}
            <p className="font-bold text-foreground text-xl mb-3 text-center">{videoTestimonials[0].name}</p>
            <p className="text-primary font-semibold mb-2 text-center">{videoTestimonials[0].university}</p>
            <p className="text-foreground/70 text-sm font-semibold uppercase tracking-wide mb-5 text-center">
              {videoTestimonials[0].course}
            </p>

            {/* Highlight */}
            <p className="text-foreground/80 font-medium text-base italic text-center mb-6">
              "{videoTestimonials[0].highlight}"
            </p>

            {/* Watch Video CTA */}
            <button className="w-full py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-3 group-hover:gap-4">
              <Play className="w-5 h-5 fill-white" />
              Watch Full Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
