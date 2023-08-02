import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  width: 100%;

  input {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
