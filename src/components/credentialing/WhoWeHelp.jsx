import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, UserPlus, Stethoscope, Building} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const audiences = [
  {
    title: "Startup Practices",
    icon: Building2,
    image: "/services/startup-practices.jpg",
    description:
      "Starting your first practice requires enrolling with insurance carriers before you begin seeing patients. We coordinate the credentialing process so your practice is positioned for success from day one.",
  },
  {
    title: "Practice Acquisitions",
    icon: Handshake,
    image: "/services/practice.jpg",
    description:
      "Buying an existing dental office involves much more than transferring ownership. We help coordinate insurance enrollments, tax ID updates, location changes, provider additions, and payer communications to minimize reimbursement interruptions.",
  },
  {
    title: "Adding Associate Dentists",
    icon: UserPlus,
    image: "/services/associate-dentist.jpg",
    description:
      "New associates cannot simply begin seeing PPO patients without proper credentialing. We work with insurance carriers to enroll new providers efficiently while keeping your practice informed throughout the process.",
  },
  {
    title: "Dental Specialists",
    icon: Stethoscope,
    image: "/services/dental-specialist.jpg",
    description:
      "We credential orthodontists, endodontists, periodontists, oral surgeons, pediatric dentists, prosthodontists, and other dental specialists with participating insurance networks.",
  },
  {
    title: "Group Practices & Multi-Location Offices",
    icon: Building,
    image: "/services/groups-practices.jpg",
    description:
      "Managing credentialing across multiple providers and locations requires organization and experience. Our structured workflows help simplify even the most complex credentialing projects.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WhoWeHelp = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-20"
        >
          {/* <span className="inline-flex px-5 py-2 rounded-full bg-[#AFCB12]/10 text-[#7A9200] font-semibold">
            Who We Help
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Solutions for Every Dental Practice
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Whether you're opening your first practice, purchasing an existing
            office, expanding to multiple locations, or adding an associate,
            our credentialing solutions are designed to meet your practice's
            unique goals.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:border-[#AFCB12] transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-[#AFCB12] flex items-center justify-center shadow-lg">
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <h3 className="font-bold text-md transition text-gray-900 leading-tight mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-7 flex-1 min-h-[139px]">
                      {item.description}
                    </p>

                    {/*<div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[#AFCB12] font-semibold">
                        Learn More
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-[#AFCB12] group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>*/}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default WhoWeHelp;