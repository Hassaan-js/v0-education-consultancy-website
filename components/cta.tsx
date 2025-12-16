export default function CTA() {
  return (
    <section
      id="contact"
      className="premium-section bg-gradient-to-br from-secondary via-[#4a1f5c] to-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance premium-heading">
            Begin Your UK Education Journey Today
          </h2>
          <p className="text-lg text-white/85 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
            Get personalized guidance from our expert UK education consultants. With 12+ years of proven expertise and
            100% visa approval rate, your success is our priority.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button className="bg-white hover:bg-gray-50 text-secondary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 text-lg">
            Schedule Free Consultation
            <span>→</span>
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg">
            Explore Services
          </button>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 flex-wrap">
            <a
              href="tel:+447871820508"
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <span>📞</span>
              <span>+44 7871 820508</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <a
              href="mailto:info@expressconsultancy.co.uk"
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <span>✉️</span>
              <span>info@expressconsultancy.co.uk</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <a
              href="https://wa.me/447871820508"
              className="flex items-center gap-2 hover:text-white transition-colors font-medium"
            >
              <span>💬</span>
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
