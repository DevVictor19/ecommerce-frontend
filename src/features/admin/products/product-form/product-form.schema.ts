import { z } from 'zod';

export const productFormSchema = z.object({
  price: z
    .string()
    .refine((num) => parseFloat(num) > 0, 'Price should be a positive value'),
  name: z.string().min(4).max(100).trim(),
  description: z.string().min(4).max(100).trim(),
  photoUrl: z.string().url().trim(),
  stockQuantity: z
    .string()
    .refine((num) => Number(num) > 0, 'Stock Qnt should be a positive value'),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;
