import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Search, BarChart2, CreditCard, Users, Bell } from 'lucide-react';
import { useAuth } from './contexts/AuthContext';
import VideoModal from './components/VideoModal';

// Import pages
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = React.useState('collections');
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleWatchVideo = () => {
    setIsVideoModalOpen(true);
  };

  const featureContent = {
    collections: {
      title: 'Automated Collections',
      description: 'Our intelligent payment system automatically processes rent collections on schedule. Set up recurring payments, send automated reminders, and track payment status in real-time.',
      stats: [
        { label: 'Payment Success Rate', value: '99.2%' },
        { label: 'Average Collection Time', value: '2 days' }
      ]
    },
    analytics: {
      title: 'Payment Analytics',
      description: 'Gain powerful insights into your rental income with detailed analytics. Track payment patterns, forecast cash flow, and identify trends with our comprehensive reporting tools.',
      stats: [
        { label: 'Monthly Revenue', value: '$125,000' },
        { label: 'Growth Rate', value: '+15%' }
      ]
    },
    portal: {
      title: 'Tenant Portal',
      description: 'Empower your tenants with a modern, user-friendly portal. They can view payment history, set up automatic payments, and communicate directly with property managers.',
      stats: [
        { label: 'Active Users', value: '2,500+' },
        { label: 'Satisfaction Rate', value: '96%' }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">1-800-NYUMBANI</span>
            </div>
            <Link to="/contact" className="text-sm hover:underline">
              Support
            </Link>
          </div>
          {user ? (
            <button
              onClick={() => signOut()}
              className="text-sm hover:underline"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="text-sm hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NYUMBANI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/solutions"
                className={`font-medium hover:text-blue-600 ${
                  location.pathname === '/solutions' ? 'text-blue-600' : ''
                }`}
              >
                SOLUTIONS
              </Link>
              <Link
                to="/features"
                className={`font-medium hover:text-blue-600 ${
                  location.pathname === '/features' ? 'text-blue-600' : ''
                }`}
              >
                FEATURES
              </Link>
              <Link
                to="/pricing"
                className={`font-medium hover:text-blue-600 ${
                  location.pathname === '/pricing' ? 'text-blue-600' : ''
                }`}
              >
                PRICING
              </Link>
              <Link
                to="/resources"
                className={`font-medium hover:text-blue-600 ${
                  location.pathname === '/resources' ? 'text-blue-600' : ''
                }`}
              >
                RESOURCES
              </Link>
              <Link
                to="/contact"
                className={`font-medium hover:text-blue-600 ${
                  location.pathname === '/contact' ? 'text-blue-600' : ''
                }`}
              >
                CONTACT
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/demo"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Request Demo
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 py-16">
                <div className="flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <h2 className="text-sm font-semibold tracking-wide uppercase mb-4">
                      SMART RENTAL MANAGEMENT PLATFORM
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                      Transform Your Rental<br />Property Management
                    </h1>
                    <p className="text-lg opacity-90">
                      Experience the future of property management with Nyumbani's intelligent platform. 
                      Automate rent collections, access real-time analytics, and provide a seamless 
                      experience for your tenants.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleGetStarted}
                      className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition font-medium"
                    >
                      Get Started Today
                    </button>
                    <button
                      onClick={handleWatchVideo}
                      className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-blue-700 transition font-medium"
                    >
                      Watch Video
                    </button>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Live Dashboard Preview</h3>
                    <div className="space-y-4">
                      <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                      <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                      <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-blue-50 rounded p-4">
                          <div className="text-sm text-gray-600">Total Collected</div>
                          <div className="text-xl font-bold text-blue-600">$24,500</div>
                        </div>
                        <div className="h-20 bg-blue-50 rounded p-4">
                          <div className="text-sm text-gray-600">Success Rate</div>
                          <div className="text-xl font-bold text-blue-600">98.5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Features Section */}
            <section className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover how Nyumbani's comprehensive features can streamline your property management operations.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <button
                    onClick={() => setActiveFeature('collections')}
                    className={`p-6 rounded-lg text-left transition ${
                      activeFeature === 'collections'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <CreditCard className={`h-8 w-8 mb-4 ${
                      activeFeature === 'collections' ? 'text-white' : 'text-blue-600'
                    }`} />
                    <h3 className="text-xl font-semibold mb-2">Automated Collections</h3>
                    <p className={activeFeature === 'collections' ? 'text-blue-100' : 'text-gray-600'}>
                      Streamline your rent collection process with smart automation.
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveFeature('analytics')}
                    className={`p-6 rounded-lg text-left transition ${
                      activeFeature === 'analytics'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <BarChart2 className={`h-8 w-8 mb-4 ${
                      activeFeature === 'analytics' ? 'text-white' : 'text-blue-600'
                    }`} />
                    <h3 className="text-xl font-semibold mb-2">Payment Analytics</h3>
                    <p className={activeFeature === 'analytics' ? 'text-blue-100' : 'text-gray-600'}>
                      Gain insights with comprehensive payment analytics.
                    </p>
                  </button>

                  <button
                    onClick={() => setActiveFeature('portal')}
                    className={`p-6 rounded-lg text-left transition ${
                      activeFeature === 'portal'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white hover:bg-blue-50'
                    }`}
                  >
                    <Users className={`h-8 w-8 mb-4 ${
                      activeFeature === 'portal' ? 'text-white' : 'text-blue-600'
                    }`} />
                    <h3 className="text-xl font-semibold mb-2">Tenant Portal</h3>
                    <p className={activeFeature === 'portal' ? 'text-blue-100' : 'text-gray-600'}>
                      Provide a modern interface for your tenants.
                    </p>
                  </button>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{featureContent[activeFeature].title}</h3>
                  <p className="text-gray-600 mb-6">{featureContent[activeFeature].description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featureContent[activeFeature].stats.map((stat, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-6">
                        <div className="text-sm text-gray-600">{stat.label}</div>
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Integration Section */}
            <section className="py-16">
              <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">Seamless Integration</h2>
                <p className="text-gray-600 mb-8">
                  Nyumbani integrates with your existing property management software 
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
            <section className="bg-blue-50 py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property Management?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of property managers who have modernized their operations with Nyumbani.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
                >
                  Get Started Today
                </button>
              </div>
            </section>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;