const express = require('express');
const router = express.Router();
const { z } = require('zod');

// Simulated Database (Fallback if Postgres is not running)
const db = {
  leads: [],
  bookings: []
};

const normalizeOptionalString = (value) => {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed.length === 0 ? undefined : trimmed;
};

// Validation Schemas
const LeadSchema = z.object({
  name: z.preprocess(normalizeOptionalString, z.string().optional()),
  phone: z.preprocess(normalizeOptionalString, z.string().optional()),
  location: z.string().trim().min(1, 'Location is required'),
  requirement: z.preprocess(normalizeOptionalString, z.string().optional()),
});

const BookingSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  phone: z.string().trim().regex(/^\d{10}$/, 'Invalid 10-digit phone number'),
  address: z.string().trim().min(1, 'Address is required'),
  date: z.preprocess(normalizeOptionalString, z.string().optional()),
});

const formatZodError = (error) =>
  error.issues.map((issue) => ({
    path: issue.path.join('.'),
    message: issue.message,
  }));

// CREATE Lead
router.post('/leads', (req, res) => {
  try {
    const data = LeadSchema.parse(req.body);
    const lead = { id: Date.now(), ...data, created_at: new Date() };
    db.leads.push(lead);
    res.status(201).json({ success: true, lead });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: formatZodError(err) });
    }
    res.status(500).json({ error: 'Server Error' });
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
      return res.status(400).json({ error: formatZodError(err) });
    }
    res.status(500).json({ error: 'Server Error' });
  }
});

// READ Bookings (for Admin)
router.get('/bookings', (req, res) => {
  res.json(db.bookings);
});

const resetDb = () => {
  db.leads.length = 0;
  db.bookings.length = 0;
};

module.exports = {
  router,
  db,
  LeadSchema,
  BookingSchema,
  resetDb,
};
