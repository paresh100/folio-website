import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Sparkles, CreditCard, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CURRENCIES } from '../data/products';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
  currency,
  discountApplied
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor@atelierfolio.com',
    address: '14 Via de’ Tornabuoni',
    city: 'Florence',
    country: 'Italy',
    zip: '50123',
    giftNote: 'Please wrap with satin ribbon and initial stamp.'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const subtotalUSD = cartItems.reduce((s, item) => s + item.priceUSD * item.quantity, 0);
  const discountUSD = discountApplied ? subtotalUSD * 0.1 : 0;
  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD);
  const finalTotalConverted = (finalTotalUSD * curr.rate).toFixed(2);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C69A59', '#8C4724', '#FAF7F2', '#D4AF37']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#8C4724]" />
            <h2 className="font-serif text-2xl font-bold text-[#2C2420]">
              {isSubmitted ? 'Order Confirmed!' : 'Secure Express Checkout'}
            </h2>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label="Close checkout">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-10 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#4E5E4A]/15 text-[#4E5E4A] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="badge badge-gold mb-2">Netlify Form Submitted Successfully</span>
              <h3 className="font-serif text-3xl font-bold text-[#2C2420] mb-2">
                Grazie Mille, {formData.name}!
              </h3>
              <p className="text-sm text-[#665A52] max-w-md mx-auto">
                Your bespoke leather order <strong className="text-[#8C4724]">#ATELIER-89241</strong> has been sent to our Florence workshop. A confirmation email has been dispatched to <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E8E0D5] max-w-md w-full text-left text-xs text-[#665A52] space-y-2">
              <div className="flex justify-between">
                <span>Estimated Crafting & Delivery:</span>
                <span className="font-bold text-[#2C2420]">3-5 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount Paid:</span>
                <span className="font-bold text-[#8C4724]">{curr.symbol}{finalTotalConverted}</span>
              </div>
              <div className="flex justify-between">
                <span>Dispatch Location:</span>
                <span className="font-semibold text-[#2C2420]">Florence Atelier, Italy</span>
              </div>
            </div>

            <button onClick={onClose} className="btn btn-gold py-3 px-8 text-xs">
              Return to Website
            </button>
          </div>
        ) : (
          <div className="p-8 overflow-y-auto">
            <form
              name="atelier-order-form"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmitOrder}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <input type="hidden" name="form-name" value="atelier-order-form" />

              {/* Form Fields */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-xs uppercase font-bold tracking-widest text-[#8C4724] border-b border-[#E8E0D5] pb-2">
                  1. Shipping & Contact Information
                </h3>

                <div>
                  <label className="text-xs text-[#665A52] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#665A52] block mb-1">Email Address (for order tracking)</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#665A52] block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs text-[#665A52] block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#665A52] block mb-1">Country</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#665A52] block mb-1">Zip Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#665A52] block mb-1 flex items-center gap-1">
                    <Gift className="w-3.5 h-3.5 text-[#C69A59]" />
                    <span>Handwritten Gift Note (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    name="orderDetails"
                    value={formData.giftNote}
                    onChange={(e) => setFormData({ ...formData, giftNote: e.target.value })}
                    className="w-full text-xs p-2.5 rounded border border-[#E8E0D5] focus:border-[#C69A59] focus:outline-none"
                  />
                </div>
              </div>

              {/* Order Summary & Payment */}
              <div className="md:col-span-5 bg-[#FAF7F2] p-6 rounded-xl border border-[#E8E0D5] flex flex-col justify-between">
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#8C4724] border-b border-[#E8E0D5] pb-2 mb-4">
                    2. Order Summary
                  </h3>

                  <div className="space-y-3 max-h-48 overflow-y-auto pr-1 mb-4 text-xs">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-start gap-2">
                        <div>
                          <div className="font-semibold text-[#2C2420]">{item.title}</div>
                          <div className="text-[10px] text-[#665A52]">Qty: {item.quantity}</div>
                        </div>
                        <div className="font-semibold text-[#8C4724]">
                          {curr.symbol}{(item.priceUSD * curr.rate * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E8E0D5] space-y-1 text-xs text-[#665A52]">
                    <div className="flex justify-between">
                      <span>Express Shipping</span>
                      <span className="text-[#4E5E4A] font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#2C2420] pt-2">
                      <span>Total Due</span>
                      <span className="font-serif text-2xl text-[#8C4724]">
                        {curr.symbol}{finalTotalConverted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-gold w-full py-4 text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <span>Submitting to Atelier...</span>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Place Order ({curr.symbol}{finalTotalConverted})</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-[#9E9188] text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#4E5E4A]" />
                    Encrypted SSL 256-Bit Netlify Payment Simulation
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

