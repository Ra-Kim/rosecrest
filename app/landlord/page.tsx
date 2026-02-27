import Footer from "@/components/common/Footer";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import LandlordsDesc from "@/fragments/landlord/Description";
import LandlordMoreInfo from "@/fragments/landlord/MoreInfo";
import LandlordsServices from "@/fragments/landlord/Services";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <div className="text-center">
          <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16 w-3/5 mx-auto mt-12">
            Housing Disrepair & AWAAB Law Advice for Landlords
          </p>
        </div>
      </JourneyHero>
      <LandlordsDesc />
      <LandlordsServices />
      <LandlordMoreInfo />
      <Footer />
    </div>
  );
};

export default Page;
