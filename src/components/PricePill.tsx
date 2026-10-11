import React from "react";

interface PricePillProps {
  price: number | null;
  displayPrice?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const PricePill: React.FC<PricePillProps> = ({
  price,
  displayPrice,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-sm md:text-base",
    lg: "px-4 py-1.5 text-lg md:text-xl",
  };

  const text =
    displayPrice || (price !== null ? `Rs. ${price.toLocaleString()}` : "Price at counter");

  return (
    <span
      className={`inline-flex items-center justify-center font-display uppercase tracking-wide bg-[#141414] text-[#FFF6E0] rounded-full border-2 border-[#141414] shadow-retro-sm tabular-nums whitespace-nowrap ${sizeClasses[size]} ${className}`}
    >
      {text}
    </span>
  );
};
