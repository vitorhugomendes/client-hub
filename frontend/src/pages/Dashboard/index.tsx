import { useAuth } from '../../hooks/useAuth';
import { StyledDashboardPage } from './style';
import { StyledContainer } from '../../styles/Container';
import {
  Modal,
  EditUserForm,
  Button,
  DeleteUserForm,
  RegisterContactForm,
} from '../../components';
import { useModal } from '../../hooks/useModal';

export const Dashboard = () => {
  const { logout, user, contacts } = useAuth();
  const {
    isEditUserOpen,
    toggleEditUser,
    isDeleteUserOpen,
    toggleDeleteUser,
    isRegisterContactOpen,
    toggleRegisterContact,
  } = useModal();

  return (
    <StyledDashboardPage>
      <StyledContainer>
        <header>
          <button>logo</button>
          <button onClick={() => logout()}>logout</button>
        </header>
        <main>
          <h1>Olá, {user?.name}</h1>
          <div>
            <Button
              size="medium"
              clickFunction={toggleRegisterContact}
              type="button"
            >
              Adicionar contato
            </Button>
            <Button size="medium" clickFunction={toggleEditUser} type="button">
              Editar perfil
            </Button>
            <Button
              size="medium"
              clickFunction={toggleDeleteUser}
              type="button"
            >
              Deletar conta
            </Button>
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
      <Modal
        title="Adicionar contato"
        isOpen={isRegisterContactOpen}
        toggle={toggleRegisterContact}
      >
        <RegisterContactForm />
      </Modal>
      <Modal
        title="Editar usuário"
        isOpen={isEditUserOpen}
        toggle={toggleEditUser}
      >
        <EditUserForm />
      </Modal>
      <Modal
        title="Deletar Conta"
        isOpen={isDeleteUserOpen}
        toggle={toggleDeleteUser}
      >
        <DeleteUserForm />
      </Modal>
    </StyledDashboardPage>
  );
};
