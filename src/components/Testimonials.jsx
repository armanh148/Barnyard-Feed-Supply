import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, STORE_DETAILS } from '../data/storeData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Frutin Section 10 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
              Verified Fresno Customer Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight mt-1">
              What Valley Ranchers <span className="text-[#689f38]">Say About Us</span>
            </h2>
          </div>

          {/* 4.7 Google Trust Badge */}
          <div className="flex items-center gap-3 bg-[#faf9f5] border border-stone-200 px-4 py-2.5 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#689f38] text-white flex items-center justify-center font-black text-sm">
              4.7★
            </div>
            <div>
              <div className="flex text-[#f4c430] text-xs">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-xs font-bold text-stone-900">101+ Google Reviews</p>
              <p className="text-[10px] text-stone-500">Fresno, CA Community Rated</p>
            </div>
          </div>
        </div>

        {/* Testimonial Box (Direct match to Frutin side-by-side photo + quote + green arrows) */}
        <div className="bg-[#faf9f5] rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Photo Card (Matches customer portrait in reference) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#203a1d] to-[#122310] relative p-5 sm:p-8 flex flex-col justify-between text-white min-h-[280px] sm:min-h-[340px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#a5d666]">
                  Verified Customer
                </span>
                <span className="flex items-center gap-1 text-[11px] text-stone-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#a5d666]" />
                  Fresno County
                </span>
              </div>

              {/* Customer Avatar Frame */}
              <div className="my-6 flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-4 bg-stone-800">
                  <img 
                    src={current.avatar} 
                    alt={current.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-white">{current.name}</h4>
                <p className="text-xs text-stone-300 font-medium">{current.location}</p>
              </div>

              <div className="text-[11px] text-stone-400 text-center">
                {current.date}
              </div>
            </div>

            {/* Right Quote & Pagination Navigation (Matches Frutin right quote layout) */}
            <div className="lg:col-span-7 p-5 sm:p-12 flex flex-col justify-between relative bg-white">
              
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#f4c430] text-sm mb-4">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                {/* Big Quote Symbol */}
                <div className="text-4xl sm:text-5xl font-black text-[#689f38] leading-none mb-3 font-serif-farm">
                  “
                </div>

                {/* Testimonial Title & Quote */}
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {current.title}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic">
                  "{current.quote}"
                </p>
              </div>

              {/* Bottom Pagination & Bright Green Arrow Controls (Exact match to Frutin bottom bar) */}
              <div className="pt-8 mt-6 border-t border-stone-100 flex items-center justify-between">
                
                {/* Slide Counter: 01 / 03 */}
                <div className="text-xl font-extrabold text-stone-800 font-serif-farm">
                  0{currentIndex + 1} <span className="text-stone-300 text-base font-normal">/ 0{TESTIMONIALS.length}</span>
                </div>

                {/* Dual Green Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-xl bg-[#689f38] hover:bg-[#57882d] text-white flex items-center justify-center shadow transition-all active:scale-95"
                    aria-label="Previous Testimonial"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-xl bg-[#689f38] hover:bg-[#57882d] text-white flex items-center justify-center shadow transition-all active:scale-95"
                    aria-label="Next Testimonial"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
