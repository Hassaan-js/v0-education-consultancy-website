"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import LeadFormModal from "./lead-form-modal"

const steps = [
  {
    number: "01",
    title: "Expert Consultation",
    description:
      "A personalized session with our expert advisors to map out your academic journey and career goals. We identify the best institutions that align with your aspirations.",
    duration: "15-30 mins",
  },
  {
    number: "02",
    title: "Strategic Selection",
    description:
      "We curate a list of top-tier universities and programs tailored to your profile, ensuring the highest probability of admission and scholarship success.",
    duration: "1 week",
  },
  {
    number: "03",
    title: "Premium Documentation",
    description:
      "Professional guidance in crafting compelling Statements of Purpose (SOP), resumes, and letters of recommendation that stand out to admission committees.",
    duration: "2-3 weeks",
  },
  {
    number: "04",
    title: "Seamless Application",
    description:
      "Dedicated support throughout the submission process. we handle all technicalities and follow-ups to ensure your applications are processed smoothly.",
    duration: "Ongoing",
  },
  {
    number: "05",
    title: "Interview Coaching",
    description:
      "Comprehensive interview preparation, including mock sessions and expert tips to build your confidence and ensure a successful outcome.",
    duration: "1-2 weeks",
  },
  {
    number: "06",
    title: "Visa & CAS Support",
    description:
      "End-to-end assistance with CAS requests and visa documentation. Our 100% success rate ensures a stress-free transition to your new university.",
    duration: "3-4 weeks",
  },
  {
    number: "07",
    title: "Pre-Arrival Briefing",
    description:
      "Essential guidance on accommodation, travel, banking, and life in the UK to ensure you are fully prepared for your international study experience.",
    duration: "1 week",
  },
  {
    number: "08",
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at arrival. We provide ongoing support for settlement, career advice, and post-study opportunities in the UK.",
    duration: "Continuous",
  },
]

export default function AdmissionProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const [showLeadForm, setShowLeadForm] = useState(false)
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
    <section id="admission-process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase bg-primary/5 px-4 py-2 rounded-full inline-block">
            Your Success Blueprint
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Our Proven <span className="text-primary">Admission Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Join hundreds of successful students who followed our strategic 8-step process to secure their future in the UK.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepsRef.current[index] = el
              }}
              className={`transition-all duration-700 ${visibleSteps.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2.5rem] hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary font-black text-2xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                    {step.number}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest pt-2">
                      <CheckCircle2 size={14} />
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-full font-black text-lg transition-all duration-500 shadow-2xl shadow-primary/20 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto group"
          >
            Start Your Journey Today
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <LeadFormModal
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        formType="consultation"
      />
    </section>
  )
}
