"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { useRouter } from "next/navigation";

const badges = [
  "Independent inspections",
  "Clear reporting",
  "Professional standards",
];

const DampMouldDescription = () => {
  const router = useRouter();

  return (
    <div className="bg-[#FBF7F4]">
      <div className="grid lg:grid-cols-2 px-2 sm:px-0 py-12 lg:py-20 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center">
          {/* Two paragraphs */}
          <div className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] leading-8 w-[90%] space-y-4 mb-6`}>
            <p>
              Damp, mould and condensation issues are increasingly common across
              residential property and often require clear, independent inspection
              before appropriate action can be taken.
            </p>
            <p>
              Rosecrest provides damp, mould and condensation inspections,
              reporting and treatment support to landlords, councils,
              organisations and property owners. Services are delivered with a
              focus on identifying observed conditions, contributing factors and
              appropriate next steps, with clear documentation throughout.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
            {badges.map((badge, index) => (
              <>
                <div key={index} className={`flex items-center gap-1.5 text-[#4A5565] ${sourceSans.className}`}>
                  <CheckCircle className="w-4 h-4 text-[#DBB38E]" strokeWidth={1.5} />
                  <span className="text-sm">{badge}</span>
                </div>
                {index < badges.length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-[#4A5565]/40" />
                )}
              </>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Button
              size="lg"
              onClick={() => router.push("/contact")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white px-8 py-6 text-base rounded-full"
            >
              Book Damp and Mould Survey
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-end">
          <Image
            src="/assets/images/paint-decor.png"
            alt="Damp and mould on interior wall"
            height={548}
            width={539}
            className="object-cover rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default DampMouldDescription;