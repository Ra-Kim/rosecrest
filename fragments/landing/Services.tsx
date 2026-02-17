import React from "react";
import ServiceCard from "@/components/landing/ServiceCard";
import { Home, Building2, Scale, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "I'm buying a property",
      description: "Homebuyer surveys and clear advice before you commit",
      href: "/homebuyer",
      iconBgColor: "bg-[#1E3A8A]",
    },
    {
      icon: Building2,
      title: "I'm a landlord or property owner",
      description: "Compliance, condition and disrepair reports",
      href: "/landlord",
      iconBgColor: "bg-[#1E3A8A]",
    },
    {
      icon: Scale,
      title: "I'm a solicitor or legal professional",
      description: "Independent expert and CPR-35 compliant reports",
      href: "/legal",
      iconBgColor: "bg-[#1E3A8A]",
    },
    {
      icon: Building,
      title: "I represent a council or organisation",
      description: "Framework-ready property inspections and consultancy",
      href: "/council",
      iconBgColor: "bg-[#1E3A8A]",
    },
  ];

  return (
    <section className="relative -mt-48 lg:-mt-40 px-4 lg:px-8 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
