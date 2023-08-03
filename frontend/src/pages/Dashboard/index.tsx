import { StyledDashboardPage } from './style';
import { StyledContainer } from '../../styles/Container';
import { useAuth } from '../../hooks/useAuth';

export const Dashboard = () => {
  const { signOut, user, contacts } = useAuth();

  return (
    <StyledDashboardPage>
      <StyledContainer>
        <header>
          <button>logo</button>
          <button onClick={() => signOut()}>logout</button>
        </header>
        <main>
          <h1>Olá, {user?.name}</h1>
          <div>
            <button>Adicionar contato</button>
            <button>Editar perfil</button>
            <button>Logout</button>
          </div>
          <ul className="clients-list">
            {contacts?.map(({ name, email, phone }) => (
              <li>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{phone}</h2>
              </li>
            ))}
          </ul>
        </main>
      </StyledContainer>
    </StyledDashboardPage>
  );
};
