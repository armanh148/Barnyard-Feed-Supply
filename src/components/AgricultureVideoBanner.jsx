import React, { useState } from 'react';
import { Play, ArrowRight, X, Check, MapPin, Truck } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function AgricultureVideoBanner({ onOpenCalculator }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative py-20 bg-[#1e481b] text-white overflow-hidden">
      {/* Background landscape image with rich green overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80" 
          alt="Central Valley Fresno Farmland" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#173815] via-[#214f1d]/90 to-[#193d17]/80" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA (Matches layout in reference section 9) */}
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-white/10">
              Central Valley Agriculture Strong
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-serif-farm">
              Agriculture & Ranching Matters <br />
              <span className="text-[#a5d666]">To The Future Of Fresno</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              From family 4-H projects to 500-head commercial pastures, dependable feed supply 
              is non-negotiable. We maintain guaranteed in-stock counts, bulk pallet discounts, 
              and friendly flatbed delivery straight to your barn door.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a 
                href="#catalog"
                className="inline-flex items-center gap-2 bg-[#689f38] hover:bg-[#57882d] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <span>Browse Feed Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all border border-white/20"
              >
                <span>Schedule Pallet Drop</span>
              </button>
            </div>
          </div>

          {/* Right Play Button & "Watch the video" Label (Exact match to Frutin circular play button) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <button 
              onClick={() => setShowVideoModal(true)}
              className="w-20 h-20 rounded-full bg-white hover:bg-emerald-100 text-[#1e481b] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group mb-3"
              aria-label="Watch Fresno Store Tour Video"
            >
              <Play className="w-8 h-8 fill-[#1e481b] translate-x-0.5 group-hover:scale-105 transition-transform" />
            </button>
            <span className="text-sm font-serif-farm font-bold tracking-wide italic text-white/90">
              Watch Store & Mill Tour
            </span>
            <span className="text-xs text-stone-300 mt-0.5">847 N Pleasant Ave Loading Bay</span>
          </div>

        </div>
      </div>

      {/* Video Modal Walkthrough */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full p-4 sm:p-6 text-white relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full bg-stone-800 hover:bg-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#a5d666] text-xs font-bold uppercase tracking-wider mb-2">
              <Truck className="w-4 h-4" />
              <span>Fresno Facility & Loading Operations</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              Tour Barnyard Feed & Supply • Fresno, CA
            </h3>

            {/* Simulated Video Player with High Quality Presentation */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-950 mb-4 border border-stone-800 flex items-center justify-center group">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=1000&q=80" 
                alt="Facility Tour" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#689f38] text-white flex items-center justify-center text-2xl shadow-lg mb-3">
                  🌾
                </div>
                <h4 className="text-base font-bold text-white">Full-Service Central Valley Feed Depot</h4>
                <p className="text-xs text-stone-300 max-w-md mt-1">
                  Watch our forklift operators load 50lb bags and 3-tie alfalfa directly into customer pickup beds and trailers at 847 N Pleasant Ave.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span>Store Hours: Mon-Fri 8am-6pm • Sat 8am-5pm</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-stone-400 pt-2">
              <span>Need bulk offloading? Call (559) 486-7333</span>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="px-4 py-2 bg-[#689f38] text-white font-bold rounded-xl text-xs hover:bg-[#57882d]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
