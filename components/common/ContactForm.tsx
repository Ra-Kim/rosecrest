"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sourceSans } from "@/lib/fonts";

// ─── Schema ──────────────────────────────────────────────────────────────────

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

// ─── Props ───────────────────────────────────────────────────────────────────

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  prefillHelpWith?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────

const ContactForm = ({
  title = "Free Quotation",
  subtitle,
  submitLabel = "Find Out For Free",
  prefillHelpWith,
  onSuccess,
  compact = false,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: prefillHelpWith ?? "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    onSuccess?.();
  };

  const inner = (
    <>
      {/* Header */}
      {title && (
        <h2 className="text-xl lg:text-2xl font-bold text-[#101828] mb-1">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`${sourceSans.className} text-sm text-[#4A5565] mb-6`}>
          {subtitle}
        </p>
      )}

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

          {/* First Name + Last Name — side by side */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-[#101828]">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-[#101828]">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email + Phone — side by side */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-[#101828]">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-[#101828]">
                Phone
              </Label>
              <Input
                type="tel"
                className="h-11 rounded-xl border-[#E5E7EB] text-sm"
                {...register("phone")}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-[#101828]">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              className="min-h-40 rounded-xl border-[#E5E7EB] text-sm resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 bg-[#262A6F] hover:bg-[#262A6F]/90 text-white rounded-full px-10 text-base font-semibold disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : submitLabel}
          </Button>

        </form>
      )}
    </>
  );

  if (compact) return <div>{inner}</div>;

  return (
    <div className="bg-white rounded-4xl p-2 md:p-8 lg:p-10">
      {inner}
    </div>
  );
};

export default ContactForm;