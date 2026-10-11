import React, { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 300);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#141414] flex flex-col items-center justify-center transition-opacity duration-300 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Smoke puff effect behind logo */}
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-10 bg-[#FFC629]/20 blur-2xl rounded-full animate-pulse" />
        
        {/* Animated Brand Emblem & Wordmark */}
        <div className="relative z-10 animate-[bounce_1.5s_infinite]">
          <BrandLogo size="xl" showText={false} />
        </div>

        <div className="mt-4 text-center">
          <div className="flex items-center border-2 border-[#FFC629] rounded overflow-hidden">
            <span className="bg-[#141414] text-[#FFF6E0] font-display text-lg px-2.5 py-1 tracking-wider uppercase">
              Dhuan &amp;
            </span>
            <span className="bg-[#FFF6E0] text-[#141414] font-display text-lg px-2.5 py-1 tracking-wider uppercase">
              Dukhan
            </span>
          </div>
          <p className="font-script text-xl text-[#FFC629] mt-2">
            the premium rice recipe
          </p>
          <span className="text-[11px] font-sans text-neutral-400 uppercase tracking-widest mt-1 block">
            Charcoal heating up...
          </span>
        </div>
      </div>
    </div>
  );
};
