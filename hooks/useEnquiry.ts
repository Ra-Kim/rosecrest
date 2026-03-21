// hooks/useEnquiry.ts
// Thin wrapper — import this anywhere you need to open the enquiry modal

import { useEnquiryStore } from "@/store/enquiry-store";

export const useEnquiry = () => {
  const openEnquiry = useEnquiryStore((s) => s.openEnquiry);
  return { openEnquiry };
};

// ─── Usage examples ───────────────────────────────────────────────────────────

// 1. Simple button — no context
// const { openEnquiry } = useEnquiry();
// <Button onClick={() => openEnquiry()}>Request an Inspection</Button>

// 2. With service context — pre-labels the modal heading
// <Button onClick={() => openEnquiry("Damp & Mould Survey")}>Book Survey</Button>

// 3. From coverage checker — pre-fills postcode
// <Button onClick={() => openEnquiry("Coverage area: London", "SW9 8LB")}>Request Inspection</Button>

// 4. Replace ALL router.push("/contact") calls with:
// onClick={() => openEnquiry()}