import React from "react";
import { MENU_ITEMS } from "../data/menu";
import { useCart } from "../context/CartContext";
import { Plus, Check, Heart } from "lucide-react";

export const SweetEndingSection: React.FC = () => {
  const { addItem, items } = useCart();

  const sweetItems = [
    {
      item: MENU_ITEMS.find((i) => i.id === "de-kheer")!,
      image: "/dessert-kheer.png",
      tag: "Traditional Clay Pot",
    },
    {
      item: MENU_ITEMS.find((i) => i.id === "shake-oreo")!,
      image: "/drinks-shakes.png",
      tag: "Decadent Shake",
    },
    {
      item: MENU_ITEMS.find((i) => i.id === "mint-margarita")!,
      image: "/drinks-shakes.png",
      tag: "Iced Cooler",
    },
    {
      item: MENU_ITEMS.find((i) => i.id === "ice-cream-2-scoops")!,
      image: "/dessert-kheer.png",
      tag: "Creamy Scoops",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#141414] text-[#FFF6E0] border-b-2 border-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-[#FFC629] mb-1">
              <Heart className="w-4 h-4 fill-current text-[#D7261E]" />
              <span>THE SWEET REWARD</span>
            </div>
            <h2 className="font-display uppercase text-3xl sm:text-5xl text-[#FFF6E0] tracking-tight">
              SAVE ROOM FOR THE SWEET SIDE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
              Chilled clay-pot De&apos; Kheer, thick dessert shakes, and refreshing minted mocktails.
            </p>
          </div>
          <span className="font-script text-2xl text-[#FFC629] self-start md:self-end">
            sweet endings...
          </span>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sweetItems.map(({ item, image, tag }) => {
            const inCart = items.some((ci) => ci.item.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-neutral-900 rounded-2xl border-2 border-neutral-700 hover:border-[#FFC629] transition-all p-3.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-neutral-700 mb-3 bg-neutral-950">
                    <img
                      src={image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#141414]/90 text-[#FFC629] text-[10px] font-sans font-bold uppercase rounded">
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg uppercase text-[#FFF6E0]">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
                  <span className="font-display text-base text-[#FFC629]">
                    Rs. {item.price?.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="flex items-center gap-1 py-1.5 px-3 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-xs uppercase tracking-wider rounded-lg border border-[#141414] btn-press cursor-pointer"
                  >
                    {inCart ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
