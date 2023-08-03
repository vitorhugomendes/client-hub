import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../../Input';
import { EditUserData, userEditSchema } from '../users.validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export const EditUserForm = () => {
  const { user, editUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({
    resolver: zodResolver(userEditSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(editUser)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        register={register('name')}
        error={errors?.name?.message}
        defaultValue={user?.name}
      />

      <Input
        label="Telefone"
        id="phone"
        type="tel"
        register={register('phone')}
        error={errors?.phone?.message}
        defaultValue={user?.phone}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        register={register('email')}
        error={errors?.email?.message}
        defaultValue={user?.email}
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
        Editar
      </Button>
    </StyledForm>
  );
};
