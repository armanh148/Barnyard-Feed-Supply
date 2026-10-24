import React from 'react';
import { CheckCircle2, TrendingUp, Award, Clock, ArrowRight } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function WhyChooseUs({ onOpenInventory, onOpenCalculator }) {
  return (
    <section className="py-20 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Choose Us Copy & Metrics (Matches Frutin Section 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
                Why Choose Barnyard Feed
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight leading-tight">
                The Central Valley's Most Complete <br />
                <span className="text-[#689f38]">Livestock & Poultry</span> Supply
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you are feeding a 50-head cattle herd, conditioning show horses in Clovis, 
              or managing 30 egg-laying hens in your Sanger backyard, we eliminate the guesswork. 
              Our inventory stays fresh with weekly mill deliveries and fast drive-through loading.
            </p>

            {/* Metric Box (Matches the 80% Organic Idea in reference image) */}
            <div className="p-5 bg-[#faf9f5] rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase text-stone-500 tracking-wider">
                    Same-Day Stock Fulfillment Rate
                  </span>
                  <div className="text-3xl font-black text-[#2d5a27] font-serif-farm">
                    99.4%
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg">
                    Always In-Stock
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#689f38] h-full rounded-full w-[99%]" />
              </div>

              {/* Checklist Grid (Matches 3 check bullets in reference) */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-stone-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#689f38] shrink-0" />
                  <span>Licensed Mill Grains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#689f38] shrink-0" />
                  <span>Fresno Metro Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#689f38] shrink-0" />
                  <span>50lb Bags & Hay Bales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#689f38] shrink-0" />
                  <span>Recurring Standing Orders</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button 
                onClick={onOpenCalculator}
                className="bg-[#2d5a27] hover:bg-[#20421c] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Standing Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={onOpenInventory}
                className="text-stone-700 hover:text-[#2d5a27] text-xs font-bold px-4 py-3.5 rounded-full hover:bg-stone-100 transition-colors border border-stone-300 text-center"
              >
                Check Bag Inventory
              </button>
            </div>

          </div>

          {/* Right Column: Circular & Organic Photo Layout (Matches Frutin Section 6 Farmer Layout) */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md">
              
              {/* Backing Circular Ring */}
              <div className="w-64 h-64 min-[400px]:w-72 min-[400px]:h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-50 border-4 border-dashed border-[#689f38]/30 mx-auto flex items-center justify-center p-3 sm:p-4">
                
                {/* Framed Rancher Image */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                    alt="Fresno Rancher inspecting feed quality" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Mini Card: Curbside Loading at 847 N Pleasant */}
              <div className="absolute -bottom-4 left-0 sm:left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3 sm:p-4 border border-stone-200 flex items-center gap-2.5 sm:gap-3 max-w-[240px] sm:max-w-[280px] z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#966b17] flex items-center justify-center font-bold text-lg shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-extrabold text-stone-900 leading-tight">5-Minute Curbside Load</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">We load your truck while you stay in the driver seat.</p>
                </div>
              </div>

              {/* Floating Mini Card: Google Reviews */}
              <div className="absolute top-2 right-1 sm:top-4 sm:right-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-2.5 sm:p-3 border border-stone-200 flex items-center gap-2 sm:gap-2.5 z-10">
                <div className="w-9 h-9 rounded-xl bg-[#689f38] text-white flex items-center justify-center font-extrabold text-xs">
                  4.7★
                </div>
                <div>
                  <p className="text-[11px] font-bold text-stone-900 leading-none">101+ Local Reviews</p>
                  <p className="text-[10px] text-stone-500">Google Verified</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
