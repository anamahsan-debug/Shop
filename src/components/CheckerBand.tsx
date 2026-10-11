import React from "react";

interface CheckerBandProps {
  marqueeText?: string;
  variant?: "marquee" | "simple";
  className?: string;
}

export const CheckerBand: React.FC<CheckerBandProps> = ({
  marqueeText = "DHUAAN RICE • TIKKA • CHAPLI • SEEKH • SHISH TAWOOK • MAGHOOLTA • BORN FROM SMOKE •",
  variant = "marquee",
  className = "",
}) => {
  return (
    <div className={`w-full relative overflow-hidden select-none ${className}`}>
      {/* 2-row Checkerboard band */}
      <div className="h-7 w-full bg-checker-by border-y-2 border-[#141414]" />

      {/* Marquee text strip overlay */}
      {variant === "marquee" && (
        <div className="bg-[#141414] py-2 border-b-2 border-[#141414] overflow-hidden whitespace-nowrap flex text-[#FFC629]">
          <div className="flex animate-[marquee_24s_linear_infinite] motion-reduce:animate-none shrink-0 font-display text-sm md:text-base tracking-widest uppercase">
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
          </div>
          <div
            aria-hidden="true"
            className="flex animate-[marquee_24s_linear_infinite] motion-reduce:animate-none shrink-0 font-display text-sm md:text-base tracking-widest uppercase"
          >
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
            <span className="mx-4">{marqueeText}</span>
          </div>
        </div>
      )}
    </div>
  );
};
