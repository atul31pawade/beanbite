import React from "react";
import {
  BadgeCheck,
  ChartNoAxesCombined,
  Clock3,
  FileCheck2,
  Laptop,
  ReceiptText,
  RefreshCw,
  UsersRound,
} from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import Reveal from "../components/Reveal";
import CtaButton from "../components/CtaButton";
import PartnerSection from "../components/PartnerSection";

const billingServices = [
  {
    title: "Claims Submitted Daily",
    icon: FileCheck2,
    image: "/services/billing-cards/claims-submitted.jpg",
    description:
      "Primary & Secondary Claims are sent electronically every day. Our goal is to get you paid as quickly as possible, and that means submitting your claims accurately with necessary x-rays, perio-charting other attachments and narratives to avoid any delays & denials. We review your claims and attach all necessary items (x-rays, narratives, perio charting) to ensure fewer denials (stall tactics) and get you paid faster. Pre-authorizations will be sent upon office request.",
  },
  {
    title: "EOBs Posted Daily",
    icon: ReceiptText,
    image: "/services/billing-cards/eobs-posted.jpg",
    description:
      "All EOB’s will be posted on a daily basis and necessary credit and debit adjustments will be made as per office policies. We recommend EOB’s be scanned in a folder with the “date of deposit”, ensuring that our bank deposits reconcile with the date by which EOB’s are posted. Your assigned BEANbite insurance billing executive will send email communications with a detailed report of EOB’s posted, EOB’s denied with reasons and actions taken before resubmission. All EOB’s will be separated and uploaded in respective patient’s images or documents folder of your practice management software, thus making you a PAPERLESSS office!",
  },
  {
    title: "Accurate Patient and Subscriber Demographics",
    icon: UsersRound,
    image: "/services/billing-cards/demographics.jpg",
    description:
      "In an effort to ensure the claims are paid successful, our team will fix family files and patient accounts with accurate spelling of names, DOB and subscriber ID corrections by confirming with faxes received from insurance companies as necessary. Most dental practices will usually have two or three issues like this weekly. Additionally, insurance claims are processed promptly if they are submitted with the ID # provided by the insurance company rather than the SSN, our billing executive make an effort to make these changes, thus ensuring claims are paid swiftly.",
  },
  {
    title: "Procedures Not Attached to Insurance Claims",
    icon: BadgeCheck,
    image: "/services/billing-cards/unattached.jpg",
    description:
      "Most practice management software’s have a capacity to pull a report of “Procedures Not Attached to Insurance Claims”. Our billing executive tracks for such overlooked procedures and bills them out, thus ensuring you are collecting every penny of your production.",
  },
  {
    title: "Over 30 days Insurance Aging Report",
    icon: Clock3,
    image: "/services/billing-cards/aging.jpg",
    description:
      "BEANbite billing executive, will call on all claims over 30 days and provide you a complete report on a monthly basis with details of the action taken for these claims. We make sure to file a claim dispute if claim is denied after 2 attempts for unacceptable or invalid reasons. You will receive a report on a monthly basis with current accounts receivable balances are over 30 days.",
  },
  {
    title: "Denied Claims Appealed",
    icon: RefreshCw,
    image: "/services/billing-cards/appeals.jpg",
    description:
      "We ensure that we keep your AR report clean. Every denied claim will be diligently reviewed for re-submission with additional documentation and file an appeal / dispute if the claim is appealable. If an appeal is further denied, we still make an attempt to request a peer-to-peer review of the claim or even have the office to get the patient involved to get the claim paid. If a claim is hopeless with no further resolution, claims are closed out promptly, so your office can bill the patient without delays",
  },
  {
    title: "Software Setup Assistance Included",
    icon: Laptop,
    image: "/services/billing-cards/software.jpg",
    description:
      "Offices that need help with setting up electronic claims transmission and digital radiograph systems, we will extend our full support to help with this transition at no additional cost to your dental practice. For those insurance that do not accept electronic claims and attachments our billing executive will notify your office manager via email. You will be provided a pdf of the claim form with narrative and necessary attachments for your office to print and mail.",
  },
  {
    title: "Daily Billing & Production Reports",
    icon: ChartNoAxesCombined,
    image: "/services/billing-cards/reports.jpg",
    description:
      "Your office manager will receive a daily billing and production report, with a screenshot of confirmation of the electronic transmission. The report will also provide a fee back and tips to boost office production as necessary.",
  },
];

