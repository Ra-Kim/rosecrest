import { sourceSans } from "@/lib/fonts";
import { CheckCircle } from "lucide-react";
import React from "react";

const WhatIsIncluded2 = () => {
  const features = [
    "A visual inspection of the property to evaluate its overall condition and state of repair",
    "Identification of major faults and defects, along with recommendations for further action",
    "Assessment of all building elements, both inside and outside, including walls, ceilings, roofs, gutters, windows and doors",
    "A visual appraisal of services such as gas/oil heating, electricity, water and drainage, with suggestions for further inspections if needed",
    "A traffic light grading system to indicate the severity of any identified issues",
    "Identification of urgent repair needs and future maintenance requirements",
    "Notes on planning, building control, disputes or other legal matters, for further investigation by your conveyancer",
  ];
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`${sourceSans.className} space-y-6 text-[#364153] text-base text-justify leading-relaxed`}
        >
          <p>
            Also known as the Homebuyer Report, the RICS Level 2 survey provides
            a detailed visual inspection of the property to assess its overall
            condition, including any notable defects. The report helps buyers
            make an informed decision about whether to proceed with their
            purchase. Please note, however, that our surveyors cannot advise
            whether to proceed with or withdraw from the purchase.
          </p>
        </div>
        {/* Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center my-8 lg:my-16">
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
            The RICS Level 2 survey includes more detail than a Condition
            Survey, with greater detail on defects and urgency of any issues
            identified. If the surveyor is unable to draw conclusions about any
            part of the property with sufficient confidence, the report will
            recommend further investigations.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#DBB38E] shrink-0 mt-0.5" />
                <span
                  className={`${sourceSans.className} text-[#364153] text-sm lg:text-base`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncluded2;
