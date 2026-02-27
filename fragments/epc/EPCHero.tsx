import React from "react";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const features = [
  "Detailed Property Inspection.",
  "Accurate Measurements",
  "Full report and certificate issuance",
];

const EPCHero = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-5 leading-tight">
          Selling, renting, or simply curious about your home&apos;s energy
          efficiency?
        </h2>

        {/* Subheading */}
        <p className={`${sourceSans.className} text-base md:text-2xl text-[#151515] mb-12`}>
          We offer legally required EPCs, which include:
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-[#EDEEF0] rounded-2xl p-6 flex flex-col items-start gap-4 text-left"
            >
              <CheckCircle className="w-5 h-5 text-[#DBB38E]" strokeWidth={1.5} />
              <p className={`${sourceSans.className} text-sm md:text-lg text-[#4A5565] leading-snug`}>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EPCHero;