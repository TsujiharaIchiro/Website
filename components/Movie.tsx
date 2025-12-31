
import React from 'react';

const Movie: React.FC = () => {
  const channels = [
    {
      name: 'Bilibili',
      handle: '@40027093',
      url: 'https://space.bilibili.com/40027093?spm_id_from=333.1387.0.0',
      description: 'Main archive for motion music and live sessions in China.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop'
    },
    {
      name: 'YouTube',
      handle: '@TsujiharaTens',
      url: 'https://www.youtube.com/@TsujiharaTens',
      description: 'Global reach for cinematic soundtracks and sound design experiments.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-32 reveal">
      <header className="mb-24 text-center">
        <h2 className="serif text-6xl font-black mb-4">Movie.</h2>
        <p className="text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase">External Channels</p>
        <div className="h-[1px] w-12 bg-black mx-auto mt-12"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {channels.map((channel) => (
          <a 
            key={channel.name} 
            href={channel.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="aspect-[16/9] bg-gray-50 overflow-hidden mb-10 border border-gray-50">
              <img 
                src={channel.image} 
                alt={channel.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-black/5 pb-6">
              <div>
                <h3 className="serif text-3xl font-bold mb-2">{channel.name}</h3>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">{channel.handle}</p>
              </div>
              <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"></i>
            </div>
            <p className="mt-6 text-sm text-gray-500 font-light leading-relaxed max-w-sm">
              {channel.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Movie;
