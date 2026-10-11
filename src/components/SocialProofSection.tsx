import React from "react";
import { siteConfig } from "../config/site";
import { Star, Instagram, ExternalLink } from "lucide-react";

export const SocialProofSection: React.FC = () => {
  // Respect user instruction: CLEARLY MARKED PLACEHOLDER content, no invented names
  const placeholderReviews = [
    {
      id: 1,
      tag: "Dhuaan Rice Review",
      quote: "[Customer review here: e.g. The smoky aroma hits you the second you open the box. The Maghoolta sauce takes it to another level!]",
      author: "[Customer Name]",
      locality: "[City / Area]",
      rating: 5,
    },
    {
      id: 2,
      tag: "Family Pack Review",
      quote: "[Customer review here: e.g. Ordered the Family Pack for Sunday lunch. Portions were super generous and the chicken was fall-off-the-bone juicy.]",
      author: "[Customer Name]",
      locality: "[City / Area]",
      rating: 5,
    },
    {
      id: 3,
      tag: "DnD Khaas Review",
      quote: "[Customer review here: e.g. Best rice deal in town. Authentic charcoal smokiness you cannot find anywhere else.]",
      author: "[Customer Name]",
      locality: "[City / Area]",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FFF6E0] border-b-2 border-[#141414]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-script text-3xl sm:text-4xl text-[#9A5B0C] block mb-1">
            honest words
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-6xl text-[#141414] tracking-tight leading-none">
            WHAT PEOPLE SAY
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2">
            Real feedback from rice lovers across the city.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placeholderReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border-2 border-[#141414] shadow-retro-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFC629] text-[#FFC629]"
                    />
                  ))}
                  <span className="ml-2 font-display text-xs text-[#9A5B0C] uppercase tracking-wider">
                    {rev.tag}
                  </span>
                </div>

                <p className="font-sans text-sm text-neutral-800 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base uppercase text-[#141414]">
                    {rev.author}
                  </h4>
                  <span className="text-xs font-sans text-neutral-500">
                    {rev.locality}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-[#FFC629]/30 text-[#141414] rounded text-[10px] font-sans font-bold">
                  Verified Order
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Grid Strip */}
        <div className="bg-[#141414] text-[#FFF6E0] rounded-3xl p-6 sm:p-8 border-2 border-[#141414] shadow-retro">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FFC629] text-[#141414] rounded-xl border border-[#141414]">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-[#FFF6E0]">
                  Follow The Smoke On Instagram
                </h3>
                <p className="font-sans text-xs text-neutral-400">
                  Tag @DhuanAndDukhan in your stories to get featured
                </p>
              </div>
            </div>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC629] hover:bg-[#F2B705] text-[#141414] font-display text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-[#141414] btn-press self-start sm:self-auto"
            >
              <span>View Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { img: "/hero-box-hand.png", alt: "Fresh takeout box" },
              { img: "/deal-premier.png", alt: "Premier pack rice" },
              { img: "/deal-thaal.png", alt: "Rice thaal platter" },
              { img: "/drinks-shakes.png", alt: "Oreo shake and drink" },
            ].map((feed, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-xl overflow-hidden border border-neutral-700 group cursor-pointer"
              >
                <img
                  src={feed.img}
                  alt={feed.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#141414]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-[#FFC629]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
