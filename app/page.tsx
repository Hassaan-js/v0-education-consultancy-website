"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Headphones,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Orbit,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  UserRound,
  Zap,
} from "lucide-react"

const services = [
  { icon: Headphones, label: "BPO excellence", text: "Customer experience, technical support, and back-office operations that scale with your business." },
  { icon: Bot, label: "AI intelligence", text: "Autonomous agents and workflow intelligence that turn repetitive work into measurable advantage." },
  { icon: ShieldCheck, label: "Insurance solutions", text: "High-performing insurance sales teams, warm leads, and a better way to build revenue." },
  { icon: Network, label: "Digital transformation", text: "Connected systems, sharper processes, and modern operating models built for the next stage." },
]

const portfolio = [
  { number: "01", name: "Orca BPO Services", category: "BPO division", text: "24/7 customer support, technical operations, and revenue enablement for global teams.", color: "cyan" },
  { number: "02", name: "Seltzer Intelligence", category: "AI division", text: "Autonomous AI agents for enterprise transformation across 12+ service verticals.", color: "violet" },
  { number: "03", name: "Kiani Life & Health", category: "Insurance division", text: "World-class training, warm leads, and uncapped opportunity for ambitious advisors.", color: "lime" },
  { number: "04", name: "RevUp Solutions", category: "Growth division", text: "A focused growth engine connecting strategy, technology, and high-intent demand.", color: "blue" },
]

const insights = [
  { tag: "Operating model", title: "The new advantage is an intelligent operating layer.", date: "06.08.26" },
  { tag: "AI & people", title: "What human-led automation actually looks like in practice.", date: "05.22.26" },
  { tag: "BPO trends", title: "From outsourced support to embedded business capability.", date: "04.11.26" },
]

const testimonials = [
  { quote: "ORCA gave us the operating clarity to scale without losing the human detail our customers notice.", name: "Ayesha Rahman", role: "COO · Global Commerce Platform", mark: "AR" },
  { quote: "The team feels like an extension of our own. Faster decisions, cleaner workflows, and a measurable lift in every handoff.", name: "Daniel Brooks", role: "VP Operations · Northstar Health", mark: "DB" },
  { quote: "We moved from fragmented vendors to one connected growth system — and the momentum has been undeniable.", name: "Maya Chen", role: "Founder · Meridian Ventures", mark: "MC" },
]

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const timeout = window.setTimeout(onComplete, reduce ? 550 : 2200)
    return () => window.clearTimeout(timeout)
  }, [onComplete, reduce])

  return (
    <motion.div className="intro-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <div className="loader-topline"><span>ORCA ENTERPRISES</span><span>ISLAMABAD · GLOBAL</span></div>
      <div className="loader-center">
        <motion.div className="earth-loader" animate={reduce ? undefined : { rotateY: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
          <div className="earth-atmosphere" />
          <div className="earth-land land-a" />
          <div className="earth-land land-b" />
          <div className="earth-grid-lines" />
        </motion.div>
        <motion.div className="loader-orbit orbit-a" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />
        <motion.div className="loader-orbit orbit-b" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        <motion.div className="loader-wordmark" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span>ORCA</span><em>ENTERPRISES</em>
        </motion.div>
      </div>
      <div className="loader-bottomline"><span>BUILDING BETTER WAYS TO WORK</span><span>01 / 01</span></div>
      <motion.div className="loader-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduce ? 0.4 : 2, ease: "easeInOut" }} />
    </motion.div>
  )
}

const particleSeeds = Array.from({ length: 22 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: index % 4 === 0 ? 4 : 2,
  delay: (index % 7) * 0.35,
  duration: 4 + (index % 5),
}))

function ParticleField() {
  const reduce = useReducedMotion()
  return <div className="particle-field" aria-hidden="true">{particleSeeds.map((particle, index) => <motion.span key={index} className="particle" style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }} animate={reduce ? undefined : { y: [0, -18, 0], x: [0, index % 2 ? 10 : -10, 0], opacity: [0.12, index % 4 === 0 ? 0.9 : 0.45, 0.12], scale: [0.8, 1.25, 0.8] }} transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }} />)}</div>
}

