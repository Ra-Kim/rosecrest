import { sourceSans } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const PlasteringMoreInfo = () => {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Top: heading left, body right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12 lg:mb-16 items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] leading-tight">
            Why Choose
            <br />
            Rosecrest Group Ltd?
          </h2>
          <div
            className={`${sourceSans.className} text-[#101828] text-base lg:text-lg leading-relaxed`}
          >
            <p>
              By choosing Rosecrest for your plastering needs, you are investing
              in quality, durability, and exceptional service.
            </p>
            <p>
              We set the stage for beautiful interiors, ensuring that your walls
              and ceilings provide the perfect backdrop for your design vision.
              Let us help you create spaces that are not only visually stunning
              but also built to last.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="relative bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl px-8 py-16 text-center overflow-hidden min-h-78">
          {/* Decorative circles */}
          <div className="absolute -top-16 right-16 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

          <h3 className="relative z-10 text-3xl lg:text-4xl max-w-xl mx-auto font-bold text-white mb-4 capitalize">
            Ready to transform your space with expert plastering?
          </h3>
          <p
            className={`${sourceSans.className} relative z-10 text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed`}
          >
            Contact us today to discuss your project.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-[#DBB38E] text-gray-900 font-medium rounded-full hover:bg-[#c9a07d] transition-colors duration-200"
          >
            Get started now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlasteringMoreInfo;
