import React from 'react';
import { X, Check, Star, ShieldCheck, MapPin, ShoppingBag } from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-7 shadow-2xl relative border border-stone-200 max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 p-2 rounded-full hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden aspect-square bg-[#fbfbf8] border border-stone-200 relative p-4 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-xl"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#689f38] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details & Specs */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#689f38]">
                {product.brand}
              </span>
              <h3 className="text-xl font-black text-stone-900 leading-tight mt-0.5">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex text-[#f4c430]">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <span className="text-stone-500 font-semibold">({product.reviews} reviews)</span>
                <span className="text-stone-300">•</span>
                <span className="font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                  {product.weight}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-stone-900 font-serif-farm">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Nutritional Spec Grid */}
            {product.protein !== "N/A" && (
              <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Protein</div>
                  <div className="text-xs font-black text-stone-900">{product.protein}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Fat</div>
                  <div className="text-xs font-black text-stone-900">{product.fat}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-bold">Fiber</div>
                  <div className="text-xs font-black text-stone-900">{product.fiber}</div>
                </div>
              </div>
            )}

            {/* Key Features Bullet List */}
            {product.features && (
              <div className="space-y-1.5 pt-1">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-[#689f38] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Warehouse Bay Staging */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#e2a838]" />
                Location: <strong>{product.bayLocation}</strong>
              </span>
              <span className="font-bold text-emerald-700">
                {product.stockCount} Bags Staged
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 bg-[#689f38] hover:bg-[#57882d] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Bag To Order</span>
              </button>
              <a
                href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-xs flex items-center justify-center transition-colors"
                title="Call Store"
              >
                Call
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
