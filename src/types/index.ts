export interface Equipment {
  id: string;
  slug: string;
  name: string;
  category: string;
  manufacturer: string;
  status: "in-stock" | "available" | "sold" | "coming-soon";
  price: string;
  description: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  images: string[];
  featured: boolean;
  stockNumber: string;
  year?: string;
  hours?: string;
  location?: string;
  listingType: "house" | "consignment";
  condition?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  itemCount: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  featuredImage: string;
  author: string;
}

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  message?: string;
  details?: Record<string, string>;
  source?: string;
  equipmentId?: string;
}

export interface EquipmentSubmission {
  contactName: string;
  phone: string;
  email: string;
  company?: string;
  equipmentType: string;
  category?: string;
  year?: string;
  make: string;
  model: string;
  hours?: string;
  serialNumber?: string;
  vinNumber?: string;
  condition: string;
  location: string;
  desiredPrice?: string;
  description: string;
  images: File[];
}
