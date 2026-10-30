import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  BarChart3,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import CtaButton from "../components/CtaButton";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

const MotionDiv = motion.div;

const results = [
  ["Humana", "Indirect", "43%", "80%", "+37%"],
  ["Mutual of Omaha", "Indirect", "43%", "80%", "+37%"],
  ["Cigna DPPO", "Direct", "47%", "80%", "+33%"],
  ["Assurance DHA / Sunlife", "Direct", "43%", "60%", "+17%"],
  ["Principal", "Direct", "48%", "62%", "+14%"],
  ["Ameritas", "Indirect", "48%", "62%", "+14%"],
  ["GEHA Connection Dental", "Direct", "47%", "53%", "+6%"],
  ["Blue Shield of CA", "Indirect", "59%", "61%", "+6%"],
  ["United Healthcare", "Direct", "54%", "61%", "+7%"],
  ["Aetna", "Direct", "45%", "45%", "Maintained"],
  ["Careington PPOs", "Direct", "80-85%", "80-85%", "Strong contract"],
];
const analysisItems = [
  [
    "Production by Insurance",
    "How much production is actually associated with each plan? A nationally recognized carrier may matter far less than you assumed if it represents minimal production.",
  ],
  [
    "Patient Count by Plan",
    "How many active patients are covered by each PPO? A plan representing hundreds of patients requires a different strategy than one representing a handful.",
  ],
  [
    "Procedure-Level Utilization",
    "Which CDT codes are driving your practice? Your top procedures may be very different from your dental colleagues in other specialties—and that affects negotiation strategy.",
  ],
  [
    "Current Reimbursement Baseline",
    "What are you actually being paid today? We establish the baseline before evaluating improvement opportunities or alternative networks.",
  ],
  [
    "Your Office Fee Schedule",
    "How are your established full fees positioned against current contracted reimbursement? This impacts both your negotiating position and your practice's financial footing.",
  ],
  [
    "Direct vs. Umbrella Networks",
    "Is a stronger opportunity available through an alternative network arrangement? We evaluate both direct PPO negotiation and available umbrella network structures.",
  ],
];
const steps = [
  "Collect Practice Data",
  "Verify Current Participation",
  "Measure PPO Penetration",
  "Analyze Current Reimbursement",
  "Review Your Office Fees",
  "Develop Negotiation Strategy",
  "Evaluate Network Opportunities",
  "Model Financial Impact",
  "Develop Participation Strategy",
  "Coordinate Implementation",
  "Verify on EOBs",
];
const faqs = [
  [
    "Can you really get 37% fee improvements like shown above?",
    "Some practices have, particularly when transitioning from direct contracts to stronger umbrella network arrangements. The 37% figure represents our highest documented improvement; most negotiations result in 6-17% improvements. Your outcome depends on current fees, carrier policies, and available opportunities.",
  ],
  [
    "What if my PPO will not negotiate?",
    "We compare the current contract with available alternatives and help you decide whether the relationship still makes financial sense.",
  ],
  [
    "Should I drop a low-paying PPO?",
    "Not automatically. We weigh reimbursement against patient count, production, procedure mix, access, and the cost of changing participation.",
  ],
  [
    "Do I need to participate with every dental insurance company?",
    "No. Strategic participation is more useful than maximum participation.",
  ],
  [
    "How often should PPO contracts be reviewed?",
    "Review contracts regularly and whenever your production mix, patient base, office fees, or payer relationships change materially.",
  ],
  [
    "What is the difference between direct PPO contracts and umbrella networks?",
    "Direct contracts are held with the payer. Umbrella networks provide access through an alternative network arrangement, sometimes with stronger terms.",
  ],
  [
    "How long does PPO negotiation typically take?",
    "Timing varies by carrier, documentation, and implementation requirements. We manage the process through EOB verification.",
  ],
  [
    "Will raising PPO fees make me lose patients?",
    "We evaluate patient access and the economics of each plan before recommending a participation change.",
  ],
  [
    "Do my office fees affect PPO negotiations?",
    "Yes. Your full fee schedule influences your negotiating position and practice economics.",
  ],
  [
    "Do you work with all practice management systems?",
    "We work from the production, patient, utilization, and fee reports available from your practice-management system.",
  ],
];
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PPOFeeNegotiations = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="bg-white text-gray-800">
      <InnerPageHeader
        title="PPO Fee Negotiations"
        breadcrumb="Services / PPO Fee Negotiations"
      />
      <section className="bg-[#F7F9F2] py-16 md:py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <MotionDiv {...reveal}>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              Most practices participate with PPOs based on old decisions made
              under different economics. BEANbite analyzes your actual
              production data, patient utilization, and contracted
              reimbursement, then builds a strategic participation plan for your
              practice today.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our clients have negotiated 6-37% improvements with major
              carriers, including Cigna DPPO, Humana, and Mutual of Omaha. These
              are documented outcomes, not promises.
            </p>
            <CtaButton to="/contact" size="lg">
              Schedule your PPO analysis
            </CtaButton>
          </MotionDiv>
          <MotionDiv
            {...reveal}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <img
                src="/services/ppo-fee-charts.jpg"
                alt="Printed PPO reimbursement comparison charts on a desk"
                className="w-full h-[280px] md:h-[360px] lg:h-[300px] object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <MotionDiv {...reveal} className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Real client results
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Carrier-by-carrier improvements
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              <b>Recent Carrier Negotiations (Sample Results)</b>
              <br />
              These results represent recent client cases across direct
              participation and umbrella network arrangements. Individual
              results vary based on your practice's specific situation, carrier
              policies, and current contracting terms.
            </p>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded-[4px]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#383838] text-white">
                <tr>
                  {[
                    "Carrier / Network",
                    "Participation Type",
                    "Initial Fee %",
                    "Negotiated Fee %",
                    "Improvement",
                  ].map((heading) => (
                    <th key={heading} className="px-5 py-4">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((row) => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    <td className="px-5 py-4 font-semibold text-gray-900">
                      {row[0]}
                    </td>
                    {row.slice(1).map((value, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-5 py-4 ${index === 3 ? "font-bold text-[#7d9200]" : "text-gray-600"}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Results shown represent negotiation outcomes on specific cases. Not
            all negotiations result in improvements. Some practices may find
            their current contracts are already competitive and require no
            changes. Outcomes depend on your practice's situation, carrier
            policies, and market conditions.
          </p>
        </MotionDiv>
      </section>
      <section className="bg-[#383838] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid sm:grid-cols-1 lg:grid-cols-1 gap-6 text-white text-center">
          <p className="text-white mb-4 text-[18px]">
            <b>
              Here's what we've actually negotiated for dental practices like
              <br />
              yours across major carriers.
            </b>
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          {[
            ["37%", "Largest improvement", "Humana and Mutual of Omaha"],
            ["33%", "Cigna DPPO", "Direct participation"],
            ["17%", "Assurance DHA", "Direct participation"],
            ["14%", "Average improvement", "Across Multiple Carriers"],
          ].map((item) => (
            <div
              key={item[1]}
              className="border border-white/30 p-6 rounded-[4px]"
            >
              <strong className="block text-4xl">{item[0]}</strong>
              <span className="block font-semibold mt-2">{item[1]}</span>
              <small className="block mt-1 text-white/80">{item[2]}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F7F9F2] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Visual insights
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              PPO strategy at a glance
            </h2>
            <p className="text-gray-600 mt-4">
              These infographics help you understand the full picture of
              strategic PPO participation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              [
                "PPO Participation Breakdown",
                "Shows typical practice distribution across direct contracts, umbrella networks, and out-of-network participation.",
                "Helps identify which PPOs matter most to your practice",
              ],
              [
                "Fee Improvement Potential",
                "Compares current reimbursement rates by carrier, showing where negotiation opportunities exist.",
                "Reveals which carriers are underpaying you",
              ],
              [
                "A/R Impact Timeline",
                "Shows how improved fee schedules and better processes reduce days in A/R over 6-12 months.",
                "Demonstrates cash flow improvement",
              ],
              [
                "Production by Insurance Mix",
                "Breaks down your practice's production by PPO to identify high-value vs. low-value relationships.",
                "Strategic prioritization for negotiation",
              ],
              [
                "Network Strategy Comparison",
                "Side-by-side analysis of keeping existing contracts vs. transitioning to higher-paying networks.",
                "Financial trade-off analysis",
              ],
              [
                "Carrier Fee Schedule Trends",
                "Shows how PPO fees have changed over 3-5 years, revealing whether your current contracts are trending down.",
                "Identifies when renegotiation is critical",
              ],
            ].map(([title, text, takeaway]) => (
              <div
                key={title}
                className="bg-white border border-gray-100 p-6 rounded-[4px]"
              >
                <div className="flex items-center justify-between mb-5">
                  <BarChart3 className="text-[#7d9200]" size={28} />
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7d9200]">
                    Data view
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {text}
                </p>
                <p className="border-t border-gray-100 pt-4 text-sm font-semibold text-[#7d9200]">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div {...reveal} className="mb-10 text-center">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              The BEANbite difference
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              PPO negotiation is about more than asking for higher fees.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A successful PPO strategy begins by understanding your actual
              practice data—then building decisions on facts instead of
              assumptions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "What your practice is currently being paid by each plan",
              "Which PPOs actually matter to your patient base",
              "How many patients are associated with each plan",
              "How much production each plan represents",
              "Which procedures drive your production",
              "Whether your existing direct PPO fees can be renegotiated",
              "Whether stronger network opportunities are available",
              "Whether maintaining a particular PPO still makes financial sense",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start border-b border-gray-200 pb-4"
              >
                <CheckCircle2 className="text-[#AFCB12] shrink-0" size={21} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F7F9F2] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              What we analyze
            </p>
            <h2 className="text-gray-600 leading-relaxed">
              For established practices, we dive deeper than other PPO
              consulting firms. Here's what the data reveals.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {analysisItems.map(([title, text]) => (
              <motion.div
                {...reveal}
                key={title}
                className="bg-white p-6 border border-gray-100 rounded-[4px]"
              >
                <div className="w-10 h-10 bg-[#AFCB12]/15 flex items-center justify-center rounded-full mb-5">
                  <BarChart3 className="text-[#7d9200]" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              A different approach
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              How BEANbite differs from other PPO consulting firms
            </h2>
            <p className="text-gray-600 mt-4">
              We don't promise guaranteed increases. We deliver smarter strategy
              backed by real results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-7 rounded-[4px]">
              <h3 className="font-bold text-gray-900 text-xl mb-5">
                Typical PPO consultants
              </h3>
              {[
                "Negotiate higher PPO fees (hoping)",
                "Focus primarily on direct contracts",
                "Present offers and fee schedules",
                "Hand off implementation to your team",
                "Disappear after the negotiation",
                "Measure success by percentage increase alone",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-gray-600 mb-4">
                  <span className="text-gray-400">•</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="bg-[#383838] text-white p-7 rounded-[4px]">
              <h3 className="font-bold text-[#C5D92D] text-xl mb-5">
                BEANbite&apos;s approach
              </h3>
              {[
                "Analyze actual practice data first",
                "Evaluate direct AND umbrella networks",
                "Develop strategy for your specific situation",
                "Verify reimbursement on actual EOBs",
                "Provide ongoing PPO management",
                "Measure success by financial impact to your practice",
              ].map((item) => (
                <p key={item} className="flex gap-3 mb-4">
                  <CheckCircle2 className="text-[#C5D92D] shrink-0" size={18} />
                  {item}
                </p>
              ))}
              <span class="badge">Founder: DDS + Office Manager</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              From data to implementation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Our 11-step PPO strategy process
            </h2>
            <p className="text-gray-600 mt-4">
              From data analysis to implementation verification—here's exactly
              how we work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {steps.map((step, i) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#AFCB12] text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{step}</h3>
                  <p className="text-base text-gray-600 mt-1">
                    {
                      [
                        "We request reports from your practice-management software showing production, patient count, utilization, and contracted fees by insurance.",
                        "We confirm how your practice currently participates with each payer and network—direct contracts, umbrella arrangements, network hierarchies.",
                        "We determine which insurance relationships actually matter to your practice based on real patient utilization and production.",
                        "We evaluate contracted fees across your strategically important procedures and assess where you're being paid competitively vs. where you're leaving money on the table.",
                        "We evaluate your full fee schedule against regional benchmarks. Your office fees impact both your negotiating position and your overall reimbursement strategy.",
                        "Where direct PPO negotiation is appropriate and available, we pursue improved reimbursement with documented evidence supporting the request.",
                        "Where available, we compare alternative network arrangements against your existing direct contracts—weighing reimbursement, access, and participation implications.",
                        "We look beyond percentage increases and calculate how reimbursement changes affect your practice based on your actual procedure mix and utilization.",
                        "Based on the analysis, we recommend: keeping current contracts, renegotiating direct contracts, evaluating umbrella networks, restructuring overlapping relationships, or terminating underperforming PPOs.",
                        "If changes are approved, we manage credentialing, contracting, fee schedule loading, and any necessary network updates.",
                        "Once changes become effective, we review actual claims to confirm reimbursement matches the negotiated arrangement. This is where the real test happens.",
                      ][i]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#383838] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Realistic Expectations for PPO Fee Improvements
            </h2>
            <p className="text-white mt-4">
              Based on actual client results, here's what improvement looks
              like.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <TrendingUp className="text-[#C5D92D] mx-auto mb-3" size={32} />
              <h3 className="font-bold text-xl mb-2">Direct PPO negotiation</h3>
              <p className="text-white/70">
                6% to 37% based on completed client cases.
              </p>
            </div>
            <div>
              <Network className="text-[#C5D92D] mx-auto mb-3" size={32} />
              <h3 className="font-bold text-xl mb-2">
                Umbrella/Alternative Networks
              </h3>
              <p className="text-white/70">
                14% to 37% based on available arrangements.
              </p>
            </div>
            <div>
              <ShieldCheck className="text-[#C5D92D] mx-auto mb-3" size={32} />
              <h3 className="font-bold text-xl mb-2">
                Not All Negotiations Succeed
              </h3>
              <p className="text-white/70">
                Some payers decline. Some offer less than requested. Some
                already have strong contracts.
              </p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto text-center mt-12 border-t border-white/20 pt-10">
            <h3 className="text-2xl font-bold mb-3">
              The real measure of success
            </h3>
            <p className="text-white/75 leading-relaxed">
              A 37% fee increase on a procedure that represents minimal
              production may deliver far less financial benefit than a smaller
              increase on your high-volume procedures.
              <br />
              <br />
              <b>
                We measure success not by percentage improvement alone, but by
                actual financial impact to your practice.
              </b>
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Strategic participation, not maximum participation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Stop letting old PPO decisions make new business decisions.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Your PPO relationships should reflect your practice economics
              today—not decisions made years ago under different circumstances.
              <br />
              Let&apos;s analyze what your PPO contracts are actually
              contributing to your practice—and build a strategy that makes
              financial sense.
            </p>
          </div>
          <CtaButton to="/contact" size="lg" className="whitespace-nowrap">
            Start your analysis
          </CtaButton>
        </div>
      </section>

      <section className="bg-[#383838] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center text-white max-w-2xl mx-auto mb-10">
            <p className="font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Hear from practices we&apos;ve helped
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Real results from real practices
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Within 4 months of working with BEANbite on outstanding claims, they recovered a 6-digit dollar amount. They came in and fixed issues one by one. Santosh gets personally involved in every activity.",
              "BEANbite helped us get credentialed with multiple insurance carriers we selected, and negotiated substantially better fee schedules with Aetna, Guardian, and others. Their team is thorough and efficient.",
              "My A/R was down due to staff turnover and technical issues. BEANbite not only advised me on software and claims processes—they trained my team repeatedly to make sure we implemented it correctly.",
            ].map((quote, i) => (
              <div
                key={quote}
                className="bg-white p-6 rounded-[4px] text-gray-700"
              >
                <div className="text-[#AFCB12] tracking-[0.2em] mb-4">
                  ★★★★★
                </div>
                <p className="leading-relaxed text-base mb-5">
                  &quot;{quote}&quot;
                </p>
                <p className="font-bold text-gray-900 text-sm">
                  {
                    [
                      "Practice Owner, California",
                      "Multi-Practice Dental Group",
                      "Multi-Location Practice Owner",
                    ][i]
                  }
                </p>
                <p className="font-normal text-gray-500 text-sm">
                  {
                    [
                      "A/R Recovery & Revenue Cycle Client",
                      "Fee Negotiation & Credentialing Client",
                      "Operational & Revenue Cycle Client",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Why practices choose BEANbite
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              A partner who understands the full ecosystem.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Most PPO consultants started in consulting. BEANbite&apos;s
              founder, Dr. Santosh Rohira, started as a dental office manager.
              She lived these problems—and built BEANbite to solve them
              differently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "We do not promise guaranteed increases. Insurance companies make final decisions. We give realistic analysis.",
              "We use your actual data. Not assumptions about your market. Your production, patients, and procedures.",
              "We evaluate both direct and umbrella networks. The strongest opportunity might not be renegotiating your current contract.",
              "We understand the full ecosystem. Billing, credentialing, claims processing, EOB verification—not just negotiation.",
              "We measure by financial impact. Not percentage increases. How much does this actually improve your practice revenue?",
              "We verify outcomes on actual EOBs. A new fee schedule means nothing until claims process correctly.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start bg-[#F7F9F2] p-5 rounded-[4px]"
              >
                <CheckCircle2 className="text-[#AFCB12] shrink-0" size={20} />
                <span className="text-base text-gray-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-[#F7F9F2] mb-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-[#AFCB12] font-bold uppercase tracking-[0.16em] text-sm mb-3">
              Questions, answered
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 mt-4">
              Everything you need to know about PPO strategy and negotiation.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer], i) => (
              <div
                key={question}
                className="bg-white border border-gray-200 rounded-[4px]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 font-semibold text-gray-900"
                >
                  <span>{question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#7d9200] transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-16">
        <PartnerSection />
      </div>
    </div>
  );
};

export default PPOFeeNegotiations;
