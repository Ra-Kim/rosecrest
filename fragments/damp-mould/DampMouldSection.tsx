"use client";

import Image from "next/image";
import { Home, Search, TrendingUp, Camera, FileText, ArrowRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { useEnquiryStore } from "@/store/enquiry-store";
import { Reveal, Stagger } from "@/components/common/Reveal";

const inclusions = [
  { icon: Home, label: "On-site inspection of affected areas" },
  { icon: Search, label: "Identification of damp and mould conditions" },
  { icon: TrendingUp, label: "Analysis of contributing factors" },
  { icon: Camera, label: "Detailed photographic evidence" },
  { icon: FileText, label: "Written report for onward action" },
];

const DampMouldSurveySection = () => {
  const { openEnquiry } = useEnquiryStore();

  return (
    <section className="bg-[#FBF7F4] py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — image */}
        <Reveal animation="fade-right" duration={700}>
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full">
              <Image
                src="/assets/images/damp-mould-survey.png"
                alt="Surveyor inspecting damp and mould on wall"
                width={605}
                height={654}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </Reveal>

        {/* Right — content */}
        <div className="flex flex-col">
          <Reveal animation="fade-left" duration={600} delay={100}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] leading-tight mb-4">
              Fixed-Price Damp &<br />
              Mould Survey
            </h2>
            <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg leading-relaxed mb-8`}>
              Our comprehensive inspection provides clear documentation of
              observed conditions and contributing factors.
            </p>
          </Reveal>

          <Stagger animation="fade-up" staggerMs={80} duration={400} className="space-y-3 mb-10">
            {inclusions.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 bg-white border border-[#F3F4F6] rounded-2xl px-5 py-4 list-none"
              >
                <div className="w-10 h-10 rounded-xl bg-[#262A6F] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className={`${sourceSans.className} text-sm lg:text-base text-[#101828]`}>
                  {label}
                </span>
              </li>
            ))}
          </Stagger>

          <Reveal animation="fade-up" duration={400} delay={100}>
            <Button
              onClick={() => openEnquiry("Damp & Mould Survey")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white cursor-pointer rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2 w-fit"
            >
              Book Damp & Mould Survey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default DampMouldSurveySection;