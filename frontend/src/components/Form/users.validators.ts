import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const userSchema = z.object({
  name: z.string().nonempty('Insira um nome'),
  email: z.string().email('Insira um e-mail válido'),
  phone: z.string().regex(phoneRegex, 'Insira um número válido'),
  password: z.string().min(8).nonempty('Insira uma senha'),
  confirmPassword: z.string().min(8).nonempty(),
});

export const userRegisterSchema = userSchema.superRefine((data) => {
  data.password === data.confirmPassword,
    {
      message: 'As senhas não são iguais',
      path: ['confirmPassword'],
    };
});

export const userEditSchema = userSchema.partial().superRefine((data) => {
  data.password === data.confirmPassword,
    {
      message: 'As senhas não são iguais',
      path: ['confirmPassword'],
    };
});

export const loginSchema = userSchema.pick({ email: true, password: true });

export type RegisterUserData = z.infer<typeof userRegisterSchema>;

export type EditUserData = z.infer<typeof userEditSchema>;

export type LoginData = z.infer<typeof loginSchema>;
