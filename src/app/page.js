"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Building2, ShoppingCart, MonitorCog, Megaphone, BriefcaseBusiness, Globe2, ChevronDown } from "lucide-react";

const areas = [
  { title: "Commerce", sub: "Trade, products & market access", text: "We build and operate commerce initiatives that bring products, customers and opportunities together across digital and physical channels.", icon: ShoppingCart, services: ["E-commerce business setup", "Online store development", "Product and sales management", "Procurement and supplier coordination", "B2B and B2C commerce"] },
  { title: "Business solutions", sub: "From first idea to sustained growth", text: "We help individuals establish new ventures and support existing organisations with the structure, planning and operational capability to move forward.", icon: BriefcaseBusiness, services: ["Business startup assistance", "Business planning and strategy", "Operations and process improvement", "Market research and analysis", "Project and growth support"] },
  { title: "Technology", sub: "Digital capability with a purpose", text: "We apply practical technology to solve business problems, improve customer experiences and make everyday operations more effective.", icon: MonitorCog, services: ["Website and web application development", "Software and API development", "UI/UX and digital experience design", "IT support and maintenance", "Cybersecurity and database services"] },
  { title: "Advertising & marketing", sub: "Positioning, visibility & connection", text: "We help organisations communicate their value, strengthen their presence and connect with the audiences that matter to them.", icon: Megaphone, services: ["Brand identity and creative design", "Digital marketing strategy", "Advertising and campaign management", "Social media management", "Content and brand promotion"] }
];

const extended = [
  ["Creative, branding & design", "Graphic design, logo design, corporate branding, brand identity, print design, video editing, motion graphics and creative content."],
  ["Social media & digital marketing", "Social media strategy, account management, content creation, paid campaigns, community management, analytics, SEO, email and content marketing."],
  ["Business operations & administration", "Business process management, operational planning, workflow coordination, administrative support, documentation and organisational development."],
  ["Customer & client relations", "Customer support, client onboarding, relationship management, complaint handling, feedback, after-sales support and customer retention."],
  ["Finance, people & talent support", "Bookkeeping, financial records, reporting, budget planning, payroll coordination, recruitment, onboarding, training and performance support."]
];
const principles = [
  ["Commercial perspective", "We begin with the business objective, the customer and the opportunity — then shape the right response."],
  ["Connected capabilities", "Commerce, business services, technology and marketing work together as complementary capabilities."],
  ["Long-term relationships", "We value clarity, accountability and partnerships built around meaningful, lasting progress."]
];
const nav = [["Company", "#company"], ["Our businesses", "#businesses"], ["Capabilities", "#capabilities"], ["Perspective", "#perspective"], ["Contact", "#contact"]];

