import React from "react";
import { sourceSans } from "@/lib/fonts";

const steps = [
  {
    title: "Initial Instruction Discussion",
    description:
      "Scope, purpose of report, property details and timescales are discussed with the instructing solicitor.",
    accent: false,
  },
  {
    title: "Conflict & Scope Confirmation",
    description:
      "Independence is confirmed and the agreed scope of inspection and reporting is set out in writing.",
    accent: false,
  },
  {
    title: "Inspection & Evidence Gathering",
    description:
      "Inspection carried out in accordance with agreed scope, with photographic and documentary evidence recorded.",
    accent: false,
  },
  {
    title: "Report Preparation & Issue",
    description:
      "A clear, reasoned report is prepared and issued in line with professional standards.",
    accent: false,
  },
  {
    title: "Clarifications (if required)",
    description:
      "Reasonable clarification provided without straying beyond agreed scope.",
    accent: true,
  },
];

const InstructionProcess = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-24 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#101828] mb-4">
          Our Instruction Process
        </h2>
        <p
          className={`${sourceSans.className} text-[#6A7282] text-base lg:text-lg max-w-2xl mx-auto`}
        >
          A structured approach ensuring clarity, independence and professional
          standards throughout
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 items-start">
            {/* Left: number + connector */}
            <div className="flex flex-col items-center shrink-0 w-14">
              {/* Number badge */}
              <div
                className={`w-14 h-14 rounded-[16.4px] flex items-center justify-center text-white text-xl font-semibold z-10 shadow-md ${
                  step.accent ? "bg-[#DBB38E]" : "bg-[#262A6F]"
                }`}
              >
                {index + 1}
              </div>
              {/* Connector line — touches badge, amber colour */}
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 flex-1 min-h-24 ${index === steps.length - 2 ? "bg-[#DBB38E]" : index === steps.length - 3 ? "bg-linear-to-b from-[0.5%] from-[#262A6F] to-[#DBB38E]" : index === steps.length - 4 ? "bg-linear-to-b to-[0.5% ] from-[#262A6F] to-[#DBB38E]" : "bg-[#262A6F]"}`}
                />
              )}
            </div>

            {/* Right: card */}
            <div className={`flex-1 ${index < steps.length - 1 ? "mb-6" : ""}`}>
              <div className="border-2 border-[#F3F4F6] rounded-3xl px-8 py-6">
                <h3 className="font-bold text-[#101828] text-lg mb-2">
                  {step.title}
                </h3>
                <p
                  className={`${sourceSans.className} text-[#6A7282] text-base leading-relaxed`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructionProcess;
