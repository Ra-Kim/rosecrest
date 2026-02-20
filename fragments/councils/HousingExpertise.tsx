import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const features = [
  {
    title: "Damp & mould investigations",
    description:
      "Independent assessment of damp and mould conditions with contributing factor analysis",
  },
  {
    title: "Housing condition reporting",
    description:
      "Detailed property condition assessments aligned with housing standards",
  },
  {
    title: "Compliance assessments",
    description: "HHSRS and regulatory compliance inspections",
  },
  {
    title: "Tenant complaint support",
    description:
      "Independent investigation and reporting for dispute resolution",
  },
];

const HousingExpertise = () => {
  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-4 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left — Text Content */}
        <div className="flex flex-col">
          <h2 className="text-4xl lg:text-[40px] font-bold text-[#101828] mb-10 leading-tight">
            Housing Standards & Damp / <br className="hidden lg:block" />
            Mould Expertise
          </h2>

          {/* Feature list */}
          <div className="space-y-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#262A6F] mt-1.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#101828] text-base md:text-lg mb-1">
                    {feature.title}
                  </p>
                  <p
                    className={`${sourceSans.className} text-[#4A5565] text-sm md:text-base leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link */}
          <Link
            href="/services/damp-mould"
            className={`${sourceSans.className} text-[#262A6F] font-semibold text-base flex items-center gap-1 hover:underline w-fit`}
          >
            View Damp &amp; Mould Service →
          </Link>
        </div>

        {/* Right — Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/terraces.png"
            alt="Apartment building for landlords and property owners"
            height={451}
            width={579}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HousingExpertise;
