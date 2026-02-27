"use client";

import React from "react";
import { X, Wrench, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sourceSans } from "@/lib/fonts";

// ─── Types ───────────────────────────────────────────────────────────────────

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TERMS_DOCUMENTS = [
  {
    id: "trades",
    icon: Wrench,
    title: "Terms of Engagement for Trades Services",
    description:
      "This document covers general maintenance, plumbing, decorating, cleaning, repairs, and related services. It sets out the contractual terms upon which Rosecrest Group Ltd agrees to provide trades services to the Client.",
    pdfUrl: "/assets/documents/terms-trades.pdf",
    viewUrl: "/terms/trades",
  },
  {
    id: "surveying",
    icon: FileText,
    title: "Terms of Engagement for Surveying Services",
    description:
      "This document covers surveyor services and written reports advising on the visible condition and state of repair of the property. Services are undertaken by a suitably qualified and accredited building surveyor exercising reasonable professional diligence.",
    pdfUrl: "/assets/documents/terms-surveying.pdf",
    viewUrl: "/terms/surveying",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* ── Dialog card ── */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* ── Header ── */}
        <div className="px-8 pt-7 pb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-3xl font-bold text-[#101828]">
                Terms of Engagement
              </h2>
              <p
                className={`text-sm text-[#4A5565] mt-1 ${sourceSans.className}`}
              >
                Select the document that applies to your service
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors shrink-0 mt-0.5"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-[#F3F4F6]" />

        {/* ── Document cards ── */}
        <div className="px-8 py-6 space-y-4">
          {TERMS_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="border border-[#EDEEF0] rounded-[14px] p-6"
            >
              <div className="flex gap-4 items-start">
                <div className="bg-[#262A6F] rounded-xl p-3 shrink-0 h-10 w-10 flex items-center justify-center">
                  <doc.icon className="w-5 h-5 text-white" />
                </div>
                {/* Icon + title */}
                <div className="mb-4 flex flex-col gap-4 px-2">
                  <h3 className="text-base md:text-xl font-bold text-[#101828] leading-snug">
                    {doc.title}
                  </h3>
                  {/* Description */}
                  <p
                    className={`text-sm md:text-base text-[#4A5565] mb-5 leading-relaxed ${sourceSans.className}`}
                  >
                    {doc.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button
                      asChild
                      size={"lg"}
                      className="bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full h-11 px-5 text-sm font-semibold"
                    >
                      <a href={doc.pdfUrl} download>
                        Download PDF
                      </a>
                    </Button>
                    <Button
                      asChild
                      size={"lg"}
                      variant="outline"
                      className="rounded-full h-11 px-5 text-sm font-semibold border-[#262A6F] text-[#262A6F] hover:bg-[#262A6F]/5"
                    >
                      <a
                        href={doc.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View in Browser
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div
          className={`px-8 py-4 border-t border-[#F3F4F6] text-center text-sm text-[#6A7282] ${sourceSans.className}`}
        >
          Need assistance? Contact us at{" "}
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
