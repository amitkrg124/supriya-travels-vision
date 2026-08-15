import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PillButton } from "@/components/ui-editorial/PillButton";
import { destinations } from "@/data/destinations";

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
  const [failed, setFailed] = useState(false);

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
    try {
      // Enquiries are captured client-side until a backend destination is configured.
      console.info("Enquiry submitted", values);
      setFailed(false);
      setSent(true);
      reset();
    } catch {
      setFailed(true);
    }
  };

  if (sent) {
    return (
      <div className="border border-gold/40 bg-secondary p-10 text-center" role="status">
        <h3 className="font-display text-3xl text-navy">Thank you.</h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-muted-foreground">
          Your enquiry has been received. A member of our team will get back to you with the next
          steps for your journey.
        </p>
        <PillButton className="mt-8" onClick={() => setSent(false)} variant="outline">
          Send another enquiry
        </PillButton>
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
          <input id="name" className={`${field} mt-2`} {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="tel" className={`${field} mt-2`} {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone ? <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">
          Email
        </label>
        <input id="email" type="email" className={`${field} mt-2`} {...register("email")} aria-invalid={!!errors.email} />
        {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email.message}</p> : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travelType">
            Travel type
          </label>
          <select id="travelType" className={`${field} mt-2`} {...register("travelType")} aria-invalid={!!errors.travelType}>
            <option value="">Select</option>
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
            Travel date
          </label>
          <input id="travelDate" type="date" className={`${field} mt-2`} {...register("travelDate")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="travellers">
            Travellers
          </label>
          <input id="travellers" type="number" min={1} className={`${field} mt-2`} {...register("travellers")} />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Message
        </label>
        <textarea id="message" rows={5} className={`${field} mt-2 resize-none`} {...register("message")} />
      </div>

      {failed ? (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      ) : null}

      <PillButton type="submit" size="lg" disabled={isSubmitting} withArrow>
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </PillButton>
    </form>
  );
}
