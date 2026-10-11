import React from "react";
import { siteConfig } from "../config/site";
import { MapPin, Clock, Phone, Navigation, AlertCircle } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 bg-[#F2B705] border-b-2 border-[#141414]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-script text-3xl sm:text-4xl text-[#141414] block mb-1">
            come visit us
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-6xl text-[#141414] tracking-tight leading-none">
            LOCATION &amp; TIMINGS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-800 mt-2">
            Dine-in with us for the fresh-off-the-pit charcoal experience or pick up your takeaway.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Outlet Details Card */}
          <div className="lg:col-span-5 bg-[#141414] text-[#FFF6E0] p-6 sm:p-8 rounded-3xl border-[3px] border-[#141414] shadow-retro flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#FFC629] text-[#141414] rounded-xl shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider block">
                    Our Outlet Address
                  </span>
                  <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-0.5">
                    {siteConfig.address}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-0.5">
                    {siteConfig.city}, Pakistan
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#FFC629] text-[#141414] rounded-xl shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider block">
                    Kitchen Timings
                  </span>
                  <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-0.5">
                    {siteConfig.hours}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-0.5">
                    Open 7 days a week for Lunch, Dinner &amp; Late Night
                  </p>
                </div>
              </div>

              {/* Phone contact */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#FFC629] text-[#141414] rounded-xl shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-bold text-[#FFC629] uppercase tracking-wider block">
                    Direct Phone Line
                  </span>
                  <h3 className="font-display text-xl uppercase text-[#FFF6E0] mt-0.5">
                    {siteConfig.displayPhone}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-0.5">
                    Call for table booking and direct takeaway pickup
                  </p>
                </div>
              </div>

              {/* Service charge notice */}
              <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-700 flex items-start gap-2.5 text-xs text-neutral-300">
                <AlertCircle className="w-4 h-4 text-[#FFC629] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFC629]">Dine-In Notice:</span> An 8% service charge applies to dine-in orders only. Takeaway &amp; delivery do not have this fee. Cash only.
                </div>
              </div>

            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-neutral-800">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-[#141414] flex items-center justify-center gap-1.5 btn-press"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="py-3 px-4 bg-white hover:bg-neutral-100 text-[#141414] font-display text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-[#141414] flex items-center justify-center gap-1.5 btn-press"
              >
                <Phone className="w-4 h-4" />
                <span>Call Outlet</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-[3px] border-[#141414] shadow-retro min-h-[350px] bg-neutral-200">
            <iframe
              title="Dhuan & Dukhan Location Map"
              src={siteConfig.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "380px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
