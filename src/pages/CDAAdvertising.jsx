import React, { useLayoutEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  CircleHelp,
  Clock3,
  FileText,
  Layers,
  Mail,
  MapPin,
  Phone,
  Receipt,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Briefcase
} from 'lucide-react';

const bookingUrl = 'https://bookings.cloud.microsoft/book/BEANbiteConsultationCDA@beanbite.com/?ismsaljsauthenabled';

const billingConcerns = [
  { label: 'Unpaid claims', icon: FileText },
  { label: 'Denials', icon: AlertTriangle },
  { label: 'Aging insurance AR', icon: TrendingUp },
  { label: 'Posting', icon: Receipt },
  { label: 'Denti-Cal', icon: ShieldCheck },
  { label: 'Full-cycle billing', icon: Layers },
  { label: 'Other', icon: CircleHelp }
];

const billingQuestions = [
  {
    id: 'denialFrequency',
    question: 'Are claims being denied because the benefits verified before treatment differ from what the payer applies when processing the claim?',
    icon: AlertTriangle,
    options: ['Frequently', 'Sometimes', 'Rarely', 'Not sure']
  },
  {
    id: 'underpaymentFrequency',
    question: 'Are claims being paid at a lower level than expected, such as an SRP claim being processed as a limited-quadrant service?',
    icon: TrendingUp,
    options: ['Frequently', 'Sometimes', 'Rarely', 'Not sure']
  },
  {
    id: 'auditRequested',
    question: 'Has an insurance company requested records or an audit because it questioned the frequency or medical necessity of procedures billed by your practice?',
    icon: ShieldCheck,
    options: ['Yes', 'No', 'Not sure']
  }
];

const reviewPoints = [
  { text: 'Where claims tend to slow down or get denied', icon: FileText },
  { text: 'How your team follows up on unpaid insurance balances', icon: Phone },
  { text: 'Whether posting, secondary claims, or aging accounts need closer attention', icon: TrendingUp },
  { text: 'Which billing tasks BEANbite could take off your team’s plate', icon: Layers }
];

const fieldClassName = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#AFCB12] focus:ring-2 focus:ring-[#AFCB12]/30';

