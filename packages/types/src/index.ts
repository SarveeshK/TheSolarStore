import { z } from 'zod';

// ==========================================
// SCHEMAS
// ==========================================

export const LeadSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  requirement: z.string().optional(),
});

export const BookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
  address: z.string().min(1, "Address is required"),
  date: z.string().optional(),
});

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  message: z.string().optional(),
});

// ==========================================
// TYPES
// ==========================================

export type LeadDTO = z.infer<typeof LeadSchema>;
export type BookingDTO = z.infer<typeof BookingSchema>;
export type ContactDTO = z.infer<typeof ContactSchema>;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string | any;
}
