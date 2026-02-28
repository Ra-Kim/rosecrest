import {
  FileText,
  ClipboardList,
  Search,
  ShieldCheck,
  Scale,
  ShieldHalf,
  Send,
  FilePlus,
  Home,
  FileEdit,
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const items = [
  {
    icon: FileText,
    title: "Notice Preparation & Service",
    description:
      "We advise on, prepare, draft, review and serve the necessary notice(s) to comply with the Party Wall etc. Act.",
  },
  {
    icon: ClipboardList,
    title: "Schedule of Condition",
    description:
      "We document the condition of the adjoining owner's property prior to work commencing.",
  },
  {
    icon: Search,
    title: "Site Access & Inspection",
    description:
      "Arranging access and attending the site to assess the specific circumstances involved. For property assessments and inspections, we also offer RICS Level 1 to 3 Surveys.",
  },
  {
    icon: ShieldCheck,
    title: "Notice Accuracy",
    description:
      "Serving accurate, legally compliant notices is essential. We ensure all notices meet the required standards to avoid any invalidation.",
  },
  {
    icon: Scale,
    title: "Impartiality",
    description:
      "Once appointed under the Act, our surveyor must remain unbiased and ensure fair outcomes for both parties.",
  },
  {
    icon: ShieldHalf,
    title: "Equitable Party Wall Award",
    description:
      "Our surveyor negotiates with the adjoining owner to create a fair and balanced party wall award.",
  },
  {
    icon: Send,
    title: "Issuing the Award",
    description:
      "We draft, finalise and serve the Party Wall Award to both parties.",
  },
  {
    icon: FilePlus,
    title: "Additional Awards (if needed)",
    description:
      "In some cases, further awards may be required as the project progresses.",
  },
  {
    icon: Home,
    title: "Property Inspection",
    description:
      "A thorough examination of the adjoining property ensures we understand the potential impact of the project and verify the accuracy of the plans. This step is key to creating a detailed schedule of condition to help identify any potential future damage.",
  },
  {
    icon: FileEdit,
    title: "The Party Wall Award",
    description:
      "With all necessary information, we draft the Party Wall Award, detailing each owner's responsibilities, work guidelines, access provisions and damage protocols. Rest assured; we address all concerns meticulously to safeguard your interests.",
  },
];

export default function PartyWallIncludes() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-4 max-w-4xl mx-auto leading-tight">
          The Agreed Party Wall Surveyor
        </h2>
        <p className={`${sourceSans.className} text-[#4A5565] text-base lg:text-lg text-center max-w-2xl mx-auto mb-12 lg:mb-16 leading-relaxed`}>
          This process involves the building owner and the adjoining owner
          agreeing to appoint the same Party Wall Surveyor to facilitate the
          Party Wall Award.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative border border-[#F3F4F6] rounded-2xl p-8 overflow-hidden"
              >
                {/* Watermark circle top-right */}
                <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full bg-gray-200/60 bg-linear-to-tr from-[#2B7FFF1A] to-[#00000000] pointer-events-none opacity-30" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#262A6F] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-[#101828] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`${sourceSans.className} relative text-base text-[#4A5565] leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}