import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  Clock, 
  ArrowRight, 
  Phone, 
  Star, 
  MapPin
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';
import aboutRanchImg from '../assets/about-ranch.jpg';

export default function AboutQuality({ onOpenInventory }) {
  const qualityPillars = [
    {
      icon: ShieldCheck,
      iconBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
      title: "100% Fresh Mill Guarantee",
      desc: "Weekly turnaround from California certified mills. Zero dusty bags, zero stale stock."
    },
    {
      icon: Truck,
      iconBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
      title: "Direct Ranch Delivery",
      desc: "Flatbed liftgate service across Fresno & Clovis right inside your barn or feed room."
    },
    {
      icon: Award,
      iconBg: "bg-lime-500/10 text-[#4c7c25] border-lime-500/20",
      title: "Valley Heat-Adapted Rations",
      desc: "High-fat, cool-energy formulations engineered for 105°F+ San Joaquin Valley summers."
    },
    {
      icon: Clock,
      iconBg: "bg-sky-500/10 text-sky-700 border-sky-500/20",
      title: "5-Minute Drive-Thru Loading",
      desc: "Pull up to our Pleasant Ave docks; our warehouse forklift team loads you right away."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#fbfaf6] via-white to-[#f7f5ee] border-b border-stone-200 relative overflow-hidden">
      
      {/* Decorative ambient backdrop lights */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#689f38]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#e5a93b]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Editorial Ranch Visual with Mobile-Safe Spacing */}
          <div className="lg:col-span-6 relative pb-8 sm:pb-10 lg:pb-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backing decorative frames for visual depth */}
              <div className="absolute -top-2.5 -left-2.5 sm:-top-4 sm:-left-4 w-full h-full rounded-3xl border-2 border-[#689f38]/30 -z-10 transform -rotate-1" />
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-2/3 h-2/3 rounded-3xl bg-[#689f38]/6 -z-20 transform rotate-1" />

              {/* Top-Right Floating Trust Badge (Safely contained on mobile) */}
              <div className="absolute -top-3.5 right-1 sm:-top-5 sm:-right-3 bg-gradient-to-r from-[#1a2519] to-[#121c11] text-white px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-2xl shadow-xl border border-[#3b5237] flex items-center gap-2 sm:gap-2.5 z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#293c27] flex items-center justify-center shrink-0 border border-white/10">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9ad068]" />
                </div>
                <div>
                  <p className="text-[10.5px] sm:text-xs font-black tracking-wide leading-tight text-white">100% Certified Mills</p>
                  <p className="text-[9px] sm:text-[10px] text-[#a0c58e] font-semibold">Purina • Nutrena • Bar-ALE</p>
                </div>
              </div>

              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200 aspect-[4/3] sm:aspect-[14/11] relative group">
                <img 
                  src={aboutRanchImg} 
                  alt="Barnyard Feed & Supply California Rancher inspecting golden grain and hay bales" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gentle vignette gradient at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlaid Experience & Trust Seal in Bottom Left (Mobile-safe offset) */}
              <div className="absolute -bottom-6 left-1 sm:-bottom-7 sm:-left-3 bg-gradient-to-br from-[#1a2519]/95 via-[#141e13]/95 to-[#0e160d]/95 backdrop-blur-md text-white p-3 sm:p-4.5 rounded-2xl shadow-2xl border border-white/15 max-w-[215px] sm:max-w-[260px] z-20">
                {/* Star Rating Strip */}
                <div className="flex items-center gap-1.5 mb-1 pb-1 sm:mb-1.5 sm:pb-1.5 border-b border-white/10">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold text-stone-200 truncate">
                    4.7 ({STORE_DETAILS.reviewsCount} Reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="text-2xl sm:text-4xl font-black font-serif-farm leading-none text-[#9ad068] shrink-0">
                    40+
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-[13px] font-extrabold uppercase tracking-wide leading-tight text-white">
                      Years Serving Valley Ag
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] text-stone-300 mt-0.5">
                      Est. 1985 • Fresno, CA
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Floating Stat Chip */}
              <div className="hidden sm:flex absolute -bottom-4 right-3 sm:right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200 items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-[#689f38] animate-pulse"></span>
                <div className="text-[11px] leading-tight">
                  <span className="font-extrabold text-stone-900 block">500+ Local Ranches</span>
                  <span className="text-stone-500">Supplied Weekly</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Copy, 4 Interactive Pillars & Action Bar */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7 pt-2 sm:pt-0">
            
            {/* Tag & Heading */}
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#689f38]/10 border border-[#689f38]/25 text-[#426e1f] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-xs max-w-full">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#689f38] shrink-0" />
                <span className="sm:hidden truncate">About Barnyard • 847 N Pleasant Ave</span>
                <span className="hidden sm:inline">About Barnyard Feed &amp; Supply • 847 N Pleasant Ave, Fresno</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#152214] leading-[1.18] sm:leading-[1.15] tracking-tight">
                High Quality Agriculture &amp;{' '}
                <span className="relative inline-block text-[#689f38]">
                  Proven Livestock
                  <svg 
                    className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-[#689f38]/40" 
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

            {/* 4 Feature Quality Pillars Grid: 1 col on mobile, 2 col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              {qualityPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="group flex items-start gap-3 p-3 sm:p-4 rounded-2xl bg-white/90 hover:bg-white border border-stone-200/90 hover:border-[#689f38]/40 shadow-xs hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${pillar.iconBg}`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-stone-900 text-xs sm:text-sm group-hover:text-[#2d5a27] transition-colors leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pro Rancher Tip Callout */}
            <div className="p-3 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5 sm:gap-3 shadow-xs">
              <span className="text-base sm:text-lg select-none shrink-0">💡</span>
              <p className="text-xs sm:text-[13px] text-amber-950 leading-relaxed">
                <strong>Fresno Rancher Note:</strong> Our feed formulas support cattle, horses, and poultry 
                during extreme Central Valley summer temperatures and dry winter pasture conditions.
              </p>
            </div>

            {/* Action Bar: Touch-Friendly Full-Width on Mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button 
                onClick={() => {
                  const servicesEl = document.getElementById('services') || document.getElementById('catalog');
                  if (servicesEl) {
                    servicesEl.scrollIntoView({ behavior: 'smooth' });
                  } else if (onOpenInventory) {
                    onOpenInventory();
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#689f38] hover:bg-[#57882d] text-white font-extrabold text-xs uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-full shadow-lg shadow-[#689f38]/25 hover:shadow-xl hover:shadow-[#689f38]/35 transition-all group cursor-pointer active:scale-95"
              >
                <span>Discover Our Feeds &amp; Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href={`tel:${STORE_DETAILS.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all border border-stone-200 active:scale-95"
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
