import { z } from 'zod';

import { removeSpecialCharacters } from '@/utils/masks';
import { isValidMonth, isValidYear } from '@/utils/validation';

const cardSchema = z.object({
  holderName: z.string().min(3).max(55).transform(removeSpecialCharacters),
  number: z.string().length(19).transform(removeSpecialCharacters),
  expiryMonth: z
    .string()
    .length(2)
    .transform(removeSpecialCharacters)
    .refine(isValidMonth),
  expiryYear: z
    .string()
    .length(4)
    .transform(removeSpecialCharacters)
    .refine((str) => isValidYear(str, 2026, 2050)),
  ccv: z.string().length(3).transform(removeSpecialCharacters),
});

export const payWithCreditCardSchema = z.object({
  document: z.string().length(14).transform(removeSpecialCharacters),
  parcels: z.string().transform(Number),
  card: cardSchema,
});

export type PayWithCreditCardSchema = z.infer<typeof payWithCreditCardSchema>;
