// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwind from '@astrojs/tailwind';
// @ts-ignore
import react from '@astrojs/react';
// @ts-ignore
import sitemap from '@astrojs/sitemap';

// Photography set IDs from your data
// @ts-ignore
const photoSetIds = [
  "arabian-elegance", "bedroom-set", "blue-jodhpur", "cozy-library",
  "crimson-grace", "dark-room", "date-night", "floral-arch",
  "french-cafe", "glass-house", "indo-ethnic", "playful-pantry",
  "rustic-arches", "retro-studio", "elegant-bar", "luminous-pathway",
  "london-street", "majestic-flora", "melody-piano", "monochrome",
  "palmparadise", "piece-of-greece", "royal-swing", "royal-touch",
  "rustic-archs", "santorini", "starry-walkaway", "the-crystal-court",
  "the-rug-royalty", "twilight-charm", "utopian-street"
];
// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';
// @ts-ignore
import tailwind from '@astrojs/tailwind';
// @ts-ignore
import react from '@astrojs/react';
// @ts-ignore
import sitemap from '@astrojs/sitemap';

// Photography set IDs from your data
// @ts-ignore
const photoSetIds = [
  "arabian-elegance", "bedroom-set", "blue-jodhpur", "cozy-library",
  "crimson-grace", "dark-room", "date-night", "floral-arch",
  "french-cafe", "glass-house", "indo-ethnic", "playful-pantry",
  "rustic-arches", "retro-studio", "elegant-bar", "luminous-pathway",
  "london-street", "majestic-flora", "melody-piano", "monochrome",
  "palmparadise", "piece-of-greece", "royal-swing", "royal-touch",
  "rustic-archs", "santorini", "starry-walkaway", "the-crystal-court",
  "the-rug-royalty", "twilight-charm", "utopian-street"
];

// Service pages from your original data
const servicePageIds = [
  "anniversary-shoot", "pre-wedding-shoot", "wedding-shoot",
  "maternity-shoot", "fashion-portfolio", "family-shoot"
];

// https://astro.build/config
export default defineConfig({
  // Use your actual deployment URL - adjust if needed
  site: 'https://pixxelcity.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({

      customPages: [
        // Dynamic set pages
        ...photoSetIds.map(id => `/sets/${id}`),

        // Service pages
        ...servicePageIds.map(id => `/services/${id}`)
      ],

      // Set default change frequency and priority
      changefreq: 'monthly',
      priority: 0.7,

      // Add XSL stylesheet for better presentation
      xslURL: '/sitemap.xsl',

      // Customize specific pages
      serialize: (item) => {
        if (item.url.endsWith('/')) {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('/gallery')) {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (item.url.includes('/sets') && !item.url.includes('/sets/')) {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (item.url.includes('/services') && !item.url.includes('/services/')) {
          // @ts-ignore
          item.changefreq = 'monthly';
          item.priority = 0.8;
        }
        return item;
      }
    }),
  ]
});