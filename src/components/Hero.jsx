import React from 'react';
import { ArrowUpRight, Sparkles, Feather, Compass, RefreshCw, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenBuilder, onExplore }) {
  return (
    <section className="relative bg-[#F6F3ED] text-[#1A1816] py-20 md:py-32 border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Pill Badge */}
            <div className="forme-pill">
              <span className="w-2 h-2 rounded-full bg-[#A45834]"></span>
              <span>An independent leather folio studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#1A1816] tracking-tight">
              A little structure. <br />
              <span className="italic font-light text-[#A45834]">A lot of soul.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5E564E] font-light leading-relaxed max-w-xl">
              Leather folios for the notes, plans and beautiful loose ends of life. Three distinct formats. Room to make each one your own.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBuilder}
                className="btn-forme-primary py-4 px-8 text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Meet your everyday</span>
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

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2DCD0] text-xs text-[#5E564E]">
              <div>
                <span className="font-bold text-[#1A1816] block">3 Formats</span>
                <span>A6, A5 & A4 Studio</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1816] block">Full-Grain Leather</span>
                <span>Vegetable Tanned</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1816] block">Refill System</span>
                <span>80gsm Swedish Paper</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E2DCD0] shadow-xl group">
              <img
                src="/images/hero_folios_group.jpg"
                alt="FORME Leather Folios Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <span className="font-serif text-lg italic">The First Collection</span>
                <span className="forme-pill bg-white/20 backdrop-blur-md text-white border-white/30">
                  Florence & London
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
