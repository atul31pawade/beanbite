import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChartColumnIncreasing,
  FileCheck2,
  FileText,
  LaptopMinimalCheck,
  Mail,
  Paperclip,
  Phone,
  ReceiptText,
  ShieldCheck,
  UsersRound
} from 'lucide-react';

const services = [
  { label: 'Insurance verification', to: '/services/verification' },
  { label: 'Dental billing', to: '/services/billing' },
  { label: 'PPO fee negotiations', to: '/services/ppo-fee-negotiations' },
  { label: 'Credentialing', to: '/services/credentialing' }
];

const billingSupport = [
  {
    title: 'Claims submitted daily',
    description: 'We prepare and submit primary and secondary claims, include supporting documentation, and send pre-authorizations at your team’s request.',
    icon: FileCheck2
  },
  {
    title: 'Payments and EOBs posted',
    description: 'Daily posting keeps insurance payments, adjustments, and explanations of benefits organized and easier to reconcile against deposits.',
    icon: ReceiptText
  },
  {
    title: 'Accurate patient and subscriber details',
    description: 'We help correct subscriber IDs, names, dates of birth, and family-file details so claims have the information payers need to process them.',
    icon: UsersRound
  },
  {
    title: 'Unattached procedures followed up',
    description: 'We identify completed procedures that have not been attached to a claim and help get them billed so earned production does not get overlooked.',
    icon: Paperclip
  },
  {
    title: 'Aging insurance claims tracked',
    description: 'Claims over 30 days receive follow-up, with regular reporting on status, actions taken, and outstanding insurance balances.',
    icon: ChartColumnIncreasing
  },
  {
    title: 'Denied claims reviewed',
    description: 'We review denials, identify documentation gaps, and resubmit or dispute claims when there is a reasonable path to resolution.',
    icon: ShieldCheck
  },
  {
    title: 'Billing software setup support',
    description: 'Our team can help practices with electronic claim transmission and digital attachments, including workflows for payers that require paper claims.',
    icon: LaptopMinimalCheck
  },
  {
    title: 'Daily billing and production reports',
    description: 'Your office manager receives a daily view of billing activity and electronic claim transmission, helping the team stay close to production.',
    icon: FileText
  }
];

const inputClassName = 'mt-2 min-h-12 w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#748A00] focus:ring-2 focus:ring-[#AFCB12]/30';

const CDAPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Dental billing inquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone')}`,
      `Practice: ${formData.get('practice') || 'Not provided'}`,
      '',
      'Message:',
      formData.get('message')
    ].join('\n');

    window.location.href = `mailto:info@beanbite.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-[#e5e9d0] bg-[#f7f9ef]">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(135deg,rgba(197,217,45,0.14),rgba(197,217,45,0)_70%)] lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-bold uppercase text-[#657600]">Dental billing support in California</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-[#20270a] sm:text-5xl">
              Affordable Dental Billing Services California
            </h1>
            <h2 className="mt-4 text-2xl font-bold text-[#657600] sm:text-3xl">Get paid what you’re worth.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              BEANbite helps dental practices keep claims moving, work through denials, and stay on top of insurance accounts receivable, so your team can focus more time on patients.
            </p>
            <nav aria-label="Related services" className="mt-8 flex flex-wrap gap-2.5">
              {services.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#d8dfb4] bg-white px-4 py-2 text-sm font-semibold text-[#394307] transition hover:border-[#9db814] hover:bg-[#f2f6dc]"
                >
                  {service.label}<ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
              <a href="tel:+18887005498" className="inline-flex items-center gap-2 hover:text-[#657600]"><Phone size={16} aria-hidden="true" />(888) 700-5498</a>
              <a href="mailto:info@beanbite.com" className="inline-flex items-center gap-2 hover:text-[#657600]"><Mail size={16} aria-hidden="true" />info@beanbite.com</a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(39,50,0,0.10)] sm:p-7">
            <div className="mb-6 border-b border-slate-200 pb-5">
              <p className="text-xs font-bold uppercase text-[#748A00]">Talk with our team</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Get in touch</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Tell us a little about your practice and how we can help.</p>
            </div>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">
                  Your name <span className="text-rose-600">*</span>
                  <input className={inputClassName} name="name" autoComplete="name" placeholder="Your full name" required />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Your email <span className="text-rose-600">*</span>
                  <input className={inputClassName} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Your phone <span className="text-rose-600">*</span>
                  <input className={inputClassName} type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-5555" required />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Practice name
                  <input className={inputClassName} name="practice" autoComplete="organization" placeholder="Practice or DSO" />
                </label>
              </div>
              <label className="block text-sm font-semibold text-slate-700">
                How can we help? <span className="text-rose-600">*</span>
                <textarea className={`${inputClassName} min-h-28 resize-y`} name="message" rows="4" placeholder="Tell us about your billing needs" required />
              </label>
              <p className="text-xs leading-5 text-slate-500">Submitting opens a new email to BEANbite with your inquiry. Please do not include patient information.</p>
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#AFCB12] px-5 py-3 text-sm font-bold text-[#20270a] transition hover:bg-[#c5d92d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#657600]">
                Send message <ArrowRight size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-bold uppercase text-[#748A00]">A steadier billing workflow</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">Billing support from claim to follow-up</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">From timely submissions to practical reporting, our team helps keep the details of insurance billing moving.</p>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {billingSupport.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t border-slate-200 py-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#f2f6dc] text-[#657600]">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <p className="text-xs font-bold uppercase text-[#748A00]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#e5e9d0] bg-[#f7f9ef]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:py-12 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Ready to talk through your billing workflow?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Call our team at <a className="font-semibold text-[#536400] underline underline-offset-2" href="tel:+18887005498">(888) 700-5498</a> or send us a message.</p>
          </div>
          <a href="#contact-form" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#AFCB12] px-5 py-3 text-sm font-bold text-[#20270a] transition hover:bg-[#c5d92d]">
            Contact BEANbite <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CDAPage;