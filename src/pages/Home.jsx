import React, { useEffect } from 'react';
import './Home.css';
import logoUrl from '../zynloft.jpeg';

export default function Home() {
  useEffect(() => {
    // Mousemove tilt effects for portfolio cards
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.group.relative');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (
          e.clientX > rect.left &&
          e.clientX < rect.right &&
          e.clientY > rect.top &&
          e.clientY < rect.bottom
        ) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const rotateX = (e.clientY - centerY) / 20;
          const rotateY = (centerX - e.clientX) / 20;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
      });
    };

    // Smooth scroll for anchors
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="home-body-wrap min-h-screen font-body-md bg-background text-on-background selection:bg-primary-container selection:text-white overflow-x-hidden">
      {/* Opening Experience */}
      <div className="opening-overlay fixed inset-0 z-[100] bg-black flex items-center justify-center">
        <div className="opening-logo text-center">
          <div className="mb-4 inline-block">
            <img src={logoUrl} alt="Zynloft Logo" className="h-24 w-24 rounded-full object-cover shadow-2xl shadow-primary/20" />
          </div>
          <h1 className="font-headline-lg text-headline-lg text-white tracking-widest uppercase mt-4">ZYNLOFT</h1>
        </div>
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto overflow-hidden">
          <div className="hero-glow -top-20 -left-20"></div>
          <div className="hero-glow -bottom-20 -right-20" style={{ animationDelay: '-4s' }}></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center w-full">
            {/* Left Content */}
            <div className="z-10">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-4 block">Enterprise Innovation</span>
              <h2 className="font-display-xl text-[48px] md:text-display-xl mb-6 leading-tight">Building <span className="gradient-text">Future-Ready</span> Digital Solutions</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">We engineer high-performance technical ecosystems that empower C-suite pioneers to dominate digital landscapes with cinematic precision.</p>
              <div className="flex flex-wrap gap-4">
                <button className="gradient-button px-10 py-4 rounded-xl font-headline-lg text-[18px] text-white flex items-center gap-2">
                  Explore Services <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="px-10 py-4 rounded-xl font-headline-lg text-[18px] text-on-surface border border-outline-variant hover:bg-surface-variant transition-all backdrop-blur-md">
                  Book Consultation
                </button>
              </div>
            </div>
            {/* Right Visual */}
            <div className="relative hidden md:flex justify-center items-center h-[600px]">
              <div className="absolute inset-0 z-0">
                {/* Technical Grid Overlay (Abstract) */}
                <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffb4a8 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
              </div>
              {/* Floating Glassmorphism Cards */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="glass-card absolute top-20 right-10 p-6 rounded-2xl w-64 transform hover:-translate-y-2 transition-transform duration-500 z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" data-weight="fill">monitoring</span>
                    </div>
                    <div className="text-xs font-label-sm text-on-surface-variant">ANALYTICS v2.0</div>
                  </div>
                  <div className="h-1 bg-outline-variant w-full mb-2">
                    <div className="h-full bg-primary w-3/4"></div>
                  </div>
                  <div className="text-[20px] font-headline-lg text-on-surface">+142% Growth</div>
                </div>
                <div className="glass-card absolute bottom-20 left-10 p-6 rounded-2xl w-72 transform hover:translate-y-[-8px] transition-transform duration-500 z-10 backdrop-blur-2xl">
                  <div className="font-label-sm text-[10px] text-primary mb-2">SYSTEM_STATUS: OPTIMAL</div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-on-surface-variant">Encryption</span>
                      <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-on-surface-variant">Cloud Sync</span>
                      <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-on-surface-variant">AI Engine</span>
                      <span className="material-symbols-outlined text-primary text-sm">sync</span>
                    </div>
                  </div>
                </div>
                <img className="w-4/5 h-4/5 object-cover rounded-3xl grayscale opacity-40 mix-blend-screen" data-alt="A sophisticated 3D digital visualization of a neural network with glowing red nodes and orange connecting lines floating in a deep black space. The image features cinematic lighting with subtle lens flares and a futuristic tech-noir aesthetic, emphasizing enterprise innovation and high-speed data processing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFb1cJv54nx7wF9J0tzHMNY9Fgv9j-fqWl3G2RsWwrtGrKmlgrBOCjRotiShcqKae3hrgUXOUVHCf8eW9MRGZxHGadv9My2c9nvxb6N6Q_NxR4G2pt96tVRbsH5DJ15lwQaoHZuFpvOkJFpjEySuQAtho-paL1QhdySJzClKBqRz5HbFpRhHGXnp_-S-03cmdfDQZSFyVsS4KqPtwT8uhJqYGjYJhURI3qsDIIzArojnFJzgAAD2ipDIjEtQg8R-jjzrJj0Cq9jaU" alt="Neural Network" />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Technologies Section */}
        <section className="py-20 border-y border-outline-variant/30 overflow-hidden">
          <div className="px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto mb-10">
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase text-center tracking-[0.2em]">Forged With Industry Giants</h3>
          </div>
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center space-x-20 px-10">
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">REACT.JS</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">NEXT.JS</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">TYPESCRIPT</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">PYTHON AI</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">AWS CLOUD</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">DOCKER</span>
            </div>
            {/* Clone for infinite effect */}
            <div className="flex items-center space-x-20 px-10">
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">REACT.JS</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">NEXT.JS</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">TYPESCRIPT</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">PYTHON AI</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">AWS CLOUD</span>
              <span className="font-headline-lg text-[24px] text-on-surface-variant/50 hover:text-primary transition-colors cursor-default">DOCKER</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto" id="services">
          <div className="text-center mb-20">
            <h2 className="font-display-lg text-display-lg mb-4">Precision <span className="gradient-text">Engineering</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From strategic consultancy to full-stack deployment, we offer a spectrum of elite digital services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card group p-8 rounded-[32px] hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[48px] text-primary mb-6 group-hover:scale-110 transition-transform duration-500">architecture</span>
              <h4 className="font-headline-lg text-headline-lg mb-4">UI/UX Architecture</h4>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8">Crafting cinematic interfaces that balance high-performance utility with world-class aesthetics.</p>
              <ul className="space-y-2 text-sm font-label-sm text-primary">
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
                <li>• Prototyping</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="glass-card group p-8 rounded-[32px] hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[48px] text-secondary mb-6 group-hover:scale-110 transition-transform duration-500">terminal</span>
              <h4 className="font-headline-lg text-headline-lg mb-4">Cloud Infrastructure</h4>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8">Scaling your vision with robust cloud-native architectures and secure serverless computing.</p>
              <ul className="space-y-2 text-sm font-label-sm text-secondary">
                <li>• AWS/Azure/GCP</li>
                <li>• Kubernetes Ops</li>
                <li>• Data Security</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="glass-card group p-8 rounded-[32px] hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[48px] text-tertiary mb-6 group-hover:scale-110 transition-transform duration-500">memory</span>
              <h4 className="font-headline-lg text-headline-lg mb-4">AI Integration</h4>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8">Leveraging the power of LLMs and neural networks to automate complex enterprise workflows.</p>
              <ul className="space-y-2 text-sm font-label-sm text-tertiary">
                <li>• NLP Solutions</li>
                <li>• Predictive Analysis</li>
                <li>• Custom LLMs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Zynloft (Stats) */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              <div className="p-8">
                <div className="font-display-lg text-display-lg text-primary mb-2">99%</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Satisfaction</div>
              </div>
              <div className="p-8 border-l border-outline-variant/30">
                <div className="font-display-lg text-display-lg text-white mb-2">24/7</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Global Support</div>
              </div>
              <div className="p-8 border-l border-outline-variant/30">
                <div className="font-display-lg text-display-lg text-white mb-2">500+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Projects Delivered</div>
              </div>
              <div className="p-8 border-l border-outline-variant/30">
                <div className="font-display-lg text-display-lg text-primary mb-2">12ms</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Avg Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display-lg text-display-lg mb-2">The <span className="gradient-text">Portfolio</span></h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Selected works from our digital factory.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group">
              View All Case Studies <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Portfolio Card 1 */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[40px] bg-surface-container-high cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" data-alt="A sleek and modern digital interface for a cybersecurity dashboard, featuring dark theme elements, neon-accented data charts, and sophisticated typography. The scene is shot from an isometric angle with shallow depth of field, emphasizing high-end UI design and professional technical implementation for a premium corporate client." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqlQBi9MbGD5UkMyiBV5kiqcmM026a3JuGGBE2JrkMUJRdd4biPwPz1OyoNS1gvCZyWjxhXTKGf1GTLmYP5xp60vboA2eow0d3r_QjTFhZCqkkz29kjuM3Ou878TnslFAP7WhO7Ox6PfPLkhD40YaxSk2wa1DXRdkw79oiRka2JPjo7bdIV9MIbPfa3b3KRF6BdzS3N_qAzb87bRnvf1KWLJ7amOYFH4cpcKNhQdrfcirHrXiHY7u8oM81ZidOYYoN7G4TOGmIxwU" alt="Vortex Shield" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-label-sm text-label-sm text-primary mb-2">CYBERSECURITY</span>
                <h4 className="font-display-lg text-[32px] text-white">Vortex Shield v4</h4>
                <p className="text-on-surface-variant max-w-sm mt-4">Next-generation threat detection for global fintech ecosystems.</p>
              </div>
            </div>
            {/* Portfolio Card 2 */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[40px] bg-surface-container-high cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1" data-alt="A professional close-up of a high-tech processor chip integrated into a futuristic motherboard with glowing fiber-optic connections. The color scheme is dominated by deep blacks and vibrant reds, creating an atmosphere of intense technological power and precision, reflecting the high-performance computing solutions developed by Zynloft." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7_NDwMJzvWcq0xU6KVFTFMh8JdsNR3GOdPVqkOQ2kJ398fH_88UoIHiaDUDSNAYBhRTy3VvLXgHbyOGKm0fWkCtDsEq6OP2-GkSCib0Uf_hYKJ4Hneu7fTyX7bxaE2IvwHbS9hsmWDzSBVdjuVWeVCKj-5RbDbtokSg1PNizUXlmp3NtqZDZly95NUchRwG4DHfo7QRiVs5z3ThvBHKWL15iS2-pXb90JnHKG3EydJbsE82p4KqfeScBtvifFVOlIeMM4JAvOQ_Y" alt="Nano-Sync ERP" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-label-sm text-label-sm text-secondary mb-2">SEMICONDUCTORS</span>
                <h4 className="font-display-lg text-[32px] text-white">Nano-Sync ERP</h4>
                <p className="text-on-surface-variant max-w-sm mt-4">Automated resource planning for advanced manufacturing plants.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-section-gap px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-display-lg mb-4">Pioneer <span className="gradient-text">Voices</span></h2>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x">
            {/* Testimonial 1 */}
            <div className="glass-card flex-shrink-0 w-[400px] p-8 rounded-3xl snap-center">
              <div className="flex gap-1 mb-6 text-primary">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="italic text-on-surface-variant font-body-lg mb-8 leading-relaxed">"Zynloft didn't just build a website; they engineered a digital experience that redefined how we interact with our B2B partners. Their attention to detail is unrivaled."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center font-bold text-primary">JD</div>
                <div>
                  <div className="font-headline-lg text-body-md text-white">Jameson Drake</div>
                  <div className="text-xs text-on-surface-variant font-label-sm">CTO, NexaCorp Industries</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="glass-card flex-shrink-0 w-[400px] p-8 rounded-3xl snap-center">
              <div className="flex gap-1 mb-6 text-primary">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="italic text-on-surface-variant font-body-lg mb-8 leading-relaxed">"The speed of delivery was matched only by the technical sophistication of the final product. Truly the Tesla of digital agencies."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center font-bold text-primary">SL</div>
                <div>
                  <div className="font-headline-lg text-body-md text-white">Sarah Lowen</div>
                  <div className="text-xs text-on-surface-variant font-label-sm">Founding Partner, Silicon Venture</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="glass-card flex-shrink-0 w-[400px] p-8 rounded-3xl snap-center">
              <div className="flex gap-1 mb-6 text-primary">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <p className="italic text-on-surface-variant font-body-lg mb-8 leading-relaxed">"Their AI integration strategies saved us hundreds of man-hours per month. Zynloft is the strategic partner every enterprise needs."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant border border-primary/30 flex items-center justify-center font-bold text-primary">MK</div>
                <div>
                  <div className="font-headline-lg text-body-md text-white">Marcus King</div>
                  <div className="text-xs text-on-surface-variant font-label-sm">Director of Operations, OmniLogistics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-section-gap relative overflow-hidden">
          <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"></div>
          <div className="px-container-mobile md:px-container-desktop max-w-[1440px] mx-auto text-center relative z-10">
            <h2 className="font-display-xl text-[48px] md:text-display-xl mb-6">Let's Build Something <span className="gradient-text">Extraordinary</span></h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-12 max-w-2xl mx-auto">Your vision deserves the pinnacle of engineering. Partner with Zynloft and lead the digital frontier.</p>
            <div className="flex justify-center gap-6">
              <button className="gradient-button px-12 py-5 rounded-full font-headline-lg text-[20px] text-white flex items-center gap-3">
                Initiate Project <span className="material-symbols-outlined">rocket_launch</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
