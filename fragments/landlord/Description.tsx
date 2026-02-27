"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Shield } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import Link from "next/link";

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
  { icon: Shield, text: "Professionally insured" },
];

const LandlordsDesc = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* ── Left Column ── */}
        <div className="flex flex-col justify-center">
          {/* Pill */}
          <div className="mb-6">
            <span
              className={`${sourceSans.className} inline-block bg-[#262A6F1A] text-[#262A6F] text-sm h-8 font-medium px-4 py-2 rounded-full`}
            >
              For Landlords &amp; Property Owners
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`${sourceSans.className} text-base lg:text-2xl text-[#4A5565] mb-8 leading-tight w-[90%]`}
          >
            Clear reporting when compliance, tenant claims or property condition
            matters need to be addressed quickly and properly.
          </h2>

          {/* Partner logos */}
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

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
            {trustBadges.map((badge, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center gap-1.5 text-[#4A5565] ${sourceSans.className}`}
                >
                  <badge.icon className="w-6 h-6 text-[#4A5565]" />
                  <span className="">{badge.text}</span>
                </div>
                {index < trustBadges.length - 1 && (
                  <div className="w-2 h-2 rounded-full bg-[#DBB38E]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap mt-1">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full h-15"
              >
                Speak with a Consultant
              </Button>
            </Link>
            <button
              onClick={() => scrollTo("more-info")}
              className={`${sourceSans.className} text-[#101828] text-base font-medium flex items-center gap-1 hover:underline`}
            >
              Need advice? Request a discussion →
            </button>
          </div>
        </div>

        {/* ── Right Column — Image ── */}
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
      </div>
    </div>
  );
};

export default LandlordsDesc;
