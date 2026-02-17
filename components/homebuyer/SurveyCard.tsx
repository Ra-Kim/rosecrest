import React from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

interface SurveyCardProps {
  level: number;
  title: string;
  badge: {
    text: string;
    variant: "green" | "blue" | "purple";
  };
  features: string[];
  buttonText: string;
  buttonLink: string;
}

const SurveyCard = ({
  //   level,
  title,
  badge,
  features,
  buttonText,
  buttonLink,
}: SurveyCardProps) => {
  const badgeColors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-[#EDEEF0] hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="bg-[#262A6F] rounded-lg p-3 shrink-0">
              <Home className="w-6 h-6 text-white" />
            </div>

            {/* Title and Badge */}
            <div>
              <h3 className="text-xl lg:text-[30px] leading-9 font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${badgeColors[badge.variant]}`}
              >
                {badge.text}
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 my-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#DBB38E] shrink-0 mt-0.5" />
              <span
                className={`${sourceSans.className} text-gray-600 text-sm lg:text-base`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Read More Link */}
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 text-[#262A6F] font-medium hover:gap-3 transition-all"
        >
          Read more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* CTA Button */}
      <div>
        <Button
          className="w-full bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full py-6 font-medium"
          size="lg"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SurveyCard;
