const express = require('express');
const router = express.Router();
const { z } = require('zod');

// Simulated Database (Fallback if Postgres is not running)
const db = {
  leads: [],
  bookings: []
};

// Validation Schemas
const LeadSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  requirement: z.string().optional(),
});

const BookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Invalid 10-digit phone number"),
  address: z.string().min(1, "Address is required"),
  date: z.string().optional(),
});

// CREATE Lead
router.post('/leads', (req, res) => {
  try {
    const data = LeadSchema.parse(req.body);
    const lead = { id: Date.now(), ...data, created_at: new Date() };
    db.leads.push(lead);
    res.status(201).json({ success: true, lead });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: "Server Error" });
  }
});

// READ Leads (for Admin)
router.get('/leads', (req, res) => {
  res.json(db.leads);
});

// CREATE Booking
router.post('/bookings', (req, res) => {
  try {
    const data = BookingSchema.parse(req.body);
    const booking = { id: Date.now(), ...data, status: 'pending', created_at: new Date() };
    db.bookings.push(booking);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: "Server Error" });
  }
});

// READ Bookings (for Admin)
router.get('/bookings', (req, res) => {
  res.json(db.bookings);
});

module.exports = router;
