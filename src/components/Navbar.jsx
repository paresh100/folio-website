import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, SlidersHorizontal } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenBuilder,
  currency,
  setCurrency,
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E0D5]">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C1917] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C69A59] animate-pulse" />
        <span>Handcrafted Tuscan Leather Folios • Free Worldwide Express Delivery over $100</span>
        <span className="hidden md:inline text-[#C69A59] font-semibold">| Code: ATELIER10</span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2C2420] hover:text-[#C69A59]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <a href="#" className="flex flex-col items-center text-decoration-none group">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#2C2420] group-hover:text-[#8C4724] transition-colors">
            ATELIER FOLIO
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#665A52] font-semibold -mt-1">
            FLORENCE • LONDON
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase font-semibold tracking-widest text-[#2C2420]">
          <button
            onClick={() => scrollToSection('builder')}
            className="hover:text-[#8C4724] flex items-center gap-1.5 transition-colors text-[#8C4724] font-bold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Build Custom Folio
          </button>
          <button
            onClick={() => { setActiveTab('all'); scrollToSection('catalog'); }}
            className="hover:text-[#8C4724] transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => { setActiveTab('refills'); scrollToSection('catalog'); }}
            className="hover:text-[#8C4724] transition-colors"
          >
            Refills & Inserts
          </button>
          <button
            onClick={() => scrollToSection('craftsmanship')}
            className="hover:text-[#8C4724] transition-colors"
          >
            Craftsmanship
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#8C4724] transition-colors"
          >
            Reviews
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Currency Switcher */}
          <div className="relative hidden sm:block">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-xs font-semibold text-[#2C2420] border border-[#E8E0D5] rounded-md px-2 py-1.5 focus:outline-none focus:border-[#C69A59] cursor-pointer"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c}>
                  {CURRENCIES[c].label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="btn-icon"
            title="Search Products"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => scrollToSection('catalog')}
            className="btn-icon relative"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8C4724] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="btn btn-primary py-2.5 px-4 text-xs flex items-center gap-2 relative"
          >
            <ShoppingBag className="w-4 h-4 text-[#C69A59]" />
            <span className="hidden sm:inline">Bag</span>
            <span className="bg-[#C69A59] text-white rounded-full px-2 py-0.5 text-[11px] font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="bg-[#F3EDE4] border-t border-[#E8E0D5] py-3 px-4 animate-slide-up">
          <div className="container mx-auto max-w-xl flex items-center gap-2">
            <Search className="w-4 h-4 text-[#665A52]" />
            <input
              type="text"
              placeholder="Search folios, paper inserts, brass clips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-[#2C2420] focus:outline-none placeholder-[#9E9188]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#665A52] hover:text-[#2C2420] underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8E0D5] px-6 py-6 flex flex-col gap-4 animate-slide-up">
          <button
            onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }}
            className="btn btn-gold w-full text-center"
          >
            ✨ Build Custom Folio
          </button>
          <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-[#2C2420]">
            <button onClick={() => { setActiveTab('all'); scrollToSection('catalog'); }} className="text-left py-2 border-b border-[#E8E0D5]">
              All Products
            </button>
            <button onClick={() => { setActiveTab('folios'); scrollToSection('catalog'); }} className="text-left py-2 border-b border-[#E8E0D5]">
              Leather Folios
            </button>
            <button onClick={() => { setActiveTab('refills'); scrollToSection('catalog'); }} className="text-left py-2 border-b border-[#E8E0D5]">
              Paper Refills & Inserts
            </button>
            <button onClick={() => scrollToSection('craftsmanship')} className="text-left py-2 border-b border-[#E8E0D5]">
              Craftsmanship & Patina
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 border-b border-[#E8E0D5]">
              Customer Reviews
            </button>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-[#665A52]">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-white border border-[#E8E0D5] text-xs font-semibold px-3 py-1.5 rounded"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c}>
                  {CURRENCIES[c].label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
