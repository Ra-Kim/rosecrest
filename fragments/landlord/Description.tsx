"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Shield, ShieldHalf } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";

const partnerLogos = [
  { name: "IPWS", src: "/assets/brands/ipws.svg", height: 22, width: 66 },
  { name: "CABE", src: "/assets/brands/cabe.svg", height: 36, width: 66 },
  { name: "RPSA", src: "/assets/brands/rpsa.svg", height: 37, width: 66 },
  { name: "RICS", src: "/assets/brands/rics.svg", height: 23, width: 58 },
  {
    name: "Constructionline",
    src: "/assets/brands/constructionline.svg",
    height: 29,
    width: 55,
  },
  {
    name: "SafeContractor",
    src: "/assets/brands/safecontractor.svg",
    height: 21,
    width: 133,
  },
];

const trustBadges = [
  { icon: Award, text: "RICS Regulated" },
  { icon: CheckCircle, text: "Constructionline Gold" },
  { icon: Shield, text: "SafeContractor approved" },
  { icon: ShieldHalf, text: "Professional indemnity insured" },
];

const LandlordsDesc = () => {

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* ── Left Column ── */}
        <div className="flex flex-col justify-center">
          <Reveal animation="fade-right" duration={600} delay={100}>
            <h2
              className={`${sourceSans.className} text-base lg:text-2xl text-[#4A5565] mb-8 leading-tight w-[87%]`}
            >
              We help landlords understand property condition issues quickly and
              objectively through independent inspections and professional
              reports. Whether responding to a tenant claim, preparing for a
              potential claim, or ensuring compliance with Awaab&apos;s Law, our
              assessments provide clear findings and help landlords understand
              the appropriate next steps.
            </h2>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={200}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-6">
              {partnerLogos.map((logo) => (
                <div key={logo.name} className="relative">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    height={logo.height}
                    width={logo.width}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={300}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
              {trustBadges.map((badge, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex items-center gap-1.5 text-[#4A5565] ${sourceSans.className}`}
                  >
                    <badge.icon className="w-6 h-6 text-[#4A5565]" />
                    <span>{badge.text}</span>
                  </div>
                  {index < trustBadges.length - 1 && (
                    <div className="w-2 h-2 rounded-full bg-[#DBB38E]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal animation="fade-up" duration={500} delay={400}>
            <div className="flex items-center gap-6 flex-wrap mt-1">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full h-15"
                >
                  Discuss a Property Issue
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ── Right Column — Image ── */}
        <Reveal animation="fade-left" duration={700} delay={150}>
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/landlord.png"
              alt="Surveyor inspecting property condition"
              height={451}
              width={579}
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default LandlordsDesc;
