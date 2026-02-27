import React from "react";
import Image from "next/image";

const ServicesHero = () => {
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
      <div className="absolute inset-0 bg-[#151515CC]" />

      {/* Content */}
      <div className="relative z-10 rounded-4xl w-full pt-44 lg:pt-56 text-center px-4">
        <div className="text-white text-4xl lg:text-7xl tracking-tight leading-[100%]">
          Our Comprehensive Services
        </div>
        <p className="mt-10 lg:w-[45%] mx-auto text-[#E5E7EB] text-xl lg:text-3xl leading-relaxed">
          Select the option that best describes you and we&apos;ll guide you to
          the right service.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
