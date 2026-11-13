"use client";

import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Menu, X, Code2, GraduationCap,
  Users, Building2, BriefcaseBusiness, Mail, Phone, ChevronDown
} from "lucide-react";

const nav = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Technology Services", "#services"],
  ["AI & Automation", "#ai"],
  ["Digital Skills", "#skills"],
  ["Business Solutions", "#business"],
  ["Commerce", "#commerce"],
  ["Contact", "#contact"]
];

const serviceGroups = [
  {
    id: "technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Technology hardware and digital systems",
    title: "Technology & Software Solutions",
    subtitle: "Designing and building useful digital products.",
    text: "We design, develop and implement technology solutions that solve problems, improve productivity and create new opportunities.",
    services: [
      "Website design and development",
      "Web application development",
      "Mobile application development",
      "Custom software development",
      "UI/UX design",
      "Database design and management",
      "API development and integration",
      "IT consulting and technical support",
      "Systems integration and maintenance",
      "Cloud and digital infrastructure solutions"
    ]
  },
  {
    id: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Artificial intelligence concept and digital innovation",
    title: "Artificial Intelligence & Automation",
    subtitle: "Making emerging technology practical.",
    text: "We help individuals and organisations understand, adopt and benefit from artificial intelligence and automation.",
    services: [
      "AI integration and implementation",
      "AI-powered business solutions",
      "AI tools consultation and deployment",
      "Workflow and business process automation",
      "AI chatbot development",
      "Intelligent digital assistants",
      "AI-assisted content and productivity solutions",
      "AI training and adoption support",
      "Technology innovation and research"
    ]
  },
  {
    id: "skills",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A technology training session",
    title: "Digital Skills & Technology Development",
    subtitle: "Helping people grow their digital capabilities.",
    text: "We support individuals, professionals and teams as they develop relevant digital and technological skills for work, business and personal growth.",
    icon: GraduationCap,
    services: [
      "Digital skills training",
      "Technology education and mentorship",
      "Web development training",
      "Software and programming skills",
      "Artificial intelligence education",
      "Data analysis and digital literacy",
      "UI/UX and graphic design skills",
      "Digital productivity training",
      "Professional and corporate tech training"
    ]
  },
  {
    id: "infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Servers supporting digital infrastructure",
    title: "IT & Digital Infrastructure",
    subtitle: "Keeping technology reliable and useful.",
    text: "We provide technical support and infrastructure services that help individuals and organisations operate effectively.",
    services: [
      "IT support and maintenance",
      "Computer and network solutions",
      "Technical troubleshooting",
      "Cybersecurity solutions",
      "Data management and backup",
      "Cloud services",
      "System installation and configuration",
      "IT infrastructure consultation"
    ]
  },
  {
    id: "creative",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Digital marketing analytics on a screen",
    title: "Digital Media, Creative & Marketing",
    subtitle: "Building visibility and meaningful digital experiences.",
    text: "We combine technology and creativity to help brands, businesses and individuals establish a strong digital presence.",
    services: [
      "Graphic and brand design",
      "Website and digital experience design",
      "Branding and visual identity",
      "Social media management",
      "Digital marketing",
      "Content development",
      "Video editing and creative production",
      "Search engine optimisation",
      "Digital advertising and campaign management"
    ]
  },
  {
    id: "business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A team collaborating on business strategy",
    title: "Business & Digital Transformation",
    subtitle: "Helping organisations adapt and move forward.",
    text: "We help businesses and organisations use technology to improve operations and respond to changing business environments.",
    services: [
      "Digital transformation consulting",
      "Business technology advisory",
      "Business process optimisation",
      "Digital business development",
      "Technology project management",
      "Business automation",
      "Digital strategy and planning",
      "Organisational technology support"
    ]
  }
];

const audiences = [
  {
    title: "Individuals",
    text: "Build valuable technology skills, develop professionally, solve technical problems and explore opportunities in the digital economy.",
    icon: Users
  },
  {
    title: "Startups & entrepreneurs",
    text: "Build digital products, establish an online presence and use technology to develop and grow a venture.",
    icon: BriefcaseBusiness
  },
  {
    title: "Businesses & companies",
    text: "Access software development, IT services, AI integration, automation, digital marketing and business technology solutions.",
    icon: Building2
  },
  {
    title: "Organisations & institutions",
    text: "Explore technology consulting, digital transformation, capacity development, infrastructure and technical support.",
    icon: GraduationCap
  }
];

