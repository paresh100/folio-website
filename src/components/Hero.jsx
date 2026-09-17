import React from 'react';
import { ArrowUpRight, Sparkles, Feather, Compass, RefreshCw, ShieldCheck, Check } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExplore }) {
  return (
    <section className="relative bg-[#FAF8F5] text-[#1A1816] py-16 md:py-28 border-b border-[#E2DCD0] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Pill Badge */}
            <div className="forme-pill border-[#E2DCD0] bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A45834] animate-pulse"></span>
              <span>An independent leather folio studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] text-[#1A1816] tracking-tight">
              A little structure. <br />
              <span className="italic font-light text-[#A45834]">A lot of soul.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5E564E] font-light leading-relaxed max-w-xl">
              Leather folios for the notes, plans and beautiful loose ends of life. Handcrafted in Florence from full-grain vegetable-tanned hides.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBuilder}
                className="btn-forme-primary py-4 px-8 text-sm flex items-center justify-center gap-2.5 shadow-md"
              >
                <span>Studio Configurator</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExplore}
                className="btn-forme-outline py-4 px-8 text-sm flex items-center justify-center gap-2"
              >
                <span>Discover the folios</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2DCD0] text-xs text-[#5E564E]">
              <div>
                <span className="font-bold text-[#1A1816] block text-sm">3 Formats</span>
                <span>A6, A5 & A4 Studio</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1816] block text-sm">Tuscan Leather</span>
                <span>100% Full-Grain</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1816] block text-sm">Fountain-Pen Safe</span>
                <span>80gsm Swedish Paper</span>
              </div>
            </div>
          </div>

          {/* Right Hero High-Fashion Editorial Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E2DCD0] shadow-2xl group">
              <img
                src="/images/forme_hero_editorial.jpg"
                alt="FORME Leather Folio Handcrafted in Tuscan Cognac Hide"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/70 via-transparent to-transparent"></div>
              
              {/* Overlay Glass Pills */}
              <div className="absolute top-6 left-6">
                <span className="forme-pill bg-white/90 backdrop-blur-md text-[#1A1816] border-white/40 shadow-md">
                  ✨ Bespoke Gold Foil Initial Monogramming
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <span className="font-serif text-xl italic">The Daybook (A5 Format)</span>
                <span className="forme-pill bg-white/20 backdrop-blur-md text-white border-white/30 font-semibold">
                  Santa Croce, Italy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
