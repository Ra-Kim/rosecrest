import Footer from "@/components/common/Footer";
import AssetHousingStock from "@/fragments/councils/AssetHousing";
import ClientLogos from "@/fragments/councils/Clientlogos";
import ComplianceRisk from "@/fragments/councils/ComplianceRisk";
import CouncilsDesc from "@/fragments/councils/CouncilsDesc";
import HousingExpertise from "@/fragments/councils/HousingExpertise";
import HousingStandards from "@/fragments/councils/HousingStandards";
import LegalExpertServices from "@/fragments/councils/LegalServices";
import CouncilMoreInfo from "@/fragments/councils/MoreInfo";
import ProfessionalStandards from "@/fragments/councils/ProfessionalStandards";
import RecentWork from "@/fragments/councils/RecentWork";
import WhyClientsRelyOnUs from "@/fragments/councils/WhyRely";
import JourneyHero from "@/fragments/journeys/JourneyHero";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <div className="text-center">
          <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16 w-3/5 mx-auto mt-12">
            Inspection, Reporting & Remediation Services for Councils and
            Organisations
          </p>
        </div>
      </JourneyHero>
      <CouncilsDesc />
      <HousingStandards />
      <ClientLogos />
      <HousingExpertise />
      <RecentWork />
      <ComplianceRisk />
      <AssetHousingStock />
      <LegalExpertServices />
      <WhyClientsRelyOnUs />
      <ProfessionalStandards />
      <CouncilMoreInfo />
      <Footer />
    </div>
  );
};

export default Page;
