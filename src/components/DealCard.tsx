import React from "react";
import { MenuItem } from "../data/menu";
import { useCart } from "../context/CartContext";
import { PricePill } from "./PricePill";
import { Plus, Check, Flame } from "lucide-react";

interface DealCardProps {
  item: MenuItem;
  tag?: string;
  badgeColor?: "chili" | "ember" | "charcoal";
}

export const DealCard: React.FC<DealCardProps> = ({
  item,
  tag,
  badgeColor = "ember",
}) => {
  const { addItem, items } = useCart();
  const cartItem = items.find((i) => i.item.id === item.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const badgeStyles = {
    chili: "bg-[#D7261E] text-white border-white/20",
    ember: "bg-[#9A5B0C] text-[#FFF6E0] border-[#141414]/20",
    charcoal: "bg-[#141414] text-[#FFC629] border-[#FFC629]/40",
  };

  return (
    <div className="relative group bg-[#FFC629] rounded-2xl border-[3px] border-[#141414] shadow-retro hover:shadow-retro-lg transition-all duration-200 flex flex-col overflow-hidden">
      {/* Optional Badge */}
      {(tag || item.badge) && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span
            className={`px-3 py-1 text-xs font-display uppercase tracking-wider rounded-md border shadow-sm flex items-center gap-1 ${
              badgeStyles[badgeColor]
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            {tag || item.badge}
          </span>
        </div>
      )}

      {/* Image Area with hover zoom */}
      <div className="relative h-56 md:h-64 w-full bg-[#141414] overflow-hidden border-b-[3px] border-[#141414]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#141414] text-[#FFC629] text-center">
            <span className="font-display text-2xl uppercase">{item.name}</span>
            <span className="text-xs font-sans text-neutral-400 mt-1">Dhuaan Smoked</span>
          </div>
        )}

        {/* Floating Price Pill in Image Corner */}
        <div className="absolute bottom-3 right-3 z-10">
          <PricePill price={item.price} size="md" />
        </div>
      </div>

      {/* Card Info & Content */}
      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between bg-[#FFF6E0]">
        <div>
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-[#141414] leading-tight">
            {item.name}
          </h3>
          {item.description && (
            <p className="font-sans text-xs md:text-sm text-neutral-700 mt-1.5 leading-snug">
              {item.description}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3 border-t-2 border-[#141414]/15 flex items-center gap-2">
          <button
            onClick={() => addItem(item)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-base uppercase tracking-wider rounded-xl border-2 border-[#141414] shadow-retro-sm btn-press cursor-pointer"
          >
            {qtyInCart > 0 ? (
              <>
                <Check className="w-4 h-4 text-[#141414]" />
                In Cart ({qtyInCart}) · Add More
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
