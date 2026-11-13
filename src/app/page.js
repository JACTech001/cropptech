"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const nav = [["Home", "/"], ["Learn More", "/learn-more"], ["Contact", "/contact"]];

function Brand() {
  return <a className="brand" href="/" aria-label="CroppTech home"><img className="brand-icon" src="/cropplogo.jpeg" alt="" /><span className="brand-wordmark-window"><img className="brand-wordmark" src="/cropplogotext.jpeg" alt="CroppTech" /></span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Brand /><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button><nav className={open ? "main-nav nav-open" : "main-nav"}>{nav.map(([label, href], i) => <a key={label + i} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Contact for Business <ArrowUpRight size={15} /></a></nav></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div><Brand /><p className="footer-tagline">Ideas. Opportunities. Possibilities.</p><div className="footer-social"><a href="https://x.com/JACTech001" target="_blank" rel="noreferrer">X <ArrowUpRight size={13} /></a><a href="https://vm.tiktok.com/ZS9fHM2EYUXh8-ExnNQ/" target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={13} /></a></div></div><div className="footer-nav"><a href="/">Home</a><a href="/learn-more">Learn More</a><a href="/contact">Contact</a><a href="mailto:info@cropptech.com">Email CroppTech</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CroppTech. All rights reserved.</span><span>Built around possibilities.</span></div></footer>;
}

export default function HomePage() {
  return <><Header /><main><section className="home-hero"><div className="container hero-content"><span className="eyebrow"><i /> OPEN TO IDEAS. BUILT FOR OPPORTUNITY.</span><h1>Ideas. Opportunities.<br /><em>Possibilities.</em></h1><p className="hero-description">CroppTech is a diversified business and solutions company. We bring ideas to life, explore opportunities and work with people and organisations to make progress happen.</p><div className="hero-actions"><a className="button button-red" href="/contact">Contact for Business <ArrowUpRight size={17} /></a><a className="text-link" href="/learn-more">Learn More <ArrowUpRight size={16} /></a></div></div><div className="hero-mark" aria-hidden="true">C.</div><div className="container hero-bottom"><span>BUSINESS <b>·</b> SOLUTIONS <b>·</b> OPPORTUNITY</span><span>ONE COMPANY. MANY POSSIBILITIES.</span></div></section><section className="intro-section"><div className="container intro-grid"><div><span className="section-kicker">A DIFFERENT KIND OF BUSINESS</span><h2>We see possibilities<br />where others see <em>limits.</em></h2></div><div className="intro-copy"><p className="intro-lead">The world doesn't fit into one category. Neither should the solutions that move it forward.</p><p>CroppTech works across different areas of business and enterprise. Our interests are broad, our approach is practical, and our direction is shaped by the opportunities we discover and the needs of the people we work with.</p><a className="underlined-link" href="/learn-more">Get to know CroppTech <ArrowUpRight size={16} /></a></div></div></section><section className="path-section"><div className="container path-inner"><div><span className="section-kicker light-kicker">START A CONVERSATION</span><h2>Every good idea<br />starts <em>somewhere.</em></h2><p>Whether you have a clear plan, a challenge to solve or an opportunity worth exploring, let's talk about what could come next.</p><a className="button button-white" href="/contact">Contact for Business <ArrowUpRight size={17} /></a></div><div className="path-side"><span>01 / CONNECT</span><span>02 / EXPLORE</span><span>03 / MOVE FORWARD</span></div></div></section></main><Footer /></>;
}
