import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import HeroEnhanced from "@/components/hero-enhanced"
import PopularCourses from "@/components/popular-courses"
import Services from "@/components/services"
import SuccessStories from "@/components/success-stories"
import PartnerUniversities from "@/components/partner-universities"
import AdmissionProcess from "@/components/admission-process"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Express Consultancy | UK Study Visa & University Admissions Experts",
  description:
    "Premier UK education consultancy with 12+ years expertise in study visa processing, university admissions to Oxford, Cambridge, LSE, Imperial. 100% visa approval rate. Expert guidance for international students.",
  alternates: {
    canonical: "https://expressconsultancy.co.uk",
  },
  openGraph: {
    title: "Express Consultancy | UK Study Visa & University Admissions Experts",
    description: "Premier UK education consultancy with 12+ years expertise. 100% visa approval rate.",
    url: "https://expressconsultancy.co.uk",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background overflow-hidden">
        <HeroEnhanced />
        <section id="courses" aria-labelledby="courses-heading">
          <PopularCourses />
        </section>
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>
        <section id="success-stories" aria-labelledby="success-heading">
          <SuccessStories />
        </section>
        <section id="universities" aria-labelledby="universities-heading">
          <PartnerUniversities />
        </section>
        <section id="admission-process" aria-labelledby="admission-heading">
          <AdmissionProcess />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
