import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ThreeFormats({ onSelectFormat, currency }) {
  const [showScaleGuide, setShowScaleGuide] = useState(false);
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const formats = [
    {
      id: 'a6',
      title: 'The Everyday (A6)',
      tagline: 'Little notes. Big ideas. A compact companion for wherever the day takes you.',
      dimensions: '10.5 x 15 cm',
      fits: 'Passport, Field Notes, Pocket memopads',
      price: 75,
      image: '/images/folio_espresso.jpg'
    },
    {
      id: 'a5',
      title: 'The Daybook (A5)',
      tagline: 'A home for your plans, pages and half-formed thoughts. The size of possibility.',
      dimensions: '15.5 x 22 cm',
      fits: 'Standard A5 notebooks, Kindle, iPad Mini',
      price: 115,
      image: '/images/folio_cognac.jpg'
    },
    {
      id: 'a4',
      title: 'The Big Picture (A4)',
      tagline: 'Room to spread out. For projects, sketches and the work that needs a little more space.',
      dimensions: '22 x 31 cm',
      fits: 'A4 legal pads, 13" MacBook, iPad Pro',
      price: 165,
      image: '/images/folio_olive.jpg'
    }
  ];

  return (
    <section className="py-24 bg-[#EFEBE3] border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="forme-pill border-[#E2DCD0] bg-white">
            <span>The Collection Formats</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1A1816]">
            Three sizes. Your kind of space.
          </h2>
          <p className="text-[#5E564E] text-base sm:text-lg font-light">
            From a passing thought to the bigger picture. Choose the format that fits your daily rituals.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowScaleGuide(!showScaleGuide)}
              className="forme-pill hover:border-[#1A1816] transition-colors cursor-pointer text-xs font-semibold"
            >
              <Eye className="w-3.5 h-3.5 text-[#A45834]" />
              <span>{showScaleGuide ? 'Hide Format Comparison Scale' : 'View Format Comparison Scale'}</span>
            </button>
          </div>
        </div>

        {/* Visual Scale Guide Modal / Banner */}
        {showScaleGuide && (
          <div className="mb-16 bg-white rounded-2xl p-6 border border-[#E2DCD0] shadow-lg animate-slide-up">
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-[#E2DCD0]">
              <img
                src="/images/folio_size_comparison.jpg"
                alt="Overhead scale comparison of A6, A5, and A4 leather folios"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-xs text-[#5E564E]">
              <div>
                <strong className="text-[#1A1816] block text-sm">A6 Pocket Passport</strong>
                <span>10.5 x 15 cm</span>
              </div>
              <div>
                <strong className="text-[#1A1816] block text-sm">A5 Daybook Journal</strong>
                <span>15.5 x 22 cm</span>
              </div>
              <div>
                <strong className="text-[#1A1816] block text-sm">A4 Big Picture Studio</strong>
                <span>22 x 31 cm</span>
              </div>
            </div>
          </div>
        )}

        {/* 3 Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((item) => (
            <div
              key={item.id}
              className="forme-card p-6 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#FAF8F5] border border-[#E2DCD0] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1A1816] border border-[#E2DCD0]">
                    {item.dimensions}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#8E857C] font-semibold mb-2">
                  <span className="uppercase tracking-wider">Format</span>
                  <span className="font-serif text-xl text-[#A45834] font-semibold">
                    {curr.symbol}{(item.price * curr.rate).toFixed(2)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#1A1816] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E564E] leading-relaxed font-light mb-4">
                  {item.tagline}
                </p>

                <div className="text-[11px] text-[#8E857C] pt-3 border-t border-[#E2DCD0] mb-6">
                  <span>Fits: <strong className="text-[#1A1816]">{item.fits}</strong></span>
                </div>
              </div>

              <button
                onClick={() => onSelectFormat(item.id)}
                className="btn-forme-primary w-full text-xs py-3 flex items-center justify-center gap-1.5"
              >
                <span>Configure {item.title.split(' ')[1]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
