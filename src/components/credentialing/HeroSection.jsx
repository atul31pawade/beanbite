import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12">

      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#AFCB12]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gray-100 blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            {/* <span className="inline-flex items-center rounded-full bg-[#AFCB12]/10 text-[#7A9200] px-5 py-2 font-semibold">

              Strategic Dental Credentialing

            </span> */}

            <h1 className="mt-8 text-3xl font-bold text-gray-900 leading-tight">

              Get Credentialed Faster. Get Paid Sooner.

            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">

              Adding a new provider, purchasing a dental practice, or
              opening a startup should be exciting, not delayed by
              months of insurance paperwork.

            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">

              At BEANbite, we specialize in dental insurance
              credentialing for general dentists, specialists, group
              practices, startups, acquisitions, and multi-location
              offices throughout the United States.

            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">

              Our experienced credentialing team manages the entire
              enrollment process with PPO plans, Denti-Cal,
              Medicaid, Medicare, and commercial insurance carriers,
              allowing your team to stay focused on patient care while
              we handle the administrative complexities.

            </p>

            {/* Tagline */}

            <div className="mt-10 rounded-2xl border border-[#AFCB12]/20 bg-[#F9FCEB] p-4">

              <h3 className="text-xl font-bold text-gray-900">

                Optimizing Billing.

                <span className="text-[#AFCB12]">

                  {" "}Maximizing Revenue. 

                </span>

                 Increasing Profits.

              </h3>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="relative">

              <img
                src="/services/Image1-467_422.jpg"
                alt="Dental Credentialing"
                className="rounded-[36px] shadow-2xl object-cover w-full"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;