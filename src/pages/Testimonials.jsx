import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const reviewsPerPage = 6;

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allReviews = [
    { name: "Uday Shah", text: "We are using their service for more than a year. I am in private practice for more than 35 years in California and have seen all possible ups and downs.BeanBite has given me a peace of mind which no other previous billing companies have given. They are human beings and do make mistakes, but overall they are the best in my experience. The insurance billing in dental field is very complicated and you always loose money unless you have family member who is billing for your office. BeanBite chase every Penny for you like family member working for you", rating: 5 },
    { name: "Taka Fujimura", text: "Santosh and Dennis were very helpful and took time to make sure credentialing went smoothly. They made the process stress free for me during a critical time when I was building up my business. Highly recommend to anyone that needs help negotiating with insurances (PPO, HMO, dentical) and making sure you get into the right networks. They are also good at reminding you of certain changes that affect your insurance networks. Pricing is also competitive compared to other larger companies", rating: 5 },
    { name: "Young Sik Lim", text: "Gina Stevens helped me credentialing insurances about 5 years ago. I forgot to leave the review. But the company was very helpful during the credentialing process. I appreciate your team's great work.", rating: 5 },
    { name: "Myriam Brenes", text: "I want to express my appreciation for the fantastic support we received from Bean Bite during our insurance credentialing process. We had a challenging appeal to navigate, but Santosh, Ramya, and the team were incredibly diligent and helpful. Their attention to detail and quick responses made everything so much easier for us.", rating: 5 },
    { name: "Matt Odgers", text: "Santosh and the team at Bean Bite have been absolutely exceptional to work with on insurance credentialing for dental offices. As an attorney who helps dentists buy and sell practices, I know firsthand how challenging it can be to transition insurance credentials from sellers to buyers. When my clients work with Santosh, I have full confidence that every application will be submitted accurately and on time. This level of precision significantly reduces the risk of delays and ensures a smoother transition. I highly recommend Bean Bite to any dental professional navigating the complexities of insurance credentialing.", rating: 5 },
    { name: "Daniel Herrera", text: "I used BEANbite to help with the insurance credentialing of my practice. I bought the practice earlier this year and the previous owner was in network with most PPOs. BEANbite helped by first doing the research to help us determine reasonable fees. They then negotiated higher fees where possible. They advised us on pros and cons of the many different plan participation options and then once we decided which plans and fee schedules to accept, they helped us credential with those various companies.", rating: 5 },
    { name: "Pia Briones", text: "Beanbite has been very easy to work with throughout my credentialing process. Maria, my point of contact with them, is very professional, is very prompt with responses and has very patiently answered any questions I have when it comes to insurance. I would highly recommend their credentialing services. Once my office gets busy, I would definitely consider them for insurance verification and billing.", rating: 5 },
    { name: "Casey Goetz", text: "I was nervous and skeptical a bit at first because credentialing a new associate dentist seems daunting... but Santosh, Dennis, and the team at Bean Bite were really great to work with. They were timely and had great communication skills, and they worked hard behind the scenes for me. And at a very competitive price. I will definitely use them again for my next associate!", rating: 5 },
    { name: "Front Range Endodontics", text: "We have found BEANbite to be a very helpful insurance credentialing and re-credentialing company. We worked with BEANbite for both our initial and re-credentialing. Maria and Santosh were very responsive to our emails and phone calls, and they worked very hard to help both my husband and me become credentialed with many different insurance companies, either directly or indirectly. We can't thank Maria and Santosh enough for their time and extensive efforts on our behalf. We highly recommend this company.", rating: 5 },
    { name: "Bansi Patel", text: "I am so glad I chose Beanbite for my insurance credentialing. Both Santosh and Maria Rahul are so knowledgeable and responsive. They did a fantastic job getting me set up with all the insurances and making sure I chose the right plans. Highly recommend to fellow dentists!", rating: 5 }
  ];

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  const currentReviews = allReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <InnerPageHeader title="Success Stories" breadcrumb="Testimonials" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        
        {/* Interactive Stats Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Trusted by <span className="text-[#AFCB12]">Our Clients</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We let our results speak for themselves. Explore the experiences of our clients.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
             <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Accuracy</p>
             </div>
             <div className="h-10 w-[1px] bg-gray-100"></div>
             <div className="text-center">
                <p className="text-3xl font-bold text-[#AFCB12]">5.0</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Rating</p>
             </div>
          </div>
        </motion.div>

        {/* The Grid with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-start">
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }} // Lift effect on hover
                className="group relative h-fit self-start"
              >
                {/* Decorative background element that appears on hover */}
                <div className="absolute inset-0 bg-[#AFCB12] rounded-[2.5rem] rotate-1 group-hover:rotate-3 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
                
                <div className="relative flex flex-col bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
                  
                  {/* Floating Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 group-hover:text-[#AFCB12]/10 transition-colors duration-500 pointer-events-none">
                    <Quote size={80} fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        key={i}
                      >
                        <Star size={16} fill="#AFCB12" className="text-[#AFCB12]" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex-grow relative z-10">
  
                    <p
                      className={`text-gray-700 text-lg leading-relaxed font-medium transition-all duration-300 ${
                        expanded[index] ? "" : "line-clamp-5"
                      }`}
                      style={
                        !expanded[index]
                          ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 5,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                          : {}
                      }
                    >
                      "{review.text}"
                    </p>

                    {/* Read More / Less Button */}
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="mt-4 text-[#AFCB12] font-semibold text-sm hover:underline cursor-pointer"
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
                    </button>

                  </div>

                  <div className="flex items-center gap-5 pt-8 border-t border-gray-200">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-[#384d14] flex items-center justify-center font-black text-white text-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                        {review.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#AFCB12] rounded-full border-4 border-white flex items-center justify-center">
                            <MessageCircle size={10} className="text-white fill-current" />
                        </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-[#AFCB12] transition-colors">{review.name}</h4>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Client</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Pagination with Liquid Effect UI */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mb-24">
            <motion.button 
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md disabled:opacity-20 cursor-pointer"
            >
              <ChevronLeft size={24} className="text-gray-900" />
            </motion.button>

            <div className="flex gap-3 bg-gray-100/50 p-2 rounded-3xl">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`relative px-6 py-3 rounded-2xl font-bold transition-all duration-500 cursor-pointer ${
                    currentPage === i + 1 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {currentPage === i + 1 && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#384d14] rounded-2xl shadow-lg"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{i + 1}</span>
                </button>
              ))}
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md disabled:opacity-20 cursor-pointer"
            >
              <ChevronRight size={24} className="text-gray-900" />
            </motion.button>
          </div>
        )}

        <PartnerSection />
      </div>
    </div>
  );
};

export default Testimonials;