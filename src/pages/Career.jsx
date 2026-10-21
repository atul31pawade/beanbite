import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Mail,
  TrendingUp,
  X,
  Upload,
  FileText,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import InnerPageHeader from "../components/InnerPageHeader";
import PartnerSection from "../components/PartnerSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobPosition: "",
    location: "",
    currentlyEmployed: "",
    reasonForChange: "",
    startAvailability: "",
    shift: "",
    applyingPosition: "",
    coverLetter: "",
    resume: null,
  });

  const jobs = [
    {
      title: "Entry-Level experience in Human Resources",
      meta: {
        location: "Ahmedabad, Indore",
        type: "Full Time",
        experience: "1 – 2 years full-cycle recruitment experience",
      },
      sections: [
        {
          heading: "Qualifications and Skills",
          list: [
            "PG:PG Diploma, MBA / PGDM in HR",
            "Prior experience in the staffing industry or Corporate HR, preferably with a global organization",
            "Prior 2 to 6 years’ experience sourcing and qualifying candidates for a variety of roles.",
            "Understanding of referral programs",
            "Sound judgment",
            "Excellent Oral and Written communication skills in English",
            "Basic MS office – Excel, PowerPoint & Word required",
            "An understanding of outsourcing processes in International Voice Process or AR Calling is a plus Maintain a high standard of confidentiality of all employee records and information",
          ],
        },
        {
          heading: "Job Description",
          text: "At BEANbite, we are exceptionally proud to provide high-quality, cost-effective solutions that encompass a wide range of tasks and processes for the healthcare industry. A key strength lies in our workforce, which brings extensive domain expertise and adheres to robust compliance standards.Our excellent management team coupled with a detailed eye for processes experienced and experienced manpower, enables us to deliver superior and cost-effective services to our clients in the United States of America. Candidate will have an Excellent learning platform with great opportunity to build career as he/she will assist with the Full-Cycle recruitment process for all positions.",
        },
        {
          heading: "Essential Functions",
          list: [
            "Design and update job descriptions and assist with the Full-Cycle recruitment process for all positions",
            "Understanding organization requirements with regard to their existing business activities.",
            "Source potential candidates from various online channels Craft recruiting emails to attract passive candidates",
            "Screen resumes and application forms.",
            "Evaluating candidates based on their communication, experience, technical skills, attitude, etc. Interview candidates (via phone, video and in-person)",
            "Prepare and distribute assignments and numerical, language, and logical reasoning tests",
            "Advertise job openings on the company’s careers page, social media, job boards and internally for referral",
            "Provide shortlists of qualified candidates to hiring managers",
            "Arranging an interview with the panel, collect feedback, follow up for candidates till offer or rejection.",
            "Generating and maintaining databases for future and current requirements.",
            "Send job offer emails and answer queries about compensation and benefits.",
            "Participate in job fairs and host in-house recruitment events Collaborate with managers to identify future hiring needs",
            "Act as a consultant to new hires and help them onboarding Process. End-to-end manage Campus Hiring.",
            "Expertise in sourcing and screening of candidates for the respective requirements.",
            "Candidates should have experience in different portals like Monster and Naukri, LinkedIn, and Other Job Portals.",
            "Good Interpersonal Relationship. Prepare Reports on different recruitment processes. Must be creative to try and implement different out-of-box hiring approaches",
            "Set up payroll processes and protocols.",
            "Design and update job descriptions",
            "Manage the onboarding process for all new hires",
            "Respond to reference checks and verifications of employment status",
            "Request for information and compile end-of-month reports",
            "Assist with benefits administration",
            "Performs data entry and personnel file maintenance",
            "Backup for payroll processing",
            "Assist with planning and implementing celebrations and events",
            "Assist the HR staff with projects",
            "Provide customer service to organization employees",
            "Performs other duties as assigned",
          ],
        },
        {
          heading: "Qualifications",
          list: [
            "Experience with Microsoft Word, Excel, and PowerPoint",
            "Entry-level experience in Human Resources",
            "1 -2 years full-cycle recruitment experience",
            "Strong interpersonal skills",
            "Must be able to communicate clearly, both written and orally",
            "Time-Management Skills",
          ],
        },
        {
          heading: "Who to contact?",
          text: "Email HR@ beanbite.com or WhatsApp +919384672312",
        },
        {
          heading: "Benefits",
          list: [
            "Food allowance",
            "Leave encashment",
            "Paid time off",
            "Provident Fund",
            "Dinner Allowances",
          ],
        },
        {
          heading: "Schedule",
          list: [
            "Evening shift",
            "Monday to Friday",
            "Night shift",
            "US shift",
          ],
        },
        {
          heading: "Supplemental pay types",
          list: ["Commission pay", "Joining & Referral Bonus", "Overtime pay"],
        },
        {
          heading: "Ability to commute/relocate",
          list: [
            "Satellite, Ahmedabad - 380015, Gujarat: Reliably commute or planning to relocate before starting work (Required)",
          ],
        },
        {
          text: "Do not apply if you are not experienced or not confident. We are looking for motivated candidates who can work independently. We are willing to provide an excellent remuneration to the ideal candidate.",
        },
        {
          text: "Salary & Appraisal – As per Industry Standards (Willing to negotiate for the right candidate)",
        },
      ],
    },
    {
      title: "Credentialing Associate/ Dental Associate",
      meta: {
        location: "Ahmedabad, Indore (India)",
        type: "Full-time",
      },
      sections: [
        {
          heading: "Responsibilities and Duties",
          list: [
            "Onboarding incoming dental practitioners by performing efficient and thorough verification of professional credentials.",
            "Efficient, error-free enrollment in all insurance carrier plans including Medicare, Medicaid, private insurance plans, and workers compensation plans.",
            "Initiating and maintaining clinical privileges and responding to all correspondence related to maintaining privileges, licensure efficiently with minimal lapse in time.",
            "Ensuring that all licenses, certification, malpractice insurance and enrollment statuses of all providers remain active. Timely completion of re-validation applications.",
            "Coordinate and maintain a tracking database for provider contracts and re-validation, re-credentialing and enrollment applications and correspondence.",
          ],
        },
        {
          heading: "Required Experience, Skills and Qualifications",
          list: [
            "Should have a minimum of 1-3 year experience or fresher with excellent academic with English medium and minimum 65% marks throughout academics.",
            "Ability to work under minimum supervision and demonstrate strong initiative.",
            "Ability to recognize, evaluate, solve problems, and correct errors, and to develop processes that eliminate redundancy.",
            "Ability to conceptualize work flow, develop plans, and implement appropriate actions.",
            "Ability to communicate effectively in writing, over the telephone, and in person.",
            "Skill in establishing and maintaining effective working relationships with other employees, middle and senior management in the organization.",
            "Proficient in Microsoft Office, including Outlook, PPT, Word, and Excel.",
            "Should be flexible to work in night shifts.",
          ],
        },
        {
          text: "Send your resume via indeed & Skype https://join.skype.com/invite/CJ1bS7AZ0To5",
        },
        {
          heading: "Benefits",
          list: [
            "Excellent working atmosphere.",
            "Salary and bonus always paid on-time.",
            "You work for a US corporation.",
            "Very supportive senior management.",
            "Dinner for night shift.",
            "Referral bonus up to Rs.3000.",
          ],
        },
        {
          heading: "Job Details",
          list: [
            "Job Type: Full-time",
            "Salary: ₹20,000.00 - ₹25,000.00 per month",
            "Education: Bachelor's (Required)",
            "Language: English (Preferred)",
            "Shift availability: Night Shift",
          ],
        },
      ],
    },
    {
      title: "EOB / Payment Posting / Dental Billing",
      meta: {
        type: "Full-time",
      },
      sections: [
        {
          heading: "Job description",
          list: [
            "Strong in all Data process",
            "Ability to multi-task",
            "Excellent analytical skills and flexible to work in both day and night shifts",
            "Should have worked with dental billing charge entry for a minimum of 1 year",
            "Worked in multiple dental billing software's",
          ],
        },
        {
          heading: "Responsibilities and Duties",
          list: [
            "Responsible for processing all insurance & patient payments",
            "Charge corrections, refunds, and adjustments in accordance with cash posting procedures",
            "Review of insurance payment amounts to determine if appropriate levels of reimbursement are being met",
            "Provide information to internal AR staff so that they can contact various insurance companies and patients to resolve problems relating to reimbursement/payment",
            "Preparation of lockbox receipts including control book entry for reconciliation",
          ],
        },
        {
          heading: "Key Skills",
          list: [
            "Through your previous experience in Medical/Dental Billing",
            "Excel, Internet Research, web research",
            "Good written and spoken English",
            "Enthusiasm and positive attitude",
            "Willingness to learn and adapt",
          ],
        },
        {
          heading: "Benefits",
          list: [
            "Excellent pay as per Industry Standard",
            "Best training on multiple skills",
            "Planned career growth",
          ],
        },
        {
          heading: "Why you should join BEANbite?",
          list: [
            "Excellent working atmosphere",
            "Salary and bonus always paid on time",
            "You work for a US corporation",
            "Very supportive senior management",
            "Referral bonus up to Rs.3000",
          ],
        },
        {
          heading: "Job Details",
          list: [
            "Job Type: Full-time",
            "Salary: ₹13,000.00 - ₹20,000.00 per month",
            "Experience: Payment Posting: 1 year (Preferred), Dental Billing: 1 year (Required)",
            "Education: Bachelor's (Required)",
            "Language: English (Required)",
            "Shifts: Morning or Night (Preferred)",
          ],
        },
      ],
    },
    {
      title: "Data Entry Executive",
      meta: {
        type: "Full-time",
      },
      sections: [
        {
          heading: "Job description",
          text: "BEANBITE INDIA PVT LTD, with its headquarters in California, USA is a leading Dental Billing Company in Ahmedabad, Gujarat. We provide complete Dental RCM services to the Dentists & DSOs across USA. As we are expanding, we are looking for experienced & fresher candidates to join our awesome team.",
        },
        {
          heading: "Job Summary",
          text: "Responsible for carrying out data work such as",
          list: [
            "Pulling Appointment reports from the dental software",
            "uploading forms in software along with MS Excel.",
            "Entering fee schedules",
            "Basic data entry like entering patient name, address, phone # etc",
            "Creating web logins and passwords",
          ],
        },
        {
          heading: "Job Requirement",
          list: [
            "Minimum 50% in 10th and 12th",
            "Bachelor's degree in any field",
            "Knowledge of Microsoft Office tools - word, excel, PowerPoint",
            "Computer Savvy",
            "Freshers are welcome to apply - on-the-job training will be provided.",
          ],
        },
        {
          heading: "Job Details",
          list: [
            "Job Type: Full-time",
            "Salary: ₹16,000.00 - ₹25,000.00 per month",
            "Benefits: Food allowance, Life insurance, Provident Fund",
            "Shift availability: Night shift, WORK FROM OFFICE",
            "Supplemental pay types: Joining bonus, Yearly bonus",
            "Education: Bachelor's (Required)",
            "Experience: Internet and computer knowledge; Microsoft Word, PowerPoint & Excel: 1 year (Required)",
            "Language: English (Required)",
          ],
        },
      ],
    },
    {
      title: "JOB - EV, AR and Sr.AR",
      subJobs: [
        {
          title: "Eligibility Verifications Specialist (Dental Billing)",
          meta: {
            location: "Ahmedabad",
            type: "Permanent Job, Full Time",
          },
          sections: [
            {
              heading: "Job description",
              text: "Responsible for calling insurance companies in US on behalf of dental office to verify Dental insurance coverage.",
            },
            {
              heading: "Preferred skills:",
              list: [
                "Any Science or Math graduate",
                "10th, 12th & College Average >60%",
                "Excellent Oral and Written communication skills in English.",
                "The person should be good in MS office",
                "Willing to work in night shift.",
                "Candidates with international voice experience (1yr) and Less than a year in AR Calling can also apply.",
              ],
            },
            {
              heading: "Benefits:",
              list: [
                "Salary & Appraisal – As per Industry Standards",
                "Monthly Performance Incentives",
                "Excellent learning platform with great opportunity to build career in Dental Billing",
                "Quarterly Rewards & Recognition Program up to Rs.5000/-",
                "Dinner for Night Shift (8PM-5AM)",
                "Medical Insurance Coverage",
                "Referral Bonus",
              ],
            },
            {
              heading: "Salary:",
              text: "INR 14,000 for freshers (after 3 months' probation; salary will be revised based on performance); or INR 25,000/M ++++ for experienced 3 + years",
            },
            {
              heading: "Job Details",
              list: [
                "Industry: BPO / Call Centre / ITES",
                "Functional Area: ITES , BPO , KPO , LPO , Customer Service , Operations",
                "Role Category: Voice",
                "Role: Associate/Senior Associate -(Non-Technical)",
                "Employment Type: Permanent Job, Full Time",
                "Key skills: Microsoft Office; Ability to communicate, Meticulous and Add positive value",
              ],
            },
            {
              heading: "Desired Candidate Profile",
              list: [
                "Excellent communication in English",
                "Exp in Dental Eligibility Verification",
                "10th and 12th -Average over 60% is a must",
                "Preferable College Degree in Science or Math or Accounting",
                "Looking for immediate joinee,",
                "Night Shift 6.00Pm to 3.00am",
                "Share your CV to info@beanbite.com",
              ],
            },
          ],
        },
        {
          title: "Walk in Drive for AR Callers _DENTAL RCM",
          meta: {
            location: "Ahmedabad",
            type: "Permanent Job, Full Time",
          },
          sections: [
            {
              heading: "Job description",
              text: "Post: Account Receivable Executive",
            },
            {
              heading: "Salary:",
              text: "INR 2,50,000 to 3,00,000 INR CTC (Negotiable for right / experienced candidate)",
            },
            {
              heading: "Shift time:",
              text: "Night shift",
            },
            {
              heading: "Key role:",
              list: [
                "Responsible for calling Insurance companies (in US) and follow up on outstanding Accounts Receivable.",
                "Understand the client requirements and specifications of the project",
                "Ensure that the deliverable to the client",
                "Adhere to quality standards.",
                "Outbound calls to insurances for claim status and eligibility verification",
                "Denial documentation and taking further action",
                "Calling the insurance carriers based on the appointment received by the clients.",
                "Working on the outstanding claims reports/account receivable reports received from the client or generated from the specific client software.",
                "Calling insurance companies to get the status of the unpaid claims.",
                "Willing to work in any process pertaining to voice based on the requirement (Insurance Follow UP, Patient calling, Provider outreach program etc.)",
                "Maintain the individual daily logs.",
                "Performs assigned tasks/ completes targets with speed and accuracy as per client SLAs",
                "Work cohesively in a team setting. Assist team members to achieve shared goals.",
                "Compliance with BEANbite's Information Security Policy, client/project guidelines, business standards",
              ],
            },
            {
              heading: "Job Details",
              list: [
                "Functional Area: ITES , BPO , KPO , LPO , Customer Service , Operations",
                "Role Category: Voice",
                "Employment Type: Permanent Job, Full Time",
              ],
            },
            {
              heading: "Benefits:",
              list: [
                "Salary & Appraisal – As per Industry Standards",
                "Monthly Performance Incentives",
                "Excellent learning platform with great opportunity to build career in Dental Billing",
                "Quarterly Rewards & Recognition Program up to Rs.5000/-",
                "Dinner for Night Shift (8PM-5AM)",
                "Medical Insurance Coverage",
                "Referral Bonus",
              ],
            },
            {
              heading: "Desired Candidate Profile",
              list: [
                "Excellent communication in English",
                "10th and 12th -Average over 60% is a must",
                "Preferable College Degree in Science or Math or Accounting",
                "Exp in Dental AR",
                "Looking for an immediate joiner",
                "Night Shift 7:00 pm to 4:00 am",
                "Share your CV to info@beanbite.com",
              ],
            },
          ],
        },
        {
          title: "Associate / Sr. Associate (Dental Billing)",
          meta: {
            location: "Ahmedabad",
            type: "Permanent Job, Full Time",
          },
          sections: [
            {
              heading: "Job description",
              list: [
                "Work directly with the insurance company, healthcare provider, and patient to get a claim processed and paid",
                "Review and appeal unpaid and denied claims",
                "Verify patient's insurance coverage",
                "Demographic entry of the patient's information.",
                "Use coded data to produce and submit claims to insurance companies.",
                "Pay and process claims within designated authority level.",
                "Timely and accurate processing of claims based on edits and business rules/navigators.",
                "Report any discrepancies found in the system to the Team Leader/Manager or client for further handling, resolution and reporting to designated department for immediate correction",
                "Review insurance claim forms and related documents for completeness and make appropriate decisions regarding claims processing.",
                "Handle collections on unpaid accounts",
                "Report overpayments, underpayments, and other irregularities",
                "Meet individual and departmental standards with regards to quality and productivity.",
                "Ability to handle protected health information in a manner consistent with the Health Insurance Portability and Accountability (HIPAA)",
              ],
            },
            {
              heading: "Job Details",
              list: [
                "Salary: INR - 2,50,000 –3,000,000 P.A. (Experienced Candidate only)",
                "Industry: BPO / Call Centre / ITES",
                "Functional Area: ITES , BPO , KPO , LPO , Customer Service , Operations",
                "Role Category: Voice",
                "Role: Associate/Senior Associate -(Non-Technical)",
                "Employment Type: Permanent Job, Full Time",
              ],
            },
            {
              heading: "Benefits:",
              list: [
                "Salary & Appraisal – As per Industry Standards",
                "Monthly Performance Incentives",
                "Excellent learning platform with great opportunity to build career in Dental Billing",
                "Quarterly Rewards & Recognition Program up to Rs.5000/-",
                "Dinner for Night Shift (6PM-3PM)",
                "Medical Insurance Coverage",
                "Referral Bonus",
              ],
            },
            {
              heading: "Desired Candidate Profile",
              list: [
                "Excellent communication in English",
                "Exp in Dental AR",
                "10th and 12th -Average over 60% is a must",
                "Preferable College Degree in Science or Math or Accounting",
                "Looking for immediate joiner,",
                "Night Shift 6.00Pm to 3.00am",
                "Share your CV to info@beanbite.com",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "JOB - OM & Tele Caller",
      subJobs: [
        {
          title: "Manager - Operations – 1",
          meta: {
            location: "Ahmedabad",
            type: "Full-time",
          },
          sections: [
            {
              heading: "Job description",
              list: [
                "Shift Time: Night Shift Either 7pm-5AM",
                "Education: Graduation",
                "Location: Ahmedabad",
                "Experience: 12 + yrs of experience in the industry – minimum 5 years in a similar domain",
                "Span of Control: 200 to 400",
              ],
            },
            {
              heading: "Job Requirement:",
              list: [
                "This profile would need to co-ordinate with multiple project managers as he or she will be managing the entire day shift span for Dental RCM.",
                "Prepares work orders, follow up client request, mail out daily reports ensure clients systems are updated.",
                "Defines and implements planning approach for project delivery and refines as needed.",
                "Defines delivery goals along with management and communicates goals to the team",
                "Implement overall process and systems to maximize productivity and quality",
                "Automates as many tasks within the delivery process as possible",
                "Ensures that change requests made by the client are immediately implemented",
                "Defines and implements project-specific monitoring methodology, such as daily/monthly metrics",
                "Monitors multiple client sub-projects across all functions and ensures client SLAs are met consistently at the internal productivity norms agreed upon",
                "Assists management in monitoring planning projections and delivery costs, and making adjustments proactively",
                "Ensures client delivery follows all applicable industry regulations",
                "Primary point of contact for team management and client counterpart on delivery related issues/queries",
                "Prepares production details for invoicing and sends to client manager for approval",
                "Updates client counterparts on project performance through memos/ summary reports/phone calls",
                "Bring in process efficiencies to help the team reduce the deliverables timelines drastically ,Sets a different benchmark , completion of work by the team within the desired work hours ( no extended hrs)",
                "Carries out random audits and implements defect prevention techniques",
                "Handles client relationship extremely well which opens opportunity for more business.",
                "Consistently mine the existing clients , create new line of business, add to the revenues significantly,",
                "Continuous process improvements and automation suggestions which has impacted revenue growth and project deliverables and can be replicated in other processes",
                "Plan and Create a good backup of resources to take care of contingency plan (attrition, new projects etc)",
                "Attrition maintained per the company’s standard",
                "Creating healthy competition in the team to keep up the performance level high",
                "Assists management in transitioning overall projects",
                "Assists management in budgeting and delivery related projections",
                "Preferably with Medical Billing Experience with Provider or with Payer side experience.",
              ],
            },
            {
              heading: "Responsibilities :",
              list: [
                "Conducts appraisals/reviews for team",
                "Implements company policies and processes within the team.",
                "Identifies and nurtures talent",
                "Works on cultural fit in the team and counsels team members on work-related and personal issues",
                "Keeps team motivated under stressful conditions and acts as the “go-to” person for delivery staff",
                "Understands different working styles and adapts management style to maximize value from staff",
                "Capitalizes and improves skills of employees on project bench",
                "Determines staffing needs and generates job requisitions",
              ],
            },
            {
              heading: "Key skills:",
              list: [
                "Should have good written and oral communication skills",
                "Grasping and ability to learn fast",
                "Should have analyzing skills and reasoning skills",
                "Should have advanced Excel Skills",
                "Should have people management skills",
                "Should have training, coaching, mentoring skills",
                "Should have prior experience in handling clients and teams",
                "Has in-depth domain expertise and can either resolve queries at his/her level or is able to direct query to the most appropriate resource (in-house expert, client, etc)",
                "Has an in-depth operational understanding of process to suggest improvements to management and client counterparts",
                "Drive project specific knowledge initiatives.",
                "Ability to absorb key learning’s and applies to own project",
                "Identifies best practices in delivery methods and implements across project",
                "Ability to implement cross training across projects and across processes",
                "Should have excellent communications kills",
                "Should have conflicts resolutions skills",
                "Should be able to manager large team",
              ],
            },
            {
              heading: "Salary:",
              text: "Up to ₹45,000.00 – 65,000 per month",
            },
          ],
        },
        {
          title: "Tele Caller Executive (US Process) - 10 openings",
          meta: {
            location: "Ahmedabad",
            type: "Full-time, Fresher, Walk-In",
          },
          sections: [
            {
              heading: "Job description",
              text: "We are looking for dynamic candidates to join our organization. The job responsibilities include communicating with Dental Insurances to obtain; the benefit detail of the patient's dental policy as well status of the outstanding dental claims. The candidate should possess a thorough understanding of the Dental Billing operation.",
            },
            {
              heading: "Job Details",
              list: [
                "Designation: Client Service Executive (Voice)",
                "Night Shift: Night Shift",
              ],
            },
            {
              heading: "Job Requirement:",
              list: [
                "Communicating with Patient's Dental Insurance",
                "Inquiring about the Dental policy benefit information as well as outstanding claims",
                "Understanding the additional guidelines which might affect the coverage",
                "Obtaining the benefit information on required template",
              ],
            },
            {
              heading: "Eligibility Criteria:",
              list: [
                "Education: Diploma, Under Graduate, Graduate or equivalent",
                "Prior experience in Dental Billing is preferred",
                "Familiarity with CDT, ADA, HIPAA will be advantageous",
                "Excellent organizational skills and attention to detail",
                "Outstanding written and verbal communication skills in English",
                "Top-notch interpersonal skills with a commitment to excellent client service",
                "Capacity to work with sensitive patient information while maintaining confidentiality",
                "Ability to work in US Shift Timings (Night Shift)",
                "Typing Speed 40 WPM or more with minimum 95% accuracy",
                "Familiar with MS Office applications",
                "Freshers can also apply",
              ],
            },
            {
              heading: "Benefits:",
              list: [
                "Fix Salary, Monthly Incentive, Insurance, In-Shift Meal, etc",
                "No salary bar for right Candidates.",
              ],
            },
            {
              heading: "Contact:",
              list: [
                "Job Types: Full-time, Fresher, Walk-In",
                "Salary: Up to ₹20,000.00 -25,000 per month",
              ],
            },
            {
              heading: "Benefits:",
              list: ["Food allowance", "Health insurance", "Life insurance"],
            },
            {
              heading: "Schedule:",
              list: ["Monday to Friday", "Night shift", "US shift"],
            },
            {
              heading: "Supplemental Pay:",
              list: ["Performance bonus"],
            },
            {
              heading: "COVID-19 considerations:",
              text: "Regular Hand Sensitization, Body Temperature reading at the time of Log-in and log-out. Mandatory Vaccination.",
            },
            {
              heading: "Experience:",
              list: ["Total work: 1 year (Preferred)"],
            },
            {
              heading: "About BEANbite",
              text: "BEANbite is a US based dental billing and credentialing company, providing end to end remote support to US clients. Our clients are sing and group dental practices. We provide support with",
              list: [
                "Insurance Verification",
                "Dental Billing",
                "Dental Claims management",
                "Dental provider credentialing",
                "And general admin support to dental practices.",
              ],
            },
            {
              heading: "Our Mission:",
              text: "BEANbite aims to be a company that adds significant value to the Dental outsourcing industry, bring innovation, help uplift companies and enrich the professional skills of people serving the industry.",
            },
            {
              heading: "Our Vision:",
              text: "Our vision with BEANbite in the long run is to establish a brand that becomes a go-to company for US Dental Practices looking to outsource dental billing and credentialing in order to help to meet their business objectives.",
            },
            {
              heading: "Our Values:",
              text: "Our core values include Honesty, Integrity, Transparency, Humility, Client Success, Efficiency, Excellency, Innovation, Agility, Leadership, Consultative Approach and Work Life Balance while our biggest strength is our people.",
            },
          ],
        },
      ],
    },
    {
      title: "US Dental Billing US Medical Billing",
      meta: {
        location: "Indore, M.P.",
        type: "Regular / Permanent, Full-time",
      },
      sections: [
        {
          heading: "Company description:",
          text: "BEANBITE INDIA PVT LTD, with its headquarters in California, USA, is a leading Dental Billing Company in Ahmedabad, Gujarat. We provide complete Dental RCM services to Dentists & DSOs across the USA. As we are expanding, we are looking for experienced & fresher candidates to join our awesome team.",
        },
        {
          heading: "Job Summary:",
          text: "Responsible for carrying out data work like pulling reports from the software and uploading forms in software (US Shift-2 pm to 11 pm)",
        },
        {
          heading: "Job Location:",
          list: [
            "Job Location: Indore, M.P.",
            "Temporary location : Work from Home with the required laptop & good-speed internet",
            "Job Type: Full-time",
            "Bond: 1 Year",
          ],
        },
        {
          heading: "Responsibilities and Duties:",
          list: [
            "Extract Data from Web",
            "Pull Reports on Daily Basis",
            "Upload Forms into Software",
          ],
        },
        {
          heading: "Qualifications and Skills:",
          list: [
            "ITI/Diploma/Bachelors/Masters/Any other course in Computers",
            "Excellent in MS Office - Excel.",
            "Willing to work in Night Shift.",
            "Good in reading & understanding communication skills in English.",
          ],
        },
        {
          heading: "Benefits:",
          list: [
            "5 Working days in a week",
            "Salary & Appraisal – As per Industry Standards",
            "Dinner Allowances in office premises",
            "Work from office only",
          ],
        },
        {
          heading: "Job Details",
          list: [
            "Job Types: Regular / Permanent, Full-time",
            "Salary: ₹12,500.00 - ₹15,000.00 per month",
            "Benefits: Food allowance, Leave encashment, Provident Fund",
            "Shift availability: Day shift or Night Shift (Ideal candidate), Monday to Friday",
            "Supplemental pay types: Joining bonus, Yearly bonus",
            "Education: Bachelor's (Required)",
            "Experience: Medical billing: 1 year (Preferred); Microsoft Excel: 1 year (Required)",
          ],
        },
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  const openModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData({ ...formData, applyingPosition: jobTitle });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    closeModal();
  };

  const metaLine = (job) =>
    [
      job.meta?.type,
      job.meta?.location,
      job.meta?.experience ? `Experience: ${job.meta.experience}` : null,
    ]
      .filter(Boolean)
      .join("  –  ");

  const renderJobRow = (job, expandKey, showLabel = true) => (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          {showLabel && (
            <p className="text-xs text-[#AFCB12] font-semibold mb-1 uppercase">
              OPEN ROLES
            </p>
          )}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
            {job.title}
          </h3>
          <p className="text-xs text-gray-500">{metaLine(job)}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Expand Arrow Button */}
          <motion.button
            onClick={() => toggleExpand(expandKey)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center transition-all ${
              expandedJob === expandKey
                ? "bg-[#384d14] text-white border-[#384d14]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <motion.div
              animate={{ rotate: expandedJob === expandKey ? 180 : 0 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal(job.title)}
            className="flex items-center gap-2 bg-[#C5D92D] border border-1 border-[#384d14] text-[#1a2e05] font-bold px-2 py-2 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group cursor-pointer"
          >
            Apply Now
            <motion.div
              whileHover={{ x: 5 }}
              className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white"
            >
              <TrendingUp size={18} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Expandable Content Area */}
      <AnimatePresence>
        {expandedJob === expandKey && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 text-gray-600">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                {/* Meta chips */}
                {job.meta && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(job.meta).map(([key, value]) => (
                      <span
                        key={key}
                        className="text-xs font-semibold bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-700"
                      >
                        <span className="uppercase tracking-wide text-[#AFCB12] mr-1">
                          {key}:
                        </span>
                        {value}
                      </span>
                    ))}
                  </div>
                )}

                {job.sections ? (
                  job.sections.map((section, i) => (
                    <div key={i} className="mb-5 last:mb-0">
                      {section.heading && (
                        <h4 className="font-bold text-gray-900 mb-2">
                          {section.heading}
                        </h4>
                      )}
                      {section.text && (
                        <p
                          className={`text-sm leading-relaxed ${section.list ? "mb-2" : ""}`}
                        >
                          {section.text}
                        </p>
                      )}
                      {section.list && (
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {section.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Job Description
                    </h4>
                    <div className="space-y-3 text-sm leading-relaxed mb-6">
                      {job.description.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {job.subRoles && (
                      <div className="mb-6 space-y-4">
                        {job.subRoles.map((role) => (
                          <div key={role.name}>
                            <h5 className="font-bold text-gray-800 text-sm mb-2">
                              {role.name}
                            </h5>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {role.points.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {job.responsibilities && (
                      <>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Responsibilities &amp; Duties
                        </h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    <h4 className="font-bold text-gray-900 mb-2">
                      Required Experience, Skills &amp; Qualifications
                    </h4>
                    <ul className="list-disc pl-5 text-sm space-y-1 mb-6">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>

                    {job.benefits && (
                      <>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Benefits
                        </h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {job.benefits.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {job.apply && (
                      <p className="mt-6 text-sm font-semibold text-gray-800 border-t border-gray-200 pt-4">
                        How to apply: {job.apply}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-gray-800 antialiased bg-white"
      >
        <InnerPageHeader title="Career" breadcrumb="Career" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-10">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              variants={fadeInLeft}
              whileInView="whileInView"
              initial="initial"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Work at <br /> BEANbite
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                At Beanbite, we foster an environment of justice and openness so
                that our employees may thrive. We think that by consistently
                encouraging and guiding our employees, we can all work together
                to achieve success.
              </p>
              <p className="text-sm font-semibold text-gray-800 mb-2">
                OR CONTACT US WITH
              </p>
              <a
                href="mailto:info@BEANbite.com"
                className="text-[#AFCB12] text-base underline hover:text-[#C5D92D] transition-colors"
              >
                info@BEANbite.com
              </a>
            </motion.div>

            {/* RIGHT SIDE JOB LIST WITH EXPANDABLE SECTION */}
            <motion.div
              variants={staggerContainer}
              whileInView="whileInView"
              initial="initial"
              className="divide-y divide-gray-200"
            >
              {jobs.map((job, index) =>
                job.subJobs ? (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="py-6"
                  >
                    <p className="text-xs text-[#AFCB12] font-semibold mb-1 uppercase">
                      OPEN ROLES
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                      {job.title}
                    </h3>
                    <div className="border-l-2 border-[#C5D92D] pl-4 md:pl-6 space-y-6">
                      {job.subJobs.map((sub, si) => (
                        <div key={si}>
                          {renderJobRow(sub, `${index}-${si}`, false)}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="py-6"
                  >
                    {renderJobRow(job, `${index}`)}
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
          <PartnerSection />
        </div>
      </motion.div>

      {/* MODAL SECTION */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 z-50"
              onClick={closeModal}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for Position
                  </h2>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700"
                        placeholder="Your Phone"
                      />
                      <select
                        name="jobPosition"
                        value={formData.jobPosition}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          Where did you hear about this position?
                        </option>
                        <option value="Indeed">Indeed</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Google">Google</option>
                        <option value="Referred by a friend">
                          Referred by a friend
                        </option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          Interested Location
                        </option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Remote">Remote</option>
                      </select>
                      <select
                        name="currentlyEmployed"
                        value={formData.currentlyEmployed}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          Are you currently employed?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select
                        name="reasonForChange"
                        value={formData.reasonForChange}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          Reason for seeking a new job?
                        </option>
                        <option value="Increase in salary">
                          Increase in salary
                        </option>
                        <option value="Poor management or leadership">
                          Poor management or leadership
                        </option>
                        <option value="Limited growth or advancement">
                          Limited growth or advancement
                        </option>
                        <option value="Work life imbalance">
                          Work life imbalance
                        </option>
                      </select>
                      <select
                        name="startAvailability"
                        value={formData.startAvailability}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          How soon can you start?
                        </option>
                        <option value="Immediate">Immediate</option>
                        <option value="1 Week">1 Week</option>
                        <option value="2 Weeks">2 Weeks</option>
                        <option value="1 Month">1 Month</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select
                        name="shift"
                        value={formData.shift}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white"
                      >
                        <option value="" disabled>
                          Preferred Shift
                        </option>
                        <option value="Day Shift">Day Shift</option>
                        <option value="Night Shift">Night Shift</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      <input
                        type="text"
                        name="applyingPosition"
                        value={formData.applyingPosition}
                        readOnly
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
                      />
                    </div>

                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] resize-none text-gray-700"
                      placeholder="Cover letter"
                    />

                    <div>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#C5D92D] transition-colors relative">
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="resume-upload"
                          required
                        />
                        <label
                          htmlFor="resume-upload"
                          className="cursor-pointer"
                        >
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm text-gray-600 mb-1">
                            Upload CV/Resume
                          </p>
                          <p className="text-xs text-gray-500">
                            Allowed: pdf, doc, docx
                          </p>
                        </label>
                      </div>
                      {formData.resume && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                          <FileText size={16} />
                          <span>{formData.resume.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 accent-[#C5D92D]"
                      />
                      <label className="text-xs text-gray-500 leading-relaxed">
                        By using this form you agree with the storage and
                        handling of your data by this website.
                      </label>
                    </div>

                    <div className="flex">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 bg-[#C5D92D] border-2 border-[#384d14] text-[#1a2e05] font-bold px-6 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group"
                      >
                        Submit Application
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white"
                        >
                          <TrendingUp size={16} />
                        </motion.div>
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Career;
