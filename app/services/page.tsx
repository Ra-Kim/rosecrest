import Footer from "@/components/common/Footer";
import ServicesHero from "@/fragments/services/Hero";
import ServiceTabs from "@/fragments/services/Tabs";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <ServicesHero />
      <Suspense fallback={null}>
        <ServiceTabs />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Page;