const differentiators = [
  {
    title: "We look beyond “claim submitted”",
    body: "A claim entering the system is only one step. Our team helps monitor what happens next, including payer responses, rejections, requests for information, and outstanding balances.",
  },
  {
    title: "We pay attention to the details",
    body: "Payer rules, network participation, attachments, and clearinghouse requirements can all affect claim processing. We work to identify issues that may need attention and communicate the information your team needs to help resolve them.",
  },
  {
    title: "We keep your team informed",
    body: "Billing works best when the office and billing team stay connected. We communicate questions, document follow-up, and help your team understand what is holding up a claim.",
  },
  {
    title: "We support practices across the country",
    body: "BEANbite works with dental practices using systems such as Open Dental, Dentrix, Dentrix Ascend, Eaglesoft, and CareStack. Our team can discuss your current setup and the support your office needs.",
  },
];

const pathSteps = [
  {
    lead: "Understand your workflow.",
    body: "We learn about your practice, software, payer mix, and billing needs.",
  },
  {
    lead: "Set up the working process.",
    body: "We clarify communication, documentation, and claim-handling expectations.",
  },
  {
    lead: "Manage billing tasks.",
    body: "Our team supports claim submission, posting, follow-up, and denial work within the agreed scope.",
  },
  {
    lead: "Keep outstanding items visible.",
    body: "We track billing issues that need payer or office attention and share follow-up needs with your team.",
  },
];

const billingFaqs = [
  {
    question: "What do dental billing services include?",
    answer:
      "Dental billing services may include claim submission, payment posting, accounts receivable follow-up, denial review, appeals support, and billing workflow coordination. The exact scope depends on your practice’s needs and service agreement.",
  },
  {
    question: "Can BEANbite help with old or unpaid dental claims?",
    answer:
      "BEANbite can review aging claims and support follow-up based on available records, payer requirements, and the agreed scope of work. Recovery depends on factors such as filing deadlines, plan rules, documentation, and payer decisions.",
  },
  {
    question: "Do you work with my practice management software?",
    answer:
      "BEANbite works with practices using Open Dental, Dentrix, Dentrix Ascend, Eaglesoft, CareStack, and other systems. Contact us to discuss your office’s setup.",
  },
  {
    question: "Does BEANbite guarantee that every claim will be paid?",
    answer:
      "No. Payers make payment decisions under plan terms and based on claim information, documentation, network status, and other factors. BEANbite focuses on accurate billing support, consistent follow-up, and helping your team address issues that arise.",
  },
  {
    question: "How do we get started?",
    answer:
      "Schedule a consultation with BEANbite. We’ll learn about your practice and billing challenges, then discuss the support and next steps that fit your needs.",
  },
];

const number = (index) => String(index + 1).padStart(2, "0");

// index.css sets `*{font-family:"DM Sans"}` outside Tailwind's cascade layers, so `font-mono` loses; inline styles win.
const mono = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
};
const lineCount = String(billingServices.length).padStart(2, "0");

