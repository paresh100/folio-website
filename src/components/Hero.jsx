import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Compass, RefreshCw } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExplore }) {
  return (
    <section className="relative bg-[#1C1917] text-[#FAF7F2] overflow-hidden">
      {/* Background Hero Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src="/images/hero_leather_folio.jpg"
          alt="Handmade Cognac Leather Folio Cover with Brass Fountain Pen"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917] via-[#1C1917]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C69A59]/20 border border-[#C69A59]/40 text-[#C69A59] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Refillable Tuscan Leather Journal Covers</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 text-[#FAF7F2]">
            Handmade Folios <br />
            <span className="italic font-normal text-[#C69A59]">For Life's Quiet Moments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#E8E0D5]/90 mb-8 font-light leading-relaxed max-w-xl">
            Inspired by European artisan notebook binders. Crafted from vegetable-tanned full-grain leather, customizable with initial gold foil stamping, and built to age into a personal heirloom.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onOpenBuilder}
              className="btn btn-gold py-4 px-8 text-sm flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-transform"
            >
              <span>Build Custom Folio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExplore}
              className="btn btn-outline py-4 px-8 text-sm text-[#FAF7F2] border-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#1C1917] flex items-center justify-center"
            >
              Explore Collection
            </button>
          </div>

          {/* Trust Value Props */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#FAF7F2]/15 text-xs text-[#E8E0D5]/80">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#C69A59] shrink-0" />
              <span>Full-Grain Tuscan Leather</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Feather className="w-5 h-5 text-[#C69A59] shrink-0" />
              <span>80gsm Fountain-Pen Paper</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RefreshCw className="w-5 h-5 text-[#C69A59] shrink-0" />
              <span>Infinite Refill System</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#C69A59] shrink-0" />
              <span>Lifetime Leather Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
