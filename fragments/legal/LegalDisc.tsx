"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import React from "react";
import { Reveal } from "@/components/common/Reveal";

const LegalDesc = () => {
  const trust = [
    { label: "Independent Expert Reports" },
    { label: "Evidence Based Assesments" },
    { label: "Legal Ready Reports" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 lg:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <Reveal animation="fade-right" duration={600}>
            <h2
              className={`${sourceSans.className} text-base md:text-lg text-[#364153] mb-8 leading-[29.25px] w-[90%]`}
            >
              Legal instructions require independence, clarity and reporting
              prepared in accordance with relevant professional standards. Our
              inspections assess issues such as damp, mould, structural defects,
              water ingress and general property condition, supported by
              photographic evidence and professional analysis. Reports provide
              clear findings, identify defects and their likely causes, and set
              out an impartial professional opinion suitable for legal review.
            </h2>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={150}>
            <div className="flex items-center gap-6 flex-wrap">
              <Button
                size="lg"
                onClick={() => scrollTo("services")}
                className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
              >
                Discuss an instruction
              </Button>
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={280}>
            <div className="flex flex-wrap items-center gap-2 text-[#4A5565] my-8 w-[105%]">
              {trust.map((item, i) => (
                <React.Fragment key={i}>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#DBB38E]" />
                    <span className={sourceSans.className}>{item.label}</span>
                  </span>
                  {i < trust.length - 1 && (
                    <span className="text-[#4A5565]/40">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column - Image */}
        <Reveal animation="fade-left" duration={700} delay={150}>
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/legal-disc.png"
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

export default LegalDesc;
