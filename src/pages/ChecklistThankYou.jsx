import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarClock, Download, Mail, Phone } from "lucide-react";
import { getChecklist } from "../data/checklistData";
import CtaButton from "../components/CtaButton";

const CONTACT_OPTIONS = [
  {
    icon: CalendarClock,
    label: "Book a consultation",
    text: "A 30-minute call on your current claims, denials and A/R.",
    href: "https://outlook.office.com/owa/calendar/Consultation@beanbite.com/bookings/",
  },
  {
    icon: Phone,
    label: "Call us",
    text: "Talk to a billing specialist, Monday to Friday.",
    href: "tel:+18887005589",
    value: "(888) 700 5589",
  },
  {
    icon: Mail,
    label: "Email us",
    text: "Send a claim or denial question and we will reply with next steps.",
    href: "mailto:info@BEANbite.com",
    value: "info@BEANbite.com",
  },
];

const ChecklistThankYou = () => {
  const { slug } = useParams();
  const item = getChecklist(slug);

  if (!item) {
    return (
      <div className="max-w-[720px] mx-auto px-4 py-28 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
          We could not find that checklist
        </h1>
        <p className="text-base leading-relaxed text-[#5e5e5e] mb-8">
          The link may be out of date. Browse everything we offer instead.
        </p>
        <CtaButton to="/client-success" icon={ArrowLeft}>
          View all checklists
        </CtaButton>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-[860px] mx-auto px-4 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#010851]">
            Thank you!
          </h1>
          <p className="mt-6 text-xl md:text-2xl leading-snug text-[#5e5e5e]">
            Click the button below to access your resource:
            <span className="mt-1 block font-bold text-[#1f1f1f]">
              &ldquo;{item.title}&rdquo;
            </span>
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <CtaButton
              href={item.file}
              download={`${item.slug}.pdf`}
              size="lg"
              icon={Download}
            >
              Download Resource
            </CtaButton>
            <p className="text-sm text-[#9aa37f]">
              {item.pages} &middot; PDF &middot; No login needed
            </p>
          </div>

          <Link
            to="/client-success"
            className="mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-[#809900] transition-colors hover:text-[#414C00]"
          >
            <ArrowLeft size={16} /> Back to all checklists
          </Link>
        </motion.div>
      </div>

      <div className="bg-[#F7F9F2] border-t border-[#E4E9D8] py-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 text-center">
            Want to see how BEANbite simplifies dental billing?
          </h2>
          <p className="text-base leading-relaxed text-[#5e5e5e] text-center mb-10">
            Choose how you would like to get in touch.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTACT_OPTIONS.map(({ icon: Icon, label, text, href, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-[#E4E9D8] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#C5D92D] hover:shadow-[0_16px_34px_rgba(65,76,0,0.1)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F9F2] text-[#414C00] transition-colors group-hover:bg-[#C5D92D]/20">
                  <Icon size={20} />
                </span>
                <span className="mt-4 text-lg font-bold text-[#1f1f1f]">
                  {label}
                </span>
                <span className="mt-2 text-[15px] leading-relaxed text-[#5e5e5e]">
                  {text}
                </span>
                {value && (
                  <span className="mt-3 text-[15px] font-semibold text-[#809900]">
                    {value}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistThankYou;
