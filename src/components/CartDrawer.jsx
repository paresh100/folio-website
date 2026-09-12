import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currency,
  discountCode,
  setDiscountCode,
  discountApplied,
  setDiscountApplied
}) {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  // Calculate totals
  const subtotalUSD = cartItems.reduce(
    (sum, item) => sum + item.priceUSD * item.quantity,
    0
  );
  const discountUSD = discountApplied ? subtotalUSD * 0.10 : 0;
  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD);

  const subtotalConverted = (subtotalUSD * curr.rate).toFixed(2);
  const discountConverted = (discountUSD * curr.rate).toFixed(2);
  const finalTotalConverted = (finalTotalUSD * curr.rate).toFixed(2);

  // Free shipping threshold = $100 USD
  const freeShippingThresholdUSD = 100;
  const remainingForFreeShippingUSD = Math.max(0, freeShippingThresholdUSD - subtotalUSD);
  const freeShippingPercent = Math.min(100, (subtotalUSD / freeShippingThresholdUSD) * 100);

  const handleApplyPromo = () => {
    if (promoInput.trim().toUpperCase() === 'ATELIER10') {
      setDiscountApplied(true);
      setDiscountCode('ATELIER10');
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "ATELIER10" for 10% off');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-6 border-b border-[#E8E0D5] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8C4724]" />
              <h2 className="font-serif text-xl font-bold text-[#2C2420]">Your Shopping Bag</h2>
              <span className="bg-[#8C4724] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="btn-icon"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#F3EDE4] px-6 py-3 border-b border-[#E8E0D5]">
            <div className="flex items-center justify-between text-xs mb-1.5 font-semibold text-[#2C2420]">
              {remainingForFreeShippingUSD === 0 ? (
                <span className="text-[#4E5E4A] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Free Express Delivery Unlocked!
                </span>
              ) : (
                <span>
                  Add {curr.symbol}{(remainingForFreeShippingUSD * curr.rate).toFixed(2)} more for Free Shipping
                </span>
              )}
            </div>
            <div className="w-full h-1.5 bg-[#E8E0D5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8C4724] transition-all duration-300"
                style={{ width: `${freeShippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-[#665A52]">
                <ShoppingBag className="w-12 h-12 text-[#9E9188] mx-auto mb-3 opacity-40" />
                <p className="font-serif text-xl font-bold mb-1">Your bag is empty</p>
                <p className="text-xs text-[#9E9188] mb-6">Discover our artisan folios or build your custom leather journal.</p>
                <button onClick={onClose} className="btn btn-gold text-xs">
                  Start Exploring
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemTotalConverted = (item.priceUSD * curr.rate * item.quantity).toFixed(2);

                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-white rounded-xl border border-[#E8E0D5] shadow-sm relative group"
                  >
                    <div className="w-20 h-20 bg-[#F3EDE4] rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-sm font-bold text-[#2C2420]">{item.title}</h3>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#9E9188] hover:text-[#B85338] transition-colors p-1"
                            title="Remove Item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Options Display */}
                        {item.customOptions ? (
                          <div className="text-[11px] text-[#665A52] mt-1 space-y-0.5">
                            <div>Leather: <strong className="text-[#2C2420]">{item.customOptions.leather}</strong></div>
                            <div>Monogram: <strong className="text-[#8C4724]">{item.customOptions.monogram}</strong></div>
                            <div>Refill: <span>{item.customOptions.refill}</span></div>
                          </div>
                        ) : (
                          item.subtitle && <p className="text-[11px] text-[#665A52]">{item.subtitle}</p>
                        )}
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E8E0D5] rounded">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#665A52] hover:bg-[#F3EDE4]"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-bold text-[#2C2420]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#665A52] hover:bg-[#F3EDE4]"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-serif text-base font-bold text-[#8C4724]">
                          {curr.symbol}{itemTotalConverted}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E8E0D5] bg-white space-y-4">
              {/* Promo Code Entry */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (ATELIER10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 text-xs uppercase px-3 py-2 border border-[#E8E0D5] rounded focus:outline-none focus:border-[#C69A59]"
                />
                <button
                  onClick={handleApplyPromo}
                  className="btn bg-[#2C2420] text-white text-xs py-2 px-3 hover:bg-[#8C4724]"
                >
                  Apply
                </button>
              </div>
              {promoError && <p className="text-[11px] text-[#B85338]">{promoError}</p>}
              {discountApplied && (
                <div className="flex justify-between items-center text-xs text-[#4E5E4A] font-semibold bg-[#4E5E4A]/10 px-3 py-1.5 rounded">
                  <span>10% Off Promo (ATELIER10)</span>
                  <span>-{curr.symbol}{discountConverted}</span>
                </div>
              )}

              {/* Breakdown */}
              <div className="space-y-1.5 text-xs text-[#665A52]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C2420]">{curr.symbol}{subtotalConverted}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#4E5E4A]">
                    {remainingForFreeShippingUSD === 0 ? 'FREE Express' : `${curr.symbol}${(12 * curr.rate).toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8E0D5] text-base font-bold text-[#2C2420]">
                  <span>Total</span>
                  <span className="font-serif text-2xl text-[#8C4724]">
                    {curr.symbol}{finalTotalConverted}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="btn btn-gold w-full py-4 text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
