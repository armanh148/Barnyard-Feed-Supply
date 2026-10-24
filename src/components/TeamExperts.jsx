import React from 'react';
import { TEAM_MEMBERS } from '../data/storeData';
import { PhoneCall, Mail, MessageSquare } from 'lucide-react';

export default function TeamExperts() {
  return (
    <section className="py-20 bg-[#faf9f5] border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Frutin Section 7 */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
            Valley Agricultural Advisors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            Meet Our Feed & <span className="text-[#689f38]">Nutrition Experts</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Have questions about cattle weight gain, equine hay ratios, or layer hen egg quality? 
            Our team is on-site at 847 N Pleasant Ave to assist you.
          </p>
        </div>

        {/* 4 Cards in a row (Exact match to Frutin 4-column layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 text-center group hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 mb-4 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#2d5a27] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-[#689f38] font-bold mt-0.5">
                  {member.role}
                </p>
                <p className="text-[11px] text-stone-500 mt-2 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Quick Advice Callout */}
              <div className="pt-3 mt-3 border-t border-stone-100">
                <a 
                  href="tel:+15594867333"
                  className="inline-flex items-center justify-center gap-1.5 text-[11px] font-bold text-stone-700 hover:text-[#2d5a27] w-full py-1.5 rounded-lg bg-stone-50 hover:bg-[#ebf4e6] transition-colors"
                >
                  <PhoneCall className="w-3 h-3 text-[#689f38]" />
                  <span>Ask at Store</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
