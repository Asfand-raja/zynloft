import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Parallax effect for decorative glows
    const handleMouseMove = (e) => {
      const glows = document.querySelectorAll('.light-glow');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      glows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        glow.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
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
    <>
      <SEO title="Privacy Policy | Zynloft Solutions" description="Zynloft Solutions privacy policy and data security protocols." />
      <div className="privacy-body-wrap font-body-md bg-background text-on-background selection:bg-primary-container selection:text-white min-h-screen">
        {/* Main Content */}
        <main className="relative pt-32 pb-section-gap overflow-hidden">
          {/* Decorative Elements */}
          <div className="light-glow top-0 -left-20"></div>
          <div className="light-glow bottom-0 -right-20" style={{ background: 'radial-gradient(circle, rgba(255, 138, 0, 0.05) 0%, transparent 70%)' }}></div>
          <div className="max-w-[800px] mx-auto px-container-mobile">
            {/* Header */}
            <header className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant mb-6">
                <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
                <span className="font-label-sm text-label-sm text-primary uppercase">Official Documentation</span>
              </div>
              <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Privacy Policy</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Last updated: October 24, 2026. This policy describes how Zynloft Solutions handles your data across our platforms and services.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="glass-card rounded-xl p-8 mb-16">
              <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-6 tracking-widest uppercase">Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a className="flex items-center gap-3 font-body-md text-on-surface hover:text-primary transition-colors" href="#data-collection">
                  <span className="text-primary/40">01.</span> Data Collection
                </a>
                <a className="flex items-center gap-3 font-body-md text-on-surface hover:text-primary transition-colors" href="#usage">
                  <span className="text-primary/40">02.</span> Usage &amp; Purpose
                </a>
                <a className="flex items-center gap-3 font-body-md text-on-surface hover:text-primary transition-colors" href="#security">
                  <span className="text-primary/40">03.</span> Security Protocols
                </a>
                <a className="flex items-center gap-3 font-body-md text-on-surface hover:text-primary transition-colors" href="#rights">
                  <span className="text-primary/40">04.</span> Your Rights
                </a>
              </div>
            </div>

            {/* Content Sections */}
            <article className="space-y-16">
              <section id="introduction">
                <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface">Commitment to Transparency</h2>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
                  <p>At Zynloft Solutions, we believe that privacy is a fundamental human right. Our commitment to your privacy is woven into the architecture of every product we build, ensuring that your enterprise data remains secure, private, and under your control.</p>
                  <p>This Privacy Policy applies to all services offered by Zynloft Solutions and its affiliates. It does not apply to services that have separate privacy policies that do not incorporate this Privacy Policy.</p>
                </div>
              </section>

              <hr className="border-outline-variant opacity-30" />

              <section id="data-collection">
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-label-sm text-label-sm px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">01</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Information We Collect</h2>
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-6">
                  <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <strong className="text-on-surface">Information you give us:</strong>
                        For example, many of our services require you to sign up for a Zynloft Account. When you do, we’ll ask for personal information, like your name, email address, or telephone number.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <strong className="text-on-surface">Device Information:</strong>
                        We collect device-specific information such as your hardware model, operating system version, and unique device identifiers.
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <strong className="text-on-surface">Log Information:</strong>
                        When you use our services, we automatically collect and store certain information in server logs, including browser type, IP address, and system activity.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="usage">
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-label-sm text-label-sm px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">02</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Usage &amp; Purpose</h2>
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
                  <p>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect Zynloft and our users.</p>
                  <p>We also use this information to offer you tailored content – like giving you more relevant search results and ads.</p>
                </div>
              </section>

              <section className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden" id="security">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-[120px]" data-weight="fill">shield_lock</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-6 text-on-surface relative z-10">Advanced Security Architecture</h2>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed relative z-10">
                  <p className="mb-6">Zynloft employs industry-leading security measures to protect your information. Our security framework includes:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-surface-container-high border border-white/5">
                      <h4 className="font-headline-sm text-on-surface mb-2 font-bold">End-to-End Encryption</h4>
                      <p className="text-label-sm">All data in transit and at rest is protected by AES-256 encryption protocols.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container-high border border-white/5">
                      <h4 className="font-headline-sm text-on-surface mb-2 font-bold">Multi-Factor Auth</h4>
                      <p className="text-label-sm">Mandatory 2FA for all administrative access to ensure zero-trust compliance.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="rights">
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-label-sm text-label-sm px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">04</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Data Subject Rights</h2>
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
                  <p>Under global privacy regulations (including GDPR and CCPA), you have the right to access, rectify, or erase your personal data. If you wish to exercise these rights, please contact our Data Protection Officer.</p>
                  <div className="bg-surface-container-low border-l-4 border-primary p-6 mt-8">
                    <p className="italic text-on-surface">"Zynloft Solutions does not sell, trade, or otherwise transfer your personally identifiable information to outside parties."</p>
                  </div>
                </div>
              </section>
            </article>

            {/* Contact/CTA */}
            <section className="mt-24 text-center">
              <div className="p-12 glass-card rounded-3xl border-primary/20">
                <h3 className="font-headline-lg text-headline-lg mb-4">Questions about your privacy?</h3>
                <p className="font-body-md text-on-surface-variant mb-8">Our legal and technical teams are ready to provide clarity on our data practices.</p>
                <a className="inline-flex items-center gap-2 bg-white text-background font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105" href="mailto:privacy@zynloft.com">
                  Contact Compliance Team
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
