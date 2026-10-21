import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InnerPageHeader = ({ title, breadcrumb }) => {
  return (
    <section className="bg-[#AFCB12] py-8 md:py-8">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          {title}
        </motion.h1>
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-white/90 text-base"
          >
            <Link to="/" className="hover:text-[#C5D92D] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#e1f160]">{breadcrumb}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InnerPageHeader;