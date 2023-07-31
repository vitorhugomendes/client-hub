import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../Input';
import { LoginData, schema } from './validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export const LoginForm = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(signIn)}>
      <Input
        label="Email"
        id="email"
        type="email"
        register={register('email')}
        error={errors?.email?.message}
      />
      <Input
        label="Senha"
        id="password"
        type="password"
        register={register('password')}
        error={errors?.password?.message}
      />
      <Button color="blue" size="default" text="Entrar" type="submit" />
    </StyledForm>
  );
};
