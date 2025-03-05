"use client";

import { useEffect } from "react";

export function Navbar() {
  // Add smooth scrolling functionality
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          // Add offset for the sticky navbar
          const navbarHeight = 48; // Approximate height of navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <nav className="bg-[#e8f4f1] text-[#2d3c39] py-3 shadow-sm border-b border-[#d0e3df] sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <a href="#home" className="text-[#2d3c39] font-serif font-bold text-xl">Relics</a>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-[#3d6b63] transition-colors font-medium">Home</a>
            <a href="#to-read" className="hover:text-[#3d6b63] transition-colors">To Read</a>
            <a href="#read" className="hover:text-[#3d6b63] transition-colors">Read</a>
            <a href="#currently-reading" className="hover:text-[#3d6b63] transition-colors">Currently Reading</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 