import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoUrl from '../zynloft.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy-policy", label: "Privacy Policy" }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#210e0c]/90 backdrop-blur-xl border-white/10 shadow-2xl py-4' 
          : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="flex justify-between items-center px-5 md:px-16 h-12 max-w-[1440px] mx-auto">
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-[#ffdad4] hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#ffdad4] flex items-center gap-2">
            <img src={logoUrl} alt="Zynloft Logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="hidden sm:inline-block">ZYNLOFT</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className={({ isActive }) => 
                  `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="bg-[#e60000] text-[#fff7f5] px-6 py-2.5 rounded-full font-bold hover:backdrop-brightness-125 hover:scale-105 transition-all text-sm">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-[#210e0c] shadow-2xl border-r border-white/10 z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-8 px-6 gap-6 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-xl font-extrabold tracking-tighter text-[#ffdad4] flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logoUrl} alt="Zynloft Logo" className="h-8 w-8 rounded-full object-cover" />
            ZYNLOFT
          </Link>
          <button 
            className="text-[#ffdad4] hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 font-semibold text-lg">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