const BillingServices = () => {
  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Billing Services"
        breadcrumb="Services / Billing"
      />

      {/* 1. Intro: Stop Letting Preventable Billing Gaps Cost Your Practice */}
      <section className="bg-[#F7F9F2] py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-12">
            <Reveal y={24}>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-4">
                Stop Letting Preventable Billing Gaps Cost Your Practice
              </h2>
              <p className="text-base leading-7 font-bold text-[#5e5e5e] mb-4">
                Dental billing services built to help your practice collect
                accurately, follow up consistently, and keep revenue moving.
              </p>
              <p className="text-base leading-7 text-[#5e5e5e] mb-4">
                You work hard to care for your patients. Your insurance claims
                deserve that same attention.
              </p>
              <p className="text-base leading-7 text-[#5e5e5e]">
                BEANbite supports dental practices with hands-on dental billing,
                claim follow-up, denial management, appeals, and payment
                posting. We help your team stay on top of the details that can
                slow reimbursement, create avoidable rework, and leave claims
                waiting too long for answers.
              </p>
            </Reveal>

            <Reveal y={24} delay={0.1}>
              <div className="rounded-[20px] border border-[#E4E9D8] bg-white p-6 lg:p-8">
                <p className="text-lg font-bold leading-tight text-[#5e5e5e] mb-5">
                  Optimizing Billing. Maximizing Revenue. Increasing
                  Profitability.
                </p>
                <CtaButton to="/contact" fullWidth>
                  Schedule Your Complimentary Consultation
                </CtaButton>
                <p className="mt-4 text-base leading-7 italic text-[#5e5e5e]">
                  Talk with our team about your billing challenges and next
                  steps.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Don't Let Good Work Get Lost in the Billing Process */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <Reveal y={24}>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e]">
                Don&rsquo;t Let Good Work Get Lost in the Billing Process
              </h2>
              <div>
                <p className="text-base leading-7 text-[#5e5e5e]">
                  A claim can be delayed by missing information, a
                  payer-specific requirement, a clearinghouse rejection, or a
                  follow-up that falls through the cracks. One unresolved claim
                  may seem small. A growing backlog can put pressure on cash
                  flow and staff time.
                </p>
                <p className="mt-4 text-base leading-7 text-[#5e5e5e]">
                  BEANbite helps your practice keep billing work organized and
                  moving. We prepare and submit claims, track outstanding items,
                  follow up with payers, review denials, and support appeals
                  based on the available documentation and payer requirements.
                </p>
                <p className="mt-6 text-base leading-7 font-bold text-[#5e5e5e]">
                  You can&rsquo;t control every payer decision. You can make
                  sure claims get attention, answers get tracked, and next steps
                  don&rsquo;t get overlooked.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Service list already on the website */}
      <section className="bg-[#F7F9F2] px-4 pb-10 pt-10 lg:px-12 lg:pb-14 lg:pt-12">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-3">
            Dental Billing Support That Fits Your Practice
          </h2>
          <p className="text-base leading-7 text-[#5e5e5e] max-w-[720px]">
            Whether you need full-service billing or help with specific parts of
            your workflow, BEANbite Billing Service includes:
          </p>

          {billingServices.map((service, index) => {
            const Icon = service.icon;
            const flipped = index % 2 === 1;
            const first = index === 0;
            return (
              <article
                key={service.title}
                className={`group grid items-center gap-5 lg:gap-11 ${
                  flipped
                    ? "lg:grid-cols-[minmax(0,60fr)_minmax(0,40fr)]"
                    : "lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)]"
                } ${
                  first
                    ? "pt-[30px] pb-[34px] lg:pb-[50px]"
                    : "border-t border-[#E4E9D8] py-[34px] lg:py-[30px]"
                }`}
              >
                <Reveal
                  y={24}
                  className={`relative ${flipped ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] border border-[#E4E9D8] lg:aspect-[4/3] lg:rounded-[26px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <span
                      className="pointer-events-none absolute inset-2 rounded-[14px] border border-white/50 lg:inset-[10px] lg:rounded-[18px]"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[12px] border border-[#E4E9D8] bg-white/95 py-1.5 pl-1.5 pr-3 lg:bottom-4 lg:left-4 lg:rounded-[14px] lg:py-[7px] lg:pl-2 lg:pr-[13px]">
                      <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-[#8CB428] text-white transition-colors group-hover:bg-[#789A23] lg:h-8 lg:w-8 lg:rounded-[9px]">
                        <Icon
                          strokeWidth={1.8}
                          aria-hidden="true"
                          className="h-4 w-4 lg:h-[18px] lg:w-[18px]"
                        />
                      </span>
                      <span
                        style={mono}
                        className="text-[11px] font-bold tracking-[0.14em] text-[#5e5e5e]"
                      >
                        {number(index)} / {lineCount}
                      </span>
                    </span>
                  </div>
                </Reveal>

                <Reveal y={24} className="relative">
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-[18px] left-0 select-none text-[76px] font-extrabold leading-none tracking-[-0.04em] text-[rgba(140,180,40,0.13)] lg:-top-6 lg:text-[112px] ${
                      flipped ? "lg:left-auto lg:right-0" : ""
                    }`}
                  >
                    {number(index)}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        style={mono}
                        className="text-[11px] font-bold tracking-[0.16em] text-[#8CB428]"
                      >
                        SERVICE
                      </span>
                      <span className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#8CB428]/20">
                        <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-[#8CB428] transition-all duration-700 group-hover:w-full" />
                      </span>
                    </div>
                    <h3 className="mt-3 text-[21px] font-bold leading-7 text-[#5e5e5e] lg:text-[26px] lg:leading-[34px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. What Makes BEANbite Different? */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e]">
            What Makes BEANbite Different?
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} y={24} delay={index * 0.05}>
                <div className="h-full rounded-[20px] border border-[#E4E9D8] p-6 lg:p-8">
                  <h3 className="text-lg font-bold leading-tight text-[#5e5e5e] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-[#5e5e5e]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A More Organized Path From Claim to Payment */}
      <section className="bg-[#F7F9F2] py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e]">
            A More Organized Path From Claim to Payment
          </h2>
          <ol className="mt-6 grid gap-6 md:grid-cols-2">
            {pathSteps.map((step, index) => (
              <Reveal key={step.lead} y={24} delay={index * 0.05}>
                <li className="flex h-full gap-4 rounded-[20px] border border-[#E4E9D8] bg-white p-6 lg:p-7">
                  <span
                    style={mono}
                    className="text-[11px] font-bold leading-none tracking-[0.16em] text-[#8CB428] pt-1"
                  >
                    {number(index)}
                  </span>
                  <p className="text-base leading-7 text-[#5e5e5e]">
                    <span className="font-bold">{step.lead}</span> {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Insurance Billing Shouldn't Be a Guessing Game */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <Reveal y={24}>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e]">
                Insurance Billing Shouldn&rsquo;t Be a Guessing Game
              </h2>
              <div>
                <p className="text-base leading-7 text-[#5e5e5e]">
                  When a payment doesn&rsquo;t match expectations, your team
                  needs a clear next step. BEANbite helps review payer responses
                  and billing details so the practice can understand what
                  happened and determine what action may be appropriate.
                </p>
                <p className="mt-4 text-base leading-7 text-[#5e5e5e]">
                  Payments are based on plan terms, network participation, claim
                  details, documentation, and payer processing. We do not
                  promise a specific reimbursement amount or outcome. We focus
                  on careful billing work, timely follow-up, and clear
                  communication.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Ready to Spend Less Time Chasing Claims? */}
      <section className="bg-white pb-10 lg:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <Reveal y={24}>
            <div className="rounded-[26px] border border-[#E4E9D8] bg-[#F7F9F2] p-6 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-4">
                Ready to Spend Less Time Chasing Claims?
              </h2>
              <p className="text-base leading-7 text-[#5e5e5e] mb-5 max-w-[760px]">
                Let&rsquo;s talk about your current billing workflow, where
                claims are getting stuck, and what kind of support could help
                your practice.
              </p>
              <p className="text-base leading-7 font-bold text-[#5e5e5e]">
                Call BEANbite or schedule a consultation today.
              </p>
              <p className="mt-1 text-base leading-7 text-[#5e5e5e]">
                Take the next step toward a more organized dental billing
                process.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <CtaButton to="/contact" fullWidth className="sm:w-auto">
                  Schedule Your Complimentary Consultation
                </CtaButton>
                <CtaButton
                  href="tel:+18887005589"
                  variant="light"
                  fullWidth
                  className="sm:w-auto"
                >
                  Call BEANbite
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#5e5e5e] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-[#E4E9D8]">
            {billingFaqs.map((faq) => (
              <div
                key={faq.question}
                className="grid gap-3 border-b border-[#E4E9D8] py-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14"
              >
                <h3 className="text-lg font-bold leading-tight text-[#5e5e5e]">
                  {faq.question}
                </h3>
                <p className="text-base leading-7 text-[#5e5e5e]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Sign-off */}
      <section className="bg-white pb-10 lg:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
          <div className="pt-0">
            <p className="text-xl md:text-2xl font-bold leading-tight text-[#5e5e5e]">
              BEANbite
            </p>
            <p className="mt-2 text-base leading-7 italic text-[#5e5e5e]">
              Optimizing Billing. Maximizing Revenue. Increasing Profitability.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <PartnerSection />
      </div>
    </div>
  );
};

export default BillingServices;
