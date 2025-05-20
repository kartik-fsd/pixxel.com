import type { APIRoute } from 'astro';
import { sets } from '../src/data/setsDat.json';

export const get: APIRoute = async () => {
    const baseUrl = 'https://pixxelcity.com';
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

    // Core static pages
    const staticPages = [
        { url: "/", priority: "1.0", changefreq: "weekly" },
        { url: "/gallery", priority: "0.9", changefreq: "weekly" },
        { url: "/sets", priority: "0.8", changefreq: "weekly" },
        { url: "/services", priority: "0.8", changefreq: "monthly" },
        { url: "/contact-us", priority: "0.7", changefreq: "monthly" },
        { url: "/about-us", priority: "0.7", changefreq: "monthly" },
    ];

    // Service pages
    const servicePages = [
        { id: "anniversary-shoot", title: "Anniversary Photography" },
        { id: "pre-wedding-shoot", title: "Pre-Wedding Photography" },
        { id: "wedding-shoot", title: "Wedding Photography" },
        { id: "maternity-shoot", title: "Maternity Photography" },
        { id: "fashion-portfolio", title: "Fashion Portfolio" },
        { id: "family-shoot", title: "Family Photography" },
    ];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static pages
    staticPages.forEach(page => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
        sitemap += `    <priority>${page.priority}</priority>\n`;
        sitemap += '  </url>\n';
    });

    // Add dynamic set pages
    sets.forEach(set => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/sets/${set.id}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.7</priority>\n';
        sitemap += '  </url>\n';
    });

    // Add service pages
    servicePages.forEach(service => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/services/${service.id}</loc>\n`;
        sitemap += `    <lastmod>${today}</lastmod>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.7</priority>\n';
        sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};