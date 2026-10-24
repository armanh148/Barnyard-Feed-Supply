import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ChevronRight, 
  ArrowUp, 
  Star, 
  ShieldCheck, 
  Truck,
  ExternalLink
} from 'lucide-react';
import { STORE_DETAILS, FEED_CATEGORIES } from '../data/storeData';

export default function Footer({ onSelectCategory, onOpenInventory, onOpenCalculator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#111710] text-stone-300 relative pt-16 pb-8 border-t-4 border-[#689f38]">
      
      {/* Upper Store Operations & Direct Contact Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#1b261a] rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            
            {/* Store Address & Maps Link */}
            <div className="flex items-start gap-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#689f38]/20 border border-[#689f38]/30 text-[#a5d666] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
                  Store Location
                </h4>
                <p className="text-stone-300 text-xs mt-1 leading-relaxed">
                  {STORE_DETAILS.address}
                </p>
                <a 
                  href={STORE_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#a5d666] font-bold hover:underline mt-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Click-to-Call Phone Number */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-[#689f38]/20 border border-[#689f38]/30 text-[#a5d666] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider">
                  Call The Counter
                </h4>
                <a 
                  href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-lg font-black text-white hover:text-[#a5d666] transition-colors block mt-1"
                >
                  {STORE_DETAILS.phoneFormatted}
                </a>
                <p className="text-[11px] text-stone-400 mt-1">
                  Click-to-call enabled • Curbside loading & stock check
                </p>
              </div>
            </div>

            {/* Store Hours Table */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-[#689f38]/20 border border-[#689f38]/30 text-[#a5d666] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-1">
                  Fresno Store Hours
                </h4>
                <div className="space-y-1 text-xs">
                  {STORE_DETAILS.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-stone-300">
                      <span className="font-medium">{h.days}:</span>
                      <span className="font-bold text-white font-mono">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main 4-Column Footer matching Frutin Reference */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info (Frutin Col 1) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f5c27] to-[#1c3817] flex items-center justify-center text-white font-bold text-xl border border-[#689f38]/40">
                🌾
              </div>
              <span className="text-xl font-black text-white font-serif-farm tracking-tight">
                Barnyard Feed & Supply
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              We provide tested, fresh-milled feeds, premium 3-tie alfalfa hay, 
              and ranch hardware to Fresno County ranches, 4-H clubs, and family farms. 
              Dependable, rugged, and honest service since 1985.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex text-[#f4c430] text-xs">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.7 / 5.0</span>
              <span className="text-[11px] text-stone-400">({STORE_DETAILS.reviewsCount} Fresno Reviews)</span>
            </div>
          </div>

          {/* Col 2: Categories (Frutin Col 2) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Feed Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {FEED_CATEGORIES.slice(1, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#a5d666] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#689f38]" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Tools (Frutin Col 3) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenInventory} className="hover:text-[#a5d666] flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#689f38]" />
                  <span>Live Inventory Lookup</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#a5d666] flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#689f38]" />
                  <span>Standing Order Calculator</span>
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-[#a5d666] flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#689f38]" />
                  <span>About Barnyard Feed</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#a5d666] flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#689f38]" />
                  <span>Fresno Delivery Area</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#a5d666] flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#689f38]" />
                  <span>Customer Reviews</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Dispatch (Frutin Col 4) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contact & Dispatch
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#689f38] shrink-0 mt-0.5" />
                <span>847 N Pleasant Ave, Fresno, CA 93728, USA</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#689f38] shrink-0" />
                <a href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-bold">
                  {STORE_DETAILS.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#689f38] shrink-0" />
                <span>orders@barnyardfeedfresno.com</span>
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-stone-300 block mb-1">
                Accepted Payment at Register & Delivery:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-stone-300">
                <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Visa / MC</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Amex</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Apple Pay</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Ranch Check</span>
                <span className="bg-stone-800 px-2 py-0.5 rounded border border-stone-700">Cash</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching Frutin: Copyright + Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            Copyright © {new Date().getFullYear()} <strong className="text-stone-300">Barnyard Feed & Supply</strong>. 847 N Pleasant Ave, Fresno, CA 93728. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-400">Fresno, California</span>
            
            {/* Scroll to Top Green Circle (Exact match to reference bottom right button) */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#689f38] hover:bg-[#57882d] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
