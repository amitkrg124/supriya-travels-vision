import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq as FaqItem } from "@/data/destinations";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-xl leading-snug text-navy hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
