import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#F6F3ED]/90 backdrop-blur-md border-b border-[#E2DCD0]">
      {/* Top Banner */}
      <div className="bg-[#1A1816] text-[#F6F3ED] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span>An independent leather folio studio</span>
        <span className="opacity-40">•</span>
        <span>Free Worldwide Delivery over $100</span>
        <span className="hidden md:inline text-[#C69A59] font-semibold">| Code: ATELIER10</span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1816] hover:text-[#A45834]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <a href="#" className="flex flex-col items-start text-decoration-none group">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1816] group-hover:text-[#A45834] transition-colors">
            FORME<span className="text-xs font-sans tracking-widest text-[#5E564E] font-normal ml-1 uppercase">STUDIO</span>
          </span>
          <span className="text-[10px] tracking-wider text-[#8E857C] font-light -mt-1 hidden sm:block">
            Room for your world
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1A1816]">
          <button
            onClick={() => { setActiveTab('folios'); scrollToSection('catalog'); }}
            className="hover:text-[#A45834] transition-colors"
          >
            The Folios
          </button>
          <button
            onClick={() => scrollToSection('builder')}
            className="hover:text-[#A45834] transition-colors text-[#A45834] flex items-center gap-1 font-bold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Studio Configurator
          </button>
          <button
            onClick={() => scrollToSection('our-world')}
            className="hover:text-[#A45834] transition-colors"
          >
            Our World
          </button>
          <button
            onClick={() => scrollToSection('unboxing')}
            className="hover:text-[#A45834] transition-colors"
          >
            Unboxing
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#A45834] transition-colors"
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
              className="bg-transparent text-xs font-semibold text-[#1A1816] border border-[#E2DCD0] rounded-full px-3 py-1.5 focus:outline-none focus:border-[#1A1816] cursor-pointer"
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
            className="w-10 h-10 rounded-full border border-[#E2DCD0] flex items-center justify-center text-[#1A1816] hover:border-[#1A1816] transition-colors"
            title="Search Products"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => scrollToSection('catalog')}
            className="w-10 h-10 rounded-full border border-[#E2DCD0] flex items-center justify-center text-[#1A1816] hover:border-[#1A1816] transition-colors relative"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#A45834] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Let's Talk / Bag Button */}
          <button
            onClick={onOpenCart}
            className="btn-forme-primary py-2.5 px-5 text-xs flex items-center gap-2"
          >
            <span>Bag</span>
            <span className="bg-[#FAF8F5] text-[#1A1816] rounded-full px-2 py-0.5 text-[11px] font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="bg-[#EFEBE3] border-t border-[#E2DCD0] py-3 px-4 animate-slide-up">
          <div className="container mx-auto max-w-xl flex items-center gap-2">
            <Search className="w-4 h-4 text-[#5E564E]" />
            <input
              type="text"
              placeholder="Search A6 Everyday, A5 Daybook, A4 Big Picture, refills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-[#1A1816] focus:outline-none placeholder-[#8E857C]"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#5E564E] hover:text-[#1A1816] underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F3ED] border-b border-[#E2DCD0] px-6 py-6 flex flex-col gap-4 animate-slide-up">
          <button
            onClick={() => { onOpenBuilder(); setMobileMenuOpen(false); }}
            className="btn-forme-primary w-full text-center"
          >
            Studio Configurator ↗
          </button>
          <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-[#1A1816]">
            <button onClick={() => { setActiveTab('folios'); scrollToSection('catalog'); }} className="text-left py-2 border-b border-[#E2DCD0]">
              The Folios (A6, A5, A4)
            </button>
            <button onClick={() => { setActiveTab('refills'); scrollToSection('catalog'); }} className="text-left py-2 border-b border-[#E2DCD0]">
              Paper Refills
            </button>
            <button onClick={() => scrollToSection('our-world')} className="text-left py-2 border-b border-[#E2DCD0]">
              Our World (Leather Craft)
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 border-b border-[#E2DCD0]">
              Reviews
            </button>
          </div>
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-[#5E564E]">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-white border border-[#E2DCD0] text-xs font-semibold px-3 py-1.5 rounded-full"
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
