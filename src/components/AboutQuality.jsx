import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  Clock, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  MapPin,
  ChevronRight,
  Wheat
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function AboutQuality({ onOpenInventory }) {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      iconBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
      title: "100% Fresh Mill Guarantee",
      desc: "Direct weekly turnaround from California certified mills. Zero dusty bags, zero stale stock."
    },
    {
      icon: Truck,
      iconBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
      title: "Direct Ranch Delivery",
      desc: "Flatbed liftgate service across Fresno & Clovis. Pallets unloaded right inside your barn or feed room."
    },
    {
      icon: Award,
      iconBg: "bg-lime-500/10 text-[#4c7c25] border-lime-500/20",
      title: "Valley Heat-Adapted Rations",
      desc: "High-fat, cool-energy formulations engineered specifically for 105°F+ San Joaquin Valley summers."
    },
    {
      icon: Clock,
      iconBg: "bg-sky-500/10 text-sky-700 border-sky-500/20",
      title: "5-Minute Drive-Thru Loading",
      desc: "Back your truck into our Pleasant Ave docks; our warehouse forklift team loads you right away."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-[#fbfaf6] via-white to-[#f7f5ee] border-b border-stone-200 relative overflow-hidden">
      
      {/* Decorative ambient backdrop lights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#689f38]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#e5a93b]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Editorial Multi-Image Composition with Overlapping Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backing decorative offset frame */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-full h-full rounded-3xl border-2 border-[#689f38]/30 -z-10 transform -rotate-1.5 transition-transform duration-500 group-hover:rotate-0" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-3xl bg-[#689f38]/5 -z-20 transform rotate-1" />

              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3] sm:aspect-[14/11] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Barnyard Feed & Supply expert checking livestock feed quality" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Natural dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
                
                {/* Micro badge in top left */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/60 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#689f38]" />
                  <span className="text-[11px] font-bold text-stone-800">847 N Pleasant Ave, Fresno</span>
                </div>

                {/* Overlaid Experience & Trust Seal in Bottom Left */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-br from-[#1a2519]/95 via-[#141e13]/95 to-[#0e160d]/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/15 max-w-[270px] sm:max-w-[310px]">
                  
                  {/* Star Rating Strip */}
                  <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/10">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-stone-200">
                      4.7 ({STORE_DETAILS.reviewsCount} Ranch Reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="text-4xl sm:text-5xl font-black font-serif-farm leading-none text-[#9ad068] shrink-0">
                      40+
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wide leading-tight text-white">
                        Years Serving Valley Ag
                      </div>
                      <div className="text-[10px] text-stone-300 mt-0.5">
                        Established 1985 • Fresno, CA
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Inset Badge: Licensed Mills (Top Right) */}
              <div className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 bg-[#1b271a] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#374b34] flex items-center gap-3 z-10 animate-fade-in">
                <div className="w-9 h-9 rounded-xl bg-[#2a3c28] flex items-center justify-center shrink-0 border border-white/10">
                  <Award className="w-5 h-5 text-[#9ad068]" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-wide leading-tight text-white">100% Certified Mills</p>
                  <p className="text-[10.5px] text-[#a0c58e] font-semibold mt-0.5">Purina • Nutrena • Bar-ALE</p>
                </div>
              </div>

              {/* Secondary floating stat chip (Bottom Right) */}
              <div className="hidden sm:flex absolute -bottom-4 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-200 items-center gap-2.5 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#689f38] animate-pulse"></div>
                <div className="text-xs">
                  <span className="font-extrabold text-stone-900">500+ Local Ranches</span>
                  <span className="text-stone-500 ml-1">Supplied Weekly</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Copy, 4 Interactive Pillars & Action Bar */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7">
            
            {/* Tag & Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#689f38]/10 border border-[#689f38]/25 text-[#426e1f] text-xs font-extrabold uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#689f38]"></span>
                About Barnyard Feed &amp; Supply
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#152214] leading-[1.15] tracking-tight">
                High Quality Agriculture &amp;{' '}
                <span className="relative inline-block text-[#689f38]">
                  Proven Livestock
                  <svg 
                    className="absolute -bottom-1.5 left-0 w-full h-2 text-[#689f38]/40" 
                    viewBox="0 0 100 8" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span> Nutrition
              </h2>
            </div>

            {/* Core Story Paragraph */}
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Located at <strong className="text-stone-900 font-bold">847 N Pleasant Ave in Fresno</strong>, 
              Barnyard Feed &amp; Supply has been the dependable backbone for local ranchers, hobby farmers, 
              and livestock families for four decades. We know that healthy herds and flocks begin with 
              uncompromised feed purity, clean grain milling, and proper protein-energy rations tailored 
              to Central Valley terrain.
            </p>

            {/* 4 Feature Quality Pillars Grid (Elevated from 2 basic boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {qualityPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 hover:bg-white border border-stone-200/90 hover:border-[#689f38]/40 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${pillar.iconBg}`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm group-hover:text-[#2d5a27] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-[11.5px] sm:text-xs text-stone-500 mt-1 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pro Rancher Tip Callout */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-3 shadow-xs">
              <span className="text-lg select-none">💡</span>
              <p className="text-xs sm:text-[13px] text-amber-950 leading-relaxed">
                <strong>Fresno Rancher Note:</strong> Our feed formulas are specifically chosen to support cattle, horses, and poultry 
                during extreme Central Valley summer temperatures and dry winter pasture conditions. Ask our team for electrolyte &amp; mineral recommendations!
              </p>
            </div>

            {/* Action Bar: Primary CTA + Instant Call Support */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button 
                onClick={() => {
                  const servicesEl = document.getElementById('services') || document.getElementById('catalog');
                  if (servicesEl) {
                    servicesEl.scrollIntoView({ behavior: 'smooth' });
                  } else if (onOpenInventory) {
                    onOpenInventory();
                  }
                }}
                className="inline-flex items-center gap-2 bg-[#689f38] hover:bg-[#57882d] text-white font-extrabold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-full shadow-lg shadow-[#689f38]/25 hover:shadow-xl hover:shadow-[#689f38]/35 transition-all group cursor-pointer"
              >
                <span>Discover Our Services &amp; Feeds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href={`tel:${STORE_DETAILS.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all border border-stone-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#689f38]" />
                <span>Call {STORE_DETAILS.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
