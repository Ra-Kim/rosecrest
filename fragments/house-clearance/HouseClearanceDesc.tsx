"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";
import { useRouter } from "next/navigation";

const HouseClearanceDescription = () => {
  const router = useRouter()
  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2
            className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] mb-6 leading-8 w-[90%]`}
          >
            At Rosecrest Group Ltd, we understand that clearing out a home can
            be a daunting task, whether you’re downsizing, decluttering, or
            dealing with the estate of a loved one. Our expert house clearance
            services are designed to make the process smooth, efficient, and
            stress-free. With a commitment to professionalism and care, we
            handle all aspects of house clearance, ensuring that your space is
            left clean and organised.
          </h2>

          {/* CTAs */}
          <div className="flex items-center gap-6 flex-wrap">
            <Button
              size="lg"
              onClick={() => router.push("/contact")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Make an inquiry
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/house-clearance/hero.png"
            alt="Apartment building for landlords and property owners"
            height={548}
            width={539}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HouseClearanceDescription;
