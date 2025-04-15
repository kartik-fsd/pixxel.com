import { Camera, Heart, Users, Baby, Cake, Building, Briefcase, ShoppingBag, Music, Star } from "lucide-react";

// Define services interface
interface Service {
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
        image: "https://images.pexels.com/photos/29187298/pexels-photo-29187298/free-photo-of-stylish-couple-in-retro-inspired-toronto-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Heart,
        features: ["Multiple Themed Sets", "Professional Lighting", "Costume Options", "Expert Guidance"]
    },
    {
        id: 2,
        slug: "anniversary-shoot",
        title: "Anniversary Shoot",
        description: "Celebrate your love story with a beautiful anniversary photoshoot in our themed settings.",
        image: "https://media.istockphoto.com/id/1464025274/photo/happy-smiling-couple-holding-hands-by-looking-at-camera-during-candle-light-dinner-at-home.jpg?s=1024x1024&w=is&k=20&c=mA2cdN4eU7BB9bL0tX8DhAqwdz9TtXwDLKOhWYFR2OA=",
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
        image: "https://images.pexels.com/photos/216489/pexels-photo-216489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Building,
        features: ["Commercial Sets", "Product Display", "Brand Integration", "High Resolution"]
    },
    {
        id: 5,
        slug: "music-video",
        title: "Music Video",
        description: "Create stunning music videos with our professional sets and lighting equipment.",
        image: "https://images.pexels.com/photos/3045398/pexels-photo-3045398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Music,
        features: ["Multiple Locations", "Lighting Effects", "Sound Setup", "Green Screen"]
    },
    {
        id: 6,
        slug: "celebrity",
        title: "Celebrity Shoot",
        description: "Premium photography services for celebrity portfolios and promotional content.",
        image: "https://images.pexels.com/photos/6363874/pexels-photo-6363874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        icon: Star,
        features: ["Private Studio", "VIP Treatment", "Exclusive Sets", "Professional Team"]
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