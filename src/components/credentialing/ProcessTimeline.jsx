import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  LineChart,
  ShieldCheck,
  Settings,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const phases = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Practice Assessment & Negotiated PPO Fees",
    icon: ClipboardCheck,
    color: "bg-[#AFCB12]",

    intro:
      "We begin by preparing your practice for successful insurance participation.",

    bullets: [
      "Reviewing and establishing your office's Usual, Customary and Reasonable (UCR) fee schedule.",
      "Creating an NPI Type 2 (Organizational NPI), if required.",
      "Reviewing your existing insurance participation.",
      "Evaluating your current practice structure.",
    ],

    boxTitle: "PPO Fee Analysis",

    paragraphs: [
      "Before negotiating with insurance companies, we identify your practice's most financially significant procedure codes.",
      "For startup practices, we work with the provider to identify approximately 30 to 35 key procedure codes expected to generate the highest production.",
      "For practice acquisitions and established practices, we analyze the previous two years of production reports to identify the procedures that generate the greatest revenue.",
      "Our code selection is intentional, not random. These key procedure codes serve as benchmarks for evaluating the entire PPO fee schedule. This strategic analysis allows us to recommend the insurance participation strategy that offers the strongest long-term reimbursement and profitability before credentialing begins.",
    ],

    footer:
      "A strong foundation allows every subsequent step to be more effective.",
  },

  {
    id: 2,
    phase: "Phase 2",
    title: "PPO Fee Negotiation & Network Optimization",
    icon: LineChart,
    color: "bg-blue-500",

    intro:
      "Once the fee analysis is complete, we negotiate improved reimbursement rates with insurance companies that offer direct negotiations.",

    bullets: [
      "Newly negotiated PPO fees",
      "Existing PPO fee schedules",
      "Umbrella network participation options",
      "Practice UCR fees",
    ],

    boxTitle: "After negotiations are complete, we compare",

    paragraphs: [
      "Our goal is not simply to join more networks.",
      "Our goal is to identify the combination of insurance participation that produces the strongest long-term financial outcome for your practice.",
      "Sometimes remaining out of network with a particular insurance company may actually produce a stronger reimbursement strategy than accepting a lower-paying contract.",
    ],

    footer:
      "Every recommendation is based on long-term profitability rather than simply joining more insurance plans.",
  },

  {
    id: 3,
    phase: "Phase 3",
    title: "Strategic Credentialing",
    icon: ShieldCheck,
    color: "bg-emerald-500",

    intro:
      "Only after the insurance participation strategy has been finalized do we begin credentialing.",

    bullets: [
      "PPO Networks",
      "Shared / Umbrella Networks",
      "Denti-Cal",
      "Medicaid",
      "Medicare (where applicable)",
      "HMO plans upon request",
    ],

    boxTitle: "Practice Acquisition Support",

    paragraphs: [
      "If you are purchasing an existing dental practice, credentialing involves much more than adding a provider.",
      "Transitioning existing PPO contracts.",
      "Structuring participation for the new ownership.",
      "Tax ID changes.",
      "Practice ownership updates.",
      "Insurance carrier notifications.",
      "Effective date coordination.",
    ],

    footer:
      "Our goal is to minimize interruptions in insurance reimbursement during ownership transitions.",
  },

  {
    id: 4,
    phase: "Phase 4",
    title: "Implementation",
    icon: Settings,
    color: "bg-orange-500",

    intro:
      "Once negotiations are complete, we can assist your office by entering approved insurance fee schedules into your practice management software.",

    bullets: [
      "Applications submitted",
      "Pending carrier responses",
      "Additional documentation requests",
      "Credentialing approvals",
      "Effective participation dates",
      "Outstanding action items",
    ],

    boxTitle: "Monthly Progress Reporting",

    paragraphs: [
      "Credentialing can involve multiple insurance carriers, each with different processing timelines.",
      "Throughout the project, we provide regular status updates that include every stage of the credentialing process.",
      "Our clients always know exactly where every application stands.",
    ],

    footer:
      "Optional fee schedule entry into your Practice Management Software is also available.",
  },
];

