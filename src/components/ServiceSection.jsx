import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "/homeOne/service-card-1-icon.png",
      title: "Insurance Credentialing",
      desc: "BEANbite strives to provide dentists with higher PPO reimbursement rates and subsequently allow them to obtain better profit margins.",
      link: "/services/credentialing"
    },
    {
      id: 2,
      icon: "/homeOne/service-card-2-icon.svg",
      title: "Dental Insurance Verification",
      desc: "BEANbite takes absolute pride in the quality & accuracy of the Insurance Verifications done by our agents. Our goal is to set up the dental office for success.",
      link: "/services/verification"
    },
    {
      id: 3,
      icon: "/homeOne/service-card-3-icon.svg",
      title: "Billing Services",
      desc: "Over the years, many dental practices see their A/R either plateau or go downstream and practice owners turn desperate to fix these issues.",
      link: "/services/billing"
    },
    {
      id: 4,
      icon: "/homeOne/service-card-4-icon.png",
      title: "Practice Consulting & Audit Support",
      desc: "BEANbite helps dental practices navigate insurance audits, including record requests, chart reviews, billing reviews, and payer communications to reduce compliance risk.",
      link: "/services/consultingandaudit"
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-6 py-2 bg-[#AFCB12] text-black font-bold rounded-full text-lg mb-6">
            SERVICES
          </span>

          <h2 className="text-[34px] md:text-5xl font-bold text-black leading-[1.2]">
            Reliable Dental Billing, Credentialing & <br />Insurance Solutions for Growing Practices
          </h2>
        </motion.div>

        {/* Swiper Slider with Loop - Forward Only */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            direction="horizontal"
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="services-slider"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                  link={service.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#AFCB12] hover:text-white transition-all duration-300 -ml-4 md:-ml-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#AFCB12] hover:text-white transition-all duration-300 -mr-4 md:-mr-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .services-slider .swiper-slide {
          height: auto;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #AFCB12;
          width: 30px;
          border-radius: 5px;
        }
        
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          display: none !important;
        }
        
        @media (min-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

const ServiceCard = ({ icon, title, desc, link }) => (
  <motion.div
    className="bg-white rounded-[32px] p-8 text-center border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow h-full"
  >
    <div
      className="absolute inset-0 opacity-60 pointer-events-none"
      style={{
        backgroundImage: "url(/homeOne/service-cards-bg-shape.svg)",
        backgroundSize: "cover",
      }}
    />

    <div className="w-20 h-20 bg-[#C5D92D] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
      <img src={icon} alt={title} className="w-10 h-10 object-contain" />
    </div>

    <h3 className="text-[20px] font-semibold text-black mb-4 relative z-10">
      {title}
    </h3>

    <p className="text-black text-[16px] font-light leading-relaxed mb-8 relative z-10 min-h-28">
      {desc}
    </p>

    <Link
      to={link}
      className="px-8 py-2.5 border border-[#cccccc] rounded-full text-black bg-white inline-block relative z-10 hover:bg-gray-50 transition"
    >
      Learn More
    </Link>
  </motion.div>
);

export default ServicesSection;