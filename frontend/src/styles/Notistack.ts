import styled from 'styled-components';
import { MaterialDesignContent } from 'notistack';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  () => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: '#168821',
      font: 'inherit',
      fontFamily: 'Inter',
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: '#E60000',
      font: 'inherit',
      fontFamily: 'Inter',
    },
    '&.notistack-MuiContent-warning': {
      backgroundColor: '#FFCD07',
      font: 'inherit',
      fontFamily: 'Inter',
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: '#155BCB',
      font: 'inherit',
      fontFamily: 'Inter',
    },
  })
);
