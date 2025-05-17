'use client';

import { useState } from 'react';

export default function ComparisonSection() {
  const [activeCategory, setActiveCategory] = useState<'storage' | 'security' | 'computation'>('storage');
  
  const categories = {
    storage: {
      title: 'Storage Solutions',
      description: 'Compare Walrus with traditional and decentralized storage solutions',
      comparisons: [
        {
          name: 'Walrus',
          features: [
            { name: 'Decentralization', value: 'High', color: 'text-white' },
            { name: 'Cost Efficiency', value: 'High', color: 'text-white' },
            { name: 'Data Availability', value: 'Very High', color: 'text-white' },
            { name: 'Blockchain Integration', value: 'Native', color: 'text-white' },
            { name: 'Composability', value: 'High', color: 'text-white' }
          ]
        },
        {
          name: 'IPFS/Filecoin',
          features: [
            { name: 'Decentralization', value: 'High', color: 'text-[#888]' },
            { name: 'Cost Efficiency', value: 'Medium', color: 'text-[#888]' },
            { name: 'Data Availability', value: 'Medium', color: 'text-[#888]' },
            { name: 'Blockchain Integration', value: 'External', color: 'text-[#888]' },
            { name: 'Composability', value: 'Medium', color: 'text-[#888]' }
          ]
        },
        {
          name: 'Traditional Cloud',
          features: [
            { name: 'Decentralization', value: 'None', color: 'text-[#666]' },
            { name: 'Cost Efficiency', value: 'Medium', color: 'text-[#888]' },
            { name: 'Data Availability', value: 'High', color: 'text-[#888]' },
            { name: 'Blockchain Integration', value: 'None', color: 'text-[#666]' },
            { name: 'Composability', value: 'Low', color: 'text-[#666]' }
          ]
        }
      ]
    },
    security: {
      title: 'Security Solutions',
      description: 'Compare Seal with traditional and decentralized security solutions',
      comparisons: [
        {
          name: 'Seal',
          features: [
            { name: 'Decentralization', value: 'High', color: 'text-white' },
            { name: 'Access Control', value: 'On-chain', color: 'text-white' },
            { name: 'Key Management', value: 'Simplified (IBE)', color: 'text-white' },
            { name: 'Fault Tolerance', value: 'High', color: 'text-white' },
            { name: 'Composability', value: 'High', color: 'text-white' }
          ]
        },
        {
          name: 'Traditional KMS',
          features: [
            { name: 'Decentralization', value: 'None', color: 'text-[#666]' },
            { name: 'Access Control', value: 'Centralized', color: 'text-[#888]' },
            { name: 'Key Management', value: 'Complex', color: 'text-[#666]' },
            { name: 'Fault Tolerance', value: 'Medium', color: 'text-[#888]' },
            { name: 'Composability', value: 'Low', color: 'text-[#666]' }
          ]
        },
        {
          name: 'Other Blockchain KMS',
          features: [
            { name: 'Decentralization', value: 'Medium', color: 'text-[#888]' },
            { name: 'Access Control', value: 'Varies', color: 'text-[#888]' },
            { name: 'Key Management', value: 'Complex', color: 'text-[#666]' },
            { name: 'Fault Tolerance', value: 'Medium', color: 'text-[#888]' },
            { name: 'Composability', value: 'Medium', color: 'text-[#888]' }
          ]
        }
      ]
    },
    computation: {
      title: 'Computation Solutions',
      description: 'Compare Nautilus with traditional and decentralized computation solutions',
      comparisons: [
        {
          name: 'Nautilus',
          features: [
            { name: 'Verifiability', value: 'High', color: 'text-white' },
            { name: 'Privacy', value: 'High (TEE)', color: 'text-white' },
            { name: 'Blockchain Integration', value: 'Native', color: 'text-white' },
            { name: 'Developer Control', value: 'High', color: 'text-white' },
            { name: 'Composability', value: 'High', color: 'text-white' }
          ]
        },
        {
          name: 'Traditional Cloud Compute',
          features: [
            { name: 'Verifiability', value: 'None', color: 'text-[#666]' },
            { name: 'Privacy', value: 'Low', color: 'text-[#666]' },
            { name: 'Blockchain Integration', value: 'None', color: 'text-[#666]' },
            { name: 'Developer Control', value: 'Medium', color: 'text-[#888]' },
            { name: 'Composability', value: 'Low', color: 'text-[#666]' }
          ]
        },
        {
          name: 'Other TEE Solutions',
          features: [
            { name: 'Verifiability', value: 'Medium', color: 'text-[#888]' },
            { name: 'Privacy', value: 'High', color: 'text-[#888]' },
            { name: 'Blockchain Integration', value: 'External', color: 'text-[#888]' },
            { name: 'Developer Control', value: 'Medium', color: 'text-[#888]' },
            { name: 'Composability', value: 'Medium', color: 'text-[#888]' }
          ]
        }
      ]
    }
  };

  return (
    <section id="comparison" className="py-20 bg-black border-b border-[#333]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Comparison</h2>
        <p className="text-[#888] mb-12 max-w-2xl">
          See how Sui&apos;s tools compare to traditional and other decentralized solutions across different categories.
        </p>
        
        {/* Category tabs */}
        <div className="flex mb-12 border-b border-[#333]">
          <button
            type="button"
            className={`px-6 py-3 text-sm uppercase tracking-wider font-medium ${activeCategory === 'storage' ? 'text-white border-b border-white' : 'text-[#888] hover:text-white'}`}
            onClick={() => setActiveCategory('storage')}
          >
            Storage (Walrus)
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm uppercase tracking-wider font-medium ${activeCategory === 'security' ? 'text-white border-b border-white' : 'text-[#888] hover:text-white'}`}
            onClick={() => setActiveCategory('security')}
          >
            Security (Seal)
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-sm uppercase tracking-wider font-medium ${activeCategory === 'computation' ? 'text-white border-b border-white' : 'text-[#888] hover:text-white'}`}
            onClick={() => setActiveCategory('computation')}
          >
            Computation (Nautilus)
          </button>
        </div>
        
        {/* Comparison content */}
        <div className="bg-[#111] border border-[#333] p-8">
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{categories[activeCategory].title}</h3>
          <p className="text-[#888] mb-8">{categories[activeCategory].description}</p>
          
          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase border-b border-[#333]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-[#888]">Feature</th>
                  {categories[activeCategory].comparisons.map((comparison) => (
                    <th key={comparison.name} scope="col" className="px-6 py-4 text-left text-[#888]">{comparison.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333]">
                {categories[activeCategory].comparisons[0].features.map((feature, index) => (
                  <tr key={feature.name}>
                    <th scope="row" className="px-6 py-4 font-medium text-white text-left">
                      {feature.name}
                    </th>
                    {categories[activeCategory].comparisons.map((comparison) => (
                      <td key={`${comparison.name}-${feature.name}`} className={`px-6 py-4 ${comparison.features[index].color}`}>
                        {comparison.features[index].value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
