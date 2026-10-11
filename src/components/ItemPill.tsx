import React from "react";

interface ItemPillProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ItemPill: React.FC<ItemPillProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs font-semibold",
    md: "px-3.5 py-1 text-sm md:text-base font-bold",
    lg: "px-4 py-1.5 text-base md:text-lg font-bold",
  };

  return (
    <span
      className={`inline-flex items-center uppercase tracking-wide bg-[#9A5B0C] text-[#FFF6E0] rounded-full border border-[#141414]/30 shadow-sm font-display ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};
