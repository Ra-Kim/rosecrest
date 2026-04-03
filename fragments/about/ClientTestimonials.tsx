"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal } from "@/components/common/Reveal";


const testimonials = [
  {
    quote:
      "We instructed Rosecrest Group Ltd to provide independent oversight, monitoring, and reporting in relation to plumbing separation works at one of our sites. The service was delivered in a professional and structured manner, with clear communication throughout. Their oversight and reporting provided a transparent view of the works as they progressed, allowing us to monitor key stages and address any issues efficiently. The final reporting was clear, well presented, and supported our internal processes and decision-making. Overall, we found the service reliable and would be happy to work with Rosecrest Group Ltd again on future projects.",
    org: "Purdy — Part of Sureserve",
    name: "Purdy Contracts",
    avatar: "/assets/images/logos/purdy.png",
    isLogo: true,
  },
  {
    quote:
      "We have consistently found Rosecrest Group Ltd's expert reports to be professional, detailed, and highly reliable. In particular, their CPR Part 35-compliant reports and damp and mould investigations are thorough and clearly presented, making them well-suited for litigation purposes. The staff have been consistently helpful, professional, and responsive throughout our dealings, which has made the instruction process straightforward and efficient. Their reports have greatly assisted our clients in pursuing claims against their landlords by clearly identifying defects, causation, and the extent of disrepair. The findings have been instrumental in evidencing issues such as damp, mould, and structural defects, as well as ensuring that appropriate remedial work is recommended.",
    org: "Din Solicitors",
    name: "Trusted Solicitors for Claims",
    avatar: "/assets/images/logos/din-solicitors.svg",
    isLogo: true,
  },
];

// On desktop we show pairs; if there's only one pair show it twice (or add more testimonials later)
const desktopSlides: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  desktopSlides.push(testimonials.slice(i, i + 2));
}
// If odd number, last slide shows the last item alone
// (currently 2 testimonials → 1 desktop slide)

const AUTO_ADVANCE_MS = 20_000;

// ─── Card ─────────────────────────────────────────────────────────────────────

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-white border border-gray-200 rounded-4xl p-8 flex flex-col gap-6 h-full">
    <Image src="/assets/svgs/brown-quote.svg" alt="" width={32} height={32} />
    <p
      className={`${sourceSans.className} text-[#101828] font-light text-base md:text-lg leading-relaxed flex-1`}
    >
      {t.quote}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-200 shrink-0 flex items-center justify-center">
        <Image
          src={t.avatar}
          alt={t.org}
          width={48}
          height={48}
          className="object-contain w-full h-full"
        />
      </div>
      <div>
        <p className="font-semibold text-[#101828] text-sm">{t.org}</p>
        <p className={`${sourceSans.className} text-[#6A7282] text-sm`}>
          {t.name}
        </p>
      </div>
    </div>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

const ClientTestimonials = () => {
  const [mobileIdx, setMobileIdx] = useState(0);
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const mobileTotal = testimonials.length;
  const desktopTotal = desktopSlides.length;

  const animate = useCallback(
    (cb: () => void, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        cb();
        setAnimating(false);
      }, 350);
    },
    [animating],
  );

  const prevMobile = useCallback(() => {
    animate(() => setMobileIdx((i) => (i - 1 + mobileTotal) % mobileTotal), "left");
  }, [animate, mobileTotal]);

  const nextMobile = useCallback(() => {
    animate(() => setMobileIdx((i) => (i + 1) % mobileTotal), "right");
  }, [animate, mobileTotal]);

  const prevDesktop = useCallback(() => {
    animate(() => setDesktopIdx((i) => (i - 1 + desktopTotal) % desktopTotal), "left");
  }, [animate, desktopTotal]);

  const nextDesktop = useCallback(() => {
    animate(() => setDesktopIdx((i) => (i + 1) % desktopTotal), "right");
  }, [animate, desktopTotal]);

  useEffect(() => {
    if (mobileTotal <= 1 && desktopTotal <= 1) return; // nothing to auto-advance
    const timer = setInterval(() => {
      animate(() => {
        setMobileIdx((i) => (i + 1) % mobileTotal);
        setDesktopIdx((i) => (i + 1) % desktopTotal);
      }, "right");
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [animate, mobileTotal, desktopTotal]);

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
    transition: "opacity 350ms ease, transform 350ms ease",
  };

  return (
    <section className="py-16 lg:py-24 px-4 md:px-25 bg-[#F9FAFB]">
      <div className="max-w-7xl px-4 mx-auto">
        <Reveal animation="fade" duration={500}>
          <Image src="/assets/svgs/white-quote.svg" alt="" width={48} height={48} />
        </Reveal>

        <Reveal animation="fade-up" duration={600} delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
              Client Testimonials
            </h2>
            <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg mx-auto`}>
              Feedback from clients on their experience working with Rosecrest.
            </p>
          </div>
        </Reveal>

        {/* ── Mobile: single card ── */}
        <div className="lg:hidden">
          <div style={slideStyle} className="mb-8">
            <TestimonialCard t={testimonials[mobileIdx]} />
          </div>

          {mobileTotal > 1 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => animate(() => setMobileIdx(i), i > mobileIdx ? "right" : "left")}
                    aria-label={`Go to slide ${i + 1}`}
                    className="h-1 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      width: i === mobileIdx ? "48px" : "20px",
                      backgroundColor: i === mobileIdx ? "#DBB38E" : "#D1D5DB",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevMobile}
                  className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextMobile}
                  className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Desktop: two cards per slide ── */}
        <div className="hidden lg:block">
          <div style={slideStyle} className="grid lg:grid-cols-2 gap-6 mb-10">
            {desktopSlides[desktopIdx].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          {desktopTotal > 1 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {desktopSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => animate(() => setDesktopIdx(i), i > desktopIdx ? "right" : "left")}
                    aria-label={`Go to slide ${i + 1}`}
                    className="h-1 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      width: i === desktopIdx ? "80px" : "32px",
                      backgroundColor: i === desktopIdx ? "#DBB38E" : "#D1D5DB",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevDesktop}
                  className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextDesktop}
                  className="w-10 h-10 rounded-[6px] bg-[#262A6F] hover:bg-[#262A6F]/80 text-white flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;