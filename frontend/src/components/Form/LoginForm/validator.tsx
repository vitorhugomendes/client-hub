import { z } from 'zod';

export const schema = z.object({
  email: z.string().email('Insira um e-mail válido'),
  password: z.string().nonempty('Insira uma senha'),
});

export type LoginData = z.infer<typeof schema>;
