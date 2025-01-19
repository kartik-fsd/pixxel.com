import type { SEOProps } from '../types/seo';

// Base SEO configuration that other pages can extend
export const defaultSEO: SEOProps = {
    title: "Pixxel City - Premium Photography Studio in Nagpur",
    description: "Nagpur's premier photography and videography studio offering professional services, exclusive shooting locations, and state-of-the-art equipment.",
    keywords: "photography studio nagpur, professional photography, videography, photo studio, pixxel city",
    ogImage: "/images/default-og.jpg",
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pixxel City Photography Studio",
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
        "priceRange": "₹₹₹",
        "telephone": "+91-XXX-XXX-XXXX"
    }
};

// Helper function to merge default SEO with page-specific SEO
const mergeSEO = (pageSEO?: Partial<SEOProps>): SEOProps => {
    if (!pageSEO) return defaultSEO;

    return {
        ...defaultSEO,
        ...pageSEO,
        // Deep merge for jsonLd if both exist
        jsonLd: pageSEO.jsonLd
            ? { ...defaultSEO.jsonLd, ...pageSEO.jsonLd }
            : defaultSEO.jsonLd
    };
};

// Export everything together
export { mergeSEO };
export { gallerySEO } from './gallerySEO';