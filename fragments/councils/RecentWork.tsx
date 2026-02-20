import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const cases = [
  {
    image: "/assets/images/recent-work-1.png",
    alt: "Row of brick residential properties",
    title: "Portfolio Damp Assessment",
    description:
      "Independent damp and mould inspections across 150 properties for a regional housing association.",
    outcome:
      "Outcome: Risk-prioritised remediation programme and budget framework",
  },
  {
    image: "/assets/images/recent-work-2.png",
    alt: "Surveyors conducting field assessment with equipment",
    title: "Housing Health & Safety Rating System Compliance Review",
    description:
      "Housing Health & Safety Rating System assessments for a metropolitan council.",
    outcome: "Outcome: Compliance status confirmed and risk register updated",
  },
  {
    image: "/assets/images/recent-work-3.png",
    alt: "Professionals reviewing documents at a table",
    title: "Tenant Disrepair Investigation",
    description:
      "Independent condition reporting for legal dispute resolution.",
    outcome:
      "Outcome: Evidence-based report supporting settlement negotiations",
  },
];

const RecentWork = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-12">
          Recent Work
        </h2>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-4xl overflow-hidden flex flex-col p-8"
            >
              {/* Image */}
              <div className="relative h-65 w-full rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 py-6">
                <h3 className="text-xl font-bold text-[#101828] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p
                  className={`${sourceSans.className} text-[#4A5565] text-base leading-relaxed mb-4`}
                >
                  {item.description}
                </p>
                <p
                  className={`${sourceSans.className} text-[#6A7282] text-sm leading-relaxed mt-auto`}
                >
                  {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
