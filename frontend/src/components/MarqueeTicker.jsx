import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const MarqueeTicker = () => {
  const { marquee } = portfolioData;
  const items = [...marquee, ...marquee]; // duplicate for seamless loop

  return (
    <div style={{
      width: '100%',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.02)',
      overflow: 'hidden',
      padding: '0.875rem 0',
    }}>
      <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: '0', width: 'max-content' }}>
        {items.map((item, i) => (
          <React.Fragment key={`${item}-${i}`}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-subtle)',
              whiteSpace: 'nowrap',
              padding: '0 1.5rem',
            }}>
              {item}
            </span>
            <span style={{
              color: 'var(--accent)',
              fontSize: '0.55rem',
              opacity: 0.6,
              flexShrink: 0,
            }}>◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
