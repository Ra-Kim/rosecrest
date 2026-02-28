import React from "react";
import FAQ, { FAQItem } from "@/components/common/FAQ";

const questions: FAQItem[] = [
  {
    question: "What is the Party Wall etc. Act 1996?",
    answer:
      "The Party Wall etc. Act 1996 is a piece of legislation that provides a framework for preventing and resolving disputes in relation to party walls, boundary walls and excavations near neighbouring buildings. It requires building owners to notify adjoining owners before carrying out certain types of work.",
  },
  {
    question: "Do you act for both sides?",
    answer:
      "As an Agreed Surveyor we can act for both the building owner and the adjoining owner, provided both parties consent. Where one party has concerns about impartiality, we will act solely for the appointing party and a separate surveyor will be appointed by the other side.",
  },
  {
    question: "How long does the Party Wall process take?",
    answer:
      "The timeline varies depending on the complexity of the works and whether the adjoining owner consents or dissents. In straightforward cases the process can be completed in a few weeks. Where a Party Wall Award is required, it typically takes 6–8 weeks, though this can vary.",
  },
];

const PartyWallFAQ = () => {
  return (
    <FAQ
      questions={questions}
      subtitle="Here are answers to the most common questions about our property surveys, valuations, and reports."
    />
  );
};

export default PartyWallFAQ;