"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import LeadFormModal from "./lead-form-modal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Courses", href: "#courses" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Admission Process", href: "#admission-process" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-2xl border-b border-border/40 shadow-lg"
        : "bg-white/70 backdrop-blur-md"
        }`}
    >
      {/* Top Ribbon */}
      <div className="w-full bg-gradient-to-r from-primary via-secondary to-primary text-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-xs font-bold tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <Star size={12} className="fill-white" />
            <span>Your Pathway to Global Education Starts Here</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+447871820508" className="hover:text-accent transition-colors flex items-center gap-1">
              <Phone size={12} /> UK: +44 7871 820508
            </a>
            <a href="tel:+923001234567" className="hover:text-accent transition-colors flex items-center gap-1">
              <Phone size={12} /> PK: +92 300 1234567
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/logo.png"
                alt="Express Consultancy Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="font-extrabold text-[#b8172d] text-lg tracking-tight uppercase">Express Consultancy</span>
              <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase">
                Study & Work In The UK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs lg:text-sm text-foreground/80 hover:text-primary transition-all duration-300 font-bold px-3 py-2 rounded-lg hover:bg-primary/5 relative group uppercase tracking-wide"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-24px)] transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <div className="flex flex-col items-end mr-2">
              <a
                href="tel:+923001234567"
                className="text-[11px] lg:text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                PK: +92 300 1234567
              </a>
              <a
                href="https://wa.me/447871820508"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-semibold text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors"
              >
                <MessageCircle size={10} /> WhatsApp Us
              </a>
            </div>
            <button
              onClick={() => setShowLeadForm(true)}
              className="bg-primary hover:bg-secondary text-white text-[11px] lg:text-xs font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-primary" aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-8 border-t border-border/40 bg-white animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-1 py-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-4 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold rounded-xl border-l-4 border-transparent hover:border-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="px-4 py-4 space-y-3 border-t border-border/40 mt-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+923001234567"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-primary transition-all group"
                >
                  <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold mt-1 uppercase text-gray-500">Call Pakistan</span>
                </a>
                <a
                  href="https://wa.me/447871820508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-green-50 border border-green-100 hover:bg-white hover:border-green-500 transition-all group"
                >
                  <MessageCircle size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold mt-1 uppercase text-gray-500">WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => { setShowLeadForm(true); setIsOpen(false); }}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-secondary transition-all"
              >
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>

      <LeadFormModal
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        formType="consultation"
      />
    </nav>
  )
}

