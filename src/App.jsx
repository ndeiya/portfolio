import { useEffect, useState } from 'react'
import SEO from './components/SEO.jsx'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  Smartphone,
  Sparkles,
  Sun,
  Workflow,
  X,
} from 'lucide-react'
import './App.css'
import zludeImage from './assets/zlude.png'
import dcbrainsImage from './assets/dcbrains.png'
import weatherImage from './assets/project-3.webp'
import alumasterImage from './assets/alumaster.png'
import p2pdonateImage from './assets/p2pdonate.png'
import kingatesImage from './assets/kingates.png'
import zeetacardImage from './assets/zeetacard.png'

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const featuredProjects = [
  {
    number: '01',
    title: 'Kingates Automotive Systems',
    eyebrow: 'Operations platform · Singapore',
    summary:
      'A connected business system for bookings, job cards, technician assignment and payroll, built to bring a complex automotive operation into one dependable workflow.',
    contribution: ['Product engineering', 'Backend architecture', 'Workflow automation'],
    stack: 'PHP · MySQL · JavaScript · Bootstrap',
    image: kingatesImage,
    imagePosition: 'center top',
    liveUrl: 'https://kingates.com',
    githubUrl: 'https://github.com/ndeiya/kingates',
    tone: 'amber',
  },
  {
    number: '02',
    title: 'Zeeta Global',
    eyebrow: 'Discount platform · Ghana',
    summary:
      'A free digital discount card connecting verified workers and students with useful everyday savings across restaurants, pharmacies, supermarkets and more.',
    contribution: ['Product design', 'Full-stack development', 'Verification flows'],
    stack: 'React · Tailwind CSS · Node.js',
    image: zeetacardImage,
    imagePosition: 'center top',
    liveUrl: 'https://zeetacard.com',
    githubUrl: 'https://github.com/ndeiya/keyworkercard',
    tone: 'lime',
  },
  {
    number: '03',
    title: 'Zlude',
    eyebrow: 'Fintech experience · Global',
    summary:
      'A polished digital money experience combining live currency conversion, international transfers and a clear account dashboard for everyday users.',
    contribution: ['Frontend development', 'API integration', 'Responsive experience'],
    stack: 'React · Next.js · PostgreSQL · OpenExchangeRates',
    image: zludeImage,
    imagePosition: 'center top',
    liveUrl: 'https://zlude.com',
    githubUrl: 'https://github.com/ndeiya/zlude-new',
    tone: 'blue',
  },
]

const otherProjects = [
  {
    title: 'DC Brains',
    type: 'Education platform',
    image: dcbrainsImage,
    liveUrl: 'https://dcbrains.com',
  },
  {
    title: 'AluMaster GH',
    type: 'Inventory and operations',
    image: alumasterImage,
    liveUrl: 'https://alumastergh.com',
  },
  {
    title: 'P2P Donate',
    type: 'Peer-to-peer platform',
    image: p2pdonateImage,
    liveUrl: 'https://p2pdonate.com',
  },
  {
    title: 'Weather Dashboard',
    type: 'Data visualisation',
    image: weatherImage,
    liveUrl: 'https://ndeiya.github.io/weather-dashboard',
  },
]

const services = [
  {
    number: '01',
    icon: MonitorSmartphone,
    title: 'Web products',
    description:
      'Fast, accessible websites and business platforms designed around a clear goal, from first click to conversion.',
    items: ['Product websites', 'Business systems', 'E-commerce', 'Dashboards'],
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Mobile apps',
    description:
      'Useful cross-platform applications with thoughtful interfaces, dependable APIs and launch-ready foundations.',
    items: ['React Native', 'Expo', 'API integration', 'App architecture'],
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI integration',
    description:
      'Practical AI features that improve how your customers interact and how your team finds, creates and acts on information.',
    items: ['AI assistants', 'Smart search', 'Content workflows', 'Custom integrations'],
  },
  {
    number: '04',
    icon: Workflow,
    title: 'Automation',
    description:
      'Connected workflows that remove repetitive work, reduce mistakes and keep important business processes moving.',
    items: ['Process automation', 'Notifications', 'Data syncing', 'Internal tools'],
  },
]

