"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import Footer from "@/components/common/Footer";

// ─── All 33 London boroughs ───────────────────────────────────────────────────
const londonBoroughs = [
  "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley",
  "Camden", "City of London", "Croydon", "Ealing", "Enfield",
  "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow",
  "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea",
  "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham",
  "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets",
  "Waltham Forest", "Wandsworth", "Westminster",
];

// ─── Well-known London neighbourhoods (search aliases) ───────────────────────
// These map to London so any neighbourhood search returns a London match
const londonNeighbourhoods = [
  "Brixton", "Peckham", "Dalston", "Shoreditch", "Canary Wharf", "Stratford",
  "Notting Hill", "Shepherd's Bush", "Clapham", "Balham", "Tooting",
  "Streatham", "Croydon", "Lewisham", "Deptford", "New Cross", "Catford",
  "Forest Hill", "Sydenham", "Bethnal Green", "Bow", "Mile End", "Poplar",
  "Stepney", "Whitechapel", "Wapping", "Bermondsey", "Borough", "Elephant",
  "Kennington", "Vauxhall", "Stockwell", "Brixton", "Herne Hill", "Tulse Hill",
  "Norwood", "Thornton Heath", "Selhurst", "Wimbledon", "Raynes Park",
  "Morden", "Mitcham", "Colliers Wood", "Tooting Bec", "Balham", "Clapham",
  "Battersea", "Chelsea", "Fulham", "Parsons Green", "Putney", "Wandsworth",
  "Earlsfield", "Wimbledon", "Raynes Park", "Morden", "Sutton", "Cheam",
  "Belmont", "Carshalton", "Wallington", "Hackbridge", "Beddington",
  "Coulsdon", "Purley", "Selsdon", "Addington", "New Addington",
  "Norbury", "Thornton Heath", "Broad Green", "Waddon", "Shirley",
  "Upper Norwood", "Crystal Palace", "Anerley", "Penge", "Beckenham",
  "Elmers End", "Eden Park", "West Wickham", "Hayes", "Keston",
  "Chislehurst", "Sidcup", "Bexley", "Welling", "Erith", "Belvedere",
  "Woolwich", "Plumstead", "Abbey Wood", "Thamesmead", "Charlton",
  "Greenwich", "Blackheath", "Lee", "Grove Park", "Downham", "Bellingham",
  "Bromley", "Shortlands", "Bickley", "Orpington", "St Mary Cray",
  "Swanley", "Hextable", "Crayford", "Dartford",
  "Acton", "Chiswick", "Brentford", "Gunnersbury", "Kew", "Richmond",
  "Twickenham", "Teddington", "Hampton", "Feltham", "Hanworth",
  "Hounslow", "Isleworth", "Osterley", "Southall", "Norwood Green",
  "Greenford", "Perivale", "Alperton", "Wembley", "Harlesden",
  "Willesden", "Cricklewood", "Brent Cross", "Hendon", "Finchley",
  "Mill Hill", "Edgware", "Stanmore", "Harrow", "Pinner", "Ruislip",
  "Northwood", "Uxbridge", "Hillingdon", "Yiewsley", "West Drayton",
  "Southgate", "Palmers Green", "Winchmore Hill", "Enfield", "Edmonton",
  "Tottenham", "Wood Green", "Alexandra Palace", "Crouch End", "Hornsey",
  "Finsbury Park", "Stoke Newington", "Stamford Hill", "Clapton", "Leyton",
  "Leytonstone", "Walthamstow", "Chingford", "Highams Park",
  "Woodford", "Ilford", "Seven Kings", "Goodmayes", "Chadwell Heath",
  "Romford", "Hornchurch", "Upminster", "Rainham", "Dagenham",
  "Barking", "East Ham", "Forest Gate", "Manor Park", "West Ham",
  "Plaistow", "Upton Park", "Beckton", "Royal Docks", "North Woolwich",
  "Camden Town", "Kentish Town", "Tufnell Park", "Archway", "Highgate",
  "Hampstead", "Belsize Park", "Swiss Cottage", "St John's Wood",
  "Maida Vale", "Paddington", "Bayswater", "Queensway", "Marble Arch",
  "Marylebone", "Baker Street", "Fitzrovia", "Bloomsbury", "Holborn",
  "Covent Garden", "Soho", "Mayfair", "Belgravia", "Pimlico",
  "Victoria", "Westminister", "Lambeth North", "Waterloo", "Southbank",
];

