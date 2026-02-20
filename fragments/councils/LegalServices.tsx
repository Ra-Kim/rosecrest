import React from "react";
import Image from "next/image";
import { Scale } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Expert witness reporting",
    description:
      "Professional expert witness services for property-related legal proceedings and tribunal matters.",
  },
  {
    title: "CPR-35 experience",
    description:
      "Civil Procedure Rules Part 35 compliant expert reporting with understanding of legal process requirements.",
  },
  {
    title: "Independent expert advice",
    description:
      "Technical consultancy and independent professional opinion on property condition and defects.",
  },
];

const LegalExpertServices = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 lg:py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-10">
        Legal &amp; Expert Services
      </h2>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left — Dark card */}
        <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F]  rounded-[24px] p-8 lg:p-10">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-0.5">
                  <Scale className="w-5 h-5 text-[#DBB38E]" />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-bold text-base md:text-xl mb-1.5">
                    {service.title}
                  </h3>
                  <p
                    className={`${sourceSans.className} text-white/70 text-sm leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/terraces.png"
            alt="Apartment building for landlords and property owners"
            height={380}
            width={545}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default LegalExpertServices;
