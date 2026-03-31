"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSchema = exports.BookingSchema = exports.LeadSchema = void 0;
const zod_1 = require("zod");
// ==========================================
// SCHEMAS
// ==========================================
exports.LeadSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    location: zod_1.z.string().min(1, "Location is required"),
    requirement: zod_1.z.string().optional(),
});
exports.BookingSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    phone: zod_1.z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
    address: zod_1.z.string().min(1, "Address is required"),
    date: zod_1.z.string().optional(),
});
exports.ContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name is required"),
    phone: zod_1.z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
    email: zod_1.z.string().email("Invalid email address"),
    address: zod_1.z.string().min(5, "Address is required"),
    message: zod_1.z.string().optional(),
});
