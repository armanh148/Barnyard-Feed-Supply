import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Phone, 
  Truck, 
  PackageCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { STORE_DETAILS } from '../data/storeData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [fulfillment, setFulfillment] = useState('curbside'); // curbside, delivery
  const [submitted, setSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalBags = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const deliveryFee = fulfillment === 'delivery' ? (subtotal >= 250 ? 0 : 20) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setSubmitted(false);
      onClose();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#2d5a27] text-white flex items-center justify-center font-bold">
                🌾
              </div>
              <div>
                <h3 className="font-extrabold text-stone-900 text-sm">
                  Your Feed Bag Order
                </h3>
                <p className="text-[11px] text-stone-500">
                  {totalBags} bag{totalBags !== 1 ? 's' : ''} staged for Fresno pickup/delivery
                </p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Items */}
          <div className="p-5 overflow-y-auto flex-1 divide-y divide-stone-100">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2d5a27] flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-black text-stone-900">Order Received!</h4>
                <p className="text-xs text-stone-600 leading-relaxed px-4">
                  Thank you, <strong>{customerName}</strong>. Our staff at 847 N Pleasant Ave is staging your {totalBags} bags. We will call <strong>{customerPhone}</strong> to verify.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-stone-700 text-sm">Your Feed Bag Is Empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Browse our livestock, poultry, or alfalfa catalog and click "+ Add Bag" to build your order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-full bg-[#689f38] text-white font-bold text-xs hover:bg-[#57882d]"
                >
                  Browse Feeds Now
                </button>
              </div>
            ) : (
              <div className="space-y-4 py-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-start gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-stone-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {item.weight} • Bay: {item.bayLocation}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-black text-xs text-stone-900 font-serif-farm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono font-bold text-xs w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded bg-[#689f38] hover:bg-[#57882d] text-white flex items-center justify-center font-bold text-xs"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-red-600 p-1 ml-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && !submitted && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              
              {/* Fulfillment Option */}
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={() => setFulfillment('curbside')}
                  className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                    fulfillment === 'curbside'
                      ? 'bg-[#2d5a27] text-white border-[#2d5a27]'
                      : 'bg-white text-stone-700 border-stone-300'
                  }`}
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>Curbside (Free)</span>
                </button>
                <button
                  onClick={() => setFulfillment('delivery')}
                  className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                    fulfillment === 'delivery'
                      ? 'bg-[#2d5a27] text-white border-[#2d5a27]'
                      : 'bg-white text-stone-700 border-stone-300'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Fresno Delivery</span>
                </button>
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fulfillment ({fulfillment === 'curbside' ? '847 N Pleasant Ave' : 'Fresno Metro'}):</span>
                  <span className="font-mono font-bold text-stone-900">
                    {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-stone-900 pt-2 border-t border-stone-200">
                  <span>Estimated Total:</span>
                  <span className="text-[#2d5a27] font-mono font-serif-farm text-base">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-2 pt-2">
                <input 
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#689f38]"
                />
                <input 
                  type="tel"
                  required
                  placeholder="Phone Number (559) *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#689f38]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#689f38] hover:bg-[#57882d] text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Curbside Hold / Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-center pt-1">
                <a 
                  href={`tel:${STORE_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-xs font-bold text-[#2d5a27] hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Order Directly: {STORE_DETAILS.phoneFormatted}</span>
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
