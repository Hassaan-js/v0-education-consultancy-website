"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, MessageCircle, Send, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)
  const [email, setEmail] = useState("")

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic
    alert("Subscribed successfully!")
    setEmail("")
  }

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "UK Study Visa", href: "#services" },
        { label: "University Admissions", href: "#services" },
        { label: "Test Preparation", href: "#services" },
        { label: "Post-Study Work Visas", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Success Stories", href: "#success-stories" },
        { label: "Admission Process", href: "#admission-process" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl">E</div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg tracking-tight uppercase">Express Consultancy</span>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase">UK Education Experts</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering international students with expert guidance for UK education since 2012. 100% visa success rate guaranteed.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com/expressconsultancy", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com/company/expressconsultancy", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://wa.me/447871820508", label: "WhatsApp" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerSections.map((section, i) => (
            <div key={i} className="space-y-6">
              <h4 className="font-bold text-white text-base uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-base uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm">Get the latest UK education updates and scholarship alerts.</p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/5 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Call Us</p>
              <p className="text-sm text-white font-bold">+44 7871 820508</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Us</p>
              <p className="text-sm text-white font-bold">info@expressconsultancy.co.uk</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Visit Us</p>
              <p className="text-sm text-white font-bold">Reading & Islamabad</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium">
            &copy; {currentYear} Express Consultancy Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
