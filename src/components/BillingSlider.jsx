import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const BillingSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    { id: 1, icon: "/services/billing-icon1.png", title: "EOBs Posted Daily", desc: "All EOB’s will be posted on a daily basis and necessary credit and debit adjustments will be made as per office policies. We recommend EOB’s be scanned in a folder with the “date of deposit”, ensuring that our bank deposits reconcile with the date by which EOB’s are posted. Your assigned BEANbite insurance billing executive will send email communications with a detailed report of EOB’s posted, EOB’s denied with reasons and actions taken before resubmission. All EOB’s will be separated and uploaded in respective patient’s images or documents folder of your practice management software, thus making you a PAPERLESSS office!" },
    { id: 2, icon: "/services/billing-icon2.png", title: "Accurate Patient and Subscriber Demographics", desc: "In an effort to ensure the claims are paid successful, our team will fix family files and patient accounts with accurate spelling of names, DOB and subscriber ID corrections by confirming with faxes received from insurance companies as necessary. Most dental practices will usually have two or three issues like this weekly. Additionally, insurance claims are processed promptly if they are submitted with the ID # provided by the insurance company rather than the SSN, our billing executive make an effort to make these changes, thus ensuring claims are paid swiftly." },
    { id: 3, icon: "/services/billing-icon3.png", title: "Procedures Not Attached to Insurance Claims", desc: "Most practice management software’s have a capacity to pull a report of “Procedures Not Attached to Insurance Claims”. Our billing executive tracks for such overlooked procedures and bills them out, thus ensuring you are collecting every penny of your production." },
    { id: 4, icon: "/services/billing-icon1.png", title: "Over 30 days Insurance Aging Report", desc: "BEANbite billing executive, will call on all claims over 30 days and provide you a complete report on a monthly basis with details of the action taken for these claims. We make sure to file a claim dispute if claim is denied after 2 attempts for unacceptable or invalid reasons. You will receive a report on a monthly basis with current accounts receivable balances are over 30 days." },
    { id: 5, icon: "/services/billing-icon2.png", title: "Denied Claims Appealed", desc: "We ensure that we keep your AR report clean. Every denied claim will be diligently reviewed for re-submission with additional documentation and file an appeal / dispute if the claim is appealable. If an appeal is further denied, we still make an attempt to request a peer-to-peer review of the claim or even have the office to get the patient involved to get the claim paid. If a claim is hopeless with no further resolution, claims are closed out promptly, so your office can bill the patient without delays." }
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* CENTERED container */}
      <div className="max-w-[1320px] mx-auto px-4">

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 }, 
          }}
          className="!overflow-visible"
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={slide.id}>
                <div
                  className={`relative p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 min-h-[520px] flex flex-col border
                  
                  ${isActive
                      ? "bg-[#AFCB12] text-white shadow-2xl scale-105 border-transparent"
                      : "bg-white text-gray-900 border-gray-100 scale-95 opacity-60"
                    }`}
                >
                  {/* Pattern */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url('/services/service-block.png')`,
                        backgroundSize: '100px'
                      }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col h-full">

                    {/* ICON */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-6
                      ${isActive ? "bg-white/20" : "bg-[#C5D92D]"}`}
                    >
                      <img
                        src={slide.icon}
                        className={`w-7 h-7 ${isActive ? "brightness-0 invert" : ""}`}
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className={`text-sm leading-relaxed ${
                        isActive ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </div>
  );
};

export default BillingSlider;