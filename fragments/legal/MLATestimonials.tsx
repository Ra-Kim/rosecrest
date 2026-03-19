"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal } from "@/components/common/Reveal";

// Flatten all testimonials into a single list for mobile single-card view
const testimonials = [
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
];

// On desktop we show pairs; on mobile one at a time
const desktopSlides = [
  [testimonials[0], testimonials[1]],
  [testimonials[2], testimonials[3]],
];

const AUTO_ADVANCE_MS = 20_000;

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-white border border-gray-200 rounded-4xl p-8 flex flex-col gap-6 min-h-83 h-full">
    <Image src="/assets/svgs/brown-quote.svg" alt="" width={32} height={32} />
    <p className={`${sourceSans.className} text-[#101828] font-light text-base md:text-lg leading-relaxed flex-1 w-3/4`}>
      {t.quote}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1E3A8A] shrink-0">
        <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover w-full h-full" />
      </div>
      <div>
        <p className="font-semibold text-[#101828] text-sm">{t.org}</p>
        <p className={`${sourceSans.className} text-[#6A7282] text-sm`}>{t.name}</p>
      </div>
    </div>
  </div>
);

const MLATestimonials = () => {
  // mobile: index into testimonials (0..3)
  // desktop: index into desktopSlides (0..1)
  const [mobileIdx, setMobileIdx] = useState(0);
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const mobileTotal = testimonials.length;
  const desktopTotal = desktopSlides.length;

  const animate = useCallback(
    (cb: () => void, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        cb();
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const prevMobile = useCallback(() => {
    animate(() => setMobileIdx((i) => (i - 1 + mobileTotal) % mobileTotal), "left");
  }, [animate, mobileTotal]);

  const nextMobile = useCallback(() => {
    animate(() => setMobileIdx((i) => (i + 1) % mobileTotal), "right");
  }, [animate, mobileTotal]);

  const prevDesktop = useCallback(() => {
    animate(() => setDesktopIdx((i) => (i - 1 + desktopTotal) % desktopTotal), "left");
  }, [animate, desktopTotal]);

  const nextDesktop = useCallback(() => {
    animate(() => setDesktopIdx((i) => (i + 1) % desktopTotal), "right");
  }, [animate, desktopTotal]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      animate(() => {
        setMobileIdx((i) => (i + 1) % mobileTotal);
        setDesktopIdx((i) => (i + 1) % desktopTotal);
      }, "right");
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [animate, mobileTotal, desktopTotal]);

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
    transition: "opacity 350ms ease, transform 350ms ease",
  };

  return (
    <section className="py-16 lg:py-24 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl px-4 mx-auto">

        {/* Quote icon */}
        <Reveal animation="fade" duration={500}>
          <Image src="/assets/svgs/white-quote.svg" alt="" width={48} height={48} />
        </Reveal>

        {/* Heading */}
        <Reveal animation="fade-up" duration={600} delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
              Trusted by Solicitors
            </h2>
            <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg mx-auto`}>
              Hear from legal professionals who regularly instruct Rosecrest for independent inspections and expert reporting.
            </p>
          </div>
        </Reveal>

        {/* ── Mobile: single card ── */}
        <div className="lg:hidden">
          <div style={slideStyle} className="mb-8">
            <TestimonialCard t={testimonials[mobileIdx]} />
          </div>

          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    animate(() => setMobileIdx(i), i > mobileIdx ? "right" : "left")
                  }
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-1 rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: i === mobileIdx ? "48px" : "20px",
                    backgroundColor: i === mobileIdx ? "#DBB38E" : "#D1D5DB",
                  }}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevMobile}
                className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMobile}
                className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop: two cards per slide ── */}
        <div className="hidden lg:block">
          <div style={slideStyle} className="grid lg:grid-cols-2 gap-6 mb-10">
            {desktopSlides[desktopIdx].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {desktopSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    animate(() => setDesktopIdx(i), i > desktopIdx ? "right" : "left")
                  }
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-1 rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: i === desktopIdx ? "80px" : "32px",
                    backgroundColor: i === desktopIdx ? "#DBB38E" : "#D1D5DB",
                  }}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevDesktop}
                className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextDesktop}
                className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MLATestimonials;