/**
 * Business & Site Configuration for Dhuan & Dukhan
 * Central location for owner to update phone, WhatsApp, location, and social links.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  address: string;
  city: string;
  googleMapsUrl: string;
  hours: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  dineInServiceChargePct: number;
  currency: string;
}

export const siteConfig: SiteConfig = {
  name: "Dhuan & Dukhan",
  tagline: "the premium rice recipe",
  phone: "[PHONE NUMBER]",
  displayPhone: "[PHONE NUMBER]",
  whatsapp: "923001234567", // Owner can update to real 92XXXXXXXXXX format
  address: "[OUTLET ADDRESS]",
  city: "[CITY]",
  googleMapsUrl: "https://maps.google.com/maps?q=31.5204,74.3587&hl=en&z=14&output=embed",
  hours: "12:00 PM – 02:00 AM (Daily)",
  instagram: "[INSTAGRAM URL]",
  facebook: "[FACEBOOK URL]",
  tiktok: "[TIKTOK URL]",
  dineInServiceChargePct: 8,
  currency: "Rs.",
};
