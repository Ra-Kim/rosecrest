import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Floor Tiling",
    description:
      "Transform your floors with our comprehensive floor tiling services. We work with a wide range of materials, including ceramic, porcelain, natural stone, and more, to create stunning surfaces that are not only beautiful but also resistant to wear and tear. Our team ensures precise installation and careful attention to detail, guaranteeing a seamless finish.",
    image: "/assets/images/tiling/floor.png",
    alt: "Floor tile installation",
  },
  {
    title: "Wall Tiling",
    descriptionNode: (
      <>
        Whether it&apos;s a splashback in the kitchen or a feature wall in the living room, often
        installed alongside our expert{" "}
        <Link href="/services/plumbing" className="underline text-[#4A5565]">plumbing</Link>{" "}
        services, our wall tiling services add character and elegance to any space. We help
        you choose the right tiles and design patterns that complement your interior style,
        providing a striking visual impact that enhances your home&apos;s décor.
      </>
    ),
    image: "/assets/images/tiling/wall.png",
    alt: "Wall tile installation",
  },
  {
    title: "Bathroom and Kitchen Tiling",
    description:
      "We specialise in tiling for wet areas such as bathrooms and kitchens, focusing on both style and functionality. Our team is experienced in creating waterproof and slip-resistant surfaces that are ideal for these high-traffic areas, ensuring safety and longevity.",
    image: "/assets/images/tiling/bathroom.png",
    alt: "Tiled bathroom and kitchen",
  },
  {
    title: "Custom Designs and Patterns",
    description:
      "Elevate your interiors with bespoke tiling designs tailored to your vision. From intricate mosaics to geometric patterns, we collaborate with you to create unique installations that reflect your personal style. Our expert craftsmen bring your ideas to life with precision and creativity.",
    image: "/assets/images/tiling/custom.png",
    alt: "Custom tile design patterns",
  },
  {
    title: "Tiling Repairs and Maintenance",
    descriptionNode: (
      <>
        Keep your tiled surfaces looking their best with our repair and maintenance
        services. We address issues such as cracked tiles, damaged grout, or loose tiles,
        restoring their beauty and functionality, alongside our trusted{" "}
        <Link href="/services/handyman" className="underline text-[#4A5565]">handyman services</Link>{" "}
        for everyday home maintenance. Regular maintenance ensures the longevity of your
        tiles and keeps your home in pristine condition.
      </>
    ),
    image: "/assets/images/tiling/repairs.png",
    alt: "Tile repair tools and materials",
  },
  {
    title: "Professional Installation and Expertise",
    description:
      "At RPBS, our tiling experts are committed to delivering high-quality workmanship. We take the time to prepare surfaces properly, ensuring a solid foundation for your tiles. With our extensive knowledge and experience, you can trust us to complete your tiling project efficiently and with exceptional results.",
    image: "/assets/images/tiling/professional.png",
    alt: "Professional tiler at work",
  },
];

const TilingServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our Tiling Services Include:
        </h2>

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
              <div className="relative h-62.5 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
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

export default TilingServices;