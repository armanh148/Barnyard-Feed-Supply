import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Layers, 
  Package, 
  Check, 
  AlertCircle, 
  Warehouse, 
  ArrowUpDown, 
  X, 
  PhoneCall, 
  Clock, 
  CheckCircle2,
  CalendarCheck,
  Scale,
  Sparkles,
  ShoppingBag,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS, STORE_DETAILS, FEED_CATEGORIES } from '../data/storeData';

export default function InventoryDashboardSection({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockStatusFilter, setStockStatusFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all'); // all, 50lb, 25lb, other
  const [viewMode, setViewMode] = useState('matrix'); // 'matrix' (side-by-side standard sizes) or 'table' (warehouse master table)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  const categoryOptions = [
    { id: 'all', label: 'All Livestock Feeds & Supplies' },
    { id: 'horse-livestock', label: 'Horse & Livestock Feed' },
    { id: 'poultry', label: 'Poultry & Game Bird' },
    { id: 'pet-small-animal', label: 'Pet & Small Animal' },
    { id: 'hardware-supplements', label: 'Farm Hardware & Supplements' },
    { id: 'hay-forage', label: 'Hay, Straw & Forage' }
  ];

  const sizeOptions = [
    { id: 'all', label: 'All Bag Sizes & Packings' },
    { id: '50lb', label: 'Standard 50 lb Bags' },
    { id: '25lb', label: 'Standard 25 lb Bags' },
    { id: 'other', label: 'Bales & Heavy Tubs' }
  ];
  
  // Hold Bag Modal State
  const [selectedProductForHold, setSelectedProductForHold] = useState(null);
  const [selectedBagSize, setSelectedBagSize] = useState('50 lb Bag');
  const [holdQuantity, setHoldQuantity] = useState(2);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [holdSuccessMessage, setHoldSuccessMessage] = useState(null);

  // Extended inventory details for desktop view
  const inventoryData = useMemo(() => {
    return PRODUCTS.map((prod) => {
      const size50 = prod.sizes?.find(s => s.size.includes('50 lb')) || null;
      const size25 = prod.sizes?.find(s => s.size.includes('25 lb')) || null;
      const otherSize = prod.sizes?.find(s => !s.size.includes('50 lb') && !s.size.includes('25 lb')) || null;

      return {
        ...prod,
        sku: `BY-${prod.id.replace('feed-', '847-')}`,
        size50,
        size25,
        otherSize,
        palletStock: Math.floor(prod.stockCount / 40),
        lastRestocked: "Oct 21, 2026",
        minThreshold: 10
      };
    });
  }, []);

  // Filtered inventory based on search, category, stock status, and size
  const filteredInventory = useMemo(() => {
    return inventoryData.filter((item) => {
      const matchSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.bayLocation.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;

      const matchStock = 
        stockStatusFilter === 'all' ? true :
        stockStatusFilter === 'in-stock' ? item.stockCount >= 10 :
        stockStatusFilter === 'low-stock' ? item.stockCount < 10 : true;

      const matchSize = 
        sizeFilter === 'all' ? true :
        sizeFilter === '50lb' ? item.size50 !== null :
        sizeFilter === '25lb' ? item.size25 !== null :
        sizeFilter === 'other' ? (item.size50 === null && item.size25 === null) : true;

      return matchSearch && matchCategory && matchStock && matchSize;
    });
  }, [inventoryData, searchTerm, categoryFilter, stockStatusFilter, sizeFilter]);

  // Aggregate stats
  const total50lbBags = useMemo(() => {
    return inventoryData.reduce((acc, item) => acc + (item.size50?.stockCount || 0), 0);
  }, [inventoryData]);

  const total25lbBags = useMemo(() => {
    return inventoryData.reduce((acc, item) => acc + (item.size25?.stockCount || 0), 0);
  }, [inventoryData]);

  const handleOpenHoldModal = (item, defaultSizeName = '50 lb Bag') => {
    setSelectedProductForHold(item);
    setSelectedBagSize(defaultSizeName);
    setHoldQuantity(2);
  };

  const handleConfirmHold = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setHoldSuccessMessage({
      product: selectedProductForHold.name,
      size: selectedBagSize,
      quantity: holdQuantity,
      pickupWindow: "24 Hours (Hold Bay 847-N)",
      name: customerName,
      phone: customerPhone,
      holdCode: `HLD-${Math.floor(1000 + Math.random() * 9000)}`
    });

    setTimeout(() => {
      setSelectedProductForHold(null);
      setHoldSuccessMessage(null);
      setCustomerName('');
      setCustomerPhone('');
      setHoldQuantity(2);
    }, 4500);
  };

  return (
    <section id="inventory-tracker" className="py-20 bg-[#f7f6f0] border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#214a1a] text-xs font-bold uppercase tracking-wider mb-2">
              <Warehouse className="w-3.5 h-3.5" />
              <span>Fresno Warehouse Floor Operations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
              Feed Bag <span className="text-[#689f38]">Inventory Dashboard</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              Live bag counts across standard sizes (<strong>50lb & 25lb bags</strong>, bales & tubs), 
              warehouse bay coordinates, and pallet staging at 847 N Pleasant Ave.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-white border border-stone-300 px-3 py-1.5 rounded-xl font-bold text-stone-700 shadow-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Synced: 2 mins ago
            </span>
            <div className="bg-stone-200 p-1 rounded-xl flex items-center text-xs font-bold">
              <button
                onClick={() => setViewMode('matrix')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'matrix' ? 'bg-white text-[#214a1a] shadow-xs' : 'text-stone-600'
                }`}
              >
                Standard Sizes (50lb vs 25lb)
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'table' ? 'bg-white text-[#214a1a] shadow-xs' : 'text-stone-600'
                }`}
              >
                Warehouse Bay Table
              </button>
            </div>
          </div>
        </div>

        {/* Live Metrics Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              50lb Standard Bags
            </span>
            <div className="text-2xl font-black text-[#214a1a] font-serif-farm mt-0.5">
              {total50lbBags} <span className="text-xs text-stone-500 font-sans font-bold">in stock</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              25lb Standard Bags
            </span>
            <div className="text-2xl font-black text-[#689f38] font-serif-farm mt-0.5">
              {total25lbBags} <span className="text-xs text-stone-500 font-sans font-bold">in stock</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              Alfalfa & Shavings Bales
            </span>
            <div className="text-2xl font-black text-amber-700 font-serif-farm mt-0.5">
              325+ <span className="text-xs text-stone-500 font-sans font-bold">ready</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              Curbside Staging Dock
            </span>
            <div className="text-sm font-black text-stone-800 flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Bay 1 & Bay 2 Ready</span>
            </div>
          </div>
        </div>

        {/* Dashboard Control Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-stone-200 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Lookup SKU, Feed Name, Brand, or Bay..."
                className="w-full pl-9 pr-4 py-2.5 bg-stone-50 rounded-xl text-xs font-medium border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#689f38]"
              />
            </div>

            {/* Custom Category Dropdown */}
            <div className="md:col-span-4 relative">
              <button
                type="button"
                onClick={() => {
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                  setIsSizeDropdownOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-stone-50 hover:bg-white rounded-xl text-xs font-semibold text-stone-700 border border-stone-200 hover:border-[#689f38] focus:outline-none flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <span className="truncate">
                  {categoryOptions.find(c => c.id === categoryFilter)?.label || 'All Livestock Feeds & Supplies'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180 text-[#689f38]' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <>
                  <div 
                    onClick={() => setIsCategoryDropdownOpen(false)} 
                    className="fixed inset-0 z-40" 
                  />
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-64 overflow-y-auto">
                    {categoryOptions.map((opt) => {
                      const isSelected = categoryFilter === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setCategoryFilter(opt.id);
                            setIsCategoryDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer text-left ${
                            isSelected 
                              ? 'bg-emerald-50 text-[#244c1f] font-bold' 
                              : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                          }`}
                        >
                          <span className="truncate">{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#689f38] stroke-[2.5] shrink-0 ml-1.5" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Custom Size Filter Dropdown */}
            <div className="md:col-span-3 relative">
              <button
                type="button"
                onClick={() => {
                  setIsSizeDropdownOpen(!isSizeDropdownOpen);
                  setIsCategoryDropdownOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-stone-50 hover:bg-white rounded-xl text-xs font-semibold text-stone-700 border border-stone-200 hover:border-[#689f38] focus:outline-none flex items-center justify-between transition-all cursor-pointer select-none"
              >
                <span className="truncate">
                  {sizeOptions.find(s => s.id === sizeFilter)?.label || 'All Bag Sizes & Packings'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform duration-200 ${isSizeDropdownOpen ? 'rotate-180 text-[#689f38]' : ''}`} />
              </button>

              {isSizeDropdownOpen && (
                <>
                  <div 
                    onClick={() => setIsSizeDropdownOpen(false)} 
                    className="fixed inset-0 z-40" 
                  />
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {sizeOptions.map((opt) => {
                      const isSelected = sizeFilter === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSizeFilter(opt.id);
                            setIsSizeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer text-left ${
                            isSelected 
                              ? 'bg-emerald-50 text-[#244c1f] font-bold' 
                              : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                          }`}
                        >
                          <span className="truncate">{opt.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#689f38] stroke-[2.5] shrink-0 ml-1.5" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>

        {/* View Mode 1: Standard Sizes (50lb vs 25lb) Matrix View */}
        {viewMode === 'matrix' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {filteredInventory.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-stone-400 font-bold bg-stone-100 px-2 py-0.5 rounded">
                      {item.sku}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      📍 {item.bayLocation}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200"
                    />
                    <div>
                      <h4 className="font-extrabold text-stone-900 text-sm leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-semibold mt-0.5">
                        {item.brand} • {item.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>

                  {/* Standard Bag Sizes Breakdown: 50lb vs 25lb */}
                  <div className="bg-[#faf9f5] rounded-2xl p-3 border border-stone-200 space-y-2.5 mb-4">
                    <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Live Bag Counts by Standard Size
                    </div>

                    {/* 50lb Bag Row */}
                    {item.size50 ? (
                      <div className="flex items-center justify-between text-xs pb-1.5 border-b border-stone-200/60">
                        <div className="flex items-center gap-1.5 font-bold text-stone-800">
                          <span className="w-2 h-2 rounded-full bg-[#689f38]"></span>
                          <span>50 lb Bag</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-black text-stone-900">
                            ${item.size50.price.toFixed(2)}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            item.size50.stockCount < 10 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {item.size50.stockCount} in stock
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {/* 25lb Bag Row */}
                    {item.size25 ? (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-stone-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>25 lb Bag</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-black text-stone-900">
                            ${item.size25.price.toFixed(2)}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            item.size25.stockCount < 10 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {item.size25.stockCount} in stock
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {/* Specialty Bales / Tubs */}
                    {!item.size50 && !item.size25 ? (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-stone-700">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>{item.weight}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-black text-stone-900">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className="px-2 py-0.5 rounded-full font-bold text-[11px] bg-emerald-100 text-emerald-800">
                            {item.stockCount} in stock
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleOpenHoldModal(item, item.size50 ? '50 lb Bag' : item.weight)}
                    className="flex-1 py-2 px-3 rounded-xl bg-stone-100 hover:bg-[#ebf4e6] text-[#214a1a] font-bold text-xs transition-colors border border-stone-200 hover:border-[#689f38] text-center"
                  >
                    Hold Bags (24h)
                  </button>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="py-2 px-3.5 rounded-xl bg-[#689f38] hover:bg-[#58892d] text-white font-bold text-xs transition-all flex items-center gap-1 shadow-xs"
                    title="Add to order"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>+ Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Master Warehouse Desktop Table */
          <div className="bg-white rounded-3xl shadow-xs border border-stone-200 overflow-hidden">
            <div className="md:hidden px-4 py-2 bg-stone-100 text-stone-500 text-[11px] font-semibold flex items-center justify-between border-b border-stone-200">
              <span>👉 Swipe table to see all bays & counts</span>
              <span className="font-mono text-stone-600">847 N Pleasant</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-100/80 border-b border-stone-200 text-stone-600 font-extrabold uppercase tracking-wider">
                    <th className="py-4 px-4 sm:px-6">Feed Item & Brand</th>
                    <th className="py-4 px-4">Warehouse Bay</th>
                    <th className="py-4 px-4 text-center">50lb Bag Stock</th>
                    <th className="py-4 px-4 text-center">25lb Bag Stock</th>
                    <th className="py-4 px-4 text-center">Pallets Staged</th>
                    <th className="py-4 px-4">Price / Unit</th>
                    <th className="py-4 px-4 text-right pr-6">Curbside Hold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredInventory.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-50/80 transition-colors group">
                      
                      {/* Name & SKU */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-10 h-10 rounded-lg object-cover bg-stone-100 shrink-0"
                          />
                          <div>
                            <div className="font-extrabold text-stone-900 group-hover:text-[#2d5a27] text-xs sm:text-sm">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-stone-400 font-mono">
                              SKU: {item.sku} • {item.brand}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Bay Location */}
                      <td className="py-4 px-4 font-mono font-bold text-stone-800 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200/60">
                          📍 {item.bayLocation}
                        </span>
                      </td>

                      {/* 50lb Bag Stock */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {item.size50 ? (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs ${
                            item.size50.stockCount < 10 
                              ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}>
                            <span className={`w-2 h-2 rounded-full ${item.size50.stockCount < 10 ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
                            {item.size50.stockCount} Bags
                          </span>
                        ) : (
                          <span className="text-stone-400 text-[11px]">—</span>
                        )}
                      </td>

                      {/* 25lb Bag Stock */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        {item.size25 ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs bg-stone-100 text-stone-700 border border-stone-200">
                            {item.size25.stockCount} Bags
                          </span>
                        ) : (
                          <span className="text-stone-400 text-[11px]">—</span>
                        )}
                      </td>

                      {/* Pallet Staging */}
                      <td className="py-4 px-4 text-center font-bold text-stone-600 whitespace-nowrap">
                        {item.palletStock > 0 ? (
                          <span className="text-stone-700 font-semibold">
                            {item.palletStock} Pallet{item.palletStock > 1 ? 's' : ''}
                          </span>
                        ) : (
                          <span className="text-stone-400 text-[11px]">Partial Pallet</span>
                        )}
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="text-sm font-black text-stone-900 font-serif-farm">
                          ${item.price.toFixed(2)}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right pr-6 whitespace-nowrap">
                        <button
                          onClick={() => handleOpenHoldModal(item, item.size50 ? '50 lb Bag' : item.weight)}
                          className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#ebf4e6] text-[#214a1a] font-bold text-xs transition-colors border border-stone-200 hover:border-[#689f38]"
                        >
                          Hold Bags
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 24-Hour Curbside Hold Bag Modal */}
        {selectedProductForHold && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-7 shadow-2xl relative border border-stone-200 max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedProductForHold(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#689f38] mb-1">
                <Warehouse className="w-4 h-4" />
                <span>24-Hour Curbside Bag Reservation</span>
              </div>

              <h3 className="text-xl font-black text-stone-900 mb-1">
                Hold Bags at 847 N Pleasant Ave
              </h3>
              <p className="text-xs text-stone-500 mb-5">
                We stage your feed in our curbside bay for 24 hours. No upfront payment required; pay upon truck drive-up loading.
              </p>

              {holdSuccessMessage ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-extrabold text-emerald-900">
                    Bags Staged Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Reservation <strong>{holdSuccessMessage.holdCode}</strong> created for <strong>{holdSuccessMessage.name}</strong>.
                    Staging <strong>{holdSuccessMessage.quantity}x {holdSuccessMessage.size}</strong> of {holdSuccessMessage.product}.
                  </p>
                  <p className="text-[11px] text-emerald-700 font-medium">
                    Pick up at 847 N Pleasant Ave within 24 hours. Direct line: (559) 486-7333.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmHold} className="space-y-4">
                  
                  {/* Selected Item Review */}
                  <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 flex items-center gap-3">
                    <img 
                      src={selectedProductForHold.image} 
                      alt={selectedProductForHold.name} 
                      className="w-12 h-12 rounded-xl object-cover bg-white"
                    />
                    <div>
                      <div className="text-xs font-extrabold text-stone-900 leading-tight">
                        {selectedProductForHold.name}
                      </div>
                      <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                        Warehouse Location: {selectedProductForHold.bayLocation}
                      </div>
                    </div>
                  </div>

                  {/* Bag Size Selector */}
                  {selectedProductForHold.sizes && (
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">
                        Select Standard Bag Size:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProductForHold.sizes.map((s, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setSelectedBagSize(s.size)}
                            className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all ${
                              selectedBagSize === s.size
                                ? 'bg-[#214a1a] text-white border-[#214a1a]'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                            }`}
                          >
                            <div>{s.size}</div>
                            <div className={`text-[10px] font-normal ${selectedBagSize === s.size ? 'text-emerald-200' : 'text-stone-500'}`}>
                              ${s.price.toFixed(2)} • {s.stockCount} in stock
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Stepper */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Number of Bags to Hold:
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setHoldQuantity(Math.max(1, holdQuantity - 1))}
                        className="w-9 h-9 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-sm"
                      >
                        -
                      </button>
                      <span className="font-mono font-black text-stone-900 text-base w-8 text-center">
                        {holdQuantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setHoldQuantity(holdQuantity + 1)}
                        className="w-9 h-9 rounded-xl bg-[#689f38] hover:bg-[#58892d] text-white font-bold text-sm"
                      >
                        +
                      </button>
                      <span className="text-xs text-stone-500 font-medium ml-2">
                        Max 20 bags per online hold ticket
                      </span>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Rancher / Customer Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Clint Henderson"
                        className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#689f38]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Phone (for Bay SMS / Call) *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(559) 000-0000"
                        className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#689f38]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#689f38] hover:bg-[#58892d] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Confirm 24-Hour Hold</span>
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-stone-500">
                    Need instant forklift assistance? Call <a href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-[#2d5a27] underline">(559) 486-7333</a>
                  </div>

                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
