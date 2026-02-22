import React from "react";
import { Award, Scale, Shield, CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const standards = [
  {
    icon: <Award className="w-6 h-6 text-[#262A6F]" />,
    title: "RICS Regulated",
    description: "All surveyors regulated by RICS professional standards",
  },
  {
    icon: <Scale className="w-6 h-6 text-[#262A6F]" />,
    title: "CPR-35 Experience",
    description: "Expert witness reporting compliant with CPR Part 35",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#262A6F]" />,
    title: "Professional Indemnity",
    description: "Comprehensive professional indemnity insurance in place",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#262A6F]" />,
    title: "Clear Separation",
    description: "Separation between inspection, reporting and advocacy",
  },
];

const ProfessionalStandardsLegal = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
          Professional Standards
        </h2>
        <p className={`${sourceSans.className} text-[#6A7282] text-base lg:text-lg`}>
          Independence and professional integrity in all instructions
        </p>
      </div>

      {/* Icons row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {standards.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            {/* Circle icon */}
            <div className="w-16 h-16 rounded-full bg-[#262A6F1A] flex items-center justify-center">
              {item.icon}
            </div>
            {/* Labels */}
            <div>
              <p className="font-bold text-[#101828] text-base mb-1">
                {item.title}
              </p>
              <p className={`${sourceSans.className} text-[#6A7282] text-sm leading-relaxed`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalStandardsLegal;