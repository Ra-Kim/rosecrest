"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";

const CouncilsDesc = () => {
  const trust = [
    {
      icon: <CheckCircle className="w-4 h-4 text-[#DBB38E]" />,
      label: "RICS Regulated",
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-[#DBB38E]" />,
      label: "Professional Indemnity Insured",
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-[#DBB38E]" />,
      label: "Procurement & Governance Aligned",
    },
  ];

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <Reveal animation="fade-right" duration={600}>
            <h2
              className={`${sourceSans.className} text-base lg:text-2xl text-[#364153] mb-6 leading-[29.25px] w-[90%]`}
            >
              Rosecrest supports councils, housing associations and other public
              bodies with building inspections, condition reporting and
              specialist consultancy. Our work assists with tenant complaints,
              regulatory obligations and asset management within established
              procurement and governance frameworks.
            </h2>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={150}>
            <div className="flex items-center gap-2 text-[#4A5565] mb-8">
              {trust.map((item, i) => (
                <React.Fragment key={i}>
                  <span className="flex items-center gap-1.5 md:whitespace-nowrap">
                    {item.icon}
                    <span className={sourceSans.className}>{item.label}</span>
                  </span>
                  {i < trust.length - 1 && (
                    <span className="text-[#4A5565]/40">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={280}>
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full h-15"
                >
                  Discuss your requirements
                </Button>
              </Link>
              
            </div>
          </Reveal>
        </div>

        {/* Right Column - Image */}
        <Reveal animation="fade-left" duration={700} delay={150}>
          <div className="relative flex justify-end ">
            <Image
              src="/assets/images/storey.png"
              alt="Apartment building for landlords and property owners"
              height={451}
              width={579}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CouncilsDesc;
