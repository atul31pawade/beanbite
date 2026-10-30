import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Rocket,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Credentialing = () => {
  const [openStep, setOpenStep] = useState(null);

  const documents = [
    "Personal Bio-profile (CV)",
    "Dental License",
    "Banking detail for EFT set-up",
    "TIN (Tax Identification Number)",
    "NPI (National Provider Identifier)",
    "DEA (Drug Enforcement Agency) registration",
    "W-9 form (needed for practice address)",
    "Professional Liability Insurance",
    "Bill of sale for acquisition practices",
    "Lease document (For Denti-Cal and Medicaid)",
    "Specialty school certificate-for specialists",
    "Sellers UCR Fee if possible",
  ];

  const workflowSteps = [
    {
      question: "Establish your office UCR fee",
      answer:
        "These fees set standard pricing, aiding insurance reimbursement while offering transparency to patients about expected costs, whether or not covered by insurance. We utilize a third-party fee analysis to generate UCR fees for your office zip code. Most insurance requires us to submit your UCR fees as part of the negotiation process.",
    },
    {
      question: "Create an NPI type 2 if essential",
      answer:
        "This NPI is vital for seamless electronic transactions, particularly for claims submissions and compliance with HIPAA regulations. We’re here to assist in ensuring your practice complies with essential standards for electronic healthcare transactions.",
    },
    {
      question:
        "Evaluate and choose the top 30 codes that can optimize revenue for your practice",
      answer:
        "We’ll collaborate with you to create a specialized list of codes tailored to your specialty, allowing us to concentrate negotiations on the most impactful codes for your dental practice. It’s essential to emphasize that we strive to initiate fee discussions for all CDT codes with insurance providers. Employing this focused set of 30 codes enhances the effectiveness of our negotiations and simplifies the PPO fee analysis process, offering a more manageable and insightful approach compared to assessing the entire spectrum of CDT codes.",
    },
    {
      question: "Engage in fee negotiations with the 'negotiable' PPO plans",
      answer:
        "conduct a comprehensive PPO fee analysis, and present participation options with a plan directly or through shared relationships. It is important to note fee negotiations can take up to 90 days.",
    },
    {
      question:
        "Credentialing with planned PPO insurance & umbrella networks & (by choice, HMO insurance)",
      answer:
        "Once the dentist has examined and given approval for the negotiated PPO fee schedules and chosen participation options, we proceed to the credentialing phase. It is important to note that credentialing applications will be submitted for processing without any delays for insurance that do not engage in fee negotiations upon review and consent of the dentist, as in the case of Delta Dental.",
    },
    {
      question: "Properly Structure your participation to optimize",
      answer:
        "with the highest paying networks as planned in phase 3 by submitting the necessary opt-out letter and ensuring the negotiated PPO Contracts are processed in a timely fashion",
    },
    {
      question: "Fee schedule entry",
      answer:
        "Fee schedule entry into the practice management software (optional & separate service)",
    },
    {
      question: "Copies of all final fee schedules",
      answer:
        "Copies of all final fee schedules and contracts will be provided to you at the completion of the project.",
    },
  ];

  const stages = [
    {
      title: "Start-Ups",
      description:
        "We help new practices get credentialed and in-network faster.",
      icon: Rocket,
    },
    {
      title: "Acquisitions",
      description:
        "We streamline transitions so you can focus on growth, not paperwork.",
      icon: Handshake,
    },
    {
      title: "Established Practices",
      description:
        "We optimize PPO participation and fees to maximize your revenue.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Stretagic Dental Credentialing & PPO Fee Nagotiations"
        breadcrumb="Services / Credentialing"
      />

      {/* 1. Top Section: We Cater to Start-up... */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Description */}
            <div className="mb-4">
              <p className="text-gray-600 text-base mb-4">
                A brand new or initial contract of the dentist requiring
                credentialing with HMO, PPO, EPO and Dent-Cal Insurances.
                Typically, PPO fee negotiations require{" "}
                <strong>90 to 120 days</strong>, and an additional{" "}
                <strong>3 to 12 weeks</strong> are allocated for the processing
                of credentialing contracts.
              </p>
              <p className="text-gray-600 text-base mb-4">
                It's crucial to recognize that fee negotiation is a
                time-consuming process, as insurance companies may not be quick
                to enhance reimbursement rates and various obstacles need to be
                addressed.
              </p>
              <p className="text-gray-600 text-base">
                Moreover, each offer should be carefully assessed not only for
                its financial implications but also to evaluate the overall
                viability of remaining with the PPO plan. Therefore, meticulous
                planning well in advance is essential.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 leading-tight">
              Helping You <span className="text-[#AFCB12]">Succeed</span> at
              Every Stage
            </h2>

            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-10 left-[13%] right-[13%] h-[2px] bg-[#AFCB12]/30" />

              {/* Mobile Vertical Line */}
              <div className="absolute left-10 top-10 bottom-10 w-[2px] bg-[#AFCB12]/30 lg:hidden" />

              <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-6">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="relative flex items-start lg:flex-col lg:items-center w-full"
                    >
                      {/* Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 rounded-full border-2 border-[#AFCB12] bg-white flex items-center justify-center shadow-md">
                          <Icon className="w-10 h-10 text-[#7A9A01]" />
                        </div>

                        {/* Desktop connector dot */}
                        {index !== stages.length - 1 && (
                          <span className="hidden lg:block absolute top-1/2 -right-17 -translate-y-1/2 w-3 h-3 rounded-full bg-[#7A9A01]" />
                        )}
                      </div>

                      {/* Text */}
                      <div className="ml-6 lg:ml-0 lg:mt-3 text-left lg:text-center">
                        <h3 className="text-md font-semibold text-gray-900">
                          {stage.title}
                        </h3>

                        <p className="mt-3 text-base leading-6 text-gray-600 max-w-[220px]">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress */}
            <div className="hidden lg:flex justify-center items-center mt-14">
              <div className="w-36 h-[2px] bg-gray-300"></div>

              <div className="w-14 h-1 rounded-full bg-[#AFCB12] mx-3"></div>

              <div className="w-36 h-[2px] bg-gray-300"></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/services/credentialing-new.png"
              alt="Credentialing"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Middle Section: PPO Fee Negotiations - PURE FULL BLEED IMAGE ON RIGHT */}
      {/* ========================================================= */}
      <section className="bg-[#EEF4FF] overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[600px]">
            {/* LEFT SIDE: Text content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="py-16 lg:py-24 pr-0 lg:pr-20 z-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 leading-tight">
                PPO Fee Negotiations
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                This intricate process typically spans 8 to 10 months, involving
                careful discussions with insurance providers to secure favorable
                fee schedules. PPO fee negotiations are a pivotal aspect of
                optimizing financial outcomes for dental practices. It is
                similar to any other major business negotiations. There are
                generally recognized "do's" & "don'ts" to achieve the best
                negotiation solution. Given the nuanced nature of these
                negotiations, patience is key, as insurance companies may not
                swiftly adjust reimbursement rates. Successful negotiations
                demand a strategic approach, evaluating each offer for its
                financial impact and considering the long-term feasibility of
                maintaining a relationship with the PPO plan.
              </p>
              <p className="mt-6 text-gray-600 text-base leading-relaxed">
                Our team has learnt to determine if a negotiated solution is
                needed or not. Sometimes one or more issues can be better
                resolved with maximizing reimbursements with your current PPO
                network or participation with umbrella plans rather than trying
                hard to negotiate. Adequate planning well in advance is
                fundamental to navigating this complex terrain and ensuring the
                best possible outcomes for the dental practice.
              </p>
            </motion.div>

            {/* RIGHT SIDE: Image Space */}
            {/* This empty div acts as a spacer for the grid on desktop */}
            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </div>

        {/* ================== FULL BLEED IMAGE ================== */}
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full px-6 lg:px-0">
          <img
            src="/services/ppo.png"
            alt="PPO Negotiations"
            className="w-full h-full object-cover rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* 3. Documents Required Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img
              src="/services/doc-required.png"
              alt="Documents"
              className="w-full aspect-square object-cover  rounded-tr-2xl rounded-bl-2xl"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Documents required for credentialing:
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#AFCB12] shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-gray-700 text-sm font-medium">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Workflow Accordion Section */}
      <section className="bg-white mb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 text-center">
            BEANbite Credentialing and Fee <br /> Negotiations Workflow
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Follow our strategic 8-step process for optimal results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {workflowSteps.map((step, i) => {
              const [isExpanded, setIsExpanded] = useState(false);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#AFCB12] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Step Number */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#AFCB12]/10 text-[#AFCB12] font-bold text-sm group-hover:bg-[#AFCB12] group-hover:text-white transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-1 flex-1 bg-[#AFCB12]/20 rounded-full">
                        <div className="h-full w-0 group-hover:w-full bg-[#AFCB12] rounded-full transition-all duration-700"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                      {step.question}
                    </h3>

                    {/* Text with Read More/Read Less */}
                    <div className="relative">
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? "max-h-96" : "max-h-[4.5rem]"
                        }`}
                      >
                        <p className="text-gray-600 text-base leading-relaxed">
                          {step.answer}
                        </p>
                      </div>

                      {/* Gradient overlay when collapsed */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
                      )}
                    </div>

                    {/* Read More/Less Button */}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-3 text-[#AFCB12] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 group/btn"
                    >
                      <span>{isExpanded ? "Read less" : "Read more"}</span>
                      {isExpanded ? (
                        <ChevronUp size={14} className="transition-transform" />
                      ) : (
                        <ChevronDown
                          size={14}
                          className="transition-transform"
                        />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Partner Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20">
        <PartnerSection />
      </div>
    </div>
  );
};

export default Credentialing;
