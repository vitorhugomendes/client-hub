import { StyledRelatory } from './style';
import { useAuth } from '../../hooks/useAuth';

export const Relatory = () => {
  const { user, contacts } = useAuth();
  return (
    <StyledRelatory>
      <div>
        <h1>Relatório Client Hub</h1>
        <div>
          <h3>{user?.name}</h3>
          <h3>{user?.phone}</h3>
          <h3>{user?.email}</h3>
        </div>
        <ul>
          {contacts?.map((contact) => (
            <li>
              <h2>{contact.name}</h2>
              <h2>{contact.email}</h2>
              <h2>{contact.phone}</h2>
            </li>
          ))}
        </ul>
      </div>
    </StyledRelatory>
  );
};
