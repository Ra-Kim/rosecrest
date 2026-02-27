import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const services = [
  {
    title: "Personalised Consultation",
    description:
      "We start with a detailed consultation to understand your vision, lifestyle, and preferences. Our decorators take the time to listen and provide expert advice, helping you articulate your ideas into a cohesive design plan.",
    image: "/assets/images/painting/consultation.png",
    alt: "Consultation session with decorator",
  },
  {
    title: "Colour Palette Selection",
    description:
      "Choosing the right colours can significantly impact the atmosphere of your home. Our team offers insights into colour psychology and the latest trends, helping you select a palette that enhances your space while reflecting your style. Whether you desire soothing neutrals, vibrant accents, or bold contrasts, we guide you in making informed choices that work harmoniously together.",
    image: "/assets/images/painting/palette.png",
    alt: "Colour palette swatches",
  },
  {
    title: "Material and Finish Recommendations",
    description:
      "In addition to colours, we provide advice on materials and finishes that suit your style and practical needs. From wallpaper and fabrics to paint finishes and textures, we curate options that elevate your décor while ensuring durability and ease of maintenance.\n\nWe also work with our carpentry specialists to complement your design with custom woodwork and built-in features.",
    image: "/assets/images/painting/materials.png",
    alt: "Material and finish samples",
  },
  {
    title: "Space Planning and Design",
    description:
      "Our decorators consider the functionality and flow of your space to create an inviting environment. We consider furniture placement, lighting, and architectural features to design a layout that maximises both aesthetics and comfort. Need help implementing changes? Our handyman services can assist with installations and adjustments.",
    image: "/assets/images/painting/space-planning.png",
    alt: "Space planning and design blueprints",
  },
  {
    title: "Professional Execution",
    description:
      "Our commitment to excellence extends to the execution of your project. Our skilled team handles every detail with precision, ensuring that each application — be it paint, wallpaper, or decorative elements — is flawlessly completed. We take pride in our meticulous workmanship and attention to detail, delivering results that exceed your expectations.",
    image: "/assets/images/painting/execution.png",
    alt: "Professional painter at work",
  },
  {
    title: "Final Touches and Styling",
    description:
      "Once the decorating is complete, we help you with the finishing touches that bring your vision to life. From selecting the right accessories to arranging furniture and décor items, we ensure that your space feels complete and personal.\n\nBring your vision to life with expert decorating and styling. Contact us today to start your transformation.",
    image: "/assets/images/painting/final-touches.png",
    alt: "Final styling and decorating touches",
  },
];

const PaintingServices = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] text-center mb-12 lg:mb-16 leading-snug">
          Our Painting and Decorating Services <br />
          Include:
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#E3E4E5] rounded-4xl overflow-hidden flex flex-col p-8"
            >
              {/* Image */}
              <div className="relative h-62.5  w-full  overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text content */}
              <div className="pt-6">
                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold text-[#101828] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <div
                  className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-relaxed space-y-3`}
                >
                  {service.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingServices;
