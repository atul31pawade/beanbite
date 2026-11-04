import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const number = (index) => String(index + 1).padStart(2, "0");

const BillingServices = () => {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ActiveIcon = billingServices[active].icon;

  return (
    <div className="bg-white">
      <InnerPageHeader title="Billing Services" breadcrumb="Services / Billing" />

      <section className="bg-white px-6 py-16 md:py-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:px-6">
          <div className="hidden lg:block">
            <div className="sticky top-[104px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-[#E4E9D8]">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={billingServices[active].image}
                    src={billingServices[active].image}
                    alt={billingServices[active].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-[#E4E9D8] bg-white px-4 py-2.5 shadow-[0_10px_24px_rgba(31,34,22,0.1)]">
                  <span className="grid h-[42px] w-[42px] flex-none place-items-center rounded-xl bg-[#8CB429] text-white">
                    <ActiveIcon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold tracking-[0.16em] text-[#8CB429]">
                      {number(active)}
                    </span>
                    <span className="block max-w-[210px] text-sm font-bold leading-5 text-[#5e5e5e]">
                      {billingServices[active].title}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-0.5">
                {billingServices.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() =>
                      itemRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    className={`flex items-center gap-2.5 border-l-[3px] px-2.5 py-2 text-left transition-colors ${
                      index === active
                        ? "border-[#8CB429] bg-[#F7F9F2]"
                        : "border-transparent hover:bg-[#F7F9F2]"
                    }`}
                  >
                    <span
                      className={`flex-none text-[11px] font-bold tracking-[0.12em] ${
                        index === active ? "text-[#8CB429]" : "text-[#AEB4A0]"
                      }`}
                    >
                      {number(index)}
                    </span>
                    <span className="truncate text-[13px] text-[#5e5e5e]">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            {billingServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === active;
              return (
                <div
                  key={service.title}
                  data-index={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="mb-8 border-b border-[#E4E9D8] pb-10 last:mb-0 last:border-0 lg:mb-0 lg:border-0 lg:pb-0"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="mb-4 aspect-[16/9] w-full rounded-[20px] border border-[#E4E9D8] object-cover lg:hidden"
                  />
                  <Reveal y={24} className="mb-14 lg:mb-24">
                    <div className="mb-2.5 flex items-center gap-3">
                      <span className="grid h-[42px] w-[42px] flex-none place-items-center rounded-xl bg-[#8CB429] text-white lg:hidden">
                        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.16em] text-[#8CB429]">
                        {number(index)}
                      </span>
                      <span className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#8CB429]/20">
                        <span
                          className={`absolute inset-y-0 left-0 rounded-full bg-[#8CB429] transition-all duration-500 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </div>
                    <h3 className="text-[20px] font-bold leading-7 text-[#5e5e5e]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </Reveal>
                </div>
              );
            })}
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
