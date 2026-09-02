"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

/* Animation */
const fadeSlide = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

/* ORIGINAL DATA */
const allReviews = [
  { name: "Uday Shah", text: "We are using their service for more than a year. I am in private practice for more than 35 years in California and have seen all possible ups and downs.BeanBite has given me a peace of mind which no other previous billing companies have given. They are human beings and do make mistakes, but overall they are the best in my experience.", rating: 5 },
  { name: "Taka Fujimura", text: "Santosh and Dennis were very helpful and took time to make sure credentialing went smoothly. They made the process stress free for me during a critical time when I was building up my business. Highly recommend to anyone that needs help negotiating with insurances (PPO, HMO, dentical) and making sure you get into the right networks.", rating: 5 },
  { name: "Young Sik Lim", text: "Gina Stevens helped me credentialing insurances about 5 years ago. I forgot to leave the review. But the company was very helpful during the credentialing process. I appreciate your team's great work.", rating: 5 },
  { name: "Myriam Brenes", text: "I want to express my appreciation for the fantastic support we received from Bean Bite during our insurance credentialing process. We had a challenging appeal to navigate, but Santosh, Ramya, and the team were incredibly diligent and helpful. Their attention to detail and quick responses made everything so much easier for us.", rating: 5 },
  { name: "Matt Odgers", text: "Santosh and the team at Bean Bite have been absolutely exceptional to work with on insurance credentialing for dental offices. As an attorney who helps dentists buy and sell practices, I know firsthand how challenging it can be to transition insurance credentials from sellers to buyers.", rating: 5 },
  { name: "Daniel Herrera", text: "I used BEANbite to help with the insurance credentialing of my practice. I bought the practice earlier this year and the previous owner was in network with most PPOs. BEANbite helped by first doing the research to help us determine reasonable fees. They then negotiated higher fees where possible.", rating: 5 },
  { name: "Pia Briones", text: "Beanbite has been very easy to work with throughout my credentialing process. Maria, my point of contact with them, is very professional, is very prompt with responses and has very patiently answered any questions I have when it comes to insurance. I would highly recommend their credentialing services. Once my office gets busy, I would definitely consider them for insurance verification and billing.", rating: 5 },
  { name: "Casey Goetz", text: "I was nervous and skeptical a bit at first because credentialing a new associate dentist seems daunting... but Santosh, Dennis, and the team at Bean Bite were really great to work with. They were timely and had great communication skills, and they worked hard behind the scenes for me. And at a very competitive price. I will definitely use them again for my next associate!", rating: 5 },
  { name: "Front Range Endodontics", text: "We have found BEANbite to be a very helpful insurance credentialing and re-credentialing company. We worked with BEANbite for both our initial and re-credentialing. Maria and Santosh were very responsive to our emails and phone calls, and they worked very hard to help both my husband and me become credentialed with many different insurance companies, either directly or indirectly.", rating: 5 },
  { name: "Bansi Patel", text: "I am so glad I chose Beanbite for my insurance credentialing. Both Santosh and Maria Rahul are so knowledgeable and responsive. They did a fantastic job getting me set up with all the insurances and making sure I chose the right plans. Highly recommend to fellow dentists!", rating: 5 }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const memoizedTestimonials = React.useMemo(() => {
    return allReviews.map((item) => ({
      text: `"${item.text}"`,
      name: item.name,
      role: "Client",
      rating: item.rating,
      img: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`,
    }));
  }, []);

  const nextSlide = () =>
  setIndex((prev) => (prev + 1) % memoizedTestimonials.length);

const prevSlide = () =>
  setIndex((prev) =>
    prev === 0 ? memoizedTestimonials.length - 1 : prev - 1
  );

    useEffect(() => {
        const timer = setInterval(() => {
          setIndex((prev) => (prev + 1) % memoizedTestimonials.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [memoizedTestimonials.length]);
    
      const current = memoizedTestimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="bg-gradient-to-r from-[#AFCB12] to-[#6d8502] rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-xl relative min-h-[500px]">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/homeOne/testimonial-home.png"
              alt="Dental Team"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* LEFT SIDE */}
          <div className="md:w-1/2 p-10 md:p-14 text-white flex flex-col justify-center relative z-10">

            <span className="inline-block px-6 py-2 bg-[#6C8000] font-bold rounded-full text-lg mb-6 w-max uppercase tracking-wider">
              Testimonials
            </span>

            <h2 className="text-[34px] md:text-5xl font-bold leading-[1.2] mb-6">
              What our customers say about us
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={fadeSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <p className="text-[16px] leading-relaxed mb-8">
                  {current.text}
                </p>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={current.img}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {current.name}
                    </h4>
                    <p className="text-sm opacity-80 font-light">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="border-t border-[#6C8000]"></div>
            {/* Bottom */}
            <div className="flex flex-wrap items-center gap-6 mt-5">
            
              {/* Rating */}
              <div className="bg-[#2a4e45] rounded-lg flex items-center gap-3 px-2 py-2 border border-white/10">
                <div className="w-8 h-8 flex items-center justify-center bg-[#00b67a] rounded text-white">
                  <Star size={18} fill="currentColor" />
                </div>

                <div className="flex flex-col">
                  <div className="flex text-[#00b67a] space-x-0.5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] opacity-80 mt-1">
                    {current.rating}.0 score
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer w-11 h-11 rounded-full bg-[#728602] text-[#94AE00] border border-[#9db520] flex items-center justify-center hover:bg-[#658325]"
                >
                  <ArrowLeft size={20} />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer w-11 h-11 rounded-full bg-[#C5D92D] text-white border border-[#C5D92D] flex items-center justify-center hover:bg-[#b0c41a]"
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE (UNCHANGED) */}
          <div className="md:w-1/2 relative flex items-end justify-center overflow-hidden">
            <img
              src="/homeOne/testimonial-main-image.png"
              alt="Happy Customer"
              className="relative z-10 h-[90%] w-auto object-contain object-bottom"
            />

            <div className="absolute top-28 right-14 w-24 h-24 bg-[#AFCB12] rounded-full flex items-center justify-center text-[#4d6600]">
              <img
                src="/homeOne/quote.png"
                alt="Decorative"
                className="w-14 h-14 object-contain"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20">
              <div className="bg-white px-16 py-3 rounded-full shadow-lg -rotate-10">
                <span className="font-extrabold text-[#1a2e05] text-2xl">
                  "Awesome Work"
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}