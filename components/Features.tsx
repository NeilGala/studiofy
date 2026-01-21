
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="technology" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="reveal opacity-0 translate-y-12 transition-all duration-1000 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 glass rounded-full border border-[#9D50BB]/20 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9D50BB]">Technical Specifications</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              Ethereal Precision <br /> At Scale.
            </h2>
            <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed max-w-lg">
              Our proprietary neural architecture doesn't just overlay clothes; it simulates physics, light refraction, and biometric micro-movement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "NFD™ Engine", desc: "Neural Fabric Dynamics for real-world movement." },
                { title: "Biolume Lighting", desc: "Subsurface scattering for human skin." },
                { title: "Aura Control", desc: "Define atmospheric mood with prompt weight." },
                { title: "4K Render", desc: "Lossless exports for print and digital." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
                  <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 reveal opacity-0 translate-y-12 transition-all duration-1000 delay-300">
            {/* Mock UI: The Aura Controller */}
            <div className="relative z-10 glass rounded-[2.5rem] p-10 border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9D50BB] to-transparent"></div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#9D50BB] rounded-full animate-pulse shadow-[0_0_10px_#9D50BB]"></div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase">Aura Controller v3</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Natural Language Prompt</label>
                    <span className="text-[10px] text-[#9D50BB] font-mono">0.82w</span>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#9D50BB]/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative glass px-6 py-5 rounded-2xl border border-white/5 text-sm font-light italic text-zinc-300 leading-relaxed shadow-inner">
                      "New York golden hour, soft bokeh, cinematic focus on silk texture, diverse model..."
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 pt-4">
                  {[
                    { label: "Material Fidelity", val: 94, color: "from-[#9D50BB] to-purple-400" },
                    { label: "Ambient Lumens", val: 68, color: "from-blue-500 to-indigo-400" },
                    { label: "Human Essence", val: 91, color: "from-[#9D50BB] to-pink-500" }
                  ].map((s, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">
                        <span>{s.label}</span>
                        <span className="text-zinc-400">{s.val}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${s.color} rounded-full`} style={{ width: `${s.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <div className="flex-1 aspect-square glass rounded-2xl border border-white/5 flex items-center justify-center group overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 animate-pulse"></div>
                  </div>
                  <div className="flex-1 aspect-square glass rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                     <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-[#9D50BB]/20"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#9D50BB]/40" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path></svg>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#9D50BB]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
