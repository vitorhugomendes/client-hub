import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  size: 'default' | 'medium';
  color: 'blue' | 'gray';
}

export const StyledButton = styled.button<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 8px;

  transition: 0.4s;

  ${({ size }) => {
    switch (size) {
      case 'default':
        return css`
          padding: 0 30px;
          height: 60px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, color }) => {
    switch (color) {
      case 'blue':
        return css`
          color: ${theme.colors.gray1};
          background: ${theme.colors.primary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'gray':
        return css`
          color: ${theme.colors.gray3};
          background: ${theme.colors.gray1};
          &:hover {
            color: ${theme.colors.gray1};
            background: ${theme.colors.gray3};
          }
        `;
    }
  }}
`;
