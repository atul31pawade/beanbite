import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Credentialing = () => {
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

  const whyChoose = [
    "750+ Providers Credentialed",
    "PPO Negotiations Across 40+ Insurance Networks",
    "Dedicated Project Manager",
    "Transparent Progress Updates",
  ];

  const phases = [
    {
      title: "Phase 1: Prepare Your Practice and Fee Strategy",
      body: [
        <p key="b1" className="text-base leading-7 text-[#5e5e5e]">
          We establish a data-informed office fee schedule using a third-party
          analysis based on your office ZIP code. We can also assist with a Type
          2 NPI when needed and work with you to select 30 priority CDT codes
          for focused fee analysis. We seek fee discussions across all
          applicable CDT codes when the payer&rsquo;s process allows.
        </p>,
      ],
      why: (
        <>
          A clear fee baseline and focused code review help you evaluate payer
          offers with your practice&rsquo;s goals and services in mind.
        </>
      ),
    },
    {
      title: "Phase 2: Negotiate PPO Fees",
      body: [
        <p key="b1" className="text-base leading-7 text-[#5e5e5e]">
          We contact insurance companies to request enrollment requirements and
          initial fee schedules. After reviewing each offer with you, we
          typically pursue two to three rounds of negotiations, based on the
          plan and available options. This phase may take{" "}
          <strong>one to four months</strong> as successful negotiations demand
          a strategic approach, evaluating each offer for its financial impact
          and considering the long-term feasibility of maintaining a
          relationship with the PPO plan.
        </p>,
      ],
      why: (
        <>
          You can review the fees and participation terms before deciding which
          options to pursue. Negotiation results depend on each payer and are
          not guaranteed.
        </>
      ),
    },
    {
      title: "Phase 3: Complete Credentialing and Enrollment",
      body: [
        <p key="b1" className="text-base leading-7 text-[#5e5e5e]">
          Once you confirm your preferred participation options, we prepare and
          submit the credentialing applications and follow up with the payers.
          Processing may take <strong>30 to 120 days</strong>, and this phase
          can overlap with negotiations. Many direct contracts may be completed
          within an estimated <strong>one to five months</strong>. An umbrella
          or shared-network route selected for optimization may add an estimated{" "}
          <strong>
            three to six months after the umbrella plan&rsquo;s effective date
          </strong>
          .
        </p>,
      ],
      why: (
        <>
          We help keep the application process organized while you make
          informed decisions about the plans and routes you want to pursue.
        </>
      ),
    },
    {
      title: "Phase 4: Optimize Network Participation",
      body: [
        <p key="b1" className="text-base leading-7 text-[#5e5e5e]">
          As payer options are confirmed, we review available fee schedules and
          direct, umbrella, or shared-network pathways. We help you understand
          how those arrangements may affect participation and contracted fees,
          then work with you to identify options that best fit your practice.
        </p>,
        <p key="b2" className="mt-3 text-base leading-7 text-[#5e5e5e]">
          This phase may take <strong>one to four months</strong> and can
          overlap with credentialing.
        </p>,
      ],
      why: (
        <>
          A network connection can affect which fee schedule applies.
          Understanding the arrangement helps you assess your options before
          moving forward.
        </>
      ),
    },
    {
      title: "Phase 5: Prepare for the Handoff",
      body: [
        <p key="b1" className="text-base leading-7 text-[#5e5e5e]">
          We provide support with EFT enrollment and give you copies of your
          final contracts and fee schedules. You&rsquo;ll also have a final call
          with BEANbite CEO Santosh Rohira to review your newly contracted
          plans, PPO structure, and network stacking arrangements.
        </p>,
        <p key="b2" className="mt-3 text-base leading-7 text-[#5e5e5e]">
          <strong>Optional, separately priced service:</strong> We can enter
          your finalized fee schedules into your practice management software.
        </p>,
      ],
      why: (
        <>
          You finish the project with your key documents and a clearer
          understanding of how your new plan and network relationships are
          structured.
        </>
      ),
    },
  ];

  const programs = [
    {
      title: "California Medi-Cal Dental (Denti-Cal) Enrollment",
      estimate: "3 to 6 months",
      icon: (
        <>
          <path d="M12 3l7 3v6c0 4-3 6.5-7 9-4-2.5-7-5-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </>
      ),
      body: (
        <p className="text-base leading-7 text-[#5e5e5e]">
          We help dental practices enroll with California Medi-Cal Dental,
          commonly known as Denti-Cal. Our team is experienced with DHCS&rsquo;s
          PAVE portal and helps organize required documentation, prepare
          applications, and follow up on enrollment status. Because the
          application requires careful attention to detail, we review
          submissions closely to help reduce avoidable errors and delays. DHCS
          processing may take <strong>90 to 180 days</strong>, so we recommend
          planning for approximately <strong>3 to 6 months</strong>. Actual
          timing depends on the application and DHCS review.
        </p>
      ),
    },
    {
      title: "Medicaid Enrollment",
      estimate: "4 to 6 months",
      icon: (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 8h5M18.5 5.5v5" />
        </>
      ),
      body: (
        <p className="text-base leading-7 text-[#5e5e5e]">
          We help dental practices with state Medicaid and Medicaid managed care
          enrollment, including application preparation, document coordination,
          and follow-up. As a planning estimate, enrollment may take{" "}
          <strong>4 to 6 months</strong>, depending on the state, program, and
          review requirements. Actual timelines vary.
        </p>
      ),
    },
    {
      title: "HMO Enrollment",
      estimate: "4 to 6 months",
      icon: (
        <>
          <path d="M4 20V6l8-3v17M12 20h8V10l-8-3" />
          <path d="M7 9h1M7 13h1M16 12h1M16 16h1" />
        </>
      ),
      body: (
        <>
          <p className="text-base leading-7 text-[#5e5e5e]">
            We help dental practices navigate HMO credentialing and contracting
            by coordinating provider and practice applications, organizing
            required documentation, and following up with plans. We also help
            providers understand plan-specific payment details, including
            capitation and supplemental payments, so they know how compensation
            for services is structured under each contract.
          </p>
          <p className="mt-4 text-base leading-7 text-[#5e5e5e]">
            Some plans require an office assessment or facility review to
            confirm your practice is ready to see patients. We guide your team
            through the required forms and help organize accurate responses and
            supporting documents. HMO enrollment may take an estimated 4 to 6
            months, depending on the plan. Requirements, payment terms, and
            timelines vary.
          </p>
        </>
      ),
    },
  ];

  const maintenance = [
    "Enrollment with local plans upon request",
    "Associate Provider Enrollment",
    "Group Practice Enrollment or DSO Enrollment",
    "Practice Location Changes",
    "Provider Termination",
    "CAQH Profile Management / quarterly attestation",
    "NPI Type 2 and 1 Registration Assistance",
    "EFT Enrollment",
    "Provider Directory Updates",
    "Recredentialing Management",
    "PPO fee update in PMS",
  ];

  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Stretagic Dental Credentialing & PPO Fee Nagotiations"
        breadcrumb="Services / Credentialing"
      />

      {/* 1. Top Section: We Cater to Start-up... */}
      <section className="bg-[#F7F9F2] py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-4">
              Insurance Credentialing and Enrollment, Managed from Start to
              Finish
            </h2>

            <p className="text-base leading-7 text-[#5e5e5e] mb-4">
              We manage enrollment beyond PPO networks, including HMO,
              indemnity, discount, local union, Medicaid, and California
              Denti-Cal plans. Whether you&rsquo;re opening a new office,
              expanding plan participation, updating existing contracts, or
              credentialing a new associate, our team keeps the process
              organized from start to finish.
            </p>

            <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e] mb-4">
              Why Dental Practices Choose BEANbite
            </h3>

            <ul className="mb-4 space-y-2">
              {whyChoose.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-7 text-[#5e5e5e]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#8CB428]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base leading-7 text-[#5e5e5e]">
              As part of our commitment to service, we believe practices
              deserve experienced credentialing support at fair, value-driven
              pricing. We become an extension of your administrative team,
              helping reduce delays, improve operational efficiency, and create
              a smoother experience for both providers and office managers.
            </p>
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

      {/* Enrollment Approaches: Fast-Track vs Comprehensive */}
      <section className="bg-white py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-6">
              Choose the Enrollment Approach That Fits Your Practice
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E4E9D8] bg-[#F7F9F2] p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e] mb-4">
                  Fast-Track PPO Enrollment{" "}
                  <span className="font-normal">without</span> PPO fee
                  negotiations
                </h3>
                <p className="text-base leading-7 text-[#5e5e5e]">
                  Ready to pursue in-network participation without fee
                  negotiations? Our fast-track option focuses on enrolling your
                  practice with selected major PPOs at their standard,
                  non-negotiated rates. It&rsquo;s designed for providers who
                  want to begin the enrollment process promptly and are
                  comfortable accepting each plan&rsquo;s initial offered fees.
                  This option does not include PPO fee negotiations. If pursued,
                  any negotiation is limited in scope to help avoid unnecessary
                  delays. Fast-track enrollment also does not include a
                  comprehensive review of umbrella network options to identify
                  and prioritize potentially higher-reimbursing participation
                  routes. Payer processing times and participation decisions are
                  determined by each plan.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E4E9D8] p-6 lg:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e] mb-4">
                  Comprehensive Credentialing with PPO Fee Negotiation &amp;
                  Network Optimization
                </h3>
                <h4 className="text-lg font-bold leading-tight text-[#5e5e5e] mb-3">
                  Make Your Insurance Participation Work Harder for Your
                  Practice
                </h4>
                <p className="text-base leading-7 text-[#5e5e5e]">
                  The right insurance strategy starts before an application is
                  submitted. BEANbite helps dental practices prepare, compare
                  available options, negotiate PPO fees, complete enrollment,
                  and understand how their plans and network relationships fit
                  together. Our goal is to give you clearer information for
                  making participation decisions and a more organized path from
                  credentialing to billing setup.
                </p>
                <p className="mt-3 text-base leading-7 text-[#5e5e5e]">
                  Whether you&rsquo;re opening a practice, adding an associate,
                  expanding participation, or reviewing existing contracts, we
                  guide you through five connected phases. Phases may overlap,
                  and payer timelines and decisions are outside our control.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.ol
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-10 space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[#8CB428]/40"
          >
            {phases.map((phase) => (
              <li key={phase.title} className="relative pl-8">
                <span
                  className="absolute left-0 top-[9px] h-[15px] w-[15px] rounded-full border-2 border-[#8CB428] bg-white"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold leading-tight text-[#5e5e5e] mb-3">
                  {phase.title}
                </h3>
                {phase.body}
                <p className="mt-3 border-l-2 border-[#8CB428] pl-4 text-base leading-7 text-[#5e5e5e]">
                  <strong>Why it matters:</strong> {phase.why}
                </p>
              </li>
            ))}
          </motion.ol>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 rounded-2xl border border-[#E4E9D8] bg-[#F7F9F2] p-6 lg:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e] mb-3">
              Plan for the Full Process
            </h3>
            <p className="text-base leading-7 text-[#5e5e5e]">
              The complete comprehensive process may take an estimated{" "}
              <strong>seven to ten months</strong>. Timelines are projections,
              not guarantees. Payer processing, approvals, participation
              decisions, and effective dates are determined by each plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Middle Section: Personal Support Beyond the Applications - PURE FULL BLEED IMAGE ON RIGHT */}
      {/* ========================================================= */}
      <section className="bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[600px]">
            {/* LEFT SIDE: Text content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="py-16 lg:py-10 pr-0 lg:pr-20 z-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-4">
                Personal Support Beyond the Applications
              </h2>

              <h3 className="text-lg font-bold leading-tight text-[#5e5e5e] mb-2">
                One-on-One Guidance Throughout the Process
              </h3>
              <p className="text-base leading-7 text-[#5e5e5e]">
                Get personalized support during credentialing and training.
              </p>

              <h3 className="mt-6 text-lg font-bold leading-tight text-[#5e5e5e] mb-2">
                A Personal Call with Santosh
              </h3>
              <p className="text-base leading-7 text-[#5e5e5e]">
                Request a one-on-one call with Santosh Rohira when you have
                questions or want to discuss your concerns.
              </p>

              <h3 className="mt-6 text-lg font-bold leading-tight text-[#5e5e5e] mb-2">
                Three Months of Follow-Up Support
              </h3>
              <p className="text-base leading-7 text-[#5e5e5e]">
                After project completion, receive three months of additional
                help with questions, basic practice management setup, billing,
                and clearinghouse support.
              </p>

              <p className="mt-6 text-base italic leading-7 text-[#5e5e5e]">
                Payer approval, participation, fee schedules, reimbursement,
                and processing times are not guaranteed. Contract terms and
                payment are determined by each payer and plan.
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
            src="/services/ppo1.png"
            alt="One-on-One Guidance Throughout the Process"
            className="w-full h-full object-cover rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* 3. Program Enrollment: Denti-Cal, Medicaid, HMO + Ongoing Maintenance */}
      <section className="bg-white py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="overflow-hidden rounded-2xl border border-[#E4E9D8]">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 gap-y-4 border-t p-6 first:border-t-0 lg:grid-cols-[36px_300px_minmax(0,1fr)] lg:gap-x-8 lg:p-8 ${
                  i % 2 === 1 ? "bg-[#F7F9F2]" : "bg-white"
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8CB428]/15">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px] fill-none stroke-[#789A23]"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {program.icon}
                  </svg>
                </span>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e]">
                    {program.title}
                  </h2>
                  <span className="self-start rounded-full bg-[#8CB428] px-3 py-1 text-sm font-medium leading-5 text-white">
                    {program.estimate}
                  </span>
                </div>

                <div className="col-span-2 lg:col-span-1 lg:max-w-[860px]">
                  {program.body}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 rounded-2xl border border-[#E4E9D8] bg-[#F7F9F2] p-6 lg:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e] mb-5">
              BEANbite provides ongoing maintenance services:
            </h2>
            <ul className="flex flex-wrap gap-2.5">
              {maintenance.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#8CB428] bg-white px-4 py-1.5 text-base leading-6 text-[#5e5e5e]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3b. Old Documents Required Section — kept for reference, no longer rendered
      <section className="max-w-[1400px]  bg-white mx-auto px-6 lg:px-16 py-10">
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
                    className="text-[#8CB428] shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-gray-700 text-base font-medium">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* 5. Partner Section */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
          <PartnerSection />
        </div>
      </section>
    </div>
  );
};

export default Credentialing;
