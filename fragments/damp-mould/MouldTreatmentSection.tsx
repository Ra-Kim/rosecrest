"use client";

import Image from "next/image";
import { useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const RATE_MID  = 25; // £/m² — headline rate, adjust freely
const RATE_LOW  = Math.round(RATE_MID * 0.9);  // −10%
const RATE_HIGH = Math.round(RATE_MID * 1.1);  // +10%

const MouldTreatmentSection = () => {
  const router = useRouter();
  const [area, setArea] = useState("");

  const parsed = parseFloat(area);
  const hasValue = !isNaN(parsed) && parsed > 0;

  const low = hasValue ? Math.round(parsed * RATE_LOW) : null;
  const high = hasValue ? Math.round(parsed * RATE_HIGH) : null;

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — content */}
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] leading-tight mb-4">
            Mould Treatment &<br />
            Remediation
          </h2>
          <p
            className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg mb-8`}
          >
            Transparent pricing based on the size of affected area
          </p>

          {/* Calculator card */}
          <div className="border border-[#E5E7EB] rounded-2xl p-6 mb-8 space-y-4">
            {/* Input */}
            <div className="space-y-2">
              <Label
                className={`${sourceSans.className} text-sm text-[#4A5565]`}
              >
                Approximate size of affected area (m²)
              </Label>
              <Input
                type="number"
                min="0"
                placeholder="Enter area size (e.g., 5)"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className={`${sourceSans.className} h-12 rounded-xl border-[#E5E7EB] focus-visible:border-[#262A6F] focus-visible:ring-0 text-base text-[#101828] placeholder:text-[#9CA3AF]`}
              />
            </div>

            {/* Result area */}
            {hasValue ? (
              /* ── Estimate result ── */
              <div className="bg-[#F0F3FF] border border-[#D0D7F5] rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`${sourceSans.className} text-xs text-[#6A7282] mb-1`}
                    >
                      Estimated treatment cost
                    </p>
                    <p className="text-3xl font-bold text-[#262A6F] tracking-tight">
                      £{low} – £{high}
                    </p>
                    <p
                      className={`${sourceSans.className} text-xs text-[#6A7282] mt-1`}
                    >
                      Based on {parsed} m² at £{RATE_MID}/m² ±10%
                    </p>
                  </div>
                  <div className="bg-[#262A6F] rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Breakdown bar */}
                <div className="mt-4 pt-4 border-t border-[#D0D7F5] grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p
                      className={`${sourceSans.className} text-xs text-[#6A7282]`}
                    >
                      Low estimate
                    </p>
                    <p className="text-sm font-bold text-[#262A6F]">£{low}</p>
                  </div>
                  <div className="border-x border-[#D0D7F5]">
                    <p
                      className={`${sourceSans.className} text-xs text-[#6A7282]`}
                    >
                      Mid estimate
                    </p>
                    <p className="text-sm font-bold text-[#262A6F]">
                      £{Math.round(((low ?? 0) + (high ?? 0)) / 2)}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${sourceSans.className} text-xs text-[#6A7282]`}
                    >
                      High estimate
                    </p>
                    <p className="text-sm font-bold text-[#262A6F]">£{high}</p>
                  </div>
                </div>

                <p
                  className={`${sourceSans.className} text-xs text-[#9CA3AF] mt-3`}
                >
                  * Final price confirmed after on-site assessment
                </p>
              </div>
            ) : (
              /* ── Empty state ── */
              <div className="border border-dashed border-[#E5E7EB] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-6 min-h-43.5">
                <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#9CA3AF]" />
                </div>
                <p
                  className={`${sourceSans.className} text-sm text-[#9CA3AF] max-w-xs`}
                >
                  Enter the affected area in the input field above and the
                  estimated treatment cost will be displayed
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full px-8 py-6 text-base font-semibold inline-flex items-center gap-2"
            >
              Book a Discussion
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right — image with price badge */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full">
            <Image
              src="/assets/images/mould-treatment.png"
              alt="Specialist applying mould treatment remediation"
              width={605}
              height={654}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MouldTreatmentSection;
