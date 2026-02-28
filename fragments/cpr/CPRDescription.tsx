"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

const CPRDescription = () => {
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
            CPR 35 Expert Witness Inspections Explained
          </h2>

          {/* Body */}
          <p
            className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 w-[90%]`}
          >
            A Part 35 Compliant Expert Witness report must include both the
            facts and assumptions utilised by the Expert. Additionally, it
            should contain any relevant analysis along with the Expert’s opinion
            regarding the matter at hand. A Part 35 Compliant Expert Witness
            Report (also known as a CPR 35 Compliant Report) offers an expert’s
            opinion on a specific subject within their area of expertise, aiding
            the court in making informed decisions on matters outside its
            knowledge.
          </p>
          <p
            className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 mb-8 w-[90%]`}
          >
            Given that these reports serve as evidence in court, they must
            adhere to strict rules to ensure compliance with Civil Procedure
            Rules (CPR). All expert witness reports must be accurate, current
            and impartial, providing a clear overview of the situation without
            bias. A Part 35 Compliant Expert Witness Report should include both
            the facts and assumptions considered by the expert, along with any
            relevant analysis and their opinion on the matter. Furthermore, each
            report must outline the expert’s qualifications and detail the
            methodology employed in its preparation.
          </p>

          {/* CTA */}
          <div>
            <Button
              size="lg"
              onClick={() => scrollTo("more-info")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Make an inquiry
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/cpr.png"
            alt="Energy performance certificate assessment"
            height={578}
            width={573}
            className="object-cover rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default CPRDescription;