export default function StrategicProcess() {
  const [activeTab, setActiveTab] = useState(0);

  const active = phases[activeTab];
  const Icon = active.icon;

  return (
    <section className="py-12 bg-white">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="text-center max-w-3xl mx-auto mb-14">

          {/*<span className="inline-flex px-5 py-2 rounded-full bg-[#AFCB12]/10 text-[#7A9200] font-semibold">
            Our Strategic Process
          </span> */}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Four Phases. One Strategic Goal.
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Every credentialing project follows a structured process designed
            to optimize reimbursement, strengthen network participation and
            maximize long-term profitability.
          </p>

        </div>
                {/* ================= Tabs ================= */}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

{phases.map((item, index) => {

  const TabIcon = item.icon;

  return (

    <button
      key={item.id}
      onClick={() => setActiveTab(index)}
      className={`relative cursor-pointer w-full flex flex-col lg:flex-row items-center lg:items-start gap-3 rounded-2xl p-3 transition-all duration-300 border text-center lg:text-left ${
        activeTab === index
          ? `${item.color} text-white border-transparent shadow-xl`
          : "bg-white border-gray-200 text-gray-700 hover:border-[#AFCB12]"
      }`}
    >

      <TabIcon size={22} />

      <div className="text-left">

        <p className="text-xs uppercase opacity-80">
          {item.phase}
        </p>

        <p className="font-semibold">
          {item.title}
        </p>

      </div>
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className="absolute top-3 right-3"
      />
    </button>

  );

})}

</div>

{/* ================= Content ================= */}

<AnimatePresence mode="wait">

<motion.div
  key={active.id}
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    y: -20,
  }}
  transition={{
    duration: 0.35,
  }}
  className="bg-white rounded-[30px] shadow-xl border border-gray-200 overflow-hidden"
>

  {/* Header */}

  <div className={`${active.color} p-4`}>

    <div className="flex items-center gap-5">

      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">

        <Icon className="text-white" size={34} />

      </div>

      <div>

        <span className="text-white/80 uppercase tracking-widest text-xs">
          {active.phase}
        </span>

        <h3 className="text-xl font-bold text-white">
          {active.title}
        </h3>

      </div>

    </div>

  </div>

  {/* Body */}

  <div className="p-6">

    <p className="text-sm leading-8 text-gray-600 mb-4">
      {active.intro}
    </p>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left */}

      <div>

        <h4 className="text-xl font-bold text-gray-900 mb-6">
          Key Activities
        </h4>

        <div className="space-y-2">

          {active.bullets.map((bullet, i) => (

            <div
              key={i}
              className="flex items-start gap-4"
            >

              <CheckCircle2
                size={20}
                className="text-[#AFCB12] mt-1 shrink-0"
              />

              <p className="text-sm text-gray-700 leading-7">
                {bullet}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Right */}

      <div>

        <div className="bg-[#F8FAFC] border border-[#AFCB12]/20 rounded-3xl p-4">

          <h4 className="text-xl font-bold text-gray-900 mb-4">
            {active.boxTitle}
          </h4>

          <div className="space-y-2">
          {active.paragraphs.map((paragraph, index) => (

<p
  key={index}
  className="text-sm text-gray-600 leading-8"
>
  {paragraph}
</p>

))}

</div>

</div>

</div>

</div>

{/* Footer */}

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2 }}
className="mt-4 rounded-3xl bg-gradient-to-r from-[#AFCB12]/10 to-white border border-[#AFCB12]/20 p-4"
>

<div className="flex items-start gap-5">

<div className="w-14 h-14 rounded-2xl bg-[#AFCB12] flex items-center justify-center shrink-0">

<CheckCircle2
className="text-white"
size={28}
/>

</div>

<div>

<h4 className="text-lg font-bold text-gray-900">
Key Takeaway
</h4>

<p className="text-gray-600 leading-8 text-sm">
{active.footer}
</p>

</div>

</div>

</motion.div>

</div>

</motion.div>

</AnimatePresence>

</div>

</section>

);
}