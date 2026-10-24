import React from 'react';
import { 
  Truck, 
  PackageCheck, 
  CalendarClock, 
  ArrowRight, 
  Check, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function CoreServicesTrio({ onOpenCalculator, onOpenInventory, onSelectCategory }) {
  const coreServices = [
    {
      id: "delivery",
      title: "Local Fresno Valley Delivery",
      badge: "SAME / NEXT DAY FLATBED",
      tagline: "Direct into your barn or feed room",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=700&q=80",
      description: "Fast liftgate and flatbed truck delivery across Fresno, Clovis, Madera, Sanger, and Kerman. Pallet drops and multi-bag orders stacked right where you need them.",
      highlights: [
        "Free Fresno metro delivery on orders $250+",
        "Forklift pallet drop & barn stacking",
        "Delivery routes Mon - Sat across Fresno County"
      ],
      actionText: "Request Local Delivery",
      actionType: "delivery"
    },
    {
      id: "curbside",
      title: "Drive-Up Curbside Loading",
      badge: "5-MINUTE TRUCK LOADING",
      tagline: "847 N Pleasant Ave Loading Bay",
      icon: PackageCheck,
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=700&q=80",
      description: "Pull your truck, trailer, or flatbed straight into our covered loading docks. Our experienced crew and forklift operators load every 50lb bag and 3-tie bale for you.",
      highlights: [
        "Zero heavy lifting: our staff loads for you",
        "Curbside bag holds reserved for 24 hours",
        "Express checkout at counter or drive-up"
      ],
      actionText: "Check Bag Inventory & Hold",
      actionType: "inventory"
    },
    {
      id: "recurring",
      title: "Recurring Ranch Standing Orders",
      badge: "5% AUTOMATIC BULK SAVINGS",
      tagline: "Automated weekly or monthly feeds",
      icon: CalendarClock,
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80",
      description: "Never worry about running low on livestock rations again. Configure scheduled weekly, bi-weekly, or monthly standing feed replenishment with guaranteed bag holds.",
      highlights: [
        "Locked-in 5% standing order discount",
        "Guaranteed bag reservation during shortages",
        "Easy cadence adjustments with a single call"
      ],
      actionText: "Configure Standing Order POS",
      actionType: "calculator"
    }
  ];

  const handleAction = (type) => {
    if (type === 'delivery' || type === 'calculator') {
      const el = document.getElementById('ranch-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'inventory') {
      const el = document.getElementById('inventory-tracker');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#faf9f5] border-b border-stone-200 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Announcement Banner */}
        <div className="mb-14 bg-gradient-to-r from-[#203a1d] to-[#152713] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#3e5f35] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-[#689f38] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
              📢
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-900/80 text-[#a5d666] text-xs font-bold uppercase tracking-wider mb-1">
                <span>Fresno County Farm Announcement</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Same-Day Curbside Pickup & Scheduled Ranch Deliveries Active
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Need feed today? Our loading bay at <strong>847 N Pleasant Ave</strong> is staging bags right now. 
                Standing ranch order routes run daily across Fresno, Clovis, and Madera.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#689f38] hover:bg-[#58892d] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>(559) 486-7333</span>
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
            Core Store Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            How Barnyard Feed Keeps <br />
            <span className="text-[#689f38]">Valley Ranches Running</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From emergency curbside bag loading to automated multi-ton recurring pasture drops, 
            we provide the most reliable farm supply operations in Fresno.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Frame with Badge */}
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-stone-100 mb-5 relative border border-stone-200">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black bg-[#2d5a27] text-white px-3 py-1 rounded-full shadow-md tracking-wider uppercase">
                        {card.badge}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Subtitle */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#2d5a27] flex items-center justify-center shrink-0 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      {card.tagline}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl font-black text-stone-900 tracking-tight mb-2 group-hover:text-[#2d5a27] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 pt-1 pb-4 border-b border-stone-100 text-xs text-stone-700">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#689f38] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-800 group-hover:text-[#689f38] transition-colors">
                    {card.actionText}
                  </span>
                  <button 
                    onClick={() => handleAction(card.actionType)}
                    className="w-10 h-10 rounded-full bg-stone-900 group-hover:bg-[#689f38] text-white flex items-center justify-center transition-all shadow-md group-hover:translate-x-1"
                    aria-label={card.actionText}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
