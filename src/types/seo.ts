export interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    jsonLd?: Record<string, any>;
}