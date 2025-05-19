// utils.ts
import type { SEOProps } from '../types/seo';
// Import defaultSEO more safely to avoid circular dependencies
import { defaultSEO } from './index';

export function createSEO(pageSEO?: Partial<SEOProps>): SEOProps {
    // Handle completely undefined pageSEO
    if (!pageSEO) return { ...defaultSEO };

    // Use optional chaining to safely access jsonLd
    return {
        ...defaultSEO,
        ...pageSEO,
        jsonLd: pageSEO?.jsonLd
            ? { ...(defaultSEO?.jsonLd || {}), ...(pageSEO.jsonLd || {}) }
            : (defaultSEO?.jsonLd || {})
    };
}