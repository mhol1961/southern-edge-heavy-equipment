import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Valid email is required").max(255),
  phone: z.string().max(50).optional(),
  company: z.string().max(255).optional(),
  inquiryType: z.string().min(1, "Inquiry type is required").max(100),
  message: z.string().max(5000).optional(),
  details: z.string().max(5000).optional(),
  source: z.string().max(100).optional(),
  equipmentId: z.string().max(100).optional(),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Valid email is required").max(255),
  phone: z.string().max(50).optional(),
  company: z.string().max(255).optional(),
  inquiryType: z.string().min(1).max(100),
  details: z.string().max(5000).optional(),
  hearAbout: z.string().max(100).optional(),
});

export const submissionSchema = z.object({
  contactName: z.string().min(1, "Contact name is required").max(255),
  phone: z.string().min(1, "Phone is required").max(50),
  email: z.string().email("Valid email is required").max(255),
  company: z.string().max(255).optional(),
  equipmentType: z.string().min(1, "Equipment type is required").max(100),
  category: z.string().max(100).optional(),
  year: z.string().max(10).optional(),
  make: z.string().min(1, "Make is required").max(100),
  model: z.string().min(1, "Model is required").max(100),
  hours: z.string().max(50).optional(),
  serialNumber: z.string().max(100).optional(),
  vinNumber: z.string().max(100).optional(),
  condition: z.string().min(1, "Condition is required").max(50),
  location: z.string().min(1, "Location is required").max(255),
  desiredPrice: z.string().max(100).optional(),
  description: z.string().min(1, "Description is required").max(10000),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type SubmissionInput = z.infer<typeof submissionSchema>;
