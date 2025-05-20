// src/seo/seoDefaults.ts
import type { SEOProps } from '../types/seo';

export const defaultSEO: SEOProps = {
    title: "Pixxel City - Themed Photoshoot Venue in Nagpur",
    description:
        "Pixxel City is Nagpur's premier photoshoot location offering innovative themed setups for pre-wedding shoots, family portraits, anniversaries, and more. Create unforgettable memories with our curated visual backdrops.",
    keywords:
        "photoshoot venue Nagpur, pre-wedding shoot Nagpur, themed photography sets, anniversary shoot, family portrait location, pixxel city",
    ogImage: "/pixeelstudio-og.jpg",
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "name": "Pixxel City - Photoshoot Venue",
        "@id": "https://pixxelcity.com",
        "url": "https://pixxelcity.com",
        "image": [
            "/images/studio-front.jpg",
            "/images/studio-interior.jpg"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1458",
            "longitude": "79.0882"
        },
        "priceRange": "₹8000 to ₹16000",
        "telephone": "+91-626-118-0073"
    }
};
