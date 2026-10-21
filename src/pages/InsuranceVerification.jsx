import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Baby,
  CheckCircle2,
  FileText,
  Sparkles,
  Syringe,
} from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const InsuranceVerification = () => {
  const shortFormItems = [
    "Maximum and Deductible",
    "Fee Schedule",
    "Group#, Group name",
    "Plan Payor ID and Effective Date",
    "Frequency and history of Exams, Xrays, Cleanings, Sealants, SRP, Crowns & Bridgers",
    "Plan provisions – Prosthetic replacement clause, Missing tooth clause and waiting periods",
  ];

  const fullFormItems = [
    "Maximum and Deductible",
    "Fee Schedule",
    "Group#, Group name",
    "Plan Payor ID and Effective Date",
    "Frequency and history of Exams, Xrays, Cleanings, Fluoride, Sealants, SRP, Crowns & Bridges",
    "Plan provisions – Prosthetic replacement clause, Missing tooth clause and waiting periods",
    "Up to 32 Codes specific coverage, frequencies, limitations and other clause",
    "Downgrade information for Composites and Crowns",
    "Orthodontic benefits – maximums, deductibles, age limitations",
  ];

  const specialistForms = [
    {
      title: "Orthodontia Forms",
      label: "ORTHO",
      icon: Sparkles,
      href: "/forms/Ortho%20Forms.pdf",
    },
    {
      title: "Endodontic Form",
      label: "ENDO",
      icon: Activity,
      href: "/forms/ENDO%20Verification%20Form.pdf",
    },
    {
      title: "Pediatric Form",
      label: "PEDI",
      icon: Baby,
      href: "/forms/Pediatric%20_Full%20Form.pdf",
    },
    {
      title: "Oral Surgery Form",
      label: "SURG",
      icon: Syringe,
      href: "/forms/Oral%20Surgery_CIGNA.pdf",
    },
  ];

  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Dental Insurance Verification"
        breadcrumb="Services / Verification"
      />

      {/* 1. Specialized Forms Section */}
      <section className="relative overflow-hidden bg-[#F7F9F2] px-6 py-20 lg:py-24">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-[#C5D92D]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#002060]/5 blur-3xl" />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <p className="mx-auto mb-5 max-w-7xl text-left text-base leading-8 text-gray-600 md:text-lg">
            BEANbite takes absolute pride in the quality &amp; accuracy of the
            Insurance Verifications done by our agents. Our goal is to set up
            the dental office for success. Obtaining a ‘comprehensive insurance
            breakdown form’ does demand extra time and effort, involving
            extended calls to insurance companies for every new patient or to
            annually update the plan details of existing patients. The
            complexity arises from the numerous clauses introduced by insurance
            companies in their plans, making it challenging to decipher the
            information provided on their fax backs and websites. Consequently,
            the dental office in-house staff is compelled to seek comprehensive
            and standardized breakdown forms to effectively navigate this
            intricacy. Meticulous insurance verifications are the key to
            providing accurate treatment plans, boosting in-office
            over-the-counter collections, and fostering a positive cycle of
            robust cash flow. Additionally, satisfied patients often become a
            source of valuable referrals, emphasizing the pivotal role of
            meticulous insurance verification processes.
          </p>
          <p className="mx-auto max-w-7xl text-left text-base leading-7 text-gray-600">
            BEANbite Dental Insurance Verification Services are reliable, prompt
            and customizable on two main form types for General practices –{" "}
            <span className="font-bold text-[#809900]">
              Click the samples below
            </span>
          </p>
          <div className="mx-auto mt-8 grid max-w-7xl gap-4 text-left sm:grid-cols-2">
            <a
              href="/forms/Complete%20Breakdown%20Form_Aetna.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#AFCB12]/30 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-[#AFCB12] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#809900]"
            >
              <span className="flex items-center gap-3 font-semibold text-gray-900">
                <FileText
                  size={22}
                  className="shrink-0 text-[#D32F2F]"
                  aria-hidden="true"
                />
                Complete Breakdown Form_Aetna
              </span>
              <ArrowUpRight
                className="shrink-0 text-[#809900] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={22}
                aria-hidden="true"
              />
            </a>
            <a
              href="/forms/Short%20Form%20for%20existing%20patients.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#AFCB12]/30 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-[#AFCB12] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#809900]"
            >
              <span className="flex items-center gap-3 font-semibold text-gray-900">
                <FileText
                  size={22}
                  className="shrink-0 text-[#D32F2F]"
                  aria-hidden="true"
                />
                Short Form for existing patients
              </span>
              <ArrowUpRight
                className="shrink-0 text-[#809900] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={22}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. Short Form Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE SIDE (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <img
                src="/services/short-form.png"
                alt="Short Form"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            {/* TEXT SIDE (Right) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Short Form
              </h2>
              <ul className="grid gap-y-4">
                {shortFormItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="rounded-full">
                      <CheckCircle2
                        className="text-white shrink-0 bg-[#AFCB12] rounded-full"
                        size={22}
                      />
                    </div>
                    <span className="text-black text-[16px] font-medium">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Full Breakdown Section (Text Left, Image Right) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-8">
              Full or Complete Breakdown Form
            </h2>
            <ul className="space-y-3">
              {fullFormItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#FFFFFF] bg-[#AFCB12] shrink-0 mt-1 rounded-full"
                    size={22}
                  />
                  <span className="text-black text-[16px] font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/services/dental3.png"
              alt="Full Breakdown"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specialist Forms Section */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#809900]">
              Made for your specialty
            </span>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              For specialists, we provide customized forms
            </h2>
            <p className="mt-4 text-gray-600">
              Choose a specialty to open its dedicated verification form.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialistForms.map((form, index) => (
              <FormCard key={form.label} {...form} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three Column Feature Section */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-left mb-16">
            <span className="bg-[#C5D92D] text-[#1a2e05] px-4 py-1.5 rounded-full text-xs font-bold uppercase">
              Services
            </span>
            <h2 className="text-[24px] font-semibold mt-6">
              BEANbite’s insurance verifications team aims at setting your
              dental practice up for success with our insurance verification
              services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm">
            <FeatureBlock
              icon="/services/dental-service1.png"
              title="Customized Breakdown"
              desc="Customized Breakdown forms to suite your dental practice needs"
            />
            <FeatureBlock
              icon="/services/dental-service2.png"
              title="Form Upload"
              desc="Uploaded in your patients documents center or images"
              hasBorder
            />
            <FeatureBlock
              icon="/services/dental-service3.png"
              title="Plans Create & Attached in PMS"
              desc="Attaching insurance plans to patient's file"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <PartnerSection />
      </div>
    </div>
  );
};

// Sub-component: Small Icon Cards
const FormCard = ({ title, label, href, index, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${title}`}
    className="group block h-44 rounded-3xl [perspective:1000px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#809900]"
  >
    <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-500 [backface-visibility:hidden] group-hover:shadow-xl">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F3F6DF] transition-transform duration-500 group-hover:scale-125" />
        <div className="relative flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002060] text-[#C5D92D] shadow-md transition-transform duration-500 group-hover:rotate-6">
            <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold tracking-[0.14em] text-gray-400">
            {`0${index + 1} / 04`}
          </span>
        </div>
        <div className="relative">
          <span className="mb-1 block text-[10px] font-bold tracking-[0.18em] text-[#809900]">
            {label}
          </span>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <div className="mt-3 h-1 w-10 rounded-full bg-[#C5D92D] transition-all duration-500 group-hover:w-16" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-[#002060] p-5 text-center text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#C5D92D]">
          <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
          {title}
        </span>
        <span className="mt-4 rounded-full bg-[#C5D92D] px-5 py-2 text-sm font-bold text-[#1a2e05] transition-transform group-hover:scale-105">
          Click to open form
        </span>
      </div>
    </div>
  </a>
);

// Sub-component: Bottom Feature Blocks with Grid Background
const FeatureBlock = ({ icon, title, desc, hasBorder }) => (
  <div
    className={`px-12 py-24 flex flex-col items-center text-center relative overflow-hidden ${hasBorder ? "md:border-x border-gray-100" : ""}`}
  >
    {/* ================= BACKGROUND BLOCK PATTERN ================= */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url('/services/service-block.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center",
      }}
    />

    <div className="relative z-10">
      {/* Icon Circle */}
      <div className="w-16 h-16 flex items-center justify-center mx-auto mb-8">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>

      {/* Text Content */}
      <h3 className="text-[24px] font-semibold text-black mb-3">{title}</h3>
      <p className="text-[16px] font-regular text-gray-500 leading-relaxed mx-auto">
        {desc}
      </p>
    </div>
  </div>
);

export default InsuranceVerification;
