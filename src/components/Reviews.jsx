import React, { useState } from 'react';
import { Star, CheckCircle, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { REVIEWS, FAQS } from '../data/products';

export default function Reviews() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        {/* Customer Reviews Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1 text-[#C69A59] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C69A59]" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2420] mb-3">
            Loved By Writers & Travelers
          </h2>
          <p className="text-sm text-[#665A52]">
            Over 4,500 journalers around the world choose Atelier Folio for their daily thoughts.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-xl border border-[#E8E0D5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#C69A59]/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-[#C69A59] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C69A59]" />
                  ))}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2C2420] mb-2">"{rev.title}"</h3>
                <p className="text-xs text-[#665A52] leading-relaxed mb-6 font-light">{rev.comment}</p>
              </div>

              <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#2C2420] block">{rev.name}</span>
                  <span className="text-[#9E9188]">{rev.location}</span>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[#4E5E4A] font-semibold text-[11px] bg-[#4E5E4A]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E0D5] shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#8C4724] font-bold block mb-1">
              Everything You Need To Know
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2420]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E8E0D5] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-serif text-lg font-bold text-[#2C2420] flex items-center justify-between gap-4 bg-[#FAF7F2]/50 hover:bg-[#FAF7F2]"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#8C4724] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#665A52] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-5 text-xs text-[#665A52] leading-relaxed bg-white border-t border-[#E8E0D5]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
