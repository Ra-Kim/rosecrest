import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "What is a RICS Level 1 Survey?",
    answer:
      "A RICS Level 1 Survey (formerly known as a Condition Report) is a basic property survey that provides an overview of the property's condition. It's ideal for newer homes and conventional properties in good condition, typically built within the last 5-10 years.",
  },
  {
    question: "How does the traffic light system work?",
    answer:
      "The traffic light system uses three color-coded ratings: Green indicates no issues or defects, Amber shows defects that need attention but are not serious, and Red highlights serious defects requiring urgent attention. This makes it easy to understand the property's condition at a glance.",
  },
  {
    question: "Is a Level 1 Survey suitable for my property?",
    answer:
      "A Level 1 Survey is best suited for newer properties (built within the last 5-10 years), conventional construction, properties in good condition, and straightforward purchases. It's not recommended for older properties, those requiring renovation, or non-standard construction.",
  },
  {
    question: "How long does it take to receive my report?",
    answer:
      "Typically, you'll receive your comprehensive survey report within 3-5 working days after the property inspection. In urgent cases, we can often provide an expedited service - please contact us to discuss your timeline requirements.",
  },
];

const HomebuyerFAQ = () => {
  return (
    <FAQ
      questions={questions}
      subtitle="Here are answers to the most common questions about our property surveys, valuations, and reports."
    />
  );
};

export default HomebuyerFAQ;