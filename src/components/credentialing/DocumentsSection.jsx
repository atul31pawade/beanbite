import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  CreditCard,
  Building2,
  BadgeCheck,
  Landmark,
  ClipboardList,
  GraduationCap,
  MapPin,
  Wallet,
  UserSquare2,
  CheckCircle2,
} from "lucide-react";

const documents = [
  {
    title: "Dental License",
    icon: BadgeCheck,
  },
  {
    title: "DEA Registration (when applicable)",
    icon: Shield,
  },
  {
    title: "NPI Number",
    icon: UserSquare2,
  },
  {
    title: "Tax Identification Number (TIN)",
    icon: CreditCard,
  },
  {
    title: "W-9",
    icon: FileText,
  },
  {
    title: "Professional Liability Insurance",
    icon: Shield,
  },
  {
    title: "Curriculum Vitae (CV)",
    icon: ClipboardList,
  },
  {
    title: "Practice Address",
    icon: MapPin,
  },
  {
    title: "Banking Information for EFT",
    icon: Wallet,
  },
  {
    title: "Government Identification",
    icon: Landmark,
  },
  {
    title: "Specialty Certificates (if applicable)",
    icon: GraduationCap,
  },
  {
    title: "Lease Agreement or Ownership Documentation",
    icon: Building2,
  },
];

const DocumentsSection = () => {
  return (
    <section className="py-12  bg-[#F8FAFC]">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="text-center max-w-4xl mx-auto mb-16">

          {/*<span className="inline-flex px-5 py-2 rounded-full bg-[#AFCB12]/10 text-[#7A9200] font-semibold">
            Documents Typically Required
          </span>*/}

          <h2 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
            Prepare Your Credentialing Documents
          </h2>

          <p className="text-sm text-gray-600 leading-6">
            Although requirements vary by insurance company, most applications
            require the following documentation. Our team will provide a customized checklist based on your specific project.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {documents.map((doc, index) => {

            const Icon = doc.icon;

            return (

              <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.4,
    delay: index * 0.05,
  }}
  whileHover={{
    y: -5,
  }}
  className="group bg-white border border-gray-200 rounded-2xl p-2 hover:border-[#AFCB12] hover:shadow-lg transition-all duration-300"
>

  <div className="flex items-center gap-5">

    <div className="w-14 h-14 rounded-xl bg-[#AFCB12]/10 flex items-center justify-center group-hover:bg-[#AFCB12] transition">

      <Icon
        size={28}
        className="text-[#AFCB12] group-hover:text-white transition"
      />

    </div>

    <div className="flex-1">

      <h3 className="font-bold text-md transition text-gray-900 leading-7">
        {doc.title}
      </h3>
    </div>

  </div>

</motion.div>

            );

          })}

        </div>
</div>

    </section>
  );
};

export default DocumentsSection;