// ─── London postcode districts (all covered) ─────────────────────────────────
const londonPostcodeDistricts = [
  "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13",
  "E14","E15","E16","E17","E18","EC1","EC2","EC3","EC4",
  "N1","N2","N3","N4","N5","N6","N7","N8","N9","N10","N11","N12",
  "N13","N14","N15","N16","N17","N18","N19","N20","N21","N22",
  "NW1","NW2","NW3","NW4","NW5","NW6","NW7","NW8","NW9","NW10","NW11",
  "SE1","SE2","SE3","SE4","SE5","SE6","SE7","SE8","SE9","SE10","SE11",
  "SE12","SE13","SE14","SE15","SE16","SE17","SE18","SE19","SE20","SE21",
  "SE22","SE23","SE24","SE25","SE26","SE27","SE28",
  "SW1","SW2","SW3","SW4","SW5","SW6","SW7","SW8","SW9","SW10","SW11",
  "SW12","SW13","SW14","SW15","SW16","SW17","SW18","SW19","SW20",
  "W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12","W13","W14",
  "WC1","WC2",
  "BR1","BR2","BR3","BR4","BR5","BR6","BR7","BR8",
  "CR0","CR2","CR3","CR4","CR5","CR6","CR7","CR8","CR9",
  "DA1","DA2","DA3","DA4","DA5","DA6","DA7","DA8","DA9","DA10",
  "EN1","EN2","EN3","EN4","EN5","EN6","EN7","EN8","EN9",
  "HA0","HA1","HA2","HA3","HA4","HA5","HA6","HA7","HA8","HA9",
  "IG1","IG2","IG3","IG4","IG5","IG6","IG7","IG8","IG9","IG10","IG11",
  "KT1","KT2","KT3","KT4","KT5","KT6","KT7","KT8","KT9",
  "RM1","RM2","RM3","RM4","RM5","RM6","RM7","RM8","RM9","RM10",
  "RM11","RM12","RM13","RM14","RM15","RM16","RM17","RM18","RM19","RM20",
  "SM1","SM2","SM3","SM4","SM5","SM6","SM7",
  "TW1","TW2","TW3","TW4","TW5","TW6","TW7","TW8","TW9","TW10",
  "TW11","TW12","TW13","TW14","TW15","TW16","TW17","TW18","TW19","TW20",
  "UB1","UB2","UB3","UB4","UB5","UB6","UB7","UB8","UB9","UB10","UB11",
  "WD1","WD2","WD3","WD4","WD5","WD6","WD7","WD17","WD18","WD19","WD23","WD24","WD25",
];

const london = {
  name: "London",
  tagline: "All 33 boroughs covered",
  description: "Full coverage across all 33 London boroughs, including the City of London.",
  boroughs: londonBoroughs,
  neighbourhoods: londonNeighbourhoods,
  postcodes: londonPostcodeDistricts,
};

// ─── M25 areas ────────────────────────────────────────────────────────────────
const m25Areas = [
  {
    id: "surrey",
    name: "Surrey",
    description: "Large parts fall within the M25, including Kingston, Epsom, Reigate and Weybridge.",
    towns: [
      "Weybridge", "Walton-on-Thames", "Esher", "Cobham", "Leatherhead",
      "Epsom", "Ewell", "Banstead", "Reigate", "Redhill",
      "Guildford", "Woking", "Staines-upon-Thames", "Egham", "Virginia Water",
    ],
    postcodes: ["KT10","KT11","KT12","KT13","KT17","KT18","KT19","KT20","KT22","RH1","RH2","GU1","GU2","GU21","GU22","TW18","TW19","TW20"],
  },
  {
    id: "kent",
    name: "Kent",
    description: "North West Kent areas within or just inside the M25, including Bromley, Dartford and Sevenoaks.",
    towns: [
      "Bromley", "Orpington", "Sidcup", "Swanley", "Dartford",
      "Crayford", "Longfield", "Sevenoaks", "Otford", "Kemsing",
    ],
    postcodes: ["BR1","BR2","BR3","BR4","BR5","BR6","BR7","BR8","DA1","DA2","DA3","DA4","TN13","TN14","TN15"],
  },
  {
    id: "hertfordshire",
    name: "Hertfordshire",
    description: "Southern areas within or directly on the M25, including Watford, St Albans and Potters Bar.",
    towns: [
      "Watford", "Bushey", "Radlett", "Borehamwood", "Potters Bar",
      "Waltham Cross", "Cheshunt", "Broxbourne", "Hoddesdon",
      "St Albans", "Hatfield", "Welwyn Garden City",
    ],
    postcodes: ["WD17","WD18","WD19","WD23","WD24","WD25","EN6","EN7","EN8","EN9","AL1","AL2","AL9","AL10"],
  },
  {
    id: "essex",
    name: "Essex",
    description: "Selected areas close to the M25 boundary, including Epping, Loughton and Brentwood.",
    towns: [
      "Loughton", "Chigwell", "Buckhurst Hill", "Waltham Abbey",
      "Epping", "North Weald", "Harlow", "Brentwood", "Billericay", "Basildon",
    ],
    postcodes: ["IG7","IG9","IG10","EN9","CM16","CM17","CM18","CM19","CM20","CM15","CM12","CM11"],
  },
];

