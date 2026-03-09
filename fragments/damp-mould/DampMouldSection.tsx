"use client";

import Image from "next/image";
import {
  Home,
  Search,
  TrendingUp,
  Camera,
  FileText,
  ArrowRight,
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const inclusions = [
  { icon: Home, label: "On-site inspection of affected areas" },
  { icon: Search, label: "Identification of damp and mould conditions" },
  { icon: TrendingUp, label: "Analysis of contributing factors" },
  { icon: Camera, label: "Detailed photographic evidence" },
  { icon: FileText, label: "Written report for onward action" },
];

const DampMouldSurveySection = () => {
  const router = useRouter();

  return (
    <section className="bg-[#FBF7F4] py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — image with floating price badge */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Image */}
          <div className="relative w-full">
            <Image
              src="/assets/images/damp-mould-survey.png"
              alt="Surveyor inspecting damp and mould on wall"
              width={605}
              height={654}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] leading-tight mb-4">
            Fixed-Price Damp &<br />
            Mould Survey
          </h2>
          <p
            className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg leading-relaxed mb-8`}
          >
            Our comprehensive inspection provides clear documentation of
            observed conditions and contributing factors.
          </p>

          {/* Inclusions list */}
          <ul className="space-y-3 mb-10">
            {inclusions.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 bg-white border border-[#F3F4F6] rounded-2xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#262A6F] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`${sourceSans.className} text-sm lg:text-base text-[#101828]`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white cursor-pointer rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2"
            >
              Book Damp & Mould Survey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DampMouldSurveySection;
