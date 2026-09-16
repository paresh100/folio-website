import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Heart, Filter, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, CURRENCIES } from '../data/products';

export default function ProductCatalog({
  onAddToCart,
  onOpenProductModal,
  currency,
  searchQuery,
  activeTab,
  setActiveTab,
  wishlist,
  onToggleWishlist
}) {
  const [sortBy, setSortBy] = useState('featured');
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  let filtered = PRODUCTS.filter((p) => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="catalog" className="py-24 bg-[#F6F3ED] border-b border-[#E2DCD0]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="forme-pill mb-2">
              <span>Collection Study</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1816]">
              Leather Folios & Accessories
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Collection' },
              { id: 'folios', label: 'Leather Folios' },
              { id: 'refills', label: 'Paper Refills' },
              { id: 'accessories', label: 'Accessories' },
              { id: 'gifts', label: 'Gift Sets' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs uppercase font-semibold tracking-wider rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1A1816] text-[#F6F3ED]'
                    : 'bg-[#EFEBE3] text-[#5E564E] hover:text-[#1A1816]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Bar */}
        <div className="flex items-center justify-between py-3 px-6 bg-[#EFEBE3] rounded-xl mb-10 text-xs text-[#5E564E]">
          <span>
            Showing <strong className="text-[#1A1816]">{filtered.length}</strong> items
          </span>
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E2DCD0] rounded-full px-3 py-1 font-semibold text-[#1A1816] focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => {
            const priceConverted = (product.priceUSD * curr.rate).toFixed(2);
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="forme-card p-6 flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="relative aspect-[4/3] bg-[#FAF8F5] rounded-xl overflow-hidden mb-6 border border-[#E2DCD0] cursor-pointer"
                  onClick={() => onOpenProductModal(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.secondaryImage && (
                    <img
                      src={product.secondaryImage}
                      alt={product.title}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}

                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="forme-pill bg-white/90 backdrop-blur-sm border-[#E2DCD0]">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1A1816] hover:text-[#A45834] transition-colors border border-[#E2DCD0]"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#A45834] text-[#A45834]' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8E857C] font-semibold mb-2">
                    <span className="uppercase tracking-wider">{product.category}</span>
                    <span className="font-serif text-lg text-[#A45834] font-semibold">
                      {curr.symbol}{priceConverted}
                    </span>
                  </div>

                  <h3
                    onClick={() => onOpenProductModal(product)}
                    className="font-serif text-2xl font-semibold text-[#1A1816] hover:text-[#A45834] transition-colors cursor-pointer mb-1"
                  >
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#5E564E] font-light leading-relaxed mb-6 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>

                {/* Action */}
                <div className="pt-4 border-t border-[#E2DCD0] flex gap-2">
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="btn-forme-outline flex-1 py-2.5 text-xs flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn-forme-primary flex-1 py-2.5 text-xs flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
