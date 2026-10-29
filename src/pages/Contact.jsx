import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import CtaButton from "../components/CtaButton";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    practiceName: "",
    practiceSize: "",
    howDidYouHear: "",
    service: "",
    emailOptIn: false,
    textOptIn: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-gray-800 antialiased bg-white"
    >
      {/* Inner Page Header */}
      <InnerPageHeader title="Contact Us" breadcrumb="Contact Us" />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16 md:py-16">
        {/* Contact Info and Form Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-[#AFCB12] text-[#000000] font-bold rounded-full text-lg mb-6"
              >
                Get In Touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4 leading-[1.2]"
              >
                Stronger bites. <br />
                Stronger production. <br />
                More beans.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 text-gray-600 text-base leading-relaxed mb-8"
              >
                Tell us where your practice leaks money. We'll show you how to
                plug it — billing, credentialing, PPO contracts, all of it.
              </motion.p>
              {/* Address */}
              <div className="mb-8">
                <motion.p className="text-gray-600 text-base leading-relaxed">
                  1015 Riley St, #297 Folsom CA 95630
                </motion.p>
              </div>
            </div>

            {/* Left Side - Contact Info with Background Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden min-h-[300px] bg-black"
            >
              {/* Background Image — shifted right, left stays black */}
              <div className="absolute inset-y-0 right-0 left-[15%]">
                <img
                  src="/contact/contact-bg.png"
                  alt="Contact Background"
                  className="w-full h-full object-cover object-right"
                />
                {/* Black overlay fading to the right for text readability */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.65)_35%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0)_100%)]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 md:p-6 flex flex-col justify-center min-h-[300px] text-white w-[65%] md:w-[58%]">
                {/* Contact Number */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="/contact/call-svg.png"
                    alt="phone"
                    className="w-6 h-6 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-1">
                      Contact Number
                    </p>
                    <a
                      href="tel:+18887005589"
                      className="text-white text-lg md:text-xl font-semibold hover:text-[#C5D92D] transition-colors"
                    >
                      +1(888) 700 5589
                    </a>
                  </div>
                </div>

                <div className="h-[1px] w-1/2 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent mb-8"></div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <img
                    src="/contact/mail-svg.png"
                    alt="phone"
                    className="w-6 h-6 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white/90 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@BEANbite.com"
                      className="text-white text-lg md:text-xl font-semibold hover:text-[#C5D92D] transition-colors"
                    >
                      info@BEANbite.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#F6F6F6] rounded-2xl p-6 md:p-8 contact-from shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#5e5e5e] mb-4">
              Get in <span className="font-extrabold">touch</span> with us
            </h2>

            <p className="text-gray-500 mb-6 text-sm">
              Complete the form to start your personalized journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First + Last */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  onChange={handleInputChange}
                  className="input-style"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleInputChange}
                  className="input-style"
                />
              </div>

              {/* Phone + Practice */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  onChange={handleInputChange}
                  className="input-style"
                />
                <input
                  type="text"
                  name="practiceName"
                  placeholder="DSO/Practice name"
                  onChange={handleInputChange}
                  className="input-style"
                />
              </div>

              {/* Selects */}
              <div className="grid md:grid-cols-2 gap-4">
                <select name="practiceSize" className="input-style">
                  <option>Dental practice size</option>
                  <option>Single</option>
                  <option>2 - 5 Practices</option>
                  <option>6 - 10 Practices</option>
                  <option>More than 10 practices</option>
                </select>

                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  className="input-style"
                >
                  <option value="">How did you hear about us?</option>
                  <option>Google</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                  <option>Dental Conference</option>
                  <option>Dental Publication</option>
                  <option>Referred by Friend/Other DDS</option>
                  <option>Dental Attorney</option>
                  <option>Dental CPA</option>
                  <option>Dental Broker</option>
                  <option>Instagram</option>
                  <option>Facebook Groups</option>
                  <option>CDA convention</option>
                </select>
              </div>

              {/* Service */}
              <textarea
                name="service"
                className="input-style"
                placeholder="What service are you looking for?"
                rows={2}
              />

              {/* Opt-in */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-gray-800 mb-3">
                  Would you like to opt-in for communications from BEANbite LLC?
                </p>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#C5D92D]" />
                    <span className="text-sm">E-mail</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#C5D92D]" />
                    <span className="text-sm">Text</span>
                  </label>
                </div>
              </div>

              <div className="text-xs text-gray-500 leading-relaxed space-y-3 pt-2">
                {" "}
                <p>
                  {" "}
                  By choosing text, you agree to receive texts/calls from
                  BEANbite LLC and its affiliates, including by auto-dialed or
                  prerecorded means, regarding current and future projects or
                  services at the number you provide. Since texts are
                  unencrypted, there is a risk that your message could be
                  intercepted or viewed by third parties, and others who access
                  your device. Consent is not a condition of purchasing any
                  goods/services. Message frequency varies. Message and data
                  rates may apply.{" "}
                </p>{" "}
                <p>
                  {" "}
                  We do not share personal information with third parties for
                  marketing purposes under any circumstances.{" "}
                </p>{" "}
              </div>

              {/* Submit */}
              <CtaButton type="submit" className="mt-4" icon={TrendingUp}>
                Submit
              </CtaButton>
            </form>
          </motion.div>
        </div>
        {/* FULL WIDTH MAP SECTION */}
        <div className="w-full">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mt-20">
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=850+Iron+Point+Rd,+Folsom,+CA&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            ></iframe>

            {/* FLOATING LOCATION CARD */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 w-[280px]">
              <h3 className="font-semibold text-gray-900 text-sm">
                BEANbite Dental Billing Company
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                850 Iron Point Rd #120, Folsom, CA 95630
              </p>
              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-[#C5D92D] text-sm">
                ★★★★★ <span className="text-gray-600 ml-1">5.0</span>
              </div>
              {/* Button */}
              <button className="text-[#AFCB12] text-xs font-semibold mt-2 hover:underline">
                Directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
