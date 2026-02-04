import { Mail, Search, MousePointer, Users, Award, Target, CheckCircle, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "DevMarketing transformed our online presence completely. Their strategic approach and dedication to results exceeded all our expectations."
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Outstanding service! The team's expertise in digital marketing helped us achieve a 300% increase in qualified leads within just 3 months."
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoShop",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      review: "Professional, creative, and results-driven. DevMarketing is the partner every business needs to succeed in the digital landscape."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* HEADER + NAVIGATION */}
      <header className="bg-[#E6F6FA] sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">DevMarketing</div>

            <button
              className="lg:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
              <li><a href="#home" className="hover:text-[#F26A2E] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#F26A2E] transition">About</a></li>
              <li><a href="#service" className="hover:text-[#F26A2E] transition">Service</a></li>
              <li><a href="#portfolio" className="hover:text-[#F26A2E] transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#F26A2E] transition">Contact</a></li>
            </ul>
          </div>

          {mobileMenuOpen && (
            <ul className="lg:hidden mt-4 space-y-3 text-gray-700 font-medium pb-4">
              <li><a href="#home" className="block hover:text-[#F26A2E] transition">Home</a></li>
              <li><a href="#about" className="block hover:text-[#F26A2E] transition">About</a></li>
              <li><a href="#service" className="block hover:text-[#F26A2E] transition">Service</a></li>
              <li><a href="#portfolio" className="block hover:text-[#F26A2E] transition">Portfolio</a></li>
              <li><a href="#contact" className="block hover:text-[#F26A2E] transition">Contact</a></li>
            </ul>
          )}
        </nav>
      </header>

      {/* SECTION 1: HERO */}
      <section id="home" className="bg-[#E6F6FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Digital Marketing Agency
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your business with data-driven digital marketing strategies.
                We help brands grow their online presence and achieve measurable results.
              </p>
              <button className="bg-[#F26A2E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d95a25] transition shadow-lg">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE OFFER */}
      <section id="service" className="bg-[#1F1F1F] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What We Offer?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our comprehensive digital marketing services are designed to elevate your brand
                and drive meaningful engagement with your target audience.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
                <div className="bg-[#E6F6FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#F26A2E]" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email Marketing</h3>
                <p className="text-gray-600 text-sm">Engage your audience with targeted email campaigns</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
                <div className="bg-[#E6F6FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-[#F26A2E]" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">SEO Services</h3>
                <p className="text-gray-600 text-sm">Boost your rankings and organic traffic</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
                <div className="bg-[#E6F6FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MousePointer className="text-[#F26A2E]" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">PPC Advertising</h3>
                <p className="text-gray-600 text-sm">Maximize ROI with strategic paid campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section id="about" className="bg-[#E6F6FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Should You Choose Us
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We combine creativity, strategy, and technology to deliver exceptional results.
                Our team of experts is dedicated to understanding your business goals and crafting
                customized solutions that drive growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With years of experience and a proven track record, we've helped hundreds of
                businesses achieve their digital marketing objectives and scale their success.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Analytics"
                className="rounded-2xl shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS */}
      <section className="bg-[#1F1F1F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="text-[#F26A2E] mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <Award className="text-[#F26A2E] mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-white mb-2">600+</div>
              <div className="text-gray-300">Projects Done</div>
            </div>
            <div className="text-center">
              <Target className="text-[#F26A2E] mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-white mb-2">250+</div>
              <div className="text-gray-300">Active Campaigns</div>
            </div>
            <div className="text-center">
              <CheckCircle className="text-[#F26A2E] mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            How Does It Work?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#E6F6FA] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#F26A2E]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                We analyze your business, target audience, and competition to create a tailored strategy
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E6F6FA] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#F26A2E]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experts execute campaigns across multiple channels with precision and creativity
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E6F6FA] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#F26A2E]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimize & Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously monitor performance and optimize for maximum ROI and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PORTFOLIO */}
      <section id="portfolio" className="bg-[#E6F6FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Work We Have Done
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="E-commerce Growth"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">E-commerce Growth Campaign</h3>
                <p className="text-gray-600 leading-relaxed">
                  Increased online sales by 250% through integrated SEO and PPC strategies for a leading retail brand
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Brand Launch"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tech Startup Brand Launch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Successfully launched a new tech brand with comprehensive digital marketing, reaching 100K+ users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            Why Client Say About Us?
          </h2>
          <div className="bg-[#1F1F1F] rounded-2xl p-8 lg:p-12 text-center relative">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-[#F26A2E]"
            />
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="text-[#F26A2E] fill-current" size={20} />
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-400 mb-6">{testimonials[currentTestimonial].position}</p>
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "{testimonials[currentTestimonial].review}"
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-[#F26A2E] text-white w-10 h-10 rounded-full hover:bg-[#d95a25] transition"
              >
                ‹
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-[#F26A2E] text-white w-10 h-10 rounded-full hover:bg-[#d95a25] transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING */}
      <section className="bg-[#E6F6FA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Select the perfect package for your business needs. All plans include dedicated support
                and access to our expert team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition relative">
                <div className="absolute top-4 right-4 bg-[#F26A2E] text-white px-4 py-2 rounded-full font-bold text-sm">
                  $500
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Basic</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">SEO Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Social Media Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Monthly Reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Email Support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                  Get Started
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition relative border-2 border-[#F26A2E]">
                <div className="absolute top-4 right-4 bg-[#F26A2E] text-white px-4 py-2 rounded-full font-bold text-sm">
                  $750
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Premium</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">PPC Campaign Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Advanced Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#F26A2E] mr-2 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Priority Support</span>
                  </li>
                </ul>
                <button className="w-full bg-[#F26A2E] text-white py-3 rounded-full font-semibold hover:bg-[#d95a25] transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section id="contact" className="bg-[#1F1F1F] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path d="M 0 500 Q 250 300 500 500 T 1000 500" stroke="white" fill="none" strokeWidth="2"/>
            <path d="M 0 600 Q 250 400 500 600 T 1000 600" stroke="white" fill="none" strokeWidth="2"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Join hundreds of successful businesses that trust us with their digital marketing.
            Get started today and see real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F26A2E]"
            />
            <button className="bg-[#F26A2E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#d95a25] transition shadow-lg whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-[#1F1F1F] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">DevMarketing</h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in digital growth. We deliver results that matter.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#F26A2E] transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevMarketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
