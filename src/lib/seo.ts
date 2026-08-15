export const BASE_URL = "https://supriyatravelsindia.com";
export const DEFAULT_TITLE = "Supriya Travels of India — Hajj, Umrah & Global Tours";
export const DEFAULT_DESCRIPTION = "Supriya Travels of India offers Hajj and Umrah packages, domestic and international tours, worldwide tourist visas and air ticketing services from New Delhi.";

export interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function createMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${BASE_URL}/og-image.jpg`,
  url = BASE_URL,
  type = "website",
}: SeoOptions = {}) {
  return [
    { title },
    { name: "description", content: description },
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
  description: "Supriya Travels of India provides Hajj and Umrah packages, domestic and international tours, worldwide tourist visas and air ticketing services.",
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
