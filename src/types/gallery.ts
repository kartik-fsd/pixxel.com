export interface GalleryItem {
    id: string;
    type: "photo" | "video";
    imageUrl: string;
    thumbnailUrl?: string;
    title: string;
    category: string;
    description: string;
    location?: string;
    photographer?: string;
    dateCreated?: string;
    tags?: string[];
    dimensions?: {
        width: number;
        height: number;
    };
    metadata?: {
        camera?: string;
        lens?: string;
        settings?: string;
    };
}

export interface GallerySection {
    title: string;
    description: string;
    categories: string[];
    items: GalleryItem[];
}