import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "What is a CPR-35 Expert Witness Report?",
    answer:
      "A CPR-35 Expert Witness Report is a formal document prepared in accordance with Civil Procedure Rules Part 35, which governs expert evidence in civil proceedings. It provides an independent, impartial assessment of a property matter to assist the court in reaching a fair decision.",
  },
  {
    question: "Who do you prepare reports for?",
    answer:
      "We prepare expert witness reports for solicitors, legal teams, claimants and defendants involved in civil litigation. Our reports cover a wide range of property disputes including disrepair claims, boundary disputes, defect analysis and valuation disagreements.",
  },
  {
    question: "How long does it take to produce an expert report?",
    answer:
      "Timescales depend on the complexity of the case and the volume of evidence to review. In most cases we aim to deliver a draft report within 10–15 working days of instruction and site inspection. Urgent instructions can be accommodated — please contact us to discuss your deadline.",
  },
];

const CPRFAQ = () => {
  return (
    <FAQ
      questions={questions}
      subtitle="Here are answers to the most common questions about our property surveys, valuations, and reports."
    />
  );
};

export default CPRFAQ;