import Link from "next/link";
import { Search, ClipboardList, FileText, ArrowRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const items = [
  {
    icon: Search,
    title: "On-site inspection",
    description:
      "Our qualified experts will conduct a thorough inspection of your property to identify any issues.",
  },
  {
    icon: ClipboardList,
    title: "List of defects against UK standards",
    description:
      "We will compile a detailed list of defects, ensuring they are measured against relevant UK standards for clarity and compliance.",
  },
  {
    icon: FileText,
    title: "Detailed report",
    description:
      "You will receive a comprehensive report that outlines responsibilities and includes tailored repair recommendations to address the identified defects.",
  },
];

export default function HousingDisrepairIncludes() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-4 max-w-4xl mx-auto leading-tight">
          Our Services
        </h2>
        <p
          className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg text-center max-w-2xl mx-auto mb-12 lg:mb-16 leading-relaxed`}
        >
          We&apos;ll advise you on the next steps and provide a comprehensive
          suite of services designed to meet your needs, including:
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
                <p
                  className={`${sourceSans.className} relative text-base text-[#4A5565] leading-relaxed`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="relative bg-[#262A6F] rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-55">
            <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Guidance?
              </h3>
              <p className={`${sourceSans.className} text-[#D1D5DC]`}>
                We understand that each project is unique, so get in touch for
                detailed pricing.
              </p>
            </div>

            <Link
              href="/contact"
              className={`${sourceSans.className} text-[#DBB38E] inline-flex items-center gap-2 text-sm font-medium mt-8 hover:gap-3 transition-all duration-200`}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
