import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ExternalLink, 
  ChevronDown, 
  ShieldCheck, 
  Truck,
  Sparkles 
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function StoreInfoBar() {
  const [hoursOpen, setHoursOpen] = useState(false);

  return (
    <section className="bg-[#1c2e1b] text-white border-y border-[#2d4825] py-4 sm:py-5 shadow-lg relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          
          {/* 1. Address & Google Maps link */}
          <div className="flex items-start gap-3.5 bg-black/25 p-3.5 rounded-2xl border border-white/10 hover:border-[#689f38]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#689f38]/20 text-[#a5d666] flex items-center justify-center shrink-0 border border-[#689f38]/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#a5d666]">
                  Store Location
                </span>
                <span className="text-[10px] text-stone-400 shrink-0">Fresno, CA</span>
              </div>
              <p className="text-xs font-bold text-white truncate mt-0.5" title={STORE_DETAILS.address}>
                847 N Pleasant Ave
              </p>
              <a 
                href={STORE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#e5a93b] font-bold hover:underline mt-1"
              >
                <span>Get Directions & Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 2. Direct Click-to-Call Phone Button */}
          <div className="flex items-start gap-3.5 bg-black/25 p-3.5 rounded-2xl border border-white/10 hover:border-[#689f38]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#689f38]/20 text-[#a5d666] flex items-center justify-center shrink-0 border border-[#689f38]/30">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#a5d666]">
                  Counter Phone
                </span>
                <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-1.5 py-0.2 rounded font-mono font-bold shrink-0">
                  Call Only
                </span>
              </div>
              <a 
                href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="text-sm font-black text-white hover:text-[#a5d666] transition-colors block mt-0.5"
              >
                {STORE_DETAILS.phoneFormatted}
              </a>
              <span className="text-[11px] text-stone-300 block truncate">
                Direct Line • Instant Bag Staging
              </span>
            </div>
          </div>

          {/* 3. Store Hours Bar with Expandable Drawer */}
          <div className="relative flex flex-col justify-between">
            <button 
              onClick={() => setHoursOpen(!hoursOpen)}
              className="w-full h-full flex items-start gap-3.5 bg-black/25 p-3.5 rounded-2xl border border-white/10 hover:border-[#689f38]/50 text-left transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#689f38]/20 text-[#a5d666] flex items-center justify-center shrink-0 border border-[#689f38]/30">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#a5d666]">
                    Today's Hours
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                </div>
                <p className="text-xs font-bold text-white mt-0.5">
                  Open Today: 8 AM – 6 PM
                </p>
                <div className="flex items-center gap-1 text-[11px] text-[#e5a93b] font-semibold mt-1">
                  <span>{hoursOpen ? 'Hide Schedule' : 'View All 7 Days'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoursOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </button>

            {/* Weekly Schedule Dropdown / Accordion */}
            {hoursOpen && (
              <div className="mt-2 lg:absolute lg:left-0 lg:right-0 lg:top-full bg-stone-900 border border-stone-700 rounded-2xl p-4 shadow-2xl z-30 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-[#a5d666] font-bold">
                  <span>Fresno Store Hours</span>
                  <span className="text-[10px] text-stone-400">Loading Bay Open</span>
                </div>
                {STORE_DETAILS.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-1 text-stone-300">
                    <span className="font-medium">{h.days}</span>
                    <span className="font-bold text-white font-mono">{h.hours}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-stone-800 text-[10px] text-stone-400 italic">
                  Forklift curbside assistance available during all open hours.
                </div>
              </div>
            )}
          </div>

          {/* 4. Trust Badge Element: 4.7-Star Rating & 101 Reviews */}
          <div className="flex items-start gap-3.5 bg-black/25 p-3.5 rounded-2xl border border-white/10 hover:border-[#689f38]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#689f38] text-white flex items-center justify-center shrink-0 font-black text-sm shadow-md">
              4.7★
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center text-[#f4c430] text-xs">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-xs font-extrabold text-white mt-0.5">
                101+ Google Reviews
              </p>
              <p className="text-[11px] text-[#a5d666] font-semibold truncate">
                Local Fresno Community Trust
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
