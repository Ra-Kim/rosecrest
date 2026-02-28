"use client";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

const PartywallDesc = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center items-center text-center">
          {/* Main heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-5 leading-tight">
            The Role of the Party Wall Surveyors
          </h2>

          {/* Body */}
          <p
            className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 max-w-4xl mb-8 w-[90%]`}
          >
            Our Party Wall Surveyors assess the building work details, review
            any objections from adjoining owners, and prepare a legally binding
            Party Wall Award. This document sets out how and when the work will
            proceed, includes any necessary conditions, and ensures the award is
            fit for purpose and compliant with the Party Wall etc. Act 1996.
          </p>

          {/* CTA */}
          <div>
            <Button
              size="lg"
              onClick={() => scrollTo("services")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Make an inquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartywallDesc;
