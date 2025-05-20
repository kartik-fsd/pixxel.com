// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Photography set IDs from your data
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

// Service pages from your original sitemap.xml.ts
const servicePageIds = [
  "anniversary-shoot", "pre-wedding-shoot", "wedding-shoot",
  "maternity-shoot", "fashion-portfolio", "family-shoot"
];

// https://astro.build/config
export default defineConfig({
  site: 'https://pixxelcity.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      // We're configuring the sitemap to work alongside your custom sitemap.xml.ts
      filter: (page) => {
        // Your custom implementation will handle all these URLs
        if (page === 'https://pixxelcity.com/' ||
          page.includes('/gallery') ||
          page.includes('/sets/') ||
          page.includes('/services/') ||
          page.includes('/contact-us') ||
          page.includes('/about-us')) {
          return false;
        }
        return true;
      },

      // Add all your photo set and service pages explicitly
      customPages: [
        // Core static pages
        'https://pixxelcity.com/',
        'https://pixxelcity.com/gallery',
        'https://pixxelcity.com/sets',
        'https://pixxelcity.com/services',
        'https://pixxelcity.com/contact-us',
        'https://pixxelcity.com/about-us',

        // Dynamic set pages - generated from your sets data
        ...photoSetIds.map(id => `https://pixxelcity.com/sets/${id}`),

        // Service pages
        ...servicePageIds.map(id => `https://pixxelcity.com/services/${id}`)
      ],

      // Set default change frequency and priority
      changefreq: 'monthly',
      priority: 0.7,

      // Advanced customization if needed
      serialize: (item) => {
        // Customize specific pages if needed
        if (item.url === 'https://pixxelcity.com/') {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url === 'https://pixxelcity.com/gallery') {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (item.url === 'https://pixxelcity.com/sets') {
          // @ts-ignore
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (item.url === 'https://pixxelcity.com/services') {
          // @ts-ignore
          item.changefreq = 'monthly';
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ]
});
