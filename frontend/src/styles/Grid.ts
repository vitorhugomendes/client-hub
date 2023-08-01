import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: min-content;
  gap: 0px;
  position: relative;
  overflow: hidden;
  border: transparent;
  border-radius: 30px;
  margin: 15px;
`;

/* max-width: ${({ containerWidth }) => containerWidth || 80}%vw; */

export const StyledGridBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex: none;
  gap: 10px;
  width: 100%;
  max-width: 1332px;
  height: min-content;
  overflow: hidden;
  padding: 32px;
  position: relative;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.background};
`;
