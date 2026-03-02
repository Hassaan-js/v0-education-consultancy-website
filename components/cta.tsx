"use client"

import { useState } from "react"
import ConsultationModal from "./consultation-modal"

export default function CTA() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  const handleExploreServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <section
        id="cta"
        className="premium-section bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <p className="text-white font-semibold text-xs tracking-widest uppercase">Limited Time Offer</p>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight text-balance premium-heading">
              Begin Your UK Education Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
              Get personalized guidance from our expert UK education consultants. With 12+ years of proven expertise and 100% visa approval rate, your success is our priority.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => setShowConsultationModal(true)}
              className="bg-white hover:bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-95 group"
            >
              Schedule Free Consultation
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={handleExploreServices}
              className="border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:border-white/80"
            >
              Explore Services
            </button>
          </div>

          <div className="pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <a
                href="tel:+447871820508"
                className="flex flex-col items-center gap-3 group p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">📞</div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-sm">Call Us</p>
                  <p className="text-white/80 text-xs font-medium">+44 7871 820508</p>
                </div>
              </a>

              <div className="hidden sm:block w-px h-auto bg-gradient-to-b from-transparent via-white/30 to-transparent" />

              <a
                href="mailto:info@expressconsultancy.co.uk"
                className="flex flex-col items-center gap-3 group p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">✉️</div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-sm">Email Us</p>
                  <p className="text-white/80 text-xs font-medium">info@expressconsultancy.co.uk</p>
                </div>
              </a>

              <div className="hidden sm:block w-px h-auto bg-gradient-to-b from-transparent via-white/30 to-transparent" />

              <a
                href="https://wa.me/447871820508"
                className="flex flex-col items-center gap-3 group p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300">💬</div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-sm">WhatsApp</p>
                  <p className="text-white/80 text-xs font-medium">Quick Support</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
    </>
  )
}
