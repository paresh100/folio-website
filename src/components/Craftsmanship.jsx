import React, { useState } from 'react';
import { Compass, Sparkles, Feather, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Craftsmanship() {
  const [patinaMonth, setPatinaMonth] = useState(18);

  const patinaStates = [
    {
      month: 0,
      title: 'Day 1: Brand New Tuscan Hide',
      desc: 'Matte velvet finish with clean, uniform amber tones fresh from our Florence tannery.',
      brightness: '105%',
      contrast: '100%',
      saturate: '95%'
    },
    {
      month: 6,
      title: '6 Months: Soft Warm Glow',
      desc: 'Absorbs natural oils from daily touch. Warm honey sheen develops along folded edges.',
      brightness: '95%',
      contrast: '108%',
      saturate: '110%'
    },
    {
      month: 18,
      title: '18 Months: Rich Caramel Patina',
      desc: 'Sunlight and friction deepen the grain into a lustrous cognac shine. Scratches buff out naturally.',
      brightness: '90%',
      contrast: '118%',
      saturate: '125%'
    },
    {
      month: 36,
      title: '36 Months: Vintage Heirloom Character',
      desc: 'Deep espresso-amber patina unique to your journey. Soft, supple, and virtually indestructible.',
      brightness: '85%',
      contrast: '125%',
      saturate: '140%'
    }
  ];

  const currentState = patinaStates.find((s) => s.month === patinaMonth) || patinaStates[2];

  return (
    <section id="craftsmanship" className="py-24 bg-[#0B0A09] text-[#FAF7F2] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold-glow text-xs font-extrabold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tuscan Leather Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Built To Age. Designed For Eternity.
          </h2>
          <p className="text-[#A3968C] text-sm sm:text-base font-light leading-relaxed">
            Unlike chrome leather that peels, our vegetable-tanned hides are dyed using natural chestnut bark tannins in Santa Croce sull’Arno. They don't wear out—they wear in.
          </p>
        </div>

        {/* Interactive Patina Aging Showcase */}
        <div className="glass-card-dark rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/30 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Preview */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/leather_workshop.jpg"
                alt="Artisan leather patina transformation"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  filter: `brightness(${currentState.brightness}) contrast(${currentState.contrast}) saturate(${currentState.saturate})`
                }}
              />
              <div className="absolute top-4 left-4 bg-[#0B0A09]/85 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                Patina Age: {currentState.month} Months
              </div>
            </div>

            {/* Right Interactive Controls */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
                  Interactive Patina Simulator
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold mb-4 text-white">
                  {currentState.title}
                </h3>
                <p className="text-sm text-[#A3968C] leading-relaxed mb-8 font-light">
                  {currentState.desc}
                </p>

                {/* Slider */}
                <div className="bg-[#161412] p-6 rounded-xl border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-[#D4AF37] mb-3">
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
                    className="w-full accent-[#D4AF37] cursor-pointer h-2 bg-[#0B0A09] rounded-lg"
                  />
                  <p className="text-[11px] text-[#A3968C] text-center mt-3 italic">
                    Drag the slider to watch full-grain leather transform over years of touch.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#D4AF37] font-semibold pt-4 border-t border-white/10">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Biodegradable Tanning • Free Of Chrome & Heavy Metals</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Craft Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Vegetable Tanning', desc: 'Tanned in Florence using mimosa & chestnut bark over 60 days.' },
            { step: '02', title: 'Hand Edge Slicking', desc: 'Beveled and hand-burnished with natural organic beeswax.' },
            { step: '03', title: 'Modular Cord Binding', desc: 'High-tensile woven cord binds up to 4 paper inserts seamlessly.' },
            { step: '04', title: 'Hot Foil Monogramming', desc: 'Stamped using antique brass type blocks heated to 130°C.' }
          ].map((item) => (
            <div
              key={item.step}
              className="glass-card-dark p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-colors"
            >
              <span className="font-serif text-3xl font-bold text-gold-gradient mb-3 block">
                {item.step}
              </span>
              <h4 className="font-serif text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-[#A3968C] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
