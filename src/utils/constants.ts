// src/utils/constants.ts
import { Camera, Heart, Baby, Building, Music, Star } from "lucide-react";

// Define services interface
export interface Service {
    id?: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    icon: any; // LucideIcon type
    features: string[];
}

// Export services with updated data
export const SERVICES: Service[] = [
    {
        id: 1,
        slug: "pre-wedding",
        title: "Pre-Wedding Shoot",
        description: "Capture the magic and romance of your upcoming marriage with stunning pre-wedding photoshoots.",
        image: "https://ik.imagekit.io/c54qkthzl/Dark-Room-3.jpg",
        icon: Heart,
        features: ["Multiple Themed Sets", "Professional Lighting", "Costume Options", "Expert Guidance"]
    },
    {
        id: 2,
        slug: "anniversary-shoot",
        title: "Anniversary Shoot",
        description: "Celebrate your love story with a beautiful anniversary photoshoot in our themed settings.",
        image: "https://ik.imagekit.io/c54qkthzl/Date-Night-2.JPG",
        icon: Camera,
        features: ["Romantic Setups", "Mood Lighting", "Props Included", "Flexible Timing"]
    },
    {
        id: 3,
        slug: "maternity",
        title: "Maternity Shoot",
        description: "Document your beautiful journey into motherhood with our specialized maternity photography.",
        image: "https://images.pexels.com/photos/18151037/pexels-photo-18151037/free-photo-of-man-hugging-pregnant-woman-in-pink-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Baby,
        features: ["Comfortable Environment", "Safe Props", "Multiple Outfits", "Natural Lighting"]
    },
    {
        id: 4,
        slug: "brand-shoot",
        title: "Brand Shoot",
        description: "Professional brand photography to elevate your business presence and marketing materials.",
        image: "https://ik.imagekit.io/c54qkthzl/tr:w-1920,h-1080/Santorini-brand_shoot.jpg?updatedAt=1747122172255",
        icon: Building,
        features: ["Commercial Sets", "Product Display", "Brand Integration", "High Resolution"]
    },
    {
        id: 5,
        slug: "baby-shoot",
        title: "Baby Shoot",
        description: "Adorable and professional photography sessions to capture your baby's precious moments.",
        image: "https://ik.imagekit.io/c54qkthzl/Lighthouse-6.JPG?updatedAt=1737905436997",
        icon: Star,
        features: ["Cute Props", "Safe Environment", "Gentle Lighting", "Experienced Photographers"]
    },
    {
        id: 6,
        slug: "music-video",
        title: "Music Video",
        description: "Professional sets and backdrops for music video production with premium lighting and effects.",
        image: "https://images.pexels.com/photos/3045398/pexels-photo-3045398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Music,
        features: ["Multiple Themed Sets", "Special Lighting Effects", "Sound Setup", "Green Screen Available"]
    }
];

// Company information
export const COMPANY = {
    name: "Pixxel City Studio",
    tagline: "Premium Photography Studio in Nagpur",
    description: "Pixxel City is Nagpur's premier photography studio offering innovative themed setups for memorable photoshoots. We specialize in creating unique visual experiences for pre-wedding, anniversary, family portraits and more.",
    founded: 2021,
    experience: "5+ years",
    photoshoots: "500+",
    happyClients: "300+"
};

// Contact information
export const CONTACT = {
    address: "Back Side Of Advani Dhaba, Pixxel City, Umred Rd, Wadegaon (kale), Maharashtra 441204",
    phone: "6261180073",
    email: "d.aakruti@yahoo.com",
    instagram: "https://www.instagram.com/pixxelcity",
    facebook: "https://www.facebook.com/pixxelcity",
    workingHours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "10:00 AM - 4:00 PM",
        sunday: "Closed"
    }
};

// Define and export pricing packages
export const PACKAGES = [
    {
        name: "Silver",
        price: { morning: "₹6,000", evening: "₹8,000" },
        duration: "4 Hour Shoot",
        features: [
            "Basic Studio Access",
            "Changing Room Access",
            "Standard Lighting",
            "Location Access",
        ]
    },
    {
        name: "Gold",
        price: "₹10,000*",
        duration: "6 Hour Shoot",
        features: [
            "Full Studio Access",
            "Props Included",
            "Special Effects",
            "Premium Lighting",
            "All Location Access",
        ],
        popular: true
    },
    {
        name: "Diamond",
        price: "₹12,000*",
        duration: "8 Hour Shoot",
        features: [
            "Premium Studio Access",
            "All Props & Equipment",
            "Special Effects",
            "Premium Lighting",
            "VIP Treatment",
        ]
    },
    {
        name: "Premium",
        price: "₹16,000*",
        duration: "12 Hour Shoot",
        features: [
            "Professional Props & Equipment",
            "Dedicated Changing/Make-Up Room",
            "Smoke Machine & Effects",
            "Premium Lighting Setup",
            "Access to All Sets & Locations",
        ]
    }
];

// Additional notes for packages
export const PACKAGE_NOTES = [
    "Extra Room: ₹1,000 per room",
    "24 Water bottles (300ml) included",
    "Maximum 8 people per booking",
    "₹1,000 per additional person",
    "Photographer not included",
    "₹2,000 refundable security deposit",
];