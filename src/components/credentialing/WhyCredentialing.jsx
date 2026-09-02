import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ShieldCheck,
  FileCheck2,
  Clock3,
  Stethoscope,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    text: "Begin submitting claims as an in-network provider sooner",
  },
  {
    icon: Wallet,
    text: "Reduce reimbursement delays",
  },
  {
    icon: Wallet,
    text: "Improve cash flow",
  },
  {
    icon: FileCheck2,
    text: "Minimize enrollment errors",
  },
  {
    icon: ShieldCheck,
    text: "Maintain compliance with insurance requirements",
  },
  {
    icon: Stethoscope,
    text: "Allow providers to begin treating patients with confidence",
  },
];

const WhyCredentialing = () => {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <span className="inline-flex rounded-full bg-[#AFCB12]/10 px-5 py-2 text-[#7A9200] font-semibold">
              Why Credentialing Matters
            </span> */}

            <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
              Proper Credentialing Helps Protect Your Revenue
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Without proper credentialing, even outstanding clinical
              care may never translate into insurance reimbursement.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Incomplete applications, missing documents, enrollment
              delays, and payer follow-ups can postpone claim payments
              for weeks or even months, creating unnecessary stress and
              cash flow challenges for your practice.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Whether you are credentialing one provider or an
              entire group practice, BEANbite helps streamline
              the process from start to finish.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-white border border-[#AFCB12]/20 p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Professional credentialing helps your practice:
              </h3>

              <div className="space-y-5 mt-8">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#AFCB12]/10 flex items-center justify-center shrink-0">
                        <Icon
                          className="text-[#AFCB12]"
                          size={22}
                        />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mt-4">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCredentialing;