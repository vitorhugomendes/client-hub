import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../Input';
import { LoginData, loginSchema } from '../users.validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export const LoginForm = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(login)}>
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
      <Button size="medium" type="submit">
        Login
      </Button>
    </StyledForm>
  );
};
