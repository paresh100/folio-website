import React, { useState } from 'react';
import { Compass, Sparkles, Feather, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Craftsmanship() {
  const [patinaMonth, setPatinaMonth] = useState(18);

  const patinaStates = [
    {
      month: 0,
      title: 'Day 1: Brand New Tuscan Hide',
      desc: 'Matte velvet finish with clean, uniform amber tones. Fresh out of our workshop.',
      brightness: '100%',
      contrast: '100%',
      saturate: '95%'
    },
    {
      month: 6,
      title: '6 Months: Soft Warm Glow',
      desc: 'Absorbs natural oils from your daily touch. Slight warm honey sheen develops on edges.',
      brightness: '95%',
      contrast: '105%',
      saturate: '110%'
    },
    {
      month: 18,
      title: '18 Months: Rich Caramel Patina',
      desc: 'Friction and sunlight deepen the grain into a lustrous cognac shine. Scratches rub out naturally.',
      brightness: '90%',
      contrast: '115%',
      saturate: '125%'
    },
    {
      month: 36,
      title: '36 Months: Vintage Heirloom Character',
      desc: 'Deep espresso-amber patina unique to your journey. Soft, pliable, and indestructible.',
      brightness: '85%',
      contrast: '120%',
      saturate: '135%'
    }
  ];

  // Find closest patina state
  const currentState =
    patinaStates.find((s) => s.month === patinaMonth) || patinaStates[2];

  return (
    <section id="craftsmanship" className="py-24 bg-[#1C1917] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-5 bg-texture-grain"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A59]/20 border border-[#C69A59]/40 text-[#C69A59] text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Traditional Tuscan Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#FAF7F2]">
            Built To Age. Designed For Eternity.
          </h2>
          <p className="text-[#E8E0D5]/80 text-sm sm:text-base font-light leading-relaxed">
            Unlike mass-produced chrome leather that peels, our vegetable-tanned hides are dyed using natural tree bark tannins in Florence. They don't wear out—they wear in.
          </p>
        </div>

        {/* Interactive Patina Aging Showcase */}
        <div className="bg-[#2C2420] rounded-2xl p-6 sm:p-10 border border-[#FAF7F2]/10 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Image Preview */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/leather_workshop.jpg"
                alt="Artisan leather patina transformation"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: `brightness(${currentState.brightness}) contrast(${currentState.contrast}) saturate(${currentState.saturate})`
                }}
              />
              <div className="absolute top-4 left-4 bg-[#1C1917]/85 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold text-[#C69A59] border border-[#C69A59]/30">
                Patina Age: {currentState.month} Months
              </div>
            </div>

            {/* Right: Interactive Slider & Explanation */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C69A59] font-bold block mb-2">
                  Interactive Patina Time-Traveler
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-[#FAF7F2]">
                  {currentState.title}
                </h3>
                <p className="text-sm text-[#E8E0D5]/80 leading-relaxed mb-8 font-light">
                  {currentState.desc}
                </p>

                {/* Slider */}
                <div className="bg-[#1C1917] p-6 rounded-xl border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-[#C69A59] mb-3">
                    <span>New (Day 1)</span>
                    <span>6 Months</span>
                    <span>18 Months</span>
                    <span>3 Years+</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="36"
                    step="6"
                    value={patinaMonth}
                    onChange={(e) => setPatinaMonth(Number(e.target.value))}
                    className="w-full accent-[#C69A59] cursor-pointer h-2 bg-[#2C2420] rounded-lg"
                  />
                  <p className="text-[11px] text-[#9E9188] text-center mt-3 italic">
                    Slide to watch how full-grain leather transforms over years of daily handling.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#C69A59] font-semibold pt-4 border-t border-white/10">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Biodegradable Tuscan Tanning • Zero Heavy Metals or Chrome</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Craft Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Vegetable Tanning',
              desc: 'Tanned in Santa Croce sull’Arno using mimosa and chestnut extracts over 60 days.'
            },
            {
              step: '02',
              title: 'Hand Edge-Burnishing',
              desc: 'Every leather folio edge is hand-beveled and slicked with beeswax for a smooth finish.'
            },
            {
              step: '03',
              title: 'Modular Elastic System',
              desc: 'High-tensile woven cord system lets you bind up to 4 notebook inserts seamlessly.'
            },
            {
              step: '04',
              title: 'Hot Foil Monogramming',
              desc: 'Stamped using antique brass type blocks heated to 130°C with 24k gold leaf.'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[#2C2420]/80 p-6 rounded-xl border border-white/10 hover:border-[#C69A59]/50 transition-colors"
            >
              <span className="font-serif text-3xl font-bold text-[#C69A59] mb-3 block">
                {item.step}
              </span>
              <h4 className="font-serif text-xl font-bold text-[#FAF7F2] mb-2">{item.title}</h4>
              <p className="text-xs text-[#E8E0D5]/70 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
