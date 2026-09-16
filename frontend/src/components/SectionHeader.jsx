import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="w-full md:w-[30%] md:shrink-0 flex flex-col items-start gap-2">
      <div className="w-full flex items-center gap-2.5">
        <div className="size-7 rounded-full bg-[#ff751f]/20 border border-[#ff751f]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,117,31,0.4)]">
          <Sparkles className="w-4 h-4 text-[#ff751f]" />
        </div>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase anton tracking-wider">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="text-white/60 text-xs sm:text-sm font-medium pl-9">
          {subtitle}
        </p>
      )}

      {/* Vertical luminous gradient line */}
      <div className="hidden md:block relative w-0.5 min-h-24 flex-1 ml-3.5 bg-white/10 rounded-full mt-2 overflow-hidden">
        <div className="glow-line w-full h-full rounded-full" />
      </div>
    </div>
  );
};
