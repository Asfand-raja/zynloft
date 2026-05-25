import React, { useEffect, useState } from 'react';
import './ContactUs.css';

export default function ContactUs() {
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  useEffect(() => {
    // Background Atmosphere - slow movement
    const handleMouseMove = (e) => {
      const starField = document.querySelector('.star-field');
      if (starField) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        starField.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setTimeout(() => {
      setSubmitStatus('submitted');
    }, 2000);
  };

  return (
    <div className="contact-body-wrap font-body-md text-on-surface min-h-screen">
      <div className="star-field"></div>

      <main className="pt-32 pb-section-gap px-5 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
        {/* Hero Section */}
        <header className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>READY TO TRANSCEND?</span>
          </div>
          <h1 className="font-display-xl text-4xl md:text-7xl mb-6 tracking-tighter leading-tight">
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e60000] to-[#ff8a00]">Next Frontier</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            We bridge the gap between technical complexity and cinematic experience. Connect with our architects to start your enterprise transformation.
          </p>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form (Glassmorphism) */}
          <section className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <form className="space-y-8 relative z-10" id="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">FULL NAME</label>
                    <div className="glow-on-focus bg-surface-container rounded-xl flex items-center px-4 border border-outline-variant transition-all duration-300">
                      <span className="material-symbols-outlined text-outline">person</span>
                      <input className="w-full bg-transparent border-none focus:ring-0 py-4 text-on-surface placeholder:text-outline-variant" placeholder="John Doe" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">EMAIL ADDRESS</label>
                    <div className="glow-on-focus bg-surface-container rounded-xl flex items-center px-4 border border-outline-variant transition-all duration-300">
                      <span className="material-symbols-outlined text-outline">alternate_email</span>
                      <input className="w-full bg-transparent border-none focus:ring-0 py-4 text-on-surface placeholder:text-outline-variant" placeholder="john@zynloft.com" type="email" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">SUBJECT</label>
                  <div className="glow-on-focus bg-surface-container rounded-xl flex items-center px-4 border border-outline-variant transition-all duration-300">
                    <select className="w-full bg-transparent border-none focus:ring-0 py-4 text-on-surface appearance-none cursor-pointer">
                      <option className="bg-surface-container">Strategic Partnership</option>
                      <option className="bg-surface-container">Technical Architecture</option>
                      <option className="bg-surface-container">Product Development</option>
                      <option className="bg-surface-container">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant ml-1">YOUR MESSAGE</label>
                  <div className="glow-on-focus bg-surface-container rounded-xl px-4 py-4 border border-outline-variant transition-all duration-300">
                    <textarea className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline-variant resize-none" placeholder="Describe your vision..." rows="5"></textarea>
                  </div>
                </div>

                <button 
                  className={`w-full font-headline-lg py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 ${
                    submitStatus === 'submitted'
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container'
                  }`} 
                  type="submit"
                  disabled={submitStatus !== 'idle'}
                >
                  {submitStatus === 'idle' && (
                    <>
                      TRANSMIT MESSAGE
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                  {submitStatus === 'submitting' && (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      TRANSMITTING...
                    </>
                  )}
                  {submitStatus === 'submitted' && (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      SIGNAL DELIVERED
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* Side Bento Grid */}
          <aside className="lg:col-span-5 flex flex-col gap-8">
            {/* Calendly Preview Card */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:border-primary/40">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Book a Session</h3>
                  <p className="text-on-surface-variant text-sm">Synchronize with our lead engineers via video call.</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                </div>
              </div>
              {/* Mock Calendly View */}
              <div className="bg-surface-container-high rounded-2xl p-4 border border-outline-variant">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-sm text-label-sm">AUGUST 2026</span>
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-outline mb-2">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  <div className="p-1 rounded-full text-outline-variant text-[10px]">28</div>
                  <div className="p-1 rounded-full text-outline-variant text-[10px]">29</div>
                  <div className="p-1 rounded-full text-outline-variant text-[10px]">30</div>
                  <div className="p-1 rounded-full text-outline-variant text-[10px]">31</div>
                  <div className="p-1 rounded-full bg-primary/20 text-primary font-bold text-[10px] ring-1 ring-primary/40 cursor-pointer">1</div>
                  <div className="p-1 rounded-full bg-primary/20 text-primary font-bold text-[10px] ring-1 ring-primary/40 cursor-pointer">2</div>
                  <div className="p-1 rounded-full text-[10px]">3</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-on-surface text-sm font-semibold italic">Next availability: Tomorrow at 10:00 AM</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Google Maps (Dark Mode Styling) */}
            <div className="h-64 glass-card rounded-3xl overflow-hidden relative border border-outline-variant">
              <img className="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="A cinematic dark-themed satellite map view of a futuristic city hub with glowing grid lines and glowing data points. The map aesthetic is minimal and high-contrast, using deep blacks and vibrant red-orange accents to highlight company headquarters location in a high-tech district." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx7R5TkCR73jbiQiP2nf4CqsHm6xpkeI0uYUQh_m5HTw7qaVNXQfmsLaVACMGypd1Cfy0g1nGEIwONOYbgQoMMO-e6aGhZ_Wu6agpEKGf3AIWWUqpH_t2QkXnx3Swem_rNBlxxqJ8jrjSW7Wa1-XKQrt_Hd4rL8XPR5uVZdtUrlJTQsFYbbgvQdGVoJB8garYAdD2HY633XcWDf1xWpCwTTxlDreXd6_Kte7BpYSzCQDmbgM70_5HVEn--6Aw5-MOIuVmTyLjS3b0" alt="Map View" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="font-label-sm text-[10px] text-primary tracking-[0.2em]">HEADQUARTERS</p>
                  <p className="text-body-md font-bold">101 Silicon Valley, CA</p>
                </div>
                <button className="bg-surface-container-highest/80 backdrop-blur p-3 rounded-full border border-outline-variant hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">directions</span>
                </button>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:bg-white/5 transition-all group" href="#">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface">hub</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">LinkedIn</span>
              </a>
              <a className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:bg-white/5 transition-all group" href="#">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-surface">terminal</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </aside>
        </div>

        {/* Trust Section */}
        <section className="mt-section-gap">
          <h2 className="text-center font-label-sm text-label-sm text-outline tracking-[0.3em] mb-12">RELIED UPON BY GLOBAL PIONEERS</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="font-display-lg text-2xl font-black">NEXUS</div>
            <div className="font-display-lg text-2xl font-black italic">AETHER</div>
            <div className="font-display-lg text-2xl font-black tracking-tighter">O•R•B•I•T</div>
            <div className="font-display-lg text-2xl font-black">CRYPTOX</div>
            <div className="font-display-lg text-2xl font-black">SOLARIS</div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
