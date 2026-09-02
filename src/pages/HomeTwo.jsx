import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, Mail, ChevronDown, CheckCircle2, ArrowRight, ArrowLeft, Quote, Calendar, Linkedin, Facebook, Twitter, Instagram, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1 }
  }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const HomeTwo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            text: "Santosh worked for me for 3 years. She is very flexible, self motivated, detailed oriented so gained my rapid trust in presenting treatment plan to the patients and handled financial aspect related to my patients. She was good at maintaining patient relationship as well as managing dental office.",
            name: "Lopa Shah",
            role: "Owner Dentist",
            img: "/homeOne/about-us-left-img.png"
        },
        {
            text: "Santosh worked for me for 3 years. She is very flexible, self motivated, detailed oriented so gained my rapid trust in presenting treatment plan to the patients and handled financial aspect related to my patients. She was good at maintaining patient relationship as well as managing dental office.",
            name: "Lopa Shah",
            role: "Owner Dentist",
            img: "/homeOne/about-us-left-img.png"
        },
        {
            text: "Santosh worked for me for 3 years. She is very flexible, self motivated, detailed oriented so gained my rapid trust in presenting treatment plan to the patients and handled financial aspect related to my patients. She was good at maintaining patient relationship as well as managing dental office.",
            name: "Lopa Shah",
            role: "Owner Dentist",
            img: "/homeOne/about-us-left-img.png"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="font-sans text-gray-800 antialiased bg-white">
            {/* Top Bar */}
            <div className="bg-[#AFCB12] py-2.5 hidden lg:block overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex justify-between items-center text-[13px] font-semibold text-white">
                     <div className="flex text-[14px] font-[400] items-center space-x-8">
                        <span className="flex items-center gap-2"><MapPin size={14} className="text-white" /> 1015 Riley St, #297 Folsom CA 95630</span>
                        <span className="flex items-center gap-2"><Clock size={14} className="text-white" /> Mon – Fri 8 am – 6 pm</span>
                     </div>
                     <div className="flex items-center text-[14px] font-[400] space-x-6">
                        <a href="#" className="hover:opacity-80 transition-opacity">Remote Support</a>
                        <span className="text-white/40">|</span>
                        <a href="#" className="hover:opacity-80 transition-opacity">Career</a>
                        <span className="text-white/40">|</span>
                        <a href="#" className="hover:opacity-80 transition-opacity">Testimonials</a>
                     </div>
                 </div>
            </div>

            {/* Navigation */}
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="sticky top-0 w-full z-50 bg-white py-4 shadow-sm"
            >
                <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img src="/homeOne/logo-light 1.svg" alt="BEANbite" className=" w-[172px]" />
                        </Link>

                        {/* Desktop Menu */}
                         <div className="hidden lg:flex items-center space-x-8 font-[400] text-[14px] text-gray-700">
                                <Link to="/" className="hover:text-[#AFCB12] transition-colors">Home</Link>
                                <a href="#about" className="hover:text-[#AFCB12] transition-colors">About Us</a>
                                <a href="#services" className="hover:text-[#AFCB12] transition-colors">Services</a>
                                <a href="#success" className="hover:text-[#AFCB12] transition-colors">Client Success</a>
                                <a href="#resources" className="hover:text-[#AFCB12] transition-colors">Resources</a>
                                <a href="#contact" className="hover:text-[#AFCB12] transition-colors">Contact Us</a>
                        </div>

                        {/* Right Side CTA */}
                        <div className="hidden lg:flex items-center gap-6">
                            <div className="flex items-center gap-2 font-[400] text-gray-800">
                                <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white">
                                    <Phone size={14} fill="white" />
                                </div>
                                <span className="text-[14px]">(888) 700-5612</span>
                            </div>
                            <a href="#consultation" className="px-6 py-3 border-2 border-gray-800 rounded-[4px] font-[500] text-[14px] hover:bg-gray-800 hover:text-white transition-all">
                                Book a consultation
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 p-2">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Menu Dropdown */}
                 {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-lg">
                        <div className="flex flex-col space-y-4 font-bold text-gray-800">
                             <a href="#" className="py-2">Home</a>
                             <a href="#about" className="py-2">About Us</a>
                             <a href="#services" className="py-2">Services</a>
                             <a href="#success" className="py-2">Client Success</a>
                             <a href="#resources" className="py-2">Resources</a>
                             <a href="#contact" className="py-2">Contact Us</a>
                             <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <Phone size={18} />
                                    <span>(888) 700-5612</span>
                                </div>
                                <a href="#consultation" className="block text-center py-3 border-2 border-gray-800 rounded-lg">Book a consultation</a>
                             </div>
                        </div>
                    </div>
                )}
            </motion.nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden lg:min-h-[550px] flex items-center bg-gray-100">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/homeOne/home-two-banner-img.png" 
                        alt="Dental Care" 
                        className="w-full h-full  object-right lg:object-right" 
                    />
                </div>

                {/* Left Side Overlay Box - Sticked to left with sharp edges */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 bg-black/40  p-8 md:p-8 lg:py-24 lg:pl-[max(1rem,calc((100vw-1400px)/2+3rem))] lg:pr-8 rounded-none w-full md:max-w-[500px] lg:max-w-[500px] border-r border-white/10 h-[400px] flex flex-col justify-center"
                >
                    <div className="max-w-[500px]">
                        <h1 className="text-2xl md:text-[36px] font-[600] leading-[1.1] mb-4 text-white">
                          Credentialing & Fee Schedule Negotiation Services
                        </h1>
                        <div className="space-y-2 text-white/90 text-[14px] font-[500] mb-5 leading-relaxed">
                          <p>Does your practice collect at least 98 percent of the total adjusted production?</p>
                          <p>Do you feel some insurances could provide a better compensation on their contracted fees?</p>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#AFCB12] hover:bg-[#9db520] text-white px-[22px] py-[12px] rounded-[4px] font-[600] text-[14px] transition-all  w-max"
                        >
                           Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </section>
             {/* About Us Section */}
             <section id="about" className="max-w-[1400px] mx-auto px-4 lg:px-12 py-[45px]">
                 <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]  gap-10 items-center">
                     {/* Left Column: Single Image */}
                     <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                         <div >
                             <img src="/homeOne/home-two-about-section.png" alt="About BEANbite" className="w-full h-auto object-cover" />
                         </div>
                     </motion.div>

                     {/* Right Column: Content */}
                     <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                         <div>
                             <span className="text-[#AFCB12] font-semibold text-lg mb-2 block">About Bean Bite</span>
                             <h2 className="text-[28px] font-bold text-gray-900 leading-tight">Some Interesting Facts About Us</h2>
                         </div>

                         <div className="space-y-6">
                             <p className="text-gray-500 leading-relaxed text-[16px]">
                                 BEANbite is founded by a dentist and a dental office manager who believed there had to be an approach to allow dentists and office managers to focus on patient care and customer service rather than just worry about dealing with credentialing providers and low insurance fee schedules. Most dentists also understand how important customer service is in their practices and how much their patients appreciate it, so we decided to deal with insurance carriers for dentist so that they would prioritize patient care.
                             </p>
                             <p className="text-gray-500 leading-relaxed text-lg">
                                 Understanding the significance of customer service within dental practices and acknowledging the value patients place on it, Santosh Rohira established BEANbite to handle interactions with insurance carriers on behalf of dentists. This approach seeks to empower dentists to prioritize the delivery of exceptional patient care.
                             </p>
                         </div>

                         <motion.button 
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#AFCB12] hover:bg-[#9db520] text-white px-[22px] py-[12px] rounded-[4px] font-[600] text-[14px] w-max transition-all shadow-lg shadow-[#AFCB12]/20"
                        >
                             Learn More
                         </motion.button>
                     </motion.div>
                 </div>
             </section>

             {/* Services Section - Billing Cards */}
             <section id="services" className="bg-white relative pt-[36px] pb-[36px]">
                 {/* Green Header Mask */}
                 <div className="absolute top-0 left-0 w-full h-[400px] bg-[#AFCB12] z-0"></div>
                 
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 "
                    >
                         <h2 className="text-4xl md:text-[34px] font-[600] text-white max-w-2xl leading-tight">
                             We Provide Best Dental <br/> Billing Services
                         </h2>
                     </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                         {[
                             { 
                                icon: "/homeOne/credentialing.svg", 
                                title: "Credentialing", 
                                desc: "BEANbite strives to provide dentists with higher PPO reimbursement rates and subsequently allow them to obtain better profit margins." 
                             },
                             { 
                                icon: "/homeOne/fee-negotiations.png", 
                                title: "Fee Negotiations", 
                                desc: "Insurance Fee Schedule negotiation is similar to any other major business negotiations." 
                             },
                             { 
                                icon: "/homeOne/billing-services.png", 
                                title: "Billing Services", 
                                desc: "Over the years, many dental practices see their A/R either plateau or go downstream and practice owners turn desperate to fix these issues." 
                             },
                             { 
                                icon: "/homeOne/ins-verifications.svg", // Reusing icon for demonstration
                                title: "Ins. Verifications", 
                                desc: "Is your front office spending most of their time on phone? Can they use this time on following up with patients regarding outstanding treatment and recall visits?" 
                             }
                         ].map((service, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[14px] p-5 shadow-sm border border-gray-50 flex flex-col items-start h-full"
                            >
                                 <div className="w-16 h-16 bg-white border border-[#AFCB12] rounded-xl flex items-center justify-center p-3 mb-4">
                                     <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                                 </div>
                                 <h3 className="md:text-[24px] font-[600] text-gray-900 mb-3">{service.title}</h3>
                                 <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow">
                                     {service.desc}
                                 </p>
                                 <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#AFCB12] hover:bg-[#9db520] text-white px-6 py-2 rounded-[4px] font-[600] text-[14px] transition-all"
                                >
                                     Read More
                                 </motion.button>
                             </motion.div>
                         ))}
                     </div>
                 </div>
             </section>

       

             {/* Wrapped Make an Appointment Section */}
             <section className="bg-white overflow-hidden">
                 <div className=" mx-auto pr-4 lg:pr-12 bg-[#F3F5F8]">
                     <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row min-h-[650px]"
                    >
                         {/* Left Side: Image */}
                         <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                             <img src="/homeOne/make-an-appointment-left.png" alt="Make an Appointment" className="absolute inset-0 w-full h-full object-cover" />
                         </div>

                         {/* Right Side: Form */}
                         <div className="lg:w-1/2 py-16 px-8 md:px-12 lg:px-16 relative">
                             <div className="max-w-xl">
                                 <span className="text-[#AFCB12] font-[600] text-[16px] mb-2 block">Make an Appointment</span>
                                 <h2 className="text-[26px] font-[600] text-gray-900 mb-4 leading-tight">Start today with absolutely no risk to you.</h2>
                                 <p className="text-gray-600 mb-10 leading-relaxed text-[14px]">
                                     A BEANbite Dental Billing Account Manager will contact you within 24 hours. We are looking forward to earning your trust.
                                 </p>

                                 <form className="space-y-6">
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <input type="text" placeholder="First name" className="w-full px-6 py-4 rounded-[4px] border border-[#D0E3FF] bg-white focus:outline-none focus:border-[#AFCB12] focus:bg-white transition-all" />
                                         <input type="text" placeholder="Last name" className="w-full px-6 py-4 rounded-[4px] border border-[#D0E3FF] bg-white focus:outline-none focus:border-[#AFCB12] focus:bg-white transition-all" />
                                     </div>
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <input type="email" placeholder="E-mail" className="w-full px-6 py-4 rounded-[4px] border border-[#D0E3FF] bg-white focus:outline-none focus:border-[#AFCB12] focus:bg-white transition-all" />
                                         <input type="tel" placeholder="Phone number" className="w-full px-6 py-4 rounded-[4px] border border-[#D0E3FF] bg-white focus:outline-none focus:border-[#AFCB12] focus:bg-white transition-all" />
                                     </div>
                                     <textarea placeholder="Message" rows={4} className="w-full px-6 py-4 rounded-[4px] border border-[#D0E3FF] bg-white focus:outline-none focus:border-[#AFCB12] focus:bg-white transition-all resize-none"></textarea>
                                     
                                     <div className="flex items-start gap-4">
                                         <input type="checkbox" id="appointment-consent-wrapped" className="mt-1.5 h-4 w-4 rounded border-gray-300 text-[#AFCB12] focus:ring-[#AFCB12]" />
                                         <label htmlFor="appointment-consent-wrapped" className="text-[12px] text-gray-500 leading-relaxed">
                                             By choosing text, you agree to receive texts/calls from BEANbite LLC and its affiliates, including by auto-dialed or prerecorded means, regarding current and future projects or services at the number you provide.
                                         </label>
                                     </div>

                                     <motion.button 
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-[#AFCB12] hover:bg-[#9db520] text-white px-[22px] py-[12px] rounded-[4px] font-[600] transition-all shadow-lg shadow-[#AFCB12]/30 w-full sm:w-max text-[14px]"
                                    >
                                         Submit form
                                     </motion.button>
                                 </form>
                             </div>
                         </div>
                     </motion.div>
                 </div>
             </section>

             {/* Our Trusted Partners Section */}
             <section className="py-12 bg-white relative overflow-hidden"
             style={{backgroundImage: 'url(/homeOne/bg-grid.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                 <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#AFCB12 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
                     <div className="text-center mb-16">
                         <span className="text-[#AFCB12] font-bold text-[16px] mb-2 block uppercase tracking-wide">Our Trusted Partners</span>
                         <h2 className="text-4xl md:text-[34px] font-bold text-gray-900">Client Success</h2>
                     </div>
                     
                     <div className="relative flex overflow-hidden">
                         <motion.div 
                            animate={{ x: [0, -1035] }}
                            transition={{ 
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                            className="flex items-center gap-20 whitespace-nowrap"
                        >
                             {[
                                 { img: "/homeOne/partner-logos/tralonGo1.png", alt: "Tralongo" },
                                 { img: "/homeOne/partner-logos/New-England-logo1.png", alt: "New England Dental" },
                                 { img: "/homeOne/partner-logos/smilesavers1.png", alt: "SmileSavers" },
                                 { img: "/homeOne/partner-logos/dag.png", alt: "Dental Associate Group" },
                                 { img: "/homeOne/partner-logos/mda.png", alt: "Monroe Dental Arts" },
                                 { img: "/homeOne/partner-logos/ltd.png", alt: "Lake Travis Dentistry" },
                                 // Duplicate for seamless loop
                                 { img: "/homeOne/partner-logos/tralonGo1.png", alt: "Tralongo" },
                                 { img: "/homeOne/partner-logos/New-England-logo1.png", alt: "New England Dental" },
                                 { img: "/homeOne/partner-logos/smilesavers1.png", alt: "SmileSavers" },
                                 { img: "/homeOne/partner-logos/dag.png", alt: "Dental Associate Group" },
                                 { img: "/homeOne/partner-logos/mda.png", alt: "Monroe Dental Arts" },
                                 { img: "/homeOne/partner-logos/ltd.png", alt: "Lake Travis Dentistry" }
                             ].map((partner, i) => (
                                 <div key={i} className="h-20 flex items-center justify-center shrink-0">
                                     <img src={partner.img} alt={partner.alt} className="max-h-full w-auto object-contain" />
                                 </div>
                             ))}
                         </motion.div>
                     </div>
                 </div>
             </section>

             {/* Testimonial Section */}
             <section id="testimonials" className="bg-[#AFCB12] py-[65px] relative overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                         {/* Left Side: Content */}
                         <div className="lg:col-span-5 text-white">
                             <motion.span 
                                variants={fadeIn}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="inline-block font-[500] text-[16] mb-4"
                            >
                                 Our Testimonials
                             </motion.span>
                             <motion.h2 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="text-5xl md:text-[34px] font-[600] mb-6 leading-[1.1]"
                            >
                                What Our Customers <br/> Are Saying
                             </motion.h2>
                             <motion.p 
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-[14px] opacity-90 mb-7 max-w-md leading-relaxed"
                            >
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                             </motion.p>
                             
                             <div className="flex gap-4">
                                 <motion.button 
                                    onClick={prevSlide}
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.9 }} 
                                    className="w-10 h-10 rounded-full bg-white text-[#AFCB12] flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <ArrowLeft size={24}/>
                                 </motion.button>
                                 <motion.button 
                                    onClick={nextSlide}
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.9 }} 
                                    className="w-10 h-10 rounded-full bg-white text-[#AFCB12] flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <ArrowRight size={24}/>
                                 </motion.button>
                             </div>
                         </div>

                         {/* Right Side: Cards Slider */}
                         <div className="lg:col-span-7 relative overflow-hidden">
                             <div className="">
                                 <motion.div 
                                    animate={{ x: `-${currentSlide * 100}%` }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="flex"
                                >
                                     {testimonials.map((testimonial, i) => (
                                         <div 
                                            key={i}
 className="px-4 min-w-[66.666%]"
                                        >
                                            <div className="bg-white rounded-[14px] p-6 shadow-xl relative h-full">
                                                {/* Quote Icon */}
                                                <div className="">
                                                    {/* <Quote size={56} className="text-gray-100" fill="currentColor" /> */}
                                                    <img src="/homeOne/quote-icon.svg" className='w-[50px] h-[50px]' alt="Quote Icon" />
                                                </div>
                                                <p className="font-[400] text-[14px] leading-relaxed mb-10">
                                                    {testimonial.text}
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#AFCB12]/20">
                                                        <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-[500] text-gray-900 text-[18px] leading-none mb-1">{testimonial.name}</h4>
                                                        <p className="font-[300] text-[12px]">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                     ))}
                                 </motion.div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             {/* Blog Section */}
             <section id="blog" className="py-12 bg-white relative z-10 overflow-hidden">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
                     <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                         <span className="text-[#AFCB12] font-bold text-lg mb-4 block">
                            Tips News & Useful Resources
                         </span>
                         <h2 className="text-2xl md:text-[34px] font-bold text-gray-900 leading-tight">
                             Your Practice Advisory Resources <br/> and Blog
                         </h2>
                     </motion.div>

                     <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                         {[
                             { img: "/homeOne/blog-img-1.png", date: "18 Nov, 2025", title: "What is retroactive termination, and why does it happen?", excerpt: "Retroactive termination of insurance occurs when an insu..." },
                             { img: "/homeOne/blog-img-2.png", date: "18 Nov, 2025", title: "How Dental Billing Companies Can Transform Your Practice", excerpt: "Retroactive termination of insurance occurs when an insu..." },
                             { img: "/homeOne/blog-img-3.png", date: "18 Nov, 2025", title: "Benefits of Hiring a Dental Billing Company", excerpt: "Retroactive termination of insurance occurs when an insu..." }
                         ].map((post, i) => (
                             <motion.div 
                                key={i} 
                                variants={fadeInUp} 
                                className="bg-white rounded-[14px] border border-[#00000025] overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
                            >
                                 <div className="overflow-hidden h-[240px] md:h-[280px]">
                                     <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                 </div>
                                 
                                 <div className="p-6 md:p-8 md:px-3 md:pb-5 flex flex-col flex-grow">
                                     <h3 className="text-[18px] font-[500]  mb-4 leading-snug group-hover:text-[#AFCB12] transition-colors min-h-[3.5rem]">
                                         {post.title}
                                     </h3>
                                     <p className="text-gray-500 text-[14px] mb-0 pb-3 border-b border-[#00000025]">
                                         {post.excerpt}
                                     </p>
                                     <div className="mt-auto border-t border-gray-100 pt-4 flex flex-col items-start justify-between gap-4">
                                         <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
                                             <Calendar size={18} className="text-[#000000]"/> 
                                             <span className="font-normal whitespace-nowrap"><strong>Post Date:</strong> {post.date}</span>
                                         </div>
                                         
                                         <motion.button 
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-[#AFCB12] hover:bg-[#9db520] text-white px-[22px] py-[12px] rounded-[4px] font-[600] text-[14px] transition-all w-max"
                                        >
                                             Read more
                                         </motion.button>
                                     </div>
                                 </div>
                             </motion.div>
                         ))}
                     </motion.div>
                 </div>
             </section>

             {/* Footer Section */}
             <footer className="bg-[#1E1E1E] text-white pt-15 pb-0 relative z-10 font-sans">
                 <div className="max-w-[1400px] mx-auto px-4 lg:px-12 pb-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
                         
                         {/* Column 1: Brand & Social */}
                         <div className="lg:col-span-3 space-y-8">
                             <div className="flex items-center gap-2">
                                <img src="/homeOne/logo-light 1.svg" alt="BEANbite" className="h-14 w-auto" />
                             </div>
                             <p className="text-gray-300 leading-relaxed text-[15px] max-w-sm">
                                Our professional and caring staff is dedicated to delivering only premium quality and comprehensive services. This is one of the highest priorities of our company.
                             </p>
                             
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                 <h4 className="text-xl font-bold">Follow Us</h4>
                                 <div className="flex gap-3">
                                     <motion.a 
                                        whileHover={{ y: -5, backgroundColor: "#9db520" }} 
                                        href="#" 
                                        className="w-10 h-10 rounded-full bg-[#AFCB12] flex items-center justify-center text-[#ffff] transition-all"
                                    >
                                         <Facebook size={20} fill="white" />
                                     </motion.a>
                                     <motion.a 
                                        whileHover={{ y: -5, backgroundColor: "#9db520" }} 
                                        href="#" 
                                        className="w-10 h-10 rounded-full bg-[#AFCB12] flex items-center justify-center text-[#fff] transition-all"
                                    >
                                         <Instagram size={20} />
                                     </motion.a>
                                     <motion.a 
                                        whileHover={{ y: -5, backgroundColor: "#9db520" }} 
                                        href="#" 
                                        className="w-10 h-10 rounded-full bg-[#AFCB12] flex items-center justify-center text-[#fff] transition-all font-bold text-xl leading-none"
                                    >
                                         X
                                     </motion.a>
                                 </div>
                              </motion.div>
                         </div>

                         {/* Column 2: Quick Links */}
                         <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:col-span-2 pl-[20px]"
                        >
                             <h4 className="text-xl font-[400] mb-8 ">Quick Links</h4>
                             <ul className="space-y-5 font-[200] text-[14px]">
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Home</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#blog" className="hover:text-white transition-colors">Blogs</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                             </ul>
                         </motion.div>

                         {/* Column 3: Help Links */}
                         <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                             <h4 className="text-xl font-[400] mb-8 ">Help Links</h4>
                             <ul className="space-y-5 font-[200] text-[14px]">
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#success" className="hover:text-white transition-colors">Client Success</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Privacy Notice</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                             </ul>
                         </motion.div>

                         {/* Column 4: Services */}
                         <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                             <h4 className="text-xl font-[400] mb-8 ">Services</h4>
                             <ul className="space-y-5 font-[200] text-[14px]">
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Credentialing</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Dental Insurance Verification</a></li>
                                 <li className="flex items-center gap-2 group"><span className="text-[#fff] transition-transform group-hover:scale-150">•</span> <a href="#" className="hover:text-white transition-colors">Billing Services</a></li>
                             </ul>
                         </motion.div>

                         {/* Column 5: Contact Us */}
                         <motion.div 
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="lg:col-span-3 space-y-6"
                        >
                             <h4 className="text-xl font-[400] mb-8  ">Contact Us</h4>
                             <div className="space-y-5">
                                 <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                                     <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin size={22} className="text-[#AFCB12]" />
                                     </div>
                                     <div>
                                         <p className="font-bold text-white text-[15px]">Address</p>
                                         <p className=" text-sm leading-relaxed font-light">1015 Riley St.#297 Folsom CA 95630</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                                     <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone size={22} className="text-[#AFCB12]" />
                                     </div>
                                     <div>
                                         <p className="font-bold text-white text-[15px]">Phone Number</p>
                                         <p className=" text-sm font-light">(888) 700 5543</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                                     <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail size={22} className="text-[#AFCB12]" />
                                     </div>
                                     <div>
                                         <p className="font-bold text-white text-[15px]">Mail Us</p>
                                         <p className=" text-sm font-light">info@BEANbite.com</p>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>
                     </div>
                 </div>

                 {/* Copyright Bar */}
                 <div className="bg-[#1E1E1E] py-5 border-t border-white/30">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 text-center">
                        <p className=" text-xs">
                            BEANbite © Copyright 2025 - Design & Developed by Immersive Infotech Pvt. Ltd
                        </p>
                    </div>
                 </div>
             </footer>
        </div>
    );
};

export default HomeTwo;
