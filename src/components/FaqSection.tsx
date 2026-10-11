import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you deliver to my area?",
      answer:
        "Yes! We deliver across our coverage areas. Simply send your order and full delivery address on WhatsApp, and our dispatch team will confirm your delivery time and rider status immediately.",
    },
    {
      question: "Can I pay online with card or bank transfer?",
      answer:
        "No. ONLINE PAYMENT IS NOT ACCEPTED. All orders are strictly CASH PAYMENT — payable cash on delivery to our rider, or cash at the counter for takeaway and dine-in.",
    },
    {
      question: "Is there a service charge?",
      answer:
        "An 8% service charge applies strictly to DINE-IN orders at our restaurant. Takeaway orders and delivery orders do not carry any service charge.",
    },
    {
      question: "Do you take party, office, or bulk catering orders?",
      answer:
        "Yes! We specialize in large-scale feasts including our Family Pack (1kg rice), Rice Thaal (1.2kg rice), and Party Pack (1.6kg rice + 20+ barbecue pieces). For custom party or corporate catering orders, contact us on WhatsApp with your headcount and date.",
    },
    {
      question: "What is Maghoolta?",
      answer:
        "[OWNER TO ADD DESCRIPTION: Signature house-blend secret chutney sauce served with every Dhuaan rice meal to balance the deep charcoal smokiness].",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FFF6E0] border-b-2 border-[#141414]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] text-[#FFC629] rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-[#141414] tracking-tight">
            FREQUENTLY ASKED
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2">
            Everything you need to know about ordering, cash payment, and our menu.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-[#141414] shadow-retro-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg uppercase text-[#141414] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#FFC629] border border-[#141414] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#141414] text-[#FFC629]" : "text-[#141414]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-200 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
