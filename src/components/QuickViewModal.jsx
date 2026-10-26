import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, Star, ShieldCheck, MapPin, ShoppingBag, Phone, PackageCheck, Sparkles } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const savings = product.originalPrice ? (product.originalPrice - product.price).toFixed(2) : null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Dark Blurred Backdrop - Clicking anywhere outside closes modal */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative border border-stone-200/90 z-10 overflow-hidden my-auto animate-in zoom-in-95 fade-in duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Top Bar with Prominent Close Button */}
        <div className="px-4 sm:px-6 py-3 border-b border-stone-100 bg-stone-50/90 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-700">
              Quick View • 847 N Pleasant Ave
            </span>
          </div>

          {/* Top Close Button (Desktop & Mobile accessible) */}
          <button 
            type="button"
            onClick={onClose}
            className="group flex items-center gap-1.5 bg-stone-200/80 hover:bg-stone-900 text-stone-700 hover:text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs active:scale-95"
            aria-label="Close modal"
          >
            <span className="hidden sm:inline text-[11px]">Close</span>
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-start">
            
            {/* Product Image Section */}
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#f8f7f2] border border-stone-200/80 p-3 flex items-center justify-center group shadow-inner">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badges on image */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                {product.badge && (
                  <span className="bg-[#689f38] text-white text-[9.5px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    {product.badge}
                  </span>
                )}
                {product.bestSeller && (
                  <span className="bg-amber-500 text-white text-[9.5px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> Best Seller
                  </span>
                )}
              </div>

              {/* Floating Quick Close on top of Image for immediate mobile tap */}
              <button
                type="button"
                onClick={onClose}
                className="sm:hidden absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-md backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Warehouse Staging tag */}
              <div className="absolute bottom-3 inset-x-3 bg-stone-900/80 backdrop-blur-md text-stone-200 text-[10.5px] font-medium py-1.5 px-2.5 rounded-xl flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#e2a838]" />
                  Bay: <strong className="text-white font-bold">{product.bayLocation || 'A-12'}</strong>
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <PackageCheck className="w-3 h-3" />
                  {product.stockCount} In Stock
                </span>
              </div>
            </div>

            {/* Details & Specs Section */}
            <div className="space-y-3.5">
              <div>
                <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#689f38] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  {product.brand}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-snug mt-1.5">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mt-2 text-xs flex-wrap">
                  <div className="flex text-[#f4c430]">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <span className="text-stone-500 font-semibold">({product.reviews} reviews)</span>
                  <span className="text-stone-300">•</span>
                  <span className="font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md text-[11px]">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Price & Savings */}
              <div className="flex items-baseline gap-2.5 bg-stone-50 p-3 rounded-2xl border border-stone-200/80">
                <span className="text-2xl sm:text-3xl font-black text-[#172316] font-serif-farm">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {savings && (
                  <span className="ml-auto text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Save ${savings}
                  </span>
                )}
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Nutritional Spec Grid */}
              {product.protein !== "N/A" && (
                <div className="grid grid-cols-3 gap-2 bg-[#faf9f5] p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="bg-white py-1.5 rounded-lg border border-stone-100 shadow-2xs">
                    <div className="text-[9.5px] text-stone-400 uppercase font-black">Protein</div>
                    <div className="text-xs font-black text-stone-800">{product.protein}</div>
                  </div>
                  <div className="bg-white py-1.5 rounded-lg border border-stone-100 shadow-2xs">
                    <div className="text-[9.5px] text-stone-400 uppercase font-black">Fat</div>
                    <div className="text-xs font-black text-stone-800">{product.fat}</div>
                  </div>
                  <div className="bg-white py-1.5 rounded-lg border border-stone-100 shadow-2xs">
                    <div className="text-[9.5px] text-stone-400 uppercase font-black">Fiber</div>
                    <div className="text-xs font-black text-stone-800">{product.fiber}</div>
                  </div>
                </div>
              )}

              {/* Key Features Bullet List */}
              {product.features && (
                <div className="space-y-1.5 pt-1">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#689f38] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Pinned Bottom Actions Bar */}
        <div className="p-3.5 sm:p-5 border-t border-stone-100 bg-stone-50/90 flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="flex-1 bg-[#689f38] hover:bg-[#57882d] text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add Bag To Order</span>
          </button>
          
          <a
            href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
            className="px-4 py-3 bg-white hover:bg-stone-100 text-stone-800 font-bold rounded-xl text-xs border border-stone-200 flex items-center justify-center gap-1.5 transition-colors shadow-2xs active:scale-95 cursor-pointer"
            title="Call Store directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#689f38]" />
            <span className="hidden sm:inline">Call Store</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-3 bg-stone-200/80 hover:bg-stone-300 text-stone-700 font-bold rounded-xl text-xs transition-colors cursor-pointer active:scale-95"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
