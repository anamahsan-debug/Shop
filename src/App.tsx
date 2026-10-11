import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CheckerBand } from "./components/CheckerBand";
import { AboutSection } from "./components/AboutSection";
import { BestsellerSection } from "./components/BestsellerSection";
import { MenuSection } from "./components/MenuSection";
import { PartyOrdersSection } from "./components/PartyOrdersSection";
import { SweetEndingSection } from "./components/SweetEndingSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { LocationSection } from "./components/LocationSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { StickyOrderBar } from "./components/StickyOrderBar";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-[#FFF6E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#FFC629] overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Checkerboard Band with Marquee */}
        <CheckerBand marqueeText="DHUAAN RICE • TIKKA • CHAPLI • SEEKH • SHISH TAWOOK • MAGHOOLTA • BORN FROM SMOKE •" />

        {/* Brand Story & How It's Made */}
        <AboutSection />

        {/* Bestseller Deals & Ticket Card */}
        <BestsellerSection />

        {/* Full Menu with Category Tabs & Search */}
        <MenuSection />

        {/* Checker Divider */}
        <CheckerBand variant="simple" />

        {/* Party & Family Orders */}
        <PartyOrdersSection />

        {/* Sweet Ending Dessert & Drink Strip */}
        <SweetEndingSection />

        {/* Reviews & Instagram Showcase */}
        <SocialProofSection />

        {/* Location, Timings & Embedded Map */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final CTA & Footer */}
        <Footer />

        {/* Cart Drawer & Bottom Sheet */}
        <CartDrawer />

        {/* Mobile Sticky Order Bar & Desktop Floating WhatsApp */}
        <StickyOrderBar />
      </div>
    </CartProvider>
  );
}
