import { useState } from 'react';
import { StyledDashboardPage } from './style';
import { StyledContainer } from '../../styles/Container';
import Logo from '../../assets/client-icon-color.png';
import { LogoutRounded } from '@mui/icons-material';
import {
  StyledTitle,
  StyledCaption,
  StyledParagraph,
} from '../../styles/Typography';
import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import {
  Modal,
  EditUserForm,
  Button,
  DeleteUserForm,
  RegisterContactForm,
  EditContactForm,
  DeleteContactForm,
  Relatory,
} from '../../components';
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
    isRelatoryOpen,
    toggleRelatory,
  } = useModal();

  return (
    <StyledDashboardPage>
      <StyledContainer>
        <header>
          <div className="logo-container">
            <img src={Logo} alt="Client Hub Logo" />
          </div>
          <button
            className="logout-button"
            onClick={() => logout()}
            data-hover="Logout"
          >
            <LogoutRounded />
          </button>
        </header>
        <main>
          <section className="user-section">
            <StyledTitle fontFamily="two" fontSize="two" tag="h2">
              Olá, {user?.name}
            </StyledTitle>
            <div className="user-buttons-container">
              <Button
                size="medium"
                clickFunction={toggleRegisterContact}
                type="button"
              >
                Adicionar contato
              </Button>
              <Button
                size="medium"
                clickFunction={toggleRelatory}
                type="button"
              >
                Gerar Relatório
              </Button>
              <Button
                size="medium"
                clickFunction={toggleEditUser}
                type="button"
              >
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
          </section>

          <section className="contacts-section">
            <StyledTitle
              fontFamily="one"
              fontSize="two"
              tag="h3"
              textAlign="center"
            >
              Sua lista de contatos
            </StyledTitle>
            <ul className="contacts-list">
              {contacts?.map((contact) => (
                <li className="contacts-card" key={contact.id}>
                  <StyledTitle fontFamily="two" fontSize="three" tag="h3">
                    {contact.name}
                  </StyledTitle>
                  <StyledParagraph>
                    Email: <StyledCaption>{contact.email}</StyledCaption>
                  </StyledParagraph>

                  <StyledParagraph>
                    Telefone: <StyledCaption>{contact.phone}</StyledCaption>
                  </StyledParagraph>
                  <div className="contacts-buttons-container">
                    <Button
                      size="small"
                      type="button"
                      clickFunction={() => {
                        setContactInfo(contact);
                        toggleEditContact();
                      }}
                    >
                      Editar contato
                    </Button>
                    <Button
                      size="small"
                      clickFunction={() => {
                        setContactInfo(contact);
                        toggleDeleteContact();
                      }}
                      type="button"
                    >
                      Deletar contato
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
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
        title="Relatório de usuário"
        isOpen={isRelatoryOpen}
        toggle={toggleRelatory}
      >
        <Relatory />
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
