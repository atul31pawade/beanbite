export const CHECKLISTS = [
  {
    slug: "4-dental-practice-metrics",
    file: "/checklist/beanbite-4-practice-metrics.pdf",
    title: "Four Numbers That Tell the Truth About Your Practice",
    blurb:
      "Production is not cash. These four ratios show where the gap is and which one to fix first.",
    category: "Practice Support",
    pages: "1 page",
    inside: [
      "Collection rate, adjustment rate, days in A/R and over-90 A/R",
      "Healthy ranges and what each number moving means",
      "How to read them together instead of one at a time",
    ],
  },
  {
    slug: "crown-claim-attachment-checklist",
    file: "/checklist/beanbite-crown-attachment.pdf",
    title: "Crown Attachment Checklist",
    blurb:
      "What to document and attach before a crown claim leaves the office.",
    category: "Insurance Billing",
    pages: "1 page",
    inside: [
      "Pre-op radiographs, photo set and the clinical note",
      "Initial versus replacement, margins and core work",
      "Answer language for the three denials you will actually get",
    ],
  },
  {
    slug: "dental-claim-status-note-template",
    file: "/checklist/beanbite-claim-status-notes.pdf",
    title: "How to Write Claim Notes Anyone Can Act On",
    blurb:
      "Keep every insurance follow-up clear, documented, and moving toward the next step.",
    category: "Practice Support",
    pages: "1 page",
    inside: [
      "The four questions every note answers",
      "Fill-in template with a worked example",
      "Rules that keep notes useful after handoff",
    ],
  },
  {
    slug: "core-buildup-d2950-attachment-checklist",
    file: "/checklist/beanbite-core-buildup-d2950.pdf",
    title: "Core Buildup (D2950) Attachment Checklist",
    blurb:
      "When it pays, when it bundles, and what proves the difference.",
    category: "Insurance Billing",
    pages: "1 page",
    inside: [
      "Same-visit bundling versus separate-visit payment",
      "What to document at the appointment",
      "How to answer a bundle denial without re-billing blind",
    ],
  },
  {
    slug: "srp-checklist",
    file: "/checklist/beanbite-srp-documentation.pdf",
    title: "SRP Documentation That Survives Review",
    blurb: "How to secure successful SRP claims every time",
    category: "Practice Support",
    pages: "1 page",
    inside: [
      "Six-point charting that actually supports the code",
      "Frequency-limit and benefits-year checks before you bill",
      "The evidence packet a reviewer expects to see",
    ],
  },
];

export const CATEGORIES = [
  "All",
  ...new Set(CHECKLISTS.map((c) => c.category)),
];

export const getChecklist = (slug) => CHECKLISTS.find((c) => c.slug === slug);
