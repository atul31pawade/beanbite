import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, TrendingUp} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#414C00] pt-20 relative">
      {/* Floating Banner */}
      <div className="max-w-[1240px] mx-auto px-4 lg:px-12 relative z-20">
        <motion.div 
          className="relative bg-[#AFCB12] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center shadow-lg border-4 border-white/10 overflow-hidden"
        >
          {/* Background Image */}
          <img
            src="/homeOne/footer-cta.png"
            alt="bg pattern"
            className="absolute right-0 top-0 h-full w-auto opacity-50 pointer-events-none"
          />

          {/* Content */}
          <div className="md:w-3/5 mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#414C00] mb-4">
              Book An Appointment
            </h2>
            <p className="text-[#3f5216] text-lg opacity-90">
              Helping dental practices grow with seamless billing, credentialing, and insurance support.
            </p>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-6 relative z-10">
            <img src="/homeOne/footer-card-arrow-icon.png" alt="arrow" className="w-[150px] hidden md:block" />
            
            <Link to="https://outlook.office.com/owa/calendar/Consultation@beanbite.com/bookings/" target="_blank">
              <button className="cursor-pointer border border-[#C3C3C3] border-[3px] bg-white text-[#414C00] pl-6 pr-1 py-1.5 rounded-full font-bold text-lg inline-flex items-center gap-4">
                <span>Book Now</span>
                <div className="w-10 h-10 bg-[#384d14] rounded-full flex items-center justify-center text-white">
                  <TrendingUp size={18} />
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <footer className="text-white pt-20 pb-0 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <img src="/homeOne/logo-light 1.svg" alt="BEANbite" className="h-10" />
            <p className="text-gray-300 text-[15px]">Our professional and caring staff is dedicated to delivering only premium quality and comprehensive services. This is one of the highest priorities of our company.</p>
            {/*<div className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-white text-gray-800 rounded-lg pl-4 py-3 text-sm" />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-[#C5D92D] rounded-md flex items-center justify-center text-[#1a2e05]"><ArrowRight size={18}/></button>
            </div>*/}
            <Link className="p-2 bg-white block rounded-md" to="https://www.bbb.org/us/ca/folsom/profile/billing-services/beanbite-llc-1156-90094066/#sealclick" target="_blank" rel="noopener noreferrer">
              <img src="/bbb.png" alt="BBB" className="h-14" />
            </Link>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6">Quick Link</h4>
            <ul className="space-y-4 text-white text-[14px] font-light">
              <li><Link to="/" className="text-white text-[14px] font-light">Home</Link></li>
              <li><Link to="/about" className="text-white text-[14px] font-light">About Us</Link></li>
              <li><Link to="/career" className="text-white text-[14px] font-light">Career</Link></li>
              <li><Link to="/contact" className="text-white text-[14px] font-light">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6">Help Link</h4>
            <ul className="space-y-4 text-white text-[14px] font-light">
              <li><Link to="/testimonials" className="text-white text-[14px] font-light">Testimonial</Link></li>
              <li><Link to="/client-success" className="text-white text-[14px] font-light">Client & Resources</Link></li>
              <li><Link to="/privacy-policy" className="text-white text-[14px] font-light">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-white text-[14px] font-light">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white text-[14px] font-light">
              <li><Link to="/services/credentialing" className="text-white text-[14px] font-light">Credentialing</Link></li>
              <li><Link to="/services/verification" className="text-white text-[14px] font-light">Verification</Link></li>
              <li><Link to="/services/billing" className="text-white text-[14px] font-light">Billing Services</Link></li>
              <li><Link to="/services/consultingandaudit" className="text-white text-[14px] font-light">Consulting & Audit Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold mb-6">Contact Us</h4>
            {/*<ul className="space-y-6 text-sm text-gray-300">
              <li className="flex gap-3"><MapPin size={18} className="text-[#AFCB12]"/> 1015 Riley St, Folsom CA</li>
              <li className="flex gap-3"><Phone size={18} className="text-[#AFCB12]"/> (888) 700 5543</li>
          </ul>*/}
            <ul className="space-y-6 text-sm text-gray-300">
              <li>
                <div className="flex items-center gap-3 text-[16px] font-semibold text-white">
                  <MapPin size={18} className="text-white" />
                  <span>Address</span>
                </div>
                <p className="ml-7 mt-1 text-white text-[14px] font-light">
                  1015 Riley St,#297 Folsom CA 95630
                </p>
              </li>

              <li>
                <div className="flex items-center gap-3 text-[16px] font-semibold text-white">
                  <Phone size={18} className="text-white" />
                  <span>Phone Number</span>
                </div>
                <a
                  href="tel:+18887005543"
                  className="block ml-7 mt-1 text-white text-[14px] font-light hover:text-[#AFCB12] transition"
                >
                  (888) 700 5543
                </a>
              </li>

              <li>
                <div className="flex items-center gap-3 text-[16px] font-semibold text-white">
                  <Mail size={18} className="text-white" />
                  <span>Mail Us</span>
                </div>
                <a
                  href="mailto:info@BEANbite.com"
                  className="block ml-7 mt-1 text-white text-[14px] font-light hover:text-[#AFCB12] transition"
                >
                  info@BEANbite.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#414C00] py-6 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            
            <p>BEANbite &copy; Copyright 2026 - Immersive Infotech</p>

            <div className="flex gap-4 mt-4 md:mt-0">
              
              <a href="https://www.facebook.com/Beanbitellc" target="_blank" className="w-8 h-8 rounded-full bg-[#AFCB12] flex items-center justify-center">
                <img src="/homeOne/facebook.png" alt="facebook" className="w-4 h-4 object-contain" />
              </a>

              <a href="https://www.instagram.com/beanbitellc/" target="_blank" className="w-8 h-8 rounded-full bg-[#AFCB12] flex items-center justify-center">
                <img src="/homeOne/instagram.png" alt="instagram" className="w-4 h-4 object-contain" />
              </a>

              <a href="https://x.com/beanbitellc" target="_blank" className="w-8 h-8 rounded-full bg-[#AFCB12] flex items-center justify-center">
                <img src="/homeOne/x.png" alt="x" className="w-4 h-4 object-contain" />
              </a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;