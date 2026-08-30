import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PillButton } from "@/components/ui-editorial/PillButton";
import { destinations } from "@/data/destinations";
import { submitContactEnquiry, type ContactEnquiryResponse } from "@/actions/contact";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  travelType: z.string().min(1, "Please select a travel type"),
  destination: z.string().optional(),
  travelDate: z.string().optional(),
  travellers: z.string().optional(),
  message: z.string().max(1000).optional(),
  hp: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const field =
  "w-full border border-input bg-background px-4 py-3 text-[15px] text-navy outline-none transition-colors duration-300 focus:border-gold";
const labelCls = "block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground";

export function ContactForm() {
  const [submissionResult, setSubmissionResult] = useState<ContactEnquiryResponse | null>(null);
  const [failed, setFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      travelType: "",
      destination: "",
      travelDate: "",
      travellers: "1",
      message: "",
      hp: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setFailed(false);
      setErrorMessage("");
      const result = await submitContactEnquiry({ data: values });
      if (result && result.success) {
        setSubmissionResult(result);
        reset();
      } else {
        setFailed(true);
        setErrorMessage(result?.message || "Could not process your enquiry. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setFailed(true);
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or reach us on WhatsApp."
      );
    }
  };

  if (submissionResult) {
    return (
      <div className="border border-gold/40 bg-secondary p-8 md:p-10 text-center" role="status">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold text-2xl font-serif">
          ✓
        </div>
        <h3 className="mt-4 font-display text-3xl text-navy">Enquiry Received</h3>
        <p className="mt-2 text-xs uppercase tracking-widest text-gold font-medium">
          Reference Code: <span className="font-mono text-navy font-semibold">{submissionResult.referenceId}</span>
        </p>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground leading-relaxed">
          Thank you! A member of our dedicated travel team will review your requirements and get back to you shortly with a personalized itinerary and quotes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {submissionResult.whatsappUrl ? (
            <a
              href={submissionResult.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
            >
              💬 Instant Connect on WhatsApp
            </a>
          ) : null}
          <PillButton onClick={() => setSubmissionResult(null)} variant="outline">
            Send another enquiry
          </PillButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot field for bot protection */}
      <input type="text" {...register("hp")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name *
          </label>
          <input id="name" className={`${field} mt-2`} {...register("name")} aria-invalid={!!errors.name} placeholder="Your full name" />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone *
          </label>
          <input id="phone" type="tel" className={`${field} mt-2`} {...register("phone")} aria-invalid={!!errors.phone} placeholder="+91 XXXXX XXXXX" />
          {errors.phone ? <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" className={`${field} mt-2`} {...register("email")} aria-invalid={!!errors.email} placeholder="yourname@example.com" />
        {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email.message}</p> : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travelType">
            Travel type *
          </label>
          <select id="travelType" className={`${field} mt-2`} {...register("travelType")} aria-invalid={!!errors.travelType}>
            <option value="">Select Service</option>
            <option>Hajj</option>
            <option>Umrah</option>
            <option>Domestic tour</option>
            <option>International tour</option>
            <option>Tourist visa</option>
            <option>Air ticketing</option>
            <option>B2B ticketing</option>
          </select>
          {errors.travelType ? (
            <p className="mt-2 text-xs text-destructive">{errors.travelType.message}</p>
          ) : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="destination">
            Destination
          </label>
          <select id="destination" className={`${field} mt-2`} {...register("destination")}>
            <option value="">Not decided yet</option>
            {destinations.map((d) => (
              <option key={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travelDate">
            Preferred Travel date
          </label>
          <input id="travelDate" type="date" className={`${field} mt-2`} {...register("travelDate")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="travellers">
            Number of Travellers
          </label>
          <input id="travellers" type="number" min={1} className={`${field} mt-2`} {...register("travellers")} placeholder="1" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Additional Requirements / Message
        </label>
        <textarea id="message" rows={4} className={`${field} mt-2 resize-none`} {...register("message")} placeholder="Tell us any specific preferences (hotel category, dates, special requests)..." />
      </div>

      {failed ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage || "Something went wrong. Please try again or reach us on WhatsApp."}
        </p>
      ) : null}

      <PillButton type="submit" size="lg" disabled={isSubmitting} withArrow>
        {isSubmitting ? "Registering Enquiry…" : "Send Enquiry"}
      </PillButton>
    </form>
  );
}
