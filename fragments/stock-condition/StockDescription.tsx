"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

const StockDescription = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2
            className={`${sourceSans.className} text-base lg:text-2xl text-[#4A5565] mb-6 leading-tight w-[90%]`}
          >
            At Rosecrest Group Ltd, we recognise the importance of upholding
            high standards in housing. Our Stock Condition Surveys are
            specifically designed to assist local authorities and social housing
            providers in ensuring that their properties remain safe, compliant
            and well-maintained. By providing comprehensive assessments, we
            enable you to make informed decisions that enhance the quality of
            your housing portfolio.
          </h2>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollTo("services")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Make an inquiry
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/stock.png"
            alt="Apartment building for landlords and property owners"
            height={548}
            width={539}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default StockDescription;
