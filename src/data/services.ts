import type { Service } from './types';

export const services: Service[] = [
  {
    id: "signature-haircut",
    name: "Signature Haircut",
    category: "Hair",
    price: 1200,
    duration: "60–75 min",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
    description: "A personalized precision haircut tailored to your face shape, hair texture, and lifestyle. Includes a thorough consultation, relaxing wash, and a signature blowout.",
    includes: [
      "Personalized Consultation",
      "Nourishing Hair Wash",
      "Precision Cut",
      "Signature Blow Dry",
      "Finishing Style"
    ],
    recommendedFor: [
      "All hair types",
      "Regular maintenance",
      "Complete style refresh"
    ]
  },
  {
    id: "global-color",
    name: "Global Hair Color",
    category: "Color",
    price: 2500,
    duration: "90–120 min",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
    description: "A rich, dimensional all-over color application to enhance your natural hue or completely transform your look.",
    includes: [
      "Color Consultation",
      "Custom Color Formulation",
      "Full Application",
      "Color-Safe Wash",
      "Basic Styling"
    ],
    recommendedFor: [
      "Covering grays",
      "Enhancing natural color",
      "Complete color change"
    ]
  },
  {
    id: "balayage",
    name: "Balayage & Highlights",
    category: "Color",
    price: 4500,
    duration: "150–180 min",
    image: "https://images.unsplash.com/photo-1620608552178-0e3184ebc93b?auto=format&fit=crop&q=80&w=1000",
    description: "Hand-painted highlights for a seamless, sun-kissed, and low-maintenance look.",
    includes: [
      "In-depth Consultation",
      "Custom Hand-Painting",
      "Toning & Glossing",
      "Restorative Treatment",
      "Signature Styling"
    ],
    recommendedFor: [
      "Sun-kissed dimension",
      "Low-maintenance color",
      "Adding texture and depth"
    ]
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment",
    category: "Treatments",
    price: 3500,
    duration: "120–150 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000",
    description: "A smoothing treatment that eliminates frizz, improves manageability, and adds intense shine for months.",
    includes: [
      "Clarifying Wash",
      "Keratin Application",
      "Heat Activation",
      "Finishing Blowout"
    ],
    recommendedFor: [
      "Frizzy or unruly hair",
      "Reducing styling time",
      "Adding incredible shine"
    ]
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Makeup",
    price: 8000,
    duration: "120–180 min",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
    description: "A flawless, long-lasting makeup application designed specifically for your wedding day, ensuring you look stunning both in person and on camera.",
    includes: [
      "Pre-wedding Consultation",
      "Skin Prep & Prime",
      "HD/Airbrush Makeup",
      "Premium Lashes",
      "Setting Spray"
    ],
    recommendedFor: [
      "Brides",
      "Wedding receptions"
    ]
  },
  {
    id: "luxury-mani-pedi",
    name: "Luxury Mani & Pedi",
    category: "Nails",
    price: 1500,
    duration: "60–90 min",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=1000",
    description: "A restorative hand and foot treatment including nail shaping, cuticle care, exfoliation, massage, and polish application.",
    includes: [
      "Nail Shaping",
      "Cuticle Care",
      "Sugar Scrub Exfoliation",
      "Relaxing Massage",
      "Polish Application"
    ],
    recommendedFor: [
      "Regular maintenance",
      "Self-care days",
      "Special occasions"
    ]
  }
];
