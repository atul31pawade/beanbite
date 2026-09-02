import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  "PPO Insurance Credentialing",
  "HMO Dental Insurance Credentialing",
  "Denti-Cal Provider Enrollment",
  "Medicaid Enrollment",
  "Enrollment with local plans upon request",
  "Associate Provider Enrollment",
  "Group Practice Enrollment",
  "Practice Location Changes",
  "Provider Termination",
  "CAQH Profile Management",
  "NPI Type 2 and 1 Registration Assistance",
  "EFT Enrollment",
  "Provider Directory Updates",
  "Recredentialing Management",
  "PPO Fee Update in PMS",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          {/* <span className="inline-flex rounded-full bg-[#AFCB12]/10 px-5 py-2 text-[#7A9200] font-semibold">
            Our Credentialing Services
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Comprehensive Credentialing Support
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            BEANbite provides comprehensive credentialing support, including:
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#AFCB12] hover:shadow-xl transition-all duration-300 px-2 py-2"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#AFCB12]/10 flex items-center justify-center shrink-0 group-hover:bg-[#AFCB12] transition-all duration-300">
                  <CheckCircle2
                    size={26}
                    className="text-[#AFCB12] group-hover:text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#AFCB12]">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-bold text-md transition text-gray-900 leading-5 group-hover:text-[#7A9200] transition-colors">
                    {service}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;