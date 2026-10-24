import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/storeData';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="py-20 bg-[#faf9f5] border-b border-stone-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Frutin Section 11 */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-[#689f38] font-bold text-xs uppercase tracking-widest">
            Central Valley Farm Tips
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172316] tracking-tight">
            Latest News & <span className="text-[#689f38]">Ranch Advice</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Practical livestock management, poultry nutrition, and seasonal feeding strategies 
            authored by our Fresno feed specialists.
          </p>
        </div>

        {/* 3 Articles Grid (Direct match to Frutin 3-card news grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Article Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-stone-100 mb-4 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1e2a1b]/90 backdrop-blur text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Meta info: Author & Date */}
                <div className="flex items-center gap-3 text-[11px] text-stone-500 mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#689f38]" />
                    {post.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#2d5a27] transition-colors leading-snug mb-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-stone-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Button: READ MORE matching reference */}
              <div className="pt-4 mt-4 border-t border-stone-100">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-800 hover:text-[#689f38] transition-colors group-hover:underline uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 p-2 rounded-full bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#689f38]">
              {selectedPost.category}
            </span>
            <h3 className="text-2xl font-black text-stone-900 mt-1 mb-2">
              {selectedPost.title}
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              By {selectedPost.author} • {selectedPost.date} • Barnyard Feed & Supply Advisory
            </p>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                {selectedPost.excerpt}
              </p>
              <p>
                In the Central Valley, temperature fluctuations and high dust levels require proactive livestock care. 
                Whether you need specialized electrolyte supplements, clean alfalfa testing, or custom ration balancing, 
                our team at 847 N Pleasant Ave in Fresno is always available to assist.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-medium text-emerald-900">
                💡 Stop by our counter Monday through Saturday or call <strong>+1 (559) 486-7333</strong> to discuss your herd's nutritional requirements with our feed specialists.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 bg-[#689f38] text-white font-bold rounded-xl text-xs hover:bg-[#57882d]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
