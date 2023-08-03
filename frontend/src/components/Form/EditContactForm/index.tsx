import { useForm } from 'react-hook-form';
import { StyledForm } from '../style';
import { Input } from '../../Input';
import { contactEditSchema, EditContactData } from '../contacts.validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../Button';
import { useAuth } from '../../../hooks/useAuth';

export interface IContactInfo extends EditContactData {
  id: string;
}

interface IEditContactForm {
  contactInfo: IContactInfo;
}

export const EditContactForm = ({ contactInfo }: IEditContactForm) => {
  const { editContact } = useAuth();
  const { id, name, email, phone } = contactInfo;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactData>({
    resolver: zodResolver(contactEditSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(async (data) => editContact(data, id))}>
      <Input
        label="Nome"
        id="name"
        type="text"
        register={register('name')}
        error={errors?.name?.message}
        defaultValue={name}
      />

      <Input
        label="Telefone"
        id="phone"
        type="tel"
        register={register('phone')}
        error={errors?.phone?.message}
        defaultValue={phone}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        register={register('email')}
        error={errors?.email?.message}
        defaultValue={email}
      />
      <Button size="medium" type="submit">
        Editar
      </Button>
    </StyledForm>
  );
};
