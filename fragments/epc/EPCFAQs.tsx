import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "How long is an EPC valid for?",
    answer:
      "An Energy Performance Certificate is valid for 10 years from the date it was issued. After this period, a new assessment must be carried out if you are selling or renting the property.",
  },
  {
    question: "Do landlords need an EPC before letting?",
    answer:
      "Yes. Landlords are legally required to have a valid EPC with a rating of E or above before letting a property to new tenants. Failure to comply can result in financial penalties.",
  },
  {
    question: "How quickly can I get an EPC?",
    answer:
      "In most cases we can arrange an assessment within 1–2 working days, with the certificate issued shortly after the visit. If you need an urgent EPC, please contact us and we will do our best to accommodate your timeline.",
  },
];

const EPCFAQ = () => {
  return (
    <FAQ
      questions={questions}
      subtitle="Here are answers to the most common questions about our property surveys, valuations, and reports."
    />
  );
};

export default EPCFAQ;