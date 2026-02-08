import React from "react";
import { Award, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const Brands = () => {
  // Trust badges for the top banner
  const trustBadges = [
    {
      icon: Award,
      text: "RICS Regulated",
    },
    {
      icon: CheckCircle,
      text: "Constructionline Gold",
    },
    {
      icon: Shield,
      text: "SafeContractor Accredited",
    },
  ];

  // Partner logos - using placeholder for now
  const partnerLogos = [
    { name: "IPWS", src: "/assets/brands/ipws.svg", height: 33, width: 100 },
    { name: "CABE", src: "/assets/brands/cabe.svg", height: 54, width: 100 },
    { name: "RPSA", src: "/assets/brands/rpsa.svg", height: 56, width: 100 },
    { name: "RICS", src: "/assets/brands/rics.svg", height: 34, width: 87 },
    {
      name: "Constructionline",
      src: "/assets/brands/constructionline.svg",
      height: 44,
      width: 83,
    },
    {
      name: "SafeContractor",
      src: "/assets/brands/safecontractor.svg",
      height: 32,
      width: 200,
    },
  ];

  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges Banner */}
        <div className="bg-[#262A6F] rounded-2xl lg:rounded-4xl px-6 lg:px-20 py-6 lg:py-8 mb-8 lg:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8">
            {trustBadges.map((badge, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-3 text-white">
                  <badge.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span
                    className={`${sourceSans.className} lg:text-2xl font-medium`}
                  >
                    {badge.text}
                  </span>
                </div>
                {index < trustBadges.length - 1 && (
                  <div className="hidden md:block w-2 h-2 rounded-full bg-[#DBB38E]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-8  items-center justify-items-center px-24">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="relative transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                height={logo.height}
                width={logo.width}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
