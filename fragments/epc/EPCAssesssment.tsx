import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const factors = [
  {
    title: "Property Size:",
    description: "The overall dimensions and layout of the property.",
  },
  {
    title: "Insulation:",
    description: "The type and extent of insulation present.",
  },
  {
    title: "Construction Type:",
    description:
      "The materials and methods used in the property's construction.",
  },
  {
    title: "Lighting:",
    description: "The types of lighting fixtures and their efficiency.",
  },
  {
    title: "Heating Systems:",
    description: "The heating systems installed and their control mechanisms.",
  },
  {
    title: "Ventilation:",
    description: "The effectiveness of the property's ventilation system.",
  },
];

const EPCAssessmentProcess = () => {
  return (
    <div>
      {/* ── Top: heading + intro — white bg ── */}
      <section className="py-16 lg:py-20 px-4 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-6 leading-13">
            The Domestic EPC Assessment Process
          </h2>
          <p
            className={`${sourceSans.className} text-base md:text-2xl text-[#151515] leading-relaxed w-full lg:w-[77%] mx-auto`}
          >
            During a domestic EPC assessment, the assessor evaluates various
            factors that influence the property&apos;s energy efficiency,
            resulting in an &lsquo;energy rating.&rsquo; To conduct a thorough
            assessment, the assessor will need access to all areas of the
            property.
          </p>
        </div>
      </section>

      {/* ── Bottom: factors + image — light bg ── */}
      <section className="py-16 lg:py-20 px-4 bg-[#FBF7F4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.55fr_0.45fr] gap-4 items-start">
          {/* Left: factors list */}
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-[#101828] mb-8 leading-13">
              Some of the factors assessed during the EPC evaluation include:
            </h3>

            <ul className="space-y-5">
              {factors.map((factor) => (
                <li key={factor.title} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-[#262A6F] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className={`text-sm md:text-lg leading-7 font-bold text-[#101828]`}>
                      {factor.title}
                    </p>
                    <p
                      className={`${sourceSans.className} text-sm md:text-base text-[#4A5565]`}
                    >
                      {factor.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image + caption */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/epc-assessor.png"
                alt="EPC assessor with laptop on construction site"
                height={548}
                width={539}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p
              className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-6`}
            >
              Based on this information, the energy efficiency of the property
              is rated from A to G, with &lsquo;A&rsquo; representing the
              highest efficiency and &lsquo;G&rsquo; the lowest.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EPCAssessmentProcess;
