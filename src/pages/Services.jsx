import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import './Services.css';

export default function Services() {
  useEffect(() => {
    // Floating particle motion effect via mouse
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.hero-glow');
      if (glow) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(230, 0, 0, 0.15) 0%, transparent 70%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <SEO title="Services | Zynloft Solutions" description="Zynloft delivers precision-engineered software for the technical elite." />
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden particle-bg min-h-screen">
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-[180px] pb-16 px-container-mobile text-center min-h-[60vh] relative z-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-label-sm text-label-sm uppercase tracking-widest animate-pulse">
              Enterprise Solutions
            </div>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl leading-tight text-white">
              Engineering the <span className="text-gradient">Next Generation</span> of Digital Power
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              From deep-learning AI to resilient cloud infrastructures, Zynloft delivers precision-engineered software for the technical elite and global visionaries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center gap-2 text-on-surface-variant opacity-60">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-label-sm text-label-sm">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant opacity-60">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                <span className="font-label-sm text-label-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant opacity-60">
                <span className="material-symbols-outlined text-[20px]">shield</span>
                <span className="font-label-sm text-label-sm">Elite Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service: Custom Software & AI */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-[32px]" data-weight="fill">psychology</span>
                  <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase">Intelligence Architecture</span>
                </div>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg">Custom AI & Machine Learning</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  We don't just build software; we architect cognitive engines. Our AI solutions process petabytes of data to deliver predictive insights that drive multi-billion dollar decisions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="font-label-sm text-label-sm text-primary mb-2">Tech Stack</h4>
                  <p className="font-body-md text-body-md text-on-surface">PyTorch, TensorFlow, NVIDIA CUDA, Kafka</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="font-label-sm text-label-sm text-primary mb-2">Process</h4>
                  <p className="font-body-md text-body-md text-on-surface">Analysis &gt; Model Training &gt; Optimization</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold group">
                Deploy AI Solution
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all"></div>
              <div className="relative glass-card aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <img alt="AI Brain Concept" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="A cinematic 3D render of a neural network composed of glowing red and orange fibers pulsing with light against a deep obsidian background. The structure resembles a human brain made of fiber-optic cables, with data packets visibly streaming through the pathways. The lighting is high-contrast, utilizing the primary red palette to highlight complexity and technical precision in a dark-mode enterprise style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADiDH2p-a_SYS9_dRgxeWZ8gU7lYbkf-UEG5zH1EO5slETDkkwm6NdHr9gTTM1yw5szYqL_TNHcsqujOoDcmX3DEpYJM2O8a0IcQEDGoMJ6W26AryKWWawqH47aItf18jrqJ9DBYUjTtHJat7bvfqn1rAr1NcGxPkWDbH_lpHAZHDR_JV5mlcatxvwIypHhU75QN8uNlbMXBWDVB03hL78gAVM-yVGNVJo9ZPRliNE4CPq0wETObWlBk1CAtqDyn_UrI3DxhWFNr0" />
              </div>
            </div>
          </div>
        </section>

        {/* Service: Enterprise Web & Apps */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="md:order-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined text-[32px]">layers</span>
                  <span className="font-label-sm text-label-sm tracking-[0.2em] uppercase">Ecosystem Engineering</span>
                </div>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg">Web, Mobile & SaaS Platforms</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Ultra-performant, cross-platform ecosystems designed for massive scale. We specialize in zero-latency interfaces and resilient backends that handle millions of concurrent users.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-surface-container rounded-full text-on-surface font-label-sm">React Next.js</span>
                <span className="px-4 py-2 bg-surface-container rounded-full text-on-surface font-label-sm">Go / Rust</span>
                <span className="px-4 py-2 bg-surface-container rounded-full text-on-surface font-label-sm">Flutter</span>
                <span className="px-4 py-2 bg-surface-container rounded-full text-on-surface font-label-sm">Kubernetes</span>
              </div>
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 border-r-2 border-primary"></div>
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Process Timeline</p>
                    <p className="font-headline-lg text-headline-lg">12 Weeks to MVP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:order-1 relative group">
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
              <div className="relative glass-card aspect-video md:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img alt="SaaS Dashboard Design" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" data-alt="A futuristic web application interface displayed on multiple floating glass screens. The UI features dark-mode layouts with glowing red accents, complex data visualizations, and minimalist typography. The scene is set in a high-tech studio with soft atmospheric smoke and orange ambient lighting, creating a premium and cinematic enterprise software aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMDZL9YeiWz8aA0CkgR7w7j_irP2vW-JZjduCHfH3pT4wAPAPhYnhmAKadEKRoqr1sEaqMnr7Ht8f-fTGrokEiHmvBkbkS5jLm0JZUu0lmoGd4yga1j_h_1tMX4yOYqtWbYQWhIdtzgXQoKnOoXnngEMR0HE-w8RyqontJZo5XF5As1ZDzEfbpmrni_dWSV3nO0z-7MEQfx8PE6R-ZYbiOlGNLlBFUJl3kshm2_xjrgYow3BFT8ukW4aaVjtRY4FjbUmMKxDN70i8" />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Cloud, UX, Automation */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg">The Technical Core</h2>
            <p className="font-body-lg text-on-surface-variant">Specialized units for mission-critical operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Cloud Infra */}
            <div className="md:col-span-2 glass-card p-8 rounded-3xl group hover:border-primary/40 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-[48px] text-primary" data-weight="fill">cloud_done</span>
                <div className="text-right">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Status</p>
                  <p className="font-body-md text-primary">Operational</p>
                </div>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-4">Cloud &amp; Infrastructure</h3>
              <p className="font-body-md text-on-surface-variant mb-6">AWS/Azure/GCP management with 99.99% uptime guarantees and automated disaster recovery protocols.</p>
              <div className="flex items-center gap-4 text-label-sm font-label-sm opacity-50">
                <span>TERRAFORM</span>
                <span>ANSIBLE</span>
                <span>DOCKER</span>
              </div>
            </div>
            {/* UI/UX */}
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/40 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[40px] text-primary">draw</span>
              <div>
                <h3 className="font-headline-lg text-headline-lg mb-2">UI/UX Labs</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Design systems that prioritize cognitive flow and executive efficiency.</p>
              </div>
            </div>
            {/* Automation */}
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/40 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[40px] text-primary">precision_manufacturing</span>
              <div>
                <h3 className="font-headline-lg text-headline-lg mb-2">Automation</h3>
                <p className="font-body-md text-on-surface-variant text-sm">End-to-end workflow automation for enterprise-level operations.</p>
              </div>
            </div>
            {/* Cybersecurity */}
            <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="flex items-center gap-6">
                <div className="h-32 w-32 rounded-2xl bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] text-primary">security</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-lg text-headline-lg mb-2">Enterprise Security</h3>
                  <p className="font-body-md text-on-surface-variant">Proactive threat hunting, zero-trust architecture, and biometric encryption systems.</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10 font-label-sm text-[80px]">ENCRYPT</div>
            </div>
            {/* Big CTA */}
            <div className="md:col-span-2 bg-gradient-primary p-8 rounded-3xl flex flex-col justify-center items-start text-white shadow-[0_0_50px_rgba(230,0,0,0.3)]">
              <h3 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-4">Ready to upgrade your infrastructure?</h3>
              <p className="font-body-lg mb-8 opacity-90">Our architects are ready for a technical briefing.</p>
              <button className="bg-background text-on-background px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-section-gap px-container-mobile bg-surface-container-lowest/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg">Our Execution Framework</h2>
            </div>
            <div className="space-y-12 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-primary/20">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="md:w-1/2 md:pr-16 text-left md:text-right">
                  <h4 className="font-headline-lg text-headline-lg text-primary">01 Discovery</h4>
                  <p className="text-on-surface-variant">High-level analysis of technical debt, business goals, and scalability requirements.</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_#ffb4a8]"></div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_#ffb4a8]"></div>
                <div className="md:w-1/2 md:pl-16 text-left">
                  <h4 className="font-headline-lg text-headline-lg text-primary">02 Architecture</h4>
                  <p className="text-on-surface-variant">Design of modular systems and cloud topology tailored for future growth.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                <div className="md:w-1/2 md:pr-16 text-left md:text-right">
                  <h4 className="font-headline-lg text-headline-lg text-primary">03 Deployment</h4>
                  <p className="text-on-surface-variant">CI/CD pipelines push code to production with automated testing and zero downtime.</p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_#ffb4a8]"></div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
