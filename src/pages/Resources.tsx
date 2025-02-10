import React from 'react';
import { BookOpen, FileText, Video, HelpCircle } from 'lucide-react';

export default function Resources() {
  const categories = [
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and documentation',
      items: [
        'Getting Started Guide',
        'Platform Features',
        'Best Practices',
        'FAQs'
      ]
    },
    {
      icon: FileText,
      title: 'Blog',
      description: 'Latest industry insights and updates',
      items: [
        'Property Management Tips',
        'Market Trends',
        'Success Stories',
        'Product Updates'
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step visual guides',
      items: [
        'Platform Overview',
        'Feature Walkthroughs',
        'Admin Training',
        'Tips & Tricks'
      ]
    },
    {
      icon: HelpCircle,
      title: 'Support',
      description: 'Get help when you need it',
      items: [
        'Contact Support',
        'Community Forum',
        'Live Chat',
        'Support Tickets'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed with Nyumbani's property management platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <category.icon className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}