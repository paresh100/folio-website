import React, { useState } from 'react';
import { SlidersHorizontal, Check, Sparkles, Plus, Info, RefreshCw, ShoppingBag } from 'lucide-react';
import { SIZES, LEATHER_FINISHES, ELASTIC_COLORS, STAMPING_FINISHES, REFILL_BUNDLES, CURRENCIES } from '../data/products';

export default function FolioBuilder({ onAddToCart, currency }) {
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
    <section id="builder" className="py-20 bg-[#F3EDE4] border-t border-b border-[#E8E0D5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A59]/15 text-[#8C4724] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bespoke Configurator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2420] mb-4">
            Build Your Own Leather Folio
          </h2>
          <p className="text-[#665A52] text-sm sm:text-base font-light">
            Select your preferred size, Tuscan leather hide, elastic band accents, and custom gold foil monogramming. Handmade to order in our workshop.
          </p>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Live Visual Interactive Preview */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-xl border border-[#E8E0D5] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="badge badge-gold">Live Atelier Preview</span>
                <span className="text-xs font-bold text-[#8C4724]">
                  {selectedSize.name.split(' ')[0]} Size
                </span>
              </div>

              {/* Dynamic Leather Folio Mockup */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner bg-[#2C2420]/5 flex items-center justify-center">
                <img
                  src={selectedLeather.image}
                  alt={selectedLeather.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Overlay Elastic Strap Visual */}
                <div
                  className="absolute top-0 bottom-0 right-[25%] w-5 shadow-lg transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: selectedElastic.hex }}
                >
                  <div className="w-1 h-full bg-black/10"></div>
                </div>

                {/* Live Monogram Foil Stamping Overlay */}
                {enableMonogram && monogramText.trim() && (
                  <div className="absolute bottom-6 right-8 bg-[#1C1917]/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 shadow-2xl">
                    <span
                      className={`monogram-stamp text-lg sm:text-xl font-serif tracking-widest ${
                        selectedStamping.id === 'gold'
                          ? 'monogram-gold'
                          : selectedStamping.id === 'silver'
                          ? 'monogram-silver'
                          : 'monogram-deboss'
                      }`}
                    >
                      {monogramText.toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Refill Badge Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#2C2420] border border-[#E8E0D5]">
                  + {selectedRefill.name.split('(')[0]}
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="mt-6 pt-6 border-t border-[#E8E0D5] flex flex-col gap-2 text-xs text-[#665A52]">
                <div className="flex justify-between">
                  <span>Selected Leather:</span>
                  <span className="font-semibold text-[#2C2420]">{selectedLeather.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Elastic Ribbon Accent:</span>
                  <span className="font-semibold text-[#2C2420]">{selectedElastic.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monogram Stamping:</span>
                  <span className="font-semibold text-[#2C2420]">
                    {enableMonogram ? `${monogramText.toUpperCase()} (${selectedStamping.name})` : 'None'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Paper Refill Bundle:</span>
                  <span className="font-semibold text-[#2C2420]">{selectedRefill.name}</span>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="mt-6 pt-6 border-t border-[#E8E0D5] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#9E9188] uppercase tracking-wider block">Total Custom Price</span>
                  <span className="font-serif text-3xl font-bold text-[#8C4724]">
                    {curr.symbol}{totalPriceConverted}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-gold py-3 px-6 text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Custom Folio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Step 1: Size Selection */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E0D5] shadow-sm">
              <label className="text-xs uppercase font-bold tracking-widest text-[#8C4724] mb-3 block flex items-center justify-between">
                <span>1. Choose Folio Size</span>
                <span className="text-[#665A52] font-normal lowercase">(Refillable format)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-lg text-left border transition-all ${
                      selectedSize.id === size.id
                        ? 'border-[#C69A59] bg-[#FAF7F2] ring-2 ring-[#C69A59]/20'
                        : 'border-[#E8E0D5] hover:border-[#C69A59]/50'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#2C2420]">{size.name}</div>
                    <div className="text-xs text-[#665A52] mt-1">{size.desc}</div>
                    <div className="text-xs font-semibold text-[#8C4724] mt-2">
                      {curr.symbol}{(size.basePrice * curr.rate).toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Leather Finish */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E0D5] shadow-sm">
              <label className="text-xs uppercase font-bold tracking-widest text-[#8C4724] mb-3 block">
                2. Choose Tuscan Leather Hide Finish
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {LEATHER_FINISHES.map((leather) => (
                  <button
                    key={leather.id}
                    onClick={() => setSelectedLeather(leather)}
                    className={`p-3 rounded-lg text-center border flex flex-col items-center gap-2 transition-all ${
                      selectedLeather.id === leather.id
                        ? 'border-[#C69A59] bg-[#FAF7F2] ring-2 ring-[#C69A59]/20'
                        : 'border-[#E8E0D5] hover:border-[#C69A59]/50'
                    }`}
                  >
                    <div
                      className="swatch-btn"
                      style={{ borderColor: selectedLeather.id === leather.id ? '#C69A59' : 'transparent' }}
                    >
                      <div className="swatch-inner" style={{ backgroundColor: leather.hex }}></div>
                    </div>
                    <span className="text-xs font-semibold text-[#2C2420]">{leather.name}</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#9E9188] mt-3 italic">
                * Hand-dyed vegetable tanned full-grain leather. Natural grain marks and color variation make each folio unique.
              </p>
            </div>

            {/* Step 3: Elastic Band Accent */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E0D5] shadow-sm">
              <label className="text-xs uppercase font-bold tracking-widest text-[#8C4724] mb-3 block">
                3. Choose Central Elastic & Ribbon Accent
              </label>
              <div className="flex flex-wrap gap-3">
                {ELASTIC_COLORS.map((elastic) => (
                  <button
                    key={elastic.id}
                    onClick={() => setSelectedElastic(elastic)}
                    className={`px-4 py-2.5 rounded-lg border flex items-center gap-2.5 text-xs font-semibold transition-all ${
                      selectedElastic.id === elastic.id
                        ? 'border-[#C69A59] bg-[#FAF7F2] ring-2 ring-[#C69A59]/20'
                        : 'border-[#E8E0D5] hover:border-[#C69A59]/50'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: elastic.hex }}></span>
                    <span>{elastic.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Custom Monogram Stamping */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E0D5] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <label className="text-xs uppercase font-bold tracking-widest text-[#8C4724]">
                  4. Custom Hand-Stamped Monogramming
                </label>
                <button
                  onClick={() => setEnableMonogram(!enableMonogram)}
                  className="text-xs text-[#8C4724] font-semibold underline"
                >
                  {enableMonogram ? 'Remove Monogram' : '+ Add Monogram'}
                </button>
              </div>

              {enableMonogram ? (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <div className="flex-1">
                      <label className="text-xs text-[#665A52] block mb-1">Initials (Up to 4 characters):</label>
                      <input
                        type="text"
                        maxLength={4}
                        value={monogramText}
                        onChange={(e) => setMonogramText(e.target.value.toUpperCase())}
                        placeholder="e.g. M.E.C."
                        className="w-full font-serif text-lg tracking-widest uppercase px-4 py-2 rounded border border-[#E8E0D5] focus:outline-none focus:border-[#C69A59] bg-[#FAF7F2]"
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-xs text-[#665A52] block mb-1">Foil Stamping Finish:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {STAMPING_FINISHES.map((stamp) => (
                          <button
                            key={stamp.id}
                            onClick={() => setSelectedStamping(stamp)}
                            className={`py-2 px-2 text-center text-xs rounded border font-medium transition-all ${
                              selectedStamping.id === stamp.id
                                ? 'border-[#C69A59] bg-[#FAF7F2] font-bold text-[#8C4724]'
                                : 'border-[#E8E0D5] text-[#665A52]'
                            }`}
                          >
                            {stamp.name.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-[#9E9188] italic py-2">
                  No monogram will be stamped on your folio cover.
                </div>
              )}
            </div>

            {/* Step 5: Initial Refill Bundle */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E0D5] shadow-sm">
              <label className="text-xs uppercase font-bold tracking-widest text-[#8C4724] mb-3 block">
                5. Select Included Paper Refill Insert Bundle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {REFILL_BUNDLES.map((refill) => (
                  <button
                    key={refill.id}
                    onClick={() => setSelectedRefill(refill)}
                    className={`p-4 rounded-lg text-left border transition-all ${
                      selectedRefill.id === refill.id
                        ? 'border-[#C69A59] bg-[#FAF7F2] ring-2 ring-[#C69A59]/20'
                        : 'border-[#E8E0D5] hover:border-[#C69A59]/50'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#2C2420]">{refill.name}</div>
                    <div className="text-[11px] text-[#665A52] mt-1">{refill.desc}</div>
                    <div className="text-xs font-semibold text-[#8C4724] mt-2">
                      + {curr.symbol}{(refill.price * curr.rate).toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
