import { sourceSans } from "@/lib/fonts";
import Image from "next/image";
import { Award, CheckCircle, Shield } from "lucide-react";
import React from "react";
import { Reveal, Stagger } from "@/components/common/Reveal";

const partnerLogos = [
  { name: "IPWS", src: "/assets/brands/ipws.svg", height: 33, width: 100 },
  { name: "CABE", src: "/assets/brands/cabe.svg", height: 54, width: 100 },
  { name: "RPSA", src: "/assets/brands/rpsa.svg", height: 56, width: 100 },
  { name: "RICS", src: "/assets/brands/rics.svg", height: 34, width: 87 },
  { name: "Constructionline", src: "/assets/brands/constructionline.svg", height: 44, width: 83 },
  { name: "SafeContractor", src: "/assets/brands/safecontractor.svg", height: 32, width: 200 },
];

const trustBadges = [
  { icon: Award, text: "RICS Regulated" },
  { icon: CheckCircle, text: "Constructionline Gold" },
  { icon: Shield, text: "SafeContractor approved" },
  {
    image: <Image src="/assets/svgs/shield-shade.svg" alt="" height={24} width={24} />,
    text: "Professional Indemnity Insured",
  },
];

const WhyChooseRosecrest = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <Reveal animation="fade-up" duration={600}>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-10 leading-tight">
            Why Clients Choose Rosecrest Group
          </h2>
        </Reveal>

        {/* Image + dark card */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">

          {/* Image */}
          <Reveal animation="fade-right" duration={700}>
            <div className="relative min-h-72 md:min-h-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/about-why.png"
                alt="Rosecrest Group building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Dark text card */}
          <Reveal animation="fade-left" duration={700}>
            <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] p-8 lg:p-12 flex flex-col gap-6 rounded-2xl h-full">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-[#262A6F]" />
              </div>

              <div className={`${sourceSans.className} text-sm md:text-base text-white/90 leading-relaxed space-y-4`}>
                <p>
                  Clients choose Rosecrest Group for clear advice, professional
                  integrity, and dependable delivery.
                </p>
                <p>
                  As a RICS-regulated firm, our work is evidence-based, clearly
                  reported, and easy to understand. Whether we are undertaking a
                  survey, producing a housing disrepair report, providing Party
                  Wall advice, or acting as Expert Witnesses, clients value our
                  ability to explain complex issues clearly and provide guidance
                  they can rely on. Where works are required, our professional
                  advice is supported by qualified trade teams delivering
                  practical, compliant solutions.
                </p>
                <p>
                  Many clients come to us after unclear advice or ineffective
                  repair works. Where appropriate, we move beyond reporting to
                  deliver remedial works, ensuring recommendations are
                  implemented correctly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Logos row */}
        <Reveal animation="fade-up" duration={600} delay={100}>
          <p className={`${sourceSans.className} text-sm text-[#6A7282] text-center max-w-2xl mx-auto mb-8`}>
            These logos represent the professional and trade bodies with which we are regulated,
            accredited, or hold professional membership. This includes RICS regulation,
            Constructionline Gold accreditation, and membership of recognized industry
            organizations. They demonstrate our commitment to professional standards,
            compliance, and quality assurance.
          </p>
        </Reveal>

        <Stagger
          animation="fade-up"
          staggerMs={80}
          duration={400}
          className="grid grid-cols-3 lg:flex lg:justify-between gap-8 items-center justify-items-center px-4 lg:px-24 mb-10"
        >
          {partnerLogos.map((logo, index) => (
            <div key={index} className="relative transition-all duration-300">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                height={logo.height}
                width={logo.width}
                className="object-contain"
              />
            </div>
          ))}
        </Stagger>

        {/* Trust badges banner */}
        <Reveal animation="fade-up" duration={600} delay={150}>
          <div className="bg-[#262A6F] rounded-2xl lg:rounded-4xl px-6 lg:px-16 py-6 lg:py-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8">
              {trustBadges.map((badge, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3 text-white">
                    {badge.image ? (
                      badge.image
                    ) : (
                      <badge.icon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
                    )}
                    <span className={`${sourceSans.className} lg:text-lg font-medium whitespace-nowrap`}>
                      {badge.text}
                    </span>
                  </div>
                  {index < trustBadges.length - 1 && (
                    <div className="hidden md:block w-2 h-2 rounded-full bg-[#DBB38E]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default WhyChooseRosecrest;