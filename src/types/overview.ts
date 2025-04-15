export interface Venue {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    features: string[];
    images: {
        url: string;
        alt: string;
    }[];
    pricing: {
        hourly: string;
        halfDay: string;
        fullDay: string;
    };
    amenities: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}
