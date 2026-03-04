import Link from "next/link";
import {
  TriangleAlert,
  Droplets,
  ShieldAlert,
  FileText,
  Search,
  ArrowRight,
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const items = [
  {
    icon: TriangleAlert,
    title: "Tenant Complaints",
    description:
      "Responding to occupant concerns about damp or mould with independent assessment",
    cardBg: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)",
    circleBg: "linear-gradient(135deg, rgba(43, 127, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
  },
  {
    icon: Droplets,
    title: "Condensation Issues",
    description:
      "Identifying ventilation problems and condensation-related concerns",
    cardBg: "linear-gradient(135deg, #ECFEFF 0%, #FFFFFF 100%)",
    circleBg: "linear-gradient(135deg, rgba(0, 184, 219, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
  },
  {
    icon: ShieldAlert,
    title: "Compliance Queries",
    description: "Meeting housing standards and regulatory requirements",
    cardBg: "linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%)",
    circleBg: "linear-gradient(135deg, rgba(173, 70, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
  },
  {
    icon: FileText,
    title: "Independent Reports",
    description:
      "Clear documentation for legal, insurance, or dispute resolution",
    cardBg: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%)",
    circleBg: "linear-gradient(135deg, rgba(255, 105, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
  },
  {
    icon: Search,
    title: "Remedial Scoping",
    description: "Assessment to plan and scope appropriate treatment works",
    cardBg: "linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)",
    circleBg: "linear-gradient(135deg, rgba(0, 201, 80, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
  },
];

export default function DampMouldServices() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-4 max-w-4xl mx-auto leading-tight">
          When is this service needed?
        </h2>
        <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg text-center max-w-2xl mx-auto mb-12 lg:mb-16 leading-relaxed`}>
          Our damp and mould inspection service addresses key property concerns
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative border border-[#F3F4F6] rounded-2xl p-8 overflow-hidden"
                style={{ background: item.cardBg }}
              >
                {/* Watermark circle top-right */}
                <div
                  className="absolute -top-16 -right-12 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: item.circleBg }}
                />

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
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div
            className="relative rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-55"
            style={{ background: "linear-gradient(180deg, #262A6F 0%, #1A1D4F 100%)" }}
          >
            <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Guidance?
              </h3>
              <p className={`${sourceSans.className} text-[#D1D5DC]`}>
                Speak to our team to discuss your specific requirements
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