import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profile from "../assets/profile.png"

const ROLES = ["Full Stack Developer", "MERN Stack Developer", "Backend Developer", "React / Next.js Developer"];

export const Hero = () => {
  const { personal } = portfolioData;
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '3.5rem 0 4.5rem',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-pill hero-load-item hero-load-item-1">
              <span className="eyebrow-dot" />
              Trusted By Clients Worldwide
            </div>

            <div className="hero-heading-block hero-load-item hero-load-item-2">
              <p className="hero-small-label">Hi, I'm</p>
              <h1 className="font-display hero-title">
                {personal.firstName} <span>{personal.lastName || 'Zafar'}</span>
              </h1>
            </div>

            <div className="role-rotator-wrap hero-load-item hero-load-item-3">
              <p className="hero-role" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}>
                {ROLES[roleIdx]}
              </p>
            </div>

            <p className="hero-subtitle hero-load-item hero-load-item-4">Websites That Turn Visitors Into Clients</p>

            <div className="hero-actions hero-load-item hero-load-item-5">
              <a href="#contact" onClick={e => { e.preventDefault(); const el = document.getElementById('contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); }} className="btn btn-primary">
                Start a Project
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href={personal.resumeUrl}
                download="Muhammad-Junaid-Zafar-Resume.pdf"
                className="btn btn-outline"
              >
                <Download size={15} strokeWidth={2.5} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap hero-load-visual">
            <div className="hero-portrait-shell">
              <img
                src={profile}
                alt="Portfolio profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
