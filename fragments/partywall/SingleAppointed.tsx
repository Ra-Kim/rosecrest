import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const SingleAppointedSurveyor = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl max-w-4xl mx-auto font-bold text-[#101828] text-center mb-10 leading-tight">
          The Single-Appointed Party Wall Surveyor
        </h2>

        {/* Image + dark card row */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 overflow-hidden">
          {/* Image */}
          <div className="relative min-h-72 md:min-h-full">
            <Image
              src="/assets/images/party-wall/single-appointed.png"
              alt="Terraced houses party wall"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Dark text card */}
          <div className="bg-linear-to-b from-[#262A6F] to-[#1A1D4F] p-8 flex flex-col gap-5 rounded-2xl">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 text-[#262A6F]" />
            </div>

            {/* Body paragraphs */}
            <div className={`${sourceSans.className} text-sm md:text-lg text-white/80 leading-relaxed space-y-3`}>
              <p>
                This option is typically chosen when either the building owner or the
                adjoining owner wishes to produce an award without sharing a surveyor,
                often due to concerns about impartiality. In such cases, our surveyors will
                represent either the building owner or the adjoining owner.
              </p>
              <p>
                For example, if a building owner appoints us, we will issue a notice to the
                adjoining owner. If the adjoining owner responds by dissenting and chooses
                to appoint their own surveyor, we will wait for their surveyor to send us their
                appointment letter.
              </p>
              <p>
                Once we receive this letter, both appointed surveyors will select a third
                surveyor to form a tribunal. The third surveyor is only engaged if there is a
                disagreement or dispute between the two primary surveyors that requires
                resolution.
              </p>
              <p>
                The role of the surveyors involves collaborating to achieve the award, which
                includes consultations, site visits, preparing a{" "}
                <span className="underline">schedule of condition</span> and
                finally drafting the award (commonly misnamed as the party wall agreement).
              </p>
            </div>
          </div>
        </div>

        {/* Third Surveyor section */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-5xl font-bold text-[#101828] mb-4">
            The Role of the Third Surveyor
          </h3>
          <p className={`${sourceSans.className} text-base lg:text-2xl text-[#151515] max-w-5xl leading-relaxed mx-auto`}>
            <span className="font-bold text-[#101828]">In Case of Disagreements:</span>{" "}
            Should a stalemate occur between the two primary Party Wall Surveyors,
            the Third Surveyor will intervene. Acting as a neutral mediator, this surveyor facilitates the <br/>
            resolution of disputes, ensuring a seamless process for all parties involved.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SingleAppointedSurveyor;