import { sourceSans } from "@/lib/fonts";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[95vh]">
      {/* Background Image */}
      <Image
        src="/assets/images/landing-hero.png"
        alt="Property background"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#151515B2]" />

      {/* Content */}
      <div className="relative z-10 rounded-4xl w-full pt-72 text-center px-4">
        <p
          className={`${sourceSans.className} bg-[#DBB38E66] p-2.5 px-5 mb-8 rounded-4xl w-fit mx-auto font-medium text-lg text-white/90`}
        >
          Professional Property Services
        </p>
        <div className="text-white text-4xl lg:text-7xl tracking-tight leading-[100%]">
          What do you need help with today?
        </div>
        <p className="mt-10 lg:w-[45%] mx-auto text-[#E5E7EB] text-xl lg:text-3xl leading-relaxed">
          Select the option that best describes you and we&apos;ll guide you to
          the right service.
        </p>
      </div>
    </div>
  );
};

export default Hero;
