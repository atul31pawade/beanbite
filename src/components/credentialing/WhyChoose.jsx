import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "750+ Providers Credentialed",
  "PPO Negotiations Across 40+ Insurance Networks",
  "Multi-state Credentialing Experience",
  "Dedicated Project Manager",
  "Startup, Acquisition & Multi-location Specialists",
  "Credentialing for Specialists and General Dentists",
  "Denti-Cal Provider Enrollment",
  "Medicaid Credentialing",
  "Transparent Progress Updates",
  "Fair, Value-driven Pricing",
];

const WhyChoose = () => {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="text-center max-w-3xl mx-auto mb-16">
          {/*<span className="inline-block px-5 py-2 rounded-full bg-[#AFCB12]/10 text-[#7A9200] font-semibold">
            Why Dental Practices Choose BEANbite
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Trusted by Practices Across the United States
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#AFCB12] hover:shadow-lg transition"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#AFCB12] shrink-0"
                  />

                  <p className="text-gray-700 font-medium">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src="/services/475_238.jpg"
              alt="Why Choose BEANbite"
              className="rounded-3xl shadow-xl mb-4 w-full"
            />

            <p className="text-gray-600 leading-6">

              As part of our commitment to service, we believe practices deserve experienced credentialing support at fair, value-driven pricing. We become an extension of your administrative team, helping reduce delays, improve operational efficiency, and create a smoother experience for both providers and office managers.

            </p>

            <div className="mt-4 p-4 rounded-2xl bg-[#F7FBEA] border border-[#AFCB12]/20">

              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Nationwide Support
              </h4>

              <p className="text-gray-600">

                BEANbite provides credentialing services for dental practices throughout California, Texas, Florida, New York, Illinois, and across the United States.

              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;