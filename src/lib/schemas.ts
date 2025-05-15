import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional(), // Basic spam protection
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;


export const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  selectedPackage: z.string().min(1, {message: "Please select a package."}),
  preferredDate: z.date({ required_error: "Please select a preferred date." }),
  preferredTime: z.string().min(1, {message: "Please suggest a preferred time."}),
  message: z.string().min(10, { message: "Please provide some details about your needs (at least 10 characters)." }).optional(),
  honeypot: z.string().optional(),
});
export type BookingFormValues = z.infer<typeof bookingFormSchema>;
