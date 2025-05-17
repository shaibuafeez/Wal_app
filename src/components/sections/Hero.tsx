'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-black text-white py-24 border-b border-[#333]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">SUI</span> <span className="text-[#888]">BLOCKCHAIN</span> <span className="text-white">TOOLS</span>
            </h1>
            <p className="text-lg text-[#888] mb-8 max-w-xl leading-relaxed">
              Explore the powerful decentralized infrastructure built on Sui: Walrus, Seal, and Nautilus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#tools" 
                className="bg-white text-black hover:bg-[#888] hover:text-white px-6 py-3 font-medium transition duration-300 border border-white"
              >
                Explore Tools
              </Link>
              <Link 
                href="#use-cases" 
                className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 font-medium transition duration-300"
              >
                View Use Cases
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#333] animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#333] animate-pulse delay-300"></div>
              <div className="relative z-10 p-6 border border-[#333] bg-[#111]">
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-[#222] flex items-center justify-center p-4">
                    <span className="text-xl font-bold">W</span>
                  </div>
                  <div className="aspect-square bg-[#222] flex items-center justify-center p-4">
                    <span className="text-xl font-bold">S</span>
                  </div>
                  <div className="aspect-square bg-[#222] flex items-center justify-center p-4">
                    <span className="text-xl font-bold">N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