function Brand({ inverse = false }) {
  return <a className={"brand" + (inverse ? " brand-inverse" : "")} href="#top" aria-label="CroppTech With Commerce">
    <img className="brand-icon" src="/cropplogo.jpeg" alt="" />
    <span className="brand-wordmark-window">
      <img className="brand-wordmark" src="/cropplogotext.jpeg" alt="CroppTech With Commerce" />
    </span>
  </a>;
}
function Label({ children, light = false }) {
  return <div className={"section-label" + (light ? " section-label-light" : "")}>{children}</div>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <main id="top">
      <header className="header"><div className="shell header-inner">
        <Brand />
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={"navigation" + (menuOpen ? " navigation-open" : "")} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
          <a className="nav-enquire" href="#contact" onClick={close}>Enquire <ArrowUpRight size={15} /></a>
        </nav>
      </div></header>

      <section className="hero"><div className="shell hero-layout">
        <div className="hero-main">
          <div className="hero-overline">A COMMERCE-LED BUSINESS GROUP</div>
          <h1>Building business.<br /><em>Creating</em> opportunity.</h1>
          <p className="hero-summary">CroppTech brings commerce, business services and technology together to help people and organisations establish, operate and grow.</p>
          <div className="hero-links"><a className="button-primary" href="#businesses">Explore CroppTech <ArrowUpRight size={17} /></a><a className="quiet-link" href="#company">Our company <ArrowDown size={15} /></a></div>
        </div>
        <aside className="hero-aside"><p className="aside-heading">A business group<br />for a connected world.</p><p className="aside-copy">Commercial thinking. Practical solutions. A wider view of what business can become.</p><div className="aside-foot"><Globe2 size={16} /><span>OPEN TO GLOBAL OPPORTUNITY</span></div></aside>
      </div><div className="hero-base shell"><span>COMMERCE <b>·</b> BUSINESS <b>·</b> TECHNOLOGY</span><a href="#company">Discover the company <ArrowDown size={14} /></a></div></section>

      <section className="company-section" id="company"><div className="shell company-grid">
        <div className="company-heading"><Label>THE COMPANY</Label><h2>A broader view<br />of <em>business.</em></h2></div>
        <div className="company-copy"><p className="company-lead">CroppTech With Commerce is a commerce-driven business and technology company with a focus on building, enabling and supporting business.</p><p>Our work spans our own commerce activities and services delivered to individuals and organisations. We bring together capabilities that help turn ideas into ventures, strengthen established businesses and create better ways to reach markets.</p><p>We see technology as an important advantage — but business remains the purpose behind everything we do.</p></div>
      </div></section>

      <section className="business-section" id="businesses"><div className="shell">
        <div className="section-intro"><div><Label>OUR BUSINESS AREAS</Label><h2>Four connected<br /><em>areas of focus.</em></h2></div><p>Our business is organised around complementary areas that can stand independently and work together when an opportunity calls for it.</p></div>
        <div className="business-grid">{areas.map((item) => { const Icon = item.icon; return <article className="business-card" key={item.title}><div className="card-topline"><Icon size={22} strokeWidth={1.5} /></div><h3>{item.title}</h3><div className="card-subtitle">{item.sub}</div><p>{item.text}</p><a href="#capabilities" className="card-link">Explore capabilities <ArrowUpRight size={15} /></a></article>; })}</div>
      </div></section>

      <section className="capabilities-section" id="capabilities"><div className="shell capabilities-layout">
        <div className="capabilities-intro"><Label>OUR CAPABILITIES</Label><h2>Services shaped<br />around <em>real needs.</em></h2><p>From launching a new venture to improving an established operation, our services are designed to respond to practical business needs.</p><a href="#contact" className="outline-link">Discuss a requirement <ArrowUpRight size={16} /></a></div>
        <div className="capability-list">
          {areas.map((group) => <details className="capability-item" key={group.title}><summary><span className="capability-title">{group.title}</span><ChevronDown size={18} /></summary><div className="capability-content"><p>{group.text}</p><ul>{group.services.map((service) => <li key={service}>{service}</li>)}</ul></div></details>)}
          {extended.map((group, i) => <details className="capability-item" key={group[0]}><summary><span className="capability-title">{group[0]}</span><ChevronDown size={18} /></summary><div className="capability-content"><p>{group[1]}</p></div></details>)}
        </div>
      </div></section>

      <section className="perspective-section" id="perspective"><div className="shell perspective-layout">
        <div className="perspective-title"><Label light>OUR PERSPECTIVE</Label><h2>Built on sound<br />business <em>principles.</em></h2></div>
        <div className="principle-list">{principles.map(([title, description], i) => <article className="principle-row" key={title}><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </div></section>

      <section className="contact-section" id="contact"><div className="shell contact-layout">
        <div className="contact-heading"><Label>CONTACT CROPPTECH</Label><h2>Let’s talk<br /><em>business.</em></h2></div>
        <div className="contact-content"><p className="contact-lead">Whether you are developing an idea, looking for business support or exploring a partnership, we welcome the conversation.</p><div className="contact-placeholder"><Building2 size={20} /><div><strong>Business enquiries</strong><span>Our official contact channels will be published here.</span></div></div><p className="contact-small">CroppTech With Commerce welcomes enquiries from individuals, businesses and potential partners.</p></div>
      </div></section>

      <footer className="footer"><div className="shell footer-main"><div className="footer-brand"><Brand inverse /><p>A commerce-led business group.</p></div><div className="footer-links">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><a className="footer-top-link" href="#top">Back to top <ArrowUpRight size={15} /></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} CroppTech With Commerce. All rights reserved.</span><span>Commerce · Business · Technology</span></div></footer>
    </main>
  );
}
