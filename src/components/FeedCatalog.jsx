import React, { useState, useMemo } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Eye, 
  Check, 
  AlertTriangle, 
  Search, 
  Filter,
  Package,
  Layers,
  Sparkles,
  Wheat,
  Leaf,
  Dog,
  Boxes,
  SlidersHorizontal,
  RefreshCw,
  ChevronDown,
  X
} from 'lucide-react';
import { PRODUCTS, FEED_CATEGORIES } from '../data/storeData';

// Custom precision SVG for Horse
function HorseIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 19c-1-3.5-3-6-6-7-.5-1.5-.5-3.5 0-5-2 0-3.5 1-4.5 2.5C7.5 6 5.5 8 4.5 11.5c-1 3-1 6 0 7.5l3-1c1 2 2.5 3 4.5 3 4 0 7.5-2 7-5Z" />
      <path d="M5.5 14h3" />
      <circle cx="9" cy="9.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

// Custom precision SVG for Poultry
function PoultryIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 11c0-4-3-7-7-7S2 7 2 11c0 2.5 1.2 4.8 3.2 6.1L4 21l4-2c.7.4 1.5.6 2.3.7C15 19.8 16 15.6 16 11Z" />
      <circle cx="11" cy="7.5" r="0.8" fill="currentColor" />
      <path d="M19 6l3 2-3 2" />
    </svg>
  );
}

export default function FeedCatalog({ 
  activeCategory, 
  onSelectCategory, 
  onAddToCart, 
  onOpenQuickView,
  onOpenInventory 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { id: 'popular', label: 'Most Popular' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'stock', label: 'Highest Stock Count' }
  ];

  const categoryIconMap = {
    'all': { icon: Wheat, accent: 'text-amber-500' },
    'horse-livestock': { icon: HorseIcon, accent: 'text-orange-500' },
    'poultry': { icon: PoultryIcon, accent: 'text-rose-500' },
    'hay-forage': { icon: Leaf, accent: 'text-emerald-500' },
    'pet-small-animal': { icon: Dog, accent: 'text-amber-600' },
    'hardware-supplements': { icon: Boxes, accent: 'text-cyan-600' }
  };

  const currentCategoryObj = FEED_CATEGORIES.find(c => c.id === activeCategory) || FEED_CATEGORIES[0];
  const ActiveIcon = (categoryIconMap[activeCategory] || categoryIconMap['all']).icon;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory = 
        activeCategory === 'all' || 
        product.category === activeCategory ||
        (activeCategory === 'horse-livestock' && (product.category === 'horse' || product.category === 'cattle' || product.category === 'horse-livestock')) ||
        (activeCategory === 'pet-small-animal' && (product.category === 'pet' || product.category === 'pet-small-animal')) ||
        (activeCategory === 'hardware-supplements' && (product.category === 'supplies' || product.category === 'hardware-supplements')) ||
        (activeCategory === 'hay-forage' && (product.category === 'hay' || product.category === 'hay-forage'));
      // Search match
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.weight.toLowerCase().includes(searchQuery.toLowerCase());
      // Stock match
      const matchesStock = inStockOnly ? product.stockStatus === 'in-stock' : true;

      return matchesCategory && matchesSearch && matchesStock;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'stock') return b.stockCount - a.stockCount;
      return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    });
  }, [activeCategory, searchQuery, inStockOnly, sortBy]);

  return (
    <section id="catalog" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
            Products & Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            Feed & Supply <span className="text-[#689f38]">Inventory Catalog</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Wholesale-direct ranch prices on 50lb feed bags, high-protein pellets, and premium 3-tie hay. 
            All items available for curbside pickup or Fresno valley delivery.
          </p>
        </div>

        {/* Unified Search & Category Dropdown Filter Bar */}
        <div className="bg-[#faf9f5] rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-10 border border-stone-200/90 shadow-sm relative z-30">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
            
            {/* 1. Category Dropdown Selector */}
            <div className="relative w-full lg:w-80 shrink-0">
              <label className="block text-[11px] font-black uppercase tracking-wider text-stone-500 mb-1 px-1">
                Category Filter:
              </label>
              
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-white rounded-xl border border-stone-300 hover:border-[#689f38] text-stone-800 text-xs sm:text-sm font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer select-none"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ActiveIcon className="w-3.5 h-3.5 text-[#689f38]" />
                  </span>
                  <span className="truncate">{currentCategoryObj?.name || 'All Feeds & Supplies'}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="bg-[#689f38] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                    {currentCategoryObj?.count || PRODUCTS.length}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-[#689f38]' : ''}`} />
                </div>
              </button>

              {/* Dropdown Menu Popover */}
              {isCategoryOpen && (
                <>
                  <div 
                    onClick={() => setIsCategoryOpen(false)} 
                    className="fixed inset-0 z-40" 
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-80 overflow-y-auto">
                    <div className="px-3.5 py-1.5 text-[10px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1 flex items-center justify-between">
                      <span>Select Category</span>
                      <span>Total In Stock</span>
                    </div>
                    {FEED_CATEGORIES.map((cat) => {
                      const isSelected = activeCategory === cat.id;
                      const meta = categoryIconMap[cat.id] || { icon: Package, accent: 'text-stone-500' };
                      const ItemIcon = meta.icon;
                      const count = cat.count || (cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length);

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            onSelectCategory(cat.id);
                            setIsCategoryOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold transition-colors cursor-pointer text-left ${
                            isSelected 
                              ? 'bg-emerald-50/90 text-[#244c1f]' 
                              : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#689f38] text-white' : 'bg-stone-100 text-stone-500'
                            }`}>
                              <ItemIcon className="w-3.5 h-3.5" />
                            </span>
                            <span className="truncate">{cat.name}</span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              isSelected ? 'bg-emerald-200/80 text-emerald-900' : 'bg-stone-100 text-stone-500'
                            }`}>
                              {count}
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#689f38] stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* 2. Search Box */}
            <div className="relative flex-1">
              <label className="block text-[11px] font-black uppercase tracking-wider text-stone-500 mb-1 px-1">
                Search Catalog:
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 50lb bags, sweet feed, pellets, hay..."
                  className="w-full pl-9 pr-8 py-2.5 bg-white rounded-xl text-xs sm:text-sm font-medium border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#689f38] focus:border-transparent shadow-2xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* 3. In-Stock Checkbox & Sort Dropdown */}
            <div className="flex items-center gap-3 shrink-0 pt-1 lg:pt-5 justify-between lg:justify-end">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-bold text-stone-700 bg-white px-3.5 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 shadow-2xs">
                <input 
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#689f38] focus:ring-[#689f38] border-stone-300 accent-[#689f38] cursor-pointer"
                />
                <span className="whitespace-nowrap">In-Stock Only</span>
              </label>

              {/* Custom Sort Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="bg-white border border-stone-300 hover:border-[#689f38] rounded-xl px-3 py-2.5 text-xs text-stone-800 font-bold focus:outline-none shadow-2xs cursor-pointer flex items-center gap-2 select-none"
                >
                  <span className="text-stone-400 font-normal">Sort:</span>
                  <span className="whitespace-nowrap">{sortOptions.find(s => s.id === sortBy)?.label || 'Most Popular'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180 text-[#689f38]' : ''}`} />
                </button>

                {isSortOpen && (
                  <>
                    <div 
                      onClick={() => setIsSortOpen(false)} 
                      className="fixed inset-0 z-40" 
                    />
                    <div className="absolute top-full right-0 mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                      {sortOptions.map((opt) => {
                        const isSelected = sortBy === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setSortBy(opt.id);
                              setIsSortOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer text-left ${
                              isSelected 
                                ? 'bg-emerald-50 text-[#244c1f] font-bold' 
                                : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#689f38] stroke-[2.5]" />}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Active Filter Strip & Reset Action */}
          <div className="mt-3.5 pt-3 border-t border-stone-200/80 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Showing:</span>
              <strong className="text-stone-900 font-extrabold">
                {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
              </strong>
              {activeCategory !== 'all' && (
                <span className="bg-[#689f38]/12 text-[#3b671b] px-2.5 py-0.5 rounded-full font-bold text-[11px] border border-[#689f38]/30 inline-flex items-center gap-1.5">
                  <span>Category: {currentCategoryObj?.name}</span>
                  <button 
                    onClick={() => onSelectCategory('all')} 
                    className="hover:text-red-600 cursor-pointer"
                    title="Clear category filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {inStockOnly && (
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold text-[11px]">
                  In-Stock Only
                </span>
              )}
              {searchQuery && (
                <span className="bg-stone-200/80 text-stone-800 px-2 py-0.5 rounded-full font-semibold text-[11px]">
                  Keyword: "{searchQuery}"
                </span>
              )}
            </div>

            {(activeCategory !== 'all' || inStockOnly || searchQuery) && (
              <button
                onClick={() => {
                  onSelectCategory('all');
                  setInStockOnly(false);
                  setSearchQuery('');
                }}
                className="text-stone-500 hover:text-red-600 flex items-center gap-1 transition-colors cursor-pointer text-xs font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-stone-200">
            <p className="text-base font-bold text-stone-700">No feed items found matching your filters.</p>
            <p className="text-xs text-stone-500 mt-1">Try clearing your search query or selecting "All Feeds & Supplies".</p>
            <button 
              onClick={() => { setSearchQuery(''); onSelectCategory('all'); setInStockOnly(false); }}
              className="mt-4 px-4 py-2 rounded-full bg-[#689f38] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col justify-between group relative hover:-translate-y-1"
              >
                {/* Ribbon Tag */}
                {product.badge && (
                  <div className={`absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${
                    product.badge === 'BEST SELLER' 
                      ? 'bg-[#689f38] text-white' 
                      : product.badge === 'LOW STOCK'
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-800 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}

                <div>
                  {/* Rounded Image Frame with Cart Button */}
                  <div className="rounded-2xl overflow-hidden aspect-square bg-[#fbfbf8] mb-4 relative flex items-center justify-center p-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Add to Order Quick Circle Button */}
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-stone-900 hover:bg-[#689f38] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                      title="Add Bag to Order"
                      aria-label="Add Bag to Order"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>

                    {/* Quick View Button */}
                    <button 
                      onClick={() => onOpenQuickView(product)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 flex items-center justify-center shadow transition-transform hover:scale-105"
                      title="Quick Specs Sheet"
                      aria-label="Quick Specs Sheet"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Brand & Weight */}
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-bold mb-1">
                    <span>{product.brand}</span>
                    <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                      {product.weight}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-extrabold text-stone-900 text-sm leading-snug line-clamp-2 group-hover:text-[#2d5a27] transition-colors">
                    {product.name}
                  </h3>

                  {/* 5 Gold Stars Rating */}
                  <div className="flex items-center gap-1.5 my-2">
                    <div className="flex text-[#f4c430] text-xs">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-500 font-semibold">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Nutritional specs chips */}
                  {product.protein !== "N/A" && (
                    <div className="flex items-center gap-2 text-[10px] text-stone-600 font-semibold mb-3">
                      <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
                        Protein: {product.protein}
                      </span>
                      <span className="bg-stone-100 px-2 py-0.5 rounded">
                        Fat: {product.fat}
                      </span>
                    </div>
                  )}

                  {/* Stock status indicator: In Stock vs Low Stock */}
                  <div className="text-[11px] flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                    {product.stockStatus === 'in-stock' ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>In Stock • {product.stockCount} Bags ({product.bayLocation})</span>
                      </span>
                    ) : (
                      <span className="text-amber-700 font-bold flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-md">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Low Stock • {product.stockCount} Left ({product.bayLocation})</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Price Pill & Add Button */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-lg font-black text-stone-900 font-serif-farm">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-stone-400 line-through ml-1.5">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#689f38] hover:bg-[#57882d] text-white text-xs font-bold px-4 py-2 rounded-full shadow hover:shadow-md transition-all flex items-center gap-1"
                  >
                    <span>+ Add Bag</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Live inventory lookup link */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#faf9f5] border border-stone-200 px-6 py-4 rounded-2xl shadow-sm">
            <span className="text-xs text-stone-600 font-medium">
              Need live counts across standard 50lb vs 25lb bags and warehouse bay coordinates?
            </span>
            <button 
              onClick={onOpenInventory}
              className="text-xs font-bold text-white bg-[#2d5a27] hover:bg-[#1f401a] px-4 py-2 rounded-xl transition-colors shadow"
            >
              Open Live Bag Inventory Dashboard →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
