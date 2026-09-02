import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PartnerSection = () => {
  // Different partner logos for Row 1 and Row 2
  const row1Logos = [
    { name: "Traglons", tagline: "The next level in dentistry", image: "/homeOne/partner-logos/p13.svg" },
    { name: "New England Dental", tagline: "Family Dentistry & Smile Design + Esthetics Program", image: "/homeOne/partner-logos/p14.webp" },
    { name: "Smilesavers", tagline: "Dentist", image: "/homeOne/partner-logos/p3.png" },
    { name: "Dental Associate Group", tagline: "Where Healthy Smiles are all about YOU...", image: "/homeOne/partner-logos/p4.png" },
    { name: "Monroe Dental Arts", tagline: "", image: "/homeOne/partner-logos/p5.png" },
    { name: "Lake Travis Dentistry", tagline: "", image: "/homeOne/partner-logos/p6.png" },
  ];

  const row2Logos = [
    { name: "Elite Dental Partners", tagline: "Excellence in Dental Care", image: "/homeOne/partner-logos/p7.png" },
    { name: "Premier Orthodontics", tagline: "Creating Beautiful Smiles", image: "/homeOne/partner-logos/p8.jpg" },
    { name: "Coastal Dental Group", tagline: "Comprehensive Family Dentistry", image: "/homeOne/partner-logos/p9.jpg" },
    { name: "Summit Dental Specialists", tagline: "Advanced Dental Solutions", image: "/homeOne/partner-logos/p10.jpg" },
    { name: "Harbor Dental Associates", tagline: "Where Your Smile Matters", image: "/homeOne/partner-logos/p11.jpg" },
    { name: "Valley Dental Care", tagline: "Quality Care for All Ages", image: "/homeOne/partner-logos/p12.jpg" },
    { name: "Valley Dental Care", tagline: "Quality Care for All Ages", image: "/homeOne/partner-logos/p15.png" },
  ];

  // Refs for swiper instances
  const swiperRow1Ref = useRef(null);
  const swiperRow2Ref = useRef(null);

  // Common swiper settings with autoplay and loop
  const getSwiperSettings = (rowNumber) => ({
    modules: [Navigation, Autoplay],
    spaceBetween: 16,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
    },
    className: "!pb-4",
    onSwiper: (swiper) => {
      if (rowNumber === 1) swiperRow1Ref.current = swiper;
      else swiperRow2Ref.current = swiper;
    },
  });

  // Combined navigation handlers
  const handlePrev = () => {
    swiperRow1Ref.current?.slidePrev();
    swiperRow2Ref.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRow1Ref.current?.slideNext();
    swiperRow2Ref.current?.slideNext();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - Logos */}
        <div>
          <motion.span className="inline-block px-6 py-2 bg-[#AFCB12] text-[#000000] font-bold rounded-full text-lg mb-6">
            OUR TRUSTED PARTNERS
          </motion.span>

          <motion.h2 className="text-[34px] md:text-5xl font-bold text-black leading-[1.2] mb-6">
            Strengthen your business <br /> for enduring success.
          </motion.h2>

          {/* Row 1 */}
          <div className="mb-4">
            <Swiper {...getSwiperSettings(1)}>
              {row1Logos.map((partner, i) => (
                <SwiperSlide key={`row1-${i}`}>
                  <LogoCard partner={partner} delay={i * 0.1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Row 2 */}
          <div className="mb-4">
            <Swiper {...getSwiperSettings(2)}>
              {row2Logos.map((partner, i) => (
                <SwiperSlide key={`row2-${i}`}>
                  <LogoCard partner={partner} delay={i * 0.1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-4">
            <NavButton 
              icon={<ArrowLeft size={18} />} 
              onClick={handlePrev} 
              isPrimary={false}
            />
            <NavButton 
              icon={<ArrowRight size={18} />} 
              onClick={handleNext} 
              isPrimary={true}
            />
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <ContactFormCard />
      </div>
    </motion.div>
  );
};

// Internal Helper Components for Cleanliness
const LogoCard = ({ partner, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-white h-20 flex items-center justify-center transition-shadow cursor-pointer border border-[#D8D8D8] rounded-md py-1 px-1"
  >
    <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain" />
  </motion.div>
);

const NavButton = ({ icon, onClick, isPrimary }) => (
  <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer border ${
      isPrimary ? "bg-[#C5D92D] border-transparent text-[#ffffff]" : "border-gray-300 text-gray-300"
    }`}
  >
    {icon}
  </motion.button>
);

const ContactFormCard = () => (
  <motion.div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-gray-100">
    <div className="absolute inset-0 z-0">
      <img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/homeOne/partners-bg.png" 
          alt="Dental Team" 
          className="w-full h-full object-cover opacity-50 pointer-events-none" 
      />
    </div>
    <div className="relative z-10">
      <p className="text-[#AFCB12] text-[16px] font-semibold mb-1">Make an Appointment</p>
      <h3 className="text-[26px] font-semibold text-black mb-6">Start today with absolutely no risk to you.</h3>
      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="w-full px-5 py-3 rounded-xl border border-[#D0E3FF] focus:outline-none focus:border-[#C5D92D] bg-white" placeholder="First name" />
          <input className="w-full px-5 py-3 rounded-xl border border-[#D0E3FF] focus:outline-none focus:border-[#C5D92D] bg-white" placeholder="Last name" />
        </div>
        <input className="w-full px-5 py-3 rounded-xl border border-[#D0E3FF] focus:outline-none focus:border-[#C5D92D] bg-white" placeholder="E-mail" />
        <textarea rows={3} className="w-full px-5 py-3 rounded-xl border border-[#D0E3FF] focus:outline-none focus:border-[#C5D92D] bg-white" placeholder="Message" />
        <div className="flex items-start gap-3 pt-2">
          <div className="relative flex items-center">
              <input type="checkbox" id="consent" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-[#84cc16] checked:bg-[#84cc16]" />
              <CheckCircle2 size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
          </div>
          <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
              By choosing text, you agree to receive texts/calls from BEANbite LLC and its affiliates, including by auto-dialed or prerecorded means, regarding current and future projects or services at the number you provide.
          </label>
        </div>
        <button type="button" className="cursor-pointer border border-[4px] border-[#414C00] bg-[#9db520] hover:bg-[#8ca319] text-[#ffffff] pl-4 pr-2 py-1 rounded-full font-semibold text-[16px] inline-flex items-center gap-4 transition-all shadow-lg group">
          Submit
          <div className="w-10 h-10 bg-[#384d14] rounded-full flex items-center justify-center text-white">
            <TrendingUp size={18} />
          </div>
        </button>
      </form>
    </div>
  </motion.div>
);

export default PartnerSection;