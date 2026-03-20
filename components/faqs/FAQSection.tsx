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
import { Reveal } from "@/components/common/Reveal";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  questions: FAQItem[];
}

const FAQSection = ({ title, questions }: FAQSectionProps) => {
  const [activeValue, setActiveValue] = useState("");

  return (
    <Reveal animation="fade-up" duration={500}>
      <div className="grid md:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-16 bg-[#FBF7F4] py-12 px-10 rounded-2xl">

        {/* Category title */}
        <div className="pt-1">
          <h2 className="text-2xl md:text-4xl font-bold text-[#101828] leading-snug">
            {title}
          </h2>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-3"
        >
          {questions.map((question, index) => {
            const itemValue = `item-${index}`;
            const isActive = activeValue === itemValue;

            return (
              <AccordionItem
                key={index}
                value={itemValue}
                className={`bg-white rounded-xl px-5 lg:px-6 border border-gray-100 transition-all ${
                  isActive ? "shadow-sm" : ""
                } ${sourceSans.className}`}
              >
                <AccordionTrigger
                  className="hover:no-underline py-5"
                  onClick={() => setActiveValue(isActive ? "" : itemValue)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-left text-sm lg:text-base font-semibold text-[#101828] pr-4">
                      {question.question}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-[#FBF7F4] grid place-items-center shrink-0">
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className={`${sourceSans.className} text-gray-600 text-sm lg:text-base pb-5 pt-1`}>
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

      </div>
    </Reveal>
  );
};

export default FAQSection;