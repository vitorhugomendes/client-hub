import { ReactNode } from 'react';
import { StyledButton } from './style';

interface IButtonProps {
  children: ReactNode;
  size: 'small' | 'medium' | 'big';
  type: 'button' | 'reset' | 'submit' | undefined;
  clickFunction?: () => void;
}

export const Button = ({
  children,
  size,
  type,
  clickFunction,
}: IButtonProps) => (
  <StyledButton
    size={size}
    type={type}
    onClick={clickFunction ? () => clickFunction() : undefined}
  >
    {children}
  </StyledButton>
);
