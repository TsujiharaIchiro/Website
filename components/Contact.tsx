
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-32 reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="serif text-7xl font-bold leading-tight mb-12">Talk.</h2>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-bold mb-12">Get in touch for collaborations.</p>
          <div className="space-y-4 text-sm font-light text-gray-600 tracking-wider">
            <p>E: hello@ethereal-echoes.com</p>
            <p>T: +86 10 0000 0000</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-b border-gray-100 pb-4">
                <input type="text" className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-200" placeholder="NAME" />
              </div>
              <div className="border-b border-gray-100 pb-4">
                <input type="email" className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-200" placeholder="EMAIL" />
              </div>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <textarea rows={4} className="w-full bg-transparent focus:outline-none text-sm placeholder:text-gray-200 resize-none" placeholder="MESSAGE"></textarea>
            </div>
            <button className="bg-black text-white px-12 py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
