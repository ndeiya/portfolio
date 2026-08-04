import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Smartphone,
  Sun,
  Workflow,
  X,
} from 'lucide-react'
import zludeImage from './assets/zlude.png'
import dcbrainsImage from './assets/dcbrains.png'
import weatherImage from './assets/project-3.webp'
import alumasterImage from './assets/alumaster.png'
import kingatesImage from './assets/kingates.png'
import zeetacardImage from './assets/zeetacard.png'
import tracostCover from './assets/tracost-cover.webp'
import tracostDashboard from './assets/tracost-dashboard.webp'
import annaproTerminal from './assets/annapro-terminal.webp'
import annaproAnalytics from './assets/annapro-analytics.webp'

const projects = [
  {
    slug: 'tracost',
    number: '01',
    title: 'Tracost',
    type: 'Native mobile · Construction technology',
    summary: 'A field-ready cost control system that gives construction teams a clear view of funds, spending, sites and project performance.',
    services: ['Native app engineering', 'Product architecture', 'Reporting systems'],
    stack: 'Kotlin · Jetpack Compose · SwiftUI · Supabase',
    link: '/work/tracost',
    linkLabel: 'View case study',
    kind: 'tracost',
    image: tracostCover,
    imagePosition: 'center center',
    featured: true,
  },
  {
    slug: 'annapro',
    number: '02',
    title: 'AnnaPro',
    type: 'Native mobile · AI product',
    summary: 'A focused sports intelligence experience that turns complex match data into structured, readable analysis through an AI-assisted interface.',
    services: ['Mobile experience', 'AI integration', 'Data visualisation'],
    stack: 'Native mobile · AI APIs · Cloud services',
    link: '/work/annapro',
    linkLabel: 'View case study',
    kind: 'annapro',
    image: annaproTerminal,
    imagePosition: 'center top',
    featured: true,
  },
  {
    slug: 'kingates',
    number: '03',
    title: 'Kingates Automotive',
    type: 'Operations platform · Singapore',
    summary: 'Bookings, job cards, technician assignments and payroll brought together in one dependable automotive operations platform.',
    services: ['Full-stack engineering', 'Workflow automation', 'Business systems'],
    stack: 'PHP · MySQL · JavaScript · Bootstrap',
    link: 'https://kingates.com',
    linkLabel: 'Visit live project',
    kind: 'kingates',
    image: kingatesImage,
    imagePosition: 'center top',
    featured: true,
  },
  {
    slug: 'zeeta', title: 'Zeeta Global', type: 'Discount platform',
    summary: 'A verified digital discount card connecting workers and students with useful everyday savings.',
    link: 'https://zeetacard.com', kind: 'zeeta', image: zeetacardImage,
  },
  {
    slug: 'zlude', title: 'Zlude', type: 'Fintech experience',
    summary: 'International transfers, live currency conversion and account management in one polished experience.',
    link: 'https://zlude.com', kind: 'zlude', image: zludeImage,
  },
  {
    slug: 'dcbrains', title: 'DC Brains', type: 'Education platform',
    summary: 'A digital learning platform designed to make structured academic support easier to access.',
    link: 'https://dcbrains.com', kind: 'dcbrains', image: dcbrainsImage,
  },
  {
    slug: 'alumaster', title: 'AluMaster GH', type: 'Inventory and operations',
    summary: 'A practical internal system for managing inventory, customers and day-to-day operations.',
    link: 'https://alumastergh.com', kind: 'alumaster', image: alumasterImage,
  },
  {
    slug: 'weather', title: 'Weather Dashboard', type: 'Data visualisation',
    summary: 'A responsive weather interface that turns live forecast data into a clear daily view.',
    link: 'https://ndeiya.github.io/weather-dashboard', kind: 'weather', image: weatherImage,
  },
]

