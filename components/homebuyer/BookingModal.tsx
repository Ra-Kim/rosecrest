"use client";

import React from "react";
import {
  X,
  MapPin,
  Home,
  Bed,
  Clock,
  Zap,
  CheckCircle,
  Circle,
} from "lucide-react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sourceSans } from "@/lib/fonts";

// ─── Types ───────────────────────────────────────────────────────────────────

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  surveyLevel?: 1 | 2 | 3;
  surveyTitle?: string;
  basePrice?: number;
}

const SURVEY_DEFAULTS: Record<1 | 2 | 3, { title: string; basePrice: number }> =
  {
    1: { title: "Level 1 — Home Conditions Survey", basePrice: 299 },
    2: { title: "Level 2 — Homebuyer Survey", basePrice: 450 },
    3: { title: "Level 3 — Building Survey", basePrice: 699 },
  };

// ─── Schema ──────────────────────────────────────────────────────────────────

const formSchema = z.object({
  postcode: z.string().min(1, "Postcode is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  purchaseStage: z.string().min(1, "Please select purchase stage"),
  surveyType: z.string().min(1, "Please select survey type"),
  timeline: z.string().min(1, "Please select a timeline"),
  expressService: z.boolean(),
});

// ─── Component ───────────────────────────────────────────────────────────────

const BookingModal = ({
  isOpen,
  onClose,
  surveyLevel = 2,
  surveyTitle,
  basePrice,
}: BookingModalProps) => {
  const defaults = SURVEY_DEFAULTS[surveyLevel];
  const resolvedTitle = surveyTitle ?? defaults.title;
  const resolvedBasePrice = basePrice ?? defaults.basePrice;
  const expressServiceCost = 150;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postcode: "",
      propertyType: "",
      bedrooms: "",
      purchaseStage: "",
      surveyType: `level-${surveyLevel}`,
      timeline: "",
      expressService: false,
    },
  });

  const expressServiceChecked = useWatch({
    control,
    name: "expressService",
    defaultValue: false,
  });

  const totalPrice =
    resolvedBasePrice + (expressServiceChecked ? expressServiceCost : 0);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    onClose();
  };

  if (!isOpen) return null;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* ── Dialog card ── */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-4xl shadow-2xl overflow-hidden">
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 shrink-0">
          <h2 className="text-xl font-bold text-[#101828]">
            Check Availability & Get a Fixed Price
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="overflow-y-auto px-8 pb-2 flex-1">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* ── LEFT: Form ── */}
            <div className="space-y-5">
              {/* Info banner */}
              <div className="bg-[#EFF6FF] rounded-xl p-3.5 flex items-start gap-3">
                <div className="h-5 w-5 border-2 border-blue-600 rounded-full grid place-items-center shrink-0 mt-0.5">
                  <Circle className="w-2 h-2 text-blue-600 fill-blue-600" />
                </div>
                <p className={`text-sm text-[#364153] ${sourceSans.className}`}>
                  {`Provide a few details and we'll instantly show your survey price and available
                  inspection dates. Takes less than 60 seconds.`}
                </p>
              </div>

              <form
                id="booking-form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Postcode */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Property address / postcode
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="SW1A 1AA"
                      className="pl-9 h-11 rounded-xl border-[#E5E7EB] text-sm"
                      {...register("postcode")}
                    />
                  </div>
                  {errors.postcode && (
                    <p className="text-xs text-red-500">
                      {errors.postcode.message}
                    </p>
                  )}
                </div>

                {/* Property type + Bedrooms */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium text-gray-700">
                      Property type
                    </Label>
                    <div className="relative">
                      <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                      <Controller
                        name="propertyType"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="pl-9 h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="flat">Flat</SelectItem>
                              <SelectItem value="bungalow">Bungalow</SelectItem>
                              <SelectItem value="maisonette">
                                Maisonette
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    {errors.propertyType && (
                      <p className="text-xs text-red-500">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium text-gray-700">
                      Bedrooms
                    </Label>
                    <div className="relative">
                      <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                      <Controller
                        name="bedrooms"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="pl-9 h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {["1", "2", "3", "4", "5+"].map((n) => (
                                <SelectItem key={n} value={n}>
                                  {n}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    {errors.bedrooms && (
                      <p className="text-xs text-red-500">
                        {errors.bedrooms.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Purchase stage */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Purchase stage
                  </Label>
                  <Controller
                    name="purchaseStage"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="viewing">Just viewing</SelectItem>
                          <SelectItem value="offer-made">Offer made</SelectItem>
                          <SelectItem value="offer-accepted">
                            Offer accepted
                          </SelectItem>
                          <SelectItem value="exchange">
                            Exchanged contracts
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.purchaseStage && (
                    <p className="text-xs text-red-500">
                      {errors.purchaseStage.message}
                    </p>
                  )}
                </div>

                {/* Survey type */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Survey type
                  </Label>
                  <Controller
                    name="surveyType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="level-1">
                            Level 1 — Home Conditions Survey
                          </SelectItem>
                          <SelectItem value="level-2">
                            Level 2 — Homebuyer Survey
                          </SelectItem>
                          <SelectItem value="level-3">
                            Level 3 — Building Survey
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.surveyType && (
                    <p className="text-xs text-red-500">
                      {errors.surveyType.message}
                    </p>
                  )}
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Timeline
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                    <Controller
                      name="timeline"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="pl-9 h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">
                              Urgent (1–2 days)
                            </SelectItem>
                            <SelectItem value="week">Within a week</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  {errors.timeline && (
                    <p className="text-xs text-red-500">
                      {errors.timeline.message}
                    </p>
                  )}
                </div>

                {/* Express service */}
                <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200">
                  <Controller
                    name="expressService"
                    control={control}
                    render={({ field }) => (
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="expressService-modal"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-0.5 h-4 w-4 rounded-[3px] border-[#99A1AF] data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-500"
                        />
                        <Label
                          htmlFor="expressService-modal"
                          className="flex items-start gap-2 cursor-pointer"
                        >
                          <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span
                            className={`text-sm text-gray-800 ${sourceSans.className}`}
                          >
                            Express service — Priority booking with faster
                            turnaround{" "}
                            <span className="text-amber-600 font-medium">
                              (+£{expressServiceCost})
                            </span>
                          </span>
                        </Label>
                      </div>
                    )}
                  />
                </div>
              </form>
            </div>

            {/* ── RIGHT: Quote preview ── */}
            <div className="border border-[#E5E7EB] rounded-2xl p-5 h-fit">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00C950]" />
                <span
                  className={`text-xs font-medium text-[#6A7282] ${sourceSans.className}`}
                >
                  Quote preview
                </span>
              </div>

              <h3 className="text-base font-bold text-[#101828] mb-5">
                {resolvedTitle}
              </h3>

              <div className={`space-y-3 ${sourceSans.className}`}>
                <div className="flex items-center justify-between text-sm text-[#4A5565]">
                  <span>Base survey price</span>
                  <span className="font-medium">£{resolvedBasePrice}</span>
                </div>
                {expressServiceChecked && (
                  <div className="flex items-center justify-between text-sm text-[#4A5565]">
                    <span>Express service</span>
                    <span className="font-medium">£{expressServiceCost}</span>
                  </div>
                )}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#101828]">
                      Total (incl. VAT)
                    </span>
                    <span className="text-xl font-bold text-[#101828]">
                      £{totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-[#EFF6FF] rounded-xl p-4 mt-5">
                <h4 className="text-sm font-bold text-[#101828] mb-3">
                  What happens next
                </h4>
                <ul className={`space-y-2.5 ${sourceSans.className}`}>
                  {[
                    "Confirm your booking",
                    "We'll contact you to arrange the inspection",
                    "Receive your detailed report",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-[#262A6F] text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-xs font-semibold">
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#6A7282]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>No payment taken until booking is confirmed</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between px-8 py-5 border-t border-[#F3F4F6] shrink-0 bg-white">
          <button
            type="button"
            onClick={onClose}
            className={`text-sm text-[#4A5565] hover:text-[#101828] transition-colors ${sourceSans.className}`}
          >
            Cancel
          </button>
          <Button
            type="submit"
            form="booking-form"
            className="h-11 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full px-6 text-sm font-semibold gap-2"
          >
            Book Survey
            <CheckCircle className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
