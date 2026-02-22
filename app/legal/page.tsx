import Footer from "@/components/common/Footer";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import InstructionProcess from "@/fragments/legal/InstructionProcess";
import LegalAidInstructions from "@/fragments/legal/LegalAid";
import LegalDesc from "@/fragments/legal/LegalDisc";
import LegalMoreInfo from "@/fragments/legal/LegalMoreInfo";
import ProfessionalStandardsLegal from "@/fragments/legal/LegalProfessionalStandards";
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
      <LegalAidInstructions />
      <ProfessionalStandardsLegal />
      <LegalMoreInfo />
      <Footer />
    </div>
  );
};

export default Page;
