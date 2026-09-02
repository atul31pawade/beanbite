import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from '../components/PartnerSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ConsultingAndAudit = () => {
  const services = [
    "Revenue Cycle Performance Analysis",
    "Billing & Documentation Review",
    "Coding Accuracy Assessment",
    "Insurance Workflow Evaluation",
    "Accounts Receivable Performance Review",
    "Operational Workflow Review",
    "Compliance Readiness Assessment",
    "Audit Risk Identification",
    "Financial Performance Review",
    "Process Improvement Opportunities",
    "Payer Communication Evaluation",
    "Strategic Action Recommendations"
  ];

  const workflowSteps = [
    {
      question: "Understand Your Practice, Goals, and Operational Challenges",
      answer: "We begin by understanding your goals, operational challenges, and long-term vision to build a consulting strategy aligned with your dental office's unique needs."
    },
    {
      question: "Evaluate Revenue Cycle Performance, Workflows, and Operations",
      answer: "Our team reviews your revenue cycle, billing workflows, operational processes, and financial performance. Our billing team then identifies strengths, inefficiencies, and opportunities for improvement."
    },
    {
      question: "Identify Revenue Leaks, Operational Gaps, and Compliance Risks",
      answer: "We identify hidden revenue leaks, workflow inefficiencies, documentation gaps, and compliance risks before they impact financial performance or audit readiness."
    },
    {
      question: "Prioritize High-Impact Improvements That Deliver Measurable Results",
      answer: "Every finding is carefully prioritized, allowing your team to focus first on improvements that deliver the greatest operational and financial impact."
    },
    {
      question: "Develop a Practical Action Plan Tailored to Your Practice",
      answer: "We create a practical action plan with clear priorities, timelines, and next steps to help your team implement improvements with confidence."
    },
    {
      question: "Optimize Workflows, Documentation, and Revenue Cycle Processes",
      answer: "Our team works alongside yours to optimize workflows, strengthen documentation, and refine revenue cycle processes that improve efficiency and day-to-day performance."
    },
    {
      question: "Strengthen Audit Readiness and Compliance Confidence",
      answer: "We strengthen documentation standards, compliance processes, and audit preparedness so your dental office can respond confidently to insurance reviews."
    },
    {
      question: "Monitor Progress and Support Continuous Improvement",
      answer: "Our team conducts regular performance reviews to measure progress, refine strategies, and identify new opportunities for continuous improvement."
    }
  ];

  return (
    <div className="bg-white">
      <InnerPageHeader 
        title="Practice Consulting & Audit Report" 
        breadcrumb="Services / Consulting & Audit" 
      />

      {/* 1. Top Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                We help dental practices uncover operational gaps, strengthen revenue cycle performance, and confidently navigate compliance and insurance audit challenges.
            </h2>
            <p className="text-[#AFCB12] font-bold mb-4">Evaluate Before You Elevate Your Dental Practice</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Are you making important decisions based on assumptions or clear operational insights? Most dental practices in the United States closely monitor production, collections, and patient care. Very few have the time to evaluate whether the systems behind those results are performing at the same level. In fact, hidden inefficiencies often go unnoticed until they begin to affect your dental office's performance.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
                BEANbite brings an experienced, objective perspective to evaluate your practice, uncover improvement opportunities, and strengthen the systems that drive long-term success. Our consulting and audit support services help you make informed decisions, improve operational performance, and confidently prepare your team for future growth.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="/services/consulting-audit/consulting-audit.png" 
              alt="Dental Consulting & Audit" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 2. Middle Section */}
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                A Consulting Strategy Built Around Your Practice, Not a Template
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                Every dental practice operates differently. What works well for one practice may not deliver the same results for another. Staffing, patient demographics, insurance participation, internal workflows, and long-term goals all influence how your practice performs. That's why we first understand your dental office and only then recommend any changes. 
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                BEANbite takes a comprehensive approach to evaluating your operational, financial, and revenue cycle performance to identify improvement opportunities that truly matter. Our consulting and audit support team performs revenue cycle analysis, billing and documentation reviews, coding assessments, compliance evaluations, and workflow optimization. Then we offer practical recommendations designed to reduce inefficiencies, strengthen financial performance, and support compliance. Every recommendation is tailored to help your team build a stronger foundation for long-term success.
              </p>
            </motion.div>

            {/* RIGHT SIDE: Image Space */}
            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </div>

        {/* FULL BLEED IMAGE */}
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full px-6 lg:px-0">
          <img 
            src="/services/consulting-audit/consulting-strategy-built.jpg"
            alt="Audit & Consulting" 
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img 
              src="/services/consulting-audit/consulting-audit.png" 
              alt="Our Services" 
              className="w-full aspect-square object-cover rounded-tr-2xl rounded-bl-2xl" 
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-8">What We Evaluate During Your Dental Practice Assessment</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#AFCB12] shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Workflow Section - No Read More/Less */}
      <section className="bg-white mb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our 8-Step Practice Consulting Framework <br /> for Better Practice Performance
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Follow our strategic 8-step process for comprehensive practice optimization
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {workflowSteps.map((step, i) => (
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
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-1 flex-1 bg-[#AFCB12]/20 rounded-full">
                      <div className="h-full w-0 group-hover:w-full bg-[#AFCB12] rounded-full transition-all duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Content - Full Answer Visible */}
                  <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight">
                    {step.question}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.answer}
                  </p>
                </div>
              </motion.div>
            ))}
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

export default ConsultingAndAudit;