import styled, { css } from 'styled-components';
import { BaseTypography } from '../components/Typography';

interface IStyledTitleProps {
  fontSize: 'one' | 'two' | 'three' | 'four';
  textAlign?: 'center' | 'left' | 'right';
}

interface IStyledParagraphProps {
  fontcolor?: 'gray' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

export const StyledTitle = styled(BaseTypography)<IStyledTitleProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.6;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.colors.text};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'one':
        return css`
          font-size: 3rem;
          font-weight: 400;
        `;
      case 'two':
        return css`
          font-size: 2rem;
          font-weight: 400;
        `;

      case 'three':
        return css`
          font-size: 1.5rem;
          font-weight: 400;
        `;

      case 'four':
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }};
`;

export const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
  text-align: ${({ textAlign }) => textAlign};

  ${({ fontcolor, theme }) => {
    switch (fontcolor) {
      case 'gray':
        return css`
          color: ${theme.colors.gray1};
        `;
      case 'red':
        return css`
          color: ${theme.colors.feedback.negative};
        `;
      default:
        return css`
          color: ${theme.colors.gray3};
        `;
    }
  }}

  strong {
    font-weight: 600;
  }
`;

export const StyledCaption = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 400;
`;
