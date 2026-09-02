import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';
import ServiceSection from "../components/ServiceSection";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {  
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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
  animate: { transition: { staggerChildren: 0.2 } }
};

const Services = () => {
  return (
    <div className="bg-white">
      <InnerPageHeader title="Services" breadcrumb="Services" />

      {/* Intro Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Dental <span className="text-[#C5D92D]">Billing Service</span>
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              No setup fee or long-term contract
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We do not charge any set-up fee and our contracts are not more than 12 months long. Most dentist are pleased with the outcome of our work and typically experience a increase in collection rates and their A/R drops to half of monthly collection amounts with a year. We accurately adjust patient ledgers with appropriate write-off and adjustments so billing patients become easier and more fruitful results can/are expected.
            </p>
          </motion.div>

          {/* Overlapping Images Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px]"
          >
            <motion.img 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              src="/services/consulting-audit/start-dental-billing-service2.jpg" 
              className="absolute left-0 bottom-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-10 border-4 border-white"
              alt="Team"
            />
            <motion.img 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/services/consulting-audit/start-dental-billing-service3.jpg" 
              className="absolute right-0 top-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-lg"
              alt="Consultation"
            />
            <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               className="absolute right-4 bottom-10 z-20 bg-[#C5D92D] p-5 rounded-xl shadow-xl max-w-[180px]"
            >
              <p className="text-[#1a2e05] font-bold text-sm leading-tight">
                Trusted and funded by more than 675 companies
              </p>
            </motion.div>
            {/*<motion.img 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              src="/services/start-dental-billing-service2.jpg" 
              className="absolute left-0 bottom-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-10 border-4 border-white"
              alt="Team"
            />
            <motion.img 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/services/ser2.png" 
              className="absolute right-0 top-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-lg"
              alt="Consultation"
            />
            <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               className="absolute right-4 bottom-10 z-20 bg-[#C5D92D] p-5 rounded-xl shadow-xl max-w-[180px]"
            >
              <p className="text-[#1a2e05] font-bold text-sm leading-tight">
                Trusted and funded by more than 675 companies
              </p>
  </motion.div>*/}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ServiceSection />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <PartnerSection />
      </div>
    </div>
  );
};

const ServiceFeatureCard = ({ icon, title, description }) => (
    <motion.div 
      variants={cardVariants}
      whileHover={{ 
        y: -12, 
        transition: { duration: 0.3 } 
      }}
      className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow text-center relative overflow-hidden group min-h-[420px] flex flex-col items-center"
    >
      {/* BACKGROUND IMAGE CHECKS */}
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40"
        style={{
          backgroundImage: `url('/services/service-block.png')`, 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center center',
          backgroundSize: 'contain'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center h-full">
        <motion.div 
          whileHover={{ rotate: 15 }}
          className="w-16 h-16 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm"
        >
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </motion.div>
  
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-900 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
  
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-[#C5D92D] hover:border-transparent hover:text-[#1a2e05] transition-all bg-white cursor-pointer z-20"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );

export default Services;