const services = [
  { icon: Code2, number: '01', title: 'Web development', intro: 'Fast, accessible web products built around real business goals.', tags: ['React', 'Next.js', 'TypeScript', 'PHP'], details: ['Marketing and product websites', 'Business platforms and dashboards', 'E-commerce and customer portals', 'API design and backend systems'] },
  { icon: Smartphone, number: '02', title: 'Native mobile apps', intro: 'Thoughtful mobile products that feel at home on iOS and Android.', tags: ['React Native', 'Expo', 'Kotlin', 'SwiftUI'], details: ['Cross-platform product engineering', 'Native Android and iOS interfaces', 'Offline-friendly workflows', 'Push notifications and device features'] },
  { icon: Bot, number: '03', title: 'AI integration', intro: 'Useful intelligence added where it improves the product, not where it creates noise.', tags: ['LLMs', 'RAG', 'Search', 'Vision'], details: ['AI assistants and guided workflows', 'Document and knowledge search', 'Structured content generation', 'Data extraction and classification'] },
  { icon: Workflow, number: '04', title: 'Business automation', intro: 'Connected workflows that cut repetitive work and reduce costly errors.', tags: ['n8n', 'APIs', 'Webhooks', 'Cloud'], details: ['Process and approval automation', 'System-to-system data syncing', 'Scheduled reports and alerts', 'Custom internal tools'] },
]

const caseStudies = {
  tracost: {
    title: 'Tracost', eyebrow: 'Native mobile product · 2026', kind: 'tracost',
    cover: tracostCover,
    coverPosition: 'center center',
    images: [
      { src: tracostCover, alt: 'Tracost product suite for construction cost control', orientation: 'landscape' },
      { src: tracostDashboard, alt: 'Tracost mobile dashboard showing project funds and expenses', orientation: 'portrait' },
    ],
    headline: 'Cost control that travels with the construction team.',
    summary: 'Tracost was shaped for the reality of active construction projects: funds move between people, expenses happen on site, and managers need trustworthy reports without chasing spreadsheets.',
    challenge: 'Construction cost data was fragmented across transfers, receipts, site expenses and manual reports. The product needed to make every movement visible while remaining fast enough for daily field use.',
    solution: 'I built a role-aware mobile system for administrators, project managers and site teams. It connects fund allocation, expense capture, approvals, reporting and audit history in one consistent workflow.',
    outcomes: ['Clear separation between funds sent and money spent', 'Project and site reports with export-ready figures', 'Role-based access for managers and field teams', 'Native Android and iOS foundations with cloud sync'],
    stack: ['Kotlin', 'Jetpack Compose', 'SwiftUI', 'Supabase', 'PostgreSQL', 'Push notifications'],
  },
  annapro: {
    title: 'AnnaPro', eyebrow: 'Native mobile product · AI intelligence', kind: 'annapro',
    cover: annaproTerminal,
    coverPosition: 'center top',
    images: [
      { src: annaproTerminal, alt: 'AnnaPro terminal showing a structured match analysis', orientation: 'portrait' },
      { src: annaproAnalytics, alt: 'AnnaPro analytics dashboard showing model and activity metrics', orientation: 'portrait' },
    ],
    headline: 'Complex sports data, turned into a focused mobile experience.',
    summary: 'AnnaPro explores how an AI-assisted product can organise large amounts of sports information into a fast, readable interface designed for clear analysis.',
    challenge: 'Raw match data, model outputs and historical context can quickly overwhelm a small screen. The interface needed a strong hierarchy and a dependable way to present confidence, context and system status.',
    solution: 'I designed the product around a compact analysis flow: search, structured insight, historical records and account controls. The visual system uses clear contrast, compact data patterns and deliberate interaction states.',
    outcomes: ['Structured AI-assisted analysis flow', 'Compact dashboards for dense information', 'Account, history and cloud data foundations', 'Responsive states designed for handheld use'],
    stack: ['Native mobile', 'AI APIs', 'Cloud authentication', 'Realtime data', 'Analytics'],
  },
}

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])
  return [theme, setTheme]
}

function Meta({ title = 'Abdul Ndeiya | Product Developer', description = 'Web platforms, native mobile apps, AI integrations and business automations built from Ghana for teams everywhere.' }) {
  return <Helmet><title>{title}</title><meta name="description" content={description} /></Helmet>
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname
  const links = [['/', 'Home'], ['/work', 'Work'], ['/services', 'Services'], ['/contact', 'Contact']]
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Abdul Ndeiya home"><span className="brand-glyph">AN</span><span>Abdul Ndeiya</span></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {links.map(([href, label]) => <a key={href} className={path === href || (href !== '/' && path.startsWith(href)) ? 'active' : ''} href={href}>{label}</a>)}
        <a className="nav-cta" href="/contact">Start a project <ArrowUpRight size={15} /></a>
      </nav>
      <div className="header-tools">
        <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="/"><span className="brand-glyph">AN</span><span>Abdul Ndeiya</span></a>
      <div className="footer-links">
        <a href="https://github.com/ndeiya" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
        <a href="https://www.linkedin.com/in/abdul-rahaman-abdulai-ndeiya-0b22a599/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        <a href="mailto:ndeiya.dev@gmail.com"><Mail size={16} /> Email</a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} Abdul Ndeiya</span>
    </footer>
  )
}

