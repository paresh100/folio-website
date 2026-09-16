import React, { useState } from 'react';
import { SlidersHorizontal, Check, Sparkles, Plus, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { SIZES, LEATHER_FINISHES, ELASTIC_COLORS, STAMPING_FINISHES, REFILL_BUNDLES, CURRENCIES } from '../data/products';

export default function FolioBuilder({ onAddToCart, currency, initialFormat }) {
  const [activeTab, setActiveTab] = useState('size');
  const [selectedSize, setSelectedSize] = useState(
    SIZES.find((s) => s.id === initialFormat) || SIZES[1]
  );
  const [selectedLeather, setSelectedLeather] = useState(LEATHER_FINISHES[0]);
  const [selectedElastic, setSelectedElastic] = useState(ELASTIC_COLORS[0]);
  const [enableMonogram, setEnableMonogram] = useState(true);
  const [monogramText, setMonogramText] = useState('F.S.');
  const [selectedStamping, setSelectedStamping] = useState(STAMPING_FINISHES[0]);
  const [selectedRefill, setSelectedRefill] = useState(REFILL_BUNDLES[0]);

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const basePrice = selectedSize.basePrice;
  const stampingPrice = enableMonogram ? selectedStamping.extraCost : 0;
  const refillPrice = selectedRefill ? selectedRefill.price : 0;
  const totalPriceUSD = basePrice + stampingPrice + refillPrice;
  const totalPriceConverted = (totalPriceUSD * curr.rate).toFixed(2);

  const handleAddToCart = () => {
    const customFolioItem = {
      id: `custom-folio-${Date.now()}`,
      title: `${selectedSize.name}`,
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
    <section id="builder" className="py-24 bg-[#F6F3ED] border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="forme-pill">
            <span>Bespoke Customizer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1A1816]">
            FORME Studio Configurator
          </h2>
          <p className="text-[#5E564E] text-sm sm:text-base font-light">
            Space to make each piece your own. Choose your format size, leather hide finish, elastic closure ribbon, and hand-stamped initials.
          </p>
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Live Interactive Visual Render */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="forme-card p-6 sm:p-8 bg-white border border-[#E2DCD0] shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="forme-pill">Studio Live Render</span>
                <span className="text-xs font-semibold text-[#A45834]">
                  {selectedSize.name.split('(')[0]}
                </span>
              </div>

              {/* Stage Canvas */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner bg-[#EFEBE3] border border-[#E2DCD0] flex items-center justify-center group">
                <img
                  src={selectedLeather.image}
                  alt={selectedLeather.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Elastic Line Overlay */}
                <div
                  className="absolute top-0 bottom-0 right-[25%] w-5 shadow-lg transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: selectedElastic.hex }}
                >
                  <div className="w-1 h-full bg-black/10"></div>
                </div>

                {/* Monogram Overlay */}
                {enableMonogram && monogramText.trim() && (
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#E2DCD0] shadow-lg">
                    <span
                      className={`monogram-stamp text-lg sm:text-xl font-serif tracking-widest ${
                        selectedStamping.id === 'gold' ? 'monogram-gold' : 'monogram-deboss'
                      }`}
                    >
                      {monogramText.toUpperCase()}
                    </span>
                  </div>
                )}

                {/* Refill Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[11px] font-semibold text-[#1A1816] border border-[#E2DCD0]">
                  + {selectedRefill.name}
                </div>
              </div>

              {/* Specs Summary */}
              <div className="mt-6 pt-6 border-t border-[#E2DCD0] space-y-2 text-xs text-[#5E564E]">
                <div className="flex justify-between">
                  <span>Format Size:</span>
                  <strong className="text-[#1A1816]">{selectedSize.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Leather Hide:</span>
                  <strong className="text-[#1A1816]">{selectedLeather.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Closure Ribbon:</span>
                  <strong className="text-[#A45834]">{selectedElastic.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Monogram:</span>
                  <strong className="text-[#1A1816]">
                    {enableMonogram ? `${monogramText.toUpperCase()} (${selectedStamping.name})` : 'None'}
                  </strong>
                </div>
              </div>

              {/* Price & Add to Bag */}
              <div className="mt-6 pt-6 border-t border-[#E2DCD0] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-[#8E857C] uppercase tracking-wider block">Custom Total</span>
                  <span className="font-serif text-3xl font-semibold text-[#A45834]">
                    {curr.symbol}{totalPriceConverted}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn-forme-primary py-3.5 px-6 text-xs flex items-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Steps Nav */}
            <div className="flex overflow-x-auto gap-2 p-1 bg-[#EFEBE3] rounded-full border border-[#E2DCD0]">
              {[
                { id: 'size', label: '1. Format' },
                { id: 'leather', label: '2. Leather' },
                { id: 'elastic', label: '3. Elastic' },
                { id: 'monogram', label: '4. Monogram' },
                { id: 'refill', label: '5. Refills' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#1A1816] text-[#F6F3ED]'
                      : 'text-[#5E564E] hover:text-[#1A1816]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 1. Format */}
            {activeTab === 'size' && (
              <div className="forme-card p-6 sm:p-8 bg-white space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-wider text-[#A45834] block">
                  1. Choose Folio Format Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {SIZES.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-5 rounded-xl text-left border transition-all ${
                        selectedSize.id === size.id
                          ? 'border-[#1A1816] bg-[#F6F3ED] ring-2 ring-[#1A1816]/10'
                          : 'border-[#E2DCD0] hover:border-[#1A1816]/50'
                      }`}
                    >
                      <div className="font-serif text-lg font-semibold text-[#1A1816]">{size.name}</div>
                      <div className="text-xs text-[#5E564E] mt-1 font-light">{size.desc}</div>
                      <div className="text-xs font-bold text-[#A45834] mt-3">
                        {curr.symbol}{(size.basePrice * curr.rate).toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Leather */}
            {activeTab === 'leather' && (
              <div className="forme-card p-6 sm:p-8 bg-white space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-wider text-[#A45834] block">
                  2. Choose Vegetable-Tanned Tuscan Leather Hide
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {LEATHER_FINISHES.map((leather) => (
                    <button
                      key={leather.id}
                      onClick={() => setSelectedLeather(leather)}
                      className={`p-4 rounded-xl text-center border flex flex-col items-center gap-2.5 transition-all ${
                        selectedLeather.id === leather.id
                          ? 'border-[#1A1816] bg-[#F6F3ED] ring-2 ring-[#1A1816]/10'
                          : 'border-[#E2DCD0] hover:border-[#1A1816]/50'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full border-2 shadow-inner"
                        style={{ backgroundColor: leather.hex, borderColor: selectedLeather.id === leather.id ? '#1A1816' : 'transparent' }}
                      />
                      <span className="text-xs font-semibold text-[#1A1816]">{leather.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Elastic */}
            {activeTab === 'elastic' && (
              <div className="forme-card p-6 sm:p-8 bg-white space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-wider text-[#A45834] block">
                  3. Choose High-Tensile Closure Elastic Ribbon
                </label>
                <div className="flex flex-wrap gap-3">
                  {ELASTIC_COLORS.map((elastic) => (
                    <button
                      key={elastic.id}
                      onClick={() => setSelectedElastic(elastic)}
                      className={`px-5 py-3 rounded-full border flex items-center gap-3 text-xs font-semibold transition-all ${
                        selectedElastic.id === elastic.id
                          ? 'border-[#1A1816] bg-[#F6F3ED] text-[#1A1816]'
                          : 'border-[#E2DCD0] text-[#5E564E] hover:border-[#1A1816]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: elastic.hex }}></span>
                      <span>{elastic.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Monogram */}
            {activeTab === 'monogram' && (
              <div className="forme-card p-6 sm:p-8 bg-white space-y-6 animate-slide-up">
                <div className="flex items-center justify-between border-b border-[#E2DCD0] pb-3">
                  <label className="text-xs uppercase font-bold tracking-wider text-[#A45834]">
                    4. Hand-Stamped Monogram Initials
                  </label>
                  <button
                    onClick={() => setEnableMonogram(!enableMonogram)}
                    className="text-xs text-[#A45834] font-semibold underline"
                  >
                    {enableMonogram ? 'Remove Monogram' : '+ Add Monogram'}
                  </button>
                </div>

                {enableMonogram && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-[#5E564E] block mb-1">Initials (Up to 4 capital letters):</label>
                      <input
                        type="text"
                        maxLength={4}
                        value={monogramText}
                        onChange={(e) => setMonogramText(e.target.value.toUpperCase())}
                        className="w-full font-serif text-2xl tracking-widest uppercase px-4 py-3 rounded-xl border border-[#E2DCD0] focus:outline-none focus:border-[#1A1816] bg-[#FAF8F5]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#5E564E] block mb-1 flex justify-between">
                        <span>Stamping Technique:</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {STAMPING_FINISHES.map((stamp) => (
                          <button
                            key={stamp.id}
                            onClick={() => setSelectedStamping(stamp)}
                            className={`p-3 text-left rounded-xl border transition-all ${
                              selectedStamping.id === stamp.id
                                ? 'border-[#1A1816] bg-[#F6F3ED]'
                                : 'border-[#E2DCD0] hover:border-[#1A1816]/40'
                            }`}
                          >
                            <div className="text-xs font-semibold text-[#1A1816]">{stamp.name}</div>
                            <div className="text-[11px] text-[#5E564E] mt-0.5">{stamp.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 5. Refill */}
            {activeTab === 'refill' && (
              <div className="forme-card p-6 sm:p-8 bg-white space-y-4 animate-slide-up">
                <label className="text-xs uppercase font-bold tracking-wider text-[#A45834] block">
                  5. Select Included Paper Refill Booklet Insert Set
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {REFILL_BUNDLES.map((refill) => (
                    <button
                      key={refill.id}
                      onClick={() => setSelectedRefill(refill)}
                      className={`p-5 rounded-xl text-left border transition-all ${
                        selectedRefill.id === refill.id
                          ? 'border-[#1A1816] bg-[#F6F3ED] ring-2 ring-[#1A1816]/10'
                          : 'border-[#E2DCD0] hover:border-[#1A1816]/50'
                      }`}
                    >
                      <div className="font-serif text-base font-semibold text-[#1A1816]">{refill.name}</div>
                      <div className="text-xs text-[#5E564E] font-light mt-1">{refill.desc}</div>
                      <div className="text-xs font-bold text-[#A45834] mt-3">
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
