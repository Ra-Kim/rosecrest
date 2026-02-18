import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const AdditionalServices = () => {
  return (
    <section className="pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl p-8 lg:p-12">
          <h2 className="text-lg lg:text-xl font-bold text-white mb-4">
            Additional Services:
          </h2>

          <p
            className={`${sourceSans.className} text-[#F3F4F6] text-sm lg:text-base mb-8 leading-relaxed w-4/5`}
          >
            You can add a property valuation, gas safety check or Electrical
            Installation Condition Report (EICR) to the Homebuyer Report for an
            additional fee.
          </p>

          <Link
            href="/services"
            className={`${sourceSans.className} inline-flex items-center gap-2 text-[#DBB38E] hover:text-[#DBB38E]/90 transition-colors font-medium text-sm lg:text-base group`}
          >
            View our Services Page
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
