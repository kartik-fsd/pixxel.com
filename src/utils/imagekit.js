// src/utils/imageKitApi.js

/**
 * Simple utility for fetching images from ImageKit API
 */
export async function fetchImagesFromImageKit() {
    try {
        const url = 'https://api.imagekit.io/v1/files';
        const auth = Buffer.from(`${import.meta.env.IMAGEKIT_PRIVATE_KEY}:`, 'utf-8').toString('base64');

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`ImageKit API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching from ImageKit:', error);
        return []; // Return empty array as fallback
    }
}

/**
 * Generate ImageKit URL with transformations
 */
export function getImageKitUrl(path, transformations = {}) {
    const urlEndpoint = import.meta.env.PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/c54qkthzl';

    // Build transformation string
    const transformParams = Object.entries(transformations)
        .map(([key, value]) => `${key}-${value}`)
        .join(',');

    const transformPath = transformParams ? `tr:${transformParams}/` : '';

    return `${urlEndpoint}/${transformPath}${path}`;
}