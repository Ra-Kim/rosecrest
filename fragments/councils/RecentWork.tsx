import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sourceSans } from "@/lib/fonts";
import { Reveal } from "@/components/common/Reveal";

interface ProjectCase {
  title: string;
  client: string;
  properties: string;
  services: string;
  outcome: string;
  href: string;
}

const cases: ProjectCase[] = [
  {
    title: "Delivering Complex Damp & Mould Remediation and Kitchen/Bathroom Upgrades Within Local Authority Basket Rates",
    client: "Local Authority Housing Department",
    properties: "Multiple occupied residential dwellings",
    services: "Damp & mould investigation, kitchen/bathroom replacement, ventilation upgrades",
    outcome: "Resolution of disrepair complaints and 99.9% tenant satisfaction",
    href: "#",
  },
  {
    title: "Independent Stock Condition Survey Supporting 30-Year Asset Management Strategy",
    client: "District Council Housing Services",
    properties: "1,200 council-owned residential properties",
    services: "Comprehensive stock condition surveys, energy efficiency assessments, costed repair schedules",
    outcome: "Evidence-based 30-year investment plan aligned with Decent Homes Standards and net-zero targets",
    href: "#",
  },
  {
    title: "Fire Safety & Building Compliance Review Across High-Rise Portfolio",
    client: "Social Housing Provider",
    properties: "28 high-rise residential blocks",
    services: "Fire risk assessments, building safety evaluations, remediation prioritisation",
    outcome: "Full compliance with updated regulatory guidance and clear action plan for resident safety",
    href: "#",
  },
];

const SnapshotRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-bold text-[#101828] text-sm mb-0.5">{label}</p>
    <p className={`${sourceSans.className} text-[#4A5565] text-sm leading-relaxed`}>{value}</p>
  </div>
);

const RecentWork = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">

        <Reveal animation="fade-up" duration={600}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] text-center mb-4">
            Project Examples
          </h2>
          <p className={`${sourceSans.className} text-base lg:text-xl text-[#4A5565] text-center max-w-4xl mx-auto mb-12`}>
            Examples of inspection, reporting and consultancy work delivered for our councils, housing organisations and public sector clients
          </p>
        </Reveal>

      </div>

      {/* 
        Mobile: horizontal snap scroll — overflow-x-auto, flex row, each card is 80vw wide
        Desktop: 3-col grid inside max-w container
      */}
      <Reveal animation="fade-up" duration={600} delay={100}>

        {/* Mobile snap scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4 -mb-4 scrollbar-hide">
          {cases.map((c, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[82vw] bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5"
            >
              <h3 className="font-bold text-[#101828] text-base leading-snug">{c.title}</h3>
              <div>
                <div className="border-t border-gray-200 mb-4" />
                <p className="font-bold text-[#262A6F] text-sm mb-4">Project Snapshot</p>
                <div className="space-y-3">
                  <SnapshotRow label="Client:" value={c.client} />
                  <SnapshotRow label="Properties:" value={c.properties} />
                  <SnapshotRow label="Services Provided:" value={c.services} />
                  <SnapshotRow label="Key Outcome:" value={c.outcome} />
                </div>
              </div>
              <div className="mt-auto pt-2">
                <Link href={c.href}>
                  <Button size="lg" className="w-full bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full h-12 text-sm font-medium flex items-center justify-center gap-2">
                    View Case Study Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
          {/* Trailing spacer so last card doesn't sit flush against edge */}
          <div className="shrink-0 w-4" />
        </div>

        {/* Desktop 3-col grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5"
            >
              <h3 className="font-bold text-[#101828] text-base leading-snug">{c.title}</h3>
              <div>
                <div className="border-t border-gray-200 mb-4" />
                <p className="font-bold text-[#262A6F] text-sm mb-4">Project Snapshot</p>
                <div className="space-y-3">
                  <SnapshotRow label="Client:" value={c.client} />
                  <SnapshotRow label="Properties:" value={c.properties} />
                  <SnapshotRow label="Services Provided:" value={c.services} />
                  <SnapshotRow label="Key Outcome:" value={c.outcome} />
                </div>
              </div>
              <div className="mt-auto pt-2">
                <Link href={c.href}>
                  <Button size="lg" className="w-full bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full h-12 text-sm font-medium flex items-center justify-center gap-2">
                    View Case Study Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </Reveal>
    </section>
  );
};

export default RecentWork;