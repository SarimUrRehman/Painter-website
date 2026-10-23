import React from 'react';

interface DividerProps {
  fillColor?: string;
  className?: string;
  variant?: 'paint-stroke' | 'wave' | 'brush-edge';
  flip?: boolean;
}

export const PaintDivider: React.FC<DividerProps> = ({
  fillColor = '#FAF7F2',
  className = '',
  variant = 'paint-stroke',
  flip = false,
}) => {
  const transform = flip ? 'rotate-180' : '';

  if (variant === 'paint-stroke') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className} ${transform}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-16 lg:h-20"
        >
          {/* Subtle multi-layer paint stroke effect */}
          <path
            d="M0,0 C150,60 350,15 500,45 C650,75 800,20 950,55 C1100,85 1180,40 1200,50 L1200,120 L0,120 Z"
            fill={fillColor}
          />
          {/* Subtle teal accent brush bristle trail */}
          <path
            d="M0,8 C140,55 360,25 490,48 C640,70 820,30 960,58 C1080,80 1160,50 1200,52"
            stroke="#1BB5C8"
            strokeWidth="3"
            fill="none"
            opacity="0.35"
            strokeDasharray="18, 10"
          />
          {/* Red accent brush dash */}
          <path
            d="M200,32 C380,45 600,65 850,38"
            stroke="#D62828"
            strokeWidth="2.5"
            fill="none"
            opacity="0.4"
            strokeDasharray="24, 14"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className} ${transform}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-16 lg:h-20"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 900,-20 1200,40 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  // Brush edge variant
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${transform}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="relative block w-full h-10 md:h-14"
      >
        <path
          d="M0,35 Q75,10 150,32 T300,30 T450,42 T600,25 T750,38 T900,20 T1050,34 T1200,22 L1200,80 L0,80 Z"
          fill={fillColor}
        />
        <path
          d="M0,35 Q75,10 150,32 T300,30 T450,42 T600,25 T750,38 T900,20 T1050,34 T1200,22"
          stroke="#F2B705"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};
