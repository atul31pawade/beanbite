import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const InsuranceVerification = () => {
  const shortFormItems = [
    "Maximum and Deductible", "Fee Schedule", "Group#, Group name", 
    "Plan Payor ID and Effective Date", "Frequency and history of Exams, Xrays, Cleanings",
    "Sealants, SRP, Crowns & Bridgers", "Plan provisions – Prosthetic replacement clause", 
    "Missing tooth clause and waiting periods"
  ];

  const fullFormItems = [
    "Maximum and Deductible", "Fee Schedule", "Group#, Group name",
    "Plan Payor ID and Effective Date", "Frequency and history of Exams, Xrays, Cleanings, Fluoride, Sealants, SRP, Crowns & Bridges",
    "Plan provisions – Prosthetic replacement clause, Missing tooth clause and waiting periods",
    "Up to 32 Codes specific coverage, frequencies, limitations and other clause",
    "Downgrade information for Composites and Crowns", "Orthodontic benefits – maximums, deductibles, age limitations"
  ];

  return (
    <div className="bg-white">
      <InnerPageHeader title="Dental Insurance Verification" breadcrumb="Services / Verification" />

      {/* 1. Specialized Forms Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">For Specialists we provide customized forms</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
            BEANbite takes absolute pride in the quality & accuracy of the Insurance Verifications done by our agents. Our goal is to set up the dental office for success. Obtaining a ‘comprehensive insurance breakdown form’ does demand extra time and effort, involving extended calls to insurance companies for every new patient or to annually update the plan details of existing patients. The complexity arises from the numerous clauses introduced by insurance companies in their plans, making it challenging to decipher the information provided on their fax backs and websites. Consequently, the dental office in-house staff is compelled to seek comprehensive and standardized breakdown forms to effectively navigate this intricacy. Meticulous insurance verifications are the key to providing accurate treatment plans, boosting in-office over-the-counter collections, and fostering a positive cycle of robust cash flow. Additionally, satisfied patients often become a source of valuable referrals, emphasizing the pivotal role of meticulous insurance verification processes.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              BEANbite Dental Insurance Verification Services are reliable, prompt and customizable on two main form types for General practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <FormCard icon="/services/dental1.png" title="Orthodontia Forms" />
            <FormCard icon="/services/dental1.png" title="Endodontic Form" />
            <FormCard icon="/services/dental1.png" title="Pediatric Form" />
            <FormCard icon="/services/dental1.png" title="Oral Surgery Form" />
          </div>
        </div>
      </section>

        {/* 2. Short Form Section (Image Left, Text Right with Full-Width Background) */}
        <section className="relative overflow-hidden py-16">
        {/* ================= BACKGROUND LAYER ================= */}
        <div 
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `url('/services/dental-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
        />
        

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
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
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Short Form</h2>
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
                        <CheckCircle2 className="text-white shrink-0 bg-[#AFCB12] rounded-full" size={22} />
                    </div>
                    <span className="text-black text-[16px] font-medium">{item}</span>
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
            <h2 className="text-3xl font-bold mb-8">Full or Complete Breakdown Form</h2>
            <ul className="space-y-3">
              {fullFormItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#FFFFFF] bg-[#AFCB12] shrink-0 mt-1 rounded-full" size={22} />
                  <span className="text-black text-[16px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img src="/services/dental3.png" alt="Full Breakdown" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. Three Column Feature Section */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-left mb-16">
            <span className="bg-[#C5D92D] text-[#1a2e05] px-4 py-1.5 rounded-full text-xs font-bold uppercase">Services</span>
            <h2 className="text-[24px] font-semibold mt-6">BEANbite’s insurance verifications team aims at setting your dental practice up for success with our insurance verification services</h2>
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
                title="Plans Create & Attched" 
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
const FormCard = ({ icon, title }) => (
  <div className="bg-white border border-[#CECECE] px-6 py-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group">
    <div className="w-12 h-12 mb-4">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>
    <span className="text-[16px] font-semibold text-black leading-tight">{title}</span>
  </div>
);

// Sub-component: Bottom Feature Blocks with Grid Background
const FeatureBlock = ({ icon, title, desc, hasBorder }) => (
    <div className={`px-12 py-24 flex flex-col items-center text-center relative overflow-hidden ${hasBorder ? 'md:border-x border-gray-100' : ''}`}>
      {/* ================= BACKGROUND BLOCK PATTERN ================= */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `url('/services/service-block.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',    
          backgroundPosition: 'center center'
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