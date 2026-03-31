import { z } from 'zod';
export declare const LeadSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    location: z.ZodString;
    requirement: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    location: string;
    name?: string | undefined;
    phone?: string | undefined;
    requirement?: string | undefined;
}, {
    location: string;
    name?: string | undefined;
    phone?: string | undefined;
    requirement?: string | undefined;
}>;
export declare const BookingSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    address: z.ZodString;
    date: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    address: string;
    phone: string;
    date?: string | undefined;
}, {
    name: string;
    address: string;
    phone: string;
    date?: string | undefined;
}>;
export declare const ContactSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    address: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    address: string;
    email: string;
    phone: string;
    message?: string | undefined;
}, {
    name: string;
    address: string;
    email: string;
    phone: string;
    message?: string | undefined;
}>;
export type LeadDTO = z.infer<typeof LeadSchema>;
export type BookingDTO = z.infer<typeof BookingSchema>;
export type ContactDTO = z.infer<typeof ContactSchema>;
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string | any;
}
