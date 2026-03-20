"use client";

import React from "react";
import { X, Wrench, FileText, Download, ExternalLink } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TERMS_DOCUMENTS = [
  {
    id: "trades",
    icon: Wrench,
    title: "Terms of Engagement for Trades Services",
    description:
      "Covers general maintenance, plumbing, decorating, cleaning, repairs, and related services.",
    pdfUrl: "/assets/documents/terms-trades.pdf",
  },
  {
    id: "surveying",
    icon: FileText,
    title: "Terms of Engagement for Surveying Services",
    description:
      "Covers surveyor services and written reports on the visible condition and state of repair of the property.",
    pdfUrl: "/assets/documents/terms-survey.pdf",
  },
];

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Sheet — slides up on mobile, centered card on desktop */}
      <div className="relative w-full sm:max-w-2xl bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

        {/* Drag handle — mobile only */}
        <div className="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="px-6 pt-4 pb-4 sm:px-8 sm:pt-7 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
                Terms of Engagement
              </h2>
              <p className={`text-sm text-[#4A5565] mt-1 ${sourceSans.className}`}>
                Select the document that applies to your service
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="h-px bg-[#F3F4F6] shrink-0" />

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-5 sm:px-8 sm:py-6 space-y-4">
          {TERMS_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="border border-[#EDEEF0] rounded-2xl p-5"
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#262A6F] rounded-xl p-2.5 shrink-0 flex items-center justify-center">
                  <doc.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className={`${sourceSans.className} text-sm sm:text-base font-bold text-[#101828] leading-snug pt-0.5`}>
                  {doc.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`${sourceSans.className} text-sm text-[#4A5565] leading-relaxed mb-4`}>
                {doc.description}
              </p>

              {/* Actions — stack on mobile, row on desktop */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href={doc.pdfUrl}
                  download
                  className="flex items-center justify-center gap-2 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full h-11 px-5 text-sm font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <a
                  href={doc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#262A6F] text-[#262A6F] hover:bg-[#262A6F]/5 rounded-full h-11 px-5 text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View in Browser
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`px-6 sm:px-8 py-4 border-t border-[#F3F4F6] text-center text-xs sm:text-sm text-[#6A7282] shrink-0 ${sourceSans.className}`}>
          Need assistance?{" "}
          <a
            href="mailto:info@rosecrest.co.uk"
            className="text-[#262A6F] hover:underline font-medium"
          >
            info@rosecrest.co.uk
          </a>
        </div>

      </div>
    </div>
  );
};

export default TermsModal;