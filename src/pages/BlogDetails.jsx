import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Calendar,
    Clock,
    User,
    Link as LinkIcon,
    Check,
    ArrowLeft,
    ArrowRight,
    Linkedin,
    Facebook,
    Twitter,
    ListTree,
} from "lucide-react";
import Reveal from "../components/Reveal";
import blogData from "../data/blogData";

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .slice(0, 60);

const Block = ({ block }) => {
    switch (block.type) {
        case "h2":
            return (
                <h2
                    id={slugify(block.text)}
                    className="text-[22px] md:text-[28px] font-bold text-gray-900 leading-snug mt-12 mb-5 scroll-mt-28"
                >
                    {block.text}
                </h2>
            );
        case "h3":
            return (
                <h3
                    id={slugify(block.text)}
                    className="text-[19px] md:text-[22px] font-bold text-gray-900 leading-snug mt-9 mb-4 scroll-mt-28"
                >
                    {block.text}
                </h3>
            );
        case "h4":
            return (
                <h4
                    id={slugify(block.text)}
                    className="text-[17px] md:text-[18px] font-bold text-[#414C00] mt-7 mb-3 pl-4 border-l-[3px] border-[#AFCB12] scroll-mt-28"
                >
                    {block.text}
                </h4>
            );
        case "list":
            return (
                <ul className="my-5 space-y-2.5 text-[16px] leading-[1.8] text-[#5e5e5e] pl-6 list-disc marker:text-[#AFCB12]">
                    {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        case "table": {
            const [head, ...body] = block.rows;
            return (
                <div className="my-9 overflow-x-auto rounded-2xl border border-[#E4E9D8]">
                    <table className="w-full border-collapse text-left text-[15px]">
                        <thead>
                            <tr className="bg-[#383838] text-white">
                                {head.map((cell, i) => (
                                    <th key={i} className="px-5 py-3.5 font-semibold whitespace-nowrap">
                                        {cell}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {body.map((row, r) => (
                                <tr
                                    key={r}
                                    className={`border-t border-[#E4E9D8] ${r % 2 ? "bg-[#F7F9F2]" : "bg-white"}`}
                                >
                                    {row.map((cell, c) => (
                                        <td
                                            key={c}
                                            className={`px-5 py-3.5 align-top ${c === 0 ? "font-semibold text-gray-900" : "text-[#5e5e5e]"}`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        default:
            return (
                <p className="my-5 text-[16px] leading-[1.85] text-[#5e5e5e]">{block.text}</p>
            );
    }
};

const BlogDetails = () => {
    const { id } = useParams();
    const [copied, setCopied] = useState(false);

    const postIndex = blogData.findIndex((item) => item.id === Number(id));
    const post = blogData[postIndex];
    const previous = blogData[postIndex - 1];
    const next = blogData[postIndex + 1];
    const moreArticles = blogData.filter((item) => item.id !== post?.id).slice(0, 4);
    const contents = post?.blocks.filter((block) => ["h2", "h3"].includes(block.type)) ?? [];
    const firstBlock = post?.blocks?.[0];
    const lead =
        firstBlock?.type === "p" && firstBlock.text.trim() === post.excerpt.trim()
            ? null
            : post?.excerpt;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-white px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
                <p className="text-[#5e5e5e]">The article you are looking for is no longer available.</p>
                <Link
                    to="/blog"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#C5D92D] px-6 py-3 font-bold text-[#414C00] hover:bg-[#AFCB12] transition"
                >
                    <ArrowLeft size={16} /> Back to blog
                </Link>
            </div>
        );
    }

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareLinks = [
        {
            icon: Linkedin,
            label: "Share on LinkedIn",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        },
        {
            icon: Twitter,
            label: "Share on X",
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
        },
        {
            icon: Facebook,
            label: "Share on Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        },
    ];

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="bg-white">
            {/* Breadcrumb bar */}
            <div className="bg-[#F7F9F2] border-b border-[#E4E9D8]">
                <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-4 flex flex-wrap items-center gap-2 text-sm text-[#5e5e5e]">
                    <Link to="/" className="hover:text-[#AFCB12] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-[#AFCB12] transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="font-semibold text-gray-900">{post.category}</span>
                </div>
            </div>

            <article className="max-w-[1400px] mx-auto px-4 lg:px-12 py-12 md:py-16">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16">
                    {/* Article */}
                    <div className="min-w-0">
                        <Reveal>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#5e5e5e] mb-5">
                                <span className="px-3 py-1 rounded-full bg-[#AFCB12] text-white font-semibold text-xs uppercase tracking-wide">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-[#AFCB12]" /> {post.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-[#AFCB12]" /> {post.readTime}
                                </span>
                            </div>

                            <h1 className="text-[26px] md:text-[38px] font-bold text-gray-900 leading-[1.2] mb-6">
                                {post.title}
                            </h1>

                            {lead && (
                                <p className="text-[18px] leading-[1.6] text-[#414C00] mb-8">{lead}</p>
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-[#E4E9D8] py-4 mb-10">
                                <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                    <User size={16} className="text-[#AFCB12]" /> {post.author}
                                </span>
                                <div className="flex items-center gap-2">
                                    {shareLinks.map(({ icon: Icon, label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={label}
                                            title={label}
                                            className="w-9 h-9 rounded-full border border-[#E4E9D8] flex items-center justify-center text-gray-600 hover:bg-[#AFCB12] hover:text-white hover:border-[#AFCB12] transition"
                                        >
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={copyLink}
                                        aria-label="Copy link"
                                        title="Copy link"
                                        className="w-9 h-9 rounded-full border border-[#E4E9D8] flex items-center justify-center text-gray-600 hover:bg-[#AFCB12] hover:text-white hover:border-[#AFCB12] transition cursor-pointer"
                                    >
                                        {copied ? <Check size={16} /> : <LinkIcon size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[24px] aspect-[41/25] mb-12">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Reveal>

                        <div>
                            {post.blocks.map((block, i) => (
                                <Block key={i} block={block} />
                            ))}
                        </div>

                        {/* Prev / Next */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-14">
                            {previous ? (
                                <Link
                                    to={`/blog/${previous.id}`}
                                    className="group border border-[#E4E9D8] rounded-2xl p-5 hover:border-[#AFCB12] hover:bg-[#F7F9F2] transition"
                                >
                                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#AFCB12] mb-2">
                                        <ArrowLeft size={14} /> Previous
                                    </span>
                                    <span className="line-clamp-2 text-[15px] font-semibold text-gray-900 group-hover:text-[#414C00]">
                                        {previous.title}
                                    </span>
                                </Link>
                            ) : (
                                <span />
                            )}
                            {next && (
                                <Link
                                    to={`/blog/${next.id}`}
                                    className="group border border-[#E4E9D8] rounded-2xl p-5 hover:border-[#AFCB12] hover:bg-[#F7F9F2] transition sm:text-right"
                                >
                                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#AFCB12] mb-2 sm:justify-end">
                                        Next <ArrowRight size={14} />
                                    </span>
                                    <span className="line-clamp-2 text-[15px] font-semibold text-gray-900 group-hover:text-[#414C00]">
                                        {next.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {contents.length > 0 && (
                                <div className="border border-[#E4E9D8] rounded-2xl p-6">
                                    <h2 className="flex items-center gap-2 text-[15px] font-bold text-gray-900 mb-4">
                                        <ListTree size={16} className="text-[#AFCB12]" /> On this page
                                    </h2>
                                    <nav className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                                        {contents.map((block, i) => (
                                            <a
                                                key={i}
                                                href={`#${slugify(block.text)}`}
                                                className={`block text-[13px] leading-snug text-[#5e5e5e] hover:text-[#AFCB12] transition-colors ${
                                                    block.type === "h3" ? "pl-3 border-l border-[#E4E9D8]" : "font-semibold text-gray-900"
                                                }`}
                                            >
                                                {block.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            <div className="border border-[#E4E9D8] rounded-2xl p-6">
                                <h2 className="text-[15px] font-bold text-gray-900 mb-4">More articles</h2>
                                <div className="space-y-4">
                                    {moreArticles.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={`/blog/${item.id}`}
                                            className="flex gap-3 group"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-20 shrink-0 self-start aspect-[41/25] object-cover rounded-lg"
                                            />
                                            <span>
                                                <span className="block text-[13px] font-semibold leading-snug line-clamp-2 text-gray-900 group-hover:text-[#AFCB12] transition-colors">
                                                    {item.title}
                                                </span>
                                                <span className="mt-1 block text-[11px] text-gray-400">{item.date}</span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#383838] text-white rounded-2xl p-6">
                                <h2 className="text-[17px] font-bold mb-2 leading-snug">
                                    Want this handled for you?
                                </h2>
                                <p className="text-sm text-white/75 leading-relaxed mb-5">
                                    BEANbite keeps dental practices compliant, audit-ready and billing cleanly across every payer.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#C5D92D] px-5 py-2.5 text-sm font-bold text-[#414C00] hover:bg-[#AFCB12] hover:text-white transition"
                                >
                                    Talk to our team <ArrowRight size={15} />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    );
};

export default BlogDetails;
