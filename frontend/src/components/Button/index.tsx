import { ReactNode } from 'react';
import { StyledButton } from './style';

interface IButtonProps {
  children: ReactNode;
  size: 'small' | 'medium' | 'big';
  type: 'button' | 'reset' | 'submit' | undefined;
  $irreversible?: 'true';
  clickFunction?: () => void;
}

export const Button = ({
  children,
  size,
  type,
  $irreversible,
  clickFunction,
}: IButtonProps) => (
  <StyledButton
    size={size}
    type={type}
    $irreversible={$irreversible}
    onClick={clickFunction ? () => clickFunction() : undefined}
  >
    {children}
  </StyledButton>
);
