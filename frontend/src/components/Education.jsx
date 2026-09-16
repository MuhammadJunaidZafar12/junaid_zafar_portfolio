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

export const Education = () => {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <section id="education" style={{ width: '100%', padding: 'var(--section-y) 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-inner">
          <SectionHeader label="Education" title="Academic" />

          <div className="section-content">
            <div className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                {/* Badge */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-light)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  🎓
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}>
                        {edu.degree}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--accent-soft)', fontWeight: 500, marginTop: '0.2rem' }}>
                        {edu.institution}
                      </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.375rem' }}>
                      <span className="badge badge-accent" style={{ fontSize: '0.75rem', padding: '0.3rem 0.875rem' }}>
                        CGPA: {edu.cgpa}
                      </span>
                      <span className="badge badge-neutral">{edu.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', borderRadius: '9999px' }} />

              {/* Core Subjects */}
              <div>
                <p style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-subtle)',
                  marginBottom: '0.625rem',
                }}>
                  Core Subjects
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {edu.focus.map(subject => (
                    <span key={subject} className="tech-tag">{subject}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
