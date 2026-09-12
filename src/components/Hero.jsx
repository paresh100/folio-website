import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Compass, RefreshCw, Star } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExplore }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0B0A09] text-[#FAF7F2] overflow-hidden py-24">
      {/* Background Ambient Glowing Orbs */}
      <div className="bg-glow-orb -top-20 -left-20"></div>
      <div className="bg-glow-orb bottom-0 right-0"></div>

      {/* Hero Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0 opacity-45">
        <img
          src="/images/hero_folios_group.jpg"
          alt="Handmade Leather Folios in Tuscan Hide"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/70 to-[#0B0A09]/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8 border border-[#D4AF37]/30 shadow-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-white font-extrabold ml-1">4.98 / 5.0</span>
            <span className="text-[#A3968C] font-normal">• 4,500+ Verified Writers</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-white tracking-tight">
            Handcrafted Leather <br />
            <span className="text-gold-gradient italic font-normal">For Life's Quiet Moments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#A3968C] mb-10 font-light leading-relaxed max-w-2xl">
            Bespoke refillable notebook folios handcrafted in Florence from vegetable-tanned Tuscan hides. Custom initial gold foil stamping, 80gsm fountain-pen paper, and built to age into a personal heirloom.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16 w-full sm:w-auto">
            <button
              onClick={onOpenBuilder}
              className="btn-gold-glow w-full sm:w-auto py-4 px-10 text-sm flex items-center justify-center gap-3 font-extrabold tracking-widest rounded-xl shadow-2xl hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4 text-[#0B0A09]" />
              <span>Build Custom Folio</span>
              <ArrowRight className="w-4 h-4 text-[#0B0A09]" />
            </button>
            <button
              onClick={onExplore}
              className="btn-dark-outline w-full sm:w-auto py-4 px-10 text-sm font-bold tracking-widest rounded-xl hover:border-[#D4AF37]"
            >
              Explore Collection
            </button>
          </div>

          {/* Trust Floating Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-[#D4AF37]/15">
            <div className="glass-card-dark p-4 rounded-xl flex items-center justify-center gap-3 text-xs text-[#FAF7F2]">
              <Compass className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-semibold">Tuscan Full-Grain</span>
            </div>
            <div className="glass-card-dark p-4 rounded-xl flex items-center justify-center gap-3 text-xs text-[#FAF7F2]">
              <Feather className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-semibold">80gsm Fountain-Pen Paper</span>
            </div>
            <div className="glass-card-dark p-4 rounded-xl flex items-center justify-center gap-3 text-xs text-[#FAF7F2]">
              <RefreshCw className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-semibold">Modular Refill System</span>
            </div>
            <div className="glass-card-dark p-4 rounded-xl flex items-center justify-center gap-3 text-xs text-[#FAF7F2]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-semibold">Lifetime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
