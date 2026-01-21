
import React from 'react';

const TrustStrip: React.FC = () => {
  return (
    <section className="py-20 px-6 border-b border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.5em] text-zinc-500 font-bold mb-12">
          Trusted by modern fashion teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale contrast-125">
          <span className="text-2xl font-black italic tracking-tighter text-white">LUMIÈRE</span>
          <span className="text-2xl font-bold tracking-widest text-white underline underline-offset-8 decoration-1">AXIS</span>
          <span className="text-3xl font-serif text-white">Vogue.ai</span>
          <span className="text-2xl font-light tracking-[0.3em] text-white">PRISM</span>
          <span className="text-2xl font-semibold text-white">ETHEREUM STYLE</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
