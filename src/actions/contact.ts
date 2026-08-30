import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { company } from "@/data/company";

export const contactEnquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(25, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(120, "Email is too long"),
  travelType: z.string().trim().min(1, "Please select a travel type"),
  destination: z.string().trim().optional().default("Not decided yet"),
  travelDate: z.string().trim().optional().default("Flexible"),
  travellers: z.string().trim().optional().default("1"),
  message: z.string().trim().max(1500, "Message must be under 1500 characters").optional().default(""),
  // Honeypot field for bot spam detection
  hp: z.string().optional(),
});

export type ContactEnquiryInput = z.infer<typeof contactEnquirySchema>;

export type ContactEnquiryResponse = {
  success: boolean;
  referenceId: string;
  message: string;
  whatsappUrl?: string;
};

function generateReferenceId(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ST-${year}-${random}`;
}

function sanitizeText(str: string): string {
  return str.replace(/[<>]/g, "");
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactEnquirySchema.parse(data))
  .handler(async ({ data }): Promise<ContactEnquiryResponse> => {
    // 1. Honeypot check: If the hidden honeypot field is populated, silently reject without notifying bots
    if (data.hp && data.hp.trim().length > 0) {
      console.warn("[Contact Backend] Spam submission caught via honeypot.");
      return {
        success: true,
        referenceId: "ST-SPAM-DETECTED",
        message: "Your enquiry has been received.",
      };
    }

    const referenceId = generateReferenceId();
    const timestamp = new Date().toISOString();

    const sanitizedData = {
      referenceId,
      timestamp,
      name: sanitizeText(data.name),
      phone: sanitizeText(data.phone),
      email: sanitizeText(data.email),
      travelType: sanitizeText(data.travelType),
      destination: sanitizeText(data.destination || "Not decided yet"),
      travelDate: sanitizeText(data.travelDate || "Flexible"),
      travellers: sanitizeText(data.travellers || "1"),
      message: sanitizeText(data.message || "None provided"),
    };

    console.info(`[Contact Backend] New Lead Received [${referenceId}]:`, sanitizedData);

    // 2. Email forwarding via Resend if RESEND_API_KEY is present
    const resendApiKey = typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined;
    const recipientEmail =
      (typeof process !== "undefined" ? process.env?.CONTACT_NOTIFICATION_EMAIL : undefined) ||
      company.email ||
      "supriyatravelsindia@gmail.com";

    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #1a2b49; border-bottom: 2px solid #c49a45; padding-bottom: 10px;">New Travel Enquiry — ${referenceId}</h2>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
            <p><strong>Travel Type:</strong> ${sanitizedData.travelType}</p>
            <p><strong>Destination:</strong> ${sanitizedData.destination}</p>
            <p><strong>Travel Date:</strong> ${sanitizedData.travelDate}</p>
            <p><strong>Number of Travellers:</strong> ${sanitizedData.travellers}</p>
            <div style="margin-top: 15px; padding: 12px; background-color: #f8f9fa; border-left: 4px solid #c49a45;">
              <p style="margin: 0 0 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap;">${sanitizedData.message}</p>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 20px;">Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Supriya Travels Website <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: sanitizedData.email,
            subject: `New Enquiry [${sanitizedData.travelType}]: ${sanitizedData.name} (${referenceId})`,
            html: emailHtml,
          }),
        });
        console.info(`[Contact Backend] Email notification sent successfully for ${referenceId}`);
      } catch (emailErr) {
        console.error(`[Contact Backend] Failed to send email notification for ${referenceId}:`, emailErr);
      }
    }

    // 3. Webhook forwarding if webhook URL is configured (e.g. Discord, Slack, CRM, or Google Sheets)
    const webhookUrl =
      typeof process !== "undefined"
        ? process.env?.CONTACT_WEBHOOK_URL ||
          process.env?.DISCORD_WEBHOOK_URL ||
          process.env?.SLACK_WEBHOOK_URL
        : undefined;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📬 **New Enquiry [${referenceId}]**\n**Name:** ${sanitizedData.name}\n**Phone:** ${sanitizedData.phone}\n**Email:** ${sanitizedData.email}\n**Service:** ${sanitizedData.travelType}\n**Destination:** ${sanitizedData.destination}\n**Date:** ${sanitizedData.travelDate}\n**Travellers:** ${sanitizedData.travellers}\n**Message:** ${sanitizedData.message}`,
            lead: sanitizedData,
          }),
        });
      } catch (webhookErr) {
        console.error(`[Contact Backend] Failed to forward to webhook for ${referenceId}:`, webhookErr);
      }
    }

    // 4. Generate direct WhatsApp reference message for instant support
    const whatsappCleanNumber = company.whatsapp ? company.whatsapp.replace(/\D/g, "") : "919868380240";
    const waText = encodeURIComponent(
      `Hello Supriya Travels team,\nI have submitted an enquiry on your website.\n*Ref ID:* ${referenceId}\n*Name:* ${sanitizedData.name}\n*Requirement:* ${sanitizedData.travelType} (${sanitizedData.destination})\n*Travel Date:* ${sanitizedData.travelDate}\n*Travellers:* ${sanitizedData.travellers}`
    );
    const whatsappUrl = `https://wa.me/${whatsappCleanNumber}?text=${waText}`;

    return {
      success: true,
      referenceId,
      message: "Your enquiry has been successfully registered with Supriya Travels.",
      whatsappUrl,
    };
  });
