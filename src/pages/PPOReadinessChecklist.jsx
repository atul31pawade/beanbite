import React, { useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { CheckCircle2, Circle, TrendingUp, AlertTriangle, ShieldCheck, ArrowRight, X } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';

const readinessQuestions = [
  {
    id: 'productionGoals',
    title: 'Production Goals',
    description: 'Do you have clearly defined, written daily and monthly production goals for the practice?'
  },
  {
    id: 'collectionRate',
    title: 'Collection Rate',
    description: 'Are you consistently collecting more than 95% of your adjusted production?'
  },
  {
    id: 'collectionTrend',
    title: '3-Year Collection Trend',
    description: 'Have your total annual collections declined or remained stagnant over the last three years?'
  },
  {
    id: 'pnl',
    title: 'Evaluate Your P&L',
    description: 'Have you reviewed your P&L with your accountant and determined that collections are not keeping pace with rising practice expenses and your desired growth?'
  },
  {
    id: 'scheduleCapacity',
    title: 'Schedule Capacity',
    description: 'Do you consistently have unused doctor or hygiene capacity that could accommodate additional patients?'
  },
  {
    id: 'patientDemand',
    title: 'Patient Demand',
    description: 'Is your new-patient volume too low to use your available capacity?'
  },
  {
    id: 'caseAcceptance',
    title: 'Case Acceptance Rate',
    description: 'Is your treatment case-acceptance rate 60%-70% or higher?'
  },
  {
    id: 'revenueCycle',
    title: 'Revenue Cycle',
    description: 'Are eligibility, claims, denials, appeals, payment posting, and insurance AR being managed effectively and consistently?'
  },
  {
    id: 'agingAR',
    title: 'Outstanding AR',
    description: 'Have you reviewed your aging AR and confirmed that poor collections are not primarily caused by unresolved insurance or patient balances?'
  },
  {
    id: 'ppoAudit',
    title: 'PPO Audit',
    description: 'Is someone responsible for routinely auditing PPO participation, EOB reimbursements, network leasing, and confirming that the contracted fee paid on the EOB matches the fee schedule you negotiated or accepted?'
  }
];

const scoreBands = [
  {
    key: 'strong',
    label: 'PPO Worth Evaluating',
    min: 9,
    max: 10,
    description: 'Your fundamentals appear strong. Strategic PPO participation may be worth evaluating.',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: ShieldCheck
  },
  {
    key: 'watch',
    label: 'Investigate First',
    min: 6,
    max: 8,
    description: 'Some gaps may be limiting growth. Identify the cause before accepting lower PPO fees.',
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: AlertTriangle
  },
  {
    key: 'risk',
    label: 'Optimize Before PPO',
    min: 0,
    max: 5,
    description: 'Fix underlying collection, capacity, case acceptance, AR, or revenue-cycle issues before adding discounted volume.',
    badge: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: TrendingUp
  }
];

const PPOReadinessChecklist = () => {
  const [responses, setResponses] = useState({});
  const [isResultOpen, setIsResultOpen] = useState(false);

  const score = useMemo(
    () => readinessQuestions.reduce((total, question) => total + (responses[question.id] === 'yes' ? 1 : 0), 0),
    [responses]
  );

  const scoreResult = useMemo(() => {
    const found = scoreBands.find((band) => score >= band.min && score <= band.max) || scoreBands[2];
    return found;
  }, [score]);

  const setResponse = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <InnerPageHeader title="PPO Network Readiness Checklist" breadcrumb="PPO Network Readiness" />

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start"
        >
          <div>
            <p className="inline-flex items-center rounded-full bg-[#C5D92D]/20 text-[#1a2e05] px-3 py-1 text-sm font-semibold mb-4">
              BEANbite practice assessment
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-4">
              Should your practice go in-network?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              An open schedule does not automatically mean you need more insurance plans. Evaluate your numbers,
              capacity, case acceptance, revenue cycle, and PPO exposure before accepting lower contracted fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#checklist"
                className="inline-flex items-center gap-2 rounded-full bg-[#AFCB12] px-5 py-3 font-semibold text-[#1a2e05] shadow-sm hover:bg-[#c1d93d] transition-colors"
              >
                Start assessment <ArrowRight size={18} />
              </a>
              {/*<a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:border-[#AFCB12] hover:text-[#1a2e05] transition-colors"
              >
                Book a complimentary review
              </a>*/}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
            <div className="mb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Your score</p>
                <h3 className="text-5xl font-bold text-[#111827] mt-2">{score} <span className="text-2xl text-slate-400">/ 10</span></h3>
              </div>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#AFCB12] via-[#c7d72f] to-[#dfe970] transition-all duration-500"
                style={{ width: `${(score / 10) * 100}%` }}
              />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-700 mb-2">Before you sign a PPO contract, ask:</p>
              <p className="text-base font-medium text-slate-800 leading-relaxed">
                “Do I really need more patients, or do I need to collect more from the patients and treatment I already have?”
              </p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section id="checklist" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
          <div className="bg-[#111827] px-6 py-5 md:px-8">
            <h3 className="text-2xl font-bold text-white">Questions to Answer Before Signing Your Next PPO Contract</h3>
          </div>

          <div className="divide-y divide-slate-200">
            {readinessQuestions.map((question, index) => (
              <Motion.div
                key={question.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="grid gap-4 px-6 py-6 md:px-8 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{question.title}</p>
                  <p className="text-lg text-slate-700 leading-relaxed">{question.description}</p>
                </div>

                <div className="flex gap-2 md:flex-col lg:flex-row">
                  <button
                    type="button"
                    onClick={() => setResponse(question.id, 'yes')}
                    className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                      responses[question.id] === 'yes'
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700'
                    }`}
                  >
                    {responses[question.id] === 'yes' ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setResponse(question.id, 'no')}
                    className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                      responses[question.id] === 'no'
                        ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-sm'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-rose-400 hover:text-rose-700'
                    }`}
                  >
                    {responses[question.id] === 'no' ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    No
                  </button>
                </div>
              </Motion.div>
            ))}
          </div>
          <div className="flex justify-end border-t border-slate-200 px-6 py-5 md:px-8">
            <button
              type="button"
              onClick={() => setIsResultOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#AFCB12] px-5 py-3 font-semibold text-[#1a2e05] shadow-sm transition-colors hover:bg-[#c1d93d]"
            >
              Submit assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {isResultOpen && (() => {
        const Icon = scoreResult.icon;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4" role="presentation">
            <Motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="readiness-result-title"
              aria-describedby="readiness-result-description"
              className="relative w-full max-w-[560px] rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${scoreResult.badge}`}>
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      PPO readiness result
                    </p>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${scoreResult.badge}`}>
                      Score range {scoreResult.min}-{scoreResult.max}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsResultOpen(false)}
                  aria-label="Close readiness result"
                  className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-slate-200"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 id="readiness-result-title" className="mb-3 text-2xl font-bold sm:text-3xl">
                {scoreResult.label}
              </h3>
              <p id="readiness-result-description" className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {scoreResult.description}
              </p>
              <div className="mt-7 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-slate-500">
                  Your score <span className="ml-1 text-lg font-bold text-slate-900">{score}/10</span>
                </p>
                <a
                  href="https://bookings.cloud.microsoft/book/BEANbiteConsultationCDA@beanbite.com/?ismsaljsauthenabled"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#AFCB12] px-5 py-3 font-semibold text-[#1a2e05] shadow-sm transition-colors hover:bg-[#c1d93d]"
                >
                  Schedule a call <ArrowRight size={18} />
                </a>
              </div>
            </Motion.div>
          </div>
        );
      })()}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[28px] bg-gradient-to-r from-[#111827] via-[#1b2436] to-[#1e3a5f] px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[#C5D92D] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Complimentary PPO readiness assessment</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Let BEANbite review your revenue-cycle performance and network strategy.</h3>
              <p className="text-slate-200 text-lg leading-relaxed mb-4">
                This review identifies hidden gaps in insurance infrastructure before they become costly revenue problems.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-200">
                <span>Text STARTUP to</span>
                <span className="font-semibold text-white">(310) 439-8542</span>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-slate-200 text-center mb-4">Scan the QR code below or book your complimentary assessment online.</p>

              <img
                src="/scanner.png"
                alt="QR code to the BEANbite revenue health check-up"
                width="283"
                height="282"
                loading="lazy"
                className="mx-auto mb-4 aspect-square w-40 rounded-lg bg-white p-2 object-contain sm:w-44"
              />
              
              <p className="text-xs text-slate-300 text-center">Optimizing Billing. Maximizing Revenue. Increasing Profits</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPOReadinessChecklist;
