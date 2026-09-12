import React from 'react';
import { Gift, Sparkles, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

export default function UnboxingShowcase({ onOpenBuilder }) {
  return (
    <section id="unboxing" className="py-24 bg-[#0F0E0D] border-t border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 group">
            <img
              src="/images/unboxing_luxury_box.jpg"
              alt="Luxury wax sealed unboxing gift presentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="badge badge-gold-glow">Bespoke Gift Packaging</span>
              <span className="text-xs text-[#D4AF37] font-bold">Complimentary Wax Seal Card</span>
            </div>
          </div>

          {/* Right Column: Story Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold-glow text-xs font-extrabold uppercase tracking-widest">
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Unboxing Perfection</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              An Unforgettable Gift Presentation
            </h2>

            <p className="text-[#A3968C] text-sm sm:text-base font-light leading-relaxed">
              Every Atelier Folio is delivered inside a matte charcoal rigid keepsake box, wrapped in archival tissue paper, and secured with a hand-pressed burgundy wax seal stamp from Florence.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Hand-stamped initial wax seal on cotton envelope</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Complimentary handwritten calligraphy gift note</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Includes leather care conditioning sample balm</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBuilder}
                className="btn-gold-glow py-4 px-8 text-xs font-extrabold flex items-center gap-2 rounded-xl shadow-xl hover:scale-105 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-[#0B0A09]" />
                <span>Build A Bespoke Gift Set</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
