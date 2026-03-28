import React from "react";
import Image from "next/image";

const BlogHero = ({ children, height }: { children: React.ReactNode, height?: string }) => {
  return (
    <div className={`relative w-full min-h-43 md:min-h-85 ${height || ""}`}>
      {/* Background Image */}
      <Image
        src="/assets/images/journey-hero.jpg"
        alt="Journey background"
        fill
        priority
        className="object-cover"
         style={{
          objectPosition: "center top",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#151515B2]" />

      {/* Content */}
      <div className="relative z-10 rounded-4xl w-full pt-36 md:pt-56 text-center px-4">
        {children}
      </div>
    </div>
  );
};

export default BlogHero;
