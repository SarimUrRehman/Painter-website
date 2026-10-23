import React from 'react';
import { Phone, ArrowDown, ShieldCheck, Sparkles, MapPin, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#1C1C1E] text-white pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden"
    >
      {/* Subtle Tropical Teal & Gold Glow Gradients in Background */}
      <div
        className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#1BB5C8]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F2B705]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative painterly brush stroke texture overlay (SVG) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Location & Service Area Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#1BB5C8]/30 text-xs sm:text-sm font-medium text-[#1BB5C8] mb-6 backdrop-blur-sm shadow-sm">
            <MapPin className="w-4 h-4 text-[#F2B705]" />
            <span>Serving Florida & The Tampa Bay Area</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Fresh Color.{' '}
            <span className="relative inline-block text-[#F2B705] drop-shadow-md">
              Flawless Finish.
              {/* Painterly Red Brush Underscore */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#D62828] -z-10 overflow-visible"
                viewBox="0 0 250 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 10 C 60 2, 180 12, 247 5"
                  stroke="#D62828"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Professional house painting across Florida — interior, exterior, and cabinets.{' '}
            <span className="text-[#F2B705] font-medium block sm:inline mt-1 sm:mt-0">
              "Give us a call and we will be glad to help."
            </span>
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            {/* Button 1: Solid Red Call Button */}
            <a
              href="tel:+18137195188"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D62828] hover:bg-[#B51E1E] text-white font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl shadow-lg hover:shadow-red-900/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-red-400"
            >
              <Phone className="w-5 h-5 fill-white/20" />
              <span>Call +1 (813) 719-5188</span>
            </a>

            {/* Button 2: Outlined Gold Request Quote Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#F2B705] text-[#F2B705] hover:bg-[#F2B705] hover:text-[#1C1C1E] font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-[#F2B705]/40"
            >
              <Sparkles className="w-5 h-5" />
              <span>Request a Free Quote</span>
            </a>
          </div>

          {/* Key Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Award className="w-4 h-4 text-[#1BB5C8]" />
              <span>Free In-Home Estimates</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-[#1BB5C8]" />
              <span>Premium Grade Paints</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-[#F2B705]" />
              <span>100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
