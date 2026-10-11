import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "../config/site";
import { useCart } from "../context/CartContext";
import { Phone, ShoppingBag, Menu, X, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItemCount, openCart } = useCart();
  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Deals", href: "#bestsellers" },
    { label: "Party Packs", href: "#party-orders" },
    { label: "Our Story", href: "#about" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      {/* 5.1 Thin Announcement Bar */}
      <div className="bg-[#141414] text-[#FFC629] py-1.5 px-4 border-b border-[#FFC629]/20 text-xs font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop static / clean text */}
          <div className="hidden md:flex items-center gap-6 mx-auto tracking-wide">
            <span>🔥 Fresh charcoal-smoked rice cooked daily</span>
            <span className="text-neutral-500">·</span>
            <span>💵 Cash on delivery &amp; counter (No online payment)</span>
            <span className="text-neutral-500">·</span>
            <span>🍗 Family &amp; Party catering available</span>
          </div>

          {/* Mobile ticker */}
          <div className="md:hidden flex animate-[marquee_18s_linear_infinite] whitespace-nowrap text-[11px] font-medium tracking-wide">
            <span className="mx-3">🔥 Fresh smoked rice daily · Cash on delivery · Party orders welcome</span>
            <span className="mx-3">🔥 Fresh smoked rice daily · Cash on delivery · Party orders welcome</span>
          </div>
        </div>
      </div>

      {/* 5.2 Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b-2 border-[#141414] ${
          scrolled ? "bg-[#FFC629]/95 backdrop-blur-md shadow-md py-2.5" : "bg-[#FFC629] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
          {/* Left: Brand Logo */}
          <a href="#" className="cursor-pointer">
            <BrandLogo size="md" />
          </a>

          {/* Middle: Clean Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display uppercase text-sm tracking-wider text-[#141414] hover:text-[#9A5B0C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#141414] hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Call Action Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-neutral-800 text-[#FFF6E0] rounded-lg border-2 border-[#141414] font-display text-xs uppercase tracking-wider transition-colors"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC629]" />
              <span className="hidden md:inline">Call Now</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-1.5 py-1.5 px-3 sm:px-3.5 bg-white text-[#141414] rounded-lg border-2 border-[#141414] shadow-retro-sm font-display text-xs sm:text-sm uppercase tracking-wider btn-press cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#141414]" />
              <span className="hidden sm:inline">Order Tray</span>
              {totalItemCount > 0 && (
                <span className="ml-1 w-5 h-5 bg-[#D7261E] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button (WhatsApp) */}
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! I want to order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 py-1.5 px-4 bg-[#141414] text-[#FFC629] hover:bg-neutral-800 font-display text-xs sm:text-sm uppercase tracking-wider rounded-lg border-2 border-[#141414] shadow-retro-sm btn-press"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>

            {/* Hamburger button (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-[#141414] text-[#FFC629] rounded-lg border-2 border-[#141414] cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Black Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141414] text-[#FFF6E0] flex flex-col justify-between p-6 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <BrandLogo size="md" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#FFC629] text-[#141414] rounded-lg border-2 border-[#141414] cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links in Big Anton */}
          <div className="py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#FFF6E0] hover:text-[#FFC629] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer CTAs */}
          <div className="space-y-3 pt-6 border-t border-neutral-800">
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! I want to order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#FFC629] text-[#141414] font-display text-base uppercase tracking-wider rounded-xl border-2 border-[#141414] flex items-center justify-center gap-2 shadow-retro-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full py-3 px-4 bg-neutral-900 text-[#FFF6E0] font-display text-sm uppercase tracking-wider rounded-xl border border-neutral-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFC629]" />
              <span>Call Us: {siteConfig.displayPhone}</span>
            </a>

            <p className="text-center text-[11px] font-sans text-neutral-400 pt-2">
              Cash on delivery · 8% service charge on dine-in
            </p>
          </div>
        </div>
      )}
    </>
  );
};
