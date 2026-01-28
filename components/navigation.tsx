"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import ConsultationModal from "./consultation-modal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Courses", href: "#courses" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Admission Process", href: "#admission-process" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-white/90 backdrop-blur-lg border-b border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Express Consultancy Logo"
                width={50}
                height={50}
                className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-bold text-foreground text-base md:text-lg tracking-tight">
                  Express Consultancy
                </span>
                <span className="text-xs text-secondary font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Study & Work In The UK
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 font-medium px-3.5 py-2 rounded-lg hover:bg-primary/5 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3.5 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-[calc(100%-28px)] transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => scrollToSection("#contact")}
                className="button-primary shadow-lg text-sm font-semibold px-6 py-3"
              >
                Contact Us
              </button>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="button-secondary text-xs font-medium px-4 py-2"
              >
                Free Consultation
              </button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-8 border-t border-border/40 bg-white/95 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="space-y-1 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="px-4 py-4 space-y-3 border-t border-border/40 mt-4">
                <a
                  href="https://wa.me/923515123456?text=Hi! I'd like to learn more about UK education consultancy services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full text-center block"
                >
                  WhatsApp Us
                </a>
                <button onClick={() => setShowConsultationModal(true)} className="button-primary w-full">
                  Free Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
    </>
  )
}
