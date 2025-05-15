// src/pages/api/gallery.js
import { ImageKit } from 'imagekit';

export async function get() {
    const imagekit = new ImageKit({
        publicKey: "public_OjKQWghHMkMCijHPSAf/AoMCsDA=",
        urlEndpoint: "https://ik.imagekit.io/c54qkthzl",
        privateKey: "private_57dKW0madJJT1hobnekFZJ75MtI=",
    });

    try {
        // Fetch all images from your ImageKit account
        const images = await imagekit.listFiles({
            limit: 100, // Adjust based on your needs
            skip: 0,
            sort: "DESC_CREATED", // Show newest first
        });

        // Process the images
        const processedImages = images.map(image => {
            // Extract category from tags or file path
            let category = "other";

            if (image.tags && image.tags.length > 0) {
                // Use the first tag as category if available
                category = image.tags[0].toLowerCase();
            } else {
                // Try to extract category from file name
                const fileName = image.name.toLowerCase();
                if (fileName.includes("pre-wedding") || fileName.includes("prewedding")) {
                    category = "pre-wedding";
                } else if (fileName.includes("baby")) {
                    category = "baby-shoot";
                } else if (fileName.includes("anniversary")) {
                    category = "anniversary";
                } else if (fileName.includes("brand")) {
                    category = "brand-shoot";
                } else if (fileName.includes("maternity")) {
                    category = "maternity";
                }
            }

            // Determine aspect ratio based on image dimensions
            let aspectRatio = "landscape";
            if (image.height > image.width) {
                aspectRatio = "portrait";
            } else if (Math.abs(image.height - image.width) < 20) {
                aspectRatio = "square";
            }

            return {
                id: image.fileId,
                src: image.url,
                alt: image.customMetadata?.alt || image.name.replace(/[-_]/g, " "),
                category: category,
                aspectRatio: aspectRatio,
                createdAt: image.createdAt,
            };
        });

        return new Response(JSON.stringify(processedImages), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching images from ImageKit:", error);

        return new Response(JSON.stringify({
            error: "Failed to fetch images",
            message: error.message
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}