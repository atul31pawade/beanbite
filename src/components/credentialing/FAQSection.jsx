import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

const faqs = [
  {
    question: "How Long Does Dental Credentialing Take?",
    answer: `Credentialing timelines vary by insurance company and state.

Typical processing times are:

• PPO Credentialing: Approximately 90 to 120 days

• PPO Fee Negotiation + Credentialing: Approximately 24 to 30 weeks

• Denti-Cal: Up to 6 months, although approvals may occur sooner

• Medicaid: Up to 6 months, depending on the state

• HMO Plans: Approximately 4 to 6 months

Some insurance carriers may require additional documentation or office inspections, which can extend processing times. Throughout the project, BEANbite provides regular status updates so you always know where each application stands.`,
  },

  {
    question: "Can You Credential an Associate Dentist?",
    answer: `Yes. We routinely help dental practices credential new associate dentists with PPO, Medicaid, Denti-Cal, and other insurance plans.

Before investing in credentialing, we strongly recommend that the practice owner is confident the associate is both a good cultural fit and a productive provider for the practice. Credentialing requires a significant investment of time and money, and the process can take several months. Ensuring the associate is a long-term fit helps maximize the return on that investment.`,
  },

  {
    question: "Do you recommend joining every PPO plan?",
    answer: `Absolutely not.

One of the biggest mistakes dental practices make is participating with every available insurance network.

Before recommending participation, we carefully evaluate each insurance company's reimbursement rates, network structure, patient volume, and long-term profitability.

In many cases, declining participation with a lower-paying network can produce stronger financial results than joining every available plan.

For example, some insurance companies lease their networks through higher-paying umbrella arrangements. In these situations, remaining out of network with one carrier while participating through another may generate higher reimbursements.`,
  },

  {
    question: "Can You Negotiate PPO Fees Before Credentialing?",
    answer: `Absolutely.

In most cases, we recommend negotiating PPO fee schedules before submitting credentialing applications.

Once a provider becomes credentialed and signs a participation agreement, much of the negotiating leverage is lost.

Our process begins by evaluating your practice, comparing PPO fee schedules, and negotiating with insurance companies whenever possible. We also compare direct contracts with shared and umbrella network options to determine which participation strategy offers the strongest financial outcome.

Our goal is not simply to join more insurance plans, but to help your practice participate in the
right networks with the most favorable reimbursement opportunities.`,
  },

  {
    question: "Can You Credential Multiple Office Locations?",
    answer: `Yes. We regularly assist multi-location practices, group practices, and Dental Service Organizations (DSOs) with credentialing under multiple Tax Identification Numbers (TINs).

    Managing multiple providers and locations simultaneously can often create opportunities during PPO negotiations, particularly when practices operate within the same geographic market.

    Insurance representatives may have greater flexibility when evaluating larger groups, which can sometimes result in more favorable reimbursement opportunities.

`,
  },

  {
    question: "Can I Remain In-Network During a Practice Acquisition?",
    answer: `Yes, but careful planning is essential.

Insurance participation is linked to multiple factors, including the provider's NPI, the practice's Tax Identification Number (TIN), practice location, and the insurance company's provider database.

During a practice acquisition, we carefully coordinate ownership changes, provider enrollment, effective dates, and insurance notifications to help minimize disruptions in network participation whenever possible. Because every insurance company has different requirements, maintaining uninterrupted participation cannot always be guaranteed, but our goal is to make the transition as smooth as possible.`,
  },

  {
    question: "Does BEANbite Credential Dental Specialists?",
    answer: `Yes. We credential all dental specialties, including orthodontists, endodontists, periodontists, pediatric dentists, oral surgeons, prosthodontists, and other specialists.

However, we do not recommend that specialists participate with every PPO plan. Each specialty has unique overhead, procedure mix, referral patterns, and profitability considerations.

Before recommending insurance participation, we evaluate multiple factors, including reimbursement rates, local market conditions, referral opportunities, and long-term profitability.

Our goal is to help specialists build a network strategy that supports sustainable growth rather than simply maximizing the number of participating plans.`,
  },

  {
    question: "Do You Only Work in California?",
    answer: `No.

Although BEANbite is headquartered in California, we provide credentialing, PPO optimization and revenue cycle consulting services to dental practices throughout the United States.

Our team has extensive experience working with national and regional insurance carriers, making us well-equipped to support practices in multiple states.`,
  },

  {
    question: "Can I Start Credentialing Before My Practice Purchase Is Completed?",
    answer: `In most cases, we recommend waiting until the practice acquisition has officially closed before submitting credentialing applications.

If a practice sale falls through after applications have been submitted, withdrawing or reversing credentialing applications can become time-consuming and may create unnecessary complications with insurance companies.

That said, every acquisition is different. Once the purchase is certain and any confidentiality restrictions have been addressed, we can begin preparing documentation and developing a credentialing strategy so the enrollment process can move forward as efficiently as possible after closing.

Certain insurance companies require documentation such as:

• Bill of Sale
• Seller Authorization Letter
• Effective Ownership Date

Once these documents become available, we finalize the enrollment process according to each insurance carrier's requirements.`,
  },

  {
    question: "What is CAQH?",
    answer: `CAQH (Council for Affordable Quality Healthcare) is a secure online credentialing database used by many insurance companies to verify provider credentials.

    It stores information such as:

    • Professional education
    • Licensure
    • Practice information
    • Work history
    • Malpractice history
    • Professional credentials

    Your CAQH ID is different from your NPI.

    Your NPI (National Provider Identifier) is your permanent provider identification number, while your CAQH profile serves as your professional credentialing portfolio, allowing participating insurance companies to access your information during the credentialing process.`,
},
{
    question: "I'm already credentialed at another dental office. Will that speed things up?",
    answer: `Sometimes, if you are already credentialed under another Tax Identification Number (TIN), certain insurance companies may be able to expedite portions of the process.

    However, most carriers still require a new credentialing application when enrolling under a different practice&#39;s TIN.

    Starting credentialing for your new practice will not affect your participation status with your current employer.`,
  },

  {
    question: "What is an Office Assessment or Facility Review?",
    answer: `Some insurance companies, particularly HMO plans and startup practice enrollments, require an on-site office inspection before approving participation.

    The reviewer may inspect:

    • Emergency medications
    • Drug expiration dates
    • Sterilization procedures
    • Instrument processing
    • OSHA compliance
    • Emergency exits
    • Safety protocols
    • Clinical readiness

    Final credentialing approval is often contingent upon successfully completing this assessment.`,
  },
];

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const [search, setSearch] = useState("");

  const [showAll, setShowAll] = useState(false);

  const filteredFAQs = useMemo(() => {

    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  const visibleFAQs = showAll
    ? filteredFAQs
    : filteredFAQs.slice(0, 6);

  return (
    <section className="py-12 bg-white">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <div className="text-center mb-14">

          {/* <span className="inline-flex px-5 py-2 rounded-full bg-[#AFCB12]/10 text-[#7A9200] font-semibold">
            Frequently Asked Questions
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Everything You Need to Know
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Find answers to the most common questions about credentialing,
            PPO negotiations, <br />  acquisitions and provider enrollment.
          </p>

        </div>

        
                {/* FAQ List */}

                <div className="space-y-5">

{visibleFAQs.map((faq, index) => (

  <motion.div
    key={index}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
  >

    <button
      onClick={() =>
        setOpenIndex(openIndex === index ? null : index)
      }
      className="w-full flex items-center justify-between text-left px-4 py-4"
    >

      <h3 className="text-md font-semibold text-gray-900 pr-8">
        {faq.question}
      </h3>

      <div className="flex-shrink-0">

        {openIndex === index ? (
          <ChevronUp
            size={22}
            className="text-[#AFCB12]"
          />
        ) : (
          <ChevronDown
            size={22}
            className="text-gray-500"
          />
        )}

      </div>

    </button>

    <AnimatePresence>

      {openIndex === index && (

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >

          <div className="px-7 pb-7 border-t border-gray-100">

            <div className="pt-6 whitespace-pre-line text-gray-600 leading-4 text-sm">

              {faq.answer}

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </motion.div>

))}

</div>

{/* Show More / Show Less */}

{filteredFAQs.length > 6 && (

<div className="text-center mt-12">

  <button
    onClick={() => setShowAll(!showAll)}
    className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#AFCB12] text-white font-semibold hover:bg-[#95AF0F] transition"
  >

    {showAll ? "Show Less FAQs" : "Show More FAQs"}

    {showAll ? (
      <ChevronUp size={20} />
    ) : (
      <ChevronDown size={20} />
    )}

  </button>

</div>

)}

</div>

</section>

);
};

export default FAQ;