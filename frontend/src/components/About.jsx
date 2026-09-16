import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SectionHeader = ({ label, title }) => (
  <div className="section-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <div className="section-label">
      <span className="section-label-dot" />
      {label}
    </div>
    <h2 className="section-title">{title}</h2>
    <div className="section-divider">
      <div className="section-divider-fill" />
    </div>
  </div>
);

export const About = () => {
  const { personal } = portfolioData;

  const strengths = [
    {
      icon: '🧱',
      title: 'Backend Architecture',
      desc: 'REST APIs with Node.js/Express 5, JWT auth, RBAC, and scalable MongoDB schemas.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Systems',
      desc: 'Socket.IO-powered live order tracking, GPS synchronization, and real-time state management.'
    },
    {
      icon: '🤖',
      title: 'ML Integration',
      desc: 'Python FastAPI connected to MERN backends, deploying trained ML models in production.'
    },
  ];

  return (
    <section id="about" style={{ width: '100%', padding: 'var(--section-y) 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-inner">
          <SectionHeader label="About" title="About Me" />

          <div className="section-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '640px' }}>
                {personal.bio}
              </p>

              {/* Credential pill */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '0.25rem' }}>
                <span className="badge badge-accent">🎓 BSCS — GCUF (3.2/4.0)</span>
                <span className="badge badge-accent">📍 Lahore, Pakistan</span>
                <span className="badge badge-neutral">Available for Remote / On-site</span>
              </div>
            </div>

            {/* Strength cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {/* {strengths.map(s => (
                <div key={s.title} className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              ))*/}
            </div>

            {/* Contact quick row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {[
                { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { label: 'LinkedIn', value: 'linkedin.com/in/junaid-zafar70', href: personal.linkedinUrl },
                { label: 'GitHub', value: 'MuhammadJunaidZafar12', href: personal.githubUrl },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.label === 'Email' || c.label === 'Phone' ? '_self' : '_blank'}
                    rel="noreferrer"
                    style={{
                      fontSize: '0.83rem',
                      color: 'var(--accent-soft)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-soft)'}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
