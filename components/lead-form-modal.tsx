"use client"

import { useState } from "react"
import { X, Send, Loader2, MessageCircle } from "lucide-react"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  formType?: "consultation" | "application" | "inquiry"
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  isWhatsApp: boolean
  country: string
  isInUK: string
  studyType: string
  subject: string
}

export default function LeadFormModal({ isOpen, onClose, formType = "consultation" }: LeadFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isWhatsApp: true,
    country: "",
    isInUK: "no",
    studyType: "",
    subject: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Integration with Formspree or similar
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType,
          subject: `New ${formType} request from ${formData.firstName} ${formData.lastName}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          onClose()
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            isWhatsApp: true,
            country: "",
            isInUK: "no",
            studyType: "",
            subject: "",
          })
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      setFormData((prev: FormData) => ({
        ...prev,
        [name]: checkbox.checked,
      }))
    } else {
      setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  if (!isOpen) return null

  const formTitle = {
    consultation: "Free Consultation",
    application: "Apply Now",
    inquiry: "Start Your Journey",
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
          aria-label="Close form"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Form Header */}
        <div className="bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{formTitle[formType]}</h2>
          <p className="text-white/90 text-base font-medium">
            Fill out the form below and our expert team will contact you within 24 hours.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl font-medium flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span>Thank you! We'll contact you soon.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl font-medium">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-bold text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-bold text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-bold text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="+92 300 1234567"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isWhatsApp"
                name="isWhatsApp"
                checked={formData.isWhatsApp}
                onChange={handleChange}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="isWhatsApp" className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <MessageCircle size={16} className="text-green-600" />
                This is my WhatsApp number
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-bold text-gray-700">
                Country of Residence *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Pakistan"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Are you in the UK? *</label>
              <div className="flex gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isInUK"
                    value="yes"
                    checked={formData.isInUK === "yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-gray-600">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="isInUK"
                    value="no"
                    checked={formData.isInUK === "no"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-gray-600">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="studyType" className="text-sm font-bold text-gray-700">
              Type of Study *
            </label>
            <select
              id="studyType"
              name="studyType"
              value={formData.studyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
            >
              <option value="">Select study level</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate (Master's)</option>
              <option value="phd">PhD / Research</option>
              <option value="foundation">Foundation / Pre-sessional</option>
              <option value="shortcourse">Short Course</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-bold text-gray-700">
              Subject Interested *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="e.g. Master's in Business Administration"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Request
              </>
            )}
          </button>

          <p className="text-sm text-gray-600 text-center font-medium">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  )
}
