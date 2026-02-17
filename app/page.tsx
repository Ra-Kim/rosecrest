import Footer from "@/components/common/Footer";
import Brands from "@/fragments/landing/Brands";
import Hero from "@/fragments/landing/Hero";
import Services from "@/fragments/landing/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Brands />
      {/* <DampAndMould /> */}
      <Footer />
    </div>
  );
}
