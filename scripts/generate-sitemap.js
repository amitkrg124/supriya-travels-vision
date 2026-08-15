import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://supriyatravelsindia.com';

const staticRoutes = [
  '/',
  '/about-us',
  '/packages',
  '/our-services',
  '/destinations',
  '/contact',
  '/hajj',
  '/umrah',
  '/services/air-ticketing',
  '/services/b2b-air-ticketing',
  '/services/tourist-visas',
  '/privacy-policy',
  '/refund-policy',
  '/terms',
];

// Read destinations from destinations.ts
function extractDestinations() {
  const destPath = path.resolve(process.cwd(), 'src/data/destinations.ts');
  const content = fs.readFileSync(destPath, 'utf-8');
  
  const slugs = [];
  const regex = /slug:\s*["']([^"']+)["']/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

function generateSitemap() {
  const destinationSlugs = extractDestinations();
  const allRoutes = [
    ...staticRoutes,
    ...destinationSlugs.map((slug) => `/destinations/${slug}`),
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/destinations/') ? '0.7' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');
  console.log(`Sitemap generated successfully at public/sitemap.xml with ${allRoutes.length} routes.`);
}

generateSitemap();
