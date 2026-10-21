import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  ChartNoAxesCombined,
  Clock3,
  FileCheck2,
  Laptop,
  ReceiptText,
  RefreshCw,
  UsersRound,
  ArrowRight,
  X,
} from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import Reveal from "../components/Reveal";
import PartnerSection from "../components/PartnerSection";

const billingServices = [
  {
    title: "Claims Submitted Daily",
    icon: FileCheck2,
    image: "/services/claims-submitted-daily.png",
    description:
      "Primary & Secondary Claims are sent electronically every day. Our goal is to get you paid as quickly as possible, and that means submitting your claims accurately with necessary x-rays, perio-charting other attachments and narratives to avoid any delays & denials. We review your claims and attach all necessary items (x-rays, narratives, perio charting) to ensure fewer denials (stall tactics) and get you paid faster. Pre-authorizations will be sent upon office request.",
  },
  {
    title: "EOBs Posted Daily",
    icon: ReceiptText,
    description:
      "All EOB’s will be posted on a daily basis and necessary credit and debit adjustments will be made as per office policies. We recommend EOB’s be scanned in a folder with the “date of deposit”, ensuring that our bank deposits reconcile with the date by which EOB’s are posted. Your assigned BEANbite insurance billing executive will send email communications with a detailed report of EOB’s posted, EOB’s denied with reasons and actions taken before resubmission. All EOB’s will be separated and uploaded in respective patient’s images or documents folder of your practice management software, thus making you a PAPERLESSS office!",
    image: "/services/billing1.png",
  },
  {
    title: "Accurate Patient and Subscriber Demographics",
    icon: UsersRound,
    description:
      "In an effort to ensure the claims are paid successful, our team will fix family files and patient accounts with accurate spelling of names, DOB and subscriber ID corrections by confirming with faxes received from insurance companies as necessary. Most dental practices will usually have two or three issues like this weekly. Additionally, insurance claims are processed promptly if they are submitted with the ID # provided by the insurance company rather than the SSN, our billing executive make an effort to make these changes, thus ensuring claims are paid swiftly.",
    image: "/services/billing2.png",
  },
  {
    title: "Procedures Not Attached to Insurance Claims",
    icon: BadgeCheck,
    image: "/services/claims-submitted-daily.png",
    description:
      "Most practice management software’s have a capacity to pull a report of “Procedures Not Attached to Insurance Claims”. Our billing executive tracks for such overlooked procedures and bills them out, thus ensuring you are collecting every penny of your production.",
  },
  {
    title: "Over 30 days Insurance Aging Report",
    icon: Clock3,
    image: "/services/billing3.png",
    description:
      "BEANbite billing executive, will call on all claims over 30 days and provide you a complete report on a monthly basis with details of the action taken for these claims. We make sure to file a claim dispute if claim is denied after 2 attempts for unacceptable or invalid reasons. You will receive a report on a monthly basis with current accounts receivable balances are over 30 days.",
  },
  {
    title: "Denied Claims Appealed",
    icon: RefreshCw,
    image: "/services/billing1.png",
    description:
      "We ensure that we keep your AR report clean. Every denied claim will be diligently reviewed for re-submission with additional documentation and file an appeal / dispute if the claim is appealable. If an appeal is further denied, we still make an attempt to request a peer-to-peer review of the claim or even have the office to get the patient involved to get the claim paid. If a claim is hopeless with no further resolution, claims are closed out promptly, so your office can bill the patient without delays",
  },
  {
    title: "Software Setup Assistance Included",
    icon: Laptop,
    image: "/services/billing2.png",
    description:
      "Offices that need help with setting up electronic claims transmission and digital radiograph systems, we will extend our full support to help with this transition at no additional cost to your dental practice. For those insurance that do not accept electronic claims and attachments our billing executive will notify your office manager via email. You will be provided a pdf of the claim form with narrative and necessary attachments for your office to print and mail.",
  },
  {
    title: "Daily Billing & Production Reports",
    icon: ChartNoAxesCombined,
    image: "/services/billing3.png",
    description:
      "Your office manager will receive a daily billing and production report, with a screenshot of confirmation of the electronic transmission. The report will also provide a fee back and tips to boost office production as necessary.",
  },
];

const BillingServices = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Billing Services"
        breadcrumb="Services / Billing"
      />

      <section className="relative overflow-hidden bg-[#F7F9F2] px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-[#C5D92D]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#002060]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] lg:px-6">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#5e5e5e] md:text-5xl">
              Dental Billing.{" "}
              <span className="text-[#809900]">Off Your Plate.</span>
            </h2>
            <p className="mb-4 text-xl font-bold text-[#5e5e5e] md:text-2xl">
              A dedicated billing crew that works like it sits in your office.
            </p>
            <p className="text-base leading-8 text-gray-600 md:text-lg">
              From same-day claims to denial-fighting follow-ups, BEANbite keeps
              every account moving — so your team stays in the chair and out of
              the claim portal.
            </p>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
              {billingServices.map((service, index) => (
                <BillingServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  onViewMore={() => setActiveService({ ...service, index })}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <PartnerSection />
      </div>

      <AnimatePresence>
        {activeService && (
          <motion.div
            key="billing-service-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/50"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0a0f00] rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveService(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#C5D92D]/15 text-[#C5D92D] flex items-center justify-center hover:bg-[#C5D92D]/30 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C5D92D] text-[#1a2e05]">
                    {(() => {
                      const Icon = activeService.icon;
                      return (
                        <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                      );
                    })()}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C5D92D]">
                    BEANbite billing ·{" "}
                    {String(activeService.index + 1).padStart(2, "0")} / 08
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {activeService.title}
                </h3>
                <p className="text-base leading-7 text-gray-300">
                  {activeService.description}
                </p>
                <a
                  href="/contact"
                  onClick={() => setActiveService(null)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C5D92D] px-5 py-2.5 text-sm font-bold text-[#1a2e05] hover:bg-[#b0c41a] transition-colors"
                >
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BillingServiceCard = ({ service, index, onViewMore }) => {
  const Icon = service.icon;

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Top Image Section */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-[#E7EBDD]">
        <img
          src={service.image || "/services/claims-submitted-daily.png"}
          alt={service.title}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content Section Beneath */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002060] text-[#C5D92D] shadow-md">
              <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <span className="text-xs font-bold tracking-[0.16em] text-gray-400">
              {String(index + 1).padStart(2, "0")} / 08
            </span>
          </div>

          {/*<span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#809900]">
            BEANbite billing
          </span>*/}
          <h3 className="text-lg font-bold leading-snug text-gray-900 mb-3">
            {service.title}
          </h3>

          <div className="text-base leading-7 text-gray-600 line-clamp-3">
            {service.description}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onViewMore}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#002060] hover:text-[#809900] transition-colors focus:outline-none cursor-pointer"
          >
            <span>View More</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>

          <span className="h-px w-8 bg-[#C5D92D]" />
        </div>
      </div>
    </div>
  );
};

export default BillingServices;
