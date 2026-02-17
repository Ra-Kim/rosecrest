import Footer from "@/components/common/Footer";
import FAQ from "@/fragments/homebuyer/FAQs";
import MoreInfo from "@/fragments/homebuyer/MoreInfo";
import Surverys from "@/fragments/homebuyer/Surverys";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import { sourceSans } from "@/lib/fonts";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <JourneyHero>
        <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16">
          Buying a property?
        </p>
        <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16">
          Choose the Right Survey in 60 Seconds
        </p>
        <p
          className={`${sourceSans.className} mt-10 mx-auto text-white text-xl lg:text-2xl leading-relaxed`}
        >
          We&apos;ll help you select the most suitable survey based on the
          property you&apos;re purchasing.
        </p>
      </JourneyHero>
      <Surverys />
      <MoreInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
