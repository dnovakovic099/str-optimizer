'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Star, Play, Clock, Users, TrendingUp, FileText, Shield, ArrowRight, Calendar, DollarSign, Sparkles, Award, BookOpen, Download, ChevronRight } from 'lucide-react';

const STRRevenueAccelerator = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('earlybird');
  const [email, setEmail] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePayment = () => {
    window.open(`https://gumroad.com/l/str-accelerator?wanted=true&email=${email}&price=${selectedPrice === 'earlybird' ? 29700 : 49700}`, '_blank');
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Superhost • Los Angeles",
      properties: "5 Properties",
      content: "The dynamic pricing module alone paid for the entire course in 2 weeks. My occupancy is up 23% and ADR increased by $47.",
      rating: 5,
      revenue: "+$3,847/mo"
    },
    {
      name: "Marcus Johnson",
      role: "Property Manager • Miami",
      properties: "12 Units",
      content: "Game changer. The automation templates saved me 20 hours per week. Now managing more properties with half the stress.",
      rating: 5,
      revenue: "+$12,400/mo"
    },
    {
      name: "Elena Rodriguez",
      role: "New Host • Austin",
      properties: "2 Properties",
      content: "Started implementing the strategies before finishing the course. Already booked solid for 3 months at 25% above market.",
      rating: 5,
      revenue: "+$2,100/mo"
    }
  ];

  const courseModules = [
    {
      module: "Module 1",
      title: "Foundation & Market Analysis",
      duration: "2.5 hours",
      lessons: [
        "Market research deep dive",
        "Competitor analysis framework",
        "Finding your unique value prop",
        "Setting revenue targets"
      ]
    },
    {
      module: "Module 2",
      title: "Dynamic Pricing Mastery",
      duration: "3 hours",
      lessons: [
        "AI-powered pricing strategies",
        "Seasonal optimization",
        "Event-based pricing",
        "Last-minute booking tactics"
      ]
    },
    {
      module: "Module 3",
      title: "Listing Optimization",
      duration: "2.5 hours",
      lessons: [
        "SEO for Airbnb/VRBO",
        "Photo strategies that convert",
        "Writing compelling descriptions",
        "Amenity optimization"
      ]
    },
    {
      module: "Module 4",
      title: "Automation Systems",
      duration: "3.5 hours",
      lessons: [
        "Guest communication automation",
        "Check-in/out workflows",
        "Cleaning coordination",
        "Maintenance scheduling"
      ]
    },
    {
      module: "Module 5",
      title: "Direct Booking Strategies",
      duration: "2 hours",
      lessons: [
        "Building your website",
        "Social media marketing",
        "Email list building",
        "Repeat guest systems"
      ]
    },
    {
      module: "Module 6",
      title: "Operations & Scaling",
      duration: "3 hours",
      lessons: [
        "Team building & training",
        "SOPs for everything",
        "Quality control systems",
        "Scaling to 10+ properties"
      ]
    }
  ];

  const results = [
    { metric: "Average Revenue Increase", value: "37%", icon: TrendingUp },
    { metric: "Time Saved Per Week", value: "18 hrs", icon: Clock },
    { metric: "Occupancy Rate Boost", value: "91%", icon: Calendar },
    { metric: "ROI in First Month", value: "412%", icon: DollarSign }
  ];

  const bonuses = [
    {
      title: "Pricing Calculator Pro",
      value: "$197",
      description: "Advanced Excel tool that optimizes rates based on 15+ variables",
      icon: TrendingUp
    },
    {
      title: "500+ Response Templates",
      value: "$97",
      description: "Copy-paste messages for every guest scenario",
      icon: FileText
    },
    {
      title: "Private Mastermind Group",
      value: "$297",
      description: "Weekly calls with 6-figure hosts",
      icon: Users
    },
    {
      title: "Lifetime Updates",
      value: "Priceless",
      description: "Get every new strategy and tool we develop",
      icon: Sparkles
    }
  ];

  const faqs = [
    {
      q: "How quickly will I see results?",
      a: "Most students report increased bookings within 7-14 days of implementing our pricing strategies. The listing optimization typically shows results within 30 days. One student saw a 40% revenue jump in their first month."
    },
    {
      q: "I'm brand new. Will this work for me?",
      a: "Absolutely. In fact, new hosts often see the biggest gains because they can implement everything correctly from day one. The course includes a 'Fast Start' section specifically for new hosts."
    },
    {
      q: "What if I only have one property?",
      a: "Perfect! Master the system with one property first. Our most successful students started with a single listing and now manage 10+ properties using these exact strategies."
    },
    {
      q: "How do I access the course?",
      a: "Immediately after purchase, you'll receive login credentials via email. The course is hosted on a dedicated platform with lifetime access. Watch on any device, download materials, and learn at your own pace."
    },
    {
      q: "What's your refund policy?",
      a: "30-day money-back guarantee. If you implement the strategies and don't see increased revenue, show us your work and we'll refund 100%. We're confident in the results because the system works."
    },
    {
      q: "Do I need any special tools or software?",
      a: "No. While we recommend certain tools for automation, everything can be implemented with free or low-cost solutions. We show you exactly what to use and provide alternatives for every budget."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Ticker */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Limited Time: Save $200 on Enrollment</span>
          <span className="font-mono bg-white/10 px-2 py-1 rounded">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Trusted by 1,247+ Successful Hosts
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Scientific Approach to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">
                30-40% Revenue Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Data-driven strategies and automation systems that transform 
              average Airbnb listings into high-performance revenue machines
            </p>

            {/* Video Section */}
            <div className="relative max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="relative aspect-video flex items-center justify-center cursor-pointer group"
                   onClick={() => setIsVideoPlaying(true)}>
                {!isVideoPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="relative z-10 transform transition-all duration-300 group-hover:scale-110">
                      <div className="bg-white rounded-full p-6 shadow-2xl">
                        <Play className="w-10 h-10 text-slate-700 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 text-white text-left">
                      <p className="text-sm font-medium opacity-90 mb-1">Free Training Video</p>
                      <p className="text-xl font-semibold">Watch: The 3-Step Revenue Acceleration Framework</p>
                    </div>
                  </>
                ) : (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="group bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Growing Revenue Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#curriculum" className="text-gray-700 font-medium hover:text-slate-600 transition-colors flex items-center gap-2">
                View Course Curriculum
                <ChevronDown className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                  <div className="text-sm text-gray-400">{result.metric}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Most Hosts Leave Money on the Table
              </h2>
              <p className="text-xl text-gray-600">
                The difference between average and exceptional hosts isn't luck—it's systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Static Pricing = Lost Revenue</h3>
                    <p className="text-gray-600">Using the same rates year-round means missing 30-40% potential revenue during high-demand periods.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">😴</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Generic Listings Get Ignored</h3>
                    <p className="text-gray-600">Without optimization, your perfect property looks average—and average doesn't book at premium rates.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Manual Tasks Drain Profits</h3>
                    <p className="text-gray-600">Spending 20+ hours on repetitive tasks that automation could handle in minutes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-2xl mb-6">The Revenue Accelerator Solution</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Dynamic pricing AI</strong> that adjusts rates hourly based on 15+ demand factors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Conversion-optimized templates</strong> that turn browsers into bookers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Complete automation suite</strong> saving 20+ hours weekly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Scaling blueprints</strong> to grow from 1 to 10+ properties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Hosts. Real Results. Real Revenue.
            </h2>
            <p className="text-xl text-gray-600">
              Join the community of hosts earning 30-40% more
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-slate-600">{testimonial.properties}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600">Revenue Increase</p>
                  <p className="text-2xl font-bold text-green-600">{testimonial.revenue}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Average student results after 90 days</p>
            <div className="flex justify-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">37%</p>
                <p className="text-sm text-gray-600">Revenue Increase</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">91%</p>
                <p className="text-sm text-gray-600">Occupancy Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <p className="text-sm text-gray-600">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Course Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 comprehensive modules with 47 video lessons, downloadable resources, 
              and implementation guides to transform your STR business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">47 Video Lessons</h3>
                <p className="text-gray-600">Step-by-step HD tutorials</p>
              </div>
              <div className="text-center">
                <Download className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">50+ Downloads</h3>
                <p className="text-gray-600">Templates, SOPs, calculators</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Private Community</h3>
                <p className="text-gray-600">Network with top hosts</p>
              </div>
            </div>

            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => setActiveTab(activeTab === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-slate-600">{module.module}</span>
                      <h3 className="font-semibold text-lg">{module.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{module.duration}</span>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${activeTab === index ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  
                  {activeTab === index && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <ul className="mt-4 space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exclusive Bonuses Worth $688
            </h2>
            <p className="text-xl text-gray-600">
              Get these premium resources absolutely free with your enrollment today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{bonus.title}</h3>
                  <p className="text-2xl font-bold text-slate-700 mb-3">{bonus.value}</p>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your Investment Level
              </h2>
              <p className="text-xl text-gray-600">
                One-time payment. Lifetime access. Transform your business forever.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Early Bird */}
              <div className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedPrice === 'earlybird' 
                  ? 'ring-4 ring-amber-500 shadow-2xl transform scale-105' 
                  : 'border-2 border-gray-200 hover:border-amber-200'
              }`}
              onClick={() => setSelectedPrice('earlybird')}>
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 text-sm font-medium">
                  MOST POPULAR • SAVE $200
                </div>
                <div className="p-8 pt-12">
                  <h3 className="text-2xl font-bold mb-2">Early Bird Special</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$297</span>
                    <span className="text-xl line-through text-gray-400 ml-2">$497</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete 6-module curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>50+ templates & calculators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>All 4 premium bonuses ($688 value)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Private mastermind community</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Lifetime updates & support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>30-day money-back guarantee</span>
                    </li>
                  </ul>
                  <div className={`text-center p-4 rounded-lg ${
                    selectedPrice === 'earlybird' ? 'bg-amber-50 text-amber-700' : 'bg-gray-50 text-gray-700'
                  }`}>
                    <p className="font-semibold">Limited Time Offer</p>
                    <p className="text-sm">Price increases in {timeLeft.hours}h {timeLeft.minutes}m</p>
                  </div>
                </div>
              </div>

              {/* Regular */}
              <div className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedPrice === 'regular' 
                  ? 'ring-4 ring-slate-700 shadow-2xl transform scale-105' 
                  : 'border-2 border-gray-200 hover:border-gray-400'
              }`}
              onClick={() => setSelectedPrice('regular')}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Regular Price</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">$497</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete 6-module curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>50+ templates & calculators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>All 4 premium bonuses ($688 value)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Private mastermind community</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Lifetime updates & support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>30-day money-back guarantee</span>
                    </li>
                  </ul>
                  <div className={`text-center p-4 rounded-lg ${
                    selectedPrice === 'regular' ? 'bg-gray-100 text-gray-700' : 'bg-gray-50 text-gray-600'
                  }`}>
                    <p className="font-semibold">Full Access</p>
                    <p className="text-sm">Join 1,247+ successful hosts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="bg-slate-700 hover:bg-slate-800 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Get Instant Access →
              </button>
              <p className="mt-4 text-gray-600 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Secure checkout • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about STR Revenue Accelerator
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full bg-white rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg pr-4">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                  {activeFaq === index && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Revenue Transformation Starts Today
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join 1,247+ hosts who've discovered the scientific approach to maximizing STR revenue. 
              With our proven systems, you'll see results in days, not months.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <p className="text-2xl font-semibold mb-4">Limited Time Offer Ends In:</p>
              <div className="flex justify-center gap-4 text-4xl font-mono font-bold">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
              <p className="text-sm mt-4 text-gray-300">Save $200 when you enroll today</p>
            </div>
            
            <button 
              onClick={() => setShowPaymentModal(true)}
              className="bg-white text-slate-900 px-12 py-5 rounded-xl text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Yes! I Want 30-40% More Revenue →
            </button>
            <p className="mt-6 text-gray-400">
              Questions? Email support@straccelerator.com
            </p>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Complete Your Enrollment</h3>
            
            <div className="mb-6 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Selected Package</p>
              <p className="font-semibold text-lg">
                {selectedPrice === 'earlybird' ? 'Early Bird Special' : 'Regular Price'}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  ${selectedPrice === 'earlybird' ? '297' : '497'}
                </span>
                {selectedPrice === 'earlybird' && (
                  <span className="text-lg line-through text-gray-400">$497</span>
                )}
              </div>
              {selectedPrice === 'earlybird' && (
                <p className="text-sm text-green-600 font-medium mt-2">You save $200!</p>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
              />
              <p className="text-sm text-gray-600 mt-2">
                Instant access will be sent to this email
              </p>
            </div>

            <button 
              onClick={handlePayment}
              disabled={!email}
              className="w-full bg-slate-700 hover:bg-slate-800 disabled:bg-gray-300 text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed">
              Continue to Secure Checkout →
            </button>
            
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="w-full mt-3 text-gray-600 hover:text-gray-800 transition-colors font-medium">
              Cancel
            </button>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>SSL Secure • 30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default STRRevenueAccelerator;