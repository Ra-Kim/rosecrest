import Footer from "@/components/common/Footer";
import DampMouldDescription from "@/fragments/damp-mould/DampMouldDesc";
import DampMouldMoreInfo from "@/fragments/damp-mould/DampMouldMoreInfo";
import DampMouldServices from "@/fragments/damp-mould/DampMouldServices";

import JourneyHero from "@/fragments/journeys/JourneyHero";
import React from "react";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <div className="text-center">
          <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16 sm:w-3/4 mx-auto mt-12">
            Damp, Mould & Condensation: Inspection, Reporting & Treatment
            Support
          </p>
        </div>
      </JourneyHero>
      <DampMouldDescription />
      <DampMouldServices />
      <DampMouldMoreInfo />
      <Footer />
    </div>
  );
};

export default Page;
