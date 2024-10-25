import { z } from 'zod';

export const signupSchema = z.object({
  username: z.string().min(3).max(55).trim(),
  email: z.string().email().trim(),
  password: z.string().min(8).max(20).trim(),
});

export type SignupSchema = z.infer<typeof signupSchema>;
