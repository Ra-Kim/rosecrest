import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const audience = [
  "Buyers and sellers of residential or commercial property",
  "Landlords and letting agents",
  "Developers and architects",
  "Solicitors and conveyancers",
  "Mortgage lenders and insurers",
];

const EnvironmentalWhoNeeds = () => {
  return (
    <div className="bg-white">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

        {/* Left — image */}
        <Reveal animation="fade-right" duration={700}>
          <div className="relative flex justify-start">
            <Image
              src="/assets/images/environmental-house.png"
              alt="Property surrounded by trees"
              height={548}
              width={480}
              className="object-cover rounded-[24px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        {/* Right — content */}
        <Reveal animation="fade-left" duration={600} delay={150}>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#101828] mb-8 leading-tight">
              Who Needs an Environmental Report?
            </h2>

            <Stagger animation="fade-up" staggerMs={80} duration={400} className="space-y-4">
              {audience.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <CheckCircle className="w-5 h-5 text-[#262A6F] shrink-0" />
                  <span className={`${sourceSans.className} text-base text-[#4A5565]`}>
                    {item}
                  </span>
                </div>
              ))}
            </Stagger>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default EnvironmentalWhoNeeds;