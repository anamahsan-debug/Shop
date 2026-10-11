import React from "react";

interface SmokeLayerProps {
  className?: string;
  opacity?: number;
}

export const SmokeLayer: React.FC<SmokeLayerProps> = ({
  className = "",
  opacity = 0.45,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* SVG drifting smoke puffs */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover mix-blend-screen motion-reduce:hidden"
      >
        <defs>
          <filter id="smokeBlur1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="35" />
          </filter>
          <filter id="smokeBlur2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="55" />
          </filter>
          <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6E0" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#FFF6E0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFF6E0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="animate-[smokeDrift_14s_ease-in-out_infinite]">
          <circle cx="350" cy="400" r="180" fill="url(#smokeGrad)" filter="url(#smokeBlur1)" />
          <circle cx="850" cy="320" r="220" fill="url(#smokeGrad)" filter="url(#smokeBlur2)" />
        </g>
        <g className="animate-[smokeDrift_18s_ease-in-out_infinite_reverse]">
          <circle cx="600" cy="450" r="240" fill="url(#smokeGrad)" filter="url(#smokeBlur2)" />
          <circle cx="1150" cy="380" r="190" fill="url(#smokeGrad)" filter="url(#smokeBlur1)" />
        </g>
      </svg>
    </div>
  );
};
