"use client"

import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="premium-section bg-gradient-to-br from-primary/3 via-secondary/3 to-accent/3 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-28">
          <div className="flex items-center justify-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              📞
            </div>
            <p className="text-primary font-bold text-xs tracking-widest uppercase bg-primary/10 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20 hover:bg-primary/15 transition-colors duration-300">
              Get In Touch
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground premium-heading text-balance">
            Contact Us Today
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Ready to start your UK education journey? Reach out to our team for personalized guidance and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6 lg:space-y-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "+44 7871 820508",
                secondary: "Direct line to our advisors",
                href: "tel:+447871820508",
                color: "from-primary to-rose-500",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                detail: "+44 7871 820508",
                secondary: "Quick chat with our team",
                href: "https://wa.me/447871820508",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "info@expressconsultancy.co.uk",
                secondary: "Response within 24 hours",
                href: "mailto:info@expressconsultancy.co.uk",
                color: "from-secondary to-purple-500",
              },
              {
                icon: Clock,
                title: "Office Hours",
                detail: "Monday - Friday: 9 AM - 6 PM",
                secondary: "Weekend support available",
                href: "#",
                color: "from-orange-500 to-amber-500",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={i}
                  href={item.href}
                  className="card-premium group hover:shadow-premium-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    <div
                      className={`bg-gradient-to-br ${item.color} w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <p className="font-bold text-foreground text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-base lg:text-lg font-bold text-primary break-all">{item.detail}</p>
                      <p className="text-sm text-foreground/70 font-medium">{item.secondary}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* UK Office */}
          <div className="space-y-6 lg:space-y-8">
            <div className="card-premium">
              <div className="flex items-start gap-4 lg:gap-6 mb-6 pb-6 border-b border-border/60">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <p className="font-bold text-xl lg:text-2xl text-foreground">UK Office</p>
                  <p className="text-base lg:text-lg font-bold text-foreground">Express Consultancy PVT Ltd</p>
                  <p className="text-base lg:text-lg font-semibold text-primary">1 Alfred Street</p>
                  <p className="text-base lg:text-lg font-semibold text-primary">Reading, RG1 7AT, UK</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-foreground/70 font-medium leading-relaxed">
                Located in the heart of Reading, our modern office is easily accessible via public transport.
              </p>
            </div>

            {/* Pakistan Office */}
            <div className="card-premium">
              <div className="flex items-start gap-4 lg:gap-6 mb-6 pb-6 border-b border-border/60">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <p className="font-bold text-xl lg:text-2xl text-foreground">Pakistan Office</p>
                  <p className="text-base lg:text-lg font-bold text-foreground">Express Consultancy</p>
                  <p className="text-base lg:text-lg font-semibold text-secondary">Office No 3 & 4, Mezzanine Floor</p>
                  <p className="text-base lg:text-lg font-semibold text-secondary">Kashmir Plaza, Blue Area</p>
                  <p className="text-base lg:text-lg font-semibold text-secondary">Islamabad, Pakistan</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-foreground/70 font-medium leading-relaxed">
                Conveniently located in Blue Area, Islamabad's business district, accessible to students nationwide.
              </p>
            </div>

            {/* Google Map - UK Office */}
            <div className="rounded-2xl overflow-hidden shadow-premium border-2 border-border/60 h-72 lg:h-96 hover:shadow-premium-hover transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.8231474832756!2d-0.9755!3d51.4417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a1b9b9b9b9%3A0x1b9b9b9b9b9b9b9b!2s1%20Alfred%20Street%2C%20Reading%20RG1%207AT!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Express Consultancy UK Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
