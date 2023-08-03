import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../../Input';
import { contactSchema, ContactData } from '../contacts.validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../Button';

export const RegisterContactForm = () => {
  const { registerContact } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerContact)}>
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
      <Button size="medium" type="submit">
        Adicionar contato
      </Button>
    </StyledForm>
  );
};
