import type { SEOProps } from '../types/seo';
import { createSEO } from './utils';


export const venueSEO: SEOProps = createSEO({
    title: "Premium Photography Sets| Pixxel City Nagpur",
    description: "Explore our diverse collection of premium photography sets in Nagpur - from luxury indoor studios to themed outdoor locations. Featuring Light Room, Mexican Street, Royale Touch, and more unique settings.",
    keywords: "photography sets nagpur, photo shoot locations, themed photography sets, indoor photo studio, outdoor photography sets, luxury photo sets, pixxel city sets, pre-wedding shoot locations nagpur",
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        "name": "Pixxel City Photography Sets",
        "description": "Premium photography and videography sets in Nagpur",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Pixxel City",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        },
        "workExample": [
            {
                "@type": "CreativeWork",
                "name": "Light Room",
                "description": "Professional studio with state-of-the-art lighting equipment",
                "image": "https://pixxelcity.com/wp-content/uploads/2024/05/Sumit-Zoting-photography-1.jpg",
                "offers": {
                    "@type": "Offer",
                    "price": "150",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "CreativeWork",
                "name": "Mexican Street",
                "description": "Authentic Mexican-inspired outdoor setting",
                "image": "https://pixxelcity.com/wp-content/uploads/2023/03/IMG-20230114-WA0061.jpg",
                "offers": {
                    "@type": "Offer",
                    "price": "200",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "CreativeWork",
                "name": "Royale Touch",
                "description": "Elegant and sophisticated royal-themed setting",
                "image": "https://pixxelcity.com/wp-content/uploads/2024/05/Royal-touch-5.jpeg",
                "offers": {
                    "@type": "Offer",
                    "price": "250",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock"
                }
            }
        ],
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Indoor Sets",
                "description": "Professional indoor studios with controlled lighting and premium equipment",
                "numberOfItems": 2
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Themed Sets",
                "description": "Unique themed photography locations for creative shoots",
                "numberOfItems": 2
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Luxury Sets",
                "description": "High-end photography sets with premium amenities",
                "numberOfItems": 1
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Outdoor Sets",
                "description": "Natural light photography locations with scenic backdrops",
                "numberOfItems": 1
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Professional Lighting",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Climate Control",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Makeup Room",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Props Available",
                "value": true
            }
        ],
        "potentialAction": {
            "@type": "BookAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pixxelcity.com/contact",
                "inLanguage": "en-IN",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "name": "Photography Set Booking"
            }
        }
    }
});