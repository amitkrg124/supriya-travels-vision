import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/ui-editorial/PolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Supriya Travels of India" },
      { name: "description", content: "How Supriya Travels of India collects, uses and protects the information you share with us." },
      { property: "og:title", content: "Privacy Policy — Supriya Travels of India" },
      { property: "og:description", content: "How we handle the information you share with us." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <PolicyPage title="Privacy Policy">
      <p>
        This policy explains what information we collect when you enquire with Supriya Travels of
        India, and how it is used.
      </p>
      <h2 className="font-display text-2xl text-navy">Information we collect</h2>
      <p>
        We collect the details you provide in an enquiry — name, phone number, email address,
        travel dates and preferences — along with any documents you share for visa or ticketing
        purposes.
      </p>
      <h2 className="font-display text-2xl text-navy">How it is used</h2>
      <p>
        Your information is used to respond to your enquiry, prepare quotations, and complete
        bookings, visa applications and ticketing on your behalf. Documents are shared with
        airlines, consulates and service providers only where required to complete your travel.
      </p>
      <h2 className="font-display text-2xl text-navy">Retention and access</h2>
      <p>
        We retain enquiry and booking records for as long as needed for service and statutory
        purposes. You may contact us at any time to request access to, correction of, or deletion
        of your details.
      </p>
      <h2 className="font-display text-2xl text-navy">Contact</h2>
      <p>For any question about this policy, please reach us through the contact page.</p>
    </PolicyPage>
  ),
});
