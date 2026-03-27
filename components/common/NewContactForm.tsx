"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { sourceSans } from "@/lib/fonts";

// ─── Schema ──────────────────────────────────────────────────────────────────

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegExp, "Please enter a valid phone number"),
  helpWith: z.string().min(1, "Please tell us what you need help with"),
  description: z.string().min(1, "Please provide a brief description"),
  contactMethod: z
    .array(z.string())
    .min(1, "Please select at least one contact method"),
});

type FormValues = z.infer<typeof formSchema>;

// ─── Props ───────────────────────────────────────────────────────────────────

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  /** Pre-fill the "What do you need help with?" field — e.g. from modal context */
  prefillHelpWith?: string;
  /** Called after successful submission — useful for closing a modal */
  onSuccess?: () => void;
  /** When true, removes the outer white card padding (for use inside a modal) */
  compact?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────

const ContactForm = ({
  title = "Request a Call Back",
  subtitle = "Tell us a little about your situation and we'll direct your enquiry to the appropriate team member.",
  submitLabel = "Submit Enquiry",
  prefillHelpWith,
  onSuccess,
  compact = false,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
      helpWith: prefillHelpWith ?? "",
      description: "",
      contactMethod: [],
    },
  });

  const selectedMethods = useWatch({
    control,
    name: "contactMethod",
    defaultValue: [],
  });

  const toggleMethod = (method: string) => {
    const current = selectedMethods ?? [];
    const updated = current.includes(method)
      ? current.filter((m) => m !== method)
      : [...current, method];
    setValue("contactMethod", updated, { shouldValidate: true });
  };

  const onSubmit = async (values: FormValues) => {
    // TODO: wire to Gravity Forms API or email handler
    console.log("Form submitted:", values);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 600));
    onSuccess?.();
  };

  const inner = (
    <>
      {/* Header */}
      <h2 className="text-xl lg:text-2xl font-bold text-[#101828] mb-1">
        {title}
      </h2>
      <p className={`${sourceSans.className} text-sm text-[#4A5565] mb-6`}>
        {subtitle}
      </p>

      {isSubmitSuccessful ? (
        /* ── Success state ── */
        <div className="flex flex-col items-center text-center py-8 gap-4">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#101828]">Enquiry Received</h3>
          <p className={`${sourceSans.className} text-[#4A5565] text-sm max-w-xs`}>
            Thank you. A member of our team will be in touch within one working day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="Enter your full name"
              className="h-11 rounded-xl border-[#E5E7EB] text-sm"
              {...register("name")}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Role */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Your Role <span className="text-red-500">*</span>
            </Label>
            <Input
              className="h-11 rounded-xl border-[#E5E7EB] text-sm"
              {...register("role")}
            />
            {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Your Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              className="h-11 rounded-xl border-[#E5E7EB] text-sm"
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Your Phone number <span className="text-red-500">*</span>
            </Label>
            <Input
              type="tel"
              className="h-11 rounded-xl border-[#E5E7EB] text-sm"
              {...register("phone")}
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          {/* Help with — pre-filled from modal context */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              What do you need help with? <span className="text-red-500">*</span>
            </Label>
            <Input
              className="h-11 rounded-xl border-[#E5E7EB] text-sm"
              {...register("helpWith")}
            />
            {errors.helpWith && <p className="text-xs text-red-500">{errors.helpWith.message}</p>}
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Brief Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              placeholder="Please provide a short summary of your situation."
              className="min-h-28 rounded-xl border-[#E5E7EB] text-sm resize-none"
              {...register("description")}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description.message}</p>}
          </div>

          {/* Preferred contact method */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#101828]">
              Preferred Contact Method <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col gap-2">
              {["Phone", "Email"].map((method) => (
                <div key={method} className="flex items-center gap-2">
                  <Checkbox
                    id={`method-${method}`}
                    checked={selectedMethods?.includes(method)}
                    onCheckedChange={() => toggleMethod(method)}
                    className="h-4 w-4 rounded-[3px] border-[#99A1AF] data-[state=checked]:bg-[#262A6F] data-[state=checked]:border-[#262A6F]"
                  />
                  <Label
                    htmlFor={`method-${method}`}
                    className={`text-sm text-[#4A5565] cursor-pointer ${sourceSans.className}`}
                  >
                    {method}
                  </Label>
                </div>
              ))}
            </div>
            {errors.contactMethod && (
              <p className="text-xs text-red-500">{errors.contactMethod.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full text-base font-semibold mt-2 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : submitLabel}
          </Button>

          <p className={`${sourceSans.className} text-xs text-[#6A7282] text-center`}>
            We aim to respond within one working day.
          </p>
        </form>
      )}
    </>
  );

  // Compact mode — no card wrapper (used inside modal)
  if (compact) return <div>{inner}</div>;

  return (
    <div className="bg-white rounded-4xl p-8 lg:p-10">
      {inner}
    </div>
  );
};

export default ContactForm;