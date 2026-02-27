import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

export default function GetStarted() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CTA banner */}
        <div className="relative bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl px-8 py-16 text-center overflow-hidden min-h-78">
          {/* Decorative circles */}
          <div className="absolute -top-16 right-16 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

          <h3 className="relative z-10 text-3xl lg:text-4xl font-bold text-white mb-4 capitalize">
            Residential EPCs will start from £33
          </h3>
          <p
            className={`${sourceSans.className} relative z-10 text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed`}
          >
            Choose Rosecrest Group Ltd for a holistic approach to building and
            property solutions, where quality and client satisfaction are our
            top priorities.
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
