import React from 'react';
import { CreditCard, BarChart2, Users, Bell, Calendar, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: CreditCard,
      title: 'Automated Rent Collection',
      description: 'Set up recurring payments and automate late fee calculations.'
    },
    {
      icon: BarChart2,
      title: 'Analytics Dashboard',
      description: 'Get insights into your property performance and financial metrics.'
    },
    {
      icon: Users,
      title: 'Tenant Portal',
      description: 'Give tenants access to payments, maintenance requests, and documents.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders for rent, maintenance, and lease renewals.'
    },
    {
      icon: Calendar,
      title: 'Maintenance Scheduling',
      description: 'Track and schedule property maintenance and repairs.'
    },
    {
      icon: Shield,
      title: 'Document Management',
      description: 'Securely store and manage all property-related documents.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the powerful features that make Nyumbani the leading property management platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}