import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  AlertTriangle,
  Calculator,
  CalendarClock,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Hourglass,
  ListChecks,
  MessageSquare,
  Percent,
  QrCode,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import CtaButton from "../components/CtaButton";
import Reveal from "../components/Reveal";

const readinessQuestions = [
  {
    id: "productionGoals",
    title: "Production Goals",
    description:
      "Do you have clearly defined, written daily and monthly production goals for the practice?",
    icon: Target,
  },
  {
    id: "collectionRate",
    title: "Collection Rate",
    description:
      "Are you consistently collecting more than 95% of your adjusted production?",
    icon: Percent,
  },
  {
    id: "collectionTrend",
    title: "3-Year Collection Trend",
    description:
      "Have your total annual collections declined or remained stagnant over the last three years?",
    icon: TrendingDown,
  },
  {
    id: "pnl",
    title: "Evaluate Your P&L",
    description:
      "Have you reviewed your P&L with your accountant and determined that collections are not keeping pace with rising practice expenses and your desired growth?",
    icon: Calculator,
  },
  {
    id: "scheduleCapacity",
    title: "Schedule Capacity",
    description:
      "Do you consistently have unused doctor or hygiene capacity that could accommodate additional patients?",
    icon: CalendarClock,
  },
  {
    id: "patientDemand",
    title: "Patient Demand",
    description:
      "Is your new-patient volume too low to use your available capacity?",
    icon: Users,
  },
  {
    id: "caseAcceptance",
    title: "Case Acceptance Rate",
    description: "Is your treatment case-acceptance rate 60%-70% or higher?",
    icon: UserCheck,
  },
  {
    id: "revenueCycle",
    title: "Revenue Cycle",
    description:
      "Are eligibility, claims, denials, appeals, payment posting, and insurance AR being managed effectively and consistently?",
    icon: RefreshCw,
  },
  {
    id: "agingAR",
    title: "Outstanding AR",
    description:
      "Have you reviewed your aging AR and confirmed that poor collections are not primarily caused by unresolved insurance or patient balances?",
    icon: Hourglass,
  },
  {
    id: "ppoAudit",
    title: "PPO Audit",
    description:
      "Is someone responsible for routinely auditing PPO participation, EOB reimbursements, network leasing, and confirming that the contracted fee paid on the EOB matches the fee schedule you negotiated or accepted?",
    icon: Search,
  },
];

const scoreBands = [
  {
    key: "strong",
    label: "PPO Worth Evaluating",
    min: 9,
    max: 10,
    description:
      "Your fundamentals appear strong. Strategic PPO participation may be worth evaluating.",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: ShieldCheck,
  },
  {
    key: "watch",
    label: "Investigate First",
    min: 6,
    max: 8,
    description:
      "Some gaps may be limiting growth. Identify the cause before accepting lower PPO fees.",
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    icon: AlertTriangle,
  },
  {
    key: "risk",
    label: "Optimize Before PPO",
    min: 0,
    max: 5,
    description:
      "Fix underlying collection, capacity, case acceptance, AR, or revenue-cycle issues before adding discounted volume.",
    badge: "bg-rose-100 text-rose-800 border-rose-200",
    icon: TrendingUp,
  },
];