const capabilities = [
  ['Product engineering', 'React, TypeScript, PHP, Node.js'],
  ['Mobile development', 'React Native, Expo'],
  ['Data and backend', 'PostgreSQL, MySQL, MongoDB, Supabase'],
  ['AI and automation', 'LLM integrations, APIs, workflow systems'],
  ['Delivery', 'Vercel, CI/CD, cloud infrastructure'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -60%', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nCompany: ${data.get('company') || 'Not provided'}\nProject type: ${data.get('projectType')}\nBudget: ${data.get('budget')}\n\nProject details:\n${data.get('details')}`,
    )
    window.location.href = `mailto:ndeiya.dev@gmail.com?subject=${subject}&body=${body}`
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <SEO
        title="Abdul Ndeiya | Product Developer & AI Automation Builder"
        description="I design and build web platforms, mobile apps, AI integrations and automations that move businesses forward."
        name="Abdul Ndeiya"
        type="website"
      />

      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abdul Ndeiya, home" onClick={closeMenu}>
          <span className="brand-mark">AN</span>
          <span className="brand-name">Abdul Ndeiya</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Start a project <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="hero-copy" data-reveal>
            <h1>
              I build digital products that <em>move business forward.</em>
            </h1>
            <p className="hero-lede">
              Web platforms, mobile apps, AI integrations and automations, shaped from strategy to launch.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDown size={18} />
              </a>
              <a className="text-link" href="#contact">
                Tell me what you’re building <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-showcase" data-reveal>
            <div className="showcase-label">
              <Sparkles size={15} /> Selected product interfaces
            </div>
            <div className="showcase-window showcase-main">
              <div className="window-bar"><span /><span /><span /></div>
              <img src={kingatesImage} alt="Kingates automotive operations dashboard" />
            </div>
            <div className="showcase-window showcase-secondary">
              <div className="window-bar"><span /><span /><span /></div>
              <img src={zeetacardImage} alt="Zeeta Global discount card platform" />
            </div>
            <div className="showcase-chip chip-build"><Braces size={16} /> Build</div>
            <div className="showcase-chip chip-automate"><Workflow size={16} /> Automate</div>
          </div>

          <div className="hero-footer">
            <span>Based in Ghana · Working globally</span>
            <div className="hero-disciplines">
              <span>WEB</span><i /> <span>MOBILE</span><i /> <span>AI</span><i /> <span>AUTOMATION</span>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Selected work</span>
              <h2>Built for the real world.</h2>
            </div>
            <p>
              A selection of products shaped around actual operations, customers and business goals.
            </p>
          </div>

          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <article className={`project-case tone-${project.tone}`} key={project.title} data-reveal>
                <div className="project-visual">
                  <div className="project-number">{project.number}</div>
                  <div className="browser-frame">
                    <div className="browser-top">
                      <span /><span /><span />
                      <div className="browser-address">{project.liveUrl.replace('https://', '')}</div>
                    </div>
                    <img
                      src={project.image}
                      alt={`${project.title} interface`}
                      loading="lazy"
                      style={{ objectPosition: project.imagePosition }}
                    />
                  </div>
                </div>

                <div className="project-copy">
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="contribution-list" aria-label="Areas of contribution">
                    {project.contribution.map((item) => (
                      <li key={item}><Check size={15} /> {item}</li>
                    ))}
                  </ul>
                  <div className="project-stack">{project.stack}</div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Visit live project <ArrowUpRight size={17} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source code on GitHub`}>
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="more-work" data-reveal>
            <div className="subsection-heading">
              <h3>More products in the wild</h3>
              <a href="https://github.com/ndeiya" target="_blank" rel="noreferrer">
                View GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="project-grid">
              {otherProjects.map((project) => (
                <a className="project-tile" href={project.liveUrl} target="_blank" rel="noreferrer" key={project.title}>
                  <div className="tile-image"><img src={project.image} alt="" loading="lazy" /></div>
                  <div className="tile-copy">
                    <div><span>{project.type}</span><h4>{project.title}</h4></div>
                    <ArrowUpRight size={21} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Ways I can help</span>
              <h2>From ambitious idea to useful product.</h2>
            </div>
            <p>
              I combine product thinking and hands-on engineering to build systems people can actually use.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className="service-card" key={service.title} data-reveal>
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="process-strip" data-reveal>
            <span className="process-title">How we get there</span>
            {['Understand', 'Shape', 'Build', 'Launch', 'Improve'].map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>{step}
                {index < 4 && <ArrowRight size={16} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-intro" data-reveal>
            <span className="section-kicker">About me</span>
            <h2>
              Developer by craft.<br />
              <em>Problem-solver by nature.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-story" data-reveal>
              <p className="about-lead">
                I’m Abdul, a Ghana-based product developer who enjoys turning complicated business problems into clear, dependable digital experiences.
              </p>
              <p>
                My work spans customer-facing websites, mobile applications and the less-visible systems that keep organisations running. I care about how a product looks, but even more about whether it makes the work simpler, faster and more useful.
              </p>
              <p>
                Outside client work, I teach computing, explore emerging technology and share what I learn with other builders.
              </p>
              <div className="social-links">
                <a href="https://github.com/ndeiya" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <a href="https://www.linkedin.com/in/abdul-rahaman-abdulai-ndeiya-0b22a599/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              </div>
            </div>

            <div className="capability-panel" data-reveal>
              <div className="capability-header">
                <span>Capabilities</span>
                <Braces size={20} />
              </div>
              {capabilities.map(([title, tools]) => (
                <div className="capability-row" key={title}>
                  <h3>{title}</h3>
                  <p>{tools}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-copy" data-reveal>
            <span className="section-kicker">Start a conversation</span>
            <h2>Have a useful idea? Let’s make it real.</h2>
            <p>
              Tell me what you’re trying to build, improve or automate. I’ll respond with the clearest next step.
            </p>
            <div className="direct-contact">
              <a href="mailto:ndeiya.dev@gmail.com"><Mail size={18} /> ndeiya.dev@gmail.com</a>
              <a href="https://wa.me/233247439206" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <div className="field-row">
              <label>
                Your name
                <input name="name" type="text" placeholder="Name" autoComplete="name" required />
              </label>
              <label>
                Company <span>(optional)</span>
                <input name="company" type="text" placeholder="Company or organisation" autoComplete="organization" />
              </label>
            </div>
            <div className="field-row">
              <label>
                What do you need?
                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>Select a project type</option>
                  <option>Website or web platform</option>
                  <option>Mobile application</option>
                  <option>AI integration</option>
                  <option>Business automation</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Budget range
                <select name="budget" defaultValue="" required>
                  <option value="" disabled>Select a range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $3,000</option>
                  <option>$3,000 – $8,000</option>
                  <option>$8,000+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              Tell me about the project
              <textarea name="details" rows="5" placeholder="What should it do, who is it for, and when would you like to launch?" required />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Send project enquiry <ArrowUpRight size={18} />
            </button>
            <p className="form-note">This opens your email app with the project details ready to send.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">AN</span><span className="brand-name">Abdul Ndeiya</span></a>
        <p>Web · Mobile · AI · Automation</p>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} Abdul Ndeiya</span>
          <a href="#top">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
