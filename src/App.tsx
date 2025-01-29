import React from 'react';
import { Phone, Search, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">1-800-LIPAKODI</span>
            </div>
            <a href="#" className="text-sm hover:underline">
              Support
            </a>
          </div>
          <a href="#" className="text-sm hover:underline">
            Login
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">KEJA</span>
              <span className="text-2xl font-bold text-gray-700">NI</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="font-medium hover:text-emerald-600">
                SOLUTIONS
              </a>
              <a href="#" className="font-medium hover:text-emerald-600">
                FEATURES
              </a>
              <a href="#" className="font-medium hover:text-emerald-600">
                PRICING
              </a>
              <a href="#" className="font-medium hover:text-emerald-600">
                RESOURCES
              </a>
              <a href="#" className="font-medium hover:text-emerald-600">
                CONTACT
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">
              Request Demo
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 py-16">
          <div className="flex flex-col justify-center text-white">
            <div className="mb-6">
              <h2 className="text-sm font-semibold tracking-wide uppercase mb-4">
                RENTAL PAYMENT MANAGEMENT PLATFORM
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simplify Your Rental<br />Payment Collections
              </h1>
              <p className="text-lg opacity-90">
                Streamline your rental payment processing with our comprehensive platform 
                designed for property managers, landlords, and tenants. Automate collections, 
                reduce late payments, and improve cash flow.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-md hover:bg-gray-100 transition font-medium">
                Request Demo
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-emerald-700 transition font-medium">
                Watch Video
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-emerald-50 rounded p-4">
                    <div className="text-sm text-gray-600">Total Collected</div>
                    <div className="text-xl font-bold text-emerald-600">$24,500</div>
                  </div>
                  <div className="h-20 bg-emerald-50 rounded p-4">
                    <div className="text-sm text-gray-600">Success Rate</div>
                    <div className="text-xl font-bold text-emerald-600">98.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Automated Collections</h3>
              <p className="text-gray-600">
                Set up automatic rent collection and never chase payments again. 
                Tenants can set up recurring payments for hassle-free transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Payment Analytics</h3>
              <p className="text-gray-600">
                Get detailed insights into your payment collection performance 
                with real-time analytics and customizable reports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tenant Portal</h3>
              <p className="text-gray-600">
                Provide tenants with a user-friendly portal to manage their payments, 
                view history, and communicate with property managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
          <p className="text-gray-600 mb-8">
            KEJA integrates with your existing property management software 
            and accounting tools, making it easy to streamline your entire rental operation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Integration Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Rental Payments?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of property managers who have simplified their payment 
            collections with KEJA.
          </p>
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition font-medium">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;