
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Movie from './components/Movie';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Hero />;
      case 'music': return <Portfolio category="music" title="Discography" />;
      case 'works': return <Portfolio category="works" title="Collaborations" />;
      case 'movie': return <Movie />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="relative pt-20">
        {renderView()}
      </main>

      <footer className="py-24 px-10 text-center border-t border-gray-50 bg-white">
        <div className="flex flex-col gap-6">
          <p className="serif italic text-2xl font-bold tracking-tighter opacity-10">EE.</p>
          <p className="text-[10px] uppercase tracking-[0.5em] font-medium opacity-30">
            © 2024 Ethereal Echoes. Tokyo / Beijing.
          </p>
          <div className="flex justify-center gap-10 text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mt-4">
            <a href="https://space.bilibili.com/40027093" target="_blank" className="hover:opacity-100 transition-opacity">Bilibili</a>
            <a href="https://www.youtube.com/@TsujiharaTens" target="_blank" className="hover:opacity-100 transition-opacity">Youtube</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
