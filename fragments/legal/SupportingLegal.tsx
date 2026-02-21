import React from "react";
import Image from "next/image";
import { CheckCircle, Award } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const features = [
  "RICS-regulated surveyors with professional indemnity",
  "CPR-35 compliant expert witness experience",
  "Clear separation between inspection, reporting and advocacy",
];

const SupportingLegalProfessionals = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-12 leading-tight max-w-4xl mx-auto">
        Supporting Legal Professionals with Independent Expertise
      </h2>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Left — Image */}
        <div className="rounded-[24px] overflow-hidden">
          <Image
            src="/assets/images/legal-professionals.png"
            alt="Professional office environment"
            width={584}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right — Navy card */}
        <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
          {/* Icon */}
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-8 shrink-0">
            <Award className="w-7 h-7 text-[#262A6F]" />
          </div>

          {/* Body text */}
          <p className={`${sourceSans.className} text-white/90 text-base md:text-lg leading-relaxed mb-5`}>
            We understand the requirements of legal instructions and the need
            for reports that are clear, independent and prepared to professional
            standards.
          </p>
          <p className={`${sourceSans.className} text-white/90 text-base md:text-lg leading-relaxed mb-8`}>
            Our services support solicitors across property disputes, disrepair
            claims, personal injury matters and formal proceedings where
            independent property inspection evidence is required.
          </p>

          {/* Feature list */}
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#DBB38E] shrink-0" />
                <span className={`${sourceSans.className} text-white`}>
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

export default SupportingLegalProfessionals;