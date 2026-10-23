import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const FloatingCallButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling a bit so it doesn't obstruct initial hero view
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside aria-label="Quick Phone Call Floating Action" className="md:hidden">
      <a
        href="tel:+18137195188"
        aria-label="Call Florida Bay Painting LLC at +1 (813) 719-5188"
        className={`fixed bottom-5 right-4 z-50 flex items-center gap-2.5 bg-[#D62828] hover:bg-[#B51E1E] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 border-2 border-white/20 ${
          visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90 pointer-events-none'
        }`}
        style={{
          boxShadow: '0 10px 25px -3px rgba(214, 40, 40, 0.5), 0 4px 6px -4px rgba(214, 40, 40, 0.3)'
        }}
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <Phone className="w-4 h-4 fill-white" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F2B705]">Call Now</span>
          <span className="text-xs font-bold">(813) 719-5188</span>
        </div>
      </a>
    </aside>
  );
};
