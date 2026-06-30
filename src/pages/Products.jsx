import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import './Products.css';

export default function Products() {
  useEffect(() => {
    // Hover effect for product cards (simple glow follow)
    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <SEO title="Products | Zynloft Solutions" description="Our suite of SaaS tools is designed for high-performance enterprise teams." />
    <div className="products-body-wrap font-body-md min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center justify-center hero-gradient px-container-mobile">
          <div className="max-w-[1440px] mx-auto text-center z-10">
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase mb-6 block">The Enterprise Ecosystem</span>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface mb-8 max-w-4xl mx-auto">
              Powering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e60000] to-[#ff8a00]">Technical Pioneers</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Our suite of SaaS tools is designed for high-performance teams who demand cinematic precision and absolute reliability.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-container to-secondary-container text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary-container/20">
                Explore the Suite
              </button>
              <button className="glass-card text-on-surface px-10 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo
              </button>
            </div>
          </div>
          {/* Particle Background Mock */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/20 blur-[120px] rounded-full"></div>
          </div>
        </section>

        {/* Product Bento Grid */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Product Card */}
            <div className="md:col-span-8 glass-card p-10 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <span className="font-label-sm text-label-sm text-primary mb-4">CORE PRODUCT</span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-4">ZynCommand Center</h2>
                <p className="font-body-md text-on-surface-variant max-w-md mb-8">The ultimate mission control for enterprise operations. Real-time data synthesis with predictive AI forecasting.</p>
                <div className="mt-auto">
                  <img alt="Dashboard Mockup" className="w-full h-64 object-cover rounded-xl border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700" data-alt="A sophisticated dark mode enterprise dashboard mockup displaying complex data visualizations, real-time analytics graphs, and sleek minimalist UI elements. The interface uses deep blacks and charcoal tones with vibrant primary red accents for critical metrics. Soft glowing highlights and a crisp, clean layout evoke a sense of high-performance technical precision and cinematic professional design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnMZ73wj6HBjyVRWzHy0YZbFNpGPWorD03HdmEnjCM7Aa_MsCNf8C58FACwpZxGZNUVWJou8nFlJcgivvlLkelQeBl3H2YXMbV0H4OG0GaKEEPKXQ-pbWUUkmJifz_MSp2p16l4_3Bm1RRfoeTFO37xAXHCU12CxlkxBSAUrjUxte8732N4eTm_6fSj44mntzY9eXOa9Rhk4Zrw1kTclAy5EZ7pAb5_80WqbFpJ4WtI70oNLlwzVcWhfdJMAaowJr8MqETy-eGMQw" />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-4xl text-primary/30">monitoring</span>
              </div>
            </div>

            {/* Secondary Product Card */}
            <div className="md:col-span-4 glass-card p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-tertiary mb-4">SECURE STORAGE</span>
                <h2 className="font-headline-lg text-headline-lg mb-4">ZynVault</h2>
                <p className="font-body-md text-on-surface-variant">Military-grade encryption with zero-trust architecture. Your data, locked in the digital ether.</p>
              </div>
              <div className="mt-8 bg-surface-container-highest/50 p-6 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">shield_lock</span>
                  </div>
                  <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-tertiary"></div>
                  </div>
                </div>
                <div className="text-label-sm font-label-sm text-on-surface-variant opacity-50">ENCRYPTION ACTIVE: 99.9%</div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="md:col-span-4 glass-card p-10 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2">Supersonic Sync</h3>
              <p className="font-body-md text-on-surface-variant">Global edge distribution ensures 20ms latency regardless of where your team is located.</p>
            </div>

            <div className="md:col-span-8 glass-card p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="font-label-sm text-label-sm text-secondary mb-4">AI INTEGRATION</span>
                <h3 className="font-display-lg text-headline-lg mb-4">ZynCognition</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Autonomous workflow optimization. Let our neural engine handle the repetitive, so you can focus on the visionary.</p>
                <button className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all">
                  Learn how it works <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                  <span className="font-label-sm text-primary text-2xl font-bold">98%</span>
                  <span className="text-label-sm opacity-60">Accuracy</span>
                </div>
                <div className="aspect-square bg-surface-container-highest rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                  <span className="font-label-sm text-secondary text-2xl font-bold">14x</span>
                  <span className="text-label-sm opacity-60">ROI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-section-gap bg-surface-container-lowest/50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-container-mobile md:px-container-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-4">Precision Pricing</h2>
              <p className="font-body-lg text-on-surface-variant">Scalable power for every stage of your evolution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic */}
              <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col">
                <span className="font-label-sm text-label-sm mb-6">PIONEER</span>
                <div className="mb-8">
                  <span className="text-display-lg font-display-lg">$499</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-body-md"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Up to 10 users</li>
                  <li className="flex items-center gap-3 text-body-md"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Core Command Center</li>
                  <li className="flex items-center gap-3 text-body-md text-on-surface-variant/50"><span className="material-symbols-outlined text-sm">cancel</span> AI Optimization</li>
                </ul>
                <button className="w-full py-4 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all">Get Started</button>
              </div>

              {/* Enterprise - Featured */}
              <div className="glass-card p-10 rounded-3xl border-2 border-primary/50 relative overflow-hidden flex flex-col scale-105 shadow-2xl shadow-primary/10">
                <div className="absolute top-0 right-0 bg-primary px-4 py-1 rounded-bl-xl font-label-sm text-on-primary text-[10px]">MOST POPULAR</div>
                <span className="font-label-sm text-label-sm text-primary mb-6">ELITE</span>
                <div className="mb-8">
                  <span className="text-display-lg font-display-lg">$1,299</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-body-md"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Unlimited Users</li>
                  <li className="flex items-center gap-3 text-body-md"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Full Cognition AI Suite</li>
                  <li className="flex items-center gap-3 text-body-md"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 24/7 Priority Bridge</li>
                </ul>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold hover:opacity-90 transition-all">Go Elite</button>
              </div>

              {/* Custom */}
              <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col">
                <span className="font-label-sm text-label-sm mb-6">ORBIT</span>
                <div className="mb-8">
                  <span className="text-headline-lg font-display-lg">Custom</span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-10 flex-1">Bespoke infrastructure tailored for global conglomerates and state-level operations.</p>
                <button className="w-full py-4 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive CTA Section */}
        <section className="py-section-gap px-container-mobile">
          <div className="max-w-[1200px] mx-auto glass-card p-16 rounded-[40px] text-center relative overflow-hidden border-primary/20">
            <div className="absolute inset-0 shimmer opacity-20 pointer-events-none"></div>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6">Ready to transcend the ordinary?</h2>
            <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">Join over 5,000 enterprise leaders who have already migrated their workflow to ZYNLOFT.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-on-primary px-12 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,180,168,0.4)] transition-all">Start Free Trial</button>
              <button className="text-on-surface flex items-center gap-2 group">
                Book a Technical Demo 
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
