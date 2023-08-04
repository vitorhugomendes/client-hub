import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  size: 'small' | 'medium' | 'big';
}

export const StyledButton = styled.button<IStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 8px;

  transition: 0.4s
    ${({ theme }) => {
      return css`
        font-family: ${theme.fonts.primary};
        color: ${theme.colors.background};
        background: ${theme.colors.secondary};
        &:hover {
          background: ${theme.colors.primary};
        }
      `;
    }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 0 15px;
          height: 40px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
      case 'big':
        return css`
          padding: 0 30px;
          height: 60px;
        `;
    }
  }}
`;
