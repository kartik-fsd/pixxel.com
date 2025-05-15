import type { SEOProps } from '../types/seo';
import { createSEO } from './utils';



export const gallerySEO: SEOProps = createSEO({
    title: "Premium Photography Sets | Pixxel City Nagpur",
    description: "Explore Pixxel City's exclusive photography and videography sets in Nagpur. Premium locations for pre-wedding shoots, fashion photography, and professional video production.",
    keywords: "photography studio nagpur, photo shoot locations, pre-wedding shoot sets, fashion photography sets, video production locations, premium photo studio, pixxel city",
    ogImage: "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg",
    jsonLd: {
        "@type": "LocalBusiness",
        "name": "Pixxel City Photography Sets Gallery",
        "description": "Premium photography and videography sets in Nagpur",
        "image": [
            "https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg",
            "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
        ]
    }
});