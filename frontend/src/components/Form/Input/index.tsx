import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from './style';
import { StyledParagraph } from '../../../styles/Typography';

interface IInputProps {
  label: string;
  id: 'email' | 'password' | 'name' | 'passwordConfirmation';
  type: string;
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
}

export const Input = ({ label, id, type, register, error }: IInputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} id={id} {...register} />
    <StyledParagraph fontcolor="red">{error}</StyledParagraph>
  </fieldset>
);
