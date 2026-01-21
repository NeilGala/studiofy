
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ValueProps from './components/ValueProps';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Scroll progress for the new architectural header
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Visual Haptic Illusion: Ripple effect on click
    const handleButtonClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button');
      if (!target) return;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener('mousedown', handleButtonClick);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollProgress);
      document.removeEventListener('mousedown', handleButtonClick);
    };
  }, []);

  return (
    <div className="relative bg-[#050505] text-[#E4E4E7] overflow-hidden">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ValueProps />
        <HowItWorks />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
