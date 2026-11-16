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

      <section className="bg-[#F7F9F2] px-4 pb-10 lg:px-6 lg:pb-14">
        <div className="mx-auto max-w-[1200px]">
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
                      <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-[#8CB429] text-white transition-colors group-hover:bg-[#789A23] lg:h-8 lg:w-8 lg:rounded-[9px]">
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
                    className={`pointer-events-none absolute -top-[18px] left-0 select-none text-[76px] font-extrabold leading-none tracking-[-0.04em] text-[rgba(140,180,41,0.13)] lg:-top-6 lg:text-[112px] ${
                      flipped ? "lg:left-auto lg:right-0" : ""
                    }`}
                  >
                    {number(index)}
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        style={mono}
                        className="text-[11px] font-bold tracking-[0.16em] text-[#8CB429]"
                      >
                        SERVICE
                      </span>
                      <span className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#8CB429]/20">
                        <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-[#8CB429] transition-all duration-700 group-hover:w-full" />
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

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <PartnerSection />
      </div>
    </div>
  );
};

export default BillingServices;
