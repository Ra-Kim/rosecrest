"use client";

import React, { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Home,
  Bed,
  Clock,
  Zap,
  CheckCircle,
  Circle,
  PoundSterling,
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";

interface BookingFormProps {
  surveyLevel: 1 | 2 | 3;
  surveyTitle: string;
  basePrice: number;
}

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  jobAddress: z.string().min(1, "Address is required"),
  jobTown: z.string().min(1, "Town is required"),
  jobPostcode: z.string().min(1, "Postcode is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  propertyValue: z.string().min(1, "Please enter property value"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  purchaseStage: z.string().min(1, "Please select purchase stage"),
  timeline: z.string().min(1, "Please select a timeline"),
  helpWith: z.string().optional(),
  surveyType: z.string().min(1, "Please select survey type"),
  expressService: z.boolean(),
});

const BookingForm = ({
  surveyLevel,
  surveyTitle,
  basePrice,
}: BookingFormProps) => {
  const expressServiceCost = 150;
  const surveyType = `level-${surveyLevel}`;
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobAddress: "",
      jobTown: "",
      jobPostcode: "",
      propertyType: "",
      propertyValue: "",
      bedrooms: "",
      surveyType,
      purchaseStage: "",
      timeline: "",
      helpWith: "",
      expressService: false,
    },
  });

  const expressServiceChecked = useWatch({
    control,
    name: "expressService",
    defaultValue: false,
  });
  const totalPrice =
    basePrice + (expressServiceChecked ? expressServiceCost : 0);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setIsSubmitSuccessful(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <section className="py-16 px-4 bg-[#F9FAFB] border-y border-y-[#F3F4F6]">
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#101828]">
            Booking Request Received
          </h3>
          <p
            className={`${sourceSans.className} text-[#4A5565] text-sm max-w-xs`}
          >
            Thank you. A member of our team will be in touch to confirm your
            inspection date.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-16 px-4 bg-[#F9FAFB] border-y border-y-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#101828] text-center mb-12">
          Check Availability & Get a Fixed Price
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT: Form */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-[#E5E7EB] space-y-5">
            <div className="bg-[#EFF6FF] rounded-xl p-3.5 flex items-start gap-3">
              <div className="h-5 w-5 border-2 border-blue-600 rounded-full grid place-items-center shrink-0 mt-0.5">
                <Circle className="w-2 h-2 text-blue-600 fill-blue-600" />
              </div>
              <p className={`text-sm text-[#364153] ${sourceSans.className}`}>
                Provide a few details and we&apos;ll instantly show your survey
                price. Takes less than 60 seconds.
              </p>
            </div>

            <form
              id="booking-form-inline"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Contact */}
              <p className="text-xs font-semibold text-[#6A7282] uppercase tracking-wide">
                Your Details
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    type="email"
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Property Location */}
              <p className="text-xs font-semibold text-[#6A7282] uppercase tracking-wide pt-2">
                Property Location
              </p>

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  Street Address
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="12 Example Street"
                    className="pl-9 h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("jobAddress")}
                  />
                </div>
                {errors.jobAddress && (
                  <p className="text-xs text-red-500">
                    {errors.jobAddress.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Town / City
                  </Label>
                  <Input
                    placeholder="London"
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("jobTown")}
                  />
                  {errors.jobTown && (
                    <p className="text-xs text-red-500">
                      {errors.jobTown.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Postcode
                  </Label>
                  <Input
                    placeholder="SW1A 1AA"
                    className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("jobPostcode")}
                  />
                  {errors.jobPostcode && (
                    <p className="text-xs text-red-500">
                      {errors.jobPostcode.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Property Details */}
              <p className="text-xs font-semibold text-[#6A7282] uppercase tracking-wide pt-2">
                Property Details
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-gray-700">
                    Property Type
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
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Flat">Flat</SelectItem>
                            <SelectItem value="Bungalow">Bungalow</SelectItem>
                            <SelectItem value="Maisonette">
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
                            <SelectItem value="1 Bedroom">1</SelectItem>
                            <SelectItem value="2 Bedroom">2</SelectItem>
                            <SelectItem value="3 Bedroom">3</SelectItem>
                            <SelectItem value="4 Bedroom">4</SelectItem>
                            <SelectItem value="5+ Bedroom">5+</SelectItem>
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

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  Approximate Property Value
                </Label>
                <div className="relative">
                  <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="e.g. 350000"
                    type="number"
                    min="0"
                    className="pl-9 h-11 rounded-xl border-[#E5E7EB] text-sm"
                    {...register("propertyValue")}
                  />
                </div>
                {errors.propertyValue && (
                  <p className="text-xs text-red-500">
                    {errors.propertyValue.message}
                  </p>
                )}
              </div>

              {/* Survey Details */}
              <p className="text-xs font-semibold text-[#6A7282] uppercase tracking-wide pt-2">
                Survey Details
              </p>

              {/* Survey type — pre-populated from page, user can still change */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  Survey type
                </Label>
                <Controller
                  name="surveyType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                        <SelectValue />
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

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  Purchase stage
                </Label>
                <Controller
                  name="purchaseStage"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="h-11 rounded-xl border-[#E5E7EB] w-full text-sm">
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Just viewing">
                          Just viewing
                        </SelectItem>
                        <SelectItem value="Offer made">Offer made</SelectItem>
                        <SelectItem value="Offer accepted">
                          Offer accepted
                        </SelectItem>
                        <SelectItem value="Exchanged contracts">
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
                          <SelectItem value="Urgent (1-2 days)">
                            Urgent (1–2 days)
                          </SelectItem>
                          <SelectItem value="Within 1 week">
                            Within a week
                          </SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
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

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-gray-700">
                  Survey requirements{" "}
                  <span className="text-[#9CA3AF]">(optional)</span>
                </Label>
                <Input
                  placeholder="e.g. Structural survey to evaluate property condition"
                  className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                  {...register("helpWith")}
                />
              </div>

              {/* Express service */}
              <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200">
                <Controller
                  name="expressService"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="expressService-inline"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-0.5 h-4 w-4 rounded-[3px] border-[#99A1AF] data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-500"
                      />
                      <Label
                        htmlFor="expressService-inline"
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

          {/* RIGHT: Quote preview */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-[#E5E7EB]">
            <div className="p-6 lg:p-8 rounded-3xl border border-[#E5E7EB]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#00C950]" />
                <span
                  className={`${sourceSans.className} text-sm font-medium text-[#6A7282]`}
                >
                  Quote preview
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#101828] mb-6">
                {surveyTitle}
              </h3>
              <div className={`space-y-4 mb-6 ${sourceSans.className}`}>
                <div className="flex items-center justify-between text-[#4A5565] text-sm">
                  <span>Base survey price</span>
                  <span className="font-medium">£{basePrice}</span>
                </div>
                {expressServiceChecked && (
                  <div className="flex items-center justify-between text-[#4A5565] text-sm">
                    <span>Express service</span>
                    <span className="font-medium">£{expressServiceCost}</span>
                  </div>
                )}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#101828]">
                      Total (incl. VAT)
                    </span>
                    <span className="text-2xl font-bold text-[#101828]">
                      £{totalPrice}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#EFF6FF] rounded-[10px] p-4">
                <h4 className="font-bold text-[#101828] mb-4 text-sm">
                  What happens next
                </h4>
                <ul className={`space-y-3 text-sm ${sourceSans.className}`}>
                  {[
                    "Confirm your booking",
                    "We'll contact you to arrange the inspection",
                    "Receive your detailed report",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-[#262A6F] text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-sm font-semibold">
                        {i + 1}
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#6A7282]">
              <CheckCircle className="w-4 h-4" />
              <span>No payment taken until booking is confirmed</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        {submitError && (
          <div className="max-w-7xl mx-auto mt-4 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600 text-center">
            Something went wrong. Please try again or call us directly.
          </div>
        )}
        <div className="w-fit mx-auto mt-8">
          <Button
            type="submit"
            form="booking-form-inline"
            disabled={isSubmitting}
            className="h-14 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full text-base font-semibold disabled:opacity-60"
            size="lg"
          >
            {isSubmitting ? "Submitting..." : "Book Survey"}
            <CheckCircle className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
