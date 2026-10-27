import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import {
  ShieldCheck,
  Search,
  MessagesSquare,
  ScrollText,
  Newspaper,
  FileText,
  FileSpreadsheet,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

// ================= CLIENT IMAGES =================
const column1 = [
  "/client/client13.svg",
  "/client/client14.webp",
  "/client/client3.png",
  "/client/client4.png",
];

const column2 = [
  "/client/client5.png",
  "/client/client6.png",
  "/client/client7.png",
  "/client/client8.jpg",
];

const column3 = [
  "/client/client9.jpg",
  "/client/client10.jpg",
  "/client/client11.jpg",
  "/client/client12.jpg",
  "/client/client15.png",
];

// ================= ANIMATION =================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const RESOURCES = [
  {
    name: "CAQH",
    cat: "Credentialing",
    format: "External",
    source: "caqh.org",
    icon: ShieldCheck,
    desc: "Single-source provider data used for most payer enrollment and re-attestation.",
    link: "https://www.caqh.org/solutions",
  },
  {
    name: "NPI LOOKUP",
    cat: "Credentialing",
    format: "External",
    source: "npiregistry.cms.hhs.gov",
    icon: Search,
    desc: "Verify an NPI, taxonomy and practice address before a claim goes out.",
    link: "https://npiregistry.cms.hhs.gov/search",
  },
  {
    name: "Medicare Dental Provider Enrollment & Coverage Information",
    cat: "Credentialing",
    format: "External",
    source: "cms.gov",
    icon: ShieldCheck,
    desc: "Coverage rules and enrollment guidance for dental providers, straight from CMS.",
    link: "https://www.cms.gov/medicare/coverage/dental",
  },
  {
    name: "FAQ's ADA MEDICARE",
    cat: "Credentialing",
    format: "External",
    source: "ada.org",
    icon: MessagesSquare,
    desc: "ADA answers to the Medicare enrollment questions practices ask most often.",
    link: "https://www.ada.org/resources/practice/legal-and-regulatory/medicare",
  },
  {
    name: "ADA CDT Information",
    cat: "Forms & coding",
    format: "External",
    source: "ada.org",
    icon: ScrollText,
    desc: "The current code set, revisions and effective dates behind every claim line.",
    link: "https://www.ada.org/publications/cdt",
  },
  {
    name: "2024 ADA Dental Claim News",
    cat: "Forms & coding",
    format: "External",
    source: "ada.org",
    icon: Newspaper,
    desc: "What changed on the claim form, and when carriers started enforcing it.",
    link: "https://www.ada.org/publications/cdt/ada-dental-claim-form",
  },
  {
    name: "Review 2024 ADA Dental Claim form",
    cat: "Forms & coding",
    format: "PDF",
    source: "ada.org",
    icon: FileText,
    desc: "Completion instructions, field by field, for the current claim form.",
    link: "https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/publications/cdt/2024_completioninstructions_adaclaimform_2024.pdf?rev=fdf22b01262a4fd59f414e5d568412f6&hash=ADCB4A07D15D2AD55256D627B669D023",
  },
  {
    name: "Sample Short form",
    cat: "BEANbite templates",
    format: "Template",
    source: "BEANbite",
    icon: FileSpreadsheet,
    desc: "The one-page fee schedule snapshot we build for a quick carrier read.",
    link: "#",
  },
  {
    name: "Sample Full breakdown form",
    cat: "BEANbite templates",
    format: "Template",
    source: "BEANbite",
    icon: FileSpreadsheet,
    desc: "The complete line-level fee analysis used during PPO negotiation.",
    link: "#",
  },
];

const RESOURCE_FILTERS = [
  "All resources",
  "Credentialing",
  "Forms & coding",
  "BEANbite templates",
];

// ================= RESOURCE CARD =================
const ResourceCard = ({ item }) => {
  const Icon = item.icon;
  const placeholder = item.link === "#";
  const action = placeholder
    ? "Request access"
    : item.format === "PDF"
      ? "Download PDF"
      : "Open resource";

  const classes =
    "group flex flex-col h-full rounded-2xl border border-[#E4E9D8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#AFCB12] hover:shadow-[0_14px_34px_rgba(65,76,0,0.10)]";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3 mb-5">
        <span className="w-11 h-11 rounded-xl bg-[#F7F9F2] border border-[#E4E9D8] flex items-center justify-center text-[#414C00] transition duration-300 group-hover:bg-[#AFCB12] group-hover:border-[#AFCB12] group-hover:text-white">
          <Icon size={20} />
        </span>
        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#414C00] bg-[#C5D92D]/20 border border-[#C5D92D]/45 rounded-md px-2 py-1">
          {item.format}
        </span>
      </div>

      <h3 className="text-[16px] font-bold text-[#141414] leading-snug mb-2">
        {item.name}
      </h3>
      <p className="text-[14px] text-[#5e5e5e] leading-relaxed mb-5">
        {item.desc}
      </p>

      <div className="flex items-center justify-between gap-3 border-t border-[#F0F2EA] pt-4 mt-auto">
        <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#809900]">
          {action}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
        <span className="flex items-center gap-1 text-[11.5px] text-[#9a9a9a]">
          {item.source}
          {!placeholder && <ExternalLink size={11} />}
        </span>
      </div>
    </>
  );

  if (placeholder) {
    return (
      <Link to="/contact" className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {inner}
    </a>
  );
};

