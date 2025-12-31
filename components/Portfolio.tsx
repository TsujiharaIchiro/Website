
import React from 'react';
import { TRACKS } from '../constants.tsx';
import { MusicGenre, TrackCategory } from '../types';

interface PortfolioProps {
  category: TrackCategory;
  title: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ category, title }) => {
  const filteredTracks = TRACKS.filter(t => t.category === category);

  return (
    <div className="max-w-7xl mx-auto px-10 py-32 reveal">
      <header className="mb-24">
        <h2 className="serif text-5xl italic font-bold mb-6 tracking-tight">{title}</h2>
        <div className="h-[1px] w-20 bg-black/10"></div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredTracks.map((track) => (
          <div key={track.id} className="group cursor-pointer">
            <div className="aspect-square bg-gray-50 overflow-hidden mb-6">
              <img 
                src={track.coverUrl} 
                alt={track.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold tracking-wider uppercase text-black">{track.title}</h3>
              <p className="text-[10px] text-gray-300 font-medium tracking-widest uppercase">{track.titleEn}</p>
              <p className="text-[9px] text-gray-400 font-light mt-2">{track.genre.split(' / ')[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
