import z from 'zod';

export const registerFormSchema = z
  .object({
    name: z.string().min(1, 'Name must be required'),
    email: z.email('Please enter a valid email address'),
    address: z.string().optional(),
    dob: z.string().optional(),
    password: z
      .string('Password must be required')
      .min(6, 'Password must be at least 6 characters long')
      .max(20, 'Password must be at most 20 characters long'),
    confirmPassword: z
      .string('Confirm Password must be required')
      .min(6, 'Confirm Password must be at least 6 characters long')
      .max(20, 'Confirm Password must be at most 20 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Passwords do not match',
    path: ['confirmPassword'],
  });
