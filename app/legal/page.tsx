import Footer from "@/components/common/Footer";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import InstructionProcess from "@/fragments/legal/InstructionProcess";
import LegalDesc from "@/fragments/legal/LegalDisc";
import LegalServices from "@/fragments/legal/LegalServices";
import SupportingLegalProfessionals from "@/fragments/legal/SupportingLegal";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <div className="text-center">
          <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16 w-3/4 mx-auto mt-12">
            Independent Property Inspection & Expert Reporting for Legal
            Instructions
          </p>
        </div>
      </JourneyHero>
      <LegalDesc />
      <InstructionProcess />
      <SupportingLegalProfessionals />
      <LegalServices />
      <Footer />
    </div>
  );
};

export default Page;