const strengths = [
  ["Broad technical perspective", "We bring together software, IT, AI, digital skills and creative capabilities under one technology-led company."],
  ["Innovation with purpose", "We look for practical ways emerging technologies can solve real problems and create useful opportunities."],
  ["People-centred development", "We believe technology creates more value when people have the knowledge and confidence to use it."],
  ["Solutions shaped around needs", "We recognise that individuals, startups, companies and institutions have different goals and requirements."]
];

function Brand({ inverse = false }) {
  return (
    <a className={"brand" + (inverse ? " brand-inverse" : "")} href="#top" aria-label="CroppTech">
      <img className="brand-icon" src="/cropplogo.jpeg" alt="" />
      <span className="brand-wordmark-window">
        <img className="brand-wordmark" src="/cropplogotext.jpeg" alt="CroppTech" />
      </span>
    </a>
  );
}

function Label({ children, light = false }) {
  return <div className={"section-label" + (light ? " section-label-light" : "")}>{children}</div>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="header" onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
        <div className="shell header-inner">
          <Brand />
          <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="primary-navigation" className={"navigation" + (menuOpen ? " navigation-open" : "")} aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
            <a className="nav-enquire" href="#contact" onClick={close}>Let’s talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero tech-hero">
        <div className="shell hero-layout">
          <div className="hero-main">
            <div className="hero-overline">TECHNOLOGY. SKILLS. INNOVATION.</div>
            <h1>Empowering people.<br /><em>Transforming</em> businesses.</h1>
            <p className="hero-summary">Building with technology. CroppTech helps individuals, businesses and organisations develop digital capabilities, embrace innovation and achieve more through technology and AI.</p>
            <div className="hero-links">
              <a className="button-primary" href="#technology">Explore our services <ArrowUpRight size={17} /></a>
              <a className="quiet-link" href="#about">Discover CroppTech <ArrowDown size={15} /></a>
            </div>
          </div>
          <aside className="hero-aside">
            <p className="aside-heading">Technology that creates possibilities.</p>
            <p className="aside-copy">Practical expertise. Digital skills. Innovative solutions for a changing world.</p>
            <div className="aside-foot"><Code2 size={16} /><span>BUILT AROUND TECHNOLOGY</span></div>
          </aside>
        </div>
        <div className="hero-base shell">
          <span>TECHNOLOGY <b>·</b> AI <b>·</b> DIGITAL SKILLS <b>·</b> COMMERCE</span>
          <a href="#technology">Explore what we do <ArrowDown size={14} /></a>
        </div>
      </section>

      <section className="company-section" id="about">
        <div className="shell company-grid">
          <div className="company-heading">
            <Label>ABOUT CROPPTECH</Label>
            <h2>Technology that<br />creates <em>possibilities.</em></h2>
          </div>
          <div className="company-copy">
            <p className="company-lead">CroppTech is a technology and digital solutions company providing professional tech services, digital skills, software solutions and AI-powered innovations.</p>
            <p>We exist to bridge the gap between people, businesses and the ever-evolving world of technology. Whether you are developing valuable tech skills, building a digital presence, seeking a technological solution or improving organisational operations, CroppTech aims to provide the expertise and support to help you move forward.</p>
            <p>Our approach combines technical knowledge, creativity, innovation and practical problem-solving. We are committed to helping individuals develop, businesses transform and organisations become more effective through technology.</p>
          </div>
        </div>
      </section>

      <section className="business-section technology-section" id="services">
        <div className="shell">
          <div className="section-intro">
            <div><Label>WHAT WE DO</Label><h2>Technology is our foundation.<br /><em>Solutions are our business.</em></h2></div>
            <p>From digital products and AI adoption to skills development and IT infrastructure, our services respond to the changing needs of people and organisations.</p>
          </div>
          <div className="service-grid">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="service-card" id={group.id} key={group.id}>
                  <div className="service-card-top"><Icon size={25} strokeWidth={1.5} /></div>
                  <div className="service-card-image"><img src={group.image} alt={group.imageAlt} loading="lazy" /></div>
                  <h3>{group.title}</h3>
                  <div className="service-subtitle">{group.subtitle}</div>
                  <p>{group.text}</p>
                  <details className="service-details">
                    <summary>Explore services <ChevronDown size={16} /></summary>
                    <ul>{group.services.map((service) => <li key={service}>{service}</li>)}</ul>
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="audience-section" id="audience">
        <div className="shell">
          <div className="section-intro">
            <div><Label>WHO WE SERVE</Label><h2>Technology solutions<br />for <em>everyone.</em></h2></div>
            <p>Different people have different goals. We work to understand those needs and shape solutions that help each client move forward.</p>
          </div>
          <div className="audience-grid">
            {audiences.map((item) => {
              const Icon = item.icon;
              return <article className="audience-card" key={item.title}><Icon size={23} /><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="commerce-section" id="commerce">
        <div className="shell commerce-layout">
          <div className="commerce-heading">
            <Label light>BEYOND TECHNOLOGY</Label>
            <h2>Commerce &<br /><em>business services.</em></h2>
            <img className="commerce-brand-icon" src="/cropplogo.jpeg" alt="CroppTech logo icon" />
          </div>
          <div className="commerce-copy">
            <p className="commerce-lead">Creating opportunities beyond technology.</p>
            <p>Commerce is an important complementary part of CroppTech—connecting digital platforms, products, sourcing and trade—while technology remains our central focus.</p>
            <div className="commerce-image"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85" alt="Warehouse shelves and packages prepared for distribution" loading="lazy" /></div>
            <p>Alongside our core technology focus, CroppTech participates in commerce and complementary business activities that create value and expand opportunities.</p>
            <ul>
              <li>E-commerce solutions and online business development</li>
              <li>Digital marketplace support</li>
              <li>Product sourcing and procurement</li>
              <li>Trade, commercial opportunities and partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="perspective-section why-section" id="why-cropptech">
        <div className="shell perspective-layout">
          <div className="perspective-title"><Label light>WHY CROPPTECH</Label><h2>More than technology.<br /><em>A partner in progress.</em></h2></div>
          <div className="strength-grid">
            {strengths.map(([title, text], index) => <article className="strength-card" key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="purpose-section">
        <div className="shell purpose-grid">
          <article><Label>OUR VISION</Label><h2>Where we’re<br /><em>going.</em></h2><p>To become a trusted technology and digital solutions company, empowering individuals, businesses and organisations through accessible technology, innovation, knowledge and transformative digital services.</p></article>
          <article><Label>OUR MISSION</Label><h2>What drives<br /><em>our work.</em></h2><p>To deliver professional technology services, develop digital capabilities, promote the adoption of artificial intelligence and provide innovative solutions that enable people and organisations to grow, adapt and succeed.</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-layout">
          <div className="contact-heading"><Label>LET’S BUILD WITH TECHNOLOGY</Label><h2>Your ideas.<br /><em>Our technology.</em></h2></div>
          <div className="contact-content">
            <p className="contact-lead">Whether you want to learn a new technology skill, develop a software solution, integrate AI into your business, improve your IT infrastructure or explore a partnership, CroppTech is ready to start the conversation.</p>
            <div className="contact-methods">
              <a className="contact-method" href="mailto:info@cropptech.com"><Mail size={20} /><span><strong>Email</strong><small>info@cropptech.com</small></span></a>
              <div className="contact-method contact-method-pending"><Phone size={20} /><span><strong>Phone</strong><small>Coming soon</small></span></div>
            </div>
            <p className="contact-small">CroppTech — Technology. Skills. Innovation.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <Brand inverse />
            <p>Technology. Skills. Innovation.</p>
            <div className="footer-socials" aria-label="CroppTech social media">
              <a href="https://x.com/JACTech001" target="_blank" rel="noopener noreferrer">X <ArrowUpRight size={14} /></a>
              <a href="https://vm.tiktok.com/ZS9fHM2EYUXh8-ExnNQ/" target="_blank" rel="noopener noreferrer">TikTok <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="footer-links">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
          <a className="footer-top-link" href="#top">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} CroppTech. All rights reserved.</span><span>Technology · Skills · Innovation</span></div>
      </footer>
    </main>
  );
}
