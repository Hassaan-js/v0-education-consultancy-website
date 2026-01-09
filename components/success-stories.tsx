"use client"

import { Star, Quote } from "lucide-react"

const testimonialsRow1 = [
  {
    name: "Ahmed Hassan",
    university: "University of Oxford",
    course: "Computer Science",
    image: "/professional-man-portrait.jpg",
    quote: "Express Consultancy transformed my dream into reality. Their guidance was seamless!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    university: "LSE",
    course: "MBA",
    image: "/professional-woman-portrait.jpg",
    quote: "Expertise in university selection was invaluable. Highly recommended for UK studies!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    university: "University of Cambridge",
    course: "PhD in Research",
    image: "/professional-woman-smiling.jpg",
    quote: "Best decision ever. From visa to settlement, they handled everything professionally.",
    rating: 5,
  },
  {
    name: "Zainab Rashid",
    university: "University of Manchester",
    course: "MSc Data Science",
    image: "/professional-woman-headshot.png",
    quote: "Amazing team! They helped me secure my visa in record time. Thank you so much!",
    rating: 5,
  }
]

const testimonialsRow2 = [
  {
    name: "Khalid Al-Mansouri",
    university: "Imperial College",
    course: "Engineering",
    image: "/professional-man-counselor.jpg",
    quote: "Their post-study work visa guidance helped me secure a top tech job in London.",
    rating: 5,
  },
  {
    name: "Suresh Raina",
    university: "University of Birmingham",
    course: "MSc Finance",
    image: "/student-testimonial-man.jpg",
    quote: "From admission to arrival, the support was constant and professional. 10/10!",
    rating: 5,
  },
  {
    name: "Elena Petrova",
    university: "University of Leeds",
    course: "MA Design",
    image: "/student-testimonial-woman.jpg",
    quote: "I was confused about the visa process, but they made it look so easy. Highly expert!",
    rating: 5,
  },
  {
    name: "Usman Ali",
    university: "University of Glasgow",
    course: "LLM Law",
    image: "/professional-man-headshot.png",
    quote: "Excellent service and deep knowledge of UK education system. Highly satisfied.",
    rating: 5,
  }
]

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-white border border-gray-100 p-8 rounded-[2rem] shadow-xl shadow-primary/5 hover:border-primary/20 transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-6">
        <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
        <div>
          <h4 className="font-bold text-gray-900">{t.name}</h4>
          <p className="text-xs font-bold text-primary uppercase tracking-tight">{t.university}</p>
        </div>
      </div>
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-primary/10 w-8 h-8 -z-10" />
        <p className="text-gray-600 font-medium leading-relaxed italic line-clamp-3">"{t.quote}"</p>
      </div>
      <div className="flex gap-1 mt-6">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  )
}

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
          <Star size={14} className="text-primary fill-primary" />
          <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Student Success Stories</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
          Real Stories, <span className="text-primary">Real Success</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          See how we've helped hundreds of students achieve their dreams of studying in the UK.
        </p>
      </div>

      <div className="space-y-8">
        {/* Row 1: Left to Right */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
