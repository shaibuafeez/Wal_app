'use client';

import { useState } from 'react';

// Tool card component with interactive elements
const ToolCard = ({ 
  id, 
  title, 
  description, 
  features, 
  useCases, 
  letter
}: {
  id: string;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
  letter: string;
}) => {
  const [activeTab, setActiveTab] = useState<'features' | 'useCases'>('features');

  return (
    <div id={id} className="bg-[#111] border border-[#333] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-[#222] mr-4">
            <span className="text-xl font-bold text-white">{letter}</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        
        <p className="text-[#888] mb-8 leading-relaxed">{description}</p>
        
        {/* Tabs */}
        <div className="flex border-b border-[#333] mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm uppercase tracking-wider ${
              activeTab === 'features'
                ? 'text-white border-b border-white'
                : 'text-[#888] hover:text-white'
            }`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm uppercase tracking-wider ${
              activeTab === 'useCases'
                ? 'text-white border-b border-white'
                : 'text-[#888] hover:text-white'
            }`}
            onClick={() => setActiveTab('useCases')}
          >
            Use Cases
          </button>
        </div>
        
        {/* Tab content */}
        <div className="min-h-[220px]">
          {activeTab === 'features' ? (
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="text-[#ccc] flex items-start">
                  <span className="text-[#666] mr-2">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-3">
              {useCases.map((useCase, index) => (
                <li key={index} className="text-[#ccc] flex items-start">
                  <span className="text-[#666] mr-2">→</span>
                  {useCase}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-8 pt-4 border-t border-[#333]">
          <a 
            href={`https://docs.wal.app/${id === 'walrus' ? '' : id === 'seal' ? 'seal/' : 'nautilus/'}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-[#888] text-sm uppercase tracking-wider"
          >
            Documentation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ToolsSection() {
  const tools = [
    {
      id: 'walrus',
      title: 'Walrus',
      description: 'A decentralized storage network built on Sui blockchain, designed for efficient blob storage with high availability and cost efficiency.',
      icon: '🦭',
      letter: 'W',
      features: [
        'Cost-effective blob storage with advanced erasure coding',
        'High availability even if up to 2/3 of storage nodes fail',
        'Seamless integration with Sui blockchain',
        'Flexible access through CLI, SDKs, and web technologies',
        'Dual-token system with WAL and FROST tokens'
      ],
      useCases: [
        'Media storage for NFTs and decentralized applications',
        'AI-related data storage with proven provenance',
        'Long-term archival of blockchain history',
        'Supporting Layer 2 solutions with data availability',
        'Facilitating a fully decentralized web experience',
        'Subscription models for content creators'
      ]
    },
    {
      id: 'seal',
      title: 'Seal',
      description: 'A decentralized secrets management service built on Sui that enables secure storage and controlled access to sensitive data.',
      icon: '🔐',
      letter: 'S',
      features: [
        'Blockchain-based access control through Move smart contracts',
        'Identity-Based Encryption (IBE) for simplified key management',
        'Threshold encryption for enhanced security and availability',
        'Support for various access control models',
        'Seamless integration with other Sui tools'
      ],
      useCases: [
        'Secure personal data storage on decentralized platforms',
        'Controlled content sharing with specific allowlisted users',
        'Subscription-based access to premium content',
        'End-to-end private messaging',
        'Secure voting and MEV-resistant trading mechanisms'
      ]
    },
    {
      id: 'nautilus',
      title: 'Nautilus',
      description: 'A framework for secure and verifiable off-chain computation on Sui, preserving trust through smart contract-based verification.',
      icon: '🐚',
      letter: 'N',
      features: [
        'Secure computation in Trusted Execution Environments (TEEs)',
        'On-chain verification of TEE attestations',
        'Support for AWS Nitro Enclaves (with plans for more TEE providers)',
        'Ideal for AI agents, trusted oracles, and privacy-preserving applications',
        'Complementary to other Sui tools like Seal and Walrus'
      ],
      useCases: [
        'Trusted oracles for fetching and processing off-chain data',
        'AI agents running secure inference or agentic workflows',
        'DePIN solutions for private data computation in IoT networks',
        'Fraud prevention in multi-party systems like DEXs',
        'Identity management with on-chain verifiability'
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-black border-b border-[#333]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Tools</h2>
        <p className="text-[#888] mb-12 max-w-2xl">Explore the powerful decentralized infrastructure tools built on the Sui blockchain ecosystem.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              features={tool.features}
              useCases={tool.useCases}
              letter={tool.letter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
