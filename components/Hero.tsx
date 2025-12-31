
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-10">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="overflow-hidden bg-gray-50 aspect-[16/9]">
            <img 
              src="https://images.unsplash.com/photo-1514320298324-a4a24a193006?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              alt="Artist workspace"
            />
          </div>
        </div>
        <div className="lg:col-span-5 reveal" style={{ animationDelay: '0.2s' }}>
          <h1 className="serif text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
            Sound <br/> & Vision.
          </h1>
          <p className="text-sm font-light text-gray-400 uppercase tracking-[0.4em] mb-12">
            Composer / Producer / Performer
          </p>
          <div className="h-[1px] w-20 bg-black mb-12"></div>
          <p className="text-lg text-gray-600 leading-loose max-w-md font-light">
            在无声处听惊雷，在嘈杂中寻宁静。我致力于探索声音在空间中的解构与重组，创造跨越感官的声学体验。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
