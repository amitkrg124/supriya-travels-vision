import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.supriyatravelsindia.com';

// [path, changefreq, priority]
const staticRoutes = [
  ['/', 'weekly', '1.0'],
  ['/hajj', 'weekly', '0.9'],
  ['/umrah', 'weekly', '0.9'],
  ['/packages', 'weekly', '0.9'],
  ['/destinations', 'weekly', '0.8'],
  ['/our-services', 'monthly', '0.8'],
  ['/services/tourist-visas', 'monthly', '0.7'],
  ['/services/air-ticketing', 'monthly', '0.7'],
  ['/services/b2b-air-ticketing', 'monthly', '0.6'],
  ['/about-us', 'monthly', '0.6'],
  ['/contact', 'monthly', '0.7'],
  ['/privacy-policy', 'yearly', '0.3'],
  ['/refund-policy', 'yearly', '0.3'],
  ['/terms', 'yearly', '0.3'],
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
    ...destinationSlugs.map((slug) => [`/destinations/${slug}`, 'monthly', '0.7']),
  ];
  const lastmod = new Date().toISOString().slice(0, 10);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ([route, changefreq, priority]) => `  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
