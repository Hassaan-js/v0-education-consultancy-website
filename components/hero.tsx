"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors duration-300">
                  ✨ Your UK Education Journey Starts Here
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance premium-heading">
                Expert UK Study Visa & University Admission Guidance
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed text-balance max-w-lg font-medium">
                12+ years of proven expertise helping international students secure admission to top UK universities.
                100% visa approval rate with dedicated guidance from qualified advisors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 justify-center">
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300">
                Explore Services
              </button>
            </div>

            <div className="flex gap-12 pt-10 border-t border-border/60">
              {[
                { number: "250+", label: "Students Successfully Placed" },
                { number: "40+", label: "Partner Universities" },
                { number: "12+", label: "Years in Industry" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1 group">
                  <p className="text-4xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 md:h-full hidden md:flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl blur-3xl" />
            <div className="relative w-full aspect-square max-w-md">
              <img
                src="/students-studying-abroad-in-modern-university-libr.jpg"
                alt="International students studying at UK universities"
                className="w-full h-full object-cover rounded-3xl shadow-premium"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-secondary to-primary text-white p-6 rounded-2xl shadow-premium backdrop-blur-sm border border-white/20">
                <p className="font-bold text-lg">100% Visa Approval</p>
                <p className="text-sm text-white/85 font-medium">Student Admission Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
