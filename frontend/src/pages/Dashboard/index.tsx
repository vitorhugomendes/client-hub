import { StyledDashboardPage } from './style';
import { StyledContainer } from '../../styles/Container';
import { useAuth } from '../../hooks/useAuth';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <StyledDashboardPage>
      <StyledContainer>
        <header>
          <button>logo</button>
          <button>logout</button>
        </header>
        <main>
          <h1>Olá, {user?.name}</h1>
          <div>
            <button>Adicionar contato</button>
            <button>Editar perfil</button>
            <button>Logout</button>
          </div>
          <ul className="clients-list">
            <li></li>
          </ul>
        </main>
      </StyledContainer>
    </StyledDashboardPage>
  );
};
