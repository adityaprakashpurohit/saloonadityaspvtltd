export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  includes: string[];
  recommendedFor: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
  services: string[];
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  serviceBooked: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  category: string;
  alt: string;
}
