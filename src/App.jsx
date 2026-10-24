import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoreInfoBar from './components/StoreInfoBar';
import AboutQuality from './components/AboutQuality';
import CoreServicesTrio from './components/CoreServicesTrio';
import CategoryFilterBar from './components/CategoryFilterBar';
import StatsBanner from './components/StatsBanner';
import WhyChooseUs from './components/WhyChooseUs';
import TeamExperts from './components/TeamExperts';
import FeedCatalog from './components/FeedCatalog';
import AgricultureVideoBanner from './components/AgricultureVideoBanner';
import Testimonials from './components/Testimonials';
import InventoryDashboardSection from './components/InventoryDashboardSection';
import RecurringOrderCalculator from './components/RecurringOrderCalculator';
import BlogSection from './components/BlogSection';
import NewsletterBanner from './components/NewsletterBanner';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import { STORE_DETAILS, PRODUCTS } from './data/storeData';
import { Phone, ShoppingBag, CalendarClock, Warehouse } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], quantity: 2 },
    { ...PRODUCTS[2], quantity: 3 }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added 1 bag of ${product.name} to order.`);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    showToast('Removed item from bag order.');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToInventory = () => {
    const el = document.getElementById('inventory-tracker');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('ranch-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-stone-900 font-sans flex flex-col selection:bg-[#689f38] selection:text-white">
      
      {/* Toast Notification (Positioned at top to never overlap mobile bottom action bar) */}
      {toastMessage && (
        <div className="fixed top-20 sm:top-24 right-4 sm:right-6 z-50 bg-stone-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl border border-stone-700 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#689f38]"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar 
        cartItems={cartItems}
        onOpenCart={() => setCartOpen(true)}
        onOpenInventory={scrollToInventory}
        onOpenCalculator={scrollToCalculator}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Matches Section 1 layout) */}
        <Hero 
          onOpenInventory={scrollToInventory}
          onOpenCalculator={scrollToCalculator}
          onRequestDelivery={scrollToCalculator}
        />

        {/* Store Info & Hours Bar (Address, Google Maps, Click-to-Call, Hours & Trust) */}
        <StoreInfoBar />

        {/* 2. About Quality & 40+ Years Story (Matches Section 2 layout) */}
        <AboutQuality 
          onOpenInventory={scrollToInventory}
        />

        {/* 3. Core Services Trio (Matches Section 3 layout) */}
        <CoreServicesTrio 
          onOpenCalculator={scrollToCalculator}
          onOpenInventory={scrollToInventory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Category Filter Bar (Matches Section 4 dark pill bar) */}
        <CategoryFilterBar 
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
        />

        {/* 5. Key Metrics Stats Banner (Matches Section 5 green bar) */}
        <StatsBanner />

        {/* 6. Why Choose Us (Matches Section 6 layout) */}
        <WhyChooseUs 
          onOpenInventory={scrollToInventory}
          onOpenCalculator={scrollToCalculator}
        />

        {/* 7. Team & Nutrition Experts (Matches Section 7 layout) */}
        <TeamExperts />

        {/* 8. Live Feed Catalog Grid (Matches Section 8 layout) */}
        <FeedCatalog 
          activeCategory={activeCategory}
          onSelectCategory={(catId) => setActiveCategory(catId)}
          onAddToCart={handleAddToCart}
          onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          onOpenInventory={scrollToInventory}
        />

        {/* 9. Agriculture & Valley Banner with Video Modal (Matches Section 9 layout) */}
        <AgricultureVideoBanner 
          onOpenCalculator={scrollToCalculator}
        />

        {/* 10. Customer Testimonials & 4.7-Star Trust (Matches Section 10 layout) */}
        <Testimonials />

        {/* 11. Interactive Store Operations Tool 1: Feed Bag Live Inventory Dashboard */}
        <InventoryDashboardSection 
          onAddToCart={handleAddToCart}
        />

        {/* 12. Interactive Store Operations Tool 2: Recurring Ranch Order / POS Calculator */}
        <RecurringOrderCalculator />

        {/* 13. Latest News & Farm Articles (Matches Section 11 layout) */}
        <BlogSection />

        {/* 14. Newsletter & Restock Alerts Banner (Matches Section 12 layout) */}
        <NewsletterBanner />
      </main>

      {/* 15. Store Info, Hours & Footer (Matches Section 13 layout) */}
      <Footer 
        onSelectCategory={(catId) => setActiveCategory(catId)}
        onOpenInventory={scrollToInventory}
        onOpenCalculator={scrollToCalculator}
      />

      {/* Slide-out Feed Order Bag / Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Nutritional Specs Quick View Modal */}
      <QuickViewModal 
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Sticky Floating Action Bar for Fast Calling & Cart Access */}
      <aside aria-label="Quick Actions" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 flex items-center gap-2">
        <a 
          href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#2d5a27] hover:bg-[#20421c] text-white text-xs font-black px-4 py-3 rounded-full shadow-2xl transition-all border border-emerald-600/40"
        >
          <Phone className="w-4 h-4 text-[#a5d666]" />
          <span>(559) 486-7333</span>
        </a>

        <button 
          onClick={() => setCartOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#689f38] hover:bg-[#57882d] text-white text-xs font-black px-4 py-3 rounded-full shadow-2xl transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Order ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
        </button>
      </aside>

    </div>
  );
}
