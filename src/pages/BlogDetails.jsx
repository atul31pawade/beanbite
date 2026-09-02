import React from "react";
import { useParams } from "react-router-dom";
import { Calendar, User, Search, Share2, Link as LinkIcon } from "lucide-react";
import InnerPageHeader from "../components/InnerPageHeader";
import blogData from "../data/blogData";

const BlogDetails = () => {
    const { id } = useParams();

    const post = blogData.find((item) => item.id === Number(id));

    if (!post) {
        return <div className="p-10 text-center">Blog not found</div>;
    }

    return (
        <div className="bg-[#f7f7f7] min-h-screen">
            <InnerPageHeader title="News & Insights Details" breadcrumb="Blog Details" />

             <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-16">

                {/* 🔥 TOP SECTION (FULL WIDTH) */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
                    <h2 className="text-3xl font-bold lg:w-[40%]">
                        News & Insights Details.
                    </h2>

                    <p className="text-gray-500 lg:w-[60%]">
                        A brief introduction explaining what type of content users can expect, such as industry updates, case studies, success stories, and expert insights.
                    </p>
                </div>

                {/* 🔥 IMAGES (FULL WIDTH) */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-xl w-full h-[250px] object-cover"
                    />
                    <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-xl w-full h-[250px] object-cover"
                    />
                </div>

                {/* 🔥 MAIN CONTENT GRID */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2">

                        {/* Title */}
                        <h1 className="text-2xl font-bold mb-4">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex items-center justify-between mb-6 border border-[#D9D9D9] rounded-md px-2 py-1">
                            <div className="flex gap-6 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <User size={14} /> By {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {post.date}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <button className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-[#D9D9D9] text-gray-600 hover:bg-[#AFCB12] hover:text-white transition">
                                    <Share2 size={16} />
                                </button>

                                <button className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-[#D9D9D9] text-gray-600 hover:bg-[#AFCB12] hover:text-white transition">
                                    <LinkIcon size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-gray-700 leading-relaxed space-y-4 text-[15px]">
                            {post.content.split("\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-8 text-gray-500">
                            <span className="flex items-center justify-center w-10 h-10 border border-[#D9D9D9] rounded-full cursor-pointer">
                                FB
                            </span>

                            <span className="flex items-center justify-center w-10 h-10 border border-[#D9D9D9] rounded-full cursor-pointer">
                                IN
                            </span>

                            <span className="flex items-center justify-center w-10 h-10 border border-[#D9D9D9] rounded-full cursor-pointer">
                                X
                            </span>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                            {/* Search */}
                            <div>
                                <h3 className="font-semibold mb-3">Search blog</h3>
                                <div className="flex items-center border border-[#D9D9D9] rounded-lg px-3 py-2">
                                    <Search size={16} className="text-gray-400" />
                                    <input
                                    type="text"
                                    placeholder="Search..."
                                    className="ml-2 outline-none w-full text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold mb-4">Recent Post</h3>

                            <div className="space-y-4">
                                {blogData.slice(0, 4).map((item) => (
                                <div key={item.id} className="flex gap-3 cursor-pointer group">
                                    <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <p className="text-sm font-medium group-hover:text-[#AFCB12] line-clamp-2">
                                            {item.title}
                                        </p>
                                        <span className="text-xs text-gray-400">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
};

export default BlogDetails;