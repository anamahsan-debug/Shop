import React from "react";
import { MENU_ITEMS } from "../data/menu";
import { DealCard } from "./DealCard";
import { TicketCard } from "./TicketCard";
import { Flame } from "lucide-react";

export const BestsellerSection: React.FC = () => {
  const premierItem = MENU_ITEMS.find((i) => i.id === "premier-pack")!;
  const comboItem = MENU_ITEMS.find((i) => i.id === "combo-pack")!;
  const familyItem = MENU_ITEMS.find((i) => i.id === "family-pack")!;
  const khaasItem = MENU_ITEMS.find((i) => i.id === "dnd-khaas")!;

  return (
    <section id="bestsellers" className="py-20 px-4 sm:px-6 bg-[#F2B705] border-b-2 border-[#141414] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 bg-[#141414] text-[#FFC629] rounded-md">
                <Flame className="w-4 h-4 fill-current" />
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#141414]">
                HOT PICKS &amp; SIGNATURE DISHES
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-[#141414] tracking-tight leading-none">
              BESTSELLER DEALS
            </h2>
            <p className="font-sans text-sm text-neutral-800 mt-2 max-w-lg">
              The packs our customers order on repeat. Charcoal-smoked rice served with tender grilled meats and signature Maghoolta.
            </p>
          </div>

          <a
            href="#menu"
            className="self-start md:self-end font-display text-sm uppercase tracking-wider text-[#141414] hover:text-[#9A5B0C] border-b-2 border-[#141414] pb-0.5"
          >
            Browse Full 30+ Item Menu ↓
          </a>
        </div>

        {/* 4 Poster Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <DealCard
            item={premierItem}
            tag="Most Ordered"
            badgeColor="chili"
          />
          <DealCard
            item={comboItem}
            tag="Bestseller"
            badgeColor="charcoal"
          />
          <DealCard
            item={familyItem}
            tag="Family Favorite"
            badgeColor="ember"
          />
          <DealCard
            item={khaasItem}
            tag="Chef's Special"
            badgeColor="chili"
          />
        </div>

        {/* Featured Ticket Card Banner (Party Pack Rs. 2,000) */}
        <div className="relative rounded-3xl bg-[#141414] p-6 sm:p-10 border-[3px] border-[#141414] shadow-retro-lg overflow-hidden">
          {/* Background image preview with darkened scrim */}
          <div className="absolute inset-0 z-0">
            <img
              src="/deal-party.png"
              alt="Party Pack royal feast spread"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/90 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 text-[#FFF6E0]">
              <span className="font-script text-3xl sm:text-4xl text-[#FFC629] block mb-1">
                unbeatable value
              </span>
              <h3 className="font-display uppercase text-3xl sm:text-5xl lg:text-6xl text-[#FFF6E0] tracking-tight leading-[0.95]">
                PARTY PACK FEAST: <br />
                <span className="text-[#FFC629]">1600G SMOKED RICE</span> &amp; 20+ MEAT CUTS
              </h3>
              <p className="font-sans text-sm text-neutral-300 mt-4 max-w-xl leading-relaxed">
                Hosting family, friends, or match-day guests? The Dhuan &amp; Dukhan Party Pack packs massive portions of charcoal-smoked Dhuaan rice, 10 tikka pieces, chicken cutlets, chapli kebabs, seekh kebabs, shish tawook, and endless Maghoolta.
              </p>
              
              <div className="flex items-center gap-3 mt-6">
                <span className="px-3 py-1 bg-neutral-800 text-[#FFC629] rounded-md font-sans text-xs font-semibold border border-neutral-700">
                  Feeds 6–8 people easily
                </span>
                <span className="px-3 py-1 bg-neutral-800 text-[#FFF6E0] rounded-md font-sans text-xs font-semibold border border-neutral-700">
                  Cash on delivery
                </span>
              </div>
            </div>

            {/* Right Ticket Card */}
            <div className="lg:col-span-5 flex justify-center">
              <TicketCard />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
