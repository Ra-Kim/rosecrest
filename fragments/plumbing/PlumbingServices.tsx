import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Installation and Replacement",
    descriptionNode: (
      <>
        Whether you&apos;re upgrading your kitchen or bathroom fixtures, or
        installing new plumbing systems for a renovation, followed by{" "}
        <Link href="/services/plastering" className="underline text-[#4A5565]">
          plastering
        </Link>{" "}
        and{" "}
        <Link
          href="/services/painting-decorating"
          className="underline text-[#4A5565]"
        >
          painting
        </Link>{" "}
        as needed, our team is equipped to handle all types of installations. We
        work with high-quality materials and the latest technologies to ensure
        that your new plumbing components function flawlessly and meet your
        specific needs.
      </>
    ),
    image: "/assets/images/plumbing/installation.png",
    alt: "Plumbing fixture installation",
  },
  {
    title: "Repairs and Maintenance",
    description:
      "Plumbing issues can arise unexpectedly, and our team is ready to tackle them with expertise and efficiency. From leaky faucets and clogged drains to broken pipes and water heater malfunctions, we provide prompt repair services to minimise disruptions in your daily life. Regular maintenance checks can also help prevent future issues and prolong the life of your plumbing systems.",
    image: "/assets/images/plumbing/repairs.png",
    alt: "Plumber repairing a pipe",
  },
  {
    title: "Drainage Solutions",
    description:
      "Proper drainage is crucial for maintaining the integrity of your home. We offer comprehensive drainage services, including unblocking drains, installing drainage systems, and conducting thorough inspections to ensure everything is functioning correctly. Our proactive approach helps prevent water damage and promotes a healthy living environment.",
    image: "/assets/images/plumbing/drainage.png",
    alt: "Blocked drain close-up",
  },
  {
    title: "Bathroom and Kitchen Plumbing",
    descriptionNode: (
      <>
        Our plumbers specialise in bathroom and kitchen plumbing, ensuring that
        all installations and repairs are completed to the highest standards,
        creating efficient and stylish spaces that can be maintained easily with
        our{" "}
        <Link
          href="/services/deep-cleaning"
          className="underline text-[#4A5565]"
        >
          deep cleaning
        </Link>{" "}
        services. From sinks and toilets to showers and dishwashers, we manage
        every aspect of your plumbing system to create efficient and stylish
        spaces.
      </>
    ),
    image: "/assets/images/plumbing/bathroom.png",
    alt: "Plumber working under kitchen sink",
  },
  {
    title: "Emergency Plumbing Services",
    description:
      "Plumbing emergencies can happen at any time. That's why our team is available for emergency plumbing services to address urgent issues quickly and effectively. We understand the importance of a swift response, and our skilled plumbers are always on call to help restore your plumbing systems as soon as possible.",
    image: "/assets/images/plumbing/emergency.png",
    alt: "Plumber responding to emergency",
  },
  {
    title: "Water Quality Solutions",
    description:
      "Clean and safe water is essential for your home. We offer water quality solutions, including installation and maintenance of filtration systems, to ensure that you have access to fresh, clean water. Our team can assess your water quality needs and recommend the best solutions for your household.",
    image: "/assets/images/plumbing/water-quality.png",
    alt: "Clean water flowing from tap",
  },
];

const PlumbingServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our Plumbing Services Include:
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

export default PlumbingServices;
