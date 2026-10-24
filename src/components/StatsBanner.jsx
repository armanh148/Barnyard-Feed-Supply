import React from 'react';
import { STORE_STATS } from '../data/storeData';

export default function StatsBanner() {
  return (
    <section className="bg-[#5c8e31] text-white py-10 relative overflow-hidden shadow-inner">
      {/* Decorative leaf / grain subtle pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Feature Card (Matches the cabbage/product circular card in reference) */}
          <div className="lg:col-span-5 flex items-center gap-4 bg-[#4e7d28] p-5 rounded-2xl border border-white/20 shadow-md">
            <div className="w-16 h-16 rounded-2xl bg-white text-[#2d5a27] flex items-center justify-center text-3xl shadow-md shrink-0">
              🌾
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white tracking-wide">
                Central Valley High Quality Feeds
              </h3>
              <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                Direct-from-mill turnover, climate-balanced electrolyte rations, and zero compromised stock. 
                Stacking Fresno barns with confidence since 1985.
              </p>
            </div>
          </div>

          {/* Right 4 Stats (Exact match to 36+, 30+, 1250+, 18+ layout in reference) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
            {STORE_STATS.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-white/25 pl-3 sm:pl-5">
                <div className="text-2xl sm:text-4xl font-black font-serif-farm text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-emerald-100 font-medium">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
