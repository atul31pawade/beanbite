import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import InnerPageHeader from '../components/InnerPageHeader';
import PartnersSection from '../components/PartnerSection';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
};

const About = () => {
  const partnerLogos = [
    { name: "Trocon", image: "/about/partner1.png" },
    { name: "New England Dental", image: "/homeOne/partner-logos/New-England-logo1.png" },
    { name: "Smilesavers", image: "/homeOne/partner-logos/smilesavers1.png" },
    { name: "Monro Dental Arts", image: "/homeOne/partner-logos/dag.png" },
    { name: "LAKE TAVIS DENTISTRY", image: "/homeOne/partner-logos/ltd.png" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-gray-800 antialiased bg-white"
    >
      {/* Inner Page Header */}
      <InnerPageHeader title="About Us" breadcrumb="About Us" />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-20">
        
        {/* Who We Are Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div 
              variants={fadeInLeft}
              className="relative order-1 p-16"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/about/dr.png" 
                  alt="Dr. Santosh Rohira" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              {/* Decorative circles */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C5D92D]/20 rounded-full -z-10"
              ></motion.div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-32 h-32 bg-[#AFCB12]/10 rounded-full -z-10"
              ></motion.div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div 
              variants={fadeInRight}
              className="order-2"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6"
              >
                Who We Are
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                Santosh Rohira, a dentist with international training, is the visionary behind{' '}
                <span className="text-[#AFCB12]">BEANbite</span>
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 text-gray-600 text-base leading-relaxed mb-8"
              >
                <p>
                  Having spent numerous years as a dental office manager in California, she recognized 
                  the pivotal role that outsourcing solutions can play in enhancing the success of a 
                  dental practice. This realization emerged from the fundamental belief that dentists 
                  and office managers should have the opportunity to dedicate their time to patient care 
                  and superior customer service, rather than being bogged down by an array of tasks like 
                  insurance verifications, navigating derived claims, provider credentialing, and grappling 
                  with low insurance fee schedules.
                </p>
                <p>
                  Understanding the significance of customer service within dental practices and 
                  acknowledging the value patients place on it, Santosh Rohira established BEANbite to 
                  handle interactions with insurance carriers on behalf of dentists. This approach seeks 
                  to empower dentists to prioritize the delivery of exceptional patient care.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Commitment to Service Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                A Commitment To Service
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base leading-relaxed mb-8"
              >
                Service and subsidized fees is what sets BEANbite apart from every
                other company you work with. We're here to support your business
                growth and operations. And we prove it every day by actively
                assisting providers and their office managers in their
                administrative needs. We understand your practice and do whatever it
                takes to make things better. Why do we do this? Because we care about
                you, your practice, and your patients.
              </motion.p>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 block"
              >
                Care — Above Everything Else
              </motion.span>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-600 text-base leading-relaxed"
              >
                We understand that every practice grows by adding more dentists and
                dental specialists and it is important to have all credentialing
                process completed in a timely manner in-order to get claims paid
                swiftly. We care for the revenue flow of a dental practice and
                strive to maintain a healthy A/R ratio.
              </motion.p>
            </div>
            {/* RIGHT IMAGE + BADGE */}
            <motion.div 
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative flex justify-center md:justify-end"
>
  {/* Circle Wrapper */}
  <motion.div 
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className="relative w-100 h-100 md:w-115 md:h-115 rounded-full border-4 border-white overflow-visible"
  >
    
    {/* Image */}
    <img
      src="/services/consulting-audit/service-commitment.jpg"
      alt="Team"
      className="w-full h-full object-cover rounded-full"
    />

    {/* Green Badge */}
    <motion.div 
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.31 }}
      viewport={{ once: true }}
      className="absolute bottom-6 -left-22 md:-left-22 bg-[#C5D92D] rounded-full w-54 h-54 flex flex-col items-center justify-center text-left border-6 border-white"
    >
      <span className="text-6xl font-bold text-[#ffffff] leading-none">
        20+
      </span>
      <span className="text-sm mt-1 px-2 text-[#ffffff] font-semibold">
        Years Experienced <br/> Team Help you
      </span>
    </motion.div>

  </motion.div>
</motion.div>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 border-t border-dashed border-gray-200"
          ></motion.div>
        </motion.div>

        {/* Partners Section */}
        <PartnersSection />
      </div>
    </motion.div>
  );
};

export default About;