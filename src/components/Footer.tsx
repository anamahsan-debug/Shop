import React from "react";
import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "../config/site";
import { CheckerBand } from "./CheckerBand";
import { MessageCircle, Phone, Instagram, Facebook, AlertCircle, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141414] text-[#FFF6E0] overflow-hidden">
      
      {/* 5.15 Final CTA Band (Black + Checker Edge) */}
      <div className="relative pt-16 pb-20 px-4 sm:px-6 bg-[#141414] border-b-2 border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="flex-1">
            <span className="font-script text-3xl sm:text-4xl text-[#FFC629] block mb-1">
              Garma garam hunger emergency?
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl text-[#FFF6E0] tracking-tight leading-[0.9]">
              SMELL THAT? <br />
              <span className="text-[#FFC629]">THAT&apos;S DINNER.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-3 max-w-md">
              Order now on WhatsApp and get freshly charcoal-smoked Dhuaan rice delivered hot to your doorstep.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! 🔥 I want to order right away.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-base uppercase tracking-wider rounded-xl border-2 border-[#141414] shadow-retro-cream flex items-center gap-2 btn-press cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="py-3.5 px-6 bg-neutral-900 hover:bg-neutral-800 text-[#FFF6E0] font-display text-base uppercase tracking-wider rounded-xl border border-neutral-700 flex items-center gap-2 btn-press"
              >
                <Phone className="w-4 h-4 text-[#FFC629]" />
                <span>Call {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Mascot Sticker Graphic */}
          <div className="shrink-0 relative">
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#FFC629] p-3 border-[4px] border-[#FFF6E0] shadow-retro-yellow flex items-center justify-center overflow-hidden">
              <img
                src="/mascot-rider.png"
                alt="Dhuan & Dukhan mascot speeding on yellow scooter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Checker Band Divider */}
      <CheckerBand variant="simple" />

      {/* 5.16 Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" />
            <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
              &quot;The premium rice recipe&quot; — authentic Pakistani charcoal-smoked rice deals, slow-cooked basmati, spicy flame-grilled tikka boti, and house Maghoolta.
            </p>
            
            {/* Cash Only Policy Reminder */}
            <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 inline-flex items-center gap-2 text-xs text-neutral-300">
              <AlertCircle className="w-4 h-4 text-[#FFC629] shrink-0" />
              <span>
                <strong>Cash only:</strong> Online payment is not accepted.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base uppercase tracking-wider text-[#FFC629]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-300">
              <li>
                <a href="#menu" className="hover:text-[#FFC629] transition-colors">
                  Full Menu &amp; Prices
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-[#FFC629] transition-colors">
                  Bestseller Deals (Premier, Combo)
                </a>
              </li>
              <li>
                <a href="#party-orders" className="hover:text-[#FFC629] transition-colors">
                  Family Packs &amp; Party Catering
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFC629] transition-colors">
                  Our Charcoal Smoked Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FFC629] transition-colors">
                  Location &amp; Opening Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-base uppercase tracking-wider text-[#FFC629]">
              Outlet Contact
            </h4>
            <div className="space-y-1.5 text-xs font-sans text-neutral-300">
              <p>
                <strong className="text-white">Address:</strong> {siteConfig.address}, {siteConfig.city}
              </p>
              <p>
                <strong className="text-white">Kitchen Hours:</strong> {siteConfig.hours}
              </p>
              <p>
                <strong className="text-white">Phone:</strong> {siteConfig.displayPhone}
              </p>
            </div>

            {/* Socials */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FFC629] text-neutral-300 hover:text-[#FFC629] flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-[#FFC629] text-neutral-300 hover:text-[#FFC629] flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="ml-auto w-9 h-9 rounded-lg bg-[#FFC629] text-[#141414] hover:bg-[#F2B705] flex items-center justify-center transition cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright and Policy Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500">
          <p>© {new Date().getFullYear()} Dhuan &amp; Dukhan. All rights reserved.</p>
          <p className="text-center sm:text-right text-[#FFC629]/80 font-medium">
            Cash only · Online payment not accepted · 8% service charge on dine-in
          </p>
        </div>
      </div>

    </footer>
  );
};
