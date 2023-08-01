import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const schema = z
  .object({
    name: z.string().nonempty('Insira um nome'),
    email: z.string().email('Insira um e-mail válido'),
    phone: z.string().regex(phoneRegex, 'Insira um número válido'),
    password: z.string().min(8).nonempty('Insira uma senha'),
    confirmPassword: z.string().min(8).nonempty(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword'],
  });

export type RegisterData = z.infer<typeof schema>;
