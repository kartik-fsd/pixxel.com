import type { SEOProps } from '../types/seo';
import { defaultSEO } from '.';

export function createSEO(pageSEO: Partial<SEOProps>): SEOProps {
    if (!pageSEO) return defaultSEO;

    return {
        ...defaultSEO,
        ...pageSEO,
        jsonLd: pageSEO.jsonLd
            ? { ...defaultSEO.jsonLd, ...pageSEO.jsonLd }
            : defaultSEO.jsonLd
    };
}