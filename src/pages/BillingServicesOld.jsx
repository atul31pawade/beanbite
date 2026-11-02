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
    description:
      "Primary & Secondary Claims are sent electronically every day. Our goal is to get you paid as quickly as possible, and that means submitting your claims accurately with necessary x-rays, perio-charting other attachments and narratives to avoid any delays & denials. We review your claims and attach all necessary items (x-rays, narratives, perio charting) to ensure fewer denials (stall tactics) and get you paid faster. Pre-authorizations will be sent upon office request.",
  },
  {
    title: "EOBs Posted Daily",
    icon: ReceiptText,
    description:
      "All EOB’s will be posted on a daily basis and necessary credit and debit adjustments will be made as per office policies. We recommend EOB’s be scanned in a folder with the “date of deposit”, ensuring that our bank deposits reconcile with the date by which EOB’s are posted. Your assigned BEANbite insurance billing executive will send email communications with a detailed report of EOB’s posted, EOB’s denied with reasons and actions taken before resubmission. All EOB’s will be separated and uploaded in respective patient’s images or documents folder of your practice management software, thus making you a PAPERLESSS office!",
  },
  {
    title: "Accurate Patient and Subscriber Demographics",
    icon: UsersRound,
    description:
      "In an effort to ensure the claims are paid successful, our team will fix family files and patient accounts with accurate spelling of names, DOB and subscriber ID corrections by confirming with faxes received from insurance companies as necessary. Most dental practices will usually have two or three issues like this weekly. Additionally, insurance claims are processed promptly if they are submitted with the ID # provided by the insurance company rather than the SSN, our billing executive make an effort to make these changes, thus ensuring claims are paid swiftly.",
  },
  {
    title: "Procedures Not Attached to Insurance Claims",
    icon: BadgeCheck,
    description:
      "Most practice management software’s have a capacity to pull a report of “Procedures Not Attached to Insurance Claims”. Our billing executive tracks for such overlooked procedures and bills them out, thus ensuring you are collecting every penny of your production.",
  },
  {
    title: "Over 30 days Insurance Aging Report",
    icon: Clock3,
    description:
      "BEANbite billing executive, will call on all claims over 30 days and provide you a complete report on a monthly basis with details of the action taken for these claims. We make sure to file a claim dispute if claim is denied after 2 attempts for unacceptable or invalid reasons. You will receive a report on a monthly basis with current accounts receivable balances are over 30 days.",
  },
  {
    title: "Denied Claims Appealed",
    icon: RefreshCw,
    description:
      "We ensure that we keep your AR report clean. Every denied claim will be diligently reviewed for re-submission with additional documentation and file an appeal / dispute if the claim is appealable. If an appeal is further denied, we still make an attempt to request a peer-to-peer review of the claim or even have the office to get the patient involved to get the claim paid. If a claim is hopeless with no further resolution, claims are closed out promptly, so your office can bill the patient without delays",
  },
  {
    title: "Software Setup Assistance Included",
    icon: Laptop,
    description:
      "Offices that need help with setting up electronic claims transmission and digital radiograph systems, we will extend our full support to help with this transition at no additional cost to your dental practice. For those insurance that do not accept electronic claims and attachments our billing executive will notify your office manager via email. You will be provided a pdf of the claim form with narrative and necessary attachments for your office to print and mail.",
  },
  {
    title: "Daily Billing & Production Reports",
    icon: ChartNoAxesCombined,
    description:
      "Your office manager will receive a daily billing and production report, with a screenshot of confirmation of the electronic transmission. The report will also provide a fee back and tips to boost office production as necessary.",
  },
];

const BillingServices = () => {
  return (
    <div className="bg-white">
      <InnerPageHeader
        title="Billing Services"
        breadcrumb="Services / Billing"
      />

      <section className="bg-white px-6 py-16 md:py-10">
        <div className="mx-auto max-w-[1200px] lg:px-6">
          {/*<Reveal className="mb-12 max-w-3xl">
            <p className="text-base leading-8 text-gray-600">
              From same-day claims to denial-fighting follow-ups, BEANbite keeps
              every account moving — so your team stays in the chair and out of
              the claim portal.
            </p>
          </Reveal>*/}

          <Reveal delay={0.15} y={40}>
            <div className="border-b border-[#E4E9D8]">
              {billingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group grid grid-cols-[46px_1fr] gap-4 border-t border-[#E4E9D8] py-6 first:border-t-0 first:pt-0 md:grid-cols-[56px_1fr] md:gap-[22px] md:py-7"
                  >
                    <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border border-[#E4E9D8] bg-[#F7F9F2] text-[#809900] transition-colors duration-300 group-hover:border-[#8CB429] group-hover:bg-[#8CB429]/10">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.16em] text-[#8CB429]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-[3px] flex-1 rounded-full bg-[#8CB429]/20">
                          <span className="block h-full w-0 rounded-full bg-[#8CB429] transition-all duration-700 group-hover:w-full"></span>
                        </span>
                      </div>
                      <h3 className="mt-[5px] text-[17px] font-bold leading-snug text-[#5e5e5e]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <PartnerSection />
      </div>
    </div>
  );
};

export default BillingServices;
