import { useState, useEffect } from 'react'
import SEO from './components/SEO.jsx'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent } from './components/ui/card.jsx'
import { Badge } from './components/ui/badge.jsx'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Globe,
  User,
  Briefcase,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import './App.css'
import heroBackground from './assets/hero-bg.webp'
import zludeScreenshot from './assets/zlude.png'
import dcbrainsImage from './assets/dcbrains.png'
import project3Image from './assets/project-3.webp'
import alumasterImage from './assets/alumaster.png'
import p2pdonateImage from './assets/p2pdonate.png'
import logo from './assets/logo-webdev.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'React Native', level: 88, category: 'Mobile' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'PHP', level: 85, category: 'Backend' },
    { name: 'MySQL', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MongoDB', level: 85, category: 'Database' }
  ]

  const projects = [
    {
      title: 'Zlude Mobile App Project',
      description: 'A dynamic website showcasing the Zlude Mobile App with real-time currency conversion functionality. Features secure money transfers, live exchange rates, and an intuitive dashboard for seamless international transactions.',
      tech: ['React', 'Next.js', 'OpenExchangeRates API', 'PostgreSQL'],
      image: zludeScreenshot,
      githubUrl: 'https://github.com/ndeiya/zlude-new',
      liveUrl: 'https://zlude.com'
    },
    {
      title: 'DC Brains Educational Project',
      description: 'A comprehensive educational platform featuring course booking functionality and an advanced admin backend for dynamic content management. Enables seamless course enrollment and provides administrators with powerful tools for section and page editing.',
      tech: ['PHP', 'JavaScript', 'MySQL'],
      image: dcbrainsImage,
      githubUrl: 'https://github.com/ndeiya/dcbrains',
      liveUrl: 'https://dcbrains.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts using the OpenMeteo API with beautiful data visualizations and interactive charts.',
      tech: ['React', 'Tailwind CSS', 'Recharts', 'OpenMeteo API'],
      image: project3Image,
      githubUrl: 'https://github.com/ndeiya/weather-dashboard',
      liveUrl: 'https://ndeiya.github.io/weather-dashboard'
    },
    {
      title: 'AluMaster GH Project',
      description: 'A comprehensive aluminum and glass management system for tracking inventory, orders, and customer relationships. Features real-time inventory management, order processing, and detailed reporting capabilities.',
      tech: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
      image: alumasterImage,
      githubUrl: 'https://github.com/ndeiya/alumaster',
      liveUrl: 'https://alumastergh.com'
    },
    {
      title: 'P2P Donate',
      description: 'A socially impactful peer-to-peer donation platform addressing betting addiction in Ghana. Features an intelligent pledging and matching system that connects donors with receivers, referral rewards, cash bonuses, and mobile money integration. Provides guaranteed returns and promotes financial literacy in the community.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Mobile Money API'],
      image: p2pdonateImage,
      githubUrl: 'https://github.com/ndeiya/P2P_Donate',
      liveUrl: 'https://p2pdonate.com'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      setIsScrolled(scrollPosition > heroHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO 
        title='Abdul Ndeiya - Web and Mobile Developer Portfolio'
        description='Professional Web and Mobile Developer crafting beautiful, functional, and user-centered digital experiences. Specializing in React, React Native, PHP, and modern web technologies.'
        name='Abdul Ndeiya'
        type='website'
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Abdul Ndeiya Logo" className="h-10 w-10 object-contain" />
              <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Abdul Ndeiya
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled
                    ? `hover:text-primary ${activeSection === section.id ? 'text-primary' : 'text-foreground'}`
                    : `hover:text-white ${activeSection === section.id ? 'text-white' : 'text-white/80'}`
                    }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isScrolled
                    ? `hover:text-primary ${activeSection === section.id ? 'text-primary' : 'text-foreground'}`
                    : `hover:text-white ${activeSection === section.id ? 'text-white' : 'text-white/80'}`
                    }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Hi, I'm{' '}
            <span className="outline-text">Abdul Ndeiya</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Mobile and Web Developer crafting beautiful, functional, and user-centered digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-16">
            <ChevronDown
              size={32}
              className="mx-auto text-white animate-bounce cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate web and mobile developer with experience in creating mobile and web applications
              that solve real-world problems. I love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started as a curious computer software student, I've evolved into a versatile developer
                who thrives on creating seamless user experiences and robust backend systems.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you'll find me in the classroom teaching computing,  exploring new technologies, contributing to open-source
                projects, watching football or sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Button variant="outline" size="sm"
                  onClick={() => window.open('https://github.com/ndeiya', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm"
                  onClick={() => window.open('https://www.linkedin.com/in/abdul-rahaman-abdulai-ndeiya-0b22a599//', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center card-hover">
                <Code className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, Vue, TypeScript</p>
              </Card>
              <Card className="p-6 text-center card-hover">
                <Server className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Python, PHP, APIs</p>
              </Card>
              <Card className="p-6 text-center card-hover">
                <Database className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Database</h4>
                <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, MySQL</p>
              </Card>
              <Card className="p-6 text-center card-hover">
                <Globe className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Cloud</h4>
                <p className="text-sm text-muted-foreground">AWS, Docker, CI/CD</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <Badge variant="secondary">{skill.category}</Badge>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden border border-gray-600">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out progress-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work that I'm proud to share
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Project Display */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.title} className="w-full flex-shrink-0 px-4">
                    <Card className="overflow-hidden card-hover max-w-4xl mx-auto">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-video md:aspect-auto overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center">
                          <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline">{tech}</Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.githubUrl || '#', '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.liveUrl || '#', '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => window.open('mailto:ndeiya.dev@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                ndeiya.dev@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => window.open('https://wa.me/+233247439206', '_blank')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Abdul Ndeiya</h3>
            <p className="text-gray-400 mb-6">
              Mobile and Web Developer crafting beautiful, functional, and user-centered digital experiences
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com/abdulai.abdulrahaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/megarahaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/ndeiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+233247439206"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rahaman-abdulai-ndeiya-0b22a599/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Abdul Ndeiya. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

