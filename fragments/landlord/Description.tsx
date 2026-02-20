"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Shield } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const LandlordsDesc = () => {
  const stats = [
    {
      icon: <Clock className="w-5 h-5" />,
      value: "24h",
      label: "Response time",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      value: "£450",
      label: "Fixed price",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      value: "RICS",
      label: "Regulated",
    },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Pill Label */}
          <div className="mb-6">
            <span
              className={`${sourceSans.className} inline-block bg-[#262A6F1A] text-[#262A6F] text-sm h-8 font-medium px-4 py-2 rounded-full`}
            >
              For Landlords &amp; Property Owners
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`${sourceSans.className} text-base lg:text-2xl text-[#4A5565] mb-6 leading-tight w-[90%]`}
          >
            Clear reporting when compliance, tenant claims or property condition
            matters need to be addressed quickly and properly.
          </h2>

          {/* Stats Grid */}
          <div className="flex flex-wrap gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${sourceSans.className} flex flex-col justify-center bg-white border border-[#DBB38E] rounded-2xl p-4 min-w-43 w-full sm:w-auto`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {stat.icon}
                  <span className="text-2xl font-bold text-[#151515]">
                    {stat.value}
                  </span>
                </div>
                <span
                  className={`${sourceSans.className} text-sm text-[#6A7282]`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollTo("services")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Select Your Service
            </Button>
            <button
              onClick={() => scrollTo("more-info")}
              className={`${sourceSans.className} text-[#101828] text-base font-medium flex items-center gap-1 hover:underline`}
            >
              Need advice? Request a discussion →
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/storey.png"
            alt="Apartment building for landlords and property owners"
            height={451}
            width={579}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default LandlordsDesc;
