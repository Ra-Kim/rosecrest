"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const items = [
  {
    title: "Contaminated Land Assessments",
    description:
      "Identifying past industrial use, potential pollution risks, and remediation requirements.",
  },
  {
    title: "Flood Risk Analysis",
    description:
      "Includes river, surface, groundwater, and coastal flood data to assess exposure and insurance implications.",
  },
  {
    title: "Ground Stability Checks",
    description:
      "Insight into risks from subsidence, sinkholes, and mining activity.",
  },
  {
    title: "Radon Exposure Mapping",
    description:
      "Identifying areas with elevated radon gas levels and associated health risks.",
  },
  {
    title: "Proximity to Environmental Hazards",
    description:
      "Including landfill sites, energy infrastructure, and other potential nuisances.",
  },
  {
    title: "Climate Impact Considerations",
    description:
      "Future-proof your investment by understanding climate-related risk factors such as increased flooding and heat stress.",
  },
];

const EnvironmentalDescription = () => {
  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

        {/* Left — content */}
        <Reveal animation="fade-right" duration={600}>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101828] mb-8 leading-tight">
              What Our Environmental Reports Cover:
            </h2>

            <Stagger animation="fade-up" staggerMs={80} duration={400} className="space-y-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-[#262A6F] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#101828] text-sm mb-0.5">{item.title}</p>
                    <p className={`${sourceSans.className} text-sm text-[#4A5565] leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Right — image */}
        <Reveal animation="fade-left" duration={700} delay={150}>
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/environmental.png"
              alt="Environmental landscape assessment"
              height={556}
              width={687}
              className="object-cover rounded-[24px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default EnvironmentalDescription;