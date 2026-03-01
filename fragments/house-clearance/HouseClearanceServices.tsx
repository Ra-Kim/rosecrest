import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Comprehensive Clearance",
    description:
      "Our team specializes in full house clearances, handling everything from furniture and appliances to personal belongings and unwanted items. We work quickly and efficiently, ensuring that your home is cleared out in a timely manner while respecting your wishes and property.",
    image: "/assets/images/house-clearance/comprehensive-clearance.png",
    alt: "Boxes and furniture being cleared",
  },
  {
    title: "Single Item Removals",
    description:
      "If you only need to remove a few specific items, we offer flexible single item removal services. Whether it's a piece of furniture, an appliance, or any other item, we're here to assist you with prompt and reliable service.",
    image: "/assets/images/house-clearance/single-item.png",
    alt: "Single item removal",
  },
  {
    title: "Estate Clearance",
    description:
      "Dealing with the belongings of a loved one can be emotionally challenging. Our sensitive estate clearance services are designed to help you through this difficult time. We handle all aspects of the clearance process with compassion and respect, ensuring that items are handled appropriately and in accordance with your wishes.",
    image: "/assets/images/house-clearance/estate-clearance.png",
    alt: "Estate clearance living room",
  },
  {
    title: "Eco-Friendly Disposal",
    description:
      "At Rosecrest, we prioritise sustainable practices. We strive to recycle and donate as many items as possible, reducing waste and ensuring that usable items find new homes. Our eco-friendly disposal methods align with our commitment to protecting the environment.",
    image: "/assets/images/house-clearance/eco-friendly.png",
    alt: "Recycling bins eco-friendly disposal",
  },
  {
    title: "Cleaning and Tidying Services",
    descriptionNode: (
      <>
        After the clearance is complete, we offer{" "}
        <Link href="/services/deep-cleaning" className="underline text-[#4A5565]">
          deep cleaning and tidying services
        </Link>{" "}
        to leave your space looking its best. Our team ensures that the cleared areas are
        thoroughly cleaned, making the transition to a new setup seamless and pleasant.
      </>
    ),
    image: "/assets/images/house-clearance/cleaning.png",
    alt: "Clean and tidy living space",
  },
  {
    title: "Flexible Scheduling",
    description:
      "We understand that every situation is unique, which is why we offer flexible scheduling options to accommodate your needs. Whether you require a same-day clearance or prefer to schedule in advance, we work around your timeline to ensure a hassle-free experience.",
    image: "/assets/images/house-clearance/flexible-scheduling.png",
    alt: "Customer service flexible scheduling",
  },
  {
    title: "Professional and Friendly Team",
    description:
      "Our dedicated team of clearance specialists is trained to handle your belongings with care and respect. We approach each job with professionalism and a friendly demeanour, ensuring that you feel supported throughout the process.",
    image: "/assets/images/house-clearance/professional.png",
    alt: "Professional friendly team member",
  },
];

const HouseClearanceServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our House Clearance Services Include:
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

export default HouseClearanceServices;