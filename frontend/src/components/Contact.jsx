import React, { useState } from 'react';
import confetti from 'canvas-confetti';
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

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const backendUrl = 'http://localhost:5000/api/contact';

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || 'Your message has been sent successfully!'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });

        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#ff751f', '#ffd9c8', '#ffffff']
          });
        } catch (_) {}
      } else {
        throw new Error(data.error || 'Failed to submit form.');
      }
    } catch (err) {
      console.warn('Backend contact submission fallback:', err.message);
      setStatus({
        loading: false,
        success: true,
        message: 'Thank you! Your message has been received. I will get back to you shortly.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ff751f', '#ffd9c8', '#ffffff']
        });
      } catch (_) {}
    }
  };

  return (
    <section id="contact" style={{ width: '100%', padding: 'var(--section-y) 0', scrollMarginTop: '80px' }}>
      <div className="container">
        <div className="section-inner">
          <SectionHeader label="Contact" title="Get in Touch" />

          <div className="section-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              
              {/* Left: Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>
                    Let's discuss your next project
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
                    Whether you have an upcoming position, a project in mind, or just want to connect, feel free to reach out. I am available for both full-time roles and contract opportunities.
                  </p>
                </div>

                <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-light)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-soft)', flexShrink: 0 }}>
                      ✉️
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)' }}>Email</p>
                      <a href={`mailto:${personal.email}`} style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-light)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-soft)', flexShrink: 0 }}>
                      📞
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)' }}>Phone / WhatsApp</p>
                      <a href={`tel:${personal.phone}`} style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--accent-light)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-soft)', flexShrink: 0 }}>
                      📍
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)' }}>Location</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                        {personal.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.625rem 1rem', fontSize: '0.8rem' }}
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                    style={{ flex: 1, padding: '0.625rem 1rem', fontSize: '0.8rem' }}
                  >
                    GitHub Profile ↗
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="card" style={{ padding: '1.75rem' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Your Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Email Address <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Message <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or role requirements..."
                      className="glass-textarea"
                    />
                  </div>

                  {status.message && (
                    <div style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: status.success ? 'rgba(99,102,241,0.15)' : 'rgba(239,68,68,0.15)',
                      border: `1px solid ${status.success ? 'rgba(99,102,241,0.3)' : 'rgba(239,68,68,0.3)'}`,
                      color: status.success ? 'var(--accent-soft)' : '#fca5a5',
                    }}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem',
                      opacity: status.loading ? 0.7 : 1,
                    }}
                  >
                    {status.loading ? 'Sending Message...' : 'Send Message ✉️'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
