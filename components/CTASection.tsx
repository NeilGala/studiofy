
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-64 px-6 overflow-hidden border-t border-white/5">
      {/* Intense Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9D50BB]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center reveal opacity-0 translate-y-12 transition-all duration-1000">
        <h2 className="text-6xl md:text-[9rem] font-bold tracking-[-0.05em] text-white mb-12 leading-none">
          Materialize <br /> your brand.
        </h2>
        
        <p className="text-xl md:text-2xl text-zinc-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Join the elite fashion teams scaling their vision with ethereal precision. Access is now granted.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="px-12 py-6 bg-[#9D50BB] text-white rounded-full font-bold text-lg amethyst-glow hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_50px_rgba(157,80,187,0.3)]">
            Download on App Store
          </button>
          <button className="px-12 py-6 glass text-white rounded-full font-bold text-lg border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-500">
            Google Play Store
          </button>
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#9D50BB] to-transparent"></div>
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
            v2.5 Release • Enterprise Ready
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
