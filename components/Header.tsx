
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* The Structural Bar */}
      <div className="w-full h-20 bg-black/20 backdrop-blur-xl border-b border-white/5 px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Section: Branding & System Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-6 h-6 bg-[#9D50BB] flex items-center justify-center amethyst-glow transition-transform duration-500 group-hover:rotate-90">
              <div className="w-2 h-2 bg-white/40"></div>
            </div>
            <span className="text-lg font-bold tracking-[-0.02em] text-white">STUDIOFY</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6">
            <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase">Sys-Core v2.5</span>
            <div className="w-1 h-1 rounded-full bg-green-500/50 animate-pulse"></div>
          </div>
        </div>

        {/* Center Section: Navigation (Editorial Grouping) */}
        <nav className="hidden md:flex items-center gap-10">
          {['Vision', 'Process', 'Technology', 'Pricing'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors group py-2"
            >
              {item}
              {/* Bioluminescent Dot Hover Effect */}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#9D50BB] rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_8px_#9D50BB]"></span>
            </a>
          ))}
        </nav>

        {/* Right Section: Global Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            Support
          </button>
          <button className="relative px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:bg-[#9D50BB] hover:text-white group">
            <span className="relative z-10">Join Studio</span>
            {/* Subtle corner clip visual decoration */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-black transition-colors group-hover:bg-[#050505]"></div>
            <div className="absolute top-0 right-0 w-[1px] h-[1px] bg-white/20"></div>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Indicator at the bottom of the header */}
      <div className="w-full h-[1px] bg-white/5 relative">
        <div className="absolute top-0 left-0 h-full bg-[#9D50BB]/30 transition-all duration-300" style={{ width: '0%' }} id="scroll-progress"></div>
      </div>
    </header>
  );
};

export default Header;
