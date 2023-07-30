import { StyledButton, StyledButtonLink } from './style';

interface IButtonProps {
  text: string;
  size: 'default' | 'medium';
  color: 'green' | 'gray';
  link?: boolean;
  type: 'button' | 'reset' | 'submit' | undefined;
  //   function?: () => void;
}

export const Button = ({ text, size, color, link, type }: IButtonProps) => {
  return link ? (
    <StyledButtonLink color={color} size={size} type={type}>
      {text}
    </StyledButtonLink>
  ) : (
    <StyledButton color={color} size={size} type={type}>
      {text}
    </StyledButton>
  );
};
