"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";
import { useEnquiryStore } from "@/store/enquiry-store";
import { Reveal } from "@/components/common/Reveal";

const StockDescription = () => {
  const { openEnquiry } = useEnquiryStore();

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">

        {/* Left Column */}
        <Reveal animation="fade-right" duration={600}>
          <div className="flex flex-col justify-center">
            <h2 className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] mb-6 leading-8 w-[90%]`}>
              At Rosecrest Group Ltd, we recognise the importance of upholding
              high standards in housing. Our Stock Condition Surveys are
              specifically designed to assist local authorities and social housing
              providers in ensuring that their properties remain safe, compliant
              and well-maintained. By providing comprehensive assessments, we
              enable you to make informed decisions that enhance the quality of
              your housing portfolio.
            </h2>

            <div className="flex items-center gap-6 flex-wrap">
              <Button
                size="lg"
                onClick={() => openEnquiry("Stock Condition Survey")}
                className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
              >
                Make an enquiry
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Column - Image */}
        <Reveal animation="fade-left" duration={700} delay={150}>
          <div className="relative flex justify-end">
            <Image
              src="/assets/images/stock.png"
              alt="Stock condition survey"
              height={548}
              width={539}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default StockDescription;