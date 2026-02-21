"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import React from "react";

const LegalDesc = () => {
  const trust = [
    {
      label: "Independednt",
    },
    {
      label: "Procedural",
    },
    {
      label: "Professional standards",
    },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2
            className={`${sourceSans.className} text-base lg:text-2xl text-[#364153] mb-8 leading-[29.25px] w-[90%]`}
          >
            Legal instructions require independence, clarity and reporting
            prepared in accordance with relevant professional standards.
            Rosecrest provides property inspections and independent reporting to
            support solicitors and legal professionals across disputes, claims
            and formal proceedings.
          </h2>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollTo("services")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Discuss an instruction
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#4A5565] my-8">
            {trust.map((item, i) => (
              <React.Fragment key={i}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#DBB38E]" />,
                  <span className={sourceSans.className}>{item.label}</span>
                </span>
                {i < trust.length - 1 && (
                  <span className="text-white/40">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/cottage.png"
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

export default LegalDesc;
