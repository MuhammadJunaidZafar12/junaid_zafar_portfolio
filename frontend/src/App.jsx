import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { About } from './components/About';
import Skills from "./components/Skills";
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setRoute(window.location.pathname);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const sections = ['about', 'skills', 'services', 'experience', 'projects', 'education', 'contact'];
      const offset = 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (window.scrollY + offset >= top && window.scrollY + offset < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const isProjectsPage = route === '/projects';

  if (isProjectsPage) {
    return (
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Navbar activeSection="projects" />

        <main style={{ flex: 1 }}>
          <Projects isProjectsPage />
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Navbar activeSection={activeSection} />

      <main style={{ flex: 1 }}>
        <Hero />
        <MarqueeTicker />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>

      <div className="floating-socials" aria-label="Social media links">
        <a href="https://linkedin.com/in/junaid-zafar70" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="https://github.com/MuhammadJunaidZafar12" target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
        <a href="mailto:junaidzafar434@gmail.com" aria-label="Email">✉</a>
        <a href="https://wa.me/923461255799" target="_blank" rel="noreferrer" aria-label="WhatsApp">wa</a>
      </div>

      <Footer />

      {/* Back to Top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          zIndex: 50,
          width: '2.75rem',
          height: '2.75rem',
          borderRadius: '50%',
          background: 'var(--accent-light)',
          border: '1px solid var(--border-accent)',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(12px)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(8px)',
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'var(--border-accent)'; }}
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default App;
