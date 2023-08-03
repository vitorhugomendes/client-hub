import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from './style';
import { StyledParagraph } from '../../../styles/Typography';

interface IInputProps {
  label: string;
  id: 'email' | 'password' | 'name' | 'confirmPassword' | 'phone';
  type: string;
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
  defaultValue?: string;
}

export const Input = ({
  label,
  id,
  type,
  register,
  error,
  defaultValue,
}: IInputProps) => (
  <fieldset>
    <StyledTextField
      label={label}
      type={type}
      id={id}
      {...register}
      defaultValue={defaultValue}
    />

    <StyledParagraph fontcolor="red">{error}</StyledParagraph>
  </fieldset>
);
