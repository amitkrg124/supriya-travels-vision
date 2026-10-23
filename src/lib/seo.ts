export const BASE_URL = "https://www.supriyatravelsindia.com";
export const DEFAULT_TITLE = "Hajj & Umrah Travel Agency in Delhi | Supriya Travels of India";
export const DEFAULT_DESCRIPTION = "Supriya Travels of India, New Delhi: Hajj and Umrah packages for Makkah and Madinah, domestic tours, international holidays, honeymoon packages, visas and flights.";
export const DEFAULT_KEYWORDS = [
  "Supriya Travels of India",
  "best travel company in Delhi",
  "best travel company in India",
  "Hajj travel agency in Delhi",
  "Umrah travel agency in Delhi",
  "Makka Madina tour packages",
  "Hajj packages from India",
  "Umrah packages from Delhi",
  "domestic tour packages",
  "international tour packages",
  "honeymoon packages",
  "couple tour packages",
  "short trips from Delhi",
  "hotel bookings",
  "camping trips",
  "tourist visa services",
  "air ticketing Delhi",
];

export interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export function createMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${BASE_URL}/og-image.jpg`,
  url = BASE_URL,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
}: SeoOptions = {}) {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Supriya Travels of India" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "theme-color", content: "#04111D" },
  ];
}

export function createCanonicalLink(path: string) {
  // Ensure path starts with a slash and avoid trailing slash for clean URLs
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  return [{ rel: "canonical", href: canonicalUrl }];
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "TravelAgency", "LocalBusiness"],
  name: "Supriya Travels of India",
  description: "Supriya Travels of India is a New Delhi travel agency providing Hajj and Umrah packages for Makkah and Madinah, domestic and international tours, honeymoon and couple packages, hotel stays, tourist visas and air ticketing.",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  telephone: ["+91 9868380240", "+91 7011959250"],
  email: "supriyatravelsindia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-13, D.D.A. Flats, Mata Sundri Road, Near Farsh Wali Masjid",
    addressLocality: "New Delhi",
    postalCode: "110002",
    addressCountry: "IN"
  },
  areaServed: {
    "@type": "Country",
    name: "India"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Supriya Travels of India",
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    name: "Supriya Travels of India"
  }
};

export function createBreadcrumbSchema(items: { name: string; item?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item ? `${BASE_URL}${crumb.item}` : undefined,
    }))
  };
}
