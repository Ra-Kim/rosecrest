import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Wooden Floor Installation",
    description:
      "Whether you're looking for a classic oak finish or something modern and sleek, we install wooden floors that are as durable as they are beautiful. Our team works with a variety of wood types and styles, ensuring that your new floors complement the unique character of your home.",
    image: "/assets/images/carpentry/floor-installation.png",
    alt: "Carpenter measuring wooden floor",
  },
  {
    title: "Floor Refurbishment",
    descriptionNode: (
      <>
        Restore the elegance of your existing wooden floors with our
        comprehensive refurbishment services. We meticulously sand, repair, and
        refinish floors to bring back their original luster and extend their
        lifespan.
        <br />
        <br />
        Pair this with our{" "}
        <Link
          href="/services/painting-decorating"
          className="underline text-[#4A5565]"
        >
          decorating and painting services
        </Link>{" "}
        to complete your space.
      </>
    ),
    image: "/assets/images/carpentry/floor-refurbishment.png",
    alt: "Floor sanding and refurbishment",
  },
  {
    title: "Custom Carpentry Projects",
    description:
      "From bespoke cabinetry and shelving units to intricate moulding and trim, our carpenters bring your vision to life with custom solutions tailored to fit your space and style.\nFor smaller jobs or quick fixes, explore our handyman services.",
    image: "/assets/images/carpentry/custom-carpentry.png",
    alt: "Carpentry blueprints and tools",
  },
  {
    title: "Precision and Quality",
    description:
      "At Rosecrest Group Ltd, we take pride in delivering exceptional workmanship on every project. Our team uses only the finest materials, and our carpenters employ advanced techniques to ensure flawless results that stand the test of time.",
    image: "/assets/images/carpentry/precision.png",
    alt: "Carpenter drilling with precision",
  },
];

const CarpentryServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our services cover a wide range of carpentry <br />
          solutions, including:
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
                <div
                  className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-relaxed space-y-3`}
                >
                  {service.descriptionNode ? (
                    <p>{service.descriptionNode}</p>
                  ) : (
                    service.description
                      ?.split("\n\n")
                      .map((para, i) => <p key={i}>{para}</p>)
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

export default CarpentryServices;
