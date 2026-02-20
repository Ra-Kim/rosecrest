import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import Link from "next/link";

const services = [
  {
    badge: "Fixed price service",
    title: "Damp, Mould & Condensation",
    description:
      "Fast-track inspections with transparent pricing. Perfect for addressing tenant complaints or compliance requirements.",
    features: [
      "Fast-track inspection: £450 fixed price",
      "Treatment: £25 per m² transparent pricing",
      "Full booking & cost calculator available",
    ],
    link: "/services/damp-mould",
    cta: "Book Damp & Mould Survey",
  },
  {
    badge: null,
    title: "HHSRS Assessment",
    description:
      "Formal hazard assessment and compliance reporting for Housing Health & Safety standards.",
    features: [
      "Formal hazard assessment",
      "Compliance reporting",
      "Housing Health & Safety Rating System",
    ],
    link: "/services/hhsrs",
    cta: "Book HHSRS Assessment",
  },
  {
    badge: null,
    title: "Disrepair & Condition Surveys",
    description:
      "Independent condition assessment and scope of works reporting for property disputes.",
    features: [
      "Independent condition assessment",
      "Scope of works reporting",
      "Evidence for dispute resolution",
    ],
    link: "/services/disrepair-condition",
    cta: "Book Disrepair & Condition Surveys",
  },
  {
    badge: null,
    title: "Energy Performance Certificates",
    description:
      "Energy Performance Certificates (EPC) for rental compliance with fast turnaround and 10-year validity.",
    features: [
      "Compliance with rental requirements",
      "Valid for 10 years",
      "Fast turnaround available",
    ],
    link: "/services/epc",
    cta: "Book Our EPC Service",
  },
];

const LandlordsServices = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
          Our Services for Landlords
        </h2>
        <p
          className={`${sourceSans.className} text-[#6A7282] text-base lg:text-lg max-w-xl mx-auto`}
        >
          Professional inspections and compliance reporting to help you manage
          your property portfolio
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-4xl p-8 flex flex-col"
          >
            {/* Badge */}
            {service.badge && (
              <div className="absolute -top-4 left-8">
                <span className="inline-block bg-[#DBB38E] text-[#151515] text-sm font-medium px-4 shadow-sm py-1.5 rounded-full">
                  {service.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-3xl font-bold text-[#101828] mb-3 mt-2">
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`${sourceSans.className} text-[#4A5565] text-xl mb-6 leading-relaxed`}
            >
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#DBB38E] shrink-0" />
                  <span
                    className={`${sourceSans.className} text-[#364153] text-base`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href={service.link}>
              <Button
                size="lg"
                className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-5 h-14 py-6 text-base rounded-full flex items-center gap-2 justify-center"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandlordsServices;
