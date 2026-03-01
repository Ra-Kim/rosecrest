import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "General Repairs and Maintenance",
    description:
      "From fixing leaky faucets to patching drywall, our team handles everyday repairs with precision and attention to detail. We help keep your home functioning smoothly, addressing issues promptly and effectively.",
    image: "/assets/images/handyman/general-repairs.png",
    alt: "Handyman with toolbox",
  },
  {
    title: "Furniture Assembly and Installation",
    description:
      "Whether it's new furniture from a store or a custom piece, our handymen assemble and install everything securely, saving you time and hassle. We ensure that each item is properly placed and ready for use.",
    image: "/assets/images/handyman/furniture-assembly.png",
    alt: "Furniture assembly and installation",
  },
  {
    title: "Painting and Decorating",
    description:
      "Refresh the look of your home with our professional painting and decorating services. Our handymen are experienced in interior and exterior painting, wallpapering, and touch-ups, bringing new life to your living spaces.\nRefresh the look of your home with our professional painting and decorating services.",
    image: "/assets/images/handyman/painting.png",
    alt: "Painter decorating a wall",
  },
  {
    title: "Shelving and Storage Solutions",
    description:
      "Need additional storage or functional shelving? We install shelves, cabinets, and other storage and carpentry solutions that blend seamlessly with your home's design, providing both style and practicality.",
    image: "/assets/images/handyman/shelving.png",
    alt: "Shelving and storage installation",
  },
  {
    title: "Home Installations",
    description:
      "From hanging artwork and mirrors to mounting TVs and blinds, we take care of all those finishing touches that make your house feel like home. Our handymen work with precision to ensure every installation is secure and perfectly aligned.",
    image: "/assets/images/handyman/home-installations.png",
    alt: "Home installations",
  },
  {
    title: "Reliable and Efficient Service",
    description:
      "At Rosecrest, we understand the importance of trust and dependability. Our handymen are punctual, respectful of your space, and committed to completing each project on time and to your satisfaction.",
    image: "/assets/images/handyman/reliable-service.png",
    alt: "Handyman laying flooring",
  },
];

const HandymanServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our comprehensive handyman <br />
          services include:
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#E3E4E5] rounded-4xl overflow-hidden flex flex-col p-8"
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

export default HandymanServices;