"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal } from "@/components/common/Reveal";

const AUTO_ADVANCE_MS = 20_000;

interface CaseStudy {
  image: string;
  alt: string;
  title: string;
  tags: string[];
  scope: string[];
  risks: string[];
  outputs: string[];
}

const cases: CaseStudy[] = [
  {
    image: "/assets/images/recent-work-1.png",
    alt: "Damp and mould inspection",
    title: "Damp & Mould Inspection Programme",
    tags: ["Local Authority", "Reactive Complaint Response"],
    scope: [
      "Inspection of occupied residential units",
      "Assessment of damp, mould and contributing factors",
      "Photographic and written reporting",
      "Identification of recommended next steps",
    ],
    risks: [
      "Occupied properties",
      "Tenant safeguarding",
      "Access coordination",
      "Documentation suitable for internal review",
    ],
    outputs: [
      "Structured inspection reports",
      "Clear identification of observed conditions",
      "Evidential photographs",
      "Reporting aligned with housing standards",
    ],
  },
  {
    image: "/assets/images/recent-work-2.png",
    alt: "Portfolio damp assessment",
    title: "Portfolio Damp Assessment",
    tags: ["Regional Housing Association", "Planned Programme"],
    scope: [
      "Independent damp and mould inspections across 150 properties",
      "Assessment of contributing factors",
      "Risk prioritisation framework",
      "Budget recommendations",
    ],
    risks: [
      "Multiple tenure types",
      "Programme coordination",
      "Access management",
      "Data governance",
    ],
    outputs: [
      "Risk-prioritised remediation programme",
      "Budget framework",
      "Evidential photographs",
      "Executive summary report",
    ],
  },
  {
    image: "/assets/images/recent-work-3.png",
    alt: "HHSRS compliance review",
    title: "Housing Health & Safety Rating System Compliance Review",
    tags: ["Metropolitan Council", "Regulatory Compliance"],
    scope: [
      "HHSRS assessments across council stock",
      "Hazard identification and scoring",
      "Compliance status reporting",
      "Remediation recommendations",
    ],
    risks: [
      "Regulatory exposure",
      "Occupied properties",
      "Multi-site coordination",
      "Legal documentation requirements",
    ],
    outputs: [
      "Compliance status confirmed",
      "Risk register updated",
      "Hazard scoring reports",
      "Action priority matrix",
    ],
  },
  {
    image: "/assets/images/recent-work-3.png",
    alt: "Tenant disrepair investigation",
    title: "Tenant Disrepair Investigation",
    tags: ["Legal Instruction", "Dispute Resolution"],
    scope: [
      "Independent condition reporting",
      "Defect analysis and causation",
      "Photographic evidence gathering",
      "Expert opinion preparation",
    ],
    risks: [
      "Active legal proceedings",
      "Tenant access sensitivity",
      "CPR-35 compliance",
      "Impartiality requirements",
    ],
    outputs: [
      "Evidence-based condition report",
      "Support for settlement negotiations",
      "Evidential photographs",
      "Expert witness statement",
    ],
  },
];

const RecentWork = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = cases.length;

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

  const prev = useCallback(
    () => animate(() => setCurrent((i) => (i - 1 + total) % total), "left"),
    [animate, total]
  );
  const next = useCallback(
    () => animate(() => setCurrent((i) => (i + 1) % total), "right"),
    [animate, total]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      animate(() => setCurrent((i) => (i + 1) % total), "right");
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [animate, total]);

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
    transition: "opacity 350ms ease, transform 350ms ease",
  };

  const c = cases[current];

  return (
    <section className="py-16 lg:py-24 px-4 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <Reveal animation="fade-up" duration={600}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-10">
            Recent Work
          </h2>
        </Reveal>

        {/* Card */}
        <Reveal animation="fade-up" duration={600} delay={100}>
          <div
            style={slideStyle}
            className="bg-white border border-gray-200 rounded-[24px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12"
          >
            {/* Left — Image */}
            <div className="relative w-full lg:w-111 xl:w-114 shrink-0 rounded-2xl overflow-hidden h-56 lg:h-auto min-h-106.5">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>

            {/* Right — Content */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-[#101828] mb-3 leading-snug">
                {c.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {c.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${sourceSans.className} text-sm text-[#364153] bg-[#F3F4F6] px-3 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Scope + Risk two-column */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                <div>
                  <p className="font-bold text-[#101828] text-sm mb-2">Scope of Instruction</p>
                  <ul className="space-y-1.5">
                    {c.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#262A6F] shrink-0" />
                        <span className={`${sourceSans.className} text-[#4A5565] text-sm leading-relaxed`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-[#101828] text-sm mb-2">Risk Considerations</p>
                  <ul className="space-y-1.5">
                    {c.risks.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#262A6F] shrink-0" />
                        <span className={`${sourceSans.className} text-[#4A5565] text-sm leading-relaxed`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Output Delivered */}
              <div>
                <p className="font-bold text-[#101828] text-sm mb-2">Output Delivered</p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                  {c.outputs.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#262A6F] shrink-0" />
                      <span className={`${sourceSans.className} text-[#4A5565] text-sm`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => animate(() => setCurrent(i), i > current ? "right" : "left")}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: i === current ? "80px" : "32px",
                  backgroundColor: i === current ? "#DBB38E" : "#D1D5DB",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
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

export default RecentWork;