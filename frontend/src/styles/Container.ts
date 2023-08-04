import styled from 'styled-components';

interface IStyledContainerProps {
  $containerwidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: min-content;
  gap: 10px;
  overflow: hidden;
  border: transparent;
  border-radius: 30px;
  padding: 15px 32px;
  margin: 15px auto;
  max-width: ${({ $containerwidth }) => $containerwidth || 1337}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
