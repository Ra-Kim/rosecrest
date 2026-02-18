import React from "react";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import Image from "next/image";

interface SurveyOverviewProps {
  surveyLevel: 1 | 2 | 3;
  title: string;
  description: string;
  includedTitle: string;
  includedItems: {
    title: string;
    description: string;
  }[];
  note?: string;
}

const SurveyOverview = ({
  title,
  description,
  includedTitle,
  includedItems,
  note,
}: SurveyOverviewProps) => {
  return (
    <section className="py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Title and Description */}
        <div className="mb-16">
          <h2 className="text-xl lg:text-3xl font-bold text-[#101828] text-center mb-6">
            {title}
          </h2>
          <p
            className={`${sourceSans.className} text-[#364153] text-sm lg:text-base leading-relaxed text-justify mx-auto`}
          >
            {description}
          </p>
        </div>

        {/* What's Included Section */}
        <div>
          <h3 className="text-xl lg:text-3xl font-bold text-[#101828] text-center mb-12">
            {includedTitle}
          </h3>

          <div className="space-y-8">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#DBB38E] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm lg:text-base font-semibold text-[#101828] mb-2">
                    {item.title}
                  </h4>
                  <p
                    className={`${sourceSans.className} text-[#4A5565] text-xs md:text-sm leading-relaxed`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note Section */}
          {note && (
            <div className="mt-12 bg-[#EFF6FF] rounded-3xl p-4 lg:p-6 flex items-center gap-3 border border-[#DBEAFE] h-[72.5px]">
              <Image
                src="/assets/svgs/icon.svg"
                alt="info"
                height={24}
                width={24}
              />
              <div>
                <p className={`${sourceSans.className} text-[#364153] text-sm`}>
                  <span className="font-semibold">Please note:</span> {note}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurveyOverview;
