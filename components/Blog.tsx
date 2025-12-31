
import React from 'react';
import { BLOGS } from '../constants.tsx';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-10 py-32 reveal">
      <header className="mb-32 text-center">
        <h2 className="serif text-6xl font-black mb-4">Notes.</h2>
        <div className="h-[1px] w-12 bg-black mx-auto mt-8"></div>
      </header>

      <div className="space-y-32">
        {BLOGS.map((post) => (
          <article key={post.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline border-b border-gray-50 pb-16">
            <div className="md:col-span-3">
              <span className="text-[10px] font-black tracking-[0.4em] text-gray-200 uppercase">{post.date}</span>
            </div>
            <div className="md:col-span-9">
               <div className="flex items-center gap-4 mb-8 opacity-20">
                  <i className={`fas ${post.moodIcon} text-xs`}></i>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase">{post.mood}</span>
               </div>
               <p className="text-xl text-gray-700 leading-loose font-light italic serif">
                 "{post.content}"
               </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
