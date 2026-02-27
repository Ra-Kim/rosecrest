import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const assessmentAreas = [
  {
    title: "Lighting",
    description:
      "The assessor will examine the number of fixed light fittings in the property and assess the types of lightbulbs used, including low-energy options such as CFLs, LEDs and standard fluorescent tubes.",
    image: "/assets/images/epc/lighting.png",
    alt: "Modern living room with lighting",
  },
  {
    title: "Loft",
    description:
      "The inspector will examine the loft space, which may not require entry but should be accessible to assess the level and placement of insulation. Currently, the recommended insulation depth is 270mm at the joists. Additionally, the assessor will investigate the type of wall separating your property from neighbouring ones.",
    image: "/assets/images/epc/loft.png",
    alt: "Loft space interior",
  },
  {
    title: "Windows",
    description:
      "The assessor will evaluate the property's windows to determine whether they are single, double or triple glazed, as this significantly affects energy efficiency. They will also check the installation date of the glazing. If available, providing BFRC data or a FENSA certificate can serve as helpful evidence.",
    image: "/assets/images/epc/windows.png",
    alt: "Large glazed windows in a living room",
  },
  {
    title: "Heating",
    description:
      "The inspector will examine the property's heating system, so having your boiler documentation ready can be beneficial. They will review various aspects, including heat controls, boiler timing, thermostats, thermostatic radiator valves and any additional heating sources, such as coal or gas coal-effect fires and log burners.",
    image: "/assets/images/epc/heating.png",
    alt: "Heating thermostat control",
  },
];

const photosCard = {
  title: "Photos and Measurements",
  description:
    "The EPC assessor will take several photographs and measurements of both the interior and exterior of the property. These images are essential for quality assurance, as assessors undergo regular audits to ensure high standards in EPC assessments. They will also measure the property dimensions and create a sketch of the layout, incorporating these measurements.\nAdditionally, the assessor may ask you questions regarding the construction of the property, including its age, any modifications made, the presence of cavity wall insulation, heat recovery technology and whether you have a single or double electricity meter.",
  image: "/assets/images/epc/photos-measurements.png",
  alt: "Interior room being photographed for EPC assessment",
};

const EPCAssessmentAreas = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* 2-column grid for first 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {assessmentAreas.map((area) => (
            <div
              key={area.title}
              className="border border-[#E3E4E5] rounded-[24px] overflow-hidden flex flex-col p-6"
            >
              {/* Image */}
              <div className="relative h-62.5 w-full overflow-hidden mb-5">
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-2xl font-bold text-[#101828] mb-2">
                {area.title}
              </h3>
              <p className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-7`}>
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width horizontal card for Photos and Measurements */}
        <div className="border border-[#E3E4E5] rounded-[24px] p-8 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text side */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl leading-6 font-bold text-[#101828] mb-3">
                {photosCard.title}
              </h3>
              <div className={`${sourceSans.className} text-base md:text-xl text-[#4A5565] leading-relaxed space-y-3 pr-4`}>
                {photosCard.description.split("\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative w-full h-80 md:h-96">
              <Image
                src={photosCard.image}
                alt={photosCard.alt}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EPCAssessmentAreas;