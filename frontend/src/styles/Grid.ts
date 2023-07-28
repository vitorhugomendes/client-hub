import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) => containerWidth || 80}%vw;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledGridBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.gray1};
  border-radius: 5px;
`;
