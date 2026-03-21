import { create } from "zustand";

interface EnquiryState {
  isOpen: boolean;
  context?: string; // e.g. "Damp & Mould Survey", "EPC", "Party Wall"
  postcode?: string; // pre-fill from coverage checker
  openEnquiry: (context?: string, postcode?: string) => void;
  closeEnquiry: () => void;
}

export const useEnquiryStore = create<EnquiryState>((set) => ({
  isOpen: false,
  context: undefined,
  postcode: undefined,
  openEnquiry: (context, postcode) =>
    set({ isOpen: true, context, postcode }),
  closeEnquiry: () =>
    set({ isOpen: false, context: undefined, postcode: undefined }),
}));