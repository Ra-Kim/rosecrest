import React from "react";
import {
  FileText,
  Scale,
  ClipboardCheck,
  Droplets,
  Building,
  Users,
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const services = [
  {
    icon: <FileText className="w-5 h-5 text-[#262A6F]" />,
    title: "Housing Disrepair Claims",
    description:
      "Independent inspections and reports assessing property condition, defects and repair responsibilities.",
  },
  {
    icon: <Scale className="w-5 h-5 text-[#262A6F]" />,
    title: "Structural Defect Inspections",
    description:
      "Inspection of cracking, movement and structural concerns with professional observations on condition.",
  },
  {
    icon: <Droplets className="w-5 h-5 text-[#262A6F]" />,
    title: "Damp & Mould Investigations",
    description:
      "Assessment of damp, mould and condensation issues, including likely causes and contributing factors.",
  },
  {
    icon: <Building className="w-5 h-5 text-[#262A6F]" />,
    title: "Water Ingress & Building Defects",
    description:
      "Investigation of water penetration and building defects affecting the condition of the property.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5 text-[#262A6F]" />,
    title: "Property Condition for Litigation",
    description:
      "Independent condition assessments prepared to support ongoing legal matters.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#262A6F]" />,
    title: "Landlord & Tenant Disputes",
    description:
      "Objective inspections to assess property condition where disputes have arisen between parties.",
  },
];

const LegalServices = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <Reveal animation="fade-up" duration={600}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-4">
            Legal Matters We Support
          </h2>
          <p
            className={`${sourceSans.className} text-base lg:text-lg text-[#4A5565] text-center max-w-4xl mx-auto mb-12`}
          >
            Rosecrest provides independent property inspections and expert
            reporting across a range of property-related legal matters,
            including:
          </p>
        </Reveal>

        <Stagger
          animation="fade-up"
          staggerMs={100}
          duration={500}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 min-h-62.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#262A6F1A] flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <h3 className="font-bold text-[#101828] text-lg leading-snug">
                {service.title}
              </h3>
              <p
                className={`${sourceSans.className} text-[#6A7282] text-base leading-relaxed`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default LegalServices;
