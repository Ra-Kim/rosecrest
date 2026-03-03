"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";
import { useRouter } from "next/navigation";

const CarpetDescription = () => {
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
            At Rosecrest Group ltd, we understand the importance of clean
            carpets for a healthy and inviting home. Our expert carpet cleaning
            services are designed to rejuvenate your carpets, removing dirt,
            stains, and allergens to restore their original beauty. With a
            commitment to quality and customer satisfaction, our team will
            ensure your carpets look and feel fresh.
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
            src="/assets/images/paint-decor.png"
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

export default CarpetDescription;
