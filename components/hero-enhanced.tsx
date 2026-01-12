"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Star } from "lucide-react"
import ConsultationModal from "./consultation-modal"

export default function HeroEnhanced() {
  const [isVisible, setIsVisible] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleApplyNow = () => {
    window.open("https://wa.me/923515123456?text=Hi! I'd like to apply for UK university admission.", "_blank")
  }

  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-muted/20" />
          <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-primary/6 via-secondary/4 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            <div
              className={`space-y-8 lg:space-y-10 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-block">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                    <Star size={14} className="text-primary flex-shrink-0" fill="currentColor" />
                    <p className="text-primary font-bold text-xs tracking-widest uppercase">
                      Your UK Education Gateway
                    </p>
                  </div>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-tight text-balance premium-heading">
                  Your Pathway to Global Education Starts Here
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-foreground/75 leading-relaxed text-balance max-w-2xl font-medium">
                  With 12+ years of proven expertise, we guide international students through UK admissions, visa
                  processing, and career pathways. Our 100% visa approval rate is backed by dedicated professional
                  advisors committed to your success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 lg:pt-6">
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="button-primary flex items-center justify-center gap-3 group text-sm sm:text-base w-full sm:w-auto"
                >
                  Book Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleApplyNow}
                  className="button-outline flex items-center justify-center gap-3 group text-sm sm:text-base w-full sm:w-auto"
                >
                  Apply Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:gap-8 lg:gap-12 pt-12 lg:pt-16 border-t border-border/60 gap-6">
                {[
                  { number: "250+", label: "Students Placed" },
                  { number: "40+", label: "Partner Universities" },
                  { number: "12+", label: "Years Experience" },
                  { number: "100%", label: "Visa Success Rate" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1.5 lg:space-y-2 group">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/70 font-semibold uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative h-full min-h-96 md:min-h-[550px] hidden md:flex items-center justify-center transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 rounded-3xl blur-3xl glow-animation" />

              <div className="relative w-full aspect-square max-w-md">
                <img
                  src="/students-at-uk-university-campus.jpg"
                  alt="International students at UK universities"
                  className="w-full h-full object-cover rounded-3xl shadow-premium border border-white/30 hover:shadow-premium-hover transition-all duration-500"
                  loading="lazy"
                />

                <div className="absolute -bottom-10 -left-10 flex gap-4">
                  {["🇬🇧", "🇦🇺", "🇨🇦"].map((flag, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-premium border-4 border-primary/40 float-animation hover:scale-125 transition-transform duration-300 cursor-pointer"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {flag}
                    </div>
                  ))}
                </div>

                <div className="absolute -bottom-6 -right-8 card-glass p-7 rounded-2xl shadow-premium border-2 border-white/40 backdrop-blur-xl hover:shadow-premium-hover transition-all duration-300">
                  <p className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    100% Success
                  </p>
                  <p className="text-sm text-foreground/80 font-semibold">Visa Approval & Admission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
    </>
  )
}
