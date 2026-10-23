import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]'
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG: Tropical Island, Golden Sun, Turquoise Palms, and Bold Red Paint-Brush Swoosh */}
      <div className={`relative flex-shrink-0 ${iconDimensions} rounded-xl bg-[#1C1C1E] p-1 shadow-md border border-white/10 flex items-center justify-center overflow-hidden group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Sun Glow Gradient */}
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF275" />
              <stop offset="65%" stopColor="#F2B705" />
              <stop offset="100%" stopColor="#E09F00" />
            </radialGradient>

            {/* Teal Water & Glow */}
            <linearGradient id="waterTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#25D0E4" />
              <stop offset="100%" stopColor="#0E8FA0" />
            </linearGradient>

            {/* Red Brush Stroke Gradient */}
            <linearGradient id="brushRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="50%" stopColor="#D62828" />
              <stop offset="100%" stopColor="#9B111E" />
            </linearGradient>
          </defs>

          {/* Golden Setting Sun in the background */}
          <circle cx="50" cy="46" r="22" fill="url(#sunGradient)" />

          {/* Gentle water ripples behind foreground */}
          <path
            d="M26 62 Q50 67 74 62"
            stroke="url(#waterTeal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Tropical Island Mound in Teal/Deep Sea */}
          <path
            d="M18 72 C28 64 72 64 82 72 Z"
            fill="#0E8FA0"
          />

          {/* Palm Tree Trunk Left */}
          <path
            d="M44 66 C42 54 46 44 49 35"
            stroke="#1BB5C8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Palm Fronds Left Tree (Turquoise/Teal) */}
          <path
            d="M49 35 Q40 28 32 34 M49 35 Q35 34 29 42 M49 35 Q48 24 57 24 M49 35 Q58 29 64 36 M49 35 Q42 22 36 24"
            stroke="#1BB5C8"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Smaller Palm Tree Right */}
          <path
            d="M58 67 C57 56 62 48 64 41"
            stroke="#25D0E4"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M64 41 Q57 36 52 40 M64 41 Q66 31 73 33 M64 41 Q72 38 77 44 M64 41 Q60 30 55 31"
            stroke="#25D0E4"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Bold Red Paint-Brush Swoosh curling dynamically along bottom */}
          <path
            d="M14 74 C 28 60, 56 86, 86 68 C 88 67, 85 75, 70 80 C 46 87, 24 84, 14 74 Z"
            fill="url(#brushRed)"
          />

          {/* Stylized Paintbrush Handle & Ferrule accent */}
          <path
            d="M84 66 L92 58 L94 60 L86 68 Z"
            fill="#F2B705"
          />
          <path
            d="M87 63 L83 67"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Typography: Gold Script Wordmark "Florida Bay" over "Painting LLC" */}
      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-script font-bold text-[#F2B705] ${titleSizes} tracking-wide drop-shadow-sm`}
            style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive" }}
          >
            Florida Bay
          </span>
          <span
            className={`font-sans font-bold uppercase text-[#F2B705]/90 ${subtitleSizes} mt-0.5 text-shadow-sm`}
          >
            Painting LLC
          </span>
        </div>
      )}
    </div>
  );
};
