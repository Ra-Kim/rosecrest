"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

const EPCDescription = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">

        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Main heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-5 leading-tight">
            What is an EPC?
          </h2>

          {/* Subheading */}
          <h3 className="text-base md:text-2xl font-bold text-[#101828] mb-3">
            How an Energy Performance Certificate is Conducted
          </h3>

          {/* Body */}
          <p className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 mb-8 w-[90%]`}>
            When renting or buying a property, either commercial or domestic,
            you should receive an Energy Performance Certificate (EPC). This
            certificate is the result of an assessment by a professional,
            indicating the energy efficiency of the property. It&apos;s
            essential for landlords, renters, buyers and sellers to provide an
            EPC whenever the property changes hands.
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

        {/* Right Column - Image */}
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
      </div>
    </div>
  );
};

export default EPCDescription;