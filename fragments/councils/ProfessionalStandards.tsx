import React from "react";
import { Award, Scale, Shield, CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const standards = [
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: "RICS",
    subtitle: "Regulated",
  },
  {
    icon: <Scale className="w-7 h-7 text-white" />,
    title: "CPR-35",
    subtitle: "Experience",
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: "Constructionline",
    subtitle: "Gold",
  },
  {
    icon: <Shield className="w-7 h-7 text-white" />,
    title: "SafeContractor",
    subtitle: "Accredited",
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    title: "Professional",
    subtitle: "Indemnity",
  },
];

const ProfessionalStandards = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-14">
        Professional Standards &amp; Governance
      </h2>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-between gap-10 lg:gap-16 px-20">
        {standards.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            {/* Icon box */}
            <div className="w-20 h-20 bg-[#262A6F] rounded-2xl flex items-center justify-center">
              {item.icon}
            </div>
            {/* Labels */}
            <div className="text-center">
              <p className={`${sourceSans.className} text-[#101828] font-medium`}>
                {item.title}
              </p>
              <p className={`${sourceSans.className} text-[#6A7282] text-sm`}>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalStandards;