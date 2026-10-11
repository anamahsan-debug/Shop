import React, { createContext, useContext, useEffect, useState } from "react";
import { MenuItem } from "../data/menu";
import { siteConfig } from "../config/site";

export type OrderType = "delivery" | "takeaway" | "dine-in";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  orderType: OrderType;
  customer: CustomerDetails;
  totalItemCount: number;
  subtotal: number;
  serviceCharge: number;
  total: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  setOrderType: (type: OrderType) => void;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  generateWhatsAppLink: () => string;
}

const CART_STORAGE_KEY = "dnd_cart_items_v1";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to persist cart:", e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (item: MenuItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { item, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === itemId) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = items.reduce((sum, i) => {
    return sum + (i.item.price ?? 0) * i.quantity;
  }, 0);

  const serviceCharge =
    orderType === "dine-in"
      ? Math.round(subtotal * (siteConfig.dineInServiceChargePct / 100))
      : 0;

  const total = subtotal + serviceCharge;

  const generateWhatsAppLink = () => {
    const lines: string[] = [];
    lines.push("Assalam o Alaikum Dhuan & Dukhan! 🔥");
    lines.push("New order:");
    lines.push("");

    items.forEach((i) => {
      const priceText =
        i.item.price !== null
          ? `Rs. ${(i.item.price * i.quantity).toLocaleString()}`
          : "Counter Price";
      lines.push(`${i.quantity} × ${i.item.name} — ${priceText}`);
    });

    lines.push("");
    lines.push(`Subtotal: Rs. ${subtotal.toLocaleString()}`);

    if (orderType === "dine-in") {
      lines.push(
        `Dine-in Service Charge (${siteConfig.dineInServiceChargePct}%): Rs. ${serviceCharge.toLocaleString()}`
      );
    }

    lines.push(`Total: Rs. ${total.toLocaleString()}`);
    lines.push(`Order type: ${orderType.toUpperCase()}`);

    const details: string[] = [];
    if (customer.name.trim()) details.push(`Name: ${customer.name.trim()}`);
    if (customer.phone.trim()) details.push(`Phone: ${customer.phone.trim()}`);
    if (orderType === "delivery" && customer.address.trim()) {
      details.push(`Address: ${customer.address.trim()}`);
    }
    if (customer.notes.trim()) details.push(`Notes: ${customer.notes.trim()}`);

    if (details.length > 0) {
      lines.push(details.join(" | "));
    }

    lines.push("Payment: Cash");

    const message = lines.join("\n");
    const cleanWhatsapp = siteConfig.whatsapp.replace(/\D/g, "");
    return `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        orderType,
        customer,
        totalItemCount,
        subtotal,
        serviceCharge,
        total,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setOrderType,
        setCustomer,
        generateWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
