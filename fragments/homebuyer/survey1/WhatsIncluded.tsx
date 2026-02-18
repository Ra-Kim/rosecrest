import { sourceSans } from "@/lib/fonts";
import React from "react";

const WhatIsIncluded = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-8 lg:mb-12">
          What is included?
        </h2>

        {/* Content */}
        <div
          className={`${sourceSans.className} space-y-6 text-[#364153] text-base text-justify leading-relaxed`}
        >
          <p>
            This report provides an overview of the building&apos;s condition,
            including its services and grounds. It highlights any defects or
            issues identified during the inspection, using an easy-to-understand
            traffic light system. Additionally, the report addresses relevant
            legal matters and potential risks to the building, its occupants or
            the surrounding grounds.
          </p>

          <p>
            The RICS Level 1 Survey, also known as a Condition Survey, does not
            offer specific advice on repairs or ongoing maintenance. If the
            surveyor is unable to draw conclusions about any part of the
            property with sufficient confidence, the report will recommend
            further investigations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncluded;
