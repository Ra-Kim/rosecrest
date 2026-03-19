import React from "react";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Portfolio inspections",
    description:
      "Coordinated inspection programmes across multiple properties using consistent methodology and reporting standards.",
  },
  {
    title: "Stock condition surveys",
    description:
      "Systematic assessment of housing stock condition to inform maintenance and investment planning.",
  },
  {
    title: "Programme support",
    description:
      "Technical consultancy supporting housing improvement programmes and capital works planning.",
  },
];

const AssetHousingStock = () => {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-4">
          Housing Stock and Asset Support
        </h2>
        <p
          className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] text-center max-w-4xl mx-auto mb-12`}
        >
          Examples of inspection, reporting and consultancy work delivered for
          our councils, housing organisations and public sector clients
        </p>

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
