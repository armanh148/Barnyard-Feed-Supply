import React from 'react';
import { 
  ArrowDown, 
  Check, 
  Wheat, 
  Leaf, 
  Dog, 
  Sparkles,
  Boxes
} from 'lucide-react';

// Custom precision SVG for Horse & Livestock
function HorseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 19c-1-3.5-3-6-6-7-.5-1.5-.5-3.5 0-5-2 0-3.5 1-4.5 2.5C7.5 6 5.5 8 4.5 11.5c-1 3-1 6 0 7.5l3-1c1 2 2.5 3 4.5 3 4 0 7.5-2 7-5Z" />
      <path d="M5.5 14h3" />
      <circle cx="9" cy="9.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

// Custom precision SVG for Poultry & Game Bird
function PoultryIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 11c0-4-3-7-7-7S2 7 2 11c0 2.5 1.2 4.8 3.2 6.1L4 21l4-2c.7.4 1.5.6 2.3.7C15 19.8 16 15.6 16 11Z" />
      <circle cx="11" cy="7.5" r="0.8" fill="currentColor" />
      <path d="M19 6l3 2-3 2" />
    </svg>
  );
}

// Custom precision SVG for Mineral & Salt Tub
function MineralIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export default function CategoryFilterBar({ activeCategory, onSelectCategory }) {
  const categories = [
    { 
      id: "all", 
      name: "All Feeds & Supplies", 
      icon: Wheat,
      accentColor: "text-amber-400 group-hover:text-amber-300",
      activeAccent: "text-amber-300",
      count: "12 In Stock",
      detail: "Full Ranch Inventory"
    },
    { 
      id: "horse-livestock", 
      name: "Horse & Livestock Feed", 
      icon: HorseIcon,
      accentColor: "text-orange-400 group-hover:text-orange-300",
      activeAccent: "text-orange-300",
      count: "Sweet / Pellets",
      detail: "Equine & Cattle Rations"
    },
    { 
      id: "poultry", 
      name: "Poultry & Game Bird", 
      icon: PoultryIcon,
      accentColor: "text-rose-400 group-hover:text-rose-300",
      activeAccent: "text-rose-300",
      count: "Layer & Scratch",
      detail: "Egg Layer & Crumbles"
    },
    { 
      id: "hay-forage", 
      name: "Hay, Straw & Forage", 
      icon: Leaf,
      accentColor: "text-emerald-400 group-hover:text-emerald-300",
      activeAccent: "text-emerald-300",
      count: "3-Tie & Shavings",
      detail: "Alfalfa, Orchard, Straw"
    },
    { 
      id: "pet-small-animal", 
      name: "Pet & Small Animal", 
      icon: Dog,
      accentColor: "text-amber-300 group-hover:text-amber-200",
      activeAccent: "text-amber-200",
      count: "Working Dog 26/18",
      detail: "Kennel & Barn Pet Food"
    },
    { 
      id: "hardware-supplements", 
      name: "Farm Hardware & Minerals", 
      icon: MineralIcon,
      accentColor: "text-cyan-300 group-hover:text-cyan-200",
      activeAccent: "text-cyan-200",
      count: "Salt & Tubs",
      detail: "Lick Tubs & Fencing"
    }
  ];

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fbfaf6] via-[#f7f5ee] to-[#f2eee3] border-b border-stone-200 relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-44 bg-[#689f38]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-80 h-40 bg-[#e5a93b]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#689f38]/12 border border-[#689f38]/30 text-[#497523] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#689f38] animate-pulse"></span>
            Fresno County Ranch Categories
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#172316] tracking-tight leading-[1.18] sm:leading-tight">
            Quality Feeds, Hay &amp;{' '}
            <span className="relative inline-block text-[#689f38]">
              Ranch Supplies
              <svg 
                className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 text-[#689f38]/40" 
                viewBox="0 0 100 8" 
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed pt-1">
            Select an animal or supply category below to view bag counts, prices, and specs.
          </p>
        </div>

        {/* Mastercrafted Dark Category Bar Container */}
        <div className="bg-gradient-to-b from-[#182317] via-[#121b11] to-[#0c120a] rounded-2xl sm:rounded-3xl p-2.5 sm:p-4.5 shadow-[0_25px_60px_-15px_rgba(20,35,18,0.4)] border border-[#2c3d29] ring-1 ring-white/10">
          
          {/* Responsive Grid: 2 columns on mobile, 3 on tablet, 6 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  type="button"
                  className={`group relative flex flex-col items-center justify-between p-2.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-center cursor-pointer select-none overflow-hidden active:scale-95 ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#4d7f25] via-[#416d1e] to-[#345718] text-white shadow-xl shadow-[#345718]/45 ring-1 ring-[#9ad068]/70 border border-[#8bc34a]/40 scale-[1.02] z-10' 
                      : 'bg-[#1b2519]/80 hover:bg-[#243222] text-stone-300 hover:text-white border border-white/6 hover:border-[#689f38]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40'
                  }`}
                >
                  {/* Subtle top indicator line on active card */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-2 sm:inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-[#c6e872] to-transparent rounded-full" />
                  )}

                  {/* Icon Tile with bespoke illumination */}
                  <div 
                    className={`w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-1.5 sm:mb-2.5 ${
                      isActive 
                        ? 'bg-white/15 text-white ring-1 ring-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]' 
                        : 'bg-[#253222] group-hover:bg-[#2e3e2b] border border-white/6 shadow-inner'
                    }`}
                  >
                    <IconComp className={`w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-colors ${isActive ? 'text-white' : cat.accentColor}`} />
                  </div>

                  {/* Category Name */}
                  <span className="text-[11.5px] sm:text-[13px] font-bold leading-tight min-h-[2rem] sm:min-h-[2.25rem] flex items-center justify-center text-center px-0.5 sm:px-1">
                    {cat.name}
                  </span>

                  {/* Bottom Chip / Spec Tag */}
                  <div className="mt-1.5 sm:mt-2.5 flex items-center gap-1">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 rounded-full text-[9.5px] sm:text-[10.5px] font-bold bg-black/25 text-[#dcf0a4] border border-white/15 shadow-inner">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                        {cat.count}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 rounded-full text-[9.5px] sm:text-[10.5px] font-semibold bg-black/35 text-stone-400 group-hover:text-stone-200 border border-white/5 transition-colors">
                        {cat.count}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Master status & action bar: Optimized for mobile single-tap */}
          <div className="mt-3.5 pt-3 sm:mt-4 sm:pt-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 px-1 sm:px-2 text-xs">
            
            {/* Left status badge */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8bc34a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#8bc34a]"></span>
              </span>
              <span className="text-[11px] sm:text-xs text-stone-400 truncate">
                Filter: <strong className="text-white font-bold">{currentCategory.name}</strong>
                <span className="hidden md:inline text-stone-400 ml-1.5">• {currentCategory.detail}</span>
              </span>
            </div>

            {/* Right jump button: Full-width on mobile */}
            <button
              onClick={() => {
                const catalogEl = document.getElementById('catalog');
                if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] sm:text-xs text-[#b8e986] hover:text-white font-bold transition-all border border-white/10 cursor-pointer active:scale-95 group"
            >
              <span>Scroll to live products &amp; pricing</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
