
import { createSEO } from './utils';
import type { SEOProps } from '../types/seo';


export const packagesSEO: SEOProps = createSEO({
    title: "Studio Packages & Pricing | Pixxel City Nagpur",
    description: "Professional studio packages in Nagpur starting from ₹6,000. Premium equipment, makeup rooms, and advanced lighting setups for photography and videography sessions.",
    keywords: "photo studio packages nagpur, photography studio pricing, studio rental nagpur, professional photoshoot packages, studio space rental, photography studio amenities, pixxel city pricing",
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Pixxel City Photography Studio Packages",
        "description": "Professional photography studio packages with premium equipment and amenities",
        "offers": {
            "@type": "AggregateOffer",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Silver Package",
                    "price": "6000",
                    "priceCurrency": "INR",
                    "description": "4 Hour Studio Session with Basic Studio Access",
                    "availability": "https://schema.org/InStock"
                },
                {
                    "@type": "Offer",
                    "name": "Gold Package",
                    "price": "10000",
                    "priceCurrency": "INR",
                    "description": "6 Hour Studio Session with Full Studio Access",
                    "availability": "https://schema.org/InStock"
                },
                {
                    "@type": "Offer",
                    "name": "Diamond Package",
                    "price": "12000",
                    "priceCurrency": "INR",
                    "description": "8 Hour Studio Session with Premium Studio Access",
                    "availability": "https://schema.org/InStock"
                },
                {
                    "@type": "Offer",
                    "name": "Premium Package",
                    "price": "16000",
                    "priceCurrency": "INR",
                    "description": "12 Hour Advanced Studio Session with All Amenities",
                    "availability": "https://schema.org/InStock"
                }
            ],
            "priceCurrency": "INR",
            "priceRange": "₹8,000 - ₹16,000"
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Professional Props & Equipment",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Makeup Room",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Premium Lighting Setup",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Special Effects Equipment",
                "value": true
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Studio Packages",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Basic Packages",
                    "itemListElement": ["Silver Package", "Gold Package"]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Premium Packages",
                    "itemListElement": ["Diamond Package", "Premium Package"]
                }
            ]
        }
    }
});