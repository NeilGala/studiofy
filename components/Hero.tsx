
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[750px] w-full flex flex-col md:flex-row overflow-hidden border-b border-white/5">
      {/* Left side: Product */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-zinc-950 flex items-center justify-center p-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#111] opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(157,80,187,0.05)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 w-full max-w-sm group">
          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200" 
            alt="Product Flat Lay" 
            className="w-full object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-transform duration-[3s] group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-16 left-16 z-20 hidden lg:block">
          <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-bold mb-3">Material Capture System</p>
          <div className="h-[1px] w-12 bg-zinc-800"></div>
        </div>
      </div>

      {/* Right side: Editorial */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1539109132314-347752418b30?auto=format&fit=crop&q=80&w=1800" 
          alt="Fashion Editorial" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes slow-zoom {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
        `}} />
        <div className="absolute inset-0 bg-black/50 backdrop-grayscale-[0.3]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60 md:hidden"></div>

        <div className="absolute bottom-16 right-16 z-20 text-right hidden lg:block">
          <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-300 font-bold mb-3">Synthetic Human v4.8</p>
          <div className="h-[1px] w-12 bg-zinc-400 ml-auto"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center p-8">
        <div className="max-w-5xl text-center pointer-events-auto">
          <h1 className="text-6xl md:text-[7rem] font-bold tracking-[-0.04em] leading-[0.85] text-white mb-8 reveal">
            Your inventory, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9D50BB] via-white to-purple-400">reimagined</span> in <br className="hidden md:block" /> the human form.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-lg mx-auto leading-relaxed tracking-tight reveal opacity-0 translate-y-8">
            AI-generated fashion models. Zero studios. <br /> Infinite scale for global visionaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center reveal opacity-0 translate-y-12 transition-all delay-200">
            <button className="group relative px-10 py-5 bg-[#9D50BB] text-white rounded-full font-bold amethyst-glow hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(157,80,187,0.2)]">
              <span className="relative z-10 flex items-center gap-2">
                Download on App Store
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </button>
            <button className="px-10 py-5 glass text-white rounded-full font-bold hover:bg-white/10 active:scale-95 transition-all duration-300 border border-white/10">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Divider */}
      <div className="absolute top-[20%] bottom-[20%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-40 hidden md:block"></div>
    </section>
  );
};

export default Hero;
