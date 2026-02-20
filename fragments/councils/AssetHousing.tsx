import React from "react";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Portfolio inspections",
    description:
      "Coordinated inspection programmes across multiple properties with consistent methodology and reporting standards.",
  },
  {
    title: "Stock condition surveys",
    description:
      "Systematic assessment of housing stock condition to inform investment planning and maintenance programmes.",
  },
  {
    title: "Programme support",
    description:
      "Consultancy and technical support for housing improvement programmes and capital works planning.",
  },
];

const AssetHousingStock = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-10">
          Asset &amp; Housing Stock Services
        </h2>

        {/* Services Card */}
        <div className="border border-[#E5E7EB] bg-white rounded-4xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={`px-8 py-8 ${
                index < services.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <h3 className="text-lg font-bold text-[#101828] mb-2">
                {service.title}
              </h3>
              <p
                className={`${sourceSans.className} text-[#6A7282] text-base leading-relaxed`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetHousingStock;
