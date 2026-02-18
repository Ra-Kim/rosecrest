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
} from "lucide-react";
import { sourceSans } from "@/lib/fonts";

interface BookingFormProps {
  surveyLevel: 1 | 2 | 3;
  surveyTitle: string;
  basePrice: number;
}

const formSchema = z.object({
  postcode: z.string().min(1, "Postcode is required"),
  propertyType: z.string().min(1, "Please select a property type"),
  bedrooms: z.string().min(1, "Please select number of bedrooms"),
  purchaseStage: z.string().min(1, "Please select purchase stage"),
  surveyType: z.string().min(1, "Please select survey type"),
  timeline: z.string().min(1, "Please select a timeline"),
  expressService: z.boolean(),
});

const BookingForm = ({
  surveyLevel,
  surveyTitle,
  basePrice,
}: BookingFormProps) => {
  const [showQuote, setShowQuote] = useState(false);

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

  const expressServiceCost = 150;
  const expressServiceChecked = useWatch({
    control,
    name: "expressService",
    defaultValue: false,
  });

  const totalPrice =
    basePrice + (expressServiceChecked ? expressServiceCost : 0);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values, showQuote);
    setShowQuote(true);
    // Handle form submission
  };

  return (
    <section className="py-8 lg:py-16 px-4 bg-[#F9FAFB] border-y border-y-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#101828] text-center mb-12">
          Check Availability & Get a Fixed Price
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-[#E5E7EB]">
            {/* Info Banner */}
            <div className="bg-[#EFF6FF] rounded-2xl p-4 mb-6 flex items-start gap-3">
              <div className="h-5 w-5 border-2 border-blue-600 rounded-full grid place-items-center shrink-0 mt-1">
                <Circle className="w-2 h-2 text-blue-600 fill-blue-600" />
              </div>
              <p className={`text-sm text-[#364153] ${sourceSans.className}`}>
                {`Provide a few details and we'll instantly show your survey price
                and available inspection dates. Takes less than 60 seconds.`}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Postcode */}
              <div className="space-y-2">
                <Label
                  htmlFor="postcode"
                  className="text-sm font-medium text-gray-700"
                >
                  Property address / postcode
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="postcode"
                    placeholder="SW1A 1AA"
                    className="pl-10 h-12 rounded-xl border-[#E5E7EB]"
                    {...register("postcode")}
                  />
                </div>
                {errors.postcode && (
                  <p className="text-sm text-red-600">
                    {errors.postcode.message}
                  </p>
                )}
              </div>

              {/* Property Type and Bedrooms */}
              <div className="grid grid-cols-2 gap-4">
                {/* Property Type */}
                <div className="space-y-2">
                  <Label
                    htmlFor="propertyType"
                    className="text-sm font-medium text-gray-700"
                  >
                    Property type
                  </Label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                    <Controller
                      name="propertyType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="pl-10 min-h-12 rounded-xl border-[#E5E7EB] w-full">
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
                    <p className="text-sm text-red-600">
                      {errors.propertyType.message}
                    </p>
                  )}
                </div>

                {/* Bedrooms */}
                <div className="space-y-2">
                  <Label
                    htmlFor="bedrooms"
                    className="text-sm font-medium text-gray-700"
                  >
                    Bedrooms
                  </Label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                    <Controller
                      name="bedrooms"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="pl-10 min-h-12 rounded-xl border-[#E5E7EB] w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  {errors.bedrooms && (
                    <p className="text-sm text-red-600">
                      {errors.bedrooms.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Purchase Stage */}
              <div className="space-y-2">
                <Label
                  htmlFor="purchaseStage"
                  className="text-sm font-medium text-gray-700"
                >
                  Purchase stage
                </Label>
                <Controller
                  name="purchaseStage"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full min-h-12 rounded-xl border-[#E5E7EB]">
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
                  <p className="text-sm text-red-600">
                    {errors.purchaseStage.message}
                  </p>
                )}
              </div>

              {/* Survey Type */}
              <div className="space-y-2">
                <Label
                  htmlFor="surveyType"
                  className="text-sm font-medium text-gray-700"
                >
                  Survey type
                </Label>
                <Controller
                  name="surveyType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full min-h-12 rounded-xl border-[#E5E7EB]">
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
                  <p className="text-sm text-red-600">
                    {errors.surveyType.message}
                  </p>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label
                  htmlFor="timeline"
                  className="text-sm font-medium text-gray-700"
                >
                  Timeline
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="pl-10 w-full min-h-12 rounded-xl border-[#E5E7EB]">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">
                            Urgent (1-2 days)
                          </SelectItem>
                          <SelectItem value="week">Within a week</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                {errors.timeline && (
                  <p className="text-sm text-red-600">
                    {errors.timeline.message}
                  </p>
                )}
              </div>

              {/* Express Service */}
              <div className="bg-amber-50 rounded-[10px] p-4 border border-amber-200">
                <Controller
                  name="expressService"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="expressService"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 h-4 w-4 rounded-[2px] border-[0.8px] border-[#99A1AF] data-checked:bg-amber-600 data-checked:border-amber-500"
                      />
                      <Label
                        htmlFor="expressService"
                        className="flex items-start gap-2 flex-1 cursor-pointer"
                      >
                        <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Express service — Priority booking with faster
                            turnaround{" "}
                            <span className="text-amber-600">
                              (+£{expressServiceCost})
                            </span>
                          </p>
                        </div>
                      </Label>
                    </div>
                  )}
                />
              </div>
            </form>
          </div>

          {/* Quote Preview Section */}
          <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-[#E5E7EB]">
            <div className="p-6 lg:p-8 rounded-3xl border border-[#E5E7EB]">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#00C950]"></div>
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
                  <div className={`flex items-center justify-between text-[#4A5565] text-sm`}>
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
                    <div className={`flex items-center justify-between ${sourceSans.className}`}>
                      <span className="font-semibold text-[#101828]">
                        Total (incl. VAT)
                      </span>
                      <span className="text-2xl font-bold text-[#101828]">
                        £{totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-[#EFF6FF] rounded-[10px] p-4">
                <h4 className="font-bold text-[#101828] mb-4 text-sm">
                  What happens next
                </h4>
                <ul className={`space-y-3 text-sm ${sourceSans.className} text-[#364153]`}>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#262A6F] text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-sm font-semibold">
                      1
                    </div>
                    <span className="text-sm text-gray-700">
                      Confirm your booking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#262A6F] text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-sm font-semibold">
                      2
                    </div>
                    <span className="text-sm text-gray-700">
                      {`We'll contact you to arrange the inspection`}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#262A6F] text-white rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-sm font-semibold">
                      3
                    </div>
                    <span className="text-sm text-gray-700">
                      Receive your detailed report
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* No payment notice */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#6A7282]">
              <CheckCircle className="w-4 h-4" />
              <span>No payment taken until booking is confirmed</span>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="w-fit mx-auto mt-8">
          <Button
            type="submit"
            className="h-14 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full text-base font-semibold"
            size="lg"
          >
            Book Survey
            <CheckCircle className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
