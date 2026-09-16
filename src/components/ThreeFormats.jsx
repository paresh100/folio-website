import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ThreeFormats({ onSelectFormat, currency }) {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const formats = [
    {
      id: 'a6',
      title: 'The Everyday (A6)',
      tagline: 'Little notes. Big ideas. A compact companion for wherever the day takes you.',
      dimensions: '10.5 x 15 cm',
      price: 75,
      image: '/images/folio_espresso.jpg'
    },
    {
      id: 'a5',
      title: 'The Daybook (A5)',
      tagline: 'A home for your plans, pages and half-formed thoughts. The size of possibility.',
      dimensions: '15.5 x 22 cm',
      price: 115,
      image: '/images/folio_cognac.jpg'
    },
    {
      id: 'a4',
      title: 'The Big Picture (A4)',
      tagline: 'Room to spread out. For projects, sketches and the work that needs a little more space.',
      dimensions: '22 x 31 cm',
      price: 165,
      image: '/images/folio_olive.jpg'
    }
  ];

  return (
    <section className="py-24 bg-[#EFEBE3] border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="forme-pill">
            <span>The First Collection</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1816]">
            Three sizes. Your kind of space.
          </h2>
          <p className="text-[#5E564E] text-base font-light">
            From a passing thought to the bigger picture. Choose the format that fits your daily rituals.
          </p>
        </div>

        {/* 3 Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((item) => (
            <div
              key={item.id}
              className="forme-card p-6 flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#FAF8F5] border border-[#E2DCD0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#8E857C] font-semibold mb-2">
                  <span>{item.dimensions}</span>
                  <span className="font-serif text-base text-[#A45834] font-bold">
                    {curr.symbol}{(item.price * curr.rate).toFixed(2)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#1A1816] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E564E] leading-relaxed font-light mb-6">
                  {item.tagline}
                </p>
              </div>

              <button
                onClick={() => onSelectFormat(item.id)}
                className="btn-forme-outline w-full text-xs py-3 flex items-center justify-center gap-1.5"
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
