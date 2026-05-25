import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoUrl from '../zynloft.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#210e0c]/90 backdrop-blur-xl border-white/10 shadow-2xl py-4' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="flex justify-between items-center px-5 md:px-16 h-12 max-w-[1440px] mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#ffdad4] flex items-center gap-2">
          <img src={logoUrl} alt="Zynloft Logo" className="h-8 w-8 rounded-full object-cover" />
          ZYNLOFT
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/privacy-policy" 
            className={({ isActive }) => 
              `transition-colors duration-300 ${isActive ? 'text-[#ffb4a8] font-bold' : 'text-[#e9bcb5] hover:text-[#ffdad4]'}`
            }
          >
            Privacy
          </NavLink>
        </div>

        <Link to="/contact" className="bg-[#e60000] text-[#fff7f5] px-6 py-2.5 rounded-full font-bold hover:backdrop-brightness-125 hover:scale-105 transition-all text-sm">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
