import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const AssessmentDuration = () => {
  const info = {
    title: "Duration of the Assessment",
    description: `The duration of the assessment will vary based on the property’s size and the assessor’s ability to access all areas. While the EPC process is thorough, it is generally non-disruptive if access to all parts of the property is relatively straightforward. Besides being a legal requirement for selling or renting, an EPC serves as a valuable tool for enhancing energy efficiency.
      To enhance your understanding, we recommend including images that reflect the specific areas assessed, such as the boiler and heating systems.`,
    image: "/assets/images/assessment-duration.png",
    alt: "EPC assessment duration illustration",
  };
  return (
    <section className="py-16 lg:py-24 px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[0.55fr_0.45fr] gap-6">
          {/* Text side */}
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-5xl leading-relaxed font-bold text-[#101828] mb-3">
              {info.title}
            </h3>
            <div
              className={`${sourceSans.className} text-base md:text-2xl text-[#4A5565] leading-relaxed space-y-3 pr-4`}
            >
              {info.description.split("\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative w-full h-96 md:h-122.25">
            <Image
              src={info.image}
              alt={info.title}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentDuration;