const CDAAdvertising = () => {
  const [formData, setFormData] = useState({
    practiceName: '',
    name: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    billingConcerns: [],
    otherConcern: '',
    denialFrequency: '',
    underpaymentFrequency: '',
    auditRequested: ''
  });
  const [concernError, setConcernError] = useState(false);
  const [humanCheck, setHumanCheck] = useState(false);
  const [humanCheckError, setHumanCheckError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const requiredFields = ['practiceName', 'name', 'email', 'phone', 'location'];
  const completedCount = requiredFields.filter((field) => formData[field].trim()).length
    + Number(formData.billingConcerns.length > 0)
    + billingQuestions.filter((question) => formData[question.id]).length
    + Number(humanCheck);
  const formProgress = Math.round((completedCount / 10) * 100);

  useLayoutEffect(() => {
    if (!isSubmitted) return undefined;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const scrollToTop = () => {
      root.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    scrollToTop();
    const frame = window.requestAnimationFrame(() => {
      scrollToTop();
      root.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [isSubmitted]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const toggleConcern = (concern) => {
    setFormData((current) => ({
      ...current,
      billingConcerns: current.billingConcerns.includes(concern)
        ? current.billingConcerns.filter((item) => item !== concern)
        : [...current.billingConcerns, concern]
    }));
    setConcernError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.billingConcerns.length === 0) {
      setConcernError(true);
      return;
    }
    if (!humanCheck) {
      setHumanCheckError(true);
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[70vh] bg-[#F6F8F7] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[760px] rounded-[20px] border-t-[5px] border-[#AFCB12] bg-white px-6 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:px-10 sm:py-12">
          <div className="mb-5 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#EFF9CD] text-[#5E9700]">
              <Check size={34} strokeWidth={4} aria-hidden="true" />
            </span>
            <h1 className="text-2xl font-extrabold text-slate-950 sm:text-[30px]">
              Let’s talk through the next step
            </h1>
          </div>

          <p className="mx-auto max-w-[570px] text-center text-base leading-7 text-slate-500 sm:text-[17px]">
            Choose a time that works for you. We’ll learn about your current process, answer your questions, and explain whether BEANbite’s billing services are a good fit for your practice.
          </p>

          <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center sm:mt-9 sm:px-8 sm:py-8">
            <a
              href={bookingUrl}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#AFCB12] px-6 py-4 text-base font-bold text-slate-950 shadow-[0_10px_24px_rgba(175,203,18,0.25)] transition hover:bg-[#c1d93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#758d00]"
            >
              Continue to schedule a call <CalendarCheck size={20} aria-hidden="true" />
            </a>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-sm leading-6 text-slate-500">
              <Clock3 size={15} aria-hidden="true" />
              Takes less than 1 minute to select your preferred date &amp; time on our calendar
            </p>
          </div>

          <div className="mt-7 border-t border-slate-200 pt-6">
            <ul className="flex flex-col justify-center gap-3 text-sm font-semibold text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {['1-on-1 Practice Evaluation', 'Review of AR & Denials', 'Zero Financial Obligation'].map((benefit) => (
                <li key={benefit} className="inline-flex items-center justify-center gap-2">
                  <Check size={16} className="text-[#74B900]" strokeWidth={3} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mx-auto mt-8 block text-sm text-slate-500 underline decoration-slate-400 underline-offset-4 transition hover:text-slate-800"
            >
              Need to edit or resubmit your practice details?
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#F6F8F7] text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF4B5] px-4 py-2 text-sm font-bold uppercase text-[#37450A]">
            <BadgeCheck size={16} aria-hidden="true" />
            BEANbite dental billing assessment
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Busy schedule. Unpaid claims.
            <span className="mx-auto mt-0 block max-w-2xl text-xl font-semibold leading-snug text-[#657D00] sm:text-2xl">
              Let’s find out where revenue is getting stuck.
            </span>
          </h1>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#AFCB12]" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-4xl text-md leading-6 text-slate-600">
            Your team works hard to provide care. But when claims sit unresolved, denials pile up, or payments are posted incorrectly, collections can fall behind production.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-md leading-6 text-slate-600">
            BEANbite helps dental practices manage the full billing cycle, from claim submission and attachments to payment posting, denial follow-up, and accounts receivable. Start with a conversation about what is happening in your practice and where your billing process may need attention.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-300 pb-4">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <ShieldCheck size={21} className="text-[#748A00]" aria-hidden="true" />
              What we’ll review together
            </h2>
            <span className="text-xs font-bold uppercase text-slate-500">Four areas · One clear picture</span>
          </div>
          <ol className="relative mt-2 before:absolute before:bottom-6 before:left-[21px] before:top-6 before:w-px before:bg-[#D9E69A]">
            {reviewPoints.map((point, index) => {
              const PointIcon = point.icon;
              return (
                <li key={point.text} className="group relative flex gap-4 border-b border-slate-200/80 py-4 transition-colors hover:bg-white/70">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#718900] shadow-sm transition-all group-hover:border-[#AFCB12] group-hover:bg-[#F5F9DF]">
                    <PointIcon size={19} aria-hidden="true" />
                  </span>
                  <div className="pt-0.5">
                    <p className="mb-0 text-[11px] font-bold text-[#748A00]">
                      Review point {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="leading-6 text-[14px] text-slate-600">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-slate-600">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#748A00]" aria-hidden="true" />
            We’ll discuss opportunities based on the information you provide. A review does not guarantee additional collections or a particular financial result.
          </p>
        </div>

        <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Tell us a little about your practice</h2>
            <p className="mt-2 leading-6 text-slate-600">
              Fill out this short form to get your custom billing assessment and schedule a 1-on-1 consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <BadgeCheck size={18} className="text-[#748A00]" aria-hidden="true" />
                  Assessment progress
                </span>
                <span className="text-sm font-bold tabular-nums text-slate-700" aria-live="polite">
                  {completedCount}/10
                </span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-slate-200"
                role="progressbar"
                aria-label="Assessment progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={formProgress}
              >
                <div
                  className="h-full rounded-full bg-[#AFCB12] transition-[width] duration-300 ease-out"
                  style={{ width: `${formProgress}%` }}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><Building2 size={16} className="text-[#748A00]" aria-hidden="true" />Practice name <span className="text-rose-600">*</span></span>
                <input className={fieldClassName} name="practiceName" value={formData.practiceName} onChange={updateField} required autoComplete="organization" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><UserRound size={16} className="text-[#748A00]" aria-hidden="true" />Your name <span className="text-rose-600">*</span></span>
                <input className={fieldClassName} name="name" value={formData.name} onChange={updateField} required autoComplete="name" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><Briefcase size={16} className="text-[#748A00]" aria-hidden="true" />Your role</span>
                <select className={fieldClassName} name="role" value={formData.role} onChange={updateField}>
                  <option value="">Select your role</option>
                  <option>Dentist / Practice owner</option>
                  <option>Office manager</option>
                  <option>Billing team</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><Mail size={16} className="text-[#748A00]" aria-hidden="true" />Email <span className="text-rose-600">*</span></span>
                <input className={fieldClassName} type="email" name="email" value={formData.email} onChange={updateField} required autoComplete="email" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><Phone size={16} className="text-[#748A00]" aria-hidden="true" />Phone <span className="text-rose-600">*</span></span>
                <input className={fieldClassName} type="tel" name="phone" value={formData.phone} onChange={updateField} required autoComplete="tel" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-[#748A00]" aria-hidden="true" />Practice location <span className="text-rose-600">*</span></span>
                <input className={fieldClassName} name="location" value={formData.location} onChange={updateField} required autoComplete="address-level2" />
              </label>
            </div>

            <fieldset aria-describedby={concernError ? 'concern-error' : undefined}>
              <legend className="text-sm font-semibold leading-6 text-slate-700">
                What is your biggest billing concern right now? <span className="text-rose-600">*</span>{' '}
                <span className="font-normal text-slate-500">(Check all that apply)</span>
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {billingConcerns.map((concern) => {
                  const ConcernIcon = concern.icon;
                  const isSelected = formData.billingConcerns.includes(concern.label);
                  return (
                    <label
                      key={concern.label}
                      className={`group flex min-h-14 cursor-pointer items-center justify-between rounded-lg border-2 px-4 py-3 text-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-[#AFCB12]/50 ${isSelected ? 'border-[#9DB814] bg-[#F5F9DF] font-semibold text-[#37450A] shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-[#AFCB12] hover:shadow-sm'}`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleConcern(concern.label)}
                        className="sr-only"
                      />
                      <span className="inline-flex items-center gap-3">
                        <ConcernIcon size={18} className={isSelected ? 'text-[#748A00]' : 'text-slate-400'} aria-hidden="true" />
                        {concern.label}
                      </span>
                      <span className={`ml-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isSelected ? 'border-[#7B9400] bg-[#7B9400] text-white' : 'border-slate-300 bg-white'}`}>
                        {isSelected && <Check size={13} strokeWidth={3} aria-hidden="true" />}
                      </span>
                    </label>
                  );
                })}
              </div>
              {concernError && (
                <p id="concern-error" role="alert" className="mt-2 text-sm font-medium text-rose-700">
                  Select at least one billing concern to continue.
                </p>
              )}
            </fieldset>

            {billingQuestions.map((question) => {
              const QuestionIcon = question.icon;
              return (
              <fieldset key={question.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-200 has-[:checked]:border-[#C5D92D] sm:p-5">
                <legend className="max-w-full text-sm font-semibold leading-6 text-slate-800">
                  <span className="flex items-start gap-3">
                    <QuestionIcon size={19} className="mt-0.5 shrink-0 text-[#748A00]" aria-hidden="true" />
                    {question.question}
                  </span>
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {question.options.map((option) => {
                    const isSelected = formData[question.id] === option;
                    return (
                      <label
                        key={option}
                        className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-[#AFCB12]/50 ${isSelected ? 'border-[#9DB814] bg-[#F5F9DF] font-semibold text-[#37450A]' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={isSelected}
                          onChange={updateField}
                          className="h-4 w-4 accent-[#7B9400]"
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
              );
            })}

            {formData.billingConcerns.includes('Other') && (
              <label className="block text-sm font-semibold text-slate-700">
                Please tell us more about your billing concern
                <textarea
                  className={`${fieldClassName} min-h-24 resize-y`}
                  name="otherConcern"
                  value={formData.otherConcern}
                  onChange={updateField}
                  rows="3"
                />
              </label>
            )}

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
              <p><strong>Confidentiality Notice:</strong> Please do not include patient names, records, or other protected health information in this form.</p>
            </div>

            <div>
              <label className="inline-flex min-h-16 cursor-pointer items-center gap-4 border border-slate-300 bg-white px-4 py-3 shadow-sm">
                <input
                  type="checkbox"
                  checked={humanCheck}
                  onChange={(event) => {
                    setHumanCheck(event.target.checked);
                    setHumanCheckError(false);
                  }}
                  className="h-7 w-7 accent-[#7B9400]"
                />
                <span className="text-sm font-medium text-slate-900">I'm not a robot</span>
              </label>
              {humanCheckError && (
                <p role="alert" className="mt-2 text-sm font-medium text-rose-700">
                  Please confirm before continuing.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#AFCB12] px-5 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:bg-[#c1d93d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#758d00]"
            >
              Submit Practice Details &amp; Continue to Schedule Call <ArrowRight size={19} aria-hidden="true" />
            </button>
            <p className="text-center text-sm text-slate-500">
              100% confidential. You’ll choose a call time on our calendar immediately after submitting.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CDAAdvertising;