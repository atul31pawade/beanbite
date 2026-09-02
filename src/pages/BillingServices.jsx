import React from 'react';
import { motion } from 'framer-motion';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';
import BillingSlider from '../components/BillingSlider';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BillingServices = () => {
  return (
    <div className="bg-white">
      <InnerPageHeader title="Billing Services" breadcrumb="Services / Billing" />

      {/* 1. Claims Submitted Daily Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Claims Submitted Daily</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Primary & Secondary Claims are sent electronically every day. Our goal is to get you paid as quickly as possible, and that means submitting your claims accurately with necessary x-rays, perio-charting other attachments and narratives to avoid any delays & denials. We review your claims and attach all necessary items (x-rays, narratives, perio charting) to ensure fewer denials (stall tactics) and get you paid faster. Pre-authorizations will be sent upon office request.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/services/claims-submitted-daily.png" alt="Claims Submission" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 2. Highlighted Slider Section */}
      <section className="py-16 bg-[#f8f9fb] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* JUST USE THE COMPONENT HERE */}
          <BillingSlider />
        </div>
      </section>

      {/* 3. Software Setup Section (Circular Image Left) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-[#C5D92D] rounded-full translate-x-4 translate-y-4 -z-10" />
             <img src="/services/billing2.png" alt="Software Setup" className="rounded-full aspect-square object-cover border-8 border-white shadow-xl" />
          </div>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6">Software Setup Assistance Included</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Offices that need help with setting up electronic claims transmission and digital radiograph systems, we will extend our full support to help with this transition at no additional cost to your dental practice. For those insurance that do not accept electronic claims and attachments our billing executive will notify your office manager via email. You will be provided a pdf of the claim form with narrative and necessary attachments for your office to print and mail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Production Reports Section (Circular Image Right) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6">Daily Billing & Production Reports</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
            Your office manager will receive a daily billing and production report, with a screenshot of confirmation of the electronic transmission. The report will also provide a fee back and tips to boost office production as necessary.
            </p>
          </motion.div>
          <div className="relative">
             <div className="absolute inset-0 bg-[#C5D92D] rounded-full -translate-x-4 translate-y-4 -z-10" />
             <img src="/services/billing3.png" alt="Reports" className="rounded-full aspect-square object-cover border-8 border-white shadow-xl" />
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <PartnerSection />
      </div>
    </div>
  );
};

export default BillingServices;