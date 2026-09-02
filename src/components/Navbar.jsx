import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviceLinks = [
    { path: "/services/credentialing", label: "Credentialing" },
    { path: "/services/verification", label: "Dental Insurance Verification" },
    { path: "/services/billing", label: "Billing Services" },
    { path: "/services/consultingandaudit", label: "Practice Consulting and Audit Support" }
  ];

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 w-full z-50 bg-white shadow-sm md:shadow-none py-4"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/homeOne/logo-light 1.svg" alt="BEANbite" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-6">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`text-[15px] font-light transition-colors ${isActive('/') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}>
                Home
              </Link>
              
              <Link to="/about" className={`text-[15px] font-light transition-colors ${isActive('/about') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}>
                About Us
              </Link>
              
              {/* Desktop Services Dropdown - Clickable & Hoverable */}
              <div className="relative group py-4">
                <Link 
                  to="/services" 
                  className={`flex items-center gap-1.5 text-[15px] font-light transition-colors ${location.pathname.startsWith('/services') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}
                >
                  Services <ChevronDown size={14} strokeWidth={2.5} />
                </Link>
                
                {/* Invisible bridge to prevent menu from closing when moving mouse down */}
                <div className="absolute top-full left-0 w-full h-2"></div>

                <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="py-2">
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#C5D92D] hover:text-[#1a2e05] transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link to="/client-success" className={`text-[15px] font-light transition-colors ${isActive('/client-success') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}>
                Client & Resources
              </Link>
              
              <Link to="/blog" className={`text-[15px] font-light transition-colors ${isActive('/blog') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}>
                Blog
              </Link>
              
              <Link to="/contact" className={`text-[15px] font-light transition-colors ${isActive('/contact') ? 'text-[#000000] , font-semibold' : 'text-black hover:text-[#AFCB12]'}`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="https://assist.zoho.com/install-customer-plugin" className="text-[16px] font-medium text-black border-b-2 border-black hover:text-[#AFCB12] hover:border-[#AFCB12] pb-0.5 flex items-center gap-1 transition-all">
              Remote Support <span className="text-lg font-medium">›</span>
            </Link>
            <Link to="https://outlook.office.com/owa/calendar/Consultation@beanbite.com/bookings/" className="text-[16px] font-medium text-black border-b-2 border-black hover:text-[#AFCB12] hover:border-[#AFCB12] pb-0.5 flex items-center gap-1 transition-all">
              Book a Consultation <span className="text-lg font-medium">›</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-[#AFCB12] p-2 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6">
              <div className="flex flex-col space-y-4 font-medium">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className={`${isActive('/') ? 'text-[#AFCB12]' : 'text-gray-600'} py-2`}>
                  Home
                </Link>
                
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`${isActive('/about') ? 'text-[#AFCB12]' : 'text-gray-600'} py-2`}>
                  About Us
                </Link>
                
                {/* Mobile Services - Click text to go to page, Click arrow to toggle sub-menu */}
                <div className="border-t border-gray-100 pt-2">
                  <div className="flex items-center justify-between w-full py-2">
                    <Link 
                      to="/services" 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`${location.pathname === '/services' ? 'text-[#AFCB12]' : 'text-gray-600'} flex-1`}
                    >
                      Services
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsServicesOpen(!isServicesOpen);
                      }}
                      className="p-2 text-gray-400"
                    >
                      <ChevronRight 
                        size={18} 
                        className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-90' : ''}`}
                      />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-1 space-y-2 overflow-hidden border-l-2 border-gray-100"
                      >
                        {serviceLinks.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className="block text-sm text-gray-500 hover:text-[#AFCB12] transition-colors py-2 pl-4"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/client-success" onClick={() => setIsMenuOpen(false)} className={`${isActive('/client-success') ? 'text-[#AFCB12]' : 'text-gray-600'} py-2`}>
                  Client Success
                </Link>
                
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={`${isActive('/blog') ? 'text-[#AFCB12]' : 'text-gray-600'} py-2`}>
                  Blog
                </Link>
                
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`${isActive('/contact') ? 'text-[#AFCB12]' : 'text-gray-600'} py-2`}>
                  Contact Us
                </Link>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="https://assist.zoho.com/install-customer-plugin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:border-[#AFCB12] hover:text-[#AFCB12] transition-all font-bold"
                  >
                    Remote Support
                  </Link>
                  <Link
                    to="https://outlook.office.com/owa/calendar/Consultation@beanbite.com/bookings/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:border-[#AFCB12] hover:text-[#AFCB12] transition-all font-bold"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;