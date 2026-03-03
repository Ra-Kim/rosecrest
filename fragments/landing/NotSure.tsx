import React from "react";
import ContactForm from "@/components/common/ContactForm";
import { sourceSans } from "@/lib/fonts";

const NotSureSection = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-[#FBF7F4]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-4 leading-tight">
            Not sure which option applies?
          </h2>
          <p className={`${sourceSans.className} text-base text-[#4A5565] leading-relaxed max-w-3xl mx-auto`}>
            Property matters are not always straightforward. If you&apos;re unsure
            which service is appropriate, or your requirements involve multiple
            elements, speak to us directly and we&apos;ll advise on the most suitable
            route.
          </p>
        </div>

        {/* Form card */}
        <ContactForm
          title="Request a Call Back"
          subtitle="Tell us a little about your situation and we'll direct your enquiry to the appropriate team member."
          submitLabel="Request Call Back"
        />
      </div>
    </section>
  );
};

export default NotSureSection;