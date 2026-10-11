import React from "react";
import { Utensils, Flame, PackageCheck, ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#141414] text-[#FFF6E0] py-20 px-4 sm:px-6 border-b-2 border-[#141414] overflow-hidden">
      {/* Background radial smoke atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#141414] to-[#141414] pointer-events-none" />

      {/* Floating sticker frame 1: deal-premier.png */}
      <div className="hidden lg:block absolute left-8 top-16 -rotate-6 w-36 h-36 bg-[#FFF6E0] p-2 rounded-xl border-2 border-[#FFC629] shadow-retro-yellow pointer-events-none">
        <img
          src="/deal-premier.png"
          alt="Dhuaan rice deal sticker"
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="block text-center font-display text-[10px] text-[#141414] uppercase mt-1">
          Dhuaan Smokepit
        </span>
      </div>

      {/* Floating sticker frame 2: snack-fries.png */}
      <div className="hidden lg:block absolute right-8 bottom-16 rotate-6 w-36 h-36 bg-[#FFF6E0] p-2 rounded-xl border-2 border-[#FFC629] shadow-retro-yellow pointer-events-none">
        <img
          src="/snack-fries.png"
          alt="Crinkle fries sticker"
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="block text-center font-display text-[10px] text-[#141414] uppercase mt-1">
          Crispy Crunch
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Layered script typography over Anton */}
        <div className="relative inline-block mb-6">
          <span className="font-script text-4xl sm:text-6xl text-[#FFC629] block -mb-4 sm:-mb-6 relative z-10 drop-shadow-md">
            Dhuan &amp; Dukhan
          </span>
          <span className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 font-bold block">
            The Smoke Craft
          </span>
        </div>

        {/* Big centered Anton manifesto */}
        <h2 className="font-display uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[0.95] text-[#FFF6E0] max-w-3xl mx-auto">
          BORN FROM SMOKE. BUILT ON FLAVOR. WE SLOW-SMOKE EVERY BATCH OF RICE OVER CHARCOAL SO EVERY BITE CARRIES THAT DEEP, SMOKY DHUAAN TASTE YOU CAN&apos;T FAKE.
        </h2>

        {/* Explore Button */}
        <div className="mt-8">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-base uppercase tracking-wider rounded-xl border-2 border-[#141414] shadow-retro-cream btn-press"
          >
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5.6 "How it's made" - 3 Steps Grid */}
        <div className="mt-20 pt-12 border-t border-neutral-800">
          <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#FFC629] block mb-6">
            THE DHUAAN METHOD
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Step 1 */}
            <div className="p-6 bg-neutral-900/90 rounded-2xl border-2 border-neutral-800 relative group hover:border-[#FFC629] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FFC629] text-[#141414] flex items-center justify-center mb-4 font-display text-xl border border-[#141414]">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider">
                Step 01
              </span>
              <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-1 mb-2">
                Cooked Fresh Daily
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                Premium aged Pakistani basmati rice cooked to perfection in rich stock with aromatic spices.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-neutral-900/90 rounded-2xl border-2 border-neutral-800 relative group hover:border-[#FFC629] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FFC629] text-[#141414] flex items-center justify-center mb-4 font-display text-xl border border-[#141414]">
                <Flame className="w-6 h-6" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider">
                Step 02
              </span>
              <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-1 mb-2">
                Charcoal Dhuaan Infusion
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                Live red-hot coals doused in ghee seal deep, authentic barbecue smoke into every grain.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-neutral-900/90 rounded-2xl border-2 border-neutral-800 relative group hover:border-[#FFC629] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FFC629] text-[#141414] flex items-center justify-center mb-4 font-display text-xl border border-[#141414]">
                <PackageCheck className="w-6 h-6" />
              </div>
              <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider">
                Step 03
              </span>
              <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-1 mb-2">
                Topped &amp; Packed Hot
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                Layered with spiced tikka cuts and a generous serving of signature Maghoolta, boxed garma garam.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
