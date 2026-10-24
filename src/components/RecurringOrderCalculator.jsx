import React, { useState, useMemo } from 'react';
import { 
  CalendarClock, 
  Truck, 
  PackageCheck, 
  Percent, 
  Phone, 
  CheckCircle2, 
  Printer, 
  Send, 
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { PRODUCTS, STORE_DETAILS } from '../data/storeData';

export default function RecurringOrderCalculator() {
  const [frequency, setFrequency] = useState('bi-weekly'); // weekly, bi-weekly, monthly, one-time
  const [fulfillmentType, setFulfillmentType] = useState('delivery'); // curbside, delivery
  const [ranchTaxExempt, setRanchTaxExempt] = useState(true); // CA Farm Bureau / Ag Feed tax exemption
  
  // Feed bag order items state
  const [selectedQuantities, setSelectedQuantities] = useState({
    'feed-01': 4, // 4 bags layer pellets
    'feed-02': 2, // 2 bags horse feed
    'feed-03': 6, // 6 bales alfalfa
    'feed-05': 2, // 2 bags scratch
    'feed-09': 4  // 4 bales shavings
  });

  const [customerName, setCustomerName] = useState('');
  const [customerRanch, setCustomerRanch] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Available selectable items
  const popularFeedItems = PRODUCTS.slice(0, 8);

  const updateQuantity = (id, delta) => {
    setSelectedQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Calculations
  const orderSummary = useMemo(() => {
    let subtotal = 0;
    let totalBagsOrBales = 0;
    let estimatedWeightLbs = 0;
    const itemsList = [];

    popularFeedItems.forEach(item => {
      const qty = selectedQuantities[item.id] || 0;
      if (qty > 0) {
        const itemTotal = qty * item.price;
        subtotal += itemTotal;
        totalBagsOrBales += qty;
        
        // Approximate weight
        let weightPerUnit = 50;
        if (item.id === 'feed-03') weightPerUnit = 105;
        if (item.id === 'feed-08') weightPerUnit = 250;
        if (item.id === 'feed-09') weightPerUnit = 35;
        estimatedWeightLbs += (qty * weightPerUnit);

        itemsList.push({
          ...item,
          quantity: qty,
          totalPrice: itemTotal
        });
      }
    });

    // 5% Recurring discount for standing orders (weekly, bi-weekly, monthly)
    const discountRate = frequency !== 'one-time' ? 0.05 : 0;
    const discountAmount = subtotal * discountRate;
    const discountedSubtotal = subtotal - discountAmount;

    // Delivery fee logic: Free curbside pickup; Fresno delivery is $20 or FREE over $250
    let deliveryFee = 0;
    if (fulfillmentType === 'delivery') {
      deliveryFee = discountedSubtotal >= 250 ? 0 : 20;
    }

    // CA Ag Sales Tax (Livestock feed is largely exempt in CA for animals producing food/fiber or breeding)
    const taxRate = ranchTaxExempt ? 0 : 0.0835;
    const estimatedTax = discountedSubtotal * taxRate;

    const totalEstimate = discountedSubtotal + deliveryFee + estimatedTax;

    return {
      itemsList,
      totalBagsOrBales,
      estimatedWeightLbs,
      subtotal,
      discountRate,
      discountAmount,
      deliveryFee,
      estimatedTax,
      totalEstimate
    };
  }, [selectedQuantities, frequency, fulfillmentType, ranchTaxExempt]);

  const handleSubmitStandingOrder = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setOrderSubmitted(true);
  };

  const handlePrintManifest = () => {
    window.print();
  };

  return (
    <section id="ranch-calculator" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <CalendarClock className="w-4 h-4 text-amber-700" />
            <span>Commercial Ranchers & Small Homesteads</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            Recurring Ranch Order & <span className="text-[#689f38]">POS Calculator</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Configure your scheduled feed supply drops, lock in 5% standing order savings, 
            and calculate instant bulk weights and delivery estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feed Bag Selector & Schedule Parameters */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Schedule Frequency */}
            <div className="bg-[#faf9f5] rounded-3xl p-6 border border-stone-200">
              <h3 className="text-xs font-black uppercase text-stone-500 tracking-wider mb-3 flex items-center justify-between">
                <span>1. Select Order Cadence</span>
                <span className="text-[#689f38] font-bold">5% Standing Discount</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'weekly', label: 'Weekly Drop', desc: 'Every 7 Days' },
                  { id: 'bi-weekly', label: 'Every 2 Weeks', desc: 'Most Popular' },
                  { id: 'monthly', label: 'Monthly Bulk', desc: 'Full Pallets' },
                  { id: 'one-time', label: 'One-Time', desc: 'No Recurring' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setFrequency(opt.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      frequency === opt.id
                        ? 'bg-[#2d5a27] text-white border-[#2d5a27] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{opt.label}</div>
                    <div className={`text-[10px] mt-0.5 ${frequency === opt.id ? 'text-emerald-100' : 'text-stone-400'}`}>
                      {opt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fulfillment Method */}
            <div className="bg-[#faf9f5] rounded-3xl p-6 border border-stone-200">
              <h3 className="text-xs font-black uppercase text-stone-500 tracking-wider mb-3">
                2. Choose Delivery or Pickup
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setFulfillmentType('delivery')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    fulfillmentType === 'delivery'
                      ? 'bg-white border-[#689f38] ring-2 ring-[#689f38]/20 shadow-sm'
                      : 'bg-white/80 border-stone-200 text-stone-600'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    fulfillmentType === 'delivery' ? 'bg-[#689f38] text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-stone-900">Fresno Valley Delivery</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Flatbed drop directly into barn. <strong>FREE over $250</strong> (or $20).
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setFulfillmentType('curbside')}
                  className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    fulfillmentType === 'curbside'
                      ? 'bg-white border-[#689f38] ring-2 ring-[#689f38]/20 shadow-sm'
                      : 'bg-white/80 border-stone-200 text-stone-600'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    fulfillmentType === 'curbside' ? 'bg-[#689f38] text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-stone-900">Curbside Drive-Up Load</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      847 N Pleasant Ave • Free forklift / staff truck loading.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Feed Item Quantity Steppers */}
            <div className="bg-[#faf9f5] rounded-3xl p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black uppercase text-stone-500 tracking-wider">
                  3. Select Bags, Bales & Mineral Tubs
                </h3>
                <span className="text-[11px] text-stone-500 font-bold">
                  {orderSummary.totalBagsOrBales} Units Configured
                </span>
              </div>

              <div className="space-y-3">
                {popularFeedItems.map((item) => {
                  const qty = selectedQuantities[item.id] || 0;
                  return (
                    <div 
                      key={item.id}
                      className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200 flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-11 h-11 rounded-xl object-cover shrink-0 bg-stone-100"
                        />
                        <div>
                          <div className="font-extrabold text-stone-900 text-xs sm:text-sm leading-tight">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-stone-500 flex items-center gap-2 mt-0.5">
                            <span>{item.weight}</span>
                            <span>•</span>
                            <span className="font-bold text-stone-700">${item.price.toFixed(2)} / unit</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-sm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center font-mono font-black text-stone-900 text-sm">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg bg-[#689f38] hover:bg-[#57882d] text-white flex items-center justify-center font-bold text-sm transition-colors shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: POS Receipt & Submission Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-800">
              
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#689f38] text-white flex items-center justify-center font-bold">
                    🌾
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-white">Barnyard Order POS</h3>
                    <p className="text-[10px] text-stone-400">Fresno Standing Order Estimate</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-[#a5d666]">
                  {frequency.toUpperCase()}
                </span>
              </div>

              {/* Order Items Breakdown */}
              <div className="py-4 space-y-2.5 max-h-52 overflow-y-auto pr-1 text-xs">
                {orderSummary.itemsList.length === 0 ? (
                  <p className="text-stone-500 text-center py-4 text-xs italic">
                    No feed items selected yet. Tap '+' on the left to add bags.
                  </p>
                ) : (
                  orderSummary.itemsList.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-stone-300">
                      <div className="truncate pr-2">
                        <span className="text-white font-bold">{item.quantity}×</span> {item.name}
                      </div>
                      <div className="font-mono text-white whitespace-nowrap">
                        ${item.totalPrice.toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Tonnage / Weight Stat */}
              <div className="p-3 bg-stone-800/80 rounded-2xl flex items-center justify-between text-xs mb-4">
                <span className="text-stone-400">Total Weight Estimate:</span>
                <span className="font-bold text-[#a5d666] font-mono">
                  ~{orderSummary.estimatedWeightLbs.toLocaleString()} lbs ({(orderSummary.estimatedWeightLbs / 2000).toFixed(2)} Tons)
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-2 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">${orderSummary.subtotal.toFixed(2)}</span>
                </div>

                {orderSummary.discountAmount > 0 && (
                  <div className="flex justify-between text-[#a5d666] font-bold">
                    <span>Standing Order Discount (5%):</span>
                    <span className="font-mono">-${orderSummary.discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Delivery ({fulfillmentType === 'curbside' ? 'Curbside Pickup' : 'Fresno Metro'}):</span>
                  <span className="font-mono text-white">
                    {orderSummary.deliveryFee === 0 ? 'FREE' : `$${orderSummary.deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-stone-400">
                    <input 
                      type="checkbox"
                      checked={ranchTaxExempt}
                      onChange={(e) => setRanchTaxExempt(e.target.checked)}
                      className="w-3.5 h-3.5 rounded text-[#689f38] accent-[#689f38]"
                    />
                    <span>CA Farm / Livestock Exemption</span>
                  </label>
                  <span className="font-mono text-white">${orderSummary.estimatedTax.toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t border-stone-700 flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-black text-white">Estimated Cycle Total:</span>
                    <p className="text-[10px] text-stone-400">Billed per {frequency} delivery cycle</p>
                  </div>
                  <span className="text-2xl font-black text-[#a5d666] font-mono">
                    ${orderSummary.totalEstimate.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Order Form Modal / Trigger */}
              {orderSubmitted ? (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-950 border border-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#a5d666] mx-auto" />
                  <h4 className="text-sm font-bold text-white">Standing Order Manifest Received!</h4>
                  <p className="text-xs text-stone-300">
                    Thank you, <strong>{customerName}</strong>. Our dispatch team will call you at <strong>{customerPhone}</strong> to confirm your first delivery day.
                  </p>
                  <button
                    onClick={() => setOrderSubmitted(false)}
                    className="text-xs text-[#a5d666] underline font-bold mt-2"
                  >
                    Edit / Create Another Order
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitStandingOrder} className="mt-6 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <input 
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#689f38]"
                    />
                    <input 
                      type="tel"
                      required
                      placeholder="Phone (559) *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-white placeholder-stone-500 focus:outline-none focus:border-[#689f38]"
                    />
                  </div>

                  <input 
                    type="text"
                    placeholder="Ranch / Farm Name (Optional)"
                    value={customerRanch}
                    onChange={(e) => setCustomerRanch(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#689f38]"
                  />

                  {fulfillmentType === 'delivery' && (
                    <input 
                      type="text"
                      required
                      placeholder="Delivery Ranch Address (Fresno / Clovis / Madera)"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#689f38]"
                    />
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      disabled={orderSummary.totalBagsOrBales === 0}
                      className="flex-1 bg-[#689f38] hover:bg-[#57882d] disabled:opacity-50 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Lock In Standing Order</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePrintManifest}
                      className="p-3 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl transition-colors border border-stone-700 flex items-center justify-center"
                      title="Print Order Manifest"
                      aria-label="Print Order Manifest"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <a 
                      href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[11px] text-stone-400 hover:text-white inline-flex items-center gap-1 font-bold"
                    >
                      <Phone className="w-3 h-3 text-[#689f38]" />
                      <span>Or Call Store Directly: {STORE_DETAILS.phoneFormatted}</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
