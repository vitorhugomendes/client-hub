import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactSchema = z.object({
  name: z.string().nonempty('Insira um nome'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().regex(phoneRegex, 'Insira um número válido'),
});

export const contactEditSchema = contactSchema.partial();

export type ContactData = z.infer<typeof contactSchema>;

export type EditContactData = z.infer<typeof contactEditSchema>;
