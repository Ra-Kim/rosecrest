"use client";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

const HousingContact = () => {
  return (
    <div className="bg-[#FBF7F4]">
      <div className="px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center items-center text-center">
          {/* Body */}
          <p
            className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 max-w-4xl mb-8 w-[90%]`}
          >
            We even offer special rates to provide you with the best value for
            your investment, ensuring you receive top-notch service without
            breaking the bank. Let us help you safeguard your property and
            ensure it meets all necessary standards!
          </p>

          {/* CTA */}
          <div>
            <Button
              size="lg"
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingContact;
