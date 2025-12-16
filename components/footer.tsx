"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "UK Study Visa", href: "#" },
        { label: "University Admissions", href: "#" },
        { label: "Test Preparation", href: "#" },
        { label: "Post-Study Work Visas", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#" },
        { label: "Success Stories", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-400 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg tracking-tight">Express Consultancy</span>
                <span className="text-xs text-gray-500 font-medium">UK Education Experts</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs font-medium">
              12+ years of expertise in UK student visas, university admissions, and career guidance. Your trusted
              partner for educational success.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { label: "Facebook", href: "#", color: "from-primary" },
                { label: "LinkedIn", href: "#", color: "from-secondary" },
                { label: "WhatsApp", href: "https://wa.me/447871820508", color: "from-green-600" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-br ${social.color} to-primary/50 hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 text-white shadow-md hover:shadow-lg hover:scale-110`}
                  aria-label={social.label}
                >
                  <span className="text-lg font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="font-bold text-white text-lg tracking-tight">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-1 group text-sm font-medium"
                    >
                      {item.label}
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg tracking-tight">Contact Us</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "+44 7871 820508",
                  detail: "UK Office",
                  href: "tel:+447871820508",
                  color: "text-primary",
                },
                {
                  icon: Mail,
                  label: "info@expressconsultancy.co.uk",
                  detail: "Email us",
                  href: "mailto:info@expressconsultancy.co.uk",
                  color: "text-secondary",
                },
                {
                  icon: MapPin,
                  label: "1 Alfred Street, Reading",
                  detail: "RG1 7AT, UK",
                  href: "#contact",
                  color: "text-primary",
                },
                {
                  icon: MapPin,
                  label: "Kashmir Plaza, Blue Area",
                  detail: "Islamabad, Pakistan",
                  href: "#contact",
                  color: "text-secondary",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex items-start gap-3 group">
                    <Icon
                      size={18}
                      className={`${item.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="flex flex-col">
                      <a
                        href={item.href}
                        className="text-white font-semibold hover:text-primary transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                      <span className="text-xs text-gray-500 font-medium">{item.detail}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {currentYear} Express Consultancy PVT Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ].map((item, i) => (
              <div key={item.href} className="flex items-center gap-6">
                <Link
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
                {i === 0 && <div className="w-px h-4 bg-gray-700" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
