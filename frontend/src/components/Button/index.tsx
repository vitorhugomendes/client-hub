import { StyledButton } from './style';

interface IButtonProps {
  text: string;
  size: 'default' | 'medium';
  color: 'blue' | 'gray';
  type: 'button' | 'reset' | 'submit' | undefined;
  //   function?: () => void;
}

export const Button = ({ text, size, color, type }: IButtonProps) => (
  <StyledButton color={color} size={size} type={type}>
    {text}
  </StyledButton>
);
