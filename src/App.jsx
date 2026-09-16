import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeFormats from './components/ThreeFormats';
import FolioBuilder from './components/FolioBuilder';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import OurWorld from './components/OurWorld';
import UnboxingShowcase from './components/UnboxingShowcase';
import Reviews from './components/Reviews';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { Check, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('forme_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('forme_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFormatFromGrid, setSelectedFormatFromGrid] = useState(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Promo code
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('forme_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('forme_wishlist', JSON.stringify(wishlist));
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

  const handleSelectFormatFromGrid = (formatId) => {
    setSelectedFormatFromGrid(formatId);
    scrollToSection('builder');
  };

  return (
    <div className="min-h-screen bg-[#F6F3ED] text-[#1A1816] flex flex-col font-sans selection:bg-[#A45834]/20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#1A1816] text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-[#E2DCD0] animate-slide-up">
          <Check className="w-4 h-4 text-[#C69A59]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Configurator Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => scrollToSection('builder')}
          className="btn-forme-primary py-3 px-5 text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Studio Configurator</span>
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
        {/* Editorial Hero */}
        <Hero
          onOpenBuilder={() => scrollToSection('builder')}
          onExplore={() => scrollToSection('catalog')}
        />

        {/* Three Formats Grid (A6, A5, A4) */}
        <ThreeFormats
          onSelectFormat={handleSelectFormatFromGrid}
          currency={currency}
        />

        {/* Bespoke Studio Configurator */}
        <FolioBuilder
          onAddToCart={handleAddToCart}
          currency={currency}
          initialFormat={selectedFormatFromGrid}
        />

        {/* Collection Catalog */}
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

        {/* Our World - Craft & Materials */}
        <OurWorld />

        {/* Unboxing Showcase */}
        <UnboxingShowcase onOpenBuilder={() => scrollToSection('builder')} />

        {/* Reviews */}
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

      {/* Checkout Modal */}
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
