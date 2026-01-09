"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Star, CheckCircle } from "lucide-react"
import LeadFormModal from "./lead-form-modal"

export default function HeroEnhanced() {
  const [isVisible, setIsVisible] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formType, setFormType] = useState<"consultation" | "application" | "inquiry">("consultation")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "250+", label: "Successful Placements" },
    { number: "40+", label: "Partner Universities" },
    { number: "12+", label: "Years Experience" },
    { number: "100%", label: "Visa Success Rate" },
  ]

  return (
    <section id="about" className="relative overflow-hidden pt-36 pb-20 md:pb-32 px-4 shadow-inner">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[#fdfdfd]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Star size={14} className="text-primary fill-primary" />
                <span className="text-primary font-bold text-[10px] tracking-widest uppercase">Trusted UK Education Experts</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Your <span className="text-primary underline decoration-secondary/30">Dream University</span> in the UK is Just One Step Away
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Unlock global opportunities with Express Consultancy. We provide personalized guidance for university admissions, visa processing, and career planning with a 100% success rate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => { setFormType("consultation"); setShowLeadForm(true); }}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Book Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => { setFormType("application"); setShowLeadForm(true); }}
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Apply Now
                <CheckCircle size={18} className="text-primary" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex gap-8 pt-8 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-black text-primary">{stat.number}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105 -z-10" />
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
              <img
                src="/students-at-uk-university-campus.jpg"
                alt="Students at UK Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-primary/10">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">100% Success Rate</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">Visa & Admissions Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white animate-bounce">
              🎓
            </div>
            <div className="absolute -bottom-4 -left-12 bg-primary text-white p-4 rounded-2xl shadow-2xl font-bold text-sm -rotate-6">
              12+ Years Excellence
            </div>
          </div>
        </div>
      </div>

      <LeadFormModal
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        formType={formType}
      />
    </section>
  )
}
