import Link from "next/link";
import { sourceSans } from "@/lib/fonts";

export default function CreatePartyWall() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto">
        {/* Top: heading left, body right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12 lg:mb-16 items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] leading-tight">
            Create Your Party Wall
            <br />
            Notice for Free
          </h2>
          <p
            className={`${sourceSans.className} text-[#101828] text-base lg:text-lg leading-relaxed`}
          >
            Creating a Party Wall Notice is a crucial step when planning
            construction or renovation projects that might affect shared walls
            with neighbouring properties. Our platform simplifies this process
            by offering you the opportunity to generate your Party Wall Notice
            for free.
          </p>
        </div>

        {/* CTA banner */}
        <div className="relative bg-linear-to-b from-[#262A6F] to-[#1A1D4F] rounded-3xl px-8 py-16 text-center overflow-hidden min-h-78">
          {/* Decorative circles */}
          <div className="absolute -top-16 right-16 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none" />

          <p
            className={`${sourceSans.className} relative z-10 text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed`}
          >
            With just a few clicks, you can draft a Party Wall Notice, ensuring
            that your project adheres to all necessary regulations and maintains
            positive relations with your neighbours. Don’t wait; start the
            process now to protect your interests and facilitate a smooth
            construction journey.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-[#DBB38E] text-gray-900 font-semibold rounded-full hover:bg-[#c9a07d] transition-colors duration-200"
          >
            Free Party Wall Tool
          </Link>
        </div>
      </div>
    </section>
  );
}
