import React from "react";
import Image from "next/image";
import { Scale } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const services = [
  {
    title: "Expert witness reporting",
    description:
      "Professional expert witness services for property-related legal matters.",
  },
  {
    title: "CPR-35 experience",
    description:
      "Expert reporting aligned with Civil Procedure Rules Part 35.",
  },
  {
    title: "Independent expert advice",
    description:
      "Professional opinion and technical consultancy on building condition and defects.",
  },
];

const LegalExpertServices = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 lg:py-16 px-4">
      <Reveal animation="fade-up" duration={600}>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-4">
          Legal and Expert Support
        </h2>
        <p
          className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] text-center max-w-4xl mx-auto mb-12`}
        >
          We support councils and housing organisations involved in disputes,
          investigations and legal proceedings
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left — Dark card */}
        <Reveal animation="fade-right" duration={650} delay={100}>
          <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-[24px] p-8 lg:p-10">
            <Stagger
              animation="fade-up"
              staggerMs={130}
              duration={480}
              className="space-y-8"
            >
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <Scale className="w-5 h-5 text-[#DBB38E]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base md:text-xl mb-1.5">
                      {service.title}
                    </h3>
                    <p
                      className={`${sourceSans.className} text-white/70 text-sm leading-relaxed`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Right — Image */}
        <Reveal animation="fade-left" duration={700} delay={100}>
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/terraces.png"
              alt="Apartment building for landlords and property owners"
              height={380}
              width={545}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LegalExpertServices;
