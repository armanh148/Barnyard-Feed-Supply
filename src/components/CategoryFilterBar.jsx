import React from 'react';

export default function CategoryFilterBar({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: "all", name: "All Feeds & Supplies", emoji: "🌾", count: "12 In Stock" },
    { id: "horse-livestock", name: "Horse & Livestock Feed", emoji: "🐎", count: "Sweet / Pellets" },
    { id: "poultry", name: "Poultry & Game Bird", emoji: "🐔", count: "Layer & Scratch" },
    { id: "hay-forage", name: "Hay, Straw & Forage", emoji: "🌿", count: "3-Tie & Shavings" },
    { id: "pet-small-animal", name: "Pet & Small Animal", emoji: "🐕", count: "Working Dog 26/18" },
    { id: "hardware-supplements", name: "Farm Hardware & Minerals", emoji: "🧂", count: "Salt & Tubs" }
  ];

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
            Fresno County Ranch Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            Quality Feeds, Hay & <span className="text-[#689f38]">Ranch Supplies</span>
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
            Select an animal or supply category below to instantly view current bag counts, prices, and specs.
          </p>
        </div>

        {/* Sleek Dark Category Pill Bar */}
        <div className="bg-[#1b231a] rounded-3xl p-3 sm:p-4 shadow-xl border border-stone-800">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] py-3.5 px-3 rounded-2xl transition-all duration-200 shrink-0 text-center ${
                    isActive 
                      ? 'bg-[#689f38] text-white shadow-lg scale-105 ring-2 ring-white/30' 
                      : 'bg-[#252f23] hover:bg-[#2d3a2b] text-stone-300 hover:text-white'
                  }`}
                >
                  <span className="text-2xl mb-1.5 filter drop-shadow-xs">{cat.emoji}</span>
                  <span className="text-xs font-bold leading-tight line-clamp-1">{cat.name}</span>
                  <span className={`text-[10px] mt-0.5 ${isActive ? 'text-white/80' : 'text-stone-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
