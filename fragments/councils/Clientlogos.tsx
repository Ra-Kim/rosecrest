import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const logos = [
  { src: "/assets/logos/client-1.png", alt: "Client Logo 1" },
  { src: "/assets/logos/client-2.png", alt: "Client Logo 2" },
  { src: "/assets/logos/client-3.png", alt: "Client Logo 3" },
  { src: "/assets/logos/client-4.png", alt: "Client Logo 4" },
  { src: "/assets/logos/client-5.png", alt: "Client Logo 5" },
  { src: "/assets/logos/client-6.png", alt: "Client Logo 6" },
  { src: "/assets/logos/client-7.png", alt: "Client Logo 7" },
  { src: "/assets/logos/client-8.png", alt: "Client Logo 8" },
];

const ClientLogos = () => {
  return (
    <section className="max-w-7xl mx-auto p pt-6 pb-8 px-4">
      {/* Heading */}
      <p
        className={`${sourceSans.className} text-center text-[#4A5565] text-base lg:text-2xl mb-10`}
      >
        Experience supporting councils, housing associations and public sector organisations
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#F9FAFB] border border-[#E5E7EB] rounded-3xl h-24"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              className="object-contain max-h-12 opacity-60 grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;