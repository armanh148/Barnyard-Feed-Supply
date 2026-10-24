import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="bg-[#121c11] text-white py-12 border-b border-stone-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container matching Frutin Section 12 directly */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Icon & Text */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#689f38]/20 border border-[#689f38]/30 text-[#a5d666] flex items-center justify-center shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Sign Up To Get Mill Restock Alerts & Ranch Deals
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Receive weekly alfalfa cutting updates, pallet discounts, and Fresno store inventory notices.
              </p>
            </div>
          </div>

          {/* Right Input & Subscribe Button */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-600/50 text-[#a5d666] px-5 py-3 rounded-2xl text-xs font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>You're on the list! We'll notify you on the next mill shipment.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#1e2e1c] border border-stone-700 rounded-full px-5 py-3.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#689f38] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#689f38] hover:bg-[#57882d] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shrink-0 shadow-md flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
