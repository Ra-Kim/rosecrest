"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import Footer from "@/components/common/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const london = {
  name: "London",
  tagline: "Entirely within the M25 boundary",
  description: "Full coverage across all London boroughs.",
  towns: [
    "Westminster", "City of London", "Islington", "Camden",
    "Kensington", "Chelsea", "Fulham", "Battersea",
    "Hackney", "Tower Hamlets", "Southwark", "Lambeth",
    "Wandsworth", "Hammersmith", "Ealing", "Haringey",
  ],
};

const m25Areas = [
  {
    id: "surrey",
    name: "Surrey",
    description:
      "Large parts fall within the M25, including Kingston, Epsom, Reigate and Weybridge.",
    towns: ["Kingston upon Thames", "Epsom", "Reigate", "Weybridge", "Guildford", "Woking"],
  },
  {
    id: "kent",
    name: "Kent",
    description:
      "North West Kent areas within or just inside the M25, including Bromley, Dartford and Sevenoaks.",
    towns: ["Bromley", "Sevenoaks", "Swanley", "Dartford", "Orpington", "Sidcup"],
  },
  {
    id: "hertfordshire",
    name: "Hertfordshire",
    description:
      "Southern areas within or directly on the M25, including Watford, St Albans and Potters Bar.",
    towns: ["Watford", "Potters Bar", "St Albans", "Waltham Cross", "Hatfield", "Welwyn Garden City"],
  },
  {
    id: "essex",
    name: "Essex",
    description: "Selected areas close to the M25 boundary.",
    towns: ["Loughton", "Waltham Abbey", "Epping", "Harlow", "Chigwell", "Brentwood"],
  },
];

// const allAreas = [{ id: "london", ...london }, ...m25Areas];

// ─── Component ───────────────────────────────────────────────────────────────

export default function AreasWeCoverPage() {
  const [query, setQuery] = useState("");

  const filteredM25 = useMemo(() => {
    if (!query.trim()) return m25Areas;
    const q = query.toLowerCase();
    return m25Areas.filter(
      (area) =>
        area.name.toLowerCase().includes(q) ||
        area.towns.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const londonMatch =
    !query.trim() ||
    london.name.toLowerCase().includes(query.toLowerCase()) ||
    london.towns.some((t) => t.toLowerCase().includes(query.toLowerCase()));

  const noResults = !londonMatch && filteredM25.length === 0 && query.trim().length > 0;

  return (
    <div className="bg-[#FBF7F4] min-h-screen">
      {/* Hero — no search bar */}
      <JourneyHero>
        <p className="text-white text-4xl lg:text-5xl tracking-tight leading-tight font-bold">
          Areas We Cover
        </p>
        <p className={`${sourceSans.className} mt-6 mx-auto text-white/90 text-base lg:text-xl leading-relaxed max-w-2xl`}>
          Rosecrest delivers property inspection, compliance and consultancy
          services across London and areas within the M25. If your property is
          near the boundary or outside this area, please contact us to confirm
          availability.
        </p>
      </JourneyHero>

      {/* Main content */}
      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-24">

        {/* Prominent search */}
        <div className="mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#101828] text-center mb-3">
            Find your area
          </h2>
          <p className={`${sourceSans.className} text-[#4A5565] text-center mb-6`}>
            Search by area or town to check if we cover your location
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#262A6F]" />
            <Input
              type="text"
              placeholder="e.g. Watford, Bromley, Kingston..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${sourceSans.className} pl-14 pr-5 h-14 text-base rounded-2xl border-2 border-[#E5E7EB] focus-visible:border-[#262A6F] focus-visible:ring-0 bg-white shadow-sm text-[#101828] placeholder:text-[#9CA3AF]`}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#4A5565] text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* No results state */}
        {noResults ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-[#101828] mb-3">
              Outside Our Coverage Area
            </h3>
            <p className={`${sourceSans.className} text-[#4A5565] mb-8 max-w-md mx-auto`}>
              We currently serve London and areas within or close to the M25. For
              properties outside this area, please contact us to discuss your
              requirements.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => setQuery("")}
                variant="outline"
                className="rounded-full px-8 border-[#262A6F] text-[#262A6F] hover:bg-[#262A6F]/5"
              >
                View All Areas
              </Button>
              <Link href="/contact">
                <Button className="rounded-full px-8 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Core Coverage */}
            {londonMatch && (
              <div className="mb-12">
                <h3 className="text-lg font-bold text-[#101828] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#262A6F] inline-block" />
                  Core Coverage Area
                </h3>
                <div className="bg-white border border-[#F3F4F6] rounded-2xl p-6 lg:p-8 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#262A6F] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h4 className="text-lg font-bold text-[#101828]">{london.name}</h4>
                      <span className={`${sourceSans.className} text-xs font-semibold text-[#262A6F] bg-[#262A6F]/8 px-3 py-1 rounded-full`}>
                        {london.tagline}
                      </span>
                    </div>
                    <p className={`${sourceSans.className} text-sm text-[#4A5565] mb-3`}>
                      {london.description}
                    </p>
                    <p className={`${sourceSans.className} text-xs text-[#6A7282]`}>
                      <span className="font-semibold text-[#4A5565]">Includes:</span>{" "}
                      {london.towns.slice(0, 8).join(", ")}
                      {london.towns.length > 8 && ` and ${london.towns.length - 8} more boroughs`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* M25 Areas */}
            {filteredM25.length > 0 && (
              <div className="mb-14">
                <h3 className="text-lg font-bold text-[#101828] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#262A6F] inline-block" />
                  Areas Within or Close to the M25
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredM25.map((area) => (
                    <div
                      key={area.id}
                      className="bg-white border border-[#F3F4F6] rounded-2xl p-6 flex flex-col gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#262A6F] flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-[#101828] mb-1">{area.name}</h4>
                          <p className={`${sourceSans.className} text-sm text-[#4A5565]`}>
                            {area.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {area.towns.slice(0, 4).map((town) => (
                          <span
                            key={town}
                            className={`${sourceSans.className} text-xs px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4A5565]`}
                          >
                            {town}
                          </span>
                        ))}
                        {area.towns.length > 4 && (
                          <span className={`${sourceSans.className} text-xs px-3 py-1 rounded-full bg-[#F3F4F6] text-[#6A7282]`}>
                            +{area.towns.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outside M25 CTA */}
            <div className="bg-white border border-[#F3F4F6] rounded-2xl p-8 lg:p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FBF7F4] flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-5 h-5 text-[#4A5565]" />
              </div>
              <h3 className="text-xl font-bold text-[#101828] mb-2">Outside the M25?</h3>
              <p className={`${sourceSans.className} text-sm text-[#4A5565] mb-6 max-w-xl mx-auto`}>
                If your property is located outside the M25 or near the boundary,
                we may still be able to assist depending on the scope of
                inspection required. Please contact us to confirm availability.
              </p>
              <Link href="/contact">
                <Button className="rounded-full px-8 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white inline-flex items-center gap-2">
                  Contact Us to Confirm Coverage
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
