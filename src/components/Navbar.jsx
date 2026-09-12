import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, SlidersHorizontal, Shield } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#0B0A09]/90 backdrop-blur-xl border-b border-[#D4AF37]/20">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#1C1710] via-[#332514] to-[#1C1710] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium tracking-wider border-b border-[#D4AF37]/15 flex items-center justify-center gap-3">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span>Handmade Tuscan Leather Folios • Free Global Express Shipping Over $100</span>
        <span className="hidden md:inline bg-[#D4AF37]/20 text-[#F5D77F] px-2 py-0.5 rounded font-bold border border-[#D4AF37]/30">
          Code: ATELIER10 (-10%)
        </span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#FAF7F2] hover:text-[#D4AF37]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <a href="#" className="flex flex-col items-center text-decoration-none group">
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-widest text-[#FAF7F2] group-hover:text-[#D4AF37] transition-colors">
            ATELIER FOLIO
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold -mt-1 opacity-90">
            FLORENCE • LONDON
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase font-bold tracking-widest text-[#FAF7F2]">
          <button
            onClick={() => scrollToSection('builder')}
            className="btn-gold-glow py-2 px-4 text-xs flex items-center gap-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0B0A09]" />
            <span>Build Custom Folio</span>
          </button>
          <button
            onClick={() => { setActiveTab('all'); scrollToSection('catalog'); }}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => { setActiveTab('refills'); scrollToSection('catalog'); }}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Refills & Inserts
          </button>
          <button
            onClick={() => scrollToSection('craftsmanship')}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Craftsmanship
          </button>
          <button
            onClick={() => scrollToSection('unboxing')}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Unboxing
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#D4AF37] transition-colors"
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
              className="bg-[#161412] text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
            >
              {Object.keys(CURRENCIES).map((c) => (
                <option key={c} value={c} className="bg-[#161412] text-[#FAF7F2]">
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
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0B0A09] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="btn-gold-glow py-2.5 px-4 text-xs flex items-center gap-2 relative rounded-lg"
          >
            <ShoppingBag className="w-4 h-4 text-[#0B0A09]" />
            <span className="hidden sm:inline font-bold">Bag</span>
            <span className="bg-[#0B0A09] text-[#D4AF37] rounded-full px-2 py-0.5 text-[11px] font-extrabold border border-[#D4AF37]/40">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="bg-[#161412] border-t border-[#D4AF37]/20 py-3 px-4 animate-slide-up">
          <div className="container mx-auto max-w-xl flex items-center gap-3">
            <Search className="w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search folios, paper refills, gold stamping..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-[#FAF7F2] focus:outline-none placeholder-[#A3968C]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#D4AF37] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0E0D] border-b border-[#D4AF37]/20 px-6 py-6 flex flex-col gap-4 animate-slide-up">
          <button
            onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }}
            className="btn-gold-glow w-full text-center py-3 text-xs"
          >
            ✨ Build Custom Folio
          </button>
          <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-[#FAF7F2]">
            <button onClick={() => { setActiveTab('all'); scrollToSection('catalog'); }} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              All Products
            </button>
            <button onClick={() => { setActiveTab('folios'); scrollToSection('catalog'); }} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              Leather Folios
            </button>
            <button onClick={() => { setActiveTab('refills'); scrollToSection('catalog'); }} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              Paper Refills & Inserts
            </button>
            <button onClick={() => scrollToSection('craftsmanship')} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              Craftsmanship & Patina
            </button>
            <button onClick={() => scrollToSection('unboxing')} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              Unboxing Box
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2.5 border-b border-white/10 hover:text-[#D4AF37]">
              Customer Reviews
            </button>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-[#A3968C]">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-[#161412] border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] px-3 py-1.5 rounded"
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
