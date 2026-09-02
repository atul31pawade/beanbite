import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Why Our Approach Is Different",
    content: [
      "Many traditional credentialing companies begin by analyzing local demographics and identifying the insurance plans that are most common in your area. While this approach made sense years ago, today's insurance landscape has changed dramatically.",
    ],
  },
  {
    id: 2,
    title: "Insurance Landscape",
    content: [
      "With the growth of umbrella networks, leased networks, and network-sharing agreements, many insurance plans now provide access through multiple contracting pathways. Simply joining the most common insurance plans in your area is no longer the most profitable strategy.",
      "At BEANbite, we take a different approach.",
    ],
  },
  {
    id: 3,
    title: "Our Evaluation",
    content: [
      "Before credentialing your providers, we carefully evaluate your practice's UCR fees, proposed PPO fee schedules, local market conditions, and long-term profitability.",
      "We compare direct PPO contracts with umbrella network options to determine which participation strategy offers the greatest financial advantage for your practice.",
    ],
  },
  {
    id: 4,
    title: "Recommendations",
    bullets: [
      "Direct PPO contracts",
      "Umbrella and leased network participation",
      "In some situations, selective out-of-network recommendations when financially advantageous",
    ],
  },
  {
    id: 5,
    title: "Our Objective",
    content: [
      "If an insurance company offers out-of-network benefits and accepts assignment of benefits, remaining out of network while billing your full UCR fees may produce stronger long-term profitability than accepting a low-paying PPO contract.",
      "Our objective is never to enroll your practice in the greatest number of insurance plans. Our objective is to build the right insurance network, one that supports healthy reimbursement, sustainable growth, and long-term profitability.",
    ],
  },
];

const WhyDifferent = () => {
  const [active, setActive] = useState(1);

  const activeSection = sections.find((section) => section.id === active);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6  lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-8"
        >
          {/* <span className="inline-flex rounded-full bg-[#AFCB12]/10 px-5 py-2 font-semibold text-[#7A9200]">
            Why Our Approach Is Different
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Building the Right Insurance Network
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            At BEANbite, we take a different approach. Rather than simply
            enrolling providers into the largest number of insurance plans, we
            first evaluate reimbursement opportunities, network structure, and
            long-term profitability before credentialing begins.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute left-5 top-3 bottom-3 w-[2px] bg-gray-200"></div>

                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className="relative flex items-start gap-5 mb-10 w-full text-left group"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        active === item.id
                          ? "bg-[#AFCB12] text-white shadow-lg"
                          : "bg-white border border-gray-300 text-gray-500"
                      }`}
                    >
                      {item.id}
                    </div>

                    <div>
                      <h3
                        className={`font-bold text-md transition ${
                          active === item.id
                            ? "text-[#AFCB12]"
                            : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <div
                        className={`h-[2px] mt-2 rounded-full transition-all duration-300 ${
                          active === item.id
                            ? "bg-[#AFCB12] w-20"
                            : "bg-gray-200 w-10"
                        }`}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            {activeSection && (
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-[30px] p-10 bg-white shadow-2xl border border-[#AFCB12]/30"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#AFCB12]/10 flex items-center justify-center">
                    <span className="text-[#AFCB12] text-xl font-bold">
                      {activeSection.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {activeSection.title}
                    </h3>
                  </div>
                </div>

                {activeSection.content &&
                  activeSection.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 text-sm leading-relaxed mt-4"
                    >
                      {paragraph}
                    </p>
                  ))}

                {activeSection.bullets && (
                  <div className="mt-8">
                    {activeSection.bullets.map((item, i) => (
                      <div
                        key={i}
                        className="p-2"
                      >
                        <div className="flex items-center gap-4">
                          <CheckCircle2
                            className="text-[#AFCB12] shrink-0"
                            size={22}
                          />
                          <p className="leading-7 text-gray-700">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;