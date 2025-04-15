import type { SEOProps } from '../types/seo';
import { createSEO } from './utils';


interface SetDetailProps {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    features: string[];
    images: Array<{
        url: string;
        alt: string;
    }>;
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