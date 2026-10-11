import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizeMap = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-28 h-28",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Circle Emblem */}
      <div
        className={`${sizeMap[size]} shrink-0 rounded-full bg-[#FFC629] p-0.5 border-2 border-[#141414] shadow-retro-sm relative overflow-hidden flex items-center justify-center`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Yellow base circle */}
          <circle cx="50" cy="50" r="48" fill="#FFC629" />
          
          {/* Man's face & hair silhouette */}
          <path
            d="M36 24 C40 18 48 16 56 16 C64 16 72 20 74 27 C76 33 74 42 71 46 C73 49 74 55 71 61 C67 69 60 74 52 75 C44 75 39 70 37 63 C35 55 36 48 38 43 C36 37 34 30 36 24 Z"
            fill="#141414"
          />
          {/* Hair texture details */}
          <path d="M42 18 C46 15 54 15 62 17 C68 19 72 23 73 26" stroke="#FFC629" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M38 23 C42 20 48 20 54 21" stroke="#FFC629" strokeWidth="1.2" strokeLinecap="round" />

          {/* Sunglasses */}
          <path d="M38 41 Q43 37 49 41 Q50 48 44 49 Q38 48 38 41 Z" fill="#141414" stroke="#FFC629" strokeWidth="1" />
          <path d="M51 42 L55 42" stroke="#FFC629" strokeWidth="1.5" />
          <path d="M57 41 Q63 37 69 41 Q70 48 64 49 Q58 48 57 41 Z" fill="#141414" stroke="#FFC629" strokeWidth="1" />

          {/* Beard and Mustache lines */}
          <path d="M44 55 Q53 59 62 55" stroke="#FFC629" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M42 61 Q53 67 64 61" stroke="#FFC629" strokeWidth="1.5" strokeLinecap="round" />

          {/* Briar Pipe */}
          <path
            d="M48 63 Q46 72 41 74 Q38 75 36 70"
            stroke="#141414"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Pipe Bowl */}
          <path
            d="M36 70 C34 67 39 66 40 69 C41 72 35 73 36 70 Z"
            fill="#141414"
          />
          {/* Smoke Wisps */}
          <path
            d="M38 65 Q35 59 39 55 Q42 51 38 46"
            stroke="#141414"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Official Wordmark with Split Box */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-stretch border-2 border-[#141414] shadow-retro-sm rounded overflow-hidden">
            <span className="bg-[#141414] text-[#FFF6E0] font-display text-sm md:text-base px-2 py-0.5 tracking-wide uppercase">
              Dhuan &amp;
            </span>
            <span className="bg-[#FFFFFF] text-[#141414] font-display text-sm md:text-base px-2 py-0.5 tracking-wide uppercase">
              Dukhan
            </span>
          </div>
          <span className="text-[9px] md:text-[10px] tracking-[0.22em] text-[#141414] font-sans font-semibold uppercase mt-0.5 leading-none">
            the premium rice recipe
          </span>
        </div>
      )}
    </div>
  );
};
