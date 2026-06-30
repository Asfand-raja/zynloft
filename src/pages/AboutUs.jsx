import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import './AboutUs.css';

export default function AboutUs() {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) return;

    const particleCount = 40;
    const activeAnimations = [];

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const duration = 10000 + Math.random() * 20000;
      const driftX = (Math.random() - 0.5) * 10;

      particle.style.left = `${startX}%`;
      particle.style.top = `${startY}%`;
      particle.style.opacity = Math.random() * 0.5;

      container.appendChild(particle);

      const animation = particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0 },
          { opacity: 0.4, offset: 0.5 },
          { transform: `translate(${driftX}vw, -10vh)`, opacity: 0 }
        ],
        {
          duration: duration,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
      activeAnimations.push({ particle, animation });
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    return () => {
      activeAnimations.forEach(({ particle, animation }) => {
        animation.cancel();
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
    <SEO title="About Us | Zynloft Solutions" description="Zynloft Solutions is a collective of visionaries, engineers, and designers." />
    <div className="about-body-wrap min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-white">
      <main className="relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0" id="particles-container" ref={particlesContainerRef}></div>
        <div className="hero-glow absolute top-[-10%] right-[-5%] w-[60%] h-[60%] opacity-40 blur-3xl rounded-full"></div>
        <div className="hero-glow absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] opacity-20 blur-3xl rounded-full"></div>

        {/* Hero Section */}
        <section className="relative z-10 px-container-mobile md:px-container-desktop py-section-gap max-w-[1440px] mx-auto text-center md:text-left">
          <div className="max-w-4xl">
            <span className="font-label-sm text-label-sm text-primary mb-4 block uppercase tracking-widest">Pioneering the Future</span>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl mb-8 leading-tight">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e60000] to-[#ff8a00]">Next-Gen</span> <br />Digital Frontiers
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Zynloft Solutions isn't just a technology firm; we are a collective of visionaries, engineers, and designers committed to rewriting the rules of the enterprise landscape.
            </p>
          </div>
        </section>

        {/* Company Story (Bento Style) */}
        <section className="relative z-10 px-container-mobile md:px-container-desktop py-section-gap max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7 glass-card p-8 md:p-12 rounded-xl flex flex-col justify-center">
              <span className="font-label-sm text-label-sm text-secondary-fixed mb-4">THE GENESIS</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Born from the need for Absolute Precision.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Founded in 2021, Zynloft emerged during a period of global digital recalibration. We saw a gap between "functional software" and "transformative systems." Our journey began in a small lab in Zurich, focused on high-frequency data processing and elegant interface design. Today, we stand as a beacon for global enterprises seeking to bridge the gap between human intuition and machine intelligence.
              </p>
            </div>
            <div className="md:col-span-5 relative overflow-hidden rounded-xl min-h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover" data-alt="A cinematic, high-contrast photograph of a minimalist laboratory environment with glowing red and orange holographic displays reflecting on sleek black surfaces. The setting is clean, professional, and technologically advanced, with a focus on precision and high-end enterprise design. Soft atmospheric smoke and sharp lighting create a sense of mystery and innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMseZJ19T4QyZlrFLzqBk83P4cQDnZJ1ypA9HjvZjjaFbYnU4fxcBlRooedHBPsUdTj_ifj55QyA38yd6Cz8gqv4oX9qMGOWHIYN12NEqrUFNQOCyyOTWIgtIuZJQAVxMdGUBTe5JrAoBZyCOutwJ8jly4Vt41xMKYxbvfFmZI2j1eh_ruLPInxha5E5crXOzkBCHiOmWq0yuSBGCYNHAtLe2PIK90NMrVAF7aVAqrE00c9sV-CNmu2uSGE6XJlPWAEA9vb7ZxD0M" alt="Zynloft Lab Genesis" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative z-10 px-container-mobile md:px-container-desktop py-section-gap max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="p-8 border-l-2 border-primary-container glass-card rounded-r-xl">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">rocket_launch</span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-primary">Our Mission</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To empower industry leaders with resilient, high-performance digital ecosystems that anticipate the needs of tomorrow, ensuring technology remains a competitive advantage rather than a friction point.
              </p>
            </div>
            <div className="p-8 border-l-2 border-tertiary-container glass-card rounded-r-xl">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">visibility</span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-tertiary">Our Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To be the global gold standard for enterprise software, recognized for our uncompromising aesthetic, technical mastery, and our ability to humanize complex technological shifts.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="relative z-10 px-container-mobile md:px-container-desktop py-section-gap max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-4">Architects of Vision</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="group relative overflow-hidden rounded-xl glass-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="A professional portrait of a tech executive with a confident, visionary expression. The lighting is dramatic and cinematic, with warm orange rim lights against a deep black background. The style is high-end and corporate, resembling a premium magazine cover. Deep shadows and sharp highlights emphasize leadership and technical authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB02RcXzL6AEQqDGHZ4GV_6d6zSYx1N8uUTCcTXWjRB9PqmEGZtUfqId8qnHNX7SZOkbWYP__6CbfqqSqwyCwlPl8u7enFZEaKvFdN7tDwkJ1RVRPUurMQXaJ2d4YIbkZqKCKoDypTfgkjr8Dff4Z73sjFWNrvU-JEUni_336KZpKpbBbda-RORJf9pVKBh6Y-PYQ16_crzry3UQyFQxRii9hg28R2FS6KJACSa6h04gTJS3K3Zhnr4RxvZMoLrCeEg3gS0EtDOxjs" alt="Elena Vancore - CEO" />
              </div>
              <div className="p-6">
                <p class="font-label-sm text-label-sm text-primary-container mb-1">CHIEF EXECUTIVE OFFICER</p>
                <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Elena Vancore</h4>
                <p className="font-body-md text-body-md text-on-surface-variant italic">"Precision is the soul of luxury."</p>
              </div>
            </div>
            {/* Leader 2 */}
            <div className="group relative overflow-hidden rounded-xl glass-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="A studio portrait of a Chief Technology Officer, featuring a sophisticated and intelligent look. Cinematic lighting with subtle red glow accents against a pure black backdrop. High contrast, sharp details, and a modern enterprise aesthetic. The image captures a sense of deep technical knowledge and strategic foresight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcoXOS22VXaKDlwXHpUc--w8iED2NOKcbWfJRDVNL5Hgof_m0e0WKAYvMi8TnjvxAoxV9J6Ka8hx3q33FGx7eFWYVclKnUGSALr2juLoaawVy2PDGnbU2dDpQCKai4pq0Of56yw7gpyhgr6QRS87rh_Fl_RZRW5dMXArjHvC2nte3M1MjzaghZsmOVFaRkPhThmjSt6zgvMvecAPbl2Wqdix071o0C6O10VUwhiTj-bn1Jj5y_7Ow73AUxCgM7-CTw9Cps_2TpWEU" alt="Marcus Thorne - CTO" />
              </div>
              <div className="p-6">
                <p class="font-label-sm text-label-sm text-primary-container mb-1">CHIEF TECHNOLOGY OFFICER</p>
                <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Marcus Thorne</h4>
                <p className="font-body-md text-body-md text-on-surface-variant italic">"Innovation requires silence and focus."</p>
              </div>
            </div>
            {/* Leader 3 */}
            <div className="group relative overflow-hidden rounded-xl glass-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" data-alt="A professional headshot of a creative director, projecting creativity and elegance. The background is a minimalist black with soft, ethereal orange lighting leaks. High-contrast, cinematic style with a focus on professional sophisticated energy. The mood is artistic yet deeply connected to enterprise standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeVOu6R9x2nmlA11Ie56vZ2DGKyDmbHafrr6yU-j-GDu8WdWtjs7SF6Z7Y4vH_DpNlgZvRSCwdHKsTjzz1eUBtC06ukW2FXzEIv_n7usCcyVgCoDb6kTiKFr4DB1B9TXnR8rs4LPu51Vkr4FhOPeWax_1fcpDxp76FjisQmR4s9dI4FoHW0DnQQS0KDgFFpYlBVD8PwpI6WxKH3MMGCtNAJ-R84zot27O1heXU75fh9MrF8MgV2AioQm_ZasYtNRCZYioU598HzxE" alt="Sienna Solis - CDO" />
              </div>
              <div className="p-6">
                <p class="font-label-sm text-label-sm text-primary-container mb-1">CHIEF DESIGN OFFICER</p>
                <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Sienna Solis</h4>
                <p className="font-body-md text-body-md text-on-surface-variant italic">"Design is how we speak without words."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="relative z-10 px-container-mobile md:px-container-desktop py-section-gap max-w-[1440px] mx-auto">
          <div className="glass-card p-12 md:p-20 rounded-3xl relative overflow-hidden">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="font-label-sm text-label-sm text-secondary mb-4 block uppercase tracking-widest">ROADMAP 2030</span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8">The Infinite Horizon</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                <div>
                  <div className="text-primary text-4xl font-black mb-4">01.</div>
                  <h5 className="font-body-lg text-body-lg font-bold mb-2">Neural Integration</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant">Developing interfaces that sync seamlessly with cognitive workflows.</p>
                </div>
                <div>
                  <div className="text-primary text-4xl font-black mb-4">02.</div>
                  <h5 className="font-body-lg text-body-lg font-bold mb-2">Global Mesh</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant">Establishing decentralized infrastructure for instant global scaling.</p>
                </div>
                <div>
                  <div className="text-primary text-4xl font-black mb-4">03.</div>
                  <h5 className="font-body-lg text-body-lg font-bold mb-2">Autonomous Core</h5>
                  <p className="font-body-md text-body-md text-on-surface-variant">Perfecting self-healing systems that evolve without human intervention.</p>
                </div>
              </div>
              <button className="mt-12 bg-transparent border border-white/20 px-8 py-3 rounded-full font-bold text-primary hover:bg-white/5 transition-all">
                VIEW FULL ROADMAP
              </button>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container opacity-10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container opacity-10 blur-[100px] rounded-full"></div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
