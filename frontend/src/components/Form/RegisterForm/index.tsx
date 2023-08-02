import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../Input';
import { RegisterData, schema } from './validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export const RegisterForm = () => {
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(signUp)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        register={register('name')}
        error={errors?.name?.message}
      />
      <Input
        label="Telefone"
        id="phone"
        type="tel"
        register={register('phone')}
        error={errors?.phone?.message}
      />
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
      <Input
        label="Confirmar Senha"
        id="confirmPassword"
        type="password"
        register={register('confirmPassword')}
        error={errors?.confirmPassword?.message}
      />
      <Button size="medium" type="submit">
        Registrar
      </Button>
    </StyledForm>
  );
};
