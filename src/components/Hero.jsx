import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Truck, 
  Star, 
  Package, 
  Check, 
  MapPin,
  CalendarCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function Hero({ onOpenInventory, onOpenCalculator, onRequestDelivery }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f6f0] via-[#faf9f5] to-white pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 border-b border-stone-200">
      
      {/* Decorative background wheat & nature accents */}
      <div className="absolute top-10 left-5 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Floating subtle background watermark grain */}
      <div className="hidden sm:block absolute right-0 top-1/4 opacity-[0.03] select-none pointer-events-none text-[160px] lg:text-[220px] font-black leading-none font-serif-farm">
        FEED
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Bold Headline & 3 Required Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#24501e] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#689f38] animate-ping" />
              <span className="truncate">Fresno County's Premier Feed Depot & Supply</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#a16b14] font-semibold shrink-0">Est. 1985</span>
            </div>

            {/* Giant Responsive Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-[#172316] tracking-tight leading-[1.12]">
              TESTED & PROVEN <br />
              <span className="text-[#689f38] relative inline-block">
                LIVESTOCK FEED
                <svg className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#689f38]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
              <br />
              <span className="text-stone-800 font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                FOR VALLEY RANCHES
              </span>
            </h1>

            {/* Sub-description with store highlights */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Serving horse ranches, cattle producers, backyard poultry keepers, and dairy operations 
              across Fresno and the Central Valley. Direct barn drop delivery, fast curbside loading at 
              <strong className="text-stone-900 font-bold"> 847 N Pleasant Ave</strong>, and automated recurring ranch standing orders.
            </p>

            {/* Key Value Badges (Responsive 1/2/3 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-left">
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-[#2d5a27] shrink-0 font-bold text-xs">
                  ✓
                </div>
                <span className="text-xs font-bold text-stone-800 leading-tight">Fresh Mill Sourced Inventory</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-[#9c6a12] shrink-0 font-bold text-xs">
                  🚚
                </div>
                <span className="text-xs font-bold text-stone-800 leading-tight">Fresno Metro & Valley Delivery</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur p-2.5 sm:p-3 rounded-xl border border-stone-200 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-[#2d5a27] shrink-0 font-bold text-xs">
                  ★
                </div>
                <span className="text-xs font-bold text-stone-800 leading-tight">4.7 Rating (101+ Local Reviews)</span>
              </div>
            </div>

            {/* Required Primary CTA Buttons: Responsive Flex (Call Store, Browse Feed Inventory, Request Local Delivery) */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-3">
              
              {/* 1. Browse Feed Inventory */}
              <a 
                href="#catalog"
                className="inline-flex items-center justify-center gap-2.5 bg-[#689f38] hover:bg-[#58892d] text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wide group"
              >
                <span>Browse Feed Inventory</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </a>

              {/* 2. Request Local Delivery */}
              <button 
                onClick={onRequestDelivery || onOpenCalculator}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2d4825] hover:bg-[#20371a] text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wide border border-[#446d37]"
              >
                <Truck className="w-4 h-4 text-[#a5d666] shrink-0" />
                <span>Request Local Delivery</span>
              </button>

              {/* 3. Call Store */}
              <a 
                href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 text-stone-800 hover:text-[#2d5a27] font-extrabold text-sm px-5 py-3.5 rounded-full hover:bg-stone-100 transition-colors border border-stone-300 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#689f38] shrink-0" />
                <span>Call Store: (559) 486-7333</span>
              </a>
            </div>

            {/* Quick stats footer under hero */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-stone-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#689f38] shrink-0" /> 50lb & 25lb standard bags
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#689f38] shrink-0" /> Pallet ton totes & 3-tie hay
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#689f38] shrink-0" /> 5-minute curbside load
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Mobile-Safe Floating Trust Badges */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Circular backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#689f38]/30 to-[#e2a838]/20 rounded-full blur-2xl transform scale-95" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=900&q=80" 
                  alt="Barnyard Feed & Supply Central Valley Rancher with livestock feed" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Bottom image overlay banner */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                        🌾
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-stone-900 truncate">Barnyard Feed Loading Bay</p>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 truncate">847 N Pleasant Ave • Curbside & Forklift</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2 sm:px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap">
                      READY TO LOAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 4.7 Star Local Trust (Mobile responsive positioning) */}
              <div className="absolute top-3 left-3 sm:-top-4 sm:-left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-2.5 sm:p-3 border border-stone-100 flex items-center gap-2 sm:gap-3 z-10">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#689f38] text-white flex items-center justify-center font-black text-xs sm:text-sm shrink-0">
                  4.7★
                </div>
                <div className="pr-1 sm:pr-2">
                  <div className="flex items-center text-[#f4c430] text-[10px] sm:text-xs">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <p className="text-[11px] sm:text-xs font-extrabold text-stone-900 leading-tight">101+ Google Reviews</p>
                  <p className="text-[9px] sm:text-[10px] text-stone-500 leading-tight">Fresno Community Trusted</p>
                </div>
              </div>

              {/* Floating Badge 2: Live Stock Count (Mobile responsive positioning) */}
              <button 
                onClick={onOpenInventory}
                className="absolute top-3 right-3 sm:-top-3 sm:-right-3 bg-[#1e2e1a]/95 backdrop-blur-sm text-white rounded-2xl shadow-xl p-2.5 sm:p-3 border border-[#3e5f35] text-left hover:scale-105 transition-transform z-10"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a5d666]" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-300">Warehouse Stock</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-white mt-0.5">500+ Bags Live</p>
                <span className="text-[9px] sm:text-[10px] text-[#a5d666] underline">Tap to lookup bag counts →</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
