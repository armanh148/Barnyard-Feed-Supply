import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function Navbar({ cartItems, onOpenCart, onOpenInventory, onOpenCalculator }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalBags = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200">
      {/* Top Farm Announcement Bar */}
      <div className="bg-[#1f3820] text-stone-200 text-[11px] sm:text-xs py-2 px-3 sm:px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#a5d666]">
              <span className="w-2 h-2 rounded-full bg-[#70a338] animate-pulse"></span>
              Fresh Mill Shipment
            </span>
            <span className="hidden sm:inline text-stone-400">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#e5a93b]" />
              <a 
                href={STORE_DETAILS.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white underline decoration-dotted transition-colors truncate max-w-[210px] sm:max-w-none"
              >
                847 N Pleasant Ave, Fresno
              </a>
            </span>
            <span className="hidden md:inline text-stone-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <Clock className="w-3 h-3 text-stone-400" />
              Open Today: 8:00 AM – 6:00 PM
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium">
            <div className="flex items-center gap-1 bg-[#2b4c2c] px-2 py-0.5 rounded text-stone-200">
              <Star className="w-3 h-3 text-[#f4c430] fill-[#f4c430]" />
              <span>4.7 ★ ({STORE_DETAILS.reviewsCount} Reviews)</span>
            </div>
            <a 
              href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`} 
              className="inline-flex items-center gap-1 text-white font-bold hover:text-[#a5d666] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#70a338]" />
              {STORE_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo - Designed like Frutin organic badge with agricultural livestock flair */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#2f5c27] to-[#1c3817] flex items-center justify-center text-white shadow-md border-2 border-[#689f38]/30 group-hover:scale-105 transition-transform shrink-0">
              <span className="text-xl sm:text-2xl">🌾</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-[#172316] font-serif-farm truncate">
                  Barnyard
                </span>
                <span className="text-[10px] sm:text-xs uppercase font-extrabold px-1.5 py-0.5 rounded bg-[#689f38] text-white tracking-widest shrink-0">
                  FEED
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-stone-500 font-semibold tracking-wide uppercase truncate">
                & Supply • Fresno, CA
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
            <a href="#" className="text-[#2d5a27] font-bold border-b-2 border-[#2d5a27] pb-1">
              Home
            </a>
            <a href="#about" className="hover:text-[#2d5a27] transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-[#2d5a27] transition-colors">
              Services
            </a>
            <a href="#catalog" className="hover:text-[#2d5a27] transition-colors">
              Feed Catalog
            </a>
            <button 
              onClick={onOpenInventory}
              className="hover:text-[#2d5a27] transition-colors flex items-center gap-1 text-stone-700 font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#689f38]"></span>
              Live Bag Inventory
            </button>
            <button 
              onClick={onOpenCalculator}
              className="hover:text-[#2d5a27] transition-colors flex items-center gap-1.5 text-stone-700 font-semibold"
            >
              <CalendarCheck className="w-4 h-4 text-[#e2a838]" />
              Ranch Order POS
            </button>
            <a href="#testimonials" className="hover:text-[#2d5a27] transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-[#2d5a27] transition-colors">
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Live Inventory Quick Button */}
            <button
              onClick={onOpenInventory}
              title="Open Live Feed Inventory Tracker"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-all border border-stone-300"
            >
              <Search className="w-3.5 h-3.5 text-[#2d5a27]" />
              <span>Lookup Bag Stock</span>
            </button>

            {/* Ranch Order Bag / Cart */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-stone-100 hover:bg-[#ebf4e6] text-stone-700 hover:text-[#2d5a27] transition-colors border border-stone-200"
              aria-label="View Feed Bag Order"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalBags > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#689f38] text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalBags}
                </span>
              )}
            </button>

            {/* Primary Action Button - Click to Call */}
            <a 
              href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#689f38] hover:bg-[#5a8c2f] text-white font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all text-xs tracking-wide uppercase"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[105px] bg-black/40 backdrop-blur-xs z-30 lg:hidden"
          />
          <div className="relative z-40 lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[calc(100vh-105px)] overflow-y-auto">
          <nav className="flex flex-col space-y-2.5 text-base font-semibold text-stone-800">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-stone-50 text-[#2d5a27]"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              About Barnyard Feed
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Core Services & Delivery
            </a>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Feed Catalog Grid
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInventory();
              }}
              className="text-left w-full px-3 py-2 rounded-lg hover:bg-stone-50 text-[#2d5a27] font-bold flex items-center justify-between"
            >
              <span>Live Bag Inventory Tracker</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Live Count</span>
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="text-left w-full px-3 py-2 rounded-lg hover:bg-stone-50 text-[#966b17] font-bold flex items-center justify-between"
            >
              <span>Recurring Ranch Order / POS</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Save 5%</span>
            </button>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Customer Reviews (4.7 ★)
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              Store Hours & Directions
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a 
              href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-[#689f38] text-white font-bold py-3 rounded-xl shadow text-center"
            >
              <Phone className="w-5 h-5" />
              <span>Click to Call: {STORE_DETAILS.phoneFormatted}</span>
            </a>
            <a 
              href={STORE_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-stone-100 text-stone-800 font-semibold py-2.5 rounded-xl border border-stone-300 text-center text-sm"
            >
              <MapPin className="w-4 h-4 text-[#e2a838]" />
              <span>Directions: 847 N Pleasant Ave, Fresno</span>
            </a>
          </div>
        </div>
      </>
    )}
    </header>
  );
}
