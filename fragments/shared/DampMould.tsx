import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const DampAndMould = () => {
  const features = [
    "Independent inspections",
    "Clear reporting",
    "Professional standards",
  ];

  return (
    <div className="max-w-7xl mx-auto py-16">
      {/* Main Content Card */}
      <div className="bg-[#FBF7F4] rounded-[24px] overflow-hidden border border-gray-100">
        <div className="grid lg:grid-cols-2 p-8 lg:p-12  gap-0">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h2 className="text-3xl lg:text-3xl font-medium text-[#101828] mb-8 leading-tight">
              Damp, Mould & Condensation:
              <br />
              Inspection, Reporting & Treatment Support
            </h2>

            {/* Description */}
            <p
              className={`${sourceSans.className} text-[#4A5565] text-base lg:text-xl mb-8 leading-relaxed`}
            >
              Damp, mould and condensation issues are increasingly common across
              residential property and often require clear, independent
              inspection before appropriate action can be taken.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm lg:text-base text-[#6A7282]"
                >
                  <CheckCircle className="w-4 h-4 text-[#DBB38E]" />
                  <span className={`${sourceSans.className}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8 py-6 text-base rounded-full"
              >
                Book now
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/damp.png"
              alt="Living room interior showing property inspection"
              height={490}
              width={535}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DampAndMould;
