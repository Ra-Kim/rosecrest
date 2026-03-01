import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Deep Cleaning",
    descriptionNode: (
      <>
        Our comprehensive deep cleaning services penetrate deep into carpet fibres,
        removing embedded dirt, dust, and allergens. Using state-of-the-art equipment
        and methods, we ensure a thorough clean that revitalizes your carpets and extends
        their lifespan.
        <br /><br />
        Explore our full{" "}
        <Link href="/services/deep-cleaning" className="underline text-[#4A5565]">
          deep cleaning services
        </Link>{" "}
        for a whole-property refresh.
      </>
    ),
    image: "/assets/images/carpet-cleaning/deep-cleaning.png",
    alt: "Deep carpet cleaning",
  },
  {
    title: "Stain Removal",
    description:
      "Whether it's pet stains, wine spills, or everyday dirt, our skilled technicians are trained in effective stain removal techniques. We assess each stain's nature and apply targeted treatments to restore your carpets to their original condition without damaging the fibres.",
    image: "/assets/images/carpet-cleaning/stain-removal.png",
    alt: "Stain removal on carpet",
  },
  {
    title: "Steam Cleaning",
    description:
      "Our steam cleaning service utilizes high-temperature water vapor to disinfect and deep clean carpets. This method effectively eliminates bacteria, dust mites, and other harmful microorganisms, ensuring a healthier living environment for you and your family.",
    image: "/assets/images/carpet-cleaning/steam-cleaning.png",
    alt: "Steam cleaning carpet",
  },
  {
    title: "Odour Removal",
    description:
      "Lingering odours can make your home feel less inviting. Our carpet cleaning experts use specialized products and techniques to neutralize odours trapped in carpet fibres, leaving your home smelling fresh and clean.",
    image: "/assets/images/carpet-cleaning/odour-removal.png",
    alt: "Odour removal treatment",
  },
  {
    title: "Upholstery Cleaning",
    descriptionNode: (
      <>
        In addition to carpets, we offer professional upholstery cleaning services to ensure
        all fabric surfaces in your home are spotless. Our team uses safe and effective
        methods to clean sofas, chairs, and other upholstered furniture, enhancing the
        overall appearance of your living spaces.
        <br /><br />
        Pair this with our{" "}
        <Link href="/services/house-clearance" className="underline text-[#4A5565]">
          house clearance services
        </Link>{" "}
        for a complete reset of your living spaces.
      </>
    ),
    image: "/assets/images/carpet-cleaning/upholstery-cleaning.png",
    alt: "Upholstery cleaning on sofa",
  },
  {
    title: "Regular Maintenance Programs",
    descriptionNode: (
      <>
        To keep your carpets looking their best, we offer tailored maintenance programs
        that include scheduled cleanings and inspections. Regular cleaning not only
        prolongs the life of your carpets but also helps maintain a clean and healthy home
        environment.
        <br /><br />
        Learn more about our full range of{" "}
        <Link href="/services/residential" className="underline text-[#4A5565]">
          residential services
        </Link>{" "}
        designed to keep your home in top condition.
      </>
    ),
    image: "/assets/images/carpet-cleaning/maintenance.png",
    alt: "Regular carpet maintenance",
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "At RPBS, we are committed to sustainability. We use eco-friendly cleaning products and techniques that are safe for your family and pets, providing you with peace of mind while effectively cleaning your carpets.",
    image: "/assets/images/carpet-cleaning/eco-friendly.png",
    alt: "Eco-friendly cleaning products",
  },
];

const CarpetCleaningServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our Carpet Cleaning Services Include:
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
                  {service.descriptionNode ? (
                    <p>{service.descriptionNode}</p>
                  ) : (
                    service.description?.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarpetCleaningServices;