import React, { useState } from 'react';
import { SlidersHorizontal, Check, Sparkles, Plus, Info, RefreshCw, ShoppingBag, Eye } from 'lucide-react';
import { SIZES, LEATHER_FINISHES, ELASTIC_COLORS, STAMPING_FINISHES, REFILL_BUNDLES, CURRENCIES } from '../data/products';

export default function FolioBuilder({ onAddToCart, currency }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(SIZES[1]); // Default A5
  const [selectedLeather, setSelectedLeather] = useState(LEATHER_FINISHES[0]); // Default Cognac
  const [selectedElastic, setSelectedElastic] = useState(ELASTIC_COLORS[0]); // Default Terracotta
  const [enableMonogram, setEnableMonogram] = useState(true);
  const [monogramText, setMonogramText] = useState('M.E.C.');
  const [selectedStamping, setSelectedStamping] = useState(STAMPING_FINISHES[0]); // Default Gold
  const [selectedRefill, setSelectedRefill] = useState(REFILL_BUNDLES[0]);

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  // Calculate dynamic price
  const basePrice = selectedSize.basePrice;
  const stampingPrice = enableMonogram ? selectedStamping.extraCost : 0;
  const refillPrice = selectedRefill ? selectedRefill.price : 0;
  const totalPriceUSD = basePrice + stampingPrice + refillPrice;
  const totalPriceConverted = (totalPriceUSD * curr.rate).toFixed(2);

  const handleAddToCart = () => {
    const customFolioItem = {
      id: `custom-folio-${Date.now()}`,
      title: `Custom ${selectedSize.name.split(' ')[0]} Leather Folio`,
      subtitle: `${selectedLeather.name} • ${selectedElastic.name} Elastic`,
      category: 'custom',
      priceUSD: totalPriceUSD,
      image: selectedLeather.image,
      isCustom: true,
      customOptions: {
        size: selectedSize.name,
        leather: selectedLeather.name,
        elastic: selectedElastic.name,
        monogram: enableMonogram ? `${monogramText.toUpperCase()} (${selectedStamping.name})` : 'None',
        refill: selectedRefill.name
      }
    };

    onAddToCart(customFolioItem);
  };

  return (
    <section id="builder" className="py-24 bg-[#0F0E0D] border-t border-b border-[#D4AF37]/20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="bg-glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gold-glow text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Bespoke Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Build Your Bespoke Folio
          </h2>
          <p className="text-[#A3968C] text-sm sm:text-base font-light">
            Design your heirloom cover step-by-step. Select your size format, Tuscan leather hide, elastic band accent, and custom hot foil monogramming.
          </p>
        </div>

        {/* Builder Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Live 3D Interactive Stage */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-card-dark rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-gold-glow">Atelier Live Render</span>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {selectedSize.name.split(' ')[0]} Size Format
                </span>
              </div>

              {/* Dynamic Stage Canvas Preview */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-[#0B0A09] border border-white/10 flex items-center justify-center group">
                <img
                  src={selectedLeather.image}
                  alt={selectedLeather.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Elastic Strap Line */}
                <div
                  className="absolute top-0 bottom-0 right-[28%] w-6 shadow-2xl transition-all duration-500 flex items-center justify-center"
                  style={{ backgroundColor: selectedElastic.hex }}
                >
                  <div className="w-1.5 h-full bg-black/20"></div>
                </div>

                {/* Live Foil Monogramming Overlay */}
                {enableMonogram && monogramText.trim() && (
                  <div className="absolute bottom-6 right-6 bg-[#0B0A09]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#D4AF37]/40 shadow-2xl">
                    <span
                      className={`monogram-stamp text-xl sm:text-2xl font-serif tracking-widest ${
                        selectedStamping.id === 'gold'
                          ? 'monogram-gold-foil'
                          : selectedStamping.id === 'silver'
                          ? 'monogram-silver-foil'
                          : 'monogram-deboss-depth'
                      }`}
                    >
                      {monogramText.toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Refill Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0B0A09]/85 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-bold text-[#FAF7F2] border border-[#D4AF37]/30">
                  + {selectedRefill.name.split('(')[0]}
                </div>
              </div>

              {/* Live Specs Breakdown */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-[#A3968C]">
                <div className="flex justify-between">
                  <span>Selected Leather:</span>
                  <strong className="text-white">{selectedLeather.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Elastic Ribbon Accent:</span>
                  <strong className="text-[#D4AF37]">{selectedElastic.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hot Foil Monogramming:</span>
                  <strong className="text-white">
                    {enableMonogram ? `${monogramText.toUpperCase()} (${selectedStamping.name})` : 'None'}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>Paper Refill Insert:</span>
                  <strong className="text-white">{selectedRefill.name}</strong>
                </div>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="mt-6 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-[#A3968C] uppercase tracking-wider block">Custom Total</span>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
                    {curr.symbol}{totalPriceConverted}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn-gold-glow py-3.5 px-6 text-xs flex items-center gap-2 rounded-xl font-extrabold shadow-xl hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="w-4 h-4 text-[#0B0A09]" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Step Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step Navigation Tabs */}
            <div className="flex overflow-x-auto gap-2 p-1.5 bg-[#161412] rounded-xl border border-white/10 no-scrollbar">
              {[
                { id: 1, label: '1. Format Size' },
                { id: 2, label: '2. Tuscan Leather' },
                { id: 3, label: '3. Elastic Accent' },
                { id: 4, label: '4. Monogram' },
                { id: 5, label: '5. Refills' }
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg whitespace-nowrap transition-all ${
                    activeStep === step.id
                      ? 'btn-gold-glow text-[#0B0A09]'
                      : 'text-[#A3968C] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Step 1: Size Format */}
            {activeStep === 1 && (
              <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                  Select Size Format & Dimensions
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SIZES.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-5 rounded-xl text-left border transition-all ${
                        selectedSize.id === size.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 ring-2 ring-[#D4AF37]/30'
                          : 'border-white/10 bg-[#161412] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="font-serif text-lg font-bold text-white">{size.name}</div>
                      <div className="text-xs text-[#A3968C] mt-1 font-light">{size.desc}</div>
                      <div className="text-xs font-extrabold text-[#D4AF37] mt-3">
                        {curr.symbol}{(size.basePrice * curr.rate).toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Leather Finish */}
            {activeStep === 2 && (
              <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                  Select Tuscan Vegetable-Tanned Hide Finish
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {LEATHER_FINISHES.map((leather) => (
                    <button
                      key={leather.id}
                      onClick={() => setSelectedLeather(leather)}
                      className={`p-4 rounded-xl text-center border flex flex-col items-center gap-2.5 transition-all ${
                        selectedLeather.id === leather.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 ring-2 ring-[#D4AF37]/30'
                          : 'border-white/10 bg-[#161412] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full border-2 shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: leather.hex, borderColor: selectedLeather.id === leather.id ? '#D4AF37' : 'transparent' }}
                      >
                        {selectedLeather.id === leather.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-xs font-bold text-white">{leather.name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#A3968C] font-light italic pt-2">
                  * Tanned with mimosa & chestnut bark in Florence. Grows richer in character with age.
                </p>
              </div>
            )}

            {/* Step 3: Elastic Accent */}
            {activeStep === 3 && (
              <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                  Select High-Tensile Elastic Ribbon Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {ELASTIC_COLORS.map((elastic) => (
                    <button
                      key={elastic.id}
                      onClick={() => setSelectedElastic(elastic)}
                      className={`px-5 py-3 rounded-xl border flex items-center gap-3 text-xs font-bold transition-all ${
                        selectedElastic.id === elastic.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 ring-2 ring-[#D4AF37]/30 text-white'
                          : 'border-white/10 bg-[#161412] text-[#A3968C] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: elastic.hex }}></span>
                      <span>{elastic.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Monogramming */}
            {activeStep === 4 && (
              <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 animate-slide-up">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <label className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                    Custom Hand-Stamped Monogramming
                  </label>
                  <button
                    onClick={() => setEnableMonogram(!enableMonogram)}
                    className="text-xs text-[#D4AF37] font-bold underline"
                  >
                    {enableMonogram ? 'Disable Monogram' : '+ Enable Monogram'}
                  </button>
                </div>

                {enableMonogram && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-[#A3968C] block mb-1">Initials (Up to 4 capital letters):</label>
                      <input
                        type="text"
                        maxLength={4}
                        value={monogramText}
                        onChange={(e) => setMonogramText(e.target.value.toUpperCase())}
                        className="w-full font-serif text-2xl tracking-widest uppercase px-4 py-3 rounded-xl border border-white/20 bg-[#0B0A09] text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#A3968C] block mb-1">Hot Foil Stamping Finish:</label>
                      <div className="grid grid-cols-3 gap-3">
                        {STAMPING_FINISHES.map((stamp) => (
                          <button
                            key={stamp.id}
                            onClick={() => setSelectedStamping(stamp)}
                            className={`py-3 px-3 text-center text-xs rounded-xl border font-bold transition-all ${
                              selectedStamping.id === stamp.id
                                ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                                : 'border-white/10 text-[#A3968C] hover:border-white/30'
                            }`}
                          >
                            {stamp.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Refill Inserts */}
            {activeStep === 5 && (
              <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                  Select Included Paper Insert Booklet Set
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {REFILL_BUNDLES.map((refill) => (
                    <button
                      key={refill.id}
                      onClick={() => setSelectedRefill(refill)}
                      className={`p-5 rounded-xl text-left border transition-all ${
                        selectedRefill.id === refill.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 ring-2 ring-[#D4AF37]/30'
                          : 'border-white/10 bg-[#161412] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="font-serif text-base font-bold text-white">{refill.name}</div>
                      <div className="text-xs text-[#A3968C] font-light mt-1">{refill.desc}</div>
                      <div className="text-xs font-extrabold text-[#D4AF37] mt-3">
                        + {curr.symbol}{(refill.price * curr.rate).toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
