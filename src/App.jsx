import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FolioBuilder from './components/FolioBuilder';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import Craftsmanship from './components/Craftsmanship';
import UnboxingShowcase from './components/UnboxingShowcase';
import Reviews from './components/Reviews';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { Check, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function App() {
  // Persistence for cart & wishlist
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('atelier_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Promo code state
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.customOptions) === JSON.stringify(product.customOptions)
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    showToast(`Added "${product.title}" to bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleWishlist = (id) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        showToast('Removed from wishlist');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Saved to wishlist ❤️');
        return [...prev, id];
      }
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#FAF7F2] flex flex-col font-sans selection:bg-[#D4AF37]/30">
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#161412] text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-[#D4AF37] animate-slide-up">
          <Check className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Bespoke Builder Trigger Bar */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => scrollToSection('builder')}
          className="btn-gold-glow py-3 px-5 text-xs flex items-center gap-2 rounded-full shadow-2xl border border-white/30 hover:scale-110 transition-transform font-bold"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#0B0A09]" />
          <span>Custom Configurator</span>
        </button>
      </div>

      {/* Navigation */}
      <Navbar
        cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBuilder={() => scrollToSection('builder')}
        currency={currency}
        setCurrency={setCurrency}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          onOpenBuilder={() => scrollToSection('builder')}
          onExplore={() => scrollToSection('catalog')}
        />

        {/* Bespoke Interactive Folio Builder */}
        <FolioBuilder
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* Product Catalog */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setActiveProductModal(p)}
          currency={currency}
          searchQuery={searchQuery}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* Craftsmanship & Patina Showcase */}
        <Craftsmanship />

        {/* Luxury Gift Packaging Unboxing Showcase */}
        <UnboxingShowcase onOpenBuilder={() => scrollToSection('builder')} />

        {/* Reviews & FAQs */}
        <Reviews />
      </main>

      {/* Footer */}
      <Footer onOpenBuilder={() => scrollToSection('builder')} />

      {/* Product Detail Modal */}
      {activeProductModal && (
        <ProductDetailModal
          product={activeProductModal}
          onClose={() => setActiveProductModal(null)}
          onAddToCart={handleAddToCart}
          currency={currency}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        currency={currency}
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        discountApplied={discountApplied}
        setDiscountApplied={setDiscountApplied}
      />

      {/* Netlify Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
        currency={currency}
        discountApplied={discountApplied}
      />
    </div>
  );
}
