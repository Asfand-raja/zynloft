import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../zynloft.jpeg';

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-[#1b0907] border-t border-[#ffb4a8]/20 shadow-[0_-4px_20px_rgba(230,0,0,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-16 py-16 max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-extrabold tracking-tighter text-[#ffdad4] flex items-center gap-2">
            <img src={logoUrl} alt="Zynloft Logo" className="h-8 w-8 rounded-full object-cover" />
            ZYNLOFT
          </div>
          <p className="text-[#e9bcb5] text-sm leading-relaxed max-w-xs">
            Engineering the digital architecture of tomorrow with precision, speed, and cinematic elegance.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#ffb4a8] cursor-pointer hover:scale-125 transition-transform">public</span>
            <span className="material-symbols-outlined text-[#ffb4a8] cursor-pointer hover:scale-125 transition-transform">share</span>
            <span className="material-symbols-outlined text-[#ffb4a8] cursor-pointer hover:scale-125 transition-transform">qr_code_2</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-[#ffdad4]">Ecosystem</h4>
          <ul className="space-y-3 text-[#e9bcb5] text-sm">
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">AI Infrastructure</li>
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Quantum Analytics</li>
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Edge Computing</li>
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Security Mesh</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-[#ffdad4]">Company</h4>
          <ul className="space-y-3 text-[#e9bcb5] text-sm">
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Our Labs</li>
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Manifesto</li>
            <li className="hover:text-[#ffb4a8] transition-colors cursor-pointer">Careers</li>
            <Link to="/privacy-policy" className="block hover:text-[#ffb4a8] transition-colors cursor-pointer">Privacy Protocol</Link>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-[#ffdad4]">Stay Tuned</h4>
          <div className="flex bg-[#2f1a17] rounded-lg border border-[#5f3f3a] overflow-hidden group focus-within:border-[#ffb4a8] transition-colors">
            <input className="bg-transparent border-none focus:ring-0 text-sm px-4 py-3 w-full text-[#ffdad4] placeholder-[#e9bcb5]/50" placeholder="Email" type="email" />
            <button className="bg-[#ffb4a8] px-4 text-[#690000] font-bold hover:bg-[#ffdad4] transition-colors">JOIN</button>
          </div>
          <p className="text-[10px] text-[#b08781] italic">By joining, you agree to our interstellar transmission terms.</p>
        </div>
      </div>
      
      <div className="px-5 md:px-16 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[#e9bcb5] text-[12px] gap-4">
        <p>© 2026 Zynloft Solutions. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-[0.1em]">
          <Link to="/privacy-policy" className="hover:text-[#ffb4a8]">Privacy Policy</Link>
          <a href="#" className="hover:text-[#ffb4a8]">Terms of Service</a>
          <Link to="/contact" className="hover:text-[#ffb4a8]">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
