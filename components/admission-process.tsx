"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import ConsultationModal from "./consultation-modal"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Begin your journey with a personalized consultation where our expert advisors understand your academic profile, career aspirations, and educational preferences. We'll assess your background and discuss universities that align perfectly with your goals.",
    duration: "5-7 days",
  },
  {
    number: "02",
    title: "University Selection",
    description:
      "Based on your profile and preferences, we'll curate a selection of 8-12 universities that match your aspirations. Each recommendation includes detailed institutional insights, program specifics, and campus culture information to help you make informed decisions.",
    duration: "1 week",
  },
  {
    number: "03",
    title: "Application Preparation",
    description:
      "Our experienced team guides you through comprehensive application preparation. We assist with Statement of Purpose, Letters of Recommendation, resume refinement, and essay composition. Each document receives rigorous feedback to showcase your strengths effectively.",
    duration: "2-3 weeks",
  },
  {
    number: "04",
    title: "Submit Applications",
    description:
      "We ensure timely and accurate submission of all applications through UCAS or directly to universities. Our team manages submission tracking, follows up on required documents, and maintains communication with institutions to ensure your application's success.",
    duration: "1-2 weeks",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Receive intensive interview coaching tailored to your target universities. We conduct mock interviews, cover technical subjects, develop soft skills, and build your confidence. Practice sessions simulate real interview environments for maximum preparation.",
    duration: "2-3 weeks",
  },
  {
    number: "06",
    title: "Offer & Visa Processing",
    description:
      "Once admission offers arrive, we guide your final university selection. Our visa specialists manage the complete visa documentation process, submit applications to UK Visas & Immigration, and provide regular updates on your visa status.",
    duration: "3-6 weeks",
  },
  {
    number: "07",
    title: "Pre-Departure Support",
    description:
      "Get comprehensive guidance on accommodation arrangements, travel logistics, banking setup, travel insurance, and cultural orientation. We prepare you thoroughly for a smooth and confident transition to UK student life.",
    duration: "2-3 weeks",
  },
  {
    number: "08",
    title: "Post-Arrival & Beyond",
    description:
      "Our support continues after your arrival. We assist with settlement, work visa options, career guidance, and ongoing academic support throughout your university journey. You're never alone in your UK education experience.",
    duration: "Ongoing",
  },
]

export default function AdmissionProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const [showConsultationModal, setShowConsultationModal] = useState(false)
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
    <>
      <section
        id="admission-process"
        className="premium-section bg-gradient-to-br from-background via-muted/20 to-secondary/5"
      >
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
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white font-bold text-2xl">{step.number}</span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <CheckCircle2 className="text-primary flex-shrink-0 hidden md:block" size={24} />
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-medium max-w-2xl">
                        {step.description}
                      </p>
                      <p className="text-sm font-semibold text-primary">Duration: {step.duration}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block text-muted-foreground/30 flex-shrink-0 mt-2" size={20} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => setShowConsultationModal(true)}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-3"
            >
              Start Your Journey Today
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
    </>
  )
}
