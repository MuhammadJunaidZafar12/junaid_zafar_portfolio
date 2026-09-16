import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);

    if (!el && window.location.pathname !== '/') {
      window.history.pushState({}, '', `/${href}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
        }
      }, 0);
      return;
    }

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          transition: 'all 0.3s ease',
          background: isScrolled ? 'rgba(10, 10, 15, 0.90)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${isScrolled ? 'var(--border)' : 'transparent'}`,
        }}
      >
        <div className="container" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Logo */}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0, textDecoration: 'none' }}
          >
            <span style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-yellow))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.82rem',
              color: '#fff',
              flexShrink: 0,
              boxShadow: '0 10px 30px var(--accent-glow)',
            }}>
              SJM
            </span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }} className="navbar-desktop">
              {personal.firstName}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ alignItems: 'center', gap: '0.25rem' }} className="navbar-desktop">
            {NAV_LINKS.map(link => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    padding: '0.375rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-soft)' : 'var(--text-muted)',
                    background: isActive ? 'var(--accent-light)' : 'transparent',
                    border: `1px solid ${isActive ? 'var(--border-accent)' : 'transparent'}`,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right side: CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="btn btn-primary navbar-desktop"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem', borderRadius: '999px' }}
            >
              Start a Project
            </a>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              style={{
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
              className="navbar-mobile"
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: 'var(--text)',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                    transformOrigin: 'center',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'scaleX(0)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(10, 10, 15, 0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease',
          }}
          className="navbar-mobile navbar-menu-overlay"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.5rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                color: activeSection === link.href.slice(1) ? 'var(--accent-soft)' : 'var(--text)',
                letterSpacing: '-0.02em',
                padding: '0.5rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, '#contact')}
            className="btn btn-primary"
            style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.75rem 2rem' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
};
