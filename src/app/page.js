"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ShoppingBag,
  BriefcaseBusiness,
  Laptop,
  Megaphone,
  Globe2,
  MoveUpRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const divisions = [
  {
    number: "01",
    title: "Commerce & E-commerce",
    description:
      "Building and operating commerce experiences that connect products, people and markets.",
    icon: ShoppingBag,
    tags: ["Digital commerce", "Online retail", "Market access"]
  },
  {
    number: "02",
    title: "Business Solutions",
    description:
      "Helping individuals turn ideas into structured businesses, and helping existing businesses operate and grow.",
    icon: BriefcaseBusiness,
    tags: ["Business setup", "Operations", "Growth support"]
  },
  {
    number: "03",
    title: "Technology Solutions",
    description:
      "Applying practical technology to simplify processes, improve experiences and support modern business.",
    icon: Laptop,
    tags: ["Digital solutions", "Web experiences", "Technology"]
  },
  {
    number: "04",
    title: "Advertising & Marketing",
    description:
      "Helping brands reach the right audiences through thoughtful advertising and marketing services.",
    icon: Megaphone,
    tags: ["Brand visibility", "Campaigns", "Marketing"]
  }
];

const principles = [
  ["Commerce at the core", "We start with real needs, useful products and meaningful business opportunities."],
  ["Technology with purpose", "We use technology as an enabler — making commerce and business work better."],
  ["Built for people and business", "Our work supports individuals taking their first step and businesses ready for the next."]
];

function Brand({ light = false }) {
  return (
    <a href="#home" className={`brand-mark ${light ? "brand-mark-light" : ""}`} aria-label="CroppTech With Commerce home">
      <span className="brand-symbol">C</span>
      <span className="brand-wordmark">
        <strong>CROPPTECH</strong>
        <small>WITH COMMERCE</small>
      </span>
    </a>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Main navigation">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["What we do", "#services"],
              ["Our approach", "#approach"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a href={href} key={label} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow"><span /> A GLOBAL COMMERCE & BUSINESS COMPANY</div>
            <h1>Commerce first.<br /><em>Technology</em> driven.</h1>
            <p className="hero-lede">
              We build businesses, power commerce and deliver solutions that help people and organisations move forward.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#services">Explore what we do <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#about">Discover CroppTech <ArrowDownRight size={17} /></a>
            </div>
          </motion.div>
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-core">
              <span className="core-c">C</span>
              <span className="core-caption">COMMERCE<br />IN MOTION</span>
            </div>
            <span className="orbit-label label-top">IDEAS → ACTION</span>
            <span className="orbit-label label-side">BUSINESS × TECH</span>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
          </motion.div>
        </div>
        <div className="container hero-bottom">
          <span>BUILT AROUND COMMERCE. OPEN TO THE WORLD.</span>
          <a href="#about" aria-label="Scroll to about section"><ArrowDownRight size={20} /></a>
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div>
            <div className="section-kicker">01 / WHO WE ARE</div>
            <h2>Business is the purpose.<br /><span>Technology is the advantage.</span></h2>
          </div>
          <div className="intro-text">
            <p className="large-copy">CroppTech With Commerce is a commerce-driven technology and business company.</p>
            <p>We work across commerce, business services, technology and advertising — helping people bring ideas to life, supporting organisations as they grow, and creating opportunities in a connected global economy.</p>
            <a className="underlined-link" href="#approach">Get to know our approach <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / WHAT WE DO</div>
              <h2>One company.<br /><span>Connected capabilities.</span></h2>
            </div>
            <p>Different capabilities, working together to create practical value for individuals and businesses.</p>
          </div>
          <div className="division-list">
            {divisions.map((item) => {
              const Icon = item.icon;
              return (
                <article className="division-card" key={item.number}>
                  <span className="division-number">{item.number}</span>
                  <div className="division-icon"><Icon size={23} strokeWidth={1.6} /></div>
                  <div className="division-main">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <ArrowUpRight className="division-arrow" size={23} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="container statement-inner">
          <div className="section-kicker light-kicker">A PRACTICAL WAY FORWARD</div>
          <p>From the first idea to the next stage of growth, <span>we help make business happen.</span></p>
          <a className="button button-white" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
          <div className="statement-watermark">C</div>
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="container approach-grid">
          <div className="approach-heading">
            <div className="section-kicker">03 / OUR APPROACH</div>
            <h2>Grounded in business.<br /><span>Designed for what’s next.</span></h2>
            <p>We believe progress happens when the right ideas, capabilities and people come together.</p>
          </div>
          <div className="principles-list">
            {principles.map(([title, description], index) => (
              <div className="principle" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <MoveUpRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-panel">
          <div className="contact-copy">
            <div className="section-kicker light-kicker">04 / GET IN TOUCH</div>
            <h2>Let's make<br /><em>business happen.</em></h2>
            <p>Have an idea, a business challenge or an opportunity to explore? We'd like to hear from you.</p>
            <a className="button button-white" href="mailto:YOUR_EMAIL@example.com">Contact CroppTech <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-details">
            <div className="contact-detail"><Mail size={19} /><div><small>EMAIL</small><span>Contact details coming soon</span></div></div>
            <div className="contact-detail"><Phone size={19} /><div><small>PHONE / WHATSAPP</small><span>Contact details coming soon</span></div></div>
            <div className="contact-detail"><Globe2 size={19} /><div><small>REACH</small><span>Connecting opportunities globally</span></div></div>
            <div className="contact-note">For partnerships, business enquiries and general information, please get in touch.</div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div><Brand light /><p>Commerce first. Technology driven.</p></div>
          <div className="footer-nav"><a href="#about">About</a><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div>
          <a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} CroppTech With Commerce. All rights reserved.</span><span>Built for a connected world.</span></div>
      </footer>
    </main>
  );
}
