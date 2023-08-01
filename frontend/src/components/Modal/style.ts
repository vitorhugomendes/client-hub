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
  z-index: 1001;

  .modal-container {
    animation: ${FadeIn} 0.5s;
    display: block;
    width: 100%;
    max-width: 500px;
    background: ${({ theme }) => theme.colors.primary};

    @media (max-width: 450px) {
      padding: 15px;
    }
  }
`;
