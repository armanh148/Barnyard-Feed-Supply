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

      {/* Mobile Off-Canvas Slide-Out Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          {/* Dark Backdrop with fade */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Right-Hand Slide-Out Sidebar Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-[360px] bg-white shadow-2xl flex flex-col justify-between z-10 border-l border-stone-200 transform transition-transform duration-300 ease-out">
            
            {/* Sidebar Top Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  🌾
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-stone-900 text-sm tracking-tight">Barnyard</span>
                    <span className="bg-[#689f38] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Feed</span>
                  </div>
                  <p className="text-[10px] text-stone-500 font-medium truncate max-w-[170px]">847 N Pleasant Ave, Fresno</p>
                </div>
              </div>

              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                aria-label="Close Navigation Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Navigation Links (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm text-[#2d5a27] bg-emerald-50/80 hover:bg-emerald-100/70 transition-colors"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#689f38]" />
              </a>

              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>About Barnyard Feed</span>
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </a>

              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>Core Services &amp; Delivery</span>
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </a>

              <a 
                href="#catalog" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>Feed Catalog Grid</span>
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </a>

              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInventory();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm text-[#2d5a27] hover:bg-emerald-50/60 transition-colors cursor-pointer text-left"
              >
                <span>Live Bag Inventory</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  Live Count
                </span>
              </button>

              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-sm text-[#966b17] hover:bg-amber-50/60 transition-colors cursor-pointer text-left"
              >
                <span>Recurring Ranch Order</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                  Save 5%
                </span>
              </button>

              <a 
                href="#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>Customer Reviews (4.7 ★)</span>
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </a>

              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>Store Hours &amp; Directions</span>
                <ChevronRight className="w-4 h-4 text-stone-300" />
              </a>
            </div>

            {/* Sidebar Footer with Quick Actions */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2.5">
              <a 
                href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-[#689f38] hover:bg-[#5a8c2f] text-white font-extrabold py-3 rounded-xl shadow-md text-center text-xs uppercase tracking-wide transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store: {STORE_DETAILS.phoneFormatted}</span>
              </a>

              <a 
                href={STORE_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-800 font-bold py-2.5 rounded-xl border border-stone-300 text-center text-xs transition-colors shadow-2xs active:scale-95"
              >
                <MapPin className="w-4 h-4 text-[#e2a838]" />
                <span className="truncate">Directions: 847 N Pleasant Ave</span>
              </a>

              <div className="pt-1 flex items-center justify-between text-[10.5px] text-stone-500 font-medium px-1">
                <span>🕒 Mon-Fri 8AM-6PM</span>
                <span className="text-[#2d5a27] font-bold">★ 4.7 (101 Reviews)</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
