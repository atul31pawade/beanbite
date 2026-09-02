import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogData from "../data/blogData";
import { TrendingUp, Calendar } from 'lucide-react';
import PartnersSection from '../components/PartnerSection';
import ServiceSection from "../components/ServiceSection";
import Testimonial from "../components/Testimonial";

// Animation variants (kept here for page-specific use)
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

const Home = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white">
      
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 lg:px-12 mt-4 mb-20">
        <Link to="/">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="rounded-[40px] overflow-hidden relative flex flex-col items-center md:block min-h-[550px]"
                >
                    {/* Background Image & Gradient */}
                    <div className="absolute inset-0 z-0">
                        <motion.img 
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            src="/homeOne/hero.png" 
                            alt="Dental Team" 
                            className="w-full h-full object-cover object-right" 
                        />
                    </div>
 
                     {/* Content */}
                     <div className="relative z-10 p-8 md:p-16 lg:p-20 md:w-2/3 lg:w-[55%] flex flex-col justify-center h-full pt-20 md:pt-20">
                        <motion.h1 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-[56px] font-bold leading-[1.1] mb-8 text-[#5e5e5e]"
                        >
                          Credentialing & Fee Schedule Negotiation Services
                        </motion.h1>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 text-[#5e5e5e] text-lg font-medium mb-10 leading-relaxed max-w-xl"
                        >
                          <p>Does your practice collect at least 98% of the total adjusted production?</p>
                          <p>Do you feel some insurances could provide a better compensation on their contracted fees?</p>
                        </motion.div>
                        <Link to="/contact">
                            <motion.button 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer border border-[4px] border-[#414C00] bg-[#C5D92D] hover:bg-[#b0c41a] text-[#fff] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center justify-between gap-4 transition-all w-max shadow-lg group"
                            >
                            <span>Get Started</span>
                            <div className=" w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center transition-colors">
                                <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                            </div>
                            </motion.button>
                        </Link>
                     </div>
                </motion.div>
            </Link>
            </section>

            {/* About Us Section */}
            <section id="about" className="max-w-[1400px] mx-auto px-4 lg:px-12 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column */}
                    <motion.div 
                        variants={fadeInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="rounded-[32px] overflow-hidden mb-8">
                            <img src="/homeOne/about-us-left-img.png" alt="Dental Professional" className="w-full h-auto object-cover" />
                        </div>
                        <p className="text-gray-600/90 text-[17px] leading-relaxed mb-8 pr-4">
                            BEANbite is founded by a dentist and a dental office manager who believed there had to be an approach to allow dentists and office managers to focus on patient care and customer service rather than just worry about dealing with credentialing providers and low insurance fee schedules.
                        </p>
                        <h2 className="text-gray-600/90 text-[17px] leading-relaxed mb-8 pr-4">
                            Santosh Rohira, a dentist with international training, is the visionary behind BEANbite.
                        </h2>
                        <Link to="/about">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer bg-[#C5D92D] hover:bg-[#b0c41a] text-[#ffffff] pl-8 pr-2 py-2 rounded-full font-bold text-lg inline-flex items-center gap-4 transition-all shadow-md group mb-10 border border-[4px] border-[#414C00]"
                            >
                            <span>More About</span>
                            <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/20 transition-colors">
                                <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                            </div>
                            </motion.button>
                        </Link>
                        
                        {/* Social Proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">

                                <img
                                src="/about/impact1.png"
                                alt="user 1"
                                className="w-10 h-10 rounded-full object-cover"
                                />

                                <img
                                src="/about/impact2.png"
                                alt="user 2"
                                className="w-10 h-10 rounded-full object-cover"
                                />

                                <img
                                src="/about/impact3.png"
                                alt="user 3"
                                className="w-10 h-10 rounded-full object-cover"
                                />

                                <img
                                src="/about/impact4.png"
                                alt="user 4"
                                className="w-10 h-10 rounded-full object-cover"
                                />

                            </div>

                            <span className="font-bold text-gray-900">
                                10M+ Impact Across the US.
                            </span>
                            </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        variants={fadeInRight}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="pt-8"
                    >
                        <span className="inline-block px-8 py-3 bg-[#AFCB12] text-[#000000] font-bold rounded-full text-[18px] mb-6 uppercase tracking-wide">
                            WHO WE ARE
                        </span>

                        <p className="text-gray-600 text-lg mb-2">
                            Interesting Facts
                        </p>

                        <h2 className="text-[34px] md:text-5xl font-bold text-black leading-[1.2] mb-6">
                            Dental Insurance & Credentialing Experts <br />
                            Behind <span className="text-[#AFCB12]">BEANbite</span>
                        </h2>

                        <p className="text-gray-600  text-[17px] mb-6">Founded in 2016, BEANbite was built on a simple idea, helping dental practices add    more "beans" (revenue) to their bottom line. Today, we are a full-service dental revenue cycle management company specializing in PPO optimization, credentialing, billing, accounts receivable, insurance audits, and payer compliance. 
                        </p>
                        <p className="text-gray-600  text-[17px] mb-6">At BEANbite, every bean counts. We help dental practices capture the revenue they&#39;ve earned and grow a stronger bottom line.</p>

                        {/*<p className="text-gray-600  text-[17px] mb-6">
                            BEANbite is a specialized dental support company focused on insurance credentialing,
                            PPO fee negotiations, and revenue cycle optimization for dental practices across the U.S.
                            We help dentists reduce administrative burden and maximize reimbursements.
                        </p>

                        <p className="text-gray-600 text-lg">
                        Founded by dental professionals, our mission is to ensure every practice gets fair
                        insurance participation, faster approvals, and stronger financial performance through
                        expert billing and credentialing support.
                        </p>*/}

                        {/* Experience Graphic */}
                        <div className="relative flex items-center justify-left ml-4">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-white border border-[#D9D9D9] pr-[50px] rounded-full w-[280px] h-[280px] flex flex-col items-center justify-center text-center shrink-0"
                            >
                                <span className="text-[80px] font-bold text-black leading-none">20<sup className="text-4xl">+</sup></span>
                                <span className="text-lg font-medium text-black mt-2">Years Experienced <br /> Team Help you</span>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="relative -ml-20 z-20 rounded-full overflow-hidden w-[280px] h-[280px]"
                            >
                                <img src="/services/consulting-audit/dental-insurance-credentialing-experts-behind-BEANbite.jpg" alt="Team Discussion" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <ServiceSection />

            {/* CTA Strip */}
            <section className=" relative py-6">
                {/* Background Image on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-full z-0">
                    <motion.img 
                        initial={{ scale: 1.2, opacity: 1 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/homeOne/billing-company.png" 
                        alt="Team Discussion" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                

                <div className="max-w-[1400px] mx-auto px-4 lg:px-12 h-full relative z-20 flex flex-col justify-center items-center text-center py-18">
                    <motion.h2 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="lg:text-[36px] md:text-[50px] font-bold text-white mb-4 leading-tight"
                    >
                        Choosing a Right Billing <br/> Company
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-[16px] mb-10 max-w-2xl mx-auto font-medium"
                    >
                        We wil help you take control of the things that matter <br />most to your practice.
                    </motion.p>
                    <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link to="https://assist.zoho.com/install-customer-plugin" target="_blank" rel="noopener noreferrer">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer border border-[4px] border-[#414C00] bg-[#9db520] hover:bg-[#8ca319] text-[#ffffff] pl-8 pr-2 py-2 rounded-full font-semibold text-[16px] inline-flex items-center gap-4 transition-all shadow-lg group"
                            >
                                <span>Remote Support</span>
                                <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/20 transition-colors">
                                    <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                                </div>
                            </motion.button>
                        </Link>

                        <Link to="https://outlook.office.com/owa/calendar/Consultation@beanbite.com/bookings/" target="_blank" rel="noopener noreferrer">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer border border-[4px] border-[#00000025] bg-white hover:bg-gray-50 text-[#414C00] pl-8 pr-2 py-2 rounded-full font-semibold text-[16px] inline-flex items-center gap-4 transition-all shadow-lg group"
                            >
                                <span>Book a Consultation</span>
                                <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center group-hover:bg-[#1a2e05]/90 transition-colors">
                                    <TrendingUp size={20} className="text-[#fff]" strokeWidth={2.5} />
                                </div>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Partners & Form Section
            <section className="py-24 bg-white overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <div className="flex flex-col lg:flex-row gap-16">
                         <motion.div 
                            variants={fadeInLeft}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                             <span className="inline-block px-4 py-1.5 bg-[#C5D92D] text-[#1a2e05] font-bold rounded-full text-sm mb-6 uppercase tracking-wide">
                                 OUR TRUSTED PARTNERS
                             </span>
                             <h2 className="text-4xl md:text-[42px] font-bold text-gray-900 mb-10 leading-tight">Strengthen your business <br/> for enduring success.</h2>
                             
                             <motion.div 
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-12 max-w-lg"
                            >
                                 {[
                                     { img: "/homeOne/partner-logos/tralonGo1.png", alt: "Tralongo" },
                                     { img: "/homeOne/partner-logos/New-England-logo1.png", alt: "New England Dental" },
                                     { img: "/homeOne/partner-logos/smilesavers1.png", alt: "SmileSavers" },
                                     { img: "/homeOne/partner-logos/dag.png", alt: "Dental Associate Group" },
                                     { img: "/homeOne/partner-logos/mda.png", alt: "Monroe Dental Arts" },
                                     { img: "/homeOne/partner-logos/ltd.png", alt: "Lake Travis Dentistry" }
                                 ].map((partner, i) => (
                                     <motion.div 
                                        key={i} 
                                        variants={fadeIn}
                                        className=" rounded-xl flex items-center justify-center transition-shadow cursor-pointer"
                                    >
                                         <img src={partner.img} alt={partner.alt} className="max-w-full max-h-full object-contain" />
                                     </motion.div>
                                 ))}
                             </motion.div>
                             
                             <div className="flex gap-4">
                                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#C5D92D] hover:border-[#C5D92D] hover:text-[#1a2e05] transition-colors text-gray-400">
                                    <ArrowLeft size={24}/>
                                 </motion.button>
                                 <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 rounded-full bg-[#C5D92D] text-[#1a2e05] flex items-center justify-center hover:bg-[#b0c41a] transition-colors shadow-lg shadow-[#c5d92d]/30">
                                    <ArrowRight size={24}/>
                                 </motion.button>
                             </div>
                         </motion.div>

                         <motion.div 
                            variants={fadeInRight}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                             <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
                                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                 
                                 <div className="relative z-10">
                                     <div className="mb-8">
                                        <span className="text-[#AFCB12] text-sm font-bold tracking-wide mb-2 block">Make an Appointment</span>
                                        <h3 className="text-3xl font-bold text-gray-900">Start today with absolutely no risk to you.</h3>
                                     </div>
                                     
                                     <form className="space-y-5">
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                             <div className="space-y-1">
                                                 <input type="text" placeholder="First name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                             <div className="space-y-1">
                                                 <input type="text" placeholder="Last name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                         </div>
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                             <div className="space-y-1">
                                                 <input type="email" placeholder="E-mail" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                             <div className="space-y-1">
                                                 <input type="tel" placeholder="Phone number" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500" />
                                             </div>
                                         </div>
                                         <div className="space-y-1">
                                             <textarea placeholder="Message" rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] bg-white text-gray-700 placeholder-gray-500 resize-none"></textarea>
                                         </div>
                                         
                                         <div className="flex items-start gap-3 pt-2">
                                            <div className="relative flex items-center">
                                                <input type="checkbox" id="consent" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-[#84cc16] checked:bg-[#84cc16]" />
                                                <CheckCircle2 size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                                            </div>
                                            <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                                                By choosing text, you agree to receive texts/calls from BEANbite LLC and its affiliates, including by auto-dialed or prerecorded means, regarding current and future projects or services at the number you provide.
                                            </label>
                                         </div>
 
                                         <motion.button 
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="border border-[5px] border-[#414C00] bg-[#94AE00] hover:bg-[#65a30d] text-white px-8 py-2 pr-2 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-green-600/20 group w-max mt-4"
                                        >
                                             <span>Submit</span>
                                             <div className="w-10 h-10 bg-[#414C00] rounded-full flex items-center justify-center transition-colors">
                                                <TrendingUp size={16} className="text-white" />
                                             </div>
                                         </motion.button>
                                     </form>
                                 </div>
                             </div>
                         </motion.div>
                     </div>
                 </div>
            </section>*/}

            <section className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-20 pb-10">
                <PartnersSection />
            </section>

            {/* Testimonial Section */}
            <section className="max-w-[1400px] mx-auto px-4 lg:px-12 pt-10 pb-10">
                <Testimonial />
            </section>

             {/* Blog Section */}
             <section id="blog" className="pt-10 bg-white relative z-10 overflow-hidden pb-20">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                         <span className="inline-block px-8 py-3 bg-[#AFCB12] text-[#000000] font-bold rounded-full text-[18px] mb-6 uppercase tracking-wide">
                             News & Blogs
                         </span>
                         <h2 className="text-[34px] md:text-5xl font-bold text-black leading-[1.2] mb-6">
                             Your Practice Advisory <br/> Resources and Blog
                         </h2>
                     </motion.div>

                     <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {blogData.slice(0, 3).map((post, i) => (
                        <motion.div key={post.id} variants={fadeInUp} className="group cursor-pointer">
                            
                            {/* Image */}
                            <div className="rounded-[32px] overflow-hidden mb-6 h-[280px]">
                            <Link to={`/blog/${post.id}`}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </Link>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-gray-800 font-bold text-sm mb-3">
                            <Calendar size={16} className="text-[#1a2e05]" />
                            <span className="font-medium text-black">Post date:</span>
                            <span className="font-light text-black">{post.date}</span>
                            </div>

                            {/* Title */}
                            <Link to={`/blog/${post.id}`}>
                                <h3 className="text-[22px] font-bold text-black mb-6 leading-snug pr-4">
                                    {post.title}
                                </h3>
                            </Link>

                            <div className="border-t border-[#B2B2B2] opacity-50 mb-6"></div>

                            {/* Button */}
                            <Link to={`/blog/${post.id}`}>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-[3px] border-[#414C00] bg-[#C5D92D] hover:bg-[#b0c41a] text-[#fff] pl-6 pr-1 py-1.5 rounded-full font-bold text-sm inline-flex items-center gap-3 transition-all shadow-sm group/btn w-max cursor-pointer"
                            >
                                <span>Read More</span>
                                <div className="w-9 h-9 bg-[#414C00] rounded-full flex items-center justify-center text-white group-hover/btn:bg-[#2d4a0a] transition-colors">
                                <TrendingUp size={16} />
                                </div>
                            </motion.button>
                            </Link>

                        </motion.div>
                        ))}
                     </motion.div>
                 </div>
             </section>

    </div>
  );
};

export default Home;