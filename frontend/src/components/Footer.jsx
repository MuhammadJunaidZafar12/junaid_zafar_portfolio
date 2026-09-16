import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      width: '100%',
      borderTop: '1px solid var(--border)',
      background: 'rgba(10, 10, 15, 0.95)',
      marginTop: '3rem',
      padding: '3.5rem 0 2rem',
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            {/* Column 1: Brand */}
            <div style={{ maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#fff',
                }}>
                  JZ
                </span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
                  {personal.name}
                </span>
              </div>

              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Full Stack & MERN Developer specializing in high-performance web applications, scalable REST APIs, and modern frontends.
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                <a
                  href="#contact"
                  onClick={e => handleNavClick(e, '#contact')}
                  className="btn btn-primary"
                  style={{ padding: '0.5rem 1.125rem', fontSize: '0.78rem' }}
                >
                  Start a Project
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Navigation
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem 1.5rem' }}>
                {quickLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Connect */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                Connect
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span>↗</span> LinkedIn
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span>↗</span> GitHub
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span>✉</span> {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <span>📞</span> {personal.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Bottom copyright row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            fontSize: '0.75rem',
            color: 'var(--text-subtle)',
          }}>
            <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
            <p>Designed & Built with MERN Stack • React 19 • Express</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
