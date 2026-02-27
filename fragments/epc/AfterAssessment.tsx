import React from "react";
import { FileText, Zap, Lightbulb, LayoutList } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const sections = [
  {
    icon: <FileText className="w-5 h-5 text-white/70" />,
    title: "Property Information",
    description:
      "This includes details about the property, the assessment date, a reference number and average energy costs for similar property types.",
  },
  {
    icon: <Zap className="w-5 h-5 text-white/70" />,
    title: "Energy Rating",
    description:
      "You'll find the A-G energy efficiency rating and the Environmental Impact CO2 rating, which indicate the property's energy performance.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-white/70" />,
    title: "Recommendations",
    description:
      "The assessor will provide actionable suggestions for improving the building's energy efficiency, along with information on eligibility for assistance through the Green Deal.",
  },
  {
    icon: <LayoutList className="w-5 h-5 text-white/70" />,
    title: "Summary of Features",
    description:
      "This section summarises the property's features and their corresponding energy ratings based on U-values.",
  },
];

const AfterAssessment = () => {
  return (
    <section className="max-w-7xl mx-auto pt-8 pb-12 px-4">
      <div className="bg-linear-to-b from-[#31368B] to-[#1A1D4F] rounded-[24px] px-8 lg:px-16 py-14 lg:py-16">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-4">
          After the Assessment
        </h2>

        {/* Subtitle */}
        <p className={`${sourceSans.className} text-white/80 text-center text-base lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed`}>
          Once the assessment is complete, you will receive your Energy
          Performance Certificate (EPC), which consists of four key sections:
        </p>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
          {sections.map((section) => (
            <div key={section.title} className="flex gap-4">
              {/* Icon box */}
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[#DBB38E33] flex items-center justify-center mt-0.5">
                {section.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-white font-semibold text-base md:text-lg mb-1">
                  {section.title}
                </p>
                <p className={`${sourceSans.className} text-white/70 text-sm md:text-base leading-relaxed`}>
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterAssessment;