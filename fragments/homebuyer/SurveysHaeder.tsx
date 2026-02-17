import React from "react";
import { sourceSans } from "@/lib/fonts";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const SurveysHaeder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-115 bg-[#FBF7F4] border-b border-b-[#F3F4F6]">
      {/* Content */}
      <div className="relative z-10 rounded-4xl w-full pt-48 text-center px-20">
        <Link href={`/homebuyer`}>
          <div className="flex gap-2 items-center text-[#262A6F] hover:scale-101">
            <ChevronLeft className="h-5 w-5" />
            <p className={`${sourceSans.className}`}>
              Back to survey selection
            </p>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default SurveysHaeder;