// ================= VERTICAL SLIDER =================
const VerticalSlider = ({ images, duration }) => (
  <div className="overflow-hidden h-[500px]">
    <motion.div
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...images, ...images].map((img, i) => (
        <img
          key={i}
          src={img}
          alt="client"
          className="h-[150px] w-full object-contain bg-white p-4 rounded-xl shadow-sm"
        />
      ))}
    </motion.div>
  </div>
);

const ClientSuccess = () => {
  const swiperRef = useRef(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(RESOURCE_FILTERS[0]);
  const [nav, setNav] = useState({ beginning: true, end: false });

  const syncNav = (instance) =>
    setNav({
      beginning: instance?.isBeginning ?? true,
      end: instance?.isEnd ?? false,
    });

  const term = query.trim().toLowerCase();
  const visibleResources = RESOURCES.filter(
    (item) =>
      (filter === RESOURCE_FILTERS[0] || item.cat === filter) &&
      `${item.name} ${item.desc} ${item.source}`.toLowerCase().includes(term),
  );
  const isFiltering = term !== "" || filter !== RESOURCE_FILTERS[0];

  return (
    <div className="bg-white">
      {/* HEADER */}
      <InnerPageHeader title="Client Success" breadcrumb="Client Success" />

      {/* ================= CLIENT SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show">
          <span className="text-[#AFCB12] font-semibold mb-2 block">
            Our Clients
          </span>

          <h2 className="text-4xl font-bold mb-2">
            We Work With The Best <br /> Clients Success
          </h2>

          <p className="text-gray-600">
            We decided to deal with insurance carriers so that they prioritize
            patient care.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-3 gap-4 relative"
        >
          <VerticalSlider images={column1} duration={20} />
          <VerticalSlider images={column2} duration={16} />
          <VerticalSlider images={column3} duration={12} />

          <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>

      {/* ================= RESOURCES SECTION ================= */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"
          >
            <div>
              <span className="text-[#AFCB12] font-semibold mb-2 block">
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-[24ch]">
                The forms, trackers and references our team uses every day
              </h2>
            </div>

            <label className="flex items-center gap-2.5 w-full lg:w-[320px] rounded-full border border-[#E4E9D8] bg-white px-5 py-3 focus-within:border-[#AFCB12] transition">
              <Search size={16} className="text-[#9a9a9a] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources..."
                aria-label="Search resources"
                className="w-full outline-none text-[14px] bg-transparent text-[#141414] placeholder:text-[#9a9a9a]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="cursor-pointer text-[#9a9a9a] hover:text-[#414C00] transition shrink-0"
                >
                  <X size={15} />
                </button>
              )}
            </label>
          </motion.div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {RESOURCE_FILTERS.map((name) => {
              const active = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  aria-pressed={active}
                  className={`cursor-pointer rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                    active
                      ? "bg-[#414C00] text-white border border-[#414C00]"
                      : "bg-white text-[#5e5e5e] border border-[#E4E9D8] hover:border-[#AFCB12] hover:text-[#414C00]"
                  }`}
                >
                  {name}
                </button>
              );
            })}

            {isFiltering && (
              <span className="text-[12.5px] text-[#9a9a9a] ml-1">
                {visibleResources.length} of {RESOURCES.length} resources
              </span>
            )}

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous resources"
                disabled={nav.beginning}
                className="cursor-pointer w-10 h-10 rounded-full border border-[#E4E9D8] bg-white flex items-center justify-center text-[#414C00] hover:bg-[#C5D92D] hover:border-[#C5D92D] transition disabled:opacity-35 disabled:cursor-default disabled:hover:bg-white disabled:hover:border-[#E4E9D8]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next resources"
                disabled={nav.end}
                className="cursor-pointer w-10 h-10 rounded-full border border-[#E4E9D8] bg-white flex items-center justify-center text-[#414C00] hover:bg-[#C5D92D] hover:border-[#C5D92D] transition disabled:opacity-35 disabled:cursor-default disabled:hover:bg-white disabled:hover:border-[#E4E9D8]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {visibleResources.length > 0 ? (
            <Swiper
              key={`${filter}|${term}`}
              modules={[Keyboard]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              onSwiper={(instance) => {
                swiperRef.current = instance;
                syncNav(instance);
              }}
              onSlideChange={syncNav}
              onResize={syncNav}
              style={{ paddingBlock: 10, marginBlock: -10 }}
            >
              {visibleResources.map((item) => (
                <SwiperSlide key={item.name} style={{ height: "auto" }}>
                  <ResourceCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#E4E9D8] bg-[#F7F9F2] px-6 py-14 text-center">
              <p className="text-[#5e5e5e] mb-5">
                No resources match that search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter(RESOURCE_FILTERS[0]);
                }}
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-[#C5D92D] px-6 py-2.5 text-[13px] font-bold text-[#414C00] hover:bg-[#AFCB12] hover:text-white transition"
              >
                Show all resources
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= REUSABLE PARTNER SECTION ================= */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">
        <PartnerSection />
      </div>
    </div>
  );
};

export default ClientSuccess;
