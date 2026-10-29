import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CHECKLISTS, CATEGORIES } from "../data/checklistData";
import {
  ArrowRight,
  Check,
  Download,
  RotateCcw,
  Search,
  X,
} from "lucide-react";
import CtaButton from "./CtaButton";

const FIELDS = [
  { name: "firstName", label: "First name", type: "text", half: true },
  { name: "lastName", label: "Last name", type: "text", half: true },
  { name: "office", label: "Practice or office name", type: "text" },
  { name: "phone", label: "Phone number", type: "tel" },
  { name: "email", label: "Work email", type: "email" },
];

const ChecklistCard = ({ item, onOpen }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.4 }}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4E9D8] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(31,31,31,0.10)]"
  >
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="flex flex-1 flex-col text-left"
    >
      <div className="m-5 mb-0 rounded-xl border border-[#E4E9D8] bg-[#F7F9F2] px-5 py-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-extrabold tracking-tight text-[#010851]">
            BEAN<span className="text-[#AFCB12]">bite</span>
          </span>
          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#9aa37f]">
            Checklist
          </span>
        </div>
        <div className="mt-1.5 h-[2px] w-full bg-[#010851]/20" />
        <p className="mt-3 line-clamp-2 text-[15px] font-bold leading-snug text-[#1f1f1f]">
          {item.title}
        </p>
        <p className="mt-1 text-[11px] text-[#7c8566]">
          {item.pages} &middot; PDF
        </p>
      </div>

      <div className="flex flex-col gap-3 p-5 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#E4E9D8] bg-[#F7F9F2] px-2.5 py-1 text-[11px] font-semibold text-[#5e5e5e]">
            {item.category}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9aa37f]">
            Team BEANbite
          </span>
        </div>
        <p className="text-base leading-relaxed text-[#5e5e5e]">{item.blurb}</p>
      </div>
    </button>

    <div className="mt-auto px-5 pb-5">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="inline-flex items-center gap-2 text-[15px] font-bold text-[#010851] transition-colors hover:text-[#414C00]"
      >
        See What&rsquo;s Inside
        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  </motion.article>
);

const DownloadModal = ({ item, onClose }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    office: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const firstField = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstField.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    FIELDS.forEach((f) => {
      if (f.name === "phone") return;
      if (!values[f.name].trim()) next[f.name] = "Required";
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
      next.email = "Enter a valid email";
    setErrors(next);
    if (Object.keys(next).length) return;
    onClose();
    navigate(`/checklists/${item.slug}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#1a1a1a]/60 p-4 sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} download form`}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto grid w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download form"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-[#5e5e5e] transition-colors hover:bg-[#F7F9F2]"
        >
          <X size={20} />
        </button>

        <div className="hidden bg-[#F7F9F2] p-8 md:block">
          <div className="rounded-xl border border-[#E4E9D8] bg-white px-5 py-4">
            <div className="flex items-baseline justify-between">
              <span className="text-[17px] font-extrabold tracking-tight text-[#010851]">
                BEAN<span className="text-[#AFCB12]">bite</span>
              </span>
              <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#9aa37f]">
                Checklist
              </span>
            </div>
            <div className="mt-1.5 h-[2px] bg-[#010851]/20" />
            <p className="mt-3 text-[17px] font-bold leading-snug text-[#1f1f1f]">
              {item.title}
            </p>
            <p className="mt-1 text-[11px] text-[#7c8566]">
              {item.pages} &middot; PDF
            </p>
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-[#5e5e5e]">
            What is inside
          </p>
          <ul className="mt-3 space-y-3">
            {item.inside.map((line) => (
              <li key={line} className="flex gap-2.5 text-[#5e5e5e]">
                <Check size={17} className="mt-0.5 shrink-0 text-[#010851]" />
                <span className="text-[15px] leading-snug">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-xl font-bold leading-snug text-[#1f1f1f] md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-[#5e5e5e]">
            {item.blurb}
          </p>
          <p className="mt-4 text-sm text-[#7c8566]">
            Tell us where to send it and we will take you straight to your
            download.
          </p>
          <form onSubmit={submit} noValidate className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.filter((f) => f.half).map((f, i) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="mb-1.5 block text-sm font-semibold text-[#414C00]"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    ref={i === 0 ? firstField : null}
                    type={f.type}
                    value={values[f.name]}
                    onChange={(e) =>
                      setValues({ ...values, [f.name]: e.target.value })
                    }
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-[#AFCB12] ${
                      errors[f.name] ? "border-rose-400" : "border-[#E4E9D8]"
                    }`}
                  />
                  {errors[f.name] && (
                    <p className="mt-1 text-xs text-rose-500">
                      {errors[f.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {FIELDS.filter((f) => !f.half).map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-1.5 block text-sm font-semibold text-[#414C00]"
                >
                  {f.label}
                  {f.name === "phone" && (
                    <span className="ml-1 font-normal text-[#9aa37f]">
                      (optional)
                    </span>
                  )}
                </label>
                <input
                  id={f.name}
                  type={f.type}
                  value={values[f.name]}
                  onChange={(e) =>
                    setValues({ ...values, [f.name]: e.target.value })
                  }
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-[15px] outline-none transition-colors focus:border-[#AFCB12] ${
                    errors[f.name] ? "border-rose-400" : "border-[#E4E9D8]"
                  }`}
                />
                {errors[f.name] && (
                  <p className="mt-1 text-xs text-rose-500">{errors[f.name]}</p>
                )}
              </div>
            ))}
            <CtaButton type="submit" fullWidth icon={Download}>
              Continue to download
            </CtaButton>
            <p className="text-xs leading-relaxed text-[#9aa37f]">
              We use these details to send you the checklist and occasional
              billing resources. No patient information is required.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const ChecklistSection = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHECKLISTS.filter(
      (c) =>
        (category === "All" || c.category === category) &&
        (!q || `${c.title} ${c.blurb} ${c.category}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <section className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
          BEANbite Checklists
        </h2>
        <p className="text-base leading-relaxed text-[#5e5e5e] max-w-[640px]">
          The same claim-by-claim routines our billing team runs every day. Tell
          us where to send one and it downloads straight away.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                category === c
                  ? "border-[#AFCB12] bg-[#AFCB12] text-[#1a2e05]"
                  : "border-[#E4E9D8] bg-white text-[#5e5e5e] hover:border-[#C5D92D]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-[300px]">
          <Search
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9aa37f]"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search checklists"
            aria-label="Search checklists"
            className="w-full rounded-full border border-[#E4E9D8] bg-white py-2.5 pl-10 pr-4 text-[15px] outline-none transition-colors focus:border-[#AFCB12]"
          />
        </div>
      </div>

      {results.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <ChecklistCard key={item.slug} item={item} onOpen={setActive} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-[#E4E9D8] bg-[#F7F9F2] px-6 py-12 text-center">
          <p className="text-base text-[#5e5e5e]">
            No checklist matches that search yet.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E4E9D8] bg-white px-4 py-2 text-sm font-semibold text-[#414C00] transition-colors hover:border-[#C5D92D]"
          >
            <RotateCcw size={15} /> Show all checklists
          </button>
        </div>
      )}

      {active && (
        <DownloadModal item={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
};

export default ChecklistSection;
