import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, TrendingUp, X, Upload, FileText } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import InnerPageHeader from '../components/InnerPageHeader';
import PartnerSection from "../components/PartnerSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobPosition: '',
    location: '',
    currentlyEmployed: '',
    reasonForChange: '',
    startAvailability: '',
    shift: '',
    applyingPosition: '',
    coverLetter: '',
    resume: null
  });

  const jobs = [
    {
      title: "Entry-Level experience in Human Resources",
      experience: "1-2 Year",
      location: "Ahmedabad",
      description: "We are looking for a motivated HR Associate to join our team. You will assist with recruitment, onboarding, and employee relations processes.",
      requirements: ["Bachelors in HR or related field", "Excellent communication skills", "Basic knowledge of labor laws"]
    },
    {
      title: "Credentialing Associate/ Dental Associate",
      experience: "1-2 Year",
      location: "Ahmedabad",
      description: "Responsible for processing provider credentialing and re-credentialing applications. High attention to detail is required for data verification.",
      requirements: ["Experience in Dental Credentialing", "Knowledge of CAQH and PECOS", "Proficiency in MS Office"]
    },
    {
      title: "EOB / Payment Posting / Dental Billing",
      experience: "1-2 Year",
      location: "Ahmedabad",
      description: "Focus on accurate entry of payments, adjustments, and denials from Insurance companies (EOB/ERA) into the billing system.",
      requirements: ["Experience in Dental Billing", "Understanding of EOBs", "Numerical accuracy and speed"]
    },
    {
      title: "Data Entry Executive",
      experience: "1-2 Year",
      location: "Ahmedabad",
      description: "Maintain database by entering new and updated customer and account information accurately and efficiently.",
      requirements: ["Fast typing speed", "High school diploma or equivalent", "Strong attention to detail"]
    },
    {
      title: "JOB - EV, AR and Sr.AR",
      experience: "1-2 Year",
      location: "Ahmedabad",
      description: "Handle Eligibility Verification and Accounts Receivable for dental insurance claims to ensure timely reimbursement.",
      requirements: ["Revenue Cycle Management knowledge", "Experience in AR calling", "Strong negotiation skills"]
    }
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
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    closeModal();
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-gray-800 antialiased bg-white"
      >
        <InnerPageHeader title="Career" breadcrumb="Career" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* LEFT SIDE CONTENT */}
            <motion.div variants={fadeInLeft} whileInView="whileInView" initial="initial">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Work at <br /> BEANbite
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                At Beanbite, we foster an environment of justice and openness so
                that our employees may thrive. We think that by consistently
                encouraging and guiding our employees, we can all work together to
                achieve success.
              </p>
              <p className="text-sm font-semibold text-gray-800 mb-2">OR CONTACT US WITH</p>
              <a href="mailto:info@BEANbite.com" className="text-[#AFCB12] text-base underline hover:text-[#C5D92D] transition-colors">
                info@BEANbite.com
              </a>
            </motion.div>

            {/* RIGHT SIDE JOB LIST WITH EXPANDABLE SECTION */}
            <motion.div variants={staggerContainer} whileInView="whileInView" initial="initial" className="divide-y divide-gray-200">
              {jobs.map((job, index) => (
                <motion.div key={index} variants={fadeInRight} className="py-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-[#AFCB12] font-semibold mb-1 uppercase">OPEN ROLES</p>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-xs text-gray-500">Full time &nbsp;–&nbsp; {job.location} &nbsp;–&nbsp; Experience: {job.experience}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Expand Arrow Button */}
                      <motion.button 
                        onClick={() => toggleExpand(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center transition-all ${
                          expandedJob === index ? 'bg-[#384d14] text-white border-[#384d14]' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <motion.div animate={{ rotate: expandedJob === index ? 180 : 0 }}>
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
                        <motion.div whileHover={{ x: 5 }} className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white">
                          <TrendingUp size={18} />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Expandable Content Area */}
                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2 text-gray-600">
                          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-2">Job Description</h4>
                            <p className="text-sm leading-relaxed mb-4">{job.description}</p>
                            <h4 className="font-bold text-gray-900 mb-2">Requirements</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {job.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <PartnerSection />
        </div>
      </motion.div>

      {/* MODAL SECTION */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black/50 z-50" onClick={closeModal} />
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                  <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                  <button onClick={closeModal} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700" placeholder="Your Name" />
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700" placeholder="Your Email" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700" placeholder="Your Phone" />
                      <select name="jobPosition" value={formData.jobPosition} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>Where did you hear about this position?</option>
                        <option value="Indeed">Indeed</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Google">Google</option>
                        <option value="Referred by a friend">Referred by a friend</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select name="location" value={formData.location} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>Interested Location</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Remote">Remote</option>
                      </select>
                      <select name="currentlyEmployed" value={formData.currentlyEmployed} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>Are you currently employed?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select name="reasonForChange" value={formData.reasonForChange} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>Reason for seeking a new job?</option>
                        <option value="Increase in salary">Increase in salary</option>
                        <option value="Poor management or leadership">Poor management or leadership</option>
                        <option value="Limited growth or advancement">Limited growth or advancement</option>
                        <option value="Work life imbalance">Work life imbalance</option>
                      </select>
                      <select name="startAvailability" value={formData.startAvailability} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>How soon can you start?</option>
                        <option value="Immediate">Immediate</option>
                        <option value="1 Week">1 Week</option>
                        <option value="2 Weeks">2 Weeks</option>
                        <option value="1 Month">1 Month</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <select name="shift" value={formData.shift} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] text-gray-700 bg-white">
                        <option value="" disabled>Preferred Shift</option>
                        <option value="Day Shift">Day Shift</option>
                        <option value="Night Shift">Night Shift</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      <input type="text" name="applyingPosition" value={formData.applyingPosition} readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed" />
                    </div>

                    <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C5D92D] focus:ring-1 focus:ring-[#C5D92D] resize-none text-gray-700" placeholder="Cover letter" />

                    <div>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#C5D92D] transition-colors relative">
                        <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" id="resume-upload" required />
                        <label htmlFor="resume-upload" className="cursor-pointer">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm text-gray-600 mb-1">Upload CV/Resume</p>
                          <p className="text-xs text-gray-500">Allowed: pdf, doc, docx</p>
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
                      <input type="checkbox" required className="mt-1 w-4 h-4 accent-[#C5D92D]" />
                      <label className="text-xs text-gray-500 leading-relaxed">By using this form you agree with the storage and handling of your data by this website.</label>
                    </div>

                    <div className="flex">
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 bg-[#C5D92D] border-2 border-[#384d14] text-[#1a2e05] font-bold px-6 py-1 rounded-full shadow-md hover:bg-[#b0c41a] transition-all group">
                        Submit Application
                        <motion.div whileHover={{ x: 5 }} className="w-8 h-8 bg-[#384d14] rounded-full flex items-center justify-center text-white">
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