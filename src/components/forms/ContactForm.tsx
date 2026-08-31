import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PillButton } from "@/components/ui-editorial/PillButton";
import { destinations } from "@/data/destinations";
import { company } from "@/data/company";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  travelType: z.string().min(1, "Please select a travel type"),
  destination: z.string().optional(),
  travelDate: z.string().optional(),
  travellers: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const field =
  "w-full border border-input bg-background px-4 py-3 text-[15px] text-navy outline-none transition-colors duration-300 focus:border-gold";
const labelCls = "block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<{
    reference: string;
    whatsappUrl: string;
    mailUrl: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { travelType: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Generate unique reference code
    const reference = `ST-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const text = `*New Travel Enquiry - Supriya Travels*\nRef: ${reference}\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nTravel Type: ${values.travelType}\nDestination: ${values.destination || "Not decided"}\nTravel Date: ${values.travelDate || "Flexible"}\nTravellers: ${values.travellers || "1"}\nMessage: ${values.message || "N/A"}`;

    const cleanPhone = company.phone.primary.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    const mailUrl = `mailto:supriyatravelsindia@gmail.com?subject=${encodeURIComponent(
      `New Enquiry [${reference}] - ${values.name} (${values.travelType})`
    )}&body=${encodeURIComponent(text)}`;

    setLastSubmission({ reference, whatsappUrl, mailUrl });
    setSent(true);
    reset();
  };

  if (sent && lastSubmission) {
    return (
      <div className="border border-gold/40 bg-secondary p-8 sm:p-10 text-center" role="status">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold bg-navy rounded-full mb-3">
          Ref: {lastSubmission.reference}
        </span>
        <h3 className="font-display text-3xl text-navy">Thank You!</h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground">
          Your enquiry details are ready. Reach our team instantly on WhatsApp or send directly via Email:
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={lastSubmission.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
          <a
            href={lastSubmission.mailUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-navy/30 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-medium text-navy transition-transform hover:scale-105"
          >
            Send via Email
          </a>
        </div>

        <button
          onClick={() => setSent(false)}
          className="mt-8 text-xs text-navy/70 hover:text-navy underline block mx-auto"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={`${field} mt-2`}
            {...register("name")}
            aria-invalid={!!errors.name}
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={`${field} mt-2`}
            {...register("phone")}
            aria-invalid={!!errors.phone}
            placeholder="+91 98765 43210"
          />
          {errors.phone ? <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`${field} mt-2`}
          {...register("email")}
          aria-invalid={!!errors.email}
          placeholder="your.email@example.com"
        />
        {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email.message}</p> : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travelType">
            Travel type
          </label>
          <select
            id="travelType"
            className={`${field} mt-2`}
            {...register("travelType")}
            aria-invalid={!!errors.travelType}
          >
            <option value="">Select travel service</option>
            <option value="Hajj">Hajj Package</option>
            <option value="Umrah">Umrah Package</option>
            <option value="Domestic tour">Domestic Tour</option>
            <option value="International tour">International Tour</option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Air ticketing">Air Ticketing</option>
            <option value="B2B ticketing">B2B Air Ticketing</option>
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
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travelDate">
            Preferred Travel Date
          </label>
          <input id="travelDate" type="date" className={`${field} mt-2`} {...register("travelDate")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="travellers">
            Number of Travellers
          </label>
          <input
            id="travellers"
            type="number"
            min={1}
            defaultValue={1}
            className={`${field} mt-2`}
            {...register("travellers")}
          />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Your Requirements / Notes
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${field} mt-2 resize-none`}
          placeholder="Tell us about any specific preferences, hotel categories or dates..."
          {...register("message")}
        />
      </div>

      <PillButton type="submit" size="lg" disabled={isSubmitting} withArrow>
        {isSubmitting ? "Processing…" : "Submit Enquiry"}
      </PillButton>
    </form>
  );
}
