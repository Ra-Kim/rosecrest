import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "New Installations",
    description:
      "If you're renovating or building from the ground up, our expert plasterers provide top-notch installation services for walls and ceilings. We use the latest techniques and high-quality materials to create a flawless surface that is ready for painting or other finishes",
    image: "/assets/images/plastering/new-installations.png",
    alt: "Plasterer applying plaster to wall",
  },
  {
    title: "Repair and Restoration",
    description:
      "Cracks, holes, and uneven surfaces can detract from the beauty of your home. Our team specializes in repairing and restoring plaster to its original condition. We meticulously assess the damage, prepare the area, and apply the necessary treatments to ensure a seamless repair that blends perfectly with existing surfaces.",
    image: "/assets/images/plastering/repair.png",
    alt: "Damaged wall requiring plaster repair",
  },
  {
    title: "Skimming and Resurfacing",
    description:
      "For a fresh look, our skimming and resurfacing services can breathe new life into your interiors. We apply a thin layer of plaster to smooth out walls and ceilings, hiding imperfections and creating a uniform surface. This process not only enhances aesthetics but also improves the durability of your walls.",
    image: "/assets/images/plastering/skimming.png",
    alt: "Plasterer skimming a wall",
  },
  {
    title: "Decorative Plastering",
    description:
      "Elevate your interiors with our decorative plastering techniques. From ornate cornices and ceiling roses to textured finishes, we can add unique features that reflect your personal style. Our skilled craftsmen are experienced in various decorative plastering methods, creating stunning focal points in any room.",
    image: "/assets/images/plastering/decorative.png",
    alt: "Decorative plastered room",
  },
  {
    title: "Sustainable Practices",
    description:
      "At Rosecrest, we are committed to environmentally friendly practices. We use eco-conscious materials and techniques that minimize waste and promote sustainability without compromising quality. Our plastering services aim to create healthy living spaces that are both beautiful and environmentally responsible.",
    image: "/assets/images/plastering/sustainable.png",
    alt: "Plasterer with protective mask",
  },
  {
    title: "Attention to Detail and Professionalism",
    description:
      "We pride ourselves on our meticulous attention to detail and dedication to customer satisfaction. Our plasterers are highly trained professionals who approach every project with care and precision. We ensure clean work areas, respect your home, and deliver results on time.",
    image: "/assets/images/plastering/attention.png",
    alt: "Plasterer finishing wall with attention to detail",
  },
];

const PlasteringServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our Plastering Services Include:
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-[#E3E4E5] rounded-4xl overflow-hidden flex flex-col p-8 ${
                services.length % 2 !== 0 && index === services.length - 1
                  ? "md:col-span-2 md:max-w-[calc(50%-20px)] md:mx-auto md:w-full"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-62.5 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text content */}
              <div className="pt-6">
                <h3 className="text-lg md:text-2xl font-bold text-[#101828] mb-3">
                  {service.title}
                </h3>
                <div className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-relaxed space-y-3`}>
                  {service.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlasteringServices;