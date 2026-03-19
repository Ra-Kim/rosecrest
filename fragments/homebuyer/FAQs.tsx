import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "What is the difference between a Level 2 and a Level 3 survey?",
    answer:
      "A Level 2 (HomeBuyer Report) is suitable for conventional properties in good condition. A Level 3 (Building Survey) provides an in-depth analysis suitable for older, extended, or non-standard properties.",
  },
  {
    question: "How long does a survey take?",
    answer:
      "A Level 2 survey typically takes 2–3 hours on site; a Level 3 can take half a day or more depending on the size and complexity of the property.",
  },
  {
    question: "Will I receive photographs in my report?",
    answer:
      "Yes. All reports include clear photographs of defects and RICS condition ratings (1–3).",
  },
  {
    question: "Can you survey vacant or tenanted properties?",
    answer:
      "Yes. We can inspect occupied, vacant, or tenanted homes as long as access is arranged in advance.",
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