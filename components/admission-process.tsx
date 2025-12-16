"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Meet with our advisors to understand your academic background, career goals, and preferences. We'll discuss suitable universities and programs tailored to your profile.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "University Selection",
    description:
      "Based on your profile, we'll recommend 5-10 universities that match your aspirations. We'll provide detailed insights about each institution and campus life.",
    duration: "1-2 weeks",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "We'll guide you in preparing your application materials: SOP, LOR, resume refinement, and essay writing. Our advisors will provide comprehensive feedback on every document.",
    duration: "3-4 weeks",
  },
  {
    number: "04",
    title: "Submit Applications",
    description:
      "We'll ensure all applications are submitted on time through UCAS or directly to universities. We'll track submission status and handle any follow-ups.",
    duration: "Ongoing",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Receive personalized interview coaching covering common questions, technical topics, and soft skills. We'll conduct mock interviews to build your confidence.",
    duration: "2-4 weeks",
  },
  {
    number: "06",
    title: "Offer & Visa Processing",
    description:
      "Once you receive offers, we'll guide you in making the final choice. Our visa specialists will handle documentation, submission, and follow-ups with UK Visas & Immigration.",
    duration: "4-8 weeks",
  },
  {
    number: "07",
    title: "Pre-Departure Support",
    description:
      "Get guidance on accommodation, travel arrangements, banking setup, insurance, and orientation. We'll prepare you for a smooth transition to UK student life.",
    duration: "2-4 weeks",
  },
  {
    number: "08",
    title: "Post-Arrival & Beyond",
    description:
      "We remain your support system even after you arrive. Assistance with settlement, work visa options, and career guidance throughout your academic journey.",
    duration: "Ongoing",
  },
]

export default function AdmissionProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleSteps((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="premium-section bg-gradient-to-br from-background via-muted/20 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary font-semibold text-xs tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/15 transition-colors inline-block mx-auto backdrop-blur-sm">
            Your Journey
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground premium-heading">
            Your Admission Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We guide you through every step of your UK education journey with genuine support and professional
            expertise.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepsRef.current[index] = el
              }}
              className={`transition-all duration-500 ${
                visibleSteps.has(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="card-premium group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <CheckCircle2 className="text-primary flex-shrink-0 hidden md:block" size={24} />
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed font-medium max-w-2xl">{step.description}</p>
                    <p className="text-sm font-semibold text-primary">Duration: {step.duration}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block text-muted-foreground/30 flex-shrink-0 mt-2" size={20} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-3">
            Start Your Journey Today
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