// ─── Search helpers ──────────────────────────────────────────────────────────
// Short queries (<3 chars) use startsWith to avoid greedy London matches
// swallowing M25 towns like Woking when user types "w"
function textMatch(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  return n.length < 3 ? h.startsWith(n) : h.includes(n);
}

function searchMatch(q: string): string[] | null {
  const query = q.toLowerCase().trim();
  if (!query) return null;

  const results: string[] = [];

  // Check M25 areas
  for (const area of m25Areas) {
    if (
      textMatch(area.name, query) ||
      area.towns.some((t) => textMatch(t, query)) ||
      area.postcodes.some((p) => p.toLowerCase() === query || p.toLowerCase().startsWith(query))
    ) {
      results.push(area.id);
    }
  }

  // Check London
  const londonMatch =
    london.boroughs.some((b) => textMatch(b, query)) ||
    london.neighbourhoods.some((n) => textMatch(n, query)) ||
    london.postcodes.some((p) => p.toLowerCase() === query || p.toLowerCase().startsWith(query));

  if (londonMatch) results.push("london");

  return results.length > 0 ? results : null;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function AreasWeCoverPage() {
  const [query, setQuery] = useState("");

  const matchResult = useMemo(() => {
    if (!query.trim()) return null;
    return searchMatch(query);
  }, [query]);

  const showLondon = !query.trim() || (Array.isArray(matchResult) && matchResult.includes("london"));
  const filteredM25 = useMemo(() => {
    if (!query.trim()) return m25Areas;
    if (Array.isArray(matchResult)) return m25Areas.filter((a) => matchResult.includes(a.id));
    return [];
  }, [query, matchResult]);

  const noResults = query.trim().length > 0 && matchResult === null;

  return (
    <div className="bg-[#FBF7F4] min-h-screen">
      <JourneyHero>
        <p className="text-white text-4xl lg:text-5xl tracking-tight leading-tight font-bold">
          Areas We Cover
        </p>
        <p className={`${sourceSans.className} mt-6 mx-auto text-white/90 text-base lg:text-xl leading-relaxed max-w-3xl`}>
          Rosecrest delivers property inspection, compliance and consultancy
          services across London and areas within the M25. If your property is
          near the boundary or outside this area, please contact us to confirm
          availability.
        </p>
      </JourneyHero>

      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-24">

        {/* Search */}
        <div className="mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#101828] text-center mb-3">
            Find your area
          </h2>
          <p className={`${sourceSans.className} text-[#4A5565] text-center mb-6`}>
            Search by borough, neighbourhood, postcode or town
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#262A6F]" />
            <Input
              type="text"
              placeholder="e.g. Brixton, SW9, Watford, Bromley..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${sourceSans.className} pl-14 pr-16 h-14 text-base rounded-2xl border-2 border-[#E5E7EB] focus-visible:border-[#262A6F] focus-visible:ring-0 bg-white shadow-sm text-[#101828] placeholder:text-[#9CA3AF]`}
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

        {/* No results */}
        {noResults ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-[#101828] mb-3">Outside Our Coverage Area</h3>
            <p className={`${sourceSans.className} text-[#4A5565] mb-8 max-w-md mx-auto`}>
              We currently serve London and areas within or close to the M25. For
              properties outside this area, please contact us to discuss your requirements.
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
            {/* London — Core Coverage */}
            {showLondon && (
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
                    <p className={`${sourceSans.className} text-sm text-[#4A5565] mb-4`}>
                      {london.description}
                    </p>
                    {/* All boroughs as pills */}
                    <div className="flex flex-wrap gap-2">
                      {london.boroughs.map((b) => (
                        <span
                          key={b}
                          className={`${sourceSans.className} text-xs px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4A5565]`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
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
                        {area.towns.map((town) => (
                          <span
                            key={town}
                            className={`${sourceSans.className} text-xs px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4A5565]`}
                          >
                            {town}
                          </span>
                        ))}
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
                we may still be able to assist depending on the scope of inspection
                required. Please contact us to confirm availability.
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