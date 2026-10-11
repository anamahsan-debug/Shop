import React from "react";
import { siteConfig } from "../config/site";
import { useCart } from "../context/CartContext";
import { MENU_ITEMS } from "../data/menu";
import { MessageCircle, Users, Check, Plus } from "lucide-react";

export const PartyOrdersSection: React.FC = () => {
  const { addItem, items } = useCart();
  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  const familyItem = MENU_ITEMS.find((i) => i.id === "family-pack")!;
  const thaalItem = MENU_ITEMS.find((i) => i.id === "rice-thaal")!;
  const partyItem = MENU_ITEMS.find((i) => i.id === "party-pack-deal")!;

  const partyCards = [
    {
      item: familyItem,
      title: "FAMILY PACK",
      subtitle: "1KG Smoked Rice + 8 Tikka Pieces",
      serves: "Feeds 3–4",
      image: "/deal-party.png",
      tag: "Cozy Family Dinner",
    },
    {
      item: thaalItem,
      title: "RICE THAAL",
      subtitle: "1.2KG Rice + Tikka ×8 + Cutlets ×2 + Chapli ×2 + Seekh ×2",
      serves: "Feeds 4–5",
      image: "/deal-thaal.png",
      tag: "Traditional Platter",
    },
    {
      item: partyItem,
      title: "PARTY PACK",
      subtitle: "1.6KG Rice + 10 Tikka + Cutlets ×3 + Chapli ×3 + Tawook ×2 + Seekh ×3",
      serves: "Feeds 6–8",
      image: "/deal-party.png",
      tag: "The Big Feast",
    },
  ];

  const handleCustomPartyOrder = () => {
    const text = encodeURIComponent(
      "Assalam o Alaikum Dhuan & Dukhan! 🔥 I want to book a party order for ___ people on ___ date. Please share catering details."
    );
    window.open(`https://wa.me/${cleanWhatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="party-orders" className="py-20 px-4 sm:px-6 bg-[#FFC629] border-b-2 border-[#141414] relative">
      {/* Top and Bottom Checker Accent lines */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] text-[#FFC629] rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>CATERING &amp; CELEBRATIONS</span>
          </div>

          <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl text-[#141414] tracking-tight leading-[0.9]">
            FEEDING THE WHOLE KHANDAN?
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-neutral-900 font-medium mt-3 max-w-xl mx-auto">
            Say goodbye to cooking chaos. Huge steel-grade platters of charcoal-infused rice and sizzling barbecue grills that satisfy the entire house.
          </p>

          <button
            onClick={handleCustomPartyOrder}
            className="mt-6 inline-flex items-center gap-2.5 py-3 px-6 bg-[#141414] hover:bg-neutral-800 text-[#FFC629] font-display text-base uppercase tracking-wider rounded-xl border-[3px] border-[#141414] shadow-retro btn-press cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Book a Custom Party Order on WhatsApp</span>
          </button>
        </div>

        {/* 3 Large Feast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {partyCards.map(({ item, title, subtitle, serves, image, tag }) => {
            const inCart = items.some((ci) => ci.item.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-[#FFF6E0] rounded-3xl border-[3px] border-[#141414] shadow-retro hover:shadow-retro-lg transition-all flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 w-full bg-[#141414] overflow-hidden border-b-[3px] border-[#141414]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#141414] text-[#FFC629] text-xs font-display uppercase tracking-wider rounded-md border border-[#FFC629]/30">
                    {tag}
                  </span>
                  <span className="absolute bottom-3 right-3 px-3 py-1 bg-[#FFF6E0] text-[#141414] text-xs font-sans font-bold rounded-full border border-[#141414]">
                    {serves}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#141414]">
                        {title}
                      </h3>
                      <span className="font-display text-xl sm:text-2xl text-[#141414] tabular-nums">
                        Rs. {item.price?.toLocaleString()}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {subtitle}
                    </p>
                    <p className="font-sans text-xs text-[#9A5B0C] font-semibold mt-2">
                      + Signature Maghoolta Chutney included
                    </p>
                  </div>

                  {/* Add Button */}
                  <div className="mt-5 pt-4 border-t-2 border-[#141414]/15">
                    <button
                      onClick={() => addItem(item)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-sm uppercase tracking-wider rounded-xl border-2 border-[#141414] shadow-retro-sm btn-press cursor-pointer"
                    >
                      {inCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added (Add Another)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Feast Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
