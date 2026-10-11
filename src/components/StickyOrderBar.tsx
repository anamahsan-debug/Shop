import React from "react";
import { useCart } from "../context/CartContext";
import { siteConfig } from "../config/site";
import { ShoppingBag, ArrowRight, MessageCircle } from "lucide-react";

export const StickyOrderBar: React.FC = () => {
  const { totalItemCount, total, openCart } = useCart();
  const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <>
      {/* Mobile Sticky Order Bar (Visible on mobile screens when cart has items) */}
      {totalItemCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 md:hidden bg-[#141414]/90 backdrop-blur-md border-t-2 border-[#FFC629]">
          <button
            onClick={openCart}
            className="w-full flex items-center justify-between py-3 px-4 bg-[#FFC629] text-[#141414] font-display text-base uppercase tracking-wider rounded-xl border-2 border-[#141414] shadow-retro-sm btn-press cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#141414]" />
              <span>
                {totalItemCount} {totalItemCount === 1 ? "Item" : "Items"} · Rs. {total.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>View Order</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button for Desktop */}
      <aside aria-label="Direct contact assistance" className="hidden md:block fixed bottom-6 right-6 z-40 group">
        <a
          href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Assalam o Alaikum Dhuan & Dukhan! I want to inquire about menu and orders.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-sm uppercase tracking-wider rounded-full border-[3px] border-[#141414] shadow-retro hover:shadow-retro-lg transition-all duration-200 btn-press"
        >
          <div className="w-6 h-6 rounded-full bg-[#141414] text-[#FFC629] flex items-center justify-center">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <span>Order on WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
