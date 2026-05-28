"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Textarea, Select } from "@rapidseed/ui";
import { INDUSTRIES } from "@rapidseed/lib";

const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  successMessage?: string;
}

export function LeadForm({
  source,
  title = "Request Your Free AI Visibility Audit",
  subtitle = "Tell us about your business and we'll analyze your current AI discovery footprint.",
  successMessage = "Your request has been received. We'll be in touch within 1 business day.",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { message?: string }).message ?? "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
          <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-white">Request Received</h3>
        <p className="text-white/60">{successMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <div className="mb-8">
          <h2 className="font-display text-2xl font-black text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-white/60">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="First Name"
            placeholder="Jane"
            error={errors.first_name?.message}
            {...register("first_name")}
          />
          <Input
            label="Last Name"
            placeholder="Smith"
            error={errors.last_name?.message}
            {...register("last_name")}
          />
        </div>
        <Input
          label="Business Email"
          type="email"
          placeholder="jane@yourpractice.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          label="Business / Practice Name"
          placeholder="Acme Dental Group"
          error={errors.company?.message}
          {...register("company")}
        />
        <Select
          label="Industry"
          placeholder="Select your industry"
          options={INDUSTRIES.map((i) => ({ value: i.slug, label: i.name }))}
          error={errors.industry?.message}
          {...register("industry")}
        />
        <Textarea
          label="Tell us about your visibility goals"
          placeholder="We're a 3-location dental practice and want to understand how we appear in AI search results..."
          rows={4}
          error={errors.message?.message}
          {...register("message")}
        />

        {serverError && (
          <p className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
            {serverError}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" loading={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request AI Visibility Audit"}
        </Button>

        <p className="text-center text-xs text-white/30">
          No commitment required. We'll respond within 1 business day.
        </p>
      </form>
    </div>
  );
}
