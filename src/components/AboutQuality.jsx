import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Scale, 
  HeartHandshake 
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function AboutQuality({ onOpenInventory }) {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlaid 40+ Years Green Experience Badge (Matches Reference Section 2) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Backing Accent Border */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#689f38]/30 -z-10 transform -rotate-1" />
              
              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-stone-50 bg-stone-100 aspect-[4/3] sm:aspect-[14/11] relative">
                <img 
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=900&q=80" 
                  alt="Barnyard Feed & Supply expert checking livestock feed quality" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlaid Green Badge in Bottom Left (Exact match to reference "25+ Years" badge) */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-[#689f38] text-white p-3.5 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 max-w-[220px] sm:max-w-[260px] border border-white/20">
                  <div className="text-3xl sm:text-4xl font-black font-serif-farm leading-none">
                    40+
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight text-white/95">
                    Years Serving Central Valley Agriculture
                  </div>
                </div>
              </div>

              {/* Secondary floating trust badge top right */}
              <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 bg-[#1f3820] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg border border-[#3e5f35] flex items-center gap-2 z-10">
                <Award className="w-5 h-5 text-[#f4c430]" />
                <div>
                  <p className="text-xs font-bold leading-none">100% Licensed Mills</p>
                  <p className="text-[10px] text-stone-300">Purina • Nutrena • Bar-ALE</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy, 2 Feature Icons & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#689f38]"></span>
                About Barnyard Feed & Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] leading-tight">
                High Quality Agriculture & <br />
                <span className="text-[#689f38]">Proven Livestock</span> Nutrition
              </h2>
            </div>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Located on <strong className="text-stone-900">847 N Pleasant Ave in Fresno</strong>, 
              Barnyard Feed & Supply has been the dependable backbone for local ranchers, hobby farmers, 
              and livestock families for four decades. We know that healthy herds and flocks begin with 
              uncompromised feed purity, clean grain milling, and proper protein-energy rations.
            </p>

            {/* 2 Feature Badges (Matches reference layout directly) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-[#2d5a27] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm">100% Quality Guaranteed</h4>
                  <p className="text-xs text-stone-500 mt-1">Fresh mill turnover ensures no stale or moldy feed bags.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-[#966b17] shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm">Direct Ranch Delivery</h4>
                  <p className="text-xs text-stone-500 mt-1">Full pallet & tote flatbed drop-offs straight to your barn.</p>
                </div>
              </div>
            </div>

            {/* Explanatory bullet list */}
            <p className="text-xs text-stone-500 italic bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
              💡 <strong>Fresno Rancher Note:</strong> Our feed formulas are specifically chosen to support livestock 
              during extreme Central Valley summer temperatures and dry winter pasture conditions.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a 
                href="#services"
                className="inline-flex items-center gap-2 bg-[#689f38] hover:bg-[#57882d] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow hover:shadow-md transition-all group"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
