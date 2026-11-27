
"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import { ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    initial: "A",
    time: "Sample Member",
    text: "A great place to work out! The training sessions are well planned, the environment is welcoming, and the coaches make sure everyone gets the right guidance. Every session feels different and keeps me motivated.",
  },
  {
    name: "Sarah Williams",
    initial: "S",
    time: "Sample Member",
    text: "I was a complete beginner when I started. The coaches made me feel comfortable and helped me build confidence step by step. I really enjoy the group workouts and the positive atmosphere.",
  },
  {
    name: "Daniel Thomas",
    initial: "D",
    time: "Sample Member",
    text: "The workouts are challenging but enjoyable. I love the combination of strength training and functional exercises. The sessions keep me active and motivated throughout the week.",
  },
  {
    name: "Emily Carter",
    initial: "E",
    time: "Sample Member",
    text: "A friendly environment with great energy. The trainers are supportive and make sure everyone can work at their own pace. It has made fitness a regular part of my routine.",
  },
  {
    name: "Ryan Miller",
    initial: "R",
    time: "Sample Member",
    text: "I enjoy the variety of workouts and the guidance from the coaches. Every session brings something new, and the community makes it easier to stay consistent.",
  },
  {
    name: "Olivia Brown",
    initial: "O",
    time: "Sample Member",
    text: "The atmosphere is motivating, the sessions are engaging, and the coaches are always encouraging. It's a great place for anyone looking to make fitness part of their lifestyle.",
  },
  {
    name: "Michael Davis",
    initial: "M",
    time: "Sample Member",
    text: "Great training experience with a good mix of strength, conditioning, and mobility. The sessions are structured well and suitable for different fitness levels.",
  },
  {
    name: "Sophia Wilson",
    initial: "S",
    time: "Sample Member",
    text: "I love the energy here. The workouts are fun, the coaches are approachable, and the environment makes you want to come back for the next session.",
  },
];

type Testimonial = (typeof testimonials)[number];

const Card = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  const [expanded, setExpanded] = useState(false);

  const needsReadMore = testimonial.text.length > 180;

  return (
    <div
      className="
        group
        mx-3
        w-[330px]
        md:w-[360px]
        h-[270px]
        md:h-[280px]
        shrink-0
        bg-neutral-950
        border
        border-white/[0.08]
        rounded-2xl
        p-5
        flex
        flex-col
        overflow-hidden
        transition-all
        duration-300
        hover:bg-neutral-900
        hover:border-white/[0.14]
      "
    >
      {/* TOP */}
      <div className="flex items-start justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* DEMO AVATAR */}
          <div
            className="
              w-11
              h-11
              shrink-0
              rounded-full
              flex
              items-center
              justify-center
              bg-lime-400/10
              border
              border-lime-400/20
              text-lime-400
              font-bold
              text-sm
            "
          >
            {testimonial.initial}
          </div>

          {/* REVIEWER */}
          <div className="min-w-0">
            <p className="text-white font-bold text-sm truncate">
              {testimonial.name}
            </p>

            <p className="mt-0.5 text-neutral-500 text-[11px]">
              {testimonial.time}
            </p>
          </div>
        </div>

        {/* DEMO LABEL */}
        <div
          className="
            shrink-0
            text-[10px]
            md:text-[11px]
            font-semibold
            text-neutral-500
            whitespace-nowrap
          "
        >
          Sample Review
        </div>
      </div>

      {/* STARS */}
      <div
        className="
          flex
          items-center
          gap-[2px]
          mt-4
          shrink-0
          text-[#FBBF24]
          text-[17px]
        "
        aria-label="Decorative five-star example"
      >
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      {/* REVIEW CONTENT */}
      <div className="relative mt-3 flex-1 min-h-0 flex flex-col">
        <div
          className={`
            flex-1
            min-h-0
            ${
              expanded
                ? "overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
                : "overflow-hidden"
            }
          `}
        >
          <p
            className={`
              text-neutral-300
              text-sm
              leading-6
              ${!expanded ? "line-clamp-4" : ""}
            `}
          >
            “{testimonial.text}”
          </p>
        </div>

        {/* READ MORE / SHOW LESS */}
        {needsReadMore && (
          <div
            className="
              shrink-0
              pt-2
              bg-neutral-950
              group-hover:bg-neutral-900
              transition-colors
              duration-300
            "
          >
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="
                flex
                items-center
                gap-1.5
                text-[11px]
                font-semibold
                text-neutral-400
                hover:text-white
                transition-colors
                cursor-pointer
              "
            >
              {expanded ? (
                <>
                  Show Less
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section
      className="
        relative
        bg-black
        py-14
        md:py-16
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[350px]
          bg-lime-400/[0.025]
          blur-[160px]
          pointer-events-none
        "
      />

      {/* HEADING */}
      <div
        className="
          relative
          z-10
          text-center
          px-6
          mb-8
          md:mb-10
        "
      >
        <p
          className="
            text-[12px]
            tracking-[0.6em]
            text-lime-400
            font-semibold
            mb-2
          "
        >
          MEMBER STORIES
        </p>

        <h2
          className="
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-black
            uppercase
            tracking-tight
            text-white
          "
        >
          YOUR JOURNEY.
          {" "}
          <span className="text-lime-400">
            YOUR PROGRESS.
          </span>
        </h2>

        <p className="mt-4 text-sm text-neutral-500">
          Sample member feedback for website demonstration
        </p>
      </div>

      {/* LEFT FADE */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-12
          md:w-28
          bg-gradient-to-r
          from-black
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          w-12
          md:w-28
          bg-gradient-to-l
          from-black
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* REVIEWS */}
      <div className="relative z-10">
        <Marquee
          speed={32}
          pauseOnHover
          gradient={false}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
