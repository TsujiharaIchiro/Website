
import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const items: { id: ViewState; label: string; en: string }[] = [
    { id: 'home', label: '主页', en: 'HOME' },
    { id: 'music', label: '音乐', en: 'MUSIC' },
    { id: 'works', label: '委托', en: 'WORKS' },
    { id: 'movie', label: '影像', en: 'MOVIE' },
    { id: 'blog', label: '日志', en: 'DIARY' },
    { id: 'contact', label: '联系', en: 'CONTACT' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md px-10 py-8 flex justify-between items-center border-b border-gray-50">
      <div 
        className="cursor-pointer group flex items-baseline gap-2" 
        onClick={() => setView('home')}
      >
        <span className="serif text-2xl font-black tracking-tighter">EE.</span>
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-30 group-hover:opacity-100 transition-opacity">Sonic Artistry</span>
      </div>

      <div className="flex gap-10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`nav-link text-[10px] font-bold tracking-[0.25em] uppercase transition-all ${
              currentView === item.id ? 'active text-black' : 'text-gray-300'
            }`}
          >
            {item.en}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
