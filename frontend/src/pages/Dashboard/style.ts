import styled from 'styled-components';

export const StyledDashboardPage = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
  }

  .logo-container {
    width: 30px;
    height: 30px;
  }

  .logo-container > img {
    width: 100%;
    height: 100%;
  }

  .logout-button {
    margin: 0 10px;
    background-color: transparent;
  }

  main {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .user-section {
    display: flex;
    align-items: center;
  }

  .user-buttons-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    min-width: 50%;
  }

  .contacts-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contacts-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .contacts-card {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    border: 2px solid transparent;
    min-width: 290px;
    max-width: 330px;
  }

  .contacts-card:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    p > span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }

  .contacts-buttons-container {
    display: flex;
    gap: 5px;
  }

  @media (max-width: 838px) {
    .user-section {
      flex-direction: column;
    }

    .user-buttons-container {
      flex-wrap: wrap;
    }

    .contacts-list {
      flex-wrap: nowrap;
      overflow: scroll;
    }
  }
`;
