import JourneyHero from "@/fragments/journeys/JourneyHero";
import DampAndMould from "@/fragments/shared/DampMould";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <div className="text-center">
          <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16 w-3/4 mx-auto mt-12">
            Property Compliance, Condition & Disrepair Reporting for Landlords
          </p>
        </div>
      </JourneyHero>
      <DampAndMould />
    </div>
  );
};

export default Page;
