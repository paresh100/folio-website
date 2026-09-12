import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Heart, Filter, Check } from 'lucide-react';
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

  // Filter products by tab and search query
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
    <section id="catalog" className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#8C4724] mb-2 block">
              Curated Artisan Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2420]">
              Handcrafted Leather & Refills
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
                className={`px-4 py-2 text-xs uppercase font-semibold tracking-wider rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#F3EDE4] text-[#665A52] hover:bg-[#E8E0D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Filter Controls */}
        <div className="flex items-center justify-between py-3 px-4 bg-[#F3EDE4] rounded-lg mb-8 text-xs text-[#665A52]">
          <span>
            Showing <strong className="text-[#2C2420]">{filtered.length}</strong> items
          </span>
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#E8E0D5] rounded px-2 py-1 font-semibold text-[#2C2420] focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured Artisanal</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E8E0D5]">
            <p className="text-lg text-[#665A52] mb-2 font-serif">No products found matching "{searchQuery}"</p>
            <p className="text-xs text-[#9E9188]">Try searching for "Folio", "Paper", or "Brass"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => {
              const priceConverted = (product.priceUSD * curr.rate).toFixed(2);
              const isWishlisted = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Hover Swap */}
                  <div className="relative aspect-[4/3] bg-[#F3EDE4] overflow-hidden cursor-pointer" onClick={() => onOpenProductModal(product)}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.secondaryImage && (
                      <img
                        src={product.secondaryImage}
                        alt={product.title}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="badge badge-gold shadow-sm">{product.badge}</span>
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2C2420] hover:text-[#8C4724] transition-colors shadow-sm"
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#8C4724] text-[#8C4724]' : ''}`} />
                    </button>

                    {/* Quick View Button */}
                    <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenProductModal(product);
                        }}
                        className="btn bg-white/90 hover:bg-white text-[#2C2420] w-full text-xs py-2 shadow-md flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1 text-xs text-[#C69A59] mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating) ? 'fill-[#C69A59]' : 'text-[#E8E0D5]'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-[#665A52] ml-1">{product.rating}</span>
                        <span className="text-[#9E9188]">({product.reviewsCount})</span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="font-serif text-xl font-bold text-[#2C2420] hover:text-[#8C4724] transition-colors cursor-pointer mb-1"
                      >
                        {product.title}
                      </h3>
                      <p className="text-xs text-[#665A52] mb-4 line-clamp-2">{product.subtitle}</p>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#9E9188] block">Price</span>
                        <span className="font-serif text-2xl font-bold text-[#8C4724]">
                          {curr.symbol}{priceConverted}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToCart(product)}
                        className="btn btn-primary py-2.5 px-4 text-xs flex items-center gap-2"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C69A59]" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
