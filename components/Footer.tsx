
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#9D50BB] rounded-md rotate-45"></div>
              <span className="text-xl font-bold tracking-tight text-white">STUDIOFY</span>
            </div>
            <p className="text-zinc-500 font-light max-w-xs leading-relaxed">
              Ethereal precision in AI fashion models. Designed for the visionaries of the 21st century.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#9D50BB] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-zinc-600 text-xs">
            © 2025 Studiofy AI Technologies. All rights reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
