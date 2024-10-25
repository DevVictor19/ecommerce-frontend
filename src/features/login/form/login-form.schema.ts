import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).max(20).trim(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
