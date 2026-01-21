
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Upload your product",
      desc: "A single high-resolution flat lay is all we need to start.",
      icon: (
        <svg className="w-10 h-10 text-[#9D50BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
        </svg>
      )
    },
    {
      num: "02",
      title: "Customize the model",
      desc: "Define age, ethnicity, lighting, and urban environment.",
      icon: (
        <svg className="w-10 h-10 text-[#9D50BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      num: "03",
      title: "Generate visuals",
      desc: "Receive editorial-grade visuals in seconds, ready for launch.",
      icon: (
        <svg className="w-10 h-10 text-[#9D50BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">The Studiofy Process</h2>
          <p className="text-zinc-500 font-medium">Sophistication through simplification.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal opacity-0 translate-y-10 transition-all duration-700 flex flex-col items-start group">
              <div className="mb-8 p-4 glass rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <span className="text-xs font-bold text-[#9D50BB] tracking-widest mb-2 uppercase">{step.num}</span>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
