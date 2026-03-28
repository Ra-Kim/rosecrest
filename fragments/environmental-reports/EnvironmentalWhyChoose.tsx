import { CheckCircle, Clock, Users, Map, Shield } from "lucide-react";
import { sourceSans } from "@/lib/fonts";
import { Reveal, Stagger } from "@/components/common/Reveal";

const features = [
  { icon: CheckCircle, text: "Clear, easy-to-understand summaries" },
  { icon: Map, text: "Backed by national data sources and GIS mapping" },
  { icon: Clock, text: "Fast turnaround available" },
  { icon: Shield, text: "Expert advice from qualified professionals" },
  { icon: Users, text: "Affordable, fixed-rate pricing" },
];

const EnvironmentalWhyChoose = () => {
  return (
    <section className="bg-[#FBF7F4] py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <Reveal animation="fade-up" duration={600}>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12">
            Why Choose Rosecrest?
          </h2>
        </Reveal>

        <Stagger
          animation="fade-up"
          staggerMs={100}
          duration={500}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.text}
                className="bg-white border border-gray-100 rounded-2xl px-6 py-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#262A6F] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className={`${sourceSans.className} text-sm text-[#4A5565]`}>
                  ✓ {feature.text}
                </span>
              </div>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
};

export default EnvironmentalWhyChoose;