"use client";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";
import { useEnquiryStore } from "@/store/enquiry-store";
import { Reveal } from "@/components/common/Reveal";

const PartywallDesc = () => {
  const { openEnquiry } = useEnquiryStore();

  return (
    <div className="bg-[#FBF7F4]">
      <div className="px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        <Reveal animation="fade-up" duration={600}>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-5 leading-tight">
              The Role of the Party Wall Surveyors
            </h2>

            <p className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 max-w-4xl mb-8 w-[90%]`}>
              Our Party Wall Surveyors assess the building work details, review
              any objections from adjoining owners, and prepare a legally binding
              Party Wall Award. This document sets out how and when the work will
              proceed, includes any necessary conditions, and ensures the award is
              fit for purpose and compliant with the Party Wall etc. Act 1996.
            </p>

            <Button
              size="lg"
              onClick={() => openEnquiry("Party Wall Survey")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Make an enquiry
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PartywallDesc;