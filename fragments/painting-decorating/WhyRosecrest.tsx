import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

export default function WhyChooseSection() {
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
              At Rosecrest Group Ltd, we are passionate about creating beautiful
              environments that resonate with your style.
            </p>
            <p>
              Our decorating team combines creativity, expertise, and a
              commitment to quality, transforming your spaces into stunning
              reflections of you. Trust us to elevate your home—one brushstroke
              at a time.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div className="relative bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl px-8 py-16 text-center overflow-hidden min-h-78">
          {/* Decorative circles */}
          <div className="absolute -top-16 right-16 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

          <h3 className="relative z-10 text-3xl lg:text-4xl font-bold text-white mb-4 capitalize">
            What is the next step?
          </h3>
          <p
            className={`${sourceSans.className} relative z-10 text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed`}
          >
            Contact us today to start your transformation.
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
}
