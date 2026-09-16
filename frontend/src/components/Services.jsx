import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ICONS = {
  layers: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <rect x="9" y="9" width="6" height="6" />
      <path d="M20 14h2M20 10h2M4 14H2M4 10H2M14 20v2M10 20v2M14 4V2M10 4V2" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  ),
};

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

export const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" style={{ width: '100%', padding: 'var(--section-y) 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-inner">
          <SectionHeader label="Services" title="What I Do" />

          <div className="section-content">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
            }}>
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Number watermark */}
                  <span style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '1rem',
                    fontSize: '3rem',
                    fontWeight: 800,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: 'rgba(255,255,255,0.03)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--accent-light)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-soft)',
                    flexShrink: 0,
                  }}>
                    {ICONS[service.icon]}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.975rem',
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.83rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    flexGrow: 1,
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
