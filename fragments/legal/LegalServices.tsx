import React from "react";
import { FileText, Scale, ClipboardCheck } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    icon: <FileText className="w-5 h-5 text-[#262A6F]" />,
    title: "Disrepair & Condition Reports",
    description:
      "Independent property condition assessment and defect analysis for housing disrepair claims.",
  },
  {
    icon: <Scale className="w-5 h-5 text-[#262A6F]" />,
    title: "Expert Witness Services",
    description:
      "CPR-35 compliant expert witness reporting for property-related legal proceedings.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5 text-[#262A6F]" />,
    title: "Damp & Mould Investigations",
    description:
      "Technical investigation and causation analysis for damp and mould-related disputes.",
  },
];

const LegalServices = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-4">
          Legal &amp; Expert Services
        </h2>
        <p
          className={`${sourceSans.className} text-base lg:text-lg text-[#4A5565] text-center max-w-2xl mx-auto mb-12`}
        >
          Independent property inspection and expert reporting for legal
          proceedings
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-4xl py-10 px-9 flex flex-col justify-between min-h-62.5"
            >
              {/* Icon box */}
              <div className="w-11 h-11 rounded-xl bg-[#262A6F1A] flex items-center justify-center">
                {service.icon}
              </div>
              {/* Text */}
              <h3 className="font-bold text-[#101828] text-lg">
                {service.title}
              </h3>
              <div>
                <p
                  className={`${sourceSans.className} text-[#6A7282] text-base leading-relaxed`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;
