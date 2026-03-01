import Link from "next/link";
import { Sparkles, TriangleAlert, Trash2, CalendarCheck } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const items = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Our expert team specialises in deep cleaning, ensuring every corner of your property is thoroughly sanitised and restored to its pristine condition.",
  },
  {
    icon: TriangleAlert,
    title: "Biohazard Cleaning",
    description:
      "We also provide biohazard cleaning, expertly handling hazardous materials to create a safe environment for your home or business",
  },
  {
    icon: Trash2,
    title: "House Clearance",
    descriptionNode: (
      <>
        Our{" "}
        <Link href="/services/house-clearance" className="underline text-[#4A5565]">
          house clearance services
        </Link>{" "}
        are efficient and discreet, helping you declutter or clear out entire properties with ease.
      </>
    ),
  },
  {
    icon: CalendarCheck,
    title: "Regular Maintenance Cleaning",
    description:
      "We offer tailored solutions for commercial spaces, including regular maintenance cleaning and specialised services to keep your workplace looking its best.",
  },
];

export default function DeepCleaningServices() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-4 max-w-4xl mx-auto leading-tight">
          Comprehensive Range Of Cleaning Services
        </h2>
        <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg text-center max-w-2xl mx-auto mb-12 lg:mb-16 leading-relaxed`}>
          At Rosecrest, we offer a comprehensive range of cleaning services
          designed to meet the various needs of our clients
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative border border-[#F3F4F6] rounded-2xl p-8 overflow-hidden"
              >
                {/* Watermark circle top-right */}
                <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full bg-gray-200/60 bg-linear-to-tr from-[#2B7FFF1A] to-[#00000000] pointer-events-none opacity-30" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#262A6F] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-[#101828] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`${sourceSans.className} relative text-base text-[#4A5565] leading-relaxed`}>
                  {item.descriptionNode ?? item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}