import React from "react";
import Image from "next/image";
import { sourceSans } from "@/lib/fonts";

const cardDetails = [
  {
    title: "Commercial EPC",
    description:"Energy Performance Certificates (EPCs) are vital for non-domestic properties. At Rosecrest Group Ltd, we provide comprehensive EPC services tailored for commercial properties. Our experts will assess your property’s energy efficiency, issue the necessary certificate and offer valuable insights on improving your energy rating, ensuring compliance while promoting sustainability.",
    image: "/assets/images/epc/commercial-epc.png",
    alt: "Commercial EPC illustration",
  },
  {
    title:"Domestic Retrofit",
    description:"Recognising the importance of upgrading homes for enhanced energy efficiency, our domestic retrofit services are designed to improve your living space and reduce your carbon footprint. From insulation to the installation of modern energy-efficient systems, our professional team will transform your home into a more environmentally friendly and cost-effective space.",
    image: "/assets/images/epc/domestic-retrofit.png",
    alt: "Domestic retrofit illustration",
  }
];

const CommercialEPC = () => {
  return (
    <div>
      <section className="py-16 lg:py-20 px-4 bg-[#FBF7F4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {cardDetails.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[24px] overflow-hidden flex flex-col p-5"
            >
              {/* Image */}
              <div className="relative h-62.5 w-full overflow-hidden mb-5">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-2xl font-bold text-[#101828] mb-2">
                {card.title}
              </h3>
              <p
                className={`${sourceSans.className} text-sm md:text-base text-[#4A5565] leading-7`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommercialEPC;
