"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const testimonials = [
  [
    {
      quote:
        "Rosecrest provided clear, professional reporting that aligned with our governance requirements. Their understanding of public sector procurement processes made the engagement straightforward.",
      org: "Regional Housing Association",
      name: "Sarah Mitchell, Asset Management Lead",
      avatar: "/assets/images/profile.png",
    },
    {
      quote:
        "The technical quality of their inspections gave us confidence in our decision-making. Fast response times and fixed pricing made budgeting straightforward.",
      org: "Metropolitan Council",
      name: "David Thompson, Head of Compliance",
      avatar: "/assets/images/profile.png",
    },
  ],
  [
    {
      quote:
        "Outstanding damp and mould assessments across our entire portfolio. The reports were clear, actionable and stood up to legal scrutiny when we needed them most.",
      org: "City Housing Trust",
      name: "Emma Clarke, Property Director",
      avatar: "/assets/images/profile.png",
    },
    {
      quote:
        "Their RICS-regulated surveyors delivered exactly what we needed for our HHSRS compliance programme. Reliable, professional and on time every time.",
      org: "Borough Council",
      name: "James Patel, Housing Standards Manager",
      avatar: "/assets/images/profile.png",
    },
  ],
  [
    {
      quote:
        "Rosecrest provided clear, professional reporting that aligned with our governance requirements. Their understanding of public sector procurement processes made the engagement straightforward.",
      org: "Regional Housing Association",
      name: "Sarah Ann, Asset Management Lead",
      avatar: "/assets/images/profile.png",
    },
    {
      quote:
        "The technical quality of their inspections gave us confidence in our decision-making. Fast response times and fixed pricing made budgeting straightforward.",
      org: "Metropolitan Council",
      name: "David Mark, Head of Compliance",
      avatar: "/assets/images/profile.png",
    },
  ],
  [
    {
      quote:
        "Outstanding damp and mould assessments across our entire portfolio. The reports were clear, actionable and stood up to legal scrutiny when we needed them most.",
      org: "City Housing Trust",
      name: "Emma Watson, Property Director",
      avatar: "/assets/images/profile.png",
    },
    {
      quote:
        "Their RICS-regulated surveyors delivered exactly what we needed for our HHSRS compliance programme. Reliable, professional and on time every time.",
      org: "Borough Council",
      name: "James Potter, Housing Standards Manager",
      avatar: "/assets/images/profile.png",
    },
  ],
];

const WhyClientsRelyOnUs = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 350);
    },
    [animating, current],
  );

  const prev = () => goTo((current - 1 + total) % total, "left");
  const next = () => goTo((current + 1) % total, "right");

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
    transition: "opacity 350ms ease, transform 350ms ease",
  };

  return (
    <section className="py-16 lg:py-24 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl px-4 mx-auto relative">
        {/* Large decorative quote top-left */}
        <div className="">
          <Image
            src={`/assets/svgs/white-quote.svg`}
            alt=""
            width={48}
            height={48}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
            Why Clients Rely on Us
          </h2>
          <p
            className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg mx-auto`}
          >
            Specializing in housing standards, compliance and risk management,
            we advocate for professional and transparent service delivery.
          </p>
        </div>

        {/* Cards */}
        <div style={slideStyle} className="grid lg:grid-cols-2 gap-6 mb-10">
          {testimonials[current].map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-4xl p-8 flex flex-col gap-6 min-h-83"
            >
              <div className="">
                <Image
                  src={`/assets/svgs/brown-quote.svg`}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <p
                className={`${sourceSans.className} text-[#101828] font-light text-base md:text-lg leading-relaxed flex-1 w-3/4`}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1E3A8A] shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#101828] text-sm">
                    {t.org}
                  </p>
                  <p
                    className={`${sourceSans.className} text-[#6A7282] text-sm`}
                  >
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: indicators left, arrows right */}
        <div className="flex items-center justify-between">
          {/* Progress indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: i === current ? "80px" : "32px",
                  backgroundColor: i === current ? "#DBB38E" : "#D1D5DB",
                }}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClientsRelyOnUs;
