import type { SEOProps } from '../types/seo';
import { defaultSEO } from './defaultSEO';
import { createSEO } from './utils';
export const mergeSEO = (pageSEO?: Partial<SEOProps>): SEOProps => {
    if (!pageSEO) return defaultSEO;
    return {
        ...defaultSEO,
        ...pageSEO,
        jsonLd: pageSEO.jsonLd
            ? { ...defaultSEO.jsonLd, ...pageSEO.jsonLd }
            : defaultSEO.jsonLd
    };
};

export { defaultSEO, createSEO };
export { gallerySEO } from './gallerySEO';
