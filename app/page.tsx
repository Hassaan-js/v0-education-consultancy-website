"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowUpRight,
  Bot,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Headphones,
  Menu,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  X,
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

function OrbitalVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="orbital-wrap" aria-hidden="true">
      <div className="orbital-grid" />
      <motion.div className="orbital-glow" animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="orbital-ring ring-one" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
      <motion.div className="orbital-ring ring-two" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      <motion.div className="orbital-core" animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="core-mark"><Orbit size={28} strokeWidth={1.25} /></div>
        <span>ORCA / 01</span>
      </motion.div>
      <span className="orbit-label label-top">INTELLIGENCE</span>
      <span className="orbit-label label-right">24 / 7 OPERATIONS</span>
      <span className="orbit-label label-bottom">ISLAMABAD · GLOBAL</span>
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduce = useReducedMotion()
  const closeMenu = () => setMenuOpen(false)

  return (
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
            <Reveal delay={0.08}><h1>Enterprise<br /><em>operations</em><br />redefined<span className="blue-dot">.</span></h1></Reveal>
            <Reveal delay={0.16}><p className="hero-text">ORCA is a global group building the intelligence, people, and systems behind better business.</p></Reveal>
            <Reveal delay={0.22}><div className="hero-actions"><a href="#companies" className="button button-primary">Explore the group <ArrowUpRight size={16} /></a><a href="#about" className="button button-ghost">Our story <span>↘</span></a></div></Reveal>
            <Reveal delay={0.3}><div className="hero-metrics"><div><strong>40<span>%</span></strong><small>Avg. efficiency gain</small></div><div><strong>4<span>+</span></strong><small>Operating companies</small></div><div><strong>24<span>/7</span></strong><small>Global operations</small></div></div></Reveal>
          </div>
          <Reveal delay={0.12} className="hero-art"><OrbitalVisual /></Reveal>
          <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="statement-section section-pad">
          <Reveal><p className="eyebrow">01 / Who we are</p></Reveal>
          <div className="statement-grid"><Reveal delay={0.05}><h2>A diversified group<br />built for the <em>future.</em></h2></Reveal><Reveal delay={0.12}><div className="statement-body"><p>We combine AI, BPO, insurance, and digital growth under one connected operating system — giving ambitious businesses the capabilities to move with clarity and speed.</p><a href="#companies" className="text-link">Meet the companies <ArrowUpRight size={16} /></a></div></Reveal></div>
          <div className="principles-grid"><div><Sparkles size={20} /><span>AI-first by default</span></div><div><Globe2 size={20} /><span>Global by design</span></div><div><Zap size={20} /><span>Built for momentum</span></div></div>
        </section>

        <section id="services" className="services-section section-pad dark-panel">
          <div className="section-heading"><Reveal><p className="eyebrow">02 / What we do</p><h2>Capability that<br /><em>compounds.</em></h2></Reveal><Reveal delay={0.1}><p className="section-intro">The right team, technology, and operating model can change the trajectory of a business. ORCA makes that combination accessible.</p></Reveal></div>
          <div className="service-grid">{services.map(({ icon: Icon, label, text }, index) => <Reveal key={label} delay={index * 0.06}><motion.article className="service-card" whileHover={{ y: -6 }} transition={{ duration: 0.2 }}><div className="card-top"><Icon size={22} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{label}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${label}`}><ArrowUpRight size={18} /></a></motion.article></Reveal>)}</div>
        </section>

        <section id="companies" className="companies-section section-pad">
          <div className="section-heading"><Reveal><p className="eyebrow">03 / Our companies</p><h2>One group.<br /><em>Many edges.</em></h2></Reveal><Reveal delay={0.1}><p className="section-intro">A portfolio of focused businesses, connected by a shared ambition: to make work better and growth more durable.</p></Reveal></div>
          <div className="portfolio-list">{portfolio.map((company, index) => <Reveal key={company.name} delay={index * 0.05}><a href="#contact" className={`portfolio-row ${company.color}`}><span className="portfolio-number">{company.number}</span><span className="portfolio-meta">{company.category}</span><span className="portfolio-name">{company.name}</span><span className="portfolio-description">{company.text}</span><ArrowUpRight className="portfolio-arrow" size={22} /></a></Reveal>)}</div>
        </section>

        <section className="proof-section section-pad"><div className="proof-orb"><div /></div><div className="proof-content"><Reveal><p className="eyebrow">04 / The ORCA advantage</p><h2>Progress is better<br />when it’s <em>connected.</em></h2><p>From the first customer conversation to the last mile of automation, we see the whole system. That is how isolated improvements become durable advantage.</p><a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={16} /></a></Reveal></div><div className="proof-points"><Reveal delay={0.1}><div><strong>100<span>+</span></strong><span>People across the group</span></div><div><strong>12<span>+</span></strong><span>AI service verticals</span></div><div><strong>5</strong><span>Countries reached</span></div><div><strong>6<span>mo</span></strong><span>Typical ROI horizon</span></div></Reveal></div></section>

        <section id="insights" className="insights-section section-pad"><div className="section-heading"><Reveal><p className="eyebrow">05 / From the field</p><h2>Ideas for the<br /><em>next move.</em></h2></Reveal><a href="#contact" className="text-link">View all insights <ArrowUpRight size={16} /></a></div><div className="insights-grid">{insights.map((insight, index) => <Reveal key={insight.title} delay={index * 0.08}><a href="#contact" className="insight-card"><div className="insight-image"><span>{String(index + 1).padStart(2, "0")}</span><div className="insight-lines" /></div><div className="insight-info"><span>{insight.tag} <b>·</b> {insight.date}</span><h3>{insight.title}</h3><ArrowUpRight size={18} /></div></a></Reveal>)}</div></section>

        <section id="contact" className="contact-section section-pad"><div className="contact-inner"><Reveal><p className="eyebrow">06 / Let’s talk</p><h2>Ready to make<br /><em>momentum?</em></h2><p>Tell us where you want to go. We’ll help you find the next right move.</p><a href="mailto:info@orca.com.pk" className="button button-light">Start a conversation <ArrowUpRight size={16} /></a></Reveal><div className="contact-side"><span>Reach the group</span><a href="mailto:info@orca.com.pk">info@orca.com.pk</a><a href="tel:+923335553781">+92 333 555 3781</a><small>Office No. 5, 2nd Floor<br />Muzafar Chamber, Blue Area<br />Islamabad, Pakistan</small></div></div></section>
      </main>

      <footer className="site-footer section-pad"><div className="footer-top"><a href="#top" className="brand"><span className="brand-mark"><span /></span><span className="brand-name">ORCA<span>.</span></span></a><p>A global group building<br />better ways to work.</p><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#companies">Companies</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© 2026 ORCA Enterprises Private Limited</span><span>Islamabad · Global</span><span>LinkedIn&nbsp;&nbsp; Instagram</span></div></footer>
    </div>
  )
}
