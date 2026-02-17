import React from "react";
import Image from "next/image";

const JourneyHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-130">
      {/* Background Image */}
      <Image
        src="/assets/images/journey-hero.jpg"
        alt="Journey background"
        fill
        priority
        className="object-cover"
        quality={90}
         style={{
          objectPosition: "center top",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#151515B2]" />

      {/* Content */}
      <div className="relative z-10 rounded-4xl w-full pt-56 text-center px-4">
        {children}
      </div>
    </div>
  );
};

export default JourneyHero;
