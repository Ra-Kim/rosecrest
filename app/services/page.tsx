import Footer from "@/components/common/Footer";
import ServicesHero from "@/fragments/services/Hero";
import ServiceTabs from "@/fragments/services/Tabs";
import React from "react";

const Page = () => {
  return (
    <div>
      <ServicesHero />
      <ServiceTabs />
      <Footer />
    </div>
  );
};

export default Page;
