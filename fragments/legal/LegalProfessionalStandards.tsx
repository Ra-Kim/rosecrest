import React from "react";
import { Award, Scale, Shield, CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const standards = [
  {
    icon: <Award className="w-6 h-6 text-[#262A6F]" />,
    title: "RICS Regulated Firm",
    description: "Regulated by the Royal Institution of Chartered Surveyors and operating to recognised professional standards.",
  },
  {
    icon: <Scale className="w-6 h-6 text-[#262A6F]" />,
    title: "CPR-35 Experience",
    description:"Experienced in preparing reports that meet the requirements of the Civil Procedure Rules.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#262A6F]" />,
    title: "Professional Indemnity Cover",
    description: "Appropriate professional indemnity insurance in place for expert reporting work.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#262A6F]" />,
    title: "Independent Opinion",
    description: "Objective inspections and evidence-based findings prepared with professional independence.",
  },
];

const ProfessionalStandardsLegal = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4">

      <Reveal animation="fade-up" duration={600}>
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
            Professional Standards &amp; Credentials
          </h2>
          <p className={`${sourceSans.className} text-[#6A7282] text-base lg:text-lg`}>
            The standards and professional safeguards behind our expert reporting services.
          </p>
        </div>
      </Reveal>

      <Stagger
        animation="fade-up"
        staggerMs={120}
        duration={500}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {standards.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#262A6F1A] flex items-center justify-center">
              {item.icon}
            </div>

            {/* Title + short description */}
            <div>
              <p className="font-bold text-[#101828] text-base mb-1">
                {item.title}
              </p>
              <p className={`${sourceSans.className} text-[#6A7282] text-sm leading-relaxed mb-3`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Stagger>

    </section>
  );
};

export default ProfessionalStandardsLegal;