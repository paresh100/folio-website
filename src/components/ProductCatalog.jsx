import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Heart, Filter, Sparkles } from 'lucide-react';
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

  // Filter products
  let filtered = PRODUCTS.filter((p) => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="catalog" className="py-24 bg-[#0B0A09] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37] mb-2 block">
              Curated Masterpiece Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Leather Covers & Refill Inserts
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'folios', label: 'Leather Folios' },
              { id: 'refills', label: 'Paper Refills' },
              { id: 'accessories', label: 'Brass Accessories' },
              { id: 'gifts', label: 'Gift Sets' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'btn-gold-glow text-[#0B0A09]'
                    : 'glass-card-dark text-[#A3968C] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Controls Bar */}
        <div className="flex items-center justify-between py-3 px-6 glass-card-dark rounded-xl mb-10 text-xs text-[#A3968C]">
          <span>
            Showing <strong className="text-white font-bold">{filtered.length}</strong> artisan pieces
          </span>
          <div className="flex items-center gap-3">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#161412] border border-[#D4AF37]/30 rounded-lg px-3 py-1 font-bold text-white focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured Artisanal</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
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
                className="group glass-card-dark rounded-2xl overflow-hidden border border-[#D4AF37]/20 flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom & Swap */}
                <div
                  className="relative aspect-[4/3] bg-[#161412] overflow-hidden cursor-pointer"
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

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-gold-glow uppercase">{product.badge}</span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0A09]/80 backdrop-blur-md flex items-center justify-center text-white hover:text-[#D4AF37] border border-white/20 transition-colors shadow-lg"
                    title="Add to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
                  </button>

                  {/* Quick View Button Bar */}
                  <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProductModal(product);
                      }}
                      className="btn-dark-outline w-full py-2.5 text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xl"
                    >
                      <Eye className="w-4 h-4 text-[#D4AF37]" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating) ? 'fill-[#D4AF37]' : 'text-[#2C2621]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-white ml-1">{product.rating}</span>
                      <span className="text-[#A3968C]">({product.reviewsCount})</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3
                      onClick={() => onOpenProductModal(product)}
                      className="font-serif text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors cursor-pointer mb-1"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#A3968C] mb-6 line-clamp-2 font-light">{product.subtitle}</p>
                  </div>

                  {/* Footer Price & Add Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A3968C] block">Price</span>
                      <span className="font-serif text-2xl font-bold text-gold-gradient">
                        {curr.symbol}{priceConverted}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="btn-gold-glow py-2.5 px-4 text-xs flex items-center gap-2 rounded-xl"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#0B0A09]" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
