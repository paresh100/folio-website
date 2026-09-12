import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBuilder }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-20 pb-12 border-t border-[#FAF7F2]/10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-[#2C2420] rounded-2xl p-8 sm:p-12 mb-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69A59] block mb-2">
              The Artisan Journal Society
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Join Our Circle & Receive 10% Off
            </h3>
            <p className="text-xs text-[#E8E0D5]/70 font-light">
              Get early access to limited leather hide batches, refill restocks, and leather care guides.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="bg-[#4E5E4A]/20 border border-[#4E5E4A] text-[#C69A59] text-xs p-4 rounded-xl text-center font-semibold">
                ✨ Benvenuto! Check your inbox for code <strong className="text-white">ATELIER10</strong>.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1C1917] border border-white/20 text-xs px-4 py-3 rounded-lg text-white placeholder-[#9E9188] focus:outline-none focus:border-[#C69A59] flex-1"
                />
                <button type="submit" className="btn btn-gold text-xs py-3 px-5">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-xs text-[#E8E0D5]/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold text-[#FAF7F2] tracking-widest block">
              ATELIER FOLIO
            </span>
            <p className="text-xs text-[#E8E0D5]/70 font-light leading-relaxed">
              Handcrafted refillable leather journal covers, notebooks, and brass desk accoutrements. Made in Florence with Tuscan vegetable-tanned leather.
            </p>
            <div className="pt-2 text-[11px] text-[#C69A59] font-semibold flex items-center gap-1.5">
              <span>Optimized for Netlify Deployment</span>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FAF7F2] mb-4 uppercase tracking-wider">
              Collection
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#catalog" className="hover:text-[#C69A59] transition-colors">The Voyageur A5 Folio</a></li>
              <li><a href="#catalog" className="hover:text-[#C69A59] transition-colors">The Traveler Pocket Passport</a></li>
              <li><a href="#catalog" className="hover:text-[#C69A59] transition-colors">Ivory Paper Refills (3-Pack)</a></li>
              <li><a href="#catalog" className="hover:text-[#C69A59] transition-colors">Solid Brass Clips & Loops</a></li>
              <li><a href="#catalog" className="hover:text-[#C69A59] transition-colors">Artisan Starter Gift Set</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FAF7F2] mb-4 uppercase tracking-wider">
              Bespoke Atelier
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={onOpenBuilder} className="hover:text-[#C69A59] transition-colors text-left text-[#C69A59] font-bold">
                  ✨ Interactive Folio Configurator
                </button>
              </li>
              <li><a href="#craftsmanship" className="hover:text-[#C69A59] transition-colors">Leather Patina Time-Traveler</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#C69A59] transition-colors">Tuscan Vegetable Tanning</a></li>
              <li><a href="#reviews" className="hover:text-[#C69A59] transition-colors">Customer Journal Reviews</a></li>
              <li><a href="#reviews" className="hover:text-[#C69A59] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FAF7F2] mb-4 uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2.5">
              <li><span>Email: studio@atelierfolio.com</span></li>
              <li><span>Workshop: Via de’ Neri, Florence, Italy</span></li>
              <li><span>Free Global Shipping over $100</span></li>
              <li><span>Lifetime Hardware Guarantee</span></li>
              <li><span>Netlify Static Hosting Ready</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8E0D5]/50">
          <div>
            © {new Date().getFullYear()} Atelier Folio. All rights reserved. Handcrafted for paper lovers.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Netlify Deployment Spec</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy & Cookie Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
