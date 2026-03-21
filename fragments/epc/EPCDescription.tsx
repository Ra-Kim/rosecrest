"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";
import { useEnquiryStore } from "@/store/enquiry-store";
import { Reveal } from "@/components/common/Reveal";

const EPCDescription = () => {
  const { openEnquiry } = useEnquiryStore();

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">

        {/* Left Column */}
        <Reveal animation="fade-right" duration={600}>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-5 leading-tight">
              What is an EPC?
            </h2>

            <h3 className="text-base md:text-2xl font-bold text-[#101828] mb-3">
              How an Energy Performance Certificate is Conducted
            </h3>

            <p className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 mb-8 w-[90%]`}>
              When renting or buying a property, either commercial or domestic,
              you should receive an Energy Performance Certificate (EPC). This
              certificate is the result of an assessment by a professional,
              indicating the energy efficiency of the property. It&apos;s
              essential for landlords, renters, buyers and sellers to provide an
              EPC whenever the property changes hands.
            </p>

            <div>
              <Button
                size="lg"
                onClick={() => openEnquiry("Energy Performance Certificate (EPC)")}
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
              src="/assets/images/epc.png"
              alt="Energy performance certificate assessment"
              height={548}
              width={539}
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default EPCDescription;