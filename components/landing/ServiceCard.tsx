import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconBgColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  iconBgColor = "bg-[#1E3A8A]",
}) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl p-6 lg:p-8 min-h-71 border border-[#EDEEF0] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Icon */}
        <div
          className={`${iconBgColor} w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6`}
        >
          <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-3xl font-bold text-[#101828] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p
          className={`${sourceSans.className} text-base lg:text-lg text-[#4A5565] mb-2 grow`}
        >
          {description}
        </p>

        {/* CTA Link */}
        <div className={`${sourceSans.className} flex items-center gap-2 text-[#262A6F] font-medium text-sm lg:text-base group`}>
          <span>Get started</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;