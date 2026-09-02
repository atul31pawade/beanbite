import React from 'react';
import { Link } from 'react-router-dom';

const InnerPageHeader = ({ title, breadcrumb }) => {
  return (
    <section className="bg-[#AFCB12] py-8 md:py-8">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h1>
        {breadcrumb && (
          <div className="text-white/90 text-base">
            <Link to="/" className="hover:text-[#C5D92D] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#e1f160]">{breadcrumb}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default InnerPageHeader;