function Shell({ children, theme, setTheme }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return <div className="shell"><Header theme={theme} setTheme={setTheme} /><main>{children}</main><Footer /></div>
}

function Mockup({ kind, compact = false, image, title, imagePosition = 'center top' }) {
  if (image) {
    return (
      <div className={`project-screenshot ${compact ? 'compact' : ''}`}>
        <div className="screenshot-bar"><i /><i /><i /><span>Live product</span></div>
        <img src={image} alt={`${title} interface`} loading="lazy" style={{ objectPosition: imagePosition }} />
      </div>
    )
  }
  const isPhone = kind === 'tracost' || kind === 'annapro'
  if (isPhone) {
    return (
      <div className={`device-stage ${compact ? 'compact' : ''} ${kind}`} aria-label={`${kind} interface preview`}>
        <div className="phone phone-back"><div className="phone-screen"><span className="mini-label">OVERVIEW</span><div className="mini-chart"><i /><i /><i /><i /></div><div className="mini-rows"><i /><i /><i /></div></div></div>
        <div className="phone phone-front"><div className="speaker" /><div className="phone-screen"><div className="app-title">{kind === 'tracost' ? 'TRACOST' : 'ANNA PRO'}</div><span className="mini-label">{kind === 'tracost' ? 'PROJECT CONTROL' : 'INTELLIGENCE'}</span><div className="metric"><b>{kind === 'tracost' ? '72%' : '84'}</b><span>{kind === 'tracost' ? 'Budget used' : 'Analysis score'}</span></div><div className="mini-grid"><i /><i /><i /><i /></div></div></div>
      </div>
    )
  }
  return (
    <div className={`browser-mock ${kind}`} aria-label={`${kind} interface preview`}>
      <div className="browser-bar"><i /><i /><i /><span>{kind}.com</span></div>
      <div className="browser-body"><div className="side-nav" /><div className="dash"><span className="mini-label">LIVE PRODUCT</span><h4>{projects.find((p) => p.kind === kind)?.title}</h4><div className="dash-cards"><i /><i /><i /></div><div className="dash-table"><i /><i /><i /><i /></div></div></div>
    </div>
  )
}

function ProjectLink({ project, className = '' }) {
  const external = project.link.startsWith('http')
  return <a className={className} href={project.link} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{project.linkLabel || 'Visit live project'} <ArrowUpRight size={17} /></a>
}

