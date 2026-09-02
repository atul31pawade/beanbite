import React, { useRef } from "react";
import { motion } from "framer-motion";


import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

// ================= CLIENT IMAGES =================
const column1 = [
  "/client/client13.svg",
  "/client/client14.webp",
  "/client/client3.png",
  "/client/client4.png",
];

const column2 = [
  "/client/client5.png",
  "/client/client6.png",
  "/client/client7.png",
  "/client/client8.jpg",
];

const column3 = [
  "/client/client9.jpg",
  "/client/client10.jpg",
  "/client/client11.jpg",
  "/client/client12.jpg",
  "/client/client15.png",
];

// ================= ANIMATION =================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const resources = [
  { name: "CAQH", link: "https://www.caqh.org/solutions", external: true },
  { name: "Sample Short form", link: "#", external: false },
  { name: "Sample Full breakdown form", link: "#", external: false },
  { name: "Medicare Dental Provider Enrollment & Coverage Information", link: "https://www.cms.gov/medicare/coverage/dental", external: true },
  { name: "FAQ's ADA MEDICARE", link: "https://www.ada.org/resources/practice/legal-and-regulatory/medicare", external: true },
  { name: "ADA CDT Information", link: "https://www.ada.org/publications/cdt", external: true },
  { name: "2024 ADA Dental Claim News", link: "https://www.ada.org/publications/cdt/ada-dental-claim-form", external: true },
  { name: "Review 2024 ADA Dental Claim form", link: "https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/publications/cdt/2024_completioninstructions_adaclaimform_2024.pdf?rev=fdf22b01262a4fd59f414e5d568412f6&hash=ADCB4A07D15D2AD55256D627B669D023", external: true },
  { name: "NPI LOOKUP", link: "https://npiregistry.cms.hhs.gov/search", external: true },
];

// ================= VERTICAL SLIDER =================
const VerticalSlider = ({ images, duration }) => (
  <div className="overflow-hidden h-[500px]">
    <motion.div
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...images, ...images].map((img, i) => (
        <img
          key={i}
          src={img}
          alt="client"
          className="h-[150px] w-full object-contain bg-white p-4 rounded-xl shadow-sm"
        />
      ))}
    </motion.div>
  </div>
);

const ClientSuccess = () => {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <InnerPageHeader title="Client Success" breadcrumb="Client Success" />

      {/* ================= CLIENT SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show">
          <span className="text-[#AFCB12] font-semibold mb-2 block">
            Our Clients
          </span>

          <h2 className="text-4xl font-bold mb-2">
            We Work With The Best <br /> Clients Success
          </h2>

          <p className="text-gray-600">
            We decided to deal with insurance carriers so that they prioritize patient care.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="show" className="grid grid-cols-3 gap-4 relative">
          <VerticalSlider images={column1} duration={20} />
          <VerticalSlider images={column2} duration={16} />
          <VerticalSlider images={column3} duration={12} />

          <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>

      {/* ================= RESOURCES SECTION (FULL WIDTH) ================= */}
      <div className="w-full bg-white">
        <div className="grid md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-[#f8f8f8] px-6 md:px-16 lg:px-24 py-12 flex items-center justify-center"
          >
            <div className="max-w-[600px]">
              <h3 className="text-2xl font-semibold mb-6">Resources</h3>

              <ul className="space-y-4 text-sm text-gray-700">
                {resources.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex gap-2 items-start hover:underline transition 
                        ${item.external ? "hover:text-[#AFCB12]" : "hover:text-black"}
                      `}
                    >
                      <span className={`w-1.5 h-1.5 mt-2 rounded-full transition 
                        ${item.external ? "bg-gray-600 group-hover:bg-[#AFCB12]" : "bg-gray-600"}
                      `}></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            className="h-[300px] md:h-auto"
          >
            <img
              src="/client/resources.png"
              alt="Resources"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>

      {/* ================= REUSABLE PARTNER SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
        <PartnerSection />
      </div>
    </div>
  );
};

export default ClientSuccess;