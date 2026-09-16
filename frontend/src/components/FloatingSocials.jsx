import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';

export const FloatingSocials = () => {
  const renderIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4 text-[#0077b5]" fill="#0077b5" />;
      case 'github':
        return <GithubIcon className="w-4 h-4 text-black" fill="#000000" />;
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 text-[#e4405f]" stroke="#e4405f" />;
      case 'whatsapp':
        return <WhatsappIcon className="w-4 h-4 text-[#25d366]" fill="#25d366" />;
      default:
        return <LinkedinIcon className="w-4 h-4 text-black" fill="#000000" />;
    }
  };

  return (
    <aside
      aria-label="Social links"
      className="fixed w-fit h-auto p-1.5 rounded-full flex flex-col gap-2 bg-[#ff751f]/50 backdrop-blur-md z-50 top-1/2 -translate-y-1/2 right-2 sm:right-4 shadow-[0_0_20px_rgba(255,117,31,0.35)]"
    >
      {portfolioData.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center overflow-hidden hover:scale-115 hover:rotate-6 transition-all duration-300 shadow-md group"
        >
          {renderIcon(social.name)}
        </a>
      ))}
    </aside>
  );
};
