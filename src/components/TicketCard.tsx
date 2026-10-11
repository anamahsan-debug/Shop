import React from "react";
import { useCart } from "../context/CartContext";
import { MENU_ITEMS } from "../data/menu";
import { Plus, Check } from "lucide-react";

export const TicketCard: React.FC = () => {
  const { addItem, items } = useCart();
  const partyItem = MENU_ITEMS.find((i) => i.id === "party-pack-deal");
  const inCart = items.some((i) => i.item.id === "party-pack-deal");

  const handleAdd = () => {
    if (partyItem) {
      addItem(partyItem);
    }
  };

  return (
    <div className="relative group max-w-sm w-full mx-auto">
      {/* Binder Clip */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Wire loop */}
        <div className="w-10 h-7 border-[3px] border-[#141414] rounded-t-full bg-transparent" />
        {/* Clip body */}
        <div className="w-14 h-4 bg-[#141414] rounded-sm shadow-md flex items-center justify-center">
          <div className="w-6 h-1 bg-[#404040] rounded-full" />
        </div>
      </div>

      {/* Ticket Paper Container */}
      <div className="relative pt-4 bg-[#FFF6E0] text-[#141414] rounded-xl border-[3px] border-[#141414] shadow-retro-lg overflow-hidden transition-transform duration-200 group-hover:-translate-y-1">
        {/* Jagged / Perforated Top Edge accent */}
        <div className="px-5 pt-4 pb-2 border-b-2 border-dashed border-[#141414]/30 text-center">
          <span className="text-[11px] font-sans font-bold tracking-widest text-[#9A5B0C] uppercase block mb-0.5">
            ★ OFFICIAL FEAST RECEIPT ★
          </span>
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-[#141414]">
            PARTY PACK 1.6KG
          </h3>
          <p className="text-xs text-neutral-600 font-sans mt-0.5">
            Engineered for grand gatherings &amp; hunger emergencies
          </p>
        </div>

        {/* Content list */}
        <div className="p-5 space-y-2 text-xs font-sans">
          <div className="flex justify-between items-center text-neutral-700">
            <span>Dhuaan Rice</span>
            <span className="font-bold text-[#141414]">1600 grams</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Flame Tikka Pieces</span>
            <span className="font-bold text-[#141414]">10 pcs</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Chicken Cutlets</span>
            <span className="font-bold text-[#141414]">3 pcs</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Chapli Kebabs</span>
            <span className="font-bold text-[#141414]">3 pcs</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Shish Tawook Skewers</span>
            <span className="font-bold text-[#141414]">2 pcs</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Chicken Seekh Kebabs</span>
            <span className="font-bold text-[#141414]">3 pcs</span>
          </div>
          <div className="flex justify-between items-center text-neutral-700">
            <span>Signature Maghoolta</span>
            <span className="font-bold text-[#9A5B0C]">Included</span>
          </div>

          {/* Dotted divider */}
          <div className="my-3 border-t-2 border-dashed border-[#141414]" />

          {/* Price Box */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="font-display text-sm uppercase tracking-wider text-neutral-600">
              TOTAL
            </span>
            <span className="font-display text-3xl md:text-4xl text-[#141414] tracking-tight tabular-nums">
              Rs. 2,000
            </span>
          </div>

          {/* Barcode Graphic */}
          <div className="pt-3 pb-1 flex flex-col items-center">
            <div className="flex items-center justify-center gap-[2.5px] h-9 w-full max-w-[220px]">
              {[3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 4, 2, 1, 3, 2].map(
                (w, idx) => (
                  <div
                    key={idx}
                    className="h-full bg-[#141414]"
                    style={{ width: `${w * 2}px` }}
                  />
                )
              )}
            </div>
            <span className="font-mono text-[9px] text-neutral-500 tracking-[0.2em] mt-1">
              * DND-PARTY-FEAST-2026 *
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-3 bg-[#FFC629] border-t-2 border-[#141414]">
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#141414] text-[#FFC629] hover:bg-neutral-800 font-display text-base uppercase tracking-wider rounded-lg border-2 border-[#141414] shadow-retro-sm btn-press cursor-pointer"
          >
            {inCart ? (
              <>
                <Check className="w-5 h-5 text-emerald-400" />
                Added to Order (Add More)
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Add Party Pack to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
