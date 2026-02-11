import { z } from "zod";

export const bookingSchema = z.object({
    // Step 1: Selection
    dateRange: z.object({
        from: z.date(),
        to: z.date(),
    }),
    packageId: z.string().min(1, "Please select a package"),
    guestCount: z.number().min(1, "At least one guest is required").max(10),

    // Step 2: Customization
    accommodation: z.enum(["dorm", "private", "none"]),
    airportPickup: z.boolean().default(false),
    dietaryPrefs: z.enum(["none", "vegetarian", "vegan", "gluten-free"]),

    // Step 3: Identity
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
