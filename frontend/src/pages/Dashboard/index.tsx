import { useAuth } from '../../hooks/useAuth';
import { StyledDashboardPage } from './style';
import { StyledContainer } from '../../styles/Container';
import {
  Modal,
  EditUserForm,
  Button,
  DeleteUserForm,
  RegisterContactForm,
  DeleteContactForm,
} from '../../components';
import { useModal } from '../../hooks/useModal';
import { EditContactForm } from '../../components/Form/EditContactForm';
import { useState } from 'react';
import { IContactInfo } from '../../components/Form/EditContactForm';

export const Dashboard = () => {
  const { logout, user, contacts } = useAuth();
  const [contactInfo, setContactInfo] = useState({} as IContactInfo);

  const {
    isEditUserOpen,
    toggleEditUser,
    isDeleteUserOpen,
    toggleDeleteUser,
    isRegisterContactOpen,
    toggleRegisterContact,
    isEditContactOpen,
    toggleEditContact,
    isDeleteContactOpen,
    toggleDeleteContact,
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
            {contacts?.map((contact) => (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <h2>{contact.phone}</h2>
                <Button
                  size="medium"
                  type="button"
                  clickFunction={() => {
                    setContactInfo(contact);
                    toggleEditContact();
                  }}
                >
                  Editar contato
                </Button>
                <Button
                  size="medium"
                  clickFunction={() => {
                    setContactInfo(contact);
                    toggleDeleteContact();
                  }}
                  type="button"
                >
                  Deletar contato
                </Button>
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
      <Modal
        title="Editar contato"
        isOpen={isEditContactOpen}
        toggle={toggleEditContact}
      >
        <EditContactForm contactInfo={contactInfo} />
      </Modal>
      <Modal
        title="Deletar contato"
        isOpen={isDeleteContactOpen}
        toggle={toggleDeleteContact}
      >
        <DeleteContactForm contactId={contactInfo.id} />
      </Modal>
    </StyledDashboardPage>
  );
};
