import React from "react";
import { ClipboardList, FileText, Shield, Briefcase } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const features = [
  {
    icon: <ClipboardList className="w-5 h-5 text-white/70" />,
    title: "Governance aligned reporting",
    description: "Reports structured to support audit trails and governance requirements",
  },
  {
    icon: <Shield className="w-5 h-5 text-white/70" />,
    title: "Independent inspections",
    description: "Professional independence maintained in all assessments",
  },
  {
    icon: <FileText className="w-5 h-5 text-white/70" />,
    title: "Risk-aware documentation",
    description: "Reporting that supports risk registers and management frameworks",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-white/70" />,
    title: "Clear scope definition",
    description: "Transparent service specifications aligned with procurement processes",
  },
];

const ComplianceRisk = () => {
  return (
    <section className="max-w-7xl mx-auto pt-8 pb-12 px-4">
      <Reveal animation="fade-up" duration={600}>
        <div className="bg-linear-to-b from-[#31368B] to-[#1A1D4F] rounded-[24px] px-4 sm:px-12 py-20">

          <Reveal animation="fade-up" duration={500} delay={100}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
              Compliance &amp; Risk Management
            </h2>
          </Reveal>

          <Stagger
            animation="fade-up"
            staggerMs={120}
            duration={500}
            className="grid sm:grid-cols-2 gap-x-16 gap-y-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#DBB38E33] flex items-center justify-center mt-0.5">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg mb-1">
                    {feature.title}
                  </p>
                  <p className={`${sourceSans.className} text-white text-sm md:text-base leading-relaxed w-[90%]`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </Stagger>

        </div>
      </Reveal>
    </section>
  );
};

export default ComplianceRisk;