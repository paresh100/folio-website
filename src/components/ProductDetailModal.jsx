import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Heart, Truck, RefreshCw, Feather } from 'lucide-react';
import { CURRENCIES, LEATHER_FINISHES } from '../data/products';

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  currency,
  wishlist,
  onToggleWishlist
}) {
  if (!product) return null;

  const [selectedImg, setSelectedImg] = useState(product.image);
  const [selectedLeatherId, setSelectedLeatherId] = useState(
    product.leatherOptions ? product.leatherOptions[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('details');

  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const priceConverted = (product.priceUSD * curr.rate * quantity).toFixed(2);
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    const selectedLeatherObj = LEATHER_FINISHES.find((l) => l.id === selectedLeatherId);
    const itemToAdd = {
      ...product,
      selectedOptions: {
        leather: selectedLeatherObj ? selectedLeatherObj.name : null
      }
    };
    for (let i = 0; i < quantity; i++) {
      onAddToCart(itemToAdd);
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#E8E0D5] flex items-center justify-center text-[#2C2420] hover:text-[#8C4724] hover:border-[#8C4724] transition-colors"
          aria-label="Close detail modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 bg-[#F3EDE4] p-6 flex flex-col justify-between overflow-y-auto">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-4 bg-white">
            <img
              src={selectedImg}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Gallery Thumbnails */}
          {product.secondaryImage && (
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedImg(product.image)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImg === product.image ? 'border-[#C69A59] scale-105' : 'border-transparent opacity-70'
                }`}
              >
                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => setSelectedImg(product.secondaryImage)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImg === product.secondaryImage ? 'border-[#C69A59] scale-105' : 'border-transparent opacity-70'
                }`}
              >
                <img src={product.secondaryImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
              </button>
            </div>
          )}

          {/* Guarantee Badges */}
          <div className="mt-6 pt-6 border-t border-[#E8E0D5] grid grid-cols-2 gap-4 text-[11px] text-[#665A52]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C69A59]" />
              <span>Free Express Delivery Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C69A59]" />
              <span>Lifetime Leather Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information & Selection */}
        <div className="md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Category Badge & Wishlist */}
            <div className="flex items-center justify-between mb-3">
              <span className="badge badge-gold uppercase">{product.category}</span>
              <button
                onClick={() => onToggleWishlist(product.id)}
                className="text-xs text-[#665A52] hover:text-[#8C4724] flex items-center gap-1 font-semibold"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8C4724] text-[#8C4724]' : ''}`} />
                <span>{isWishlisted ? 'Saved' : 'Save to Wishlist'}</span>
              </button>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2420] mb-1">
              {product.title}
            </h2>
            <p className="text-xs text-[#665A52] mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-xs text-[#C69A59] mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-[#C69A59]' : 'text-[#E8E0D5]'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-[#2C2420]">{product.rating}</span>
              <span className="text-[#9E9188]">({product.reviewsCount} customer reviews)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#665A52] leading-relaxed mb-6 font-light">
              {product.description}
            </p>

            {/* Leather Option Swatches if available */}
            {product.leatherOptions && (
              <div className="mb-6">
                <label className="text-xs uppercase font-bold text-[#2C2420] block mb-2">
                  Selected Leather Finish:
                </label>
                <div className="flex gap-3">
                  {product.leatherOptions.map((optId) => {
                    const lObj = LEATHER_FINISHES.find((l) => l.id === optId);
                    if (!lObj) return null;
                    return (
                      <button
                        key={optId}
                        onClick={() => setSelectedLeatherId(optId)}
                        className={`p-2 rounded-lg border flex items-center gap-2 text-xs font-semibold ${
                          selectedLeatherId === optId
                            ? 'border-[#C69A59] bg-[#FAF7F2] text-[#8C4724]'
                            : 'border-[#E8E0D5] text-[#665A52]'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: lObj.hex }}></span>
                        <span>{lObj.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Accordion Details */}
            <div className="border-t border-b border-[#E8E0D5] py-3 mb-6 text-xs">
              <div className="flex border-b border-[#E8E0D5] pb-2 mb-3 gap-6">
                <button
                  onClick={() => setActiveAccordion('details')}
                  className={`font-semibold uppercase tracking-wider pb-1 transition-colors ${
                    activeAccordion === 'details' ? 'border-b-2 border-[#8C4724] text-[#8C4724]' : 'text-[#9E9188]'
                  }`}
                >
                  Craft Specs
                </button>
                <button
                  onClick={() => setActiveAccordion('care')}
                  className={`font-semibold uppercase tracking-wider pb-1 transition-colors ${
                    activeAccordion === 'care' ? 'border-b-2 border-[#8C4724] text-[#8C4724]' : 'text-[#9E9188]'
                  }`}
                >
                  Leather Care & Patina
                </button>
              </div>

              {activeAccordion === 'details' && (
                <ul className="space-y-1.5 text-[#665A52] list-disc list-inside">
                  {product.details ? (
                    product.details.map((d, idx) => <li key={idx}>{d}</li>)
                  ) : (
                    <li>Authentic European craftsmanship with lifetime warranty.</li>
                  )}
                </ul>
              )}

              {activeAccordion === 'care' && (
                <p className="text-[#665A52] leading-relaxed">
                  Full-grain vegetable-tanned leather absorbs natural oils over time. Apply a light dab of organic beeswax balm once a year to keep the leather supple and enhance its rich patina tone.
                </p>
              )}
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#E8E0D5] rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-sm font-bold text-[#665A52] hover:bg-[#F3EDE4]"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-bold text-[#2C2420]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-sm font-bold text-[#665A52] hover:bg-[#F3EDE4]"
              >
                +
              </button>
            </div>

            {/* Price & Add Button */}
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl font-bold text-[#8C4724]">
                {curr.symbol}{priceConverted}
              </span>
              <button
                onClick={handleAddToCart}
                className="btn btn-gold py-3 px-6 text-xs flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
