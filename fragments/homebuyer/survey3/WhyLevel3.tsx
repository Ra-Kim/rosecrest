import { sourceSans } from "@/lib/fonts";
import { CheckCircle } from "lucide-react";
import React from "react";

const WhyLevel3 = () => {
  const features = [
    "Most thorough inspection available",
    "Expert structural analysis",
    "Detailed repair recommendations",
    "Optional cost estimates included",
  ];
  return (
    <section className="pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl p-8 lg:p-12">
          <h2 className="text-lg lg:text-xl font-bold text-white mb-4">
            Why choose a Level 3 Building Survey?
          </h2>

          <p
            className={`${sourceSans.className} text-[#F3F4F6] text-sm lg:text-base mb-8 leading-relaxed w-4/5`}
          >
            The Level 3 survey is the most detailed property inspection
            available, providing you with complete peace of mind. It&apos;s
            especially valuable for properties where structural integrity,
            historical significance, or extensive renovation plans are key
            considerations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            {features.map((feature, index) => (
              <p key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DBB38E] shrink-0 mt-0.5" />
                <span
                  className={`${sourceSans.className} text-white text-sm`}
                >
                  {feature}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLevel3;
