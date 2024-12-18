import type { LucideIcon } from 'lucide-react';
import { Camera, Heart, Baby, Building, Star, Music } from 'lucide-react';

export const CONTACT = {
    phone: '6261180073',
    email: 'info@pixxelcity.in',
    address: 'Nagpur, Maharashtra, India',
    social: {
        instagram: 'https://instagram.com/pixxelcity',
        facebook: 'https://facebook.com/pixxelcity',
    }
};

export const COMPANY = {
    name: 'Pixxel City',
    tagline: 'Premium Photography Studio in Nagpur',
    // Alternative options:
    // 'Crafting Magical Moments in Premium Photography Sets'
    // 'Nagpur's Elite Photography Set Experience'
    // 'Your Story, Our Signature Sets'
    //'Where Dreams Transform Into Timeless Frames
    description: 'We provide mesmerizing sets and quirky props for both indoor and outdoor shoots, bringing your dreams to life.',
};



interface Service {
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    slug: string;
    features: string[];
}


export const SERVICES: Service[] = [
    {
        title: 'Pre-Wedding Shoot',
        description: 'Capture the magic and romance of your upcoming marriage with stunning pre-wedding photoshoots.',
        icon: Heart,
        features: ['Multiple Themed Sets', 'Professional Lighting', 'Costume Options', 'Expert Guidance'],
        image: 'https://images.pexels.com/photos/29187298/pexels-photo-29187298/free-photo-of-stylish-couple-in-retro-inspired-toronto-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        slug: 'pre-wedding',
    },
    {
        title: 'Anniversary Shoot',
        description: 'Celebrate your love story with a beautiful anniversary photoshoot in our themed settings.',
        icon: Camera,
        features: ['Romantic Setups', 'Mood Lighting', 'Props Included', 'Flexible Timing'],
        image: 'https://media.istockphoto.com/id/1464025274/photo/happy-smiling-couple-holding-hands-by-looking-at-camera-during-candle-light-dinner-at-home.jpg?s=1024x1024&w=is&k=20&c=mA2cdN4eU7BB9bL0tX8DhAqwdz9TtXwDLKOhWYFR2OA=',
        slug: 'anniversary',
    },
    {
        title: 'Maternity Shoot',
        description: 'Document your beautiful journey into motherhood with our specialized maternity photography.',
        icon: Baby,
        features: ['Comfortable Environment', 'Safe Props', 'Multiple Outfits', 'Natural Lighting'],
        image: "https://images.pexels.com/photos/18151037/pexels-photo-18151037/free-photo-of-man-hugging-pregnant-woman-in-pink-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        slug: "maternity"
    },
    {
        title: 'Brand Shoot',
        description: 'Professional brand photography to elevate your business presence and marketing materials.',
        icon: Building,
        features: ['Commercial Sets', 'Product Display', 'Brand Integration', 'High Resolution'],
        image: "https://images.pexels.com/photos/216489/pexels-photo-216489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        slug: "brand"
    },
    {
        title: 'Music Video',
        description: 'Create stunning music videos with our professional sets and lighting equipment.',
        icon: Music,
        features: ['Multiple Locations', 'Lighting Effects', 'Sound Setup', 'Green Screen'],
        image: "https://images.pexels.com/photos/3045398/pexels-photo-3045398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        slug: "music-video"
    },
    {
        title: 'Celebrity Shoot',
        description: 'Premium photography services for celebrity portfolios and promotional content.',
        icon: Star,
        features: ['Private Studio', 'VIP Treatment', 'Exclusive Sets', 'Professional Team'],
        image: "https://images.pexels.com/photos/6363874/pexels-photo-6363874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        slug: "celebrity"
    },
];