const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const PPOReadinessChecklist = () => {
  const [responses, setResponses] = useState({});
  const [isResultOpen, setIsResultOpen] = useState(false);

  const score = useMemo(
    () =>
      readinessQuestions.reduce(
        (total, question) => total + (responses[question.id] === "yes" ? 1 : 0),
        0,
      ),
    [responses],
  );

  const answered = useMemo(
    () =>
      readinessQuestions.reduce(
        (total, question) => total + (responses[question.id] ? 1 : 0),
        0,
      ),
    [responses],
  );

  const scoreResult = useMemo(() => {
    const found =
      scoreBands.find((band) => score >= band.min && score <= band.max) ||
      scoreBands[2];
    return found;
  }, [score]);

  const setResponse = (id, value) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  const ScoreIcon = scoreResult.icon;

  return (
    <div className="bg-slate-50 min-h-screen">
      <InnerPageHeader
        title="PPO Network Readiness Checklist"
        breadcrumb="PPO Network Readiness"
      />

      <section className="max-w-[1400px] mx-auto lg:px-12 px-6 py-12 md:py-20">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
        >
          <div>
            {/*<p className="inline-flex items-center rounded-full bg-[#C5D92D]/20 text-[#1a2e05] px-3 py-1 text-sm font-semibold mb-4">
              BEANbite practice assessment
            </p>*/}
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 leading-tight">
              Your Next PPO Decision Deserves More Than a Gut Feeling
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Should your practice go in-network? Answer these 10 questions
              about your collections, patient demand, financial performance, and
              operational readiness to help determine your next move.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href="#checklist">Start assessment</CtaButton>
              {/*<a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:border-[#AFCB12] hover:text-[#1a2e05] transition-colors"
              >
                Book a complimentary review
              </a>*/}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 lg:sticky lg:top-24">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Your score
                </p>
                <h3 className="text-5xl font-bold text-[#111827] mt-2">
                  {score} <span className="text-2xl text-slate-400">/ 10</span>
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <ListChecks
                    size={16}
                    className="text-[#809900]"
                    aria-hidden="true"
                  />
                  {answered} of 10 answered
                </p>
              </div>

              <div className="relative h-20 w-20 shrink-0" aria-hidden="true">
                <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#AFCB12"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={
                      RING_CIRCUMFERENCE *
                      (1 - answered / readinessQuestions.length)
                    }
                    style={{ transition: "stroke-dashoffset 500ms ease" }}
                  />
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold leading-none text-[#111827]">
                    {Math.round((answered / readinessQuestions.length) * 100)}%
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    done
                  </span>
                </span>
              </div>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#AFCB12] via-[#c7d72f] to-[#dfe970] transition-all duration-500"
                style={{ width: `${(score / 10) * 100}%` }}
              />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Readiness band
              </p>
              {answered > 0 ? (
                <Motion.span
                  key={scoreResult.key}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${scoreResult.badge}`}
                >
                  <ScoreIcon size={15} aria-hidden="true" />
                  {scoreResult.label}
                </Motion.span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-300 px-3 py-1 text-sm font-medium text-slate-400">
                  Answer to reveal
                </span>
              )}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <p className="text-base font-semibold text-slate-700 mb-2">
                Before you sign a PPO contract, ask:
              </p>
              <p className="text-base font-medium text-slate-800 leading-relaxed">
                “Do I really need more patients, or do I need to collect more
                from the patients and treatment I already have?”
              </p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section id="checklist" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
          <Reveal className="bg-[#111827] px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C5D92D] text-[#111827]">
                  <ClipboardCheck size={22} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Questions to Answer Before Signing Your Next PPO Contract
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-slate-200">
                <ListChecks
                  size={16}
                  className="text-[#C5D92D]"
                  aria-hidden="true"
                />
                {answered} / {readinessQuestions.length}
              </span>
            </div>
          </Reveal>

          <div className="divide-y divide-slate-200">
            {readinessQuestions.map((question, index) => {
              const QuestionIcon = question.icon;
              const answer = responses[question.id];

              return (
                <Motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className={`group grid gap-4 border-l-4 px-6 py-6 transition-colors duration-300 md:grid-cols-[1fr_auto] md:items-center md:px-8 ${
                    answer
                      ? "border-l-[#AFCB12] bg-[#F7F9F2]"
                      : "border-l-transparent hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-105 ${
                        answer
                          ? "border-[#AFCB12] bg-white text-[#414C00] shadow-sm"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                      aria-hidden="true"
                    >
                      <QuestionIcon size={20} />
                    </span>
                    <div>
                      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        <span className="text-[#809900]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {question.title}
                        {answer && (
                          <Motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              answer === "yes"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-rose-100 text-rose-700"
                            }`}
                          >
                            {answer === "yes" ? (
                              <CheckCircle2 size={11} />
                            ) : (
                              <X size={11} />
                            )}
                            {answer}
                          </Motion.span>
                        )}
                      </p>
                      <p className="text-base text-slate-700 leading-relaxed">
                        {question.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pl-15 md:flex-col lg:flex-row lg:pl-0">
                    <button
                      type="button"
                      onClick={() => setResponse(question.id, "yes")}
                      aria-pressed={answer === "yes"}
                      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                        answer === "yes"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm"
                          : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700"
                      }`}
                    >
                      {answer === "yes" ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <Circle size={16} />
                      )}
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setResponse(question.id, "no")}
                      aria-pressed={answer === "no"}
                      className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                        answer === "no"
                          ? "border-rose-500 bg-rose-50 text-rose-700 shadow-sm"
                          : "border-slate-300 bg-white text-slate-700 hover:border-rose-400 hover:text-rose-700"
                      }`}
                    >
                      {answer === "no" ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <Circle size={16} />
                      )}
                      No
                    </button>
                  </div>
                </Motion.div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-4 border-t border-slate-200 px-6 py-5 md:px-8">
            <p className="text-sm font-medium text-slate-500">
              {answered === readinessQuestions.length
                ? "All questions answered"
                : `${readinessQuestions.length - answered} left to answer`}
            </p>
            <CtaButton onClick={() => setIsResultOpen(true)}>
              Submit assessment
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src="/services/ppo-readiness-review.jpg"
              alt="Dentist reviewing practice revenue reports at her desk"
              width="900"
              height="1125"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </Reveal>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-6">
              What your score means
            </h2>
            <div className="space-y-4">
              {scoreBands.map((band) => {
                const BandIcon = band.icon;
                const isActive =
                  answered > 0 && score >= band.min && score <= band.max;

                return (
                  <Motion.div
                    key={band.key}
                    animate={isActive ? { scale: [1, 1.015, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`rounded-2xl border p-5 transition-colors duration-300 ${
                      isActive
                        ? "border-[#AFCB12] bg-[#F7F9F2] shadow-md"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${band.badge}`}
                        aria-hidden="true"
                      >
                        <BandIcon size={22} />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-[#111827]">
                            {band.label}
                          </h3>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${band.badge}`}
                          >
                            Score {band.min}-{band.max}
                          </span>
                          {isActive && (
                            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#414C00]">
                              Your band
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-base text-slate-600 leading-relaxed">
                          {band.description}
                        </p>
                      </div>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {isResultOpen &&
        (() => {
          const Icon = scoreResult.icon;

          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
              role="presentation"
            >
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
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${scoreResult.badge}`}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        PPO readiness result
                      </p>
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${scoreResult.badge}`}
                      >
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
                <h3
                  id="readiness-result-title"
                  className="mb-3 text-2xl font-bold sm:text-3xl"
                >
                  {scoreResult.label}
                </h3>
                <p
                  id="readiness-result-description"
                  className="text-base leading-relaxed text-slate-600"
                >
                  {scoreResult.description}
                </p>

                <div
                  className="mt-6 flex items-center gap-1.5"
                  aria-hidden="true"
                >
                  {readinessQuestions.map((question, i) => (
                    <span
                      key={question.id}
                      className={`h-2 flex-1 rounded-full transition-colors duration-300 ${i < score ? "bg-[#AFCB12]" : "bg-slate-200"}`}
                    />
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-slate-500">
                    Your score{" "}
                    <span className="ml-1 text-lg font-bold text-slate-900">
                      {score}/10
                    </span>
                  </p>
                  <CtaButton href="https://bookings.cloud.microsoft/book/InsuranceInfrastructureAssessment@beanbite.com/?ismsaljsauthenabled=true">
                    Schedule a call
                  </CtaButton>
                </div>
              </Motion.div>
            </div>
          );
        })()}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[28px] bg-gradient-to-r from-[#111827] via-[#1b2436] to-[#1e3a5f] px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[#C5D92D] text-sm font-semibold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <ShieldCheck size={16} aria-hidden="true" />
                Complimentary PPO readiness assessment
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let BEANbite review your revenue-cycle performance and network
                strategy.
              </h3>
              <p className="text-slate-200 text-base leading-relaxed mb-4">
                This review identifies hidden gaps in insurance infrastructure
                before they become costly revenue problems.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <MessageSquare
                    size={16}
                    className="text-[#C5D92D]"
                    aria-hidden="true"
                  />
                  Text STARTUP to
                </span>
                <span className="font-semibold text-white">(310) 439-8542</span>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-slate-200 text-center mb-4 flex items-center justify-center gap-2">
                <QrCode
                  size={16}
                  className="text-[#C5D92D]"
                  aria-hidden="true"
                />
                Scan the QR code below or book your complimentary assessment
                online.
              </p>

              <img
                src="/scanner.png"
                alt="QR code to the BEANbite revenue health check-up"
                width="283"
                height="282"
                loading="lazy"
                className="mx-auto mb-4 aspect-square w-40 rounded-lg bg-white p-2 object-contain sm:w-44"
              />

              <p className="text-xs text-slate-300 text-center">
                Optimizing Billing. Maximizing Revenue. Increasing Profits
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPOReadinessChecklist;
