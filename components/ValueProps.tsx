
import React from 'react';

const ValueProps: React.FC = () => {
  const props = [
    { title: "Product. Person. Perfect.", desc: "Seamless integration that honors the delicate physics of your textiles." },
    { title: "Eliminate the logistics. Embrace the vision.", desc: "Remove shipping, scouting, and multi-day shoots from your operational workflow." },
    { title: "Model diversity at the scroll of a thumb.", desc: "Authentically represent every demographic with hyper-realistic human renders." },
    { title: "High-fidelity exports. Zero studio fees.", desc: "Achieve luxury editorial standards without the friction of traditional production." },
  ];

  return (
    <section id="vision" className="py-48 px-6 bg-gradient-to-b from-[#050505] to-[#080808]">
      <div className="max-w-7xl mx-auto space-y-64">
        {props.map((prop, idx) => (
          <div 
            key={idx} 
            className={`reveal opacity-0 translate-y-12 transition-all duration-1000 flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-center md:text-left`}
          >
            <h2 className="text-5xl md:text-[6rem] font-bold tracking-[-0.04em] mb-10 max-w-5xl text-zinc-100 leading-[0.9]">
              {prop.title}
            </h2>
            <p className="text-xl md:text-2xl font-light text-zinc-500 max-w-xl leading-relaxed">
              {prop.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
