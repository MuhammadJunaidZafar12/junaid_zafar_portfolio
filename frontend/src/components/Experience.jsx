import React, { useState } from 'react';
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

export const Experience = () => {
  const { experience } = portfolioData;
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" style={{ width: '100%', padding: 'var(--section-y) 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-inner">
          <SectionHeader label="Experience" title="Work History" />

          <div className="section-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {experience.map((exp, i) => {
              const isOpen = expanded === exp.id;
              const initials = exp.company.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

              return (
                <div
                  key={exp.id}
                  className="card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    {/* Avatar */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--accent-light)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      color: 'var(--accent-soft)',
                      flexShrink: 0,
                    }}>
                      {initials}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <div>
                          <h3 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: 'var(--text)',
                            lineHeight: 1.3,
                          }}>
                            {exp.role}
                          </h3>
                          <p style={{ fontSize: '0.83rem', color: 'var(--accent-soft)', fontWeight: 500, marginTop: '0.15rem' }}>
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'var(--accent-soft)', textDecoration: 'none' }}
                                onClick={e => e.stopPropagation()}
                                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                              >
                                {exp.company} ↗
                              </a>
                            ) : exp.company}
                          </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            {exp.duration}
                          </span>
                          <div style={{ display: 'flex', gap: '0.375rem' }}>
                            <span className="badge badge-neutral">{exp.type}</span>
                            <span className="badge badge-neutral">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.625rem' }}>
                        {exp.techStack.map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Expand chevron */}
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        flexShrink: 0,
                        color: 'var(--text-subtle)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        marginTop: '0.25rem',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {/* Expandable responsibilities */}
                  {isOpen && (
                    <ul className="dot-list" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '0.25rem' }}>
                      {exp.responsibilities.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
