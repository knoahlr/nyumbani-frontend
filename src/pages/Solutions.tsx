import React from 'react';
import { Building2, Key, BarChart as ChartBar, Shield } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Comprehensive tools for managing your properties, tenants, and maintenance requests.'
    },
    {
      icon: Key,
      title: 'Tenant Management',
      description: 'Streamline tenant applications, screening, and communication all in one place.'
    },
    {
      icon: ChartBar,
      title: 'Financial Management',
      description: 'Track rent payments, expenses, and generate detailed financial reports.'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Stay compliant with local regulations and maintain proper documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Property Management Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of property management solutions designed to streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Transform your property management experience today.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}