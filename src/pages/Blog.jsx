import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import InnerPageHeader from '../components/InnerPageHeader';
import blogData from "../data/blogData";

// Animation variants (FIXED)
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = blogData;
  

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setCurrentPage(pageNumber);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-sans text-gray-800 bg-white"
    >
      {/* Header */}
      <InnerPageHeader title="Blog" breadcrumb="Blog" />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-16">

        {/* Blog Grid */}
        <motion.div
          key={currentPage} 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post) => (
            <motion.article
              key={`${post.id}-${currentPage}`}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="group cursor-pointer"
            >
              <div className="bg-white border border-[#D9D9D9] rounded-2xl overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#AFCB12]">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#AFCB12]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} className="text-[#AFCB12]" />
                      {post.author}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-[#AFCB12] text-sm font-semibold"
                  >
                    Read More
                  </Link>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            
            {/* Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full cursor-pointer ${
                    currentPage === page
                      ? 'bg-[#C5D92D] text-black'
                      : 'border'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        )}

      </div>
    </motion.div>
  );
};

export default Blog;