export type OpenBookingModal = (options?: {
  surveyLevel?: 1 | 2 | 3;
  surveyTitle?: string;
  basePrice?: number;
}) => void;