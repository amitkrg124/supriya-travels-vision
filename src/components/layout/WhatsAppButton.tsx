import { MessageCircle } from "lucide-react";
import { company, whatsappHref } from "@/data/company";

export function WhatsAppButton() {
  const href = whatsappHref(`Hello ${company.shortName}, I would like to plan a journey.`);
  const isWhatsApp = href.startsWith("http");

  return (
    <a
      href={href}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noreferrer" : undefined}
      aria-label={isWhatsApp ? "Chat with us on WhatsApp" : "Contact us"}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-medium text-white shadow-lg ring-1 ring-gold/40 transition-transform duration-300 hover:scale-[1.03] md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5 text-gold" aria-hidden />
      <span className="hidden sm:inline">{isWhatsApp ? "WhatsApp" : "Enquire"}</span>
    </a>
  );
}
