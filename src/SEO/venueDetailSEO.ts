import type { SEOProps } from '../types/seo';
import { createSEO } from './utils';


interface SetDetailProps {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    features: string[];
    specifications: {
        duration: string;
        capacity: string;
        equipment: string;
    };
    images: Array<{
        url: string;
        alt: string;
    }>;
    pricing: {
        hourly: string;
        halfDay: string;
        fullDay: string;
    };
    amenities: string[];
}

export const createSetDetailSEO = (set: SetDetailProps): SEOProps => {
    return createSEO({
        title: `${set.title} - Premium Photography Set | Pixxel City Nagpur`,
        description: `${set.description} Professional ${set.category} photography set featuring ${set.features.slice(0, 3).join(', ')}. Book now at Pixxel City Nagpur.`,
        keywords: `${set.title.toLowerCase()}, ${set.category.toLowerCase()} photography set, photo studio nagpur, ${set.features.join(', ').toLowerCase()}, photography venue nagpur, pixxel city ${set.id}`,
        ogImage: set.images[0].url,
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": `${set.title} - Pixxel City Photography Set`,
            "description": set.description,
            "image": set.images.map(img => img.url),
            "@id": `https://pixxelcity.com/sets/${set.id}`,
            "url": `https://pixxelcity.com/sets/${set.id}`,
            "telephone": "+91-YOUR-PHONE",
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
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            "amenityFeature": [
                ...set.amenities.map(amenity => ({
                    "@type": "LocationFeatureSpecification",
                    "name": amenity,
                    "value": true
                })),
                ...set.features.map(feature => ({
                    "@type": "LocationFeatureSpecification",
                    "name": feature,
                    "value": true
                }))
            ],
            "offers": {
                "@type": "AggregateOffer",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Hourly Rate",
                        "price": set.pricing.hourly.replace('$', ''),
                        "priceCurrency": "USD",
                        "unitText": "HOUR",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Half Day Rate",
                        "price": set.pricing.halfDay.replace('$', ''),
                        "priceCurrency": "USD",
                        "unitText": "DAY",
                        "availability": "https://schema.org/InStock"
                    },
                    {
                        "@type": "Offer",
                        "name": "Full Day Rate",
                        "price": set.pricing.fullDay.replace('$', ''),
                        "priceCurrency": "USD",
                        "unitText": "DAY",
                        "availability": "https://schema.org/InStock"
                    }
                ],
                "priceCurrency": "USD",
                "priceRange": `${set.pricing.hourly} - ${set.pricing.fullDay}`
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "name": "Category",
                    "value": set.category
                },
                {
                    "@type": "PropertyValue",
                    "name": "Maximum Capacity",
                    "value": set.specifications.capacity
                },
                {
                    "@type": "PropertyValue",
                    "name": "Equipment",
                    "value": set.specifications.equipment
                }
            ],
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.8",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Organization",
                    "name": "Pixxel City"
                }
            }
        }
    });
};