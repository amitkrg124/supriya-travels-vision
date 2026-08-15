import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/ui-editorial/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Supriya Travels of India" },
      { name: "description", content: "Terms governing bookings, quotations and travel services arranged by Supriya Travels of India." },
      { property: "og:title", content: "Terms & Conditions — Supriya Travels of India" },
      { property: "og:description", content: "Terms governing bookings and travel services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <PolicyPage title="Terms & Conditions">
      <h2 className="font-display text-2xl text-navy">Quotations and pricing</h2>
      <p>
        All quotations are prepared for the dates, category and group size discussed at enquiry.
        Prices remain subject to availability and to airline, hotel and government charges current
        at the time of confirmation.
      </p>
      <h2 className="font-display text-2xl text-navy">Bookings</h2>
      <p>
        A booking is confirmed only once the required payment is received and written confirmation
        is issued. Travellers are responsible for providing accurate names and documents matching
        their passports.
      </p>
      <h2 className="font-display text-2xl text-navy">Documents and visas</h2>
      <p>
        Visa outcomes are decided by the relevant authorities. We assist with documentation and
        submission, but cannot guarantee approval or processing timelines.
      </p>
      <h2 className="font-display text-2xl text-navy">Changes and liability</h2>
      <p>
        Airlines, hotels and service providers may change schedules or arrangements. Our liability
        is limited to the services we arrange, and does not extend to losses caused by third
        parties, weather, or circumstances beyond our control.
      </p>
    </PolicyPage>
  ),
});
