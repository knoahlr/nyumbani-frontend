import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for small property owners',
      features: [
        'Up to 10 properties',
        'Basic tenant portal',
        'Automated rent collection',
        'Maintenance requests',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Ideal for growing portfolios',
      features: [
        'Up to 50 properties',
        'Advanced tenant portal',
        'Financial analytics',
        'Document management',
        'Priority support',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large property management companies',
      features: [
        'Unlimited properties',
        'Full feature access',
        'API access',
        'Custom integrations',
        '24/7 support',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}