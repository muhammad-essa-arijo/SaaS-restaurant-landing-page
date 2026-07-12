export const RESTAURANT_DATA = {
  name: "Luxe Restaurant",
  tagline: "Premium Fine Dining Experience",
  description: "Experience culinary excellence with our award-winning chef",
  phone: "+1 (555) 123-4567",
  email: "reservations@luxerestaurant.com",
  address: "123 Culinary Lane, Gourmet City, GC 12345",
  hours: {
    monday: "Closed",
    tuesday: "5:00 PM - 11:00 PM",
    wednesday: "5:00 PM - 11:00 PM",
    thursday: "5:00 PM - 11:00 PM",
    friday: "5:00 PM - 12:00 AM",
    saturday: "12:00 PM - 12:00 AM",
    sunday: "12:00 PM - 10:00 PM",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedIn: "https://linkedin.com",
  },
  coordinates: {
    lat: 40.7128,
    lng: -74.006,
  },
};

export const NAVIGATION = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: "premium-dining",
    title: "Premium Dining",
    description:
      "Indulge in our meticulously crafted tasting menu featuring seasonal ingredients and innovative techniques.",
    icon: "Utensils",
  },
  {
    id: "private-events",
    title: "Private Events",
    description:
      "Host your special celebration in our elegant private dining rooms with personalized service.",
    icon: "Users",
  },
  {
    id: "wedding-catering",
    title: "Wedding Catering",
    description:
      "Make your wedding day unforgettable with our bespoke catering and culinary excellence.",
    icon: "Heart",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description:
      "Elevate your corporate gathering with sophisticated cuisine and professional service.",
    icon: "Briefcase",
  },
  {
    id: "chefs-table",
    title: "Chef's Table",
    description:
      "Experience dining at its finest at our exclusive chef's table with personalized menu creation.",
    icon: "Crown",
  },
  {
    id: "home-delivery",
    title: "Home Delivery",
    description:
      "Enjoy our restaurant-quality meals delivered to your home with our premium delivery service.",
    icon: "Truck",
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Appetizers",
  "Main Courses",
  "Desserts",
  "Beverages",
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Seared Scallops",
    category: "Appetizers",
    description: "Pan-seared scallops with citrus beurre blanc",
    price: "$18",
    rating: 4.8,
    popular: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNJoDA5EMH30KbHfREojMzECod1oL71-lWUdwDm073Q&s=10",
  },
  {
    id: 2,
    name: "Beef Wellington",
    category: "Main Courses",
    description: "Tender beef loin wrapped in mushroom duxelle and pastry",
    price: "$42",
    rating: 4.9,
    popular: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgbCSd3qSwQo5M1HseuTJkoqX36R6b9ehNypTtGmMuhsHCPUGbzpnJkE&s=10",
  },
  {
    id: 3,
    name: "Lobster Bisque",
    category: "Appetizers",
    description: "Creamy lobster bisque with crispy croutons",
    price: "$16",
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6V_KWmynajpm3y3BY1YH3_-_RWsCFy5v1rVHuvdvERveE1p5M5aYytc&s=10",
  },
  {
    id: 4,
    name: "Filet Mignon",
    category: "Main Courses",
    description: "Premium 8oz filet with truffle jus and seasonal vegetables",
    price: "$48",
    rating: 4.9,
    popular: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5JFTWvDo73_tdwG0U4-Ic6JynINk488zxF696s7FrA&s=10",
  },
  {
    id: 5,
    name: "Chocolate Decadence",
    category: "Desserts",
    description: "Rich chocolate cake with hazelnut mousse",
    price: "$12",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Pan-Seared Salmon",
    category: "Main Courses",
    description: "Atlantic salmon with lemon butter and asparagus",
    price: "$38",
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDjHf2Zf9MQo0f_BANvD4kE18ae7W_9q99swc5vL_uYQ&s=10",
  },
];

export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Classic Dining",
    price: "$49",
    period: "per person",
    description: "Perfect for a memorable evening",
    features: [
      "3-course meal",
      "Welcome cocktail",
      "Table for 2",
      "Standard seating",
      "Wine pairing optional",
    ],
    cta: "Reserve Now",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Experience",
    price: "$89",
    period: "per person",
    description: "Our most popular choice",
    features: [
      "5-course tasting menu",
      "Welcome cocktail & appetizer",
      "Best seating available",
      "Wine or beverage pairing",
      "Chef's special course",
      "Customizable menu",
    ],
    cta: "Reserve Now",
    popular: true,
  },
  {
    id: "vip",
    name: "VIP Membership",
    price: "$999",
    period: "per month",
    description: "For true fine dining enthusiasts",
    features: [
      "4 exclusive dining experiences",
      "Chef's table access",
      "Complimentary wine pairings",
      "Priority reservations",
      "Special member-only events",
      "Personalized menu creation",
      "Private chef consultations",
    ],
    cta: "Join Now",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Critic",
    content:
      "An absolutely exceptional dining experience. Every course was a masterpiece of flavor and presentation.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Restaurant Enthusiast",
    content:
      "The perfect blend of innovation and tradition. The service was impeccable and the food simply divine.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Event Planner",
    content:
      "Hosted our corporate gala here. The team made everything seamless and our guests raved about the food.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What are your operating hours?",
    answer:
      "We're open Tuesday through Thursday from 5 PM - 11 PM, Friday from 5 PM - 12 AM, Saturday from 12 PM - 12 AM, and Sunday from 12 PM - 10 PM. We're closed Mondays.",
  },
  {
    id: 2,
    question: "Do you offer vegetarian options?",
    answer:
      "Absolutely! We offer creative vegetarian and vegan options for every course. Please let us know in advance so our chef can prepare something special.",
  },
  {
    id: 3,
    question: "Can I make dietary accommodations?",
    answer:
      "Yes, we accommodate allergies and dietary preferences. Please mention them when booking your reservation.",
  },
  {
    id: 4,
    question: "What's your cancellation policy?",
    answer:
      "We require 48 hours notice for cancellations. Cancellations within 24 hours may incur a charge.",
  },
  {
    id: 5,
    question: "Do you offer private dining?",
    answer:
      "Yes! We have beautiful private dining rooms available for special occasions and corporate events.",
  },
  {
    id: 6,
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks in advance, but we'll do our best to accommodate walk-ins on availability.",
  },
];

export const STATS = [
  { label: "Years of Excellence", value: "15", icon: "Award" },
  { label: "Michelin Stars", value: "2", icon: "Star" },
  { label: "Happy Guests", value: "10K+", icon: "Users" },
  { label: "Menu Items", value: "50+", icon: "Book" },
];
