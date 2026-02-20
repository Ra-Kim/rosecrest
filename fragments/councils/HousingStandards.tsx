import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const HousingStandards = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl leading-15 font-bold text-[#101828] text-center mb-12 w-[87.5%] mx-auto">
        Supporting housing standards, compliance and risk management
      </h2>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-2 gap-16 relative">
       
        {/* Left — Image */}
        <div className="flex items-center justify-center">
          <div className="rounded-[24px] overflow-hidden w-full">
            <Image
              src="/assets/images/housing-standards.png"
              alt="Office interior showing professional workspace"
              width={583.86}
              height={566.96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right — Dark card */}
        <div className="lg:py-4">
          <div className="bg-linear-to-b from-[#31368B] to-[#1A1D4F] rounded-[24px] p-8 lg:p-10 w-full">
            {/* Icon */}
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-[#262A6F]" />
            </div>

            {/* Body text */}
            <p className={`${sourceSans.className} text-white/90 text-base leading-relaxed mb-4`}>
              We work alongside councils, housing associations and public sector
              organisations to deliver property inspection and reporting services
              that align with governance requirements and procurement processes.
            </p>
            <p className={`${sourceSans.className} text-white/90 text-base leading-relaxed mb-8`}>
              Our services are designed to support housing standards, compliance
              obligations, and risk management frameworks. All inspections are
              conducted by RICS-regulated surveyors with professional indemnity
              in place, ensuring independence and accountability. From individual
              property assessments to portfolio-wide programmes, we provide
              clear, evidence-based reporting that supports decision-making and
              demonstrates due diligence.
            </p>

            {/* Link */}
            <Link
              href="/services"
              className={`${sourceSans.className} text-white font-medium flex items-center gap-1 hover:underline text-base`}
            >
              Explore Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HousingStandards;