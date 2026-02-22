import React from "react";
import { Scale } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const LegalAidInstructions = () => {
  return (
    <section className="max-w-7xl mx-auto py-6 px-4">
      <div className="relative bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-[24px] px-8 py-20 text-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 right-16 w-52 h-52 rounded-full bg-[#DBB38E1A] pointer-events-none" />
        <div className="absolute -bottom-25 -left-20 w-52 h-52 rounded-full bg-[#DBB38E1A] pointer-events-none" />

        {/* Icon */}
        <div className="relative z-10 flex justify-center mb-5">
          <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF1A] flex items-center justify-center">
            <Scale className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-3xl lg:text-4xl font-bold text-white mb-4">
          Legal Aid Instructions
        </h2>

        {/* Body */}
        <p
          className={`${sourceSans.className} relative z-10 text-white/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto`}
        >
          Rosecrest accepts instructions funded by Legal Aid, subject to scope
          and approval <br/> requirements. We are happy to discuss Legal Aid matters
          to confirm eligibility and reporting requirements.
        </p>
      </div>
    </section>
  );
};

export default LegalAidInstructions;