function ProjectCard({ project, large = false }) {
  return (
    <article className={large ? 'project-card large' : 'project-card'}>
      <div className="project-art"><Mockup kind={project.kind} compact={!large} image={project.image} title={project.title} imagePosition={project.imagePosition} /></div>
      <div className="project-info">
        {large && <span className="project-number">PROJECT_{project.number}</span>}
        <span className="eyebrow">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {large && <><ul className="project-services">{project.services.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul><div className="stack">{project.stack}</div></>}
        <ProjectLink project={project} className="inline-link" />
      </div>
    </article>
  )
}

function HomePage({ theme, setTheme }) {
  const featured = projects.filter((p) => p.featured)
  return (
    <Shell theme={theme} setTheme={setTheme}>
      <Meta />
      <section className="hero">
        <div className="grid-bg" /><div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          
          <h1>Engineering <em>useful</em> digital products.</h1>
          <p>I design and build web platforms, native mobile apps, AI integrations and automations that solve real business problems.</p>
          <div className="actions"><a className="primary-btn" href="/work">Explore selected work <ArrowRight size={18} /></a><a className="secondary-link" href="/contact">Tell me what you’re building <ArrowUpRight size={18} /></a></div>
        </div>
        <div className="hero-console">
          <div className="console-top"><span /><span /><span /><b>abdul@portfolio ~ /current-work</b></div>
          <div className="console-body"><p><span>$</span> product.status</p><h2>BUILDING ACROSS<br />WEB + NATIVE + AI</h2><div className="console-stats"><div><b>08</b><span>Live products</span></div><div><b>04</b><span>Core services</span></div><div><b>01</b><span>Product partner</span></div></div></div>
        </div>
        <div className="hero-foot"><span>Available for selected projects</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="section home-work">
        <div className="section-head"><div><span className="kicker">SELECTED WORK</span><h2>Products built for the real world.</h2></div><a className="secondary-link" href="/work">View all work <ArrowRight size={17} /></a></div>
        <div className="featured-list">{featured.map((project) => <ProjectCard key={project.slug} project={project} large />)}</div>
      </section>

      <section className="section service-preview">
        <div className="section-head"><div><span className="kicker">CORE CAPABILITIES</span><h2>One partner from idea to launch.</h2></div><p>Product thinking, interface design and engineering brought into one focused process.</p></div>
        <div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-mini" key={service.title}><span>{service.number}</span><Icon /><h3>{service.title}</h3><p>{service.intro}</p></article> })}</div>
        <a className="primary-btn centered-btn" href="/services">Explore services <ArrowRight size={18} /></a>
      </section>

      <ContactBanner />
    </Shell>
  )
}

function WorkPage({ theme, setTheme }) {
  return (
    <Shell theme={theme} setTheme={setTheme}>
      <Meta title="Selected Work | Abdul Ndeiya" description="Web platforms, native mobile apps and AI products built by Abdul Ndeiya." />
      <PageHero kicker="SELECTED WORK" title={<>Products built to <em>work.</em></>} copy="A mix of native mobile products, operational platforms and customer-facing experiences, each shaped around a real problem." />
      <section className="section work-page">
        <div className="featured-list">{projects.filter((p) => p.featured).map((project) => <ProjectCard key={project.slug} project={project} large />)}</div>
        <div className="archive-head"><span>More live products</span><span>05 projects</span></div>
        <div className="project-grid">{projects.filter((p) => !p.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <ContactBanner />
    </Shell>
  )
}

function PageHero({ kicker, title, copy }) {
  return <section className="page-hero"><div className="grid-bg" /><span className="kicker">{kicker}</span><h1>{title}</h1><p>{copy}</p></section>
}

function ServicesPage({ theme, setTheme }) {
  return (
    <Shell theme={theme} setTheme={setTheme}>
      <Meta title="Services | Abdul Ndeiya" description="Web development, native mobile apps, AI integrations and business automation." />
      <PageHero kicker="CORE CAPABILITIES" title={<>Engineering <em>future-ready</em> solutions.</>} copy="A multi-disciplinary approach to digital products, combining reliable engineering with clear design and useful automation." />
      <section className="section services-page">
        {services.map((service) => { const Icon = service.icon; return <article className="service-detail" key={service.title}><div className="service-intro"><div className="terminal-label"><i /><i /><i /><span>SERVICE_{service.number}</span></div><Icon className="service-icon" /><h2>{service.title}</h2><p>{service.intro}</p><div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="service-points">{service.details.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Designed around your users, your workflows and the way the product needs to grow.</p></div>)}</div></article> })}
      </section>
      <ContactBanner />
    </Shell>
  )
}

function ContactBanner() {
  return <section className="contact-banner"><div><span className="kicker">HAVE A PROJECT?</span><h2>Let’s turn the useful idea into a real product.</h2><p>Tell me what you want to build, improve or automate. I’ll respond with the clearest next step.</p></div><a className="primary-btn" href="/contact">Start a conversation <ArrowUpRight size={18} /></a></section>
}

function ContactPage({ theme, setTheme }) {
  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nCompany: ${data.get('company') || 'Not provided'}\nProject type: ${data.get('type')}\n\n${data.get('details')}`)
    window.location.href = `mailto:ndeiya.dev@gmail.com?subject=${subject}&body=${body}`
  }
  return (
    <Shell theme={theme} setTheme={setTheme}>
      <Meta title="Contact | Abdul Ndeiya" description="Start a web, mobile, AI or automation project with Abdul Ndeiya." />
      <section className="contact-page">
        <div className="contact-copy"><h1>Have a useful idea? <em>Let’s build it.</em></h1><p>Share the problem, the goal and where you are right now. I’ll help you identify the most practical next step.</p><div className="contact-methods"><a href="mailto:ndeiya.dev@gmail.com"><Mail /> <span><small>EMAIL</small>ndeiya.dev@gmail.com</span></a><a href="https://wa.me/233247439206" target="_blank" rel="noreferrer"><MessageCircle /> <span><small>WHATSAPP</small>Start a chat</span></a></div></div>
        <form className="contact-form" onSubmit={submit}><div className="terminal-label"><i /><i /><i /><span>NEW_PROJECT_ENQUIRY</span></div><div className="form-row"><label>Your name<input name="name" required autoComplete="name" placeholder="Name" /></label><label>Company <small>optional</small><input name="company" autoComplete="organization" placeholder="Company or organisation" /></label></div><label>What do you need?<select name="type" defaultValue="" required><option value="" disabled>Select a project type</option><option>Website or web platform</option><option>Native mobile application</option><option>AI integration</option><option>Business automation</option><option>Something else</option></select></label><label>Tell me about the project<textarea name="details" rows="6" required placeholder="What should it do, who is it for, and when would you like to launch?" /></label><button className="primary-btn" type="submit">Prepare enquiry <ArrowUpRight size={18} /></button><p className="form-note">This opens your email app with the details ready to send.</p></form>
      </section>
    </Shell>
  )
}

function CaseStudyPage({ study, theme, setTheme }) {
  return (
    <Shell theme={theme} setTheme={setTheme}>
      <Meta title={`${study.title} Case Study | Abdul Ndeiya`} description={study.summary} />
      <section className="case-hero"><div className="case-copy"><a className="back-link" href="/work">← All projects</a><span className="kicker">{study.eyebrow}</span><h1>{study.headline}</h1><p>{study.summary}</p></div><Mockup kind={study.kind} image={study.cover} title={study.title} imagePosition={study.coverPosition} /></section>
      <section className={`case-gallery ${study.kind}`} aria-label={`${study.title} product screens`}>
        <div className="case-gallery-heading"><span className="kicker">PRODUCT SCREENS</span><h2>The product in use.</h2></div>
        <div className="case-gallery-grid">
          {study.images.map((image) => <figure className={`case-shot ${image.orientation}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
        </div>
      </section>
      <section className="section case-body"><div className="case-nav"><span>PROJECT OVERVIEW</span><div><a href="#challenge">01 Challenge</a><a href="#solution">02 Solution</a><a href="#outcome">03 Outcome</a></div></div><div className="case-content"><article id="challenge"><span>01 / CHALLENGE</span><h2>A practical problem, not a design exercise.</h2><p>{study.challenge}</p></article><article id="solution"><span>02 / SOLUTION</span><h2>A system shaped around the real workflow.</h2><p>{study.solution}</p></article><article id="outcome"><span>03 / OUTCOME</span><h2>One clear product foundation.</h2><ul>{study.outcomes.map((item) => <li key={item}><Check />{item}</li>)}</ul></article><article><span>TECHNOLOGY</span><div className="stack-cloud">{study.stack.map((item) => <span key={item}>{item}</span>)}</div></article></div></section>
      <section className="next-project"><span>NEXT PROJECT</span><h2>{study.kind === 'tracost' ? 'AnnaPro' : 'Kingates Automotive'}</h2><a className="primary-btn" href={study.kind === 'tracost' ? '/work/annapro' : 'https://kingates.com'}>Explore project <ArrowRight size={18} /></a></section>
    </Shell>
  )
}

function NotFound({ theme, setTheme }) {
  return <Shell theme={theme} setTheme={setTheme}><section className="not-found"><Braces /><span>404</span><h1>That page isn’t here.</h1><a className="primary-btn" href="/">Return home <ArrowRight /></a></section></Shell>
}

function App() {
  const [theme, setTheme] = useTheme()
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return <HomePage theme={theme} setTheme={setTheme} />
  if (path === '/work') return <WorkPage theme={theme} setTheme={setTheme} />
  if (path === '/services') return <ServicesPage theme={theme} setTheme={setTheme} />
  if (path === '/contact') return <ContactPage theme={theme} setTheme={setTheme} />
  if (path.startsWith('/work/')) {
    const study = caseStudies[path.split('/').pop()]
    if (study) return <CaseStudyPage study={study} theme={theme} setTheme={setTheme} />
  }
  return <NotFound theme={theme} setTheme={setTheme} />
}

export default App
