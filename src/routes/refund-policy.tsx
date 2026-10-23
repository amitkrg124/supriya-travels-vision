import { createFileRoute } from "@tanstack/react-router";
import { createCanonicalLink, createMetadata } from "@/lib/seo";
import { PolicyPage } from "@/components/ui-editorial/PolicyPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: createMetadata({
      title: "Refund & Cancellation Policy | Supriya Travels of India",
      description:
        "How cancellations and refunds are handled at Supriya Travels of India for air tickets, Hajj and Umrah packages, tour packages, hotels and visa services.",
    }),
    links: createCanonicalLink("/refund-policy"),
  }),
  component: () => (
    <PolicyPage title="Refund Policy">
      <h2 className="font-display text-2xl text-navy">Cancellations</h2>
      <p>
        Cancellation requests must be made in writing. Charges depend on the rules of the airline,
        hotel or service provider concerned, and on how close the request is to the travel date.
      </p>
      <h2 className="font-display text-2xl text-navy">Air tickets</h2>
      <p>
        Refunds on air tickets follow the fare rules of the issuing airline. Non-refundable fares
        remain non-refundable, and airline processing times apply once a request is filed.
      </p>
      <h2 className="font-display text-2xl text-navy">Packages and pilgrimage travel</h2>
      <p>
        Package cancellations are subject to supplier deadlines. Amounts already committed to
        hotels, transport or visa processing are generally not recoverable.
      </p>
      <h2 className="font-display text-2xl text-navy">Visa fees</h2>
      <p>
        Consular and processing fees are non-refundable once an application has been submitted,
        regardless of the outcome.
      </p>
      <h2 className="font-display text-2xl text-navy">Processing</h2>
      <p>
        Approved refunds are returned through the original payment method once received from the
        relevant provider.
      </p>
    </PolicyPage>
  ),
});