function TiltServiceCard({ Icon, label, text, index, active, onActivate }: { Icon: typeof Headphones; label: string; text: string; index: number; active: boolean; onActivate: () => void }) {
  const reduce = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [8, -8]), { stiffness: 170, damping: 18 })
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-8, 8]), { stiffness: 170, damping: 18 })
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduce) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
    onActivate()
  }
  const resetPointer = () => { pointerX.set(0); pointerY.set(0) }

  return <motion.article className={`service-card ${active ? "is-active" : ""}`} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} onFocus={onActivate} whileHover={reduce ? undefined : { y: -9, scale: 1.02 }} style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} tabIndex={0}>
    <div className="service-card-shine" />
    <div className="card-top"><Icon size={22} strokeWidth={1.5} /><span>0{index + 1}</span></div>
    <h3>{label}</h3><p>{text}</p>
    <div className="service-progress"><motion.span animate={{ scaleX: active ? 1 : 0.24 }} transition={{ duration: 0.35 }} /></div>
    <a href="#contact" aria-label={`Learn more about ${label}`}><ArrowUpRight size={18} /></a>
  </motion.article>
}

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const reduce = useReducedMotion()
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const updateField = (key: keyof typeof fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: "" }))
  }
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!fields.name.trim()) nextErrors.name = "Your name is required"
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) nextErrors.email = "Enter a valid email"
    if (!fields.message.trim()) nextErrors.message = "Tell us a little about the opportunity"
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setIsSubmitting(true)
    window.setTimeout(() => { setIsSubmitting(false); onSuccess(); setFields({ name: "", email: "", company: "", message: "" }) }, 650)
  }
  const inputMotion = reduce ? undefined : { y: [0, -2, 0] }
  return <form className="contact-form" onSubmit={submitForm} noValidate>
    <div className="form-grid">
      <label><span><UserRound size={14} /> Your name</span><input value={fields.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Ayesha Rahman" aria-invalid={Boolean(errors.name)} />{errors.name && <motion.small className="field-error" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>↳ {errors.name}</motion.small>}</label>
      <label><span><Mail size={14} /> Work email</span><input type="email" value={fields.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />{errors.email && <motion.small className="field-error" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>↳ {errors.email}</motion.small>}</label>
      <label><span><Building2 size={14} /> Company</span><input value={fields.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Your organization" /></label>
      <label className="form-message"><span><MessageCircle size={14} /> What are you building?</span><textarea value={fields.message} onChange={(event) => updateField("message", event.target.value)} placeholder="A quick overview of the next move..." aria-invalid={Boolean(errors.message)} />{errors.message && <motion.small className="field-error" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>↳ {errors.message}</motion.small>}</label>
    </div>
    <motion.button type="submit" className="button button-light form-submit" disabled={isSubmitting} whileTap={reduce ? undefined : { scale: 0.97 }} animate={isSubmitting && !reduce ? inputMotion : undefined}>{isSubmitting ? "Sending..." : "Send the brief"} <Send size={16} /></motion.button>
  </form>
}

function OrbitalVisual() {
  const reduce = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.7 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.7 })
  const gridX = useTransform(smoothX, [-1, 1], [-10, 10])
  const gridY = useTransform(smoothY, [-1, 1], [-10, 10])
  const coreX = useTransform(smoothX, [-1, 1], [-20, 20])
  const coreY = useTransform(smoothY, [-1, 1], [-20, 20])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div className="orbital-wrap" aria-hidden="true" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} whileHover={reduce ? undefined : { scale: 1.015 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div className="orbital-grid" style={reduce ? undefined : { x: gridX, y: gridY }} />
      <motion.div className="orbital-glow" animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orbital-ring ring-one" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
      <motion.div className="orbital-ring ring-two" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      <motion.div className="orbital-ring ring-three" animate={reduce ? undefined : { rotate: 360, scale: [1, 1.04, 1] }} transition={{ rotate: { duration: 38, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity, ease: "easeInOut" } }} />
      <motion.div className="orbital-core" style={reduce ? undefined : { x: coreX, y: coreY }} animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <motion.div className="core-mark" whileHover={reduce ? undefined : { rotate: 180, scale: 1.08 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}><Orbit size={28} strokeWidth={1.25} /></motion.div>
        <span>ORCA / 01</span>
      </motion.div>
      <motion.span className="orbit-label label-top" animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>INTELLIGENCE</motion.span>
      <span className="orbit-label label-right">24 / 7 OPERATIONS</span>
      <span className="orbit-label label-bottom">ISLAMABAD · GLOBAL</span>
      <motion.span className="orbital-node node-one" animate={reduce ? undefined : { x: [0, 12, 0], y: [0, -10, 0], opacity: [0.25, 1, 0.25] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="orbital-node node-two" animate={reduce ? undefined : { x: [0, -10, 0], y: [0, 8, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
    </motion.div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)
  const [activeService, setActiveService] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [contactSuccess, setContactSuccess] = useState(false)
  const reduce = useReducedMotion()
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <AnimatePresence mode="wait">{introVisible && <IntroLoader onComplete={() => setIntroVisible(false)} />}</AnimatePresence>
      <div className="orca-site">
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="ORCA home">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">ORCA<span>.</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          {["About", "Services", "Companies", "Insights"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-mobile-cta" onClick={closeMenu}>Start a conversation <ArrowUpRight size={16} /></a>
        </nav>
        <a href="#contact" className="header-cta">Get in touch <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <Reveal><p className="eyebrow"><span className="pulse-dot" /> Islamabad, Pakistan · Est. 2018</p></Reveal>
            <Reveal delay={0.08}><motion.h1 initial={reduce ? false : "hidden"} animate={reduce ? undefined : "show"} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } }}> <motion.span className="hero-word" variants={{ hidden: { opacity: 0, y: 38, rotateX: 12 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>Enterprise</motion.span><br /><motion.span className="hero-word" variants={{ hidden: { opacity: 0, y: 38, rotateX: 12 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}><em>operations</em></motion.span><br /><motion.span className="hero-word" variants={{ hidden: { opacity: 0, y: 38, rotateX: 12 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>redefined<span className="blue-dot">.</span></motion.span></motion.h1></Reveal>
            <Reveal delay={0.16}><p className="hero-text">ORCA is a global group building the intelligence, people, and systems behind better business.</p></Reveal>
            <Reveal delay={0.22}><div className="hero-actions"><motion.a href="#companies" className="button button-primary" whileHover={reduce ? undefined : { x: 5, boxShadow: "0 12px 30px rgba(57,169,255,.18)" }} whileTap={reduce ? undefined : { scale: 0.97 }}>Explore the group <motion.span animate={reduce ? undefined : { x: [0, 4, 0], y: [0, -4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}><ArrowUpRight size={16} /></motion.span></motion.a><motion.a href="#about" className="button button-ghost" whileHover={reduce ? undefined : { x: 5 }} whileTap={reduce ? undefined : { scale: 0.97 }}>Our story <motion.span animate={reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: .2 }}>↘</motion.span></motion.a></div></Reveal>
            <Reveal delay={0.3}><div className="hero-metrics"><div><strong>40<span>%</span></strong><small>Avg. efficiency gain</small></div><div><strong>4<span>+</span></strong><small>Operating companies</small></div><div><strong>24<span>/7</span></strong><small>Global operations</small></div></div></Reveal>
          </div>
          <Reveal delay={0.12} className="hero-art"><OrbitalVisual /></Reveal>
          <motion.div className="scroll-cue" animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><span>Scroll to explore</span><motion.span className="scroll-line" animate={reduce ? undefined : { scaleX: [0.5, 1, 0.5], transformOrigin: "left" }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} /></motion.div>
        </section>

        <section id="about" className="statement-section section-pad">
          <Reveal><p className="eyebrow">01 / Who we are</p></Reveal>
          <div className="statement-grid"><Reveal delay={0.05}><h2>A diversified group<br />built for the <em>future.</em></h2></Reveal><Reveal delay={0.12}><div className="statement-body"><p>We combine AI, BPO, insurance, and digital growth under one connected operating system — giving ambitious businesses the capabilities to move with clarity and speed.</p><a href="#companies" className="text-link">Meet the companies <ArrowUpRight size={16} /></a></div></Reveal></div>
          <div className="principles-grid"><div><Sparkles size={20} /><span>AI-first by default</span></div><div><Globe2 size={20} /><span>Global by design</span></div><div><Zap size={20} /><span>Built for momentum</span></div></div>
        </section>

        <section id="services" className="services-section section-pad dark-panel">
          <div className="section-heading"><Reveal><p className="eyebrow">02 / What we do</p><h2>Capability that<br /><em>compounds.</em></h2></Reveal><Reveal delay={0.1}><p className="section-intro">The right team, technology, and operating model can change the trajectory of a business. ORCA makes that combination accessible.</p></Reveal></div>
          <div className="services-atmosphere"><ParticleField /><div className="services-radial" /></div><div className="service-grid">{services.map(({ icon: Icon, label, text }, index) => <Reveal key={label} delay={index * 0.06}><TiltServiceCard Icon={Icon} label={label} text={text} index={index} active={activeService === index} onActivate={() => setActiveService(index)} /></Reveal>)}</div>
        </section>

        <section id="testimonials" className="testimonials-section section-pad dark-panel"><div className="testimonial-intro"><Reveal><p className="eyebrow">03 / Field notes</p><h2>Trusted by teams<br />moving with <em>intent.</em></h2><p className="section-intro">The best operating systems are felt in the details: fewer dropped handoffs, stronger customer moments, and room to move faster.</p></Reveal><div className="testimonial-controls"><button onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button><span>0{activeTestimonial + 1} / 0{testimonials.length}</span><button onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div><div className="testimonial-stage"><AnimatePresence mode="wait"><motion.blockquote key={activeTestimonial} initial={reduce ? false : { opacity: 0, y: 36, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={reduce ? undefined : { opacity: 0, y: -24 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}><span className="quote-mark">“</span><p>{testimonials[activeTestimonial].quote}</p><footer><span className="testimonial-avatar">{testimonials[activeTestimonial].mark}</span><span><strong>{testimonials[activeTestimonial].name}</strong><small>{testimonials[activeTestimonial].role}</small></span></footer></motion.blockquote></AnimatePresence><div className="testimonial-scan" /></div></section>

        <section id="companies" className="companies-section section-pad">
          <div className="section-heading"><Reveal><p className="eyebrow">03 / Our companies</p><h2>One group.<br /><em>Many edges.</em></h2></Reveal><Reveal delay={0.1}><p className="section-intro">A portfolio of focused businesses, connected by a shared ambition: to make work better and growth more durable.</p></Reveal></div>
          <div className="portfolio-list">{portfolio.map((company, index) => <Reveal key={company.name} delay={index * 0.05}><a href="#contact" className={`portfolio-row ${company.color}`}><span className="portfolio-number">{company.number}</span><span className="portfolio-meta">{company.category}</span><span className="portfolio-name">{company.name}</span><span className="portfolio-description">{company.text}</span><ArrowUpRight className="portfolio-arrow" size={22} /></a></Reveal>)}</div>
        </section>

        <section className="proof-section section-pad"><div className="proof-orb"><div /></div><div className="proof-content"><Reveal><p className="eyebrow">04 / The ORCA advantage</p><h2>Progress is better<br />when it’s <em>connected.</em></h2><p>From the first customer conversation to the last mile of automation, we see the whole system. That is how isolated improvements become durable advantage.</p><a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={16} /></a></Reveal></div><div className="proof-points"><Reveal delay={0.1}><div><strong>100<span>+</span></strong><span>People across the group</span></div><div><strong>12<span>+</span></strong><span>AI service verticals</span></div><div><strong>5</strong><span>Countries reached</span></div><div><strong>6<span>mo</span></strong><span>Typical ROI horizon</span></div></Reveal></div></section>

        <section id="insights" className="insights-section section-pad"><div className="section-heading"><Reveal><p className="eyebrow">05 / From the field</p><h2>Ideas for the<br /><em>next move.</em></h2></Reveal><a href="#contact" className="text-link">View all insights <ArrowUpRight size={16} /></a></div><div className="insights-grid">{insights.map((insight, index) => <Reveal key={insight.title} delay={index * 0.08}><a href="#contact" className="insight-card"><div className="insight-image"><span>{String(index + 1).padStart(2, "0")}</span><div className="insight-lines" /></div><div className="insight-info"><span>{insight.tag} <b>·</b> {insight.date}</span><h3>{insight.title}</h3><ArrowUpRight size={18} /></div></a></Reveal>)}</div></section>

        <section id="contact" className="contact-section section-pad"><div className="contact-inner"><Reveal><p className="eyebrow">06 / Let’s talk</p><h2>Ready to make<br /><em>momentum?</em></h2><p>Tell us where you want to go. We’ll help you find the next right move.</p><div className="contact-side"><span>Reach the group</span><a href="mailto:info@orca.com.pk">info@orca.com.pk</a><a href="tel:+923335553781">+92 333 555 3781</a><small>Office No. 5, 2nd Floor<br />Muzafar Chamber, Blue Area<br />Islamabad, Pakistan</small></div></Reveal><Reveal delay={0.1}><ContactForm onSuccess={() => setContactSuccess(true)} /></Reveal></div></section>
      </main>

      <footer className="site-footer section-pad"><div className="footer-top"><a href="#top" className="brand"><span className="brand-mark"><span /></span><span className="brand-name">ORCA<span>.</span></span></a><p>A global group building<br />better ways to work.</p><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#companies">Companies</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© 2026 ORCA Enterprises Private Limited</span><span>Islamabad · Global</span><span>LinkedIn&nbsp;&nbsp; Instagram</span></div>      </footer>
      <AnimatePresence>{contactSuccess && <motion.div className="success-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setContactSuccess(false)}><motion.div className="success-modal" initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduce ? undefined : { opacity: 0, y: 18, scale: 0.97 }} onClick={(event) => event.stopPropagation()}><div className="success-mark"><Check size={22} /></div><p className="eyebrow">Message received</p><h2>Momentum is<br /><em>in motion.</em></h2><p>Thanks for reaching out. The ORCA team will review your brief and be in touch shortly.</p><button className="button button-primary" onClick={() => setContactSuccess(false)}>Back to the page <ArrowUpRight size={16} /></button></motion.div></motion.div>}</AnimatePresence>
      </div>
    </>
  )
}
