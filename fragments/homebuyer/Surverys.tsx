import React from "react";
import SurveyCard from "@/components/homebuyer/SurveyCard";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const Surveys = () => {
  const surveys = [
    {
      level: 1,
      title: "Level 1 — Home Conditions Survey",
      badge: {
        text: "Best for newer homes",
        variant: "green" as const,
      },
      features: [
        "Ideal for new builds and standardised properties built within the last 5-10 years",
        "Perfect for obtaining a brief insight of the property condition",
        "Appropriate for unaltered and non-extended property",
        "Not suitable for older, larger or non-traditional properties",
      ],
      buttonText: "Select Level 1 Survey",
      buttonLink: "homebuyer/survey-level-1",
    },
    {
      level: 2,
      title: "Level 2 — Homebuyer Survey",
      badge: {
        text: "Most common choice",
        variant: "blue" as const,
      },
      features: [
        "Modern / conventional properties",
        "Visual inspection",
        "Detailed condition ratings",
        "Ideal for low-risk purchases",
      ],
      buttonText: "Select Level 2 Survey",
      buttonLink: "homebuyer/survey-level-2",
    },
    {
      level: 3,
      title: "Level 3 — Building Survey",
      badge: {
        text: "Most comprehensive",
        variant: "purple" as const,
      },
      features: [
        "Older, altered or non-standard buildings",
        "Full defect analysis",
        "Repair implications & costings included",
        "For buyers who want certainty",
      ],
      buttonText: "Select Level 3 Survey",
      buttonLink: "homebuyer/survey-level-3",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-[#DBB38E]" />
            <p
              className={`${sourceSans.className} text-[#6A7282] text-sm lg:text-2xl`}
            >
              Let&apos;s help you choose the right survey
            </p>
          </div>
        </div>

        {/* Survey Cards Grid */}
        <div className="grid gap-8">
          {surveys.map((survey) => (
            <SurveyCard key={survey.level} {...survey} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Surveys;
