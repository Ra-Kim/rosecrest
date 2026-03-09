import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "Do you carry out damp and mould testing?",
    answer:
      "Yes. Our surveyors carry out on-site inspections to identify damp, mould and condensation issues. Where appropriate, we use moisture meters and thermal imaging to assess the extent of the problem and identify contributing factors.",
  },
  {
    question: "What's included in a Damp & Mould Condition Report?",
    answer:
      "Our report includes an on-site inspection of affected areas, identification of damp and mould conditions, analysis of contributing factors such as ventilation or structural issues, detailed photographic evidence, and clear recommendations for remedial action.",
  },
  {
    question: "Can you carry out remedial works as well as reports?",
    answer:
      "Yes. In addition to independent inspection and reporting, we offer mould treatment and remediation services. Remedial works are priced separately based on the size of the affected area, and a treatment quote can be provided following the survey.",
  },
];

const DampMouldFAQ = () => {
  return (
    <FAQ
      questions={questions}
      subtitle="Here are answers to the most common questions about our damp, mould and condensation inspection service."
    />
  );
};

export default DampMouldFAQ;