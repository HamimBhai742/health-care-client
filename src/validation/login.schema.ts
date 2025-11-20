import { z } from 'zod';

export const loginZodSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z
    .string('Password must be required')
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be at most 20 characters long'),
});
