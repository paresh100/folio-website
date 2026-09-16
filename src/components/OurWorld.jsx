import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Feather } from 'lucide-react';

export default function OurWorld() {
  return (
    <section id="our-world" className="py-24 bg-[#FAF8F5] border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="forme-pill">
            <span>A place for what matters</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1816] leading-tight">
            Good ideas deserve something worth keeping.
          </h2>
          <p className="text-lg text-[#5E564E] font-light leading-relaxed">
            We’re building an independent studio around a simple idea: the things you carry every day should feel as personal as the things you put inside them.
          </p>
        </div>

        {/* 2 Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E2DCD0] shadow-lg">
              <img
                src="/images/leather_workshop.jpg"
                alt="Artisan hands beveling Tuscan leather hide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#A45834] block">
              It starts with the material
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1816]">
              Character. From the very first touch.
            </h3>
            <p className="text-sm sm:text-base text-[#5E564E] font-light leading-relaxed">
              The grain. The feel. The way a surface changes with use. Leather is at the heart of what we’re making — and finding the right material is where our collection begins.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E2DCD0] text-xs text-[#5E564E]">
              <div>
                <span className="font-bold text-[#1A1816] block">Tuscan Vegetable Tanning</span>
                <span>Tanned using chestnut and mimosa extracts.</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1816] block">Infinite Refill System</span>
                <span>Designed to be refilled for decades to come.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
