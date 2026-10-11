import React, { useState, useMemo } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, MenuCategoryId } from "../data/menu";
import { useCart } from "../context/CartContext";
import { PricePill } from "./PricePill";
import { ItemPill } from "./ItemPill";
import { Search, Plus, Check, Info, Sparkles } from "lucide-react";

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, items } = useCart();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-[#FFF6E0] border-b-2 border-[#141414]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-script text-3xl sm:text-4xl text-[#9A5B0C] block mb-1">
            smoked to order
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-6xl text-[#141414] tracking-tight leading-none">
            OUR COMPLETE MENU
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2">
            Every rice deal comes with our signature secret Maghoolta sauce. Select any item to customize and order via WhatsApp.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tikka, kebab, shake, fries..."
              className="w-full pl-12 pr-4 py-3 bg-white text-[#141414] font-sans text-sm rounded-xl border-[3px] border-[#141414] shadow-retro-sm focus:outline-hidden focus:ring-2 focus:ring-[#FFC629]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500 hover:text-neutral-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Horizontal Scrollable) */}
        <div className="sticky top-[69px] z-30 bg-[#FFF6E0]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 border-y border-[#141414]/15">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display uppercase tracking-wider whitespace-nowrap transition-all border-2 border-[#141414] cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#141414] text-[#FFC629] shadow-retro-sm"
                  : "bg-white text-[#141414] hover:bg-[#FFC629]/50"
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>

            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display uppercase tracking-wider whitespace-nowrap transition-all border-2 border-[#141414] cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#141414] text-[#FFC629] shadow-retro-sm"
                      : "bg-white text-[#141414] hover:bg-[#FFC629]/50"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Shakes / Category Banner notice if relevant */}
        {(selectedCategory === "chocolate-shakes" || selectedCategory === "smoothies") && (
          <div className="mb-6 p-4 bg-[#FFC629] rounded-xl border-2 border-[#141414] shadow-retro-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#141414]" />
              <span className="font-display uppercase text-sm sm:text-base text-[#141414]">
                All Shakes &amp; Smoothies are prepared fresh: Rs. 300 each
              </span>
            </div>
            <span className="text-xs font-sans font-bold bg-[#141414] text-[#FFF6E0] px-3 py-1 rounded-full">
              Flat Price
            </span>
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border-2 border-[#141414] p-8 max-w-md mx-auto">
            <p className="font-display text-xl uppercase text-[#141414]">
              No items match &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs font-sans text-neutral-600 mt-1">
              Try searching for &quot;Rice&quot;, &quot;Tikka&quot;, &quot;Seekh&quot;, or &quot;Shake&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-[#FFC629] text-[#141414] font-display text-xs uppercase tracking-wider rounded-lg border border-[#141414]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item: MenuItem) => {
              const inCartItem = items.find((ci) => ci.item.id === item.id);
              const qty = inCartItem ? inCartItem.quantity : 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border-2 border-[#141414] p-4 sm:p-5 shadow-retro-sm hover:shadow-retro transition-all flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1 min-w-0">
                    {/* Item Name Pill */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <ItemPill size="sm">{item.name}</ItemPill>
                      {item.badge && (
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FFC629] text-[#141414] rounded-md border border-[#141414]/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Description Line */}
                    {item.description && (
                      <p className="font-sans text-xs text-neutral-700 leading-snug pr-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Price & Add Action Button */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <PricePill
                      price={item.price}
                      displayPrice={item.priceDisplay}
                      size="sm"
                    />

                    <button
                      onClick={() => addItem(item)}
                      className="flex items-center gap-1.5 py-1.5 px-3 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] rounded-lg border-2 border-[#141414] font-display text-xs uppercase tracking-wider shadow-xs btn-press cursor-pointer"
                      title={`Add ${item.name}`}
                    >
                      {qty > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>({qty}) Add</span>
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
        )}

        {/* Note at bottom */}
        <div className="mt-12 p-4 bg-[#FFC629]/30 rounded-2xl border-2 border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-neutral-800">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-[#9A5B0C] shrink-0" />
            <span>
              <strong>Important Notice:</strong> 8% service charge applies to dine-in orders only · Cash only, online payment is not accepted · Prices subject to change without notice.
            </span>
          </div>
          <span className="shrink-0 font-display uppercase tracking-wider text-[11px] text-[#9A5B0C]">
            Dhuan &amp; Dukhan Kitchen
          </span>
        </div>

      </div>
    </section>
  );
};
