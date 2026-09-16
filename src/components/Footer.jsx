import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenBuilder }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1A1816] text-[#F6F3ED] pt-20 pb-12 border-t border-[#332F2B]">
      <div className="container mx-auto px-4">
        {/* Newsletter Box */}
        <div className="bg-[#26221E] rounded-2xl p-8 sm:p-12 mb-16 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="forme-pill bg-white/10 text-[#C69A59] border-white/20 mb-2">
              Studio Newsletter
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2">
              Stay Connected With The Studio
            </h3>
            <p className="text-xs text-[#8E857C] font-light">
              Receive updates on new leather hide batches, paper refills, and early access.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[300px]">
            {subscribed ? (
              <div className="bg-[#4B5944]/30 border border-[#4B5944] text-[#C69A59] text-xs p-4 rounded-xl text-center">
                Welcome to FORME Studio. Check your inbox for code <strong>ATELIER10</strong>.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1A1816] border border-white/20 text-xs px-4 py-3 rounded-full text-white placeholder-[#8E857C] focus:outline-none focus:border-[#C69A59] flex-1"
                />
                <button type="submit" className="btn-forme-primary bg-[#C69A59] border-[#C69A59] text-[#1A1816] text-xs py-3 px-5">
                  Subscribe ↗
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Top Logo & Statement */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight block mb-2">
              FORME
            </span>
            <p className="font-serif text-xl italic text-[#8E857C] font-light">
              A little structure. A lot of soul.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs font-semibold uppercase tracking-wider text-[#8E857C] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 text-xs text-[#8E857C]">
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">The Folios</h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="hover:text-white transition-colors">The Everyday (A6)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">The Daybook (A5)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">The Big Picture (A4)</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Paper Refill Inserts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Our Studio</h4>
            <ul className="space-y-2">
              <li><a href="#our-world" className="hover:text-white transition-colors">Our World & Craft</a></li>
              <li>
                <button onClick={onOpenBuilder} className="hover:text-white text-left transition-colors text-[#C69A59]">
                  Studio Configurator ↗
                </button>
              </li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><span>studio@forme-folio.com</span></li>
              <li><span>Florence & London</span></li>
              <li><span>Deploy Target: Netlify Hosting</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#8E857C] gap-4">
          <div>
            © {new Date().getFullYear()} FORME Studio. An independent leather folio studio.
          </div>
          <div>
            Netlify Deployment Ready • Pure Vite + React Client
          </div>
        </div>
      </div>
    </footer>
  );
}
