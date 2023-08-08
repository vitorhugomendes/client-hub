import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from {
    transform: translateY(60px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  top: 0;

  background: rgba(51, 51, 51, 0.5);

  .modal-container {
    animation: ${FadeIn} 0.5s;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 15px;
    gap: 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background};
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header > button {
    background-color: transparent;
    cursor: pointer;
  }
`;
