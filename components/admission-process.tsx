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
        className="premium-section bg-gradient-to-br from-background via-secondary/3 to-primary/3 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-24">
            <div className="inline-block mx-auto">
              <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <p className="text-primary font-semibold text-xs tracking-widest uppercase">Your Journey</p>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground premium-heading text-balance">
              Your Admission Process
            </h2>
            <p className="text-xl text-foreground/75 max-w-3xl mx-auto font-medium">
              We guide you through every step of your UK education journey with genuine support, professional expertise, and proven success strategies.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />
            
            {steps.map((step, index) => {
              const colors = [
                "from-primary to-rose-500",
                "from-secondary to-purple-500",
                "from-accent to-orange-500",
                "from-primary to-secondary",
                "from-secondary to-accent",
                "from-rose-500 to-primary",
                "from-accent to-primary",
                "from-purple-500 to-secondary",
              ]
              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepsRef.current[index] = el
                  }}
                  className={`transition-all duration-500 ${
                    visibleSteps.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div className="card-premium group hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                      <div className="flex-shrink-0 relative">
                        <div className={`bg-gradient-to-br ${colors[index % colors.length]} w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                          <span className="text-white font-bold text-3xl">{step.number}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="hidden lg:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                            <ArrowRight className="text-primary rotate-90" size={24} />
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-4 pt-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {step.title}
                          </h3>
                          <CheckCircle2 className="text-primary flex-shrink-0 hidden md:block group-hover:scale-125 transition-transform duration-300" size={28} />
                        </div>
                        <p className="text-foreground/75 leading-relaxed font-medium text-base">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <p className="text-sm font-bold text-primary">Duration: {step.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
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
