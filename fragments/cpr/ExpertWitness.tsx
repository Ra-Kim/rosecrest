import { sourceSans } from "@/lib/fonts";
import Image from "next/image";
import { Award } from "lucide-react";
import React from "react";

const ExpertWitness = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl max-w-4xl mx-auto font-bold text-[#101828] text-center mb-10 leading-tight">
          Expert Witness Process
        </h2>

        {/* Image + dark card row */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 overflow-hidden">
          {/* Image */}
          <div className="relative min-h-72 md:min-h-full">
            <Image
              src="/assets/images/epc-assessor.png"
              alt="Terraced houses party wall"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Dark text card */}
          <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] p-12 flex flex-col gap-5 rounded-2xl">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-[#262A6F]" />
            </div>

            {/* Body paragraphs */}
            <div
              className={`${sourceSans.className} text-sm md:text-lg text-white/80 leading-relaxed space-y-3`}
            >
              <p>
                We begin by thoroughly reviewing the nature of your property
                dispute or related matter, gathering all necessary documents and
                evidence for a comprehensive assessment. This is followed by an
                in-depth property evaluation, including site inspections guided
                by legislative requirements, Building Regulations, and local
                authority standards.
              </p>
              <p>
                After completing the analysis, we compile our findings into a
                detailed report, incorporating relevant legal frameworks and
                expert opinions. Should your case require legal proceedings, we
                are prepared to serve as expert witnesses, providing clear and
                well-reasoned testimony to support your position.
              </p>
              <p>
                Once the case is resolved, we will meet with you to discuss the
                outcome, offer any further recommendations, and ensure that you
                are fully informed and satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertWitness;
