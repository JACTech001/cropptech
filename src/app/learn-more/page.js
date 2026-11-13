import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Technology & Software Solutions",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    alt: "Developer working on software at a laptop",
    description: "Digital products and technical solutions designed around real needs.",
    offerings: ["Website design and development", "Web and mobile applications", "Custom software solutions", "UI/UX design and databases", "API development and integration", "IT consulting and technical support"]
  },
  {
    title: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    alt: "Abstract artificial intelligence technology visual",
    description: "Using intelligent tools and automation to improve how people and businesses work.",
    offerings: ["AI-powered solutions and integrations", "Business process automation", "AI tools and workflow implementation", "Practical AI education and guidance"]
  },
  {
    title: "Digital Skills & Technology Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    alt: "Person learning digital skills on a laptop",
    description: "Helping individuals build relevant skills and become more confident using technology.",
    offerings: ["Digital skills training", "Technology education and mentorship", "AI literacy and practical AI training", "Digital productivity and workplace tools"]
  },
  {
    title: "IT & Digital Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Network and server infrastructure",
    description: "Supporting the systems and infrastructure that keep digital operations working.",
    offerings: ["IT systems setup and support", "Network and infrastructure support", "Cloud services and deployment", "Systems configuration and maintenance"]
  },
  {
    title: "Digital Media, Creative & Marketing",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    alt: "Creative production and event lighting",
    description: "Creative communication and media that help ideas, brands and businesses reach people.",
    offerings: ["Video editing and creative production", "Advertising concepts and video adverts", "Digital marketing and campaign support", "Brand communication and promotion"]
  },
  {
    title: "Business & Digital Transformation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    alt: "Business team planning and collaborating",
    description: "Helping businesses explore opportunities, strengthen operations and make better use of digital solutions.",
    offerings: ["Business development support", "Digital transformation guidance", "Business process and operational improvement", "Technology adoption and consulting", "Strategic collaborations and partnerships"]
  },
  {
    title: "Commerce & Business Services",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    alt: "Commerce transaction at a retail counter",
    description: "Participating in commerce while helping businesses develop and expand their commercial activities.",
    offerings: ["E-commerce solutions and online business development", "Digital marketplace support", "Product sourcing and procurement", "Trade and commercial opportunities", "Business partnerships and collaborations"]
  }
];

export const metadata = {
  title: "Learn More | CroppTech",
  description: "Explore CroppTech's services, capabilities and business activities across technology, commerce, media, learning and business development."
};

function Brand() {
  return <a className="brand" href="/" aria-label="CroppTech home"><img className="brand-icon" src="/cropplogo.jpeg" alt="" /><span className="brand-wordmark-window"><img className="brand-wordmark" src="/cropplogotext.jpeg" alt="CroppTech" /></span></a>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div><Brand /><p className="footer-tagline">Ideas. Opportunities. Possibilities.</p></div><div className="footer-nav"><a href="/">Home</a><a href="/learn-more">Learn More</a><a href="/contact">Contact</a><a href="mailto:info@cropptech.com">Email CroppTech</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CroppTech. All rights reserved.</span><span>Built around possibilities.</span></div></footer>;
}

export default function LearnMorePage() {
  return <><header className="site-header"><div className="container header-inner"><Brand /><nav className="main-nav static-nav"><a href="/">Home</a><a href="/learn-more">Learn More</a><a className="nav-cta" href="/contact">Contact for Business <ArrowUpRight size={15} /></a></nav></div></header><main>
    <section className="page-hero"><div className="container"><span className="section-kicker">GET TO KNOW US</span><h1>A business built<br />to work across <em>possibilities.</em></h1><p>CroppTech is a diversified business and solutions company. We work across technology, commerce, professional services and other areas—bringing together the right capabilities to respond to real needs and pursue worthwhile opportunities.</p></div></section>
    <section className="content-section services-overview"><div className="container"><div className="section-heading-row"><div><span className="section-kicker">WHAT WE OFFER</span><h2 className="content-title">Different capabilities.<br /><em>Practical solutions.</em></h2></div><p className="section-aside">Explore some of our services and areas of activity. This is a picture of what we can do today—not a limit on where CroppTech can go tomorrow.</p></div>
      <div className="service-cards">{services.map((service)=><article className="service-card" key={service.title}><div className="service-card-image"><img src={service.image} alt={service.alt} loading="lazy" /></div><div className="service-card-body"><h2>{service.title}</h2><p className="service-description">{service.description}</p><ul>{service.offerings.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}</div>
      <section className="work-showcase" aria-labelledby="work-showcase-title">
        <div className="section-heading-row">
          <div><span className="section-kicker">SAMPLE BUSINESS PROFILES</span><h2 className="content-title" id="work-showcase-title">Businesses we can<br /><em>help move forward.</em></h2></div>
          <p className="section-aside">A preview of the kinds of businesses CroppTech can support. These are illustrative sample profiles, not actual CroppTech clients or completed engagements.</p>
        </div>
        <div className="work-showcase-grid">
          <article className="work-showcase-card">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85" alt="Modern retail store interior" loading="lazy" />
            <div className="work-showcase-copy"><span className="work-type">RETAIL &amp; COMMERCE · SAMPLE PROFILE</span><h3>Northstar Retail</h3><p>An illustrative retail business that could benefit from an online storefront, product presentation and a smoother customer enquiry process.</p><a href="https://www.shopify.com/" target="_blank" rel="noreferrer">Visit reference website <ArrowUpRight size={15} /></a></div>
          </article>
          <article className="work-showcase-card">
            <img src="https://images.unsplash.com/photo-1524172190349-7b2f6f986b9b?auto=format&fit=crop&w=1000&q=85" alt="People taking part in a learning session" loading="lazy" />
            <div className="work-showcase-copy"><span className="work-type">EDUCATION · SAMPLE PROFILE</span><h3>Vertex Learning Hub</h3><p>An illustrative learning organisation that could use a professional website, digital learning resources and skills development support.</p><a href="https://www.coursera.org/" target="_blank" rel="noreferrer">Visit reference website <ArrowUpRight size={15} /></a></div>
          </article>
          <article className="work-showcase-card">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85" alt="Contemporary professional office workspace" loading="lazy" />
            <div className="work-showcase-copy"><span className="work-type">PROFESSIONAL SERVICES · SAMPLE PROFILE</span><h3>Summit Business Group</h3><p>An illustrative professional services company that could benefit from improved digital presence, business processes and practical automation.</p><a href="https://www.salesforce.com/" target="_blank" rel="noreferrer">Visit reference website <ArrowUpRight size={15} /></a></div>
          </article>
        </div>
      </section>
      <div className="learn-note"><p>Our services continue to develop as we identify new needs, build expertise and pursue opportunities. If you don't see exactly what you're looking for, get in touch—your enquiry may be the beginning of something we can explore together.</p></div>
    </div></section>
    <section className="learn-cta"><div className="container learn-cta-inner"><div><span className="section-kicker light-kicker">HAVE SOMETHING IN MIND?</span><h2>Let's discuss<br /><em>what you need.</em></h2></div><a className="button button-white" href="/contact">Contact for Business <ArrowUpRight size={17} /></a></div></section>
  </main><Footer /></>;
}
