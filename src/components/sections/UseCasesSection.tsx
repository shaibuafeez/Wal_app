'use client';

import { useState } from 'react';

type UseCase = {
  id: string;
  title: string;
  description: string;
  tools: ('walrus' | 'seal' | 'nautilus')[];
  image: string;
  benefits: string[];
};

export default function UseCasesSection() {
  const [activeUseCase, setActiveUseCase] = useState(0);
  
  const useCases: UseCase[] = [
    {
      id: 'nft-marketplace',
      title: 'NFT Marketplace with Enhanced Privacy',
      description: 'A decentralized NFT marketplace that uses all three Sui tools to provide a complete solution with secure storage, private transactions, and verified computations.',
      tools: ['walrus', 'seal', 'nautilus'],
      image: '/images/nft-marketplace.svg', // Placeholder, will use a div with gradient for now
      benefits: [
        'Store NFT media securely and cost-effectively with Walrus',
        'Protect private bidding information with Seal',
        'Run verifiable off-chain computations for matching orders with Nautilus',
        'Ensure data availability and integrity across the platform'
      ]
    },
    {
      id: 'defi-platform',
      title: 'Privacy-Preserving DeFi Platform',
      description: 'A decentralized finance platform that leverages Sui tools to provide secure, private, and efficient financial services.',
      tools: ['seal', 'nautilus'],
      image: '/images/defi-platform.svg', // Placeholder, will use a div with gradient for now
      benefits: [
        'Protect sensitive financial data with Seal\'s encryption',
        'Execute complex financial calculations off-chain with Nautilus',
        'Prevent front-running and MEV attacks through private order flow',
        'Maintain regulatory compliance while preserving user privacy'
      ]
    },
    {
      id: 'decentralized-social',
      title: 'Decentralized Social Platform',
      description: 'A social media platform built on Sui that gives users control over their data and content while maintaining a seamless user experience.',
      tools: ['walrus', 'seal'],
      image: '/images/social-platform.svg', // Placeholder, will use a div with gradient for now
      benefits: [
        'Store user content efficiently with Walrus',
        'Enable private messaging with end-to-end encryption via Seal',
        'Allow users to monetize content through subscription models',
        'Provide censorship resistance for user-generated content'
      ]
    },
    {
      id: 'ai-data-marketplace',
      title: 'AI Data & Model Marketplace',
      description: 'A decentralized marketplace for AI datasets and models that ensures provenance, privacy, and verifiable computation.',
      tools: ['walrus', 'seal', 'nautilus'],
      image: '/images/ai-marketplace.svg', // Placeholder, will use a div with gradient for now
      benefits: [
        'Store large AI datasets and models with Walrus',
        'Control access to proprietary models with Seal',
        'Run secure inference in TEEs with Nautilus',
        'Verify model outputs and maintain data provenance'
      ]
    }
  ];

  // Function removed as it's no longer needed

  // Function to get tool color
  const getToolColor = (tool: 'walrus' | 'seal' | 'nautilus') => {
    switch (tool) {
      case 'walrus':
        return 'bg-[#222] text-white border border-[#333]';
      case 'seal':
        return 'bg-[#222] text-white border border-[#333]';
      case 'nautilus':
        return 'bg-[#222] text-white border border-[#333]';
      default:
        return '';
    }
  };

  // Function to get tool name
  const getToolName = (tool: 'walrus' | 'seal' | 'nautilus') => {
    switch (tool) {
      case 'walrus':
        return 'Walrus';
      case 'seal':
        return 'Seal';
      case 'nautilus':
        return 'Nautilus';
      default:
        return '';
    }
  };

  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Use Cases</h2>
        <p className="text-[#888] mb-12 max-w-2xl">
          Discover how Sui tools can be combined to create powerful decentralized applications
        </p>
        
        {/* Use case tabs (horizontal scroll on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-8 border-b border-[#333] scrollbar-hide">
          <div className="flex">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                className={`px-6 py-3 text-sm uppercase tracking-wider font-medium whitespace-nowrap ${
                  activeUseCase === index
                    ? 'text-white border-b border-white'
                    : 'text-[#888] hover:text-white'
                }`}
                onClick={() => setActiveUseCase(index)}
              >
                {useCase.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active use case content */}
        <div className="bg-[#111] border border-[#333] overflow-hidden">
          <div className="md:flex">
            {/* Left: Visual representation */}
            <div className="md:w-2/5 bg-[#000] border-r border-[#333] p-8 flex items-center justify-center">
              <div className="relative w-full h-64">
                <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
                  {useCases[activeUseCase].tools.map((tool, idx) => (
                    <div key={idx} className="bg-[#222] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{tool.charAt(0).toUpperCase()}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10 bg-[#000] p-4 border border-[#333]">
                    <div className="flex justify-center space-x-3 mb-4">
                      {useCases[activeUseCase].tools.map((tool) => (
                        <span 
                          key={tool} 
                          className={`inline-flex items-center px-3 py-1 text-xs ${getToolColor(tool)}`}
                        >
                          {getToolName(tool)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Description and benefits */}
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{useCases[activeUseCase].title}</h3>
              <p className="text-[#888] mb-6 leading-relaxed">
                {useCases[activeUseCase].description}
              </p>
              
              <h4 className="text-lg font-semibold text-white mb-4">Key Benefits:</h4>
              <ul className="space-y-3">
                {useCases[activeUseCase].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#666] mr-2">→</span>
                    <span className="text-[#ccc]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
