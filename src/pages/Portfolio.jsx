import React, { useEffect } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  useEffect(() => {
    // Simple mouse move aura effect
    const handleMouseMove = (e) => {
      const auras = document.querySelectorAll('.hero-aura');
      auras.forEach(aura => {
        const x = (e.clientX - window.innerWidth / 2) * 0.05;
        const y = (e.clientY - window.innerHeight / 2) * 0.05;
        aura.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="portfolio-body-wrap font-body-md selection:bg-primary-container selection:text-white min-h-screen">
      <div id="particles-js"></div>

      <main className="pt-32 pb-section-gap">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-container-mobile md:px-container-desktop relative">
          <div className="hero-aura -top-20 -left-20"></div>
          <div className="max-w-4xl">
            <span className="font-label-sm text-label-sm text-primary system-readout mb-4 block">Archive: Showcase 2026</span>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl leading-tight mb-6">
              Forging the <span className="gradient-text">Future of Enterprise</span> through Technical Precision.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Our portfolio represents the intersection of high-performance architecture and cinematic user experiences. Each project is a testament to our commitment to engineering excellence.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mt-16 max-w-[1440px] mx-auto px-container-mobile md:px-container-desktop">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-2 bg-primary-container text-on-primary-container rounded-full font-label-sm text-label-sm transition-all">All Projects</button>
            <button className="px-6 py-2 glass-card rounded-full font-label-sm text-label-sm hover:text-primary transition-all">AI Infrastructure</button>
            <button className="px-6 py-2 glass-card rounded-full font-label-sm text-label-sm hover:text-primary transition-all">FinTech Systems</button>
            <button className="px-6 py-2 glass-card rounded-full font-label-sm text-label-sm hover:text-primary transition-all">SaaS Platforms</button>
            <button className="px-6 py-2 glass-card rounded-full font-label-sm text-label-sm hover:text-primary transition-all">Web3 Protocols</button>
          </div>
        </section>

        {/* Projects Bento Grid */}
        <section className="mt-12 max-w-[1440px] mx-auto px-container-mobile md:px-container-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Project Card 1: Large Featured */}
            <div className="md:col-span-8 group relative overflow-hidden glass-card rounded-xl">
              <div className="aspect-[16/9] w-full relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="A cinematic high-tech server room with glowing red fiber optic cables and dark metallic surfaces. The atmosphere is professional and sleek, featuring subtle light leaks and a sense of immense processing power. The lighting is low-key with vibrant red highlights against deep charcoal backgrounds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPILiALkUYErbw29D-j_pabchWzVTuVQNUbqS0v-iCpxVSgOb1YAw_s9Yq6dpM_FomqHtC1UcezTuJOu2GYUmMlljauAAdJANEBCibWuwbBG0zli2nA4PvCRs0VakV_L9HWmXzZSdPLxVGl9zKw266Z1XlhOAGMcJItXcjSOUF-lyi3CJmeF1jBM0ZqwwNutEdkB_ZKRoKmV8NdnC11nOU7a62nahp42zR312CN9aHk7UVgV8yqgH9_iEg3jVoDC5D_Yl7wovXHBE" alt="Ledger" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] rounded-full system-readout">01 / ARCHITECT</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">FinTech Ecosystem</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-2">OmniBridge Global Ledger</h3>
                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-primary">Latency</span>
                    <span className="text-headline-lg-mobile font-bold">12ms</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm font-label-sm text-primary">Throughput</span>
                    <span className="text-headline-lg-mobile font-bold">1.2M TPS</span>
                  </div>
                  <button className="ml-auto flex items-center gap-2 font-label-sm text-label-sm text-on-surface group/btn">
                    View Case Study 
                    <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="md:col-span-4 group glass-card rounded-xl p-6 flex flex-col">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A futuristic abstract digital interface representing complex data encryption and Web3 security protocols. Glowing geometric nodes are connected by thin white lines over a deep obsidian canvas with subtle red atmospheric glows. The style is minimalist and high-end technical enterprise design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBffZ3WqUQfFNgv1x63ie6aXe6il4Z82nXKVRhqNTu_pPcCRoeMnYL7Cx7s5f4K211lIe3V2whK2D4ZzQfi3EYDQtxKJ130f48M6yDFDmr-J7oyobwLw3X8KgMFvicCpgTtGX6bxXh76jD0_MYUCKOFSlv9_Cvxa41LWCRPSoPznsCcVkxp71zleD2ZEdVvOZfqc7kMRwJ1YcDATlKkJefdw4AtVPCY7-6J5HxkIKl7l4ryn7O4zzGng1O7h3IA4B2_OByxQ_fjVk8" alt="Guardian" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-primary font-label-sm text-label-sm system-readout mb-2">Web3 / Security</span>
                <h3 className="font-headline-lg text-headline-lg mb-4 leading-tight">Guardian Protocol V2</h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-2">
                  End-to-end encryption for multi-sig institutional assets with zero-knowledge proof verification.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] rounded border border-outline-variant">Solidity</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] rounded border border-outline-variant">Next.js</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="md:col-span-4 group glass-card rounded-xl p-6 flex flex-col">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Close up of high-end enterprise hardware and motherboards with glowing amber and red circuits. The image is stylized with extreme shallow depth of field, highlighting the precision of the manufacturing and technical detail. Dark, cinematic aesthetic with controlled lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6aSN_bQkV8X26y0U56LoUOmBrrZSCPpqKUYkmxzz71e4FMmAjEk6NnyU25HoLdrgq4Oyg4nTySufSOTOZmMOkNzroAqfZjBaUU8QXfQ-OMmFjJEbYpscHB68kZxvJNIdZO-JRuu0UVAHSV17lN9fSuuYXoJp1HOkjMddikZxZEAv_HjkKmFvdHhGnsZ7rcRZ9y8xJHRMfChWUi2Wxr2YgF7Uo8CER-V_n5K5-1WJx0ln1YfrXEPNxQGXw3fVYkbs92Dajg7K023Y" alt="Aether Neural Core" />
              </div>
              <span className="text-primary font-label-sm text-label-sm system-readout mb-2">AI / Logistics</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Aether Neural Core</h3>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-2">
                Predictive logistics engine managing global supply chains with 99.8% accuracy.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border-2 border-background"><span className="material-symbols-outlined text-[16px]">psychology</span></div>
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border-2 border-background"><span class="material-symbols-outlined text-[16px]">hub</span></div>
                </div>
                <button className="text-primary font-label-sm text-label-sm">Review Results</button>
              </div>
            </div>

            {/* Project Card 4: Detailed Case Study Preview */}
            <div className="md:col-span-8 glass-card rounded-xl p-8 relative">
              <div className="hero-aura -bottom-40 -right-20 opacity-40"></div>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <span className="system-readout text-primary text-[10px] mb-4 block">Case Study // 04</span>
                  <h2 className="font-display-lg text-headline-lg mb-6 leading-tight">Designing for <br/>Massive Scale.</h2>
                  <p className="text-on-surface-variant mb-8">
                    How we revolutionized the user experience for Helios Bank's internal trader terminals, reducing cognitive load by 40% and increasing transaction speed.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                      <span className="font-body-md text-body-md">Custom micro-interaction engine</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                      <span className="font-body-md text-body-md">Sub-millisecond data visualization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
                      <span className="font-body-md text-body-md">Dynamic dark-mode adaptation</span>
                    </li>
                  </ul>
                  <button className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-all font-label-sm text-label-sm flex items-center gap-2 group">
                    Read Full Case Study
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                  </button>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="bg-surface-container rounded-lg border border-white/10 p-4 shadow-2xl rotate-2">
                    <img className="rounded border border-white/5 w-full object-cover" data-alt="A professional dashboard showing complex financial data with glowing red and orange line graphs on a black background. The interface looks sophisticated, high-performance, and futuristic, following a premium dark-mode aesthetic with glassmorphic elements and clean typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRmIOzdjpe8_y4vbyU_i9sFJihn89PPxkdxKFKjX-4A8PQdAsvz4b1WCDZAiBan6SD185yFgrlZ8Zqy2dZTWWGxINvdCN4WC105os5_N2rZYD7ndKmB1r7gvmNt6e1IPgmA2Tk-zPC_0kXfg-JUD1oXkE3MIF-YB6M1k3mIMbRUihYqRTLTCbY6mHhuuvPbLe9Ul0RcmWxypM7Gyy_6E1Jk4D_wD0N_yxSOHvv8BVnNuGzRN7V1cYo-f2be9b6cw274ZO10OY2aY" alt="Dashboard" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-primary-container p-4 rounded-lg shadow-xl -rotate-3 hidden md:block">
                    <span className="font-label-sm text-label-sm text-white">Efficiency +45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-section-gap max-w-[1440px] mx-auto px-container-mobile md:px-container-desktop">
          <div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 to-transparent pointer-events-none"></div>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8">Ready to Build Your <br/>Next Milestone?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-primary-container text-on-primary-container rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary-container/20">
                Start a Project
              </button>
              <button className="px-10 py-4 glass-card rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View More Insights
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
