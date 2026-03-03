import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
import JourneyHero from "@/fragments/journeys/JourneyHero";
import { sourceSans } from "@/lib/fonts";

const Page = () => {
  return (
    <div>
      <JourneyHero>
        <p className="text-white text-4xl lg:text-5xl tracking-tight leading-16">
          Send Us A Message
        </p>
        <p
          className={`${sourceSans.className} mt-4 mx-auto text-white text-base lg:text-xl leading-relaxed max-w-3xl`}
        >
          Not sure of which option applies? Or you need to request a discussion?
          Speak to us directly and we&apos;ll advise on the most suitable route
        </p>
      </JourneyHero>

      {/* Contact form */}
      <section className="py-8 lg:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-[#FBF7F4] px-8 lg:px-45 py-18 rounded-4xl">
          <ContactForm
            title="Fill the form below correctly"
            subtitle="Tell us a little about your situation and we'll direct your enquiry to the appropriate team member."
            submitLabel="Submit"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;