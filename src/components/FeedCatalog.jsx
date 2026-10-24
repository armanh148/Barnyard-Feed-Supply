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
  Sparkles
} from 'lucide-react';
import { PRODUCTS, FEED_CATEGORIES } from '../data/storeData';

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

        {/* Filterable Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {FEED_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#689f38] text-white shadow-md scale-105'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id ? 'bg-white/25 text-white' : 'bg-stone-200 text-stone-600'
              }`}>
                {cat.count || (cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length)}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Utility Bar */}
        <div className="bg-[#faf9f5] rounded-2xl p-4 mb-10 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feed name, brand, or animal..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl text-xs font-medium border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#689f38] focus:border-transparent"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end text-xs font-semibold">
            <label className="flex items-center gap-2 cursor-pointer select-none text-stone-700">
              <input 
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded text-[#689f38] focus:ring-[#689f38] border-stone-300 accent-[#689f38]"
              />
              <span>In-Stock Only</span>
            </label>

            <div className="flex items-center gap-2">
              <span className="text-stone-500">Sort:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-800 font-medium focus:outline-none focus:ring-1 focus:ring-[#689f38]"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="stock">Highest Stock Count</option>
              </select>
            </div>
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
