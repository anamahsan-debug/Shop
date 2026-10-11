import React from "react";
import { useCart, OrderType } from "../context/CartContext";
import { UPSELL_ITEMS } from "../data/menu";
import { X, Plus, Minus, Trash2, Send, ShoppingBag, AlertCircle, Sparkles } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    orderType,
    setOrderType,
    customer,
    setCustomer,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    serviceCharge,
    total,
    generateWhatsAppLink,
    addItem,
  } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    if (items.length === 0) return;
    const url = generateWhatsAppLink();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141414]/75 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Container (Desktop right sidebar / Mobile bottom sheet) */}
      <div className="relative w-full max-w-lg bg-[#FFF6E0] text-[#141414] h-full flex flex-col shadow-2xl border-l-[3px] border-[#141414] z-10 overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 bg-[#FFC629] border-b-[3px] border-[#141414] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#141414] text-[#FFC629] rounded-lg border border-[#141414]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-[#141414]">
                Your Hot Order
              </h2>
              <span className="text-xs font-sans font-medium text-neutral-800">
                {items.length} {items.length === 1 ? "item" : "items"} selected
              </span>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 bg-[#141414] text-[#FFF6E0] hover:bg-neutral-800 rounded-lg border border-[#141414] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-[#FFC629] rounded-full border-2 border-[#141414] flex items-center justify-center text-[#141414]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl uppercase text-[#141414]">
                Your Tray is Empty
              </h3>
              <p className="font-sans text-xs text-neutral-600 mt-1 max-w-xs mx-auto">
                Bhook lagi? Add some charcoal-smoked Dhuaan rice or juicy tikka deals!
              </p>
              <button
                onClick={closeCart}
                className="mt-4 px-5 py-2 bg-[#141414] text-[#FFC629] rounded-lg font-display text-sm uppercase tracking-wider btn-press cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Type Selector */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Select Order Type:
                </label>
                <div className="grid grid-cols-3 gap-2 bg-[#FFC629]/40 p-1.5 rounded-xl border-2 border-[#141414]">
                  {(["delivery", "takeaway", "dine-in"] as OrderType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`py-2 px-2 text-xs font-display uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                        orderType === type
                          ? "bg-[#141414] text-[#FFC629] shadow-retro-sm"
                          : "text-[#141414] hover:bg-[#FFC629]/60"
                      }`}
                    >
                      {type === "dine-in" ? "Dine-In" : type}
                    </button>
                  ))}
                </div>
                {orderType === "dine-in" && (
                  <p className="text-[11px] font-sans text-[#9A5B0C] font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    An 8% service charge applies to dine-in.
                  </p>
                )}
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-700">
                    Order Items
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-[11px] font-sans text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear all
                  </button>
                </div>

                {items.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="p-3.5 bg-white rounded-xl border-2 border-[#141414] shadow-retro-sm flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-base uppercase text-[#141414] truncate">
                        {cartItem.item.name}
                      </h4>
                      <p className="text-xs font-sans font-semibold text-[#9A5B0C]">
                        {cartItem.item.price !== null
                          ? `Rs. ${(cartItem.item.price * cartItem.quantity).toLocaleString()}`
                          : "Counter Price"}
                      </p>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2 bg-[#FFC629]/30 rounded-lg p-1 border border-[#141414]">
                      <button
                        onClick={() => updateQuantity(cartItem.item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-white rounded border border-[#141414] hover:bg-neutral-100 transition cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-5 text-center font-display text-sm text-[#141414]">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(cartItem.item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-[#FFC629] rounded border border-[#141414] hover:bg-[#F2B705] transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(cartItem.item.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-600 transition cursor-pointer"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* "Make it Better" Upsell Strip */}
              <div className="p-3.5 bg-[#FFC629]/25 rounded-xl border-2 border-dashed border-[#141414]">
                <div className="flex items-center gap-1.5 text-xs font-display uppercase text-[#141414] mb-2">
                  <Sparkles className="w-4 h-4 text-[#9A5B0C]" />
                  <span>Make it better (Add-ons &amp; Drinks):</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {UPSELL_ITEMS.slice(0, 4).map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => addItem(addon)}
                      className="p-2 bg-white rounded-lg border border-[#141414] hover:bg-[#FFC629]/40 text-left transition text-xs flex flex-col justify-between cursor-pointer"
                    >
                      <span className="font-display uppercase text-[#141414] truncate text-[11px]">
                        + {addon.name}
                      </span>
                      <span className="font-sans font-bold text-[#9A5B0C] text-[10px] mt-1">
                        + Rs. {addon.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Info Form */}
              <div className="space-y-3 pt-2 border-t-2 border-[#141414]/15">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-700 block">
                  Customer Information
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-sans font-medium text-neutral-700 mb-0.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ali"
                      value={customer.name}
                      onChange={(e) =>
                        setCustomer((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-[#141414] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FFC629]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-medium text-neutral-700 mb-0.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="0300-1234567"
                      value={customer.phone}
                      onChange={(e) =>
                        setCustomer((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-[#141414] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FFC629]"
                    />
                  </div>
                </div>

                {orderType === "delivery" && (
                  <div>
                    <label className="block text-[11px] font-sans font-medium text-neutral-700 mb-0.5">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      placeholder="House / Flat #, Street, Area"
                      value={customer.address}
                      onChange={(e) =>
                        setCustomer((prev) => ({ ...prev, address: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-xs bg-white border-2 border-[#141414] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FFC629]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-sans font-medium text-neutral-700 mb-0.5">
                    Special Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Extra spicy, extra napkins, etc."
                    value={customer.notes}
                    onChange={(e) =>
                      setCustomer((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    className="w-full px-3 py-2 text-xs bg-white border-2 border-[#141414] rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FFC629]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer / Total & WhatsApp Order CTA */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t-[3px] border-[#141414] space-y-3">
            {/* Bill Breakdown */}
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span className="font-semibold text-[#141414]">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              {orderType === "dine-in" && (
                <div className="flex justify-between text-[#9A5B0C]">
                  <span>Dine-in Service Charge (8%)</span>
                  <span className="font-semibold">Rs. {serviceCharge.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-display pt-1 border-t border-dashed border-neutral-300">
                <span className="uppercase text-[#141414]">Total Amount</span>
                <span className="text-xl text-[#141414] tabular-nums">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Honest Payment Warning */}
            <div className="bg-[#FFC629]/20 p-2.5 rounded-lg border border-[#141414]/30 flex items-center gap-2 text-[11px] font-sans text-neutral-800">
              <AlertCircle className="w-4 h-4 text-[#9A5B0C] shrink-0" />
              <span>
                <strong>Cash Payment Only.</strong> Online payment is not accepted. Pay cash on delivery or counter.
              </span>
            </div>

            {/* Primary Order Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 px-5 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-lg uppercase tracking-wider rounded-xl border-[3px] border-[#141414] shadow-retro flex items-center justify-center gap-2.5 btn-press cursor-pointer"
            >
              <Send className="w-5 h-5 text-[#141414]" />
              <span>Send Order on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
