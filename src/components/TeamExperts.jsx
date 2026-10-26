import React from 'react';
import { TEAM_MEMBERS } from '../data/storeData';
import { PhoneCall, Mail, MessageSquare } from 'lucide-react';

export default function TeamExperts() {
  return (
    <section className="py-12 sm:py-20 bg-[#faf9f5] border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2 mb-8 sm:mb-14">
          <span className="text-[#689f38] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/80 inline-block">
            Valley Agricultural Advisors
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172316] tracking-tight">
            Meet Our Feed & <span className="text-[#689f38]">Nutrition Experts</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm px-2">
            Have questions about cattle weight gain, equine hay ratios, or layer hen egg quality? 
            Our team is on-site at 847 N Pleasant Ave to assist you.
          </p>
        </div>

        {/* 2 Members per row on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-2xs hover:shadow-xl transition-all duration-300 border border-stone-200 text-center group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 mb-2.5 sm:mb-4 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 bg-black/70 backdrop-blur-xs text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md sm:rounded-full shadow-xs">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-extrabold text-xs sm:text-base text-stone-900 group-hover:text-[#2d5a27] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#689f38] font-bold mt-0.5 line-clamp-1">
                  {member.role}
                </p>
                <p className="text-[9.5px] sm:text-[11px] text-stone-500 mt-1 sm:mt-2 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Quick Advice Callout */}
              <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-stone-100">
                <a 
                  href="tel:+15594867333"
                  className="inline-flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-bold text-stone-700 hover:text-[#2d5a27] w-full py-1.5 rounded-lg bg-stone-50 hover:bg-[#ebf4e6] transition-colors"
                >
                  <PhoneCall className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#689f38] shrink-0" />
                  <span className="truncate">Ask at Store</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
