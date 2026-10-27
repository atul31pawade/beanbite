"use client";

import React from "react";
import { Star } from "lucide-react";

const allReviews = [
  {
    name: "Uday Shah",
    text: "We are using their service for more than a year. I am in private practice for more than 35 years in California and have seen all possible ups and downs.BeanBite has given me a peace of mind which no other previous billing companies have given. They are human beings and do make mistakes, but overall they are the best in my experience.",
    rating: 5,
  },
  {
    name: "Taka Fujimura",
    text: "Santosh and Dennis were very helpful and took time to make sure credentialing went smoothly. They made the process stress free for me during a critical time when I was building up my business. Highly recommend to anyone that needs help negotiating with insurances (PPO, HMO, dentical) and making sure you get into the right networks.",
    rating: 5,
  },
  {
    name: "Young Sik Lim",
    text: "Gina Stevens helped me credentialing insurances about 5 years ago. I forgot to leave the review. But the company was very helpful during the credentialing process. I appreciate your team's great work.",
    rating: 5,
  },
  {
    name: "Myriam Brenes",
    text: "I want to express my appreciation for the fantastic support we received from Bean Bite during our insurance credentialing process. We had a challenging appeal to navigate, but Santosh, Ramya, and the team were incredibly diligent and helpful. Their attention to detail and quick responses made everything so much easier for us.",
    rating: 5,
  },
  {
    name: "Matt Odgers",
    text: "Santosh and the team at Bean Bite have been absolutely exceptional to work with on insurance credentialing for dental offices. As an attorney who helps dentists buy and sell practices, I know firsthand how challenging it can be to transition insurance credentials from sellers to buyers.",
    rating: 5,
  },
  {
    name: "Daniel Herrera",
    text: "I used BEANbite to help with the insurance credentialing of my practice. I bought the practice earlier this year and the previous owner was in network with most PPOs. BEANbite helped by first doing the research to help us determine reasonable fees. They then negotiated higher fees where possible.",
    rating: 5,
  },
  {
    name: "Pia Briones",
    text: "Beanbite has been very easy to work with throughout my credentialing process. Maria, my point of contact with them, is very professional, is very prompt with responses and has very patiently answered any questions I have when it comes to insurance. I would highly recommend their credentialing services. Once my office gets busy, I would definitely consider them for insurance verification and billing.",
    rating: 5,
  },
  {
    name: "Casey Goetz",
    text: "I was nervous and skeptical a bit at first because credentialing a new associate dentist seems daunting... but Santosh, Dennis, and the team at Bean Bite were really great to work with. They were timely and had great communication skills, and they worked hard behind the scenes for me. And at a very competitive price. I will definitely use them again for my next associate!",
    rating: 5,
  },
  {
    name: "Front Range Endodontics",
    text: "We have found BEANbite to be a very helpful insurance credentialing and re-credentialing company. We worked with BEANbite for both our initial and re-credentialing. Maria and Santosh were very responsive to our emails and phone calls, and they worked very hard to help both my husband and me become credentialed with many different insurance companies, either directly or indirectly.",
    rating: 5,
  },
  {
    name: "Bansi Patel",
    text: "I am so glad I chose Beanbite for my insurance credentialing. Both Santosh and Maria Rahul are so knowledgeable and responsive. They did a fantastic job getting me set up with all the insurances and making sure I chose the right plans. Highly recommend to fellow dentists!",
    rating: 5,
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function ReviewCard({ review }) {
  return (
    <div className="w-[320px] sm:w-[380px] flex-none bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#C5D92D]/60 hover:bg-white/10 transition-colors">
      <span className="text-[#C5D92D] text-3xl font-black leading-none select-none">
        &ldquo;
      </span>
      <p className="text-white/80 text-base leading-relaxed line-clamp-4">
        {review.text}
      </p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-[#414C00] text-[#C5D92D] font-extrabold text-[13px] flex items-center justify-center shrink-0">
          {initials(review.name)}
        </div>
        <span className="text-white font-bold text-sm truncate">
          {review.name}
        </span>
        <div className="ml-auto flex items-center gap-1 bg-[#C5D92D] text-black text-[11px] font-extrabold px-2.5 py-1 rounded-full shrink-0">
          <Star size={11} fill="currentColor" />
          {review.rating}.0
        </div>
      </div>
    </div>
  );
}

function Lane({ reviews, reverse, duration }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className="flex gap-5 w-max py-1 animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const laneOne = allReviews.filter((_, i) => i % 2 === 0);
  const laneTwo = allReviews.filter((_, i) => i % 2 === 1);
  const avg = (
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  ).toFixed(1);

  return (
    <section id="testimonials" className="relative w-full bg-[#222222] overflow-hidden">
      <img
        src="/homeOne/testimonial-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-12 pt-16 md:pt-10 pb-16 md:pb-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <span className="inline-block px-6 py-2 bg-white/10 border border-[#C5D92D]/40 text-[#C5D92D] font-bold rounded-full text-sm mb-5 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-white text-[32px] md:text-5xl font-bold leading-[1.15]">
              What our customers
              <br className="hidden md:block" /> say about us
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/15 rounded-full px-5 py-2.5">
            <div className="flex text-[#C5D92D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-semibold">
              {avg} average · {allReviews.length} verified reviews
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 -mx-4 px-4">
          <Lane reviews={laneOne} duration={55} />
          <Lane reviews={laneTwo} duration={65} reverse />
        </div>
      </div>
    </section>
  );
}
