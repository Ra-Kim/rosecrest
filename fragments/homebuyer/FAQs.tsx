"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const FAQ = () => {
  const questions = [
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

  const [activeValue, setActiveValue] = useState("");

  return (
    <div className="py-16 lg:py-20 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101828] mb-4">
            Frequently asked questions
          </h2>
          <p
            className={`text-[#4A5565] text-base lg:text-lg max-w-4xl mx-auto ${sourceSans.className}`}
          >
            Choose a plan that fits your business needs and budget. No hidden
            fees, no surprises—just straightforward pricing for powerful
            financial solutions.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-7xl mx-auto">
          <Accordion
            type="single"
            collapsible
            value={activeValue}
            onValueChange={setActiveValue}
            className="space-y-4"
          >
            {questions.map((question, index) => {
              const itemValue = `item-${index + 1}`;
              const isActive = activeValue === itemValue;

              return (
                <AccordionItem
                  key={index}
                  value={itemValue}
                  className={`bg-white rounded-2xl px-6 lg:px-8 transition-all ${
                    isActive ? "shadow-sm" : ""
                  } ${sourceSans.className}`}
                >
                  <AccordionTrigger
                    className="hover:no-underline py-6 lg:py-8"
                    onClick={() => {
                      setActiveValue(isActive ? "" : itemValue);
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-left text-base lg:text-lg font-semibold text-[#101828] pr-4">
                        {question.question}
                      </span>
                      <div className="h-10 w-10 rounded-full bg-[#FBF7F4] grid place-items-center shrink-0">
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm lg:text-base pb-6 lg:pb-8 pt-2">
                    {question.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
