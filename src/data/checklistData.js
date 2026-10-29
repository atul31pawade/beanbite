export const CHECKLISTS = [
  {
    slug: "4-dental-practice-metrics",
    file: "/resources/4-dental-practice-metrics.pdf",
    title: "4 Dental Practice Metrics You Should Be Tracking",
    blurb:
      "Use these four numbers to quickly spot where revenue may be slipping through the cracks.",
    category: "Practice Support",
    pages: "2 pages",
    inside: [
      "Collection ratio measured the useful way",
      "Days in A/R and the over-90 bucket",
      "Denial and rework rate grouped by reason",
    ],
  },
  {
    slug: "crown-claim-attachment-checklist",
    file: "/resources/crown-claim-attachment-checklist.pdf",
    title: "Crown Claim Attachment Checklist",
    blurb:
      "A quick checklist for sending the documentation insurers need with your dental crown claims.",
    category: "Insurance Billing",
    pages: "2 pages",
    inside: [
      "Pre-authorization checks before delivery",
      "Photo and radiograph requirements",
      "Attachment naming and transmission hygiene",
    ],
  },
  {
    slug: "dental-claim-status-note-template",
    file: "/resources/dental-claim-status-note-template.pdf",
    title: "Dental Claim Status Note Template",
    blurb:
      "Keep every insurance follow-up clear, documented, and moving toward the next step.",
    category: "Practice Support",
    pages: "2 pages",
    inside: [
      "Header, status, action and next step",
      "Worked examples for four common stalls",
      "Rules that keep notes useful after handoff",
    ],
  },
  {
    slug: "core-buildup-d2950-attachment-checklist",
    file: "/resources/core-buildup-d2950-checklist.pdf",
    title: "Core Buildup (D2950) Attachment Checklist",
    blurb:
      "Know exactly what to document and attach before you submit a core buildup claim.",
    category: "Insurance Billing",
    pages: "2 pages",
    inside: [
      "Which payers bundle D2950 into the crown fee",
      "Notes that survive a claims review",
      "How to respond to each denial reason",
    ],
  },
  {
    slug: "srp-checklist",
    file: "/resources/srp-claim-checklist.pdf",
    title: "SRP Checklist",
    blurb: "How to secure successful SRP claims every time",
    category: "Practice Support",
    pages: "2 pages",
    inside: [
      "Periodontal charting that actually supports the code",
      "Frequency-limit and benefits-year checks",
      "The evidence packet reviewers expect to see",
    ],
  },
];

export const CATEGORIES = [
  "All",
  ...new Set(CHECKLISTS.map((c) => c.category)),
];

export const getChecklist = (slug) => CHECKLISTS.find((c) => c.slug === slug);
