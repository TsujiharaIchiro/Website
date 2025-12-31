
import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setResultImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!sourceImage || !prompt) return;
    setIsProcessing(true);
    setError(null);
    try {
      const result = await editImageWithGemini(sourceImage, prompt);
      if (result) setResultImage(result);
      else setError("Failed to evolve.");
    } catch (err) {
      setError("System offline.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-32 reveal">
      <header className="mb-24 flex flex-col items-center text-center">
        <h2 className="serif text-6xl font-bold mb-6">Lab.</h2>
        <p className="text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase italic">Visual Alchemy using Gemini 2.5</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 bg-gray-50 border border-gray-50">
        <div className="bg-white p-12 flex flex-col gap-10">
          <div 
            className="aspect-square bg-gray-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative group"
            onClick={() => fileInputRef.current?.click()}
          >
            {sourceImage ? (
              <img src={sourceImage} alt="Source" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            ) : (
              <div className="text-center p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                 <i className="fas fa-plus text-xl mb-4"></i>
                 <p className="text-[10px] font-black tracking-widest uppercase">Select Input</p>
              </div>
            )}
          </div>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />

          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-4">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-200"
                placeholder="PROMPT / e.g. 'add vintage texture'..."
              />
            </div>
            <button
              onClick={handleEdit}
              disabled={!sourceImage || !prompt || isProcessing}
              className={`w-full py-5 text-[10px] font-black tracking-[0.4em] uppercase transition-all ${
                isProcessing ? 'bg-gray-50 text-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {isProcessing ? 'PROCESSING...' : 'EVOLVE'}
            </button>
            {error && <p className="text-red-500 text-[10px] text-center tracking-widest uppercase">{error}</p>}
          </div>
        </div>

        <div className="bg-white p-12 flex items-center justify-center relative overflow-hidden">
          {resultImage ? (
            <img src={resultImage} alt="Result" className="w-full h-full object-cover reveal" />
          ) : (
            <div className="text-center opacity-10">
              <i className="fas fa-sparkles text-4xl mb-6"></i>
              <p className="text-[10px] font-black tracking-widest uppercase">Awaiting Output</p>
            </div>
          )}
          {isProcessing && (
            <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center">
              <div className="w-10 h-[1px] bg-black animate-pulse mb-4"></div>
              <p className="text-[9px] font-black tracking-[0.5em] uppercase text-black">Computing...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageStudio;
