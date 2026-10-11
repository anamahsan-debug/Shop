import React from "react";
import { siteConfig } from "../config/site";
import { SmokeLayer } from "./SmokeLayer";
import { MessageCircle, Utensils, Sparkles, Clock, DollarSign, Users } from "lucide-react";

export const HeroSection: React.FC = () => {
  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <section className="relative bg-[#FFC629] text-[#141414] overflow-hidden pt-8 pb-16 md:py-20 border-b-2 border-[#141414]">
      {/* Background Smoke Layer & Grain */}
      <SmokeLayer opacity={0.35} />
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Conversion Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Mascot Rider floating accent on top-left */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/mascot-rider.png"
                alt="Dhuan & Dukhan rider mascot"
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md rounded-full bg-white/40 p-1 border-2 border-[#141414]"
              />
              <div className="flex flex-col">
                <span className="font-script text-2xl md:text-3xl text-[#9A5B0C] leading-none">
                  the premium rice recipe
                </span>
                <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-[#141414]/80 mt-0.5">
                  Charcoal Smoked Since Day One
                </span>
              </div>
            </div>

            {/* Huge Stacked Headline in Anton */}
            <h1 className="font-display uppercase tracking-tight text-5xl sm:text-7xl lg:text-8xl leading-[0.88] text-[#141414]">
              <span>SMOKY RICE.</span>
              <br />
              <span>SERIOUS FLAVOR.</span>
              <br />
              <span className="inline-block mt-2 px-3 py-1 bg-[#FFF6E0] text-[#141414] rounded-xl border-[3px] border-[#141414] shadow-retro text-stroke-black-lg sm:text-stroke-black text-4xl sm:text-6xl lg:text-7xl">
                STRAIGHT TO YOU
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg text-neutral-900 font-medium max-w-xl mt-5 leading-relaxed">
              Charcoal-smoked Dhuaan Rice, juicy tikka and our signature Maghoolta, packed hot and ready to devour.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-7">
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! 🔥 I want to place an order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-[#141414] hover:bg-neutral-800 text-[#FFC629] font-display text-lg uppercase tracking-wider rounded-xl border-[3px] border-[#141414] shadow-retro hover:shadow-retro-lg transition-all duration-150 flex items-center gap-3 btn-press cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#menu"
                className="py-4 px-6 bg-[#FFF6E0] hover:bg-white text-[#141414] font-display text-lg uppercase tracking-wider rounded-xl border-[3px] border-[#141414] shadow-retro hover:shadow-retro-lg transition-all duration-150 flex items-center gap-2.5 btn-press cursor-pointer"
              >
                <Utensils className="w-5 h-5" />
                <span>See the Menu</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t-2 border-[#141414]/20 text-xs sm:text-sm font-sans font-bold text-[#141414]">
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#9A5B0C]" />
                <span>Starting at Rs. 200</span>
              </div>
              <span className="text-neutral-400">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#9A5B0C]" />
                <span>Cash on Delivery</span>
              </div>
              <span className="text-neutral-400">·</span>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#9A5B0C]" />
                <span>Family &amp; Party Packs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Box Hand Image with floating badge & pills */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* The Raised Box Image with Floating Motion */}
            <div className="relative w-full max-w-md mx-auto group">
              <div className="relative rounded-3xl overflow-hidden border-[4px] border-[#141414] shadow-retro-lg bg-[#141414] animate-[float_4s_ease-in-out_infinite] motion-reduce:animate-none">
                <img
                  src="/hero-box-hand.png"
                  alt="Dhuaan Rice box raised high with smoking rice and chicken tikka"
                  className="w-full h-auto aspect-square object-cover"
                />

                {/* Gradient scrim for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 via-transparent to-transparent pointer-events-none" />

                {/* In-image label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-display text-sm tracking-wide">
                  <span className="bg-[#141414]/90 px-3 py-1 rounded-md border border-[#FFC629]/40 uppercase">
                    Fresh Out Of The Charcoal Pit
                  </span>
                  <span className="text-[#FFC629] text-xs font-sans font-bold">
                    100% Halal
                  </span>
                </div>
              </div>

              {/* Floating Circular "Quick Order" Badge */}
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! Quick order request.")}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Quick Order via WhatsApp"
                className="absolute -top-5 -right-3 md:-right-6 z-20 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#141414] text-[#FFC629] border-[3px] border-[#FFF6E0] shadow-retro flex flex-col items-center justify-center text-center p-2 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="animate-[spin_12s_linear_infinite] motion-reduce:animate-none flex flex-col items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FFC629] mb-0.5" />
                  <span className="font-display text-[11px] md:text-xs uppercase tracking-widest leading-tight">
                    QUICK ORDER
                  </span>
                  <span className="text-[9px] font-sans font-semibold text-white">TAP HERE</span>
                </div>
              </a>
            </div>

            {/* Small pill tags under image */}
            <div className="flex items-center gap-2.5 mt-5">
              <span className="px-3 py-1 rounded-full bg-[#141414] text-[#FFF6E0] font-display uppercase text-xs tracking-wider border border-[#141414]">
                Smoky
              </span>
              <span className="px-3 py-1 rounded-full bg-[#9A5B0C] text-[#FFF6E0] font-display uppercase text-xs tracking-wider border border-[#141414]">
                Desi
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFF6E0] text-[#141414] font-display uppercase text-xs tracking-wider border border-[#141414]">
                Fresh Daily
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
