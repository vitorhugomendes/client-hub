import styled from 'styled-components';

export const StyledRelatory = styled.div`
  .relatory-contacts-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 10px;
  }
  .relatory-contacts-card {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 0 10px;
    min-width: 43%;
  }

  .relatory-contacts-card:hover {
    p > span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`;
