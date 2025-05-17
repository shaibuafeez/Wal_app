'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-[#333] py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-tight">SUI<span className="text-[#888]">TOOLS</span></div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-[#888]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="#tools" className="text-white hover:text-[#888] text-sm uppercase tracking-wider">Tools</Link>
          <Link href="#comparison" className="text-white hover:text-[#888] text-sm uppercase tracking-wider">Comparison</Link>
          <Link href="#use-cases" className="text-white hover:text-[#888] text-sm uppercase tracking-wider">Use Cases</Link>
          <Link href="https://sui.io/" target="_blank" className="text-white hover:text-[#888] text-sm uppercase tracking-wider">Sui Ecosystem</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black border-t border-[#333] py-2 px-4">
          <div className="flex flex-col space-y-3">
            <Link href="#tools" className="text-white hover:text-[#888] py-1 text-sm uppercase tracking-wider">Tools</Link>
            <Link href="#comparison" className="text-white hover:text-[#888] py-1 text-sm uppercase tracking-wider">Comparison</Link>
            <Link href="#use-cases" className="text-white hover:text-[#888] py-1 text-sm uppercase tracking-wider">Use Cases</Link>
            <Link href="https://sui.io/" target="_blank" className="text-white hover:text-[#888] py-1 text-sm uppercase tracking-wider">Sui Ecosystem</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
