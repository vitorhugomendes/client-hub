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

  const { setModal } = useModal();

  return (
    <StyledDashboardPage>
      <StyledContainer>
        <header>
          <div className="logo-container">
            <img src={Logo} alt="Client Hub Logo" />
          </div>
          <button className="logout-button" onClick={logout} title="Logout">
            <LogoutRounded />
          </button>
        </header>
        <main>
          <section className="user-section">
            <StyledTitle $fontFamily="two" $fontSize="two" tag="h2">
              Olá, {user?.name}
            </StyledTitle>
            <div className="user-buttons-container">
              <Button
                size="medium"
                clickFunction={() => setModal('Adicionar contato')}
                type="button"
              >
                Adicionar contato
              </Button>
              <Button
                size="medium"
                clickFunction={() => setModal('Relatório de usuário')}
                type="button"
              >
                Gerar Relatório
              </Button>
              <Button
                size="medium"
                clickFunction={() => setModal('Editar perfil')}
                type="button"
              >
                Editar perfil
              </Button>
              <Button
                size="medium"
                clickFunction={() => setModal('Deletar conta')}
                type="button"
              >
                Deletar conta
              </Button>
            </div>
          </section>

          <section className="contacts-section">
            <StyledTitle
              $fontFamily="one"
              $fontSize="two"
              tag="h3"
              $textAlign="center"
            >
              Sua lista de contatos
            </StyledTitle>
            {contacts?.length === 0 ? (
              <StyledTitle $fontFamily="one" $fontSize="four" tag="h4">
                Nenhum contato adicionado
              </StyledTitle>
            ) : (
              <ul className="contacts-list">
                {contacts?.map((contact) => (
                  <li className="contacts-card" key={contact.id}>
                    <StyledTitle $fontFamily="two" $fontSize="three" tag="h3">
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
                          setModal('Editar contato');
                        }}
                      >
                        Editar contato
                      </Button>
                      <Button
                        size="small"
                        clickFunction={() => {
                          setContactInfo(contact);
                          setModal('Deletar contato');
                        }}
                        type="button"
                      >
                        Deletar contato
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </StyledContainer>
      <Modal title="Adicionar contato">
        <RegisterContactForm />
      </Modal>
      <Modal title="Relatório de usuário">
        <Relatory />
      </Modal>
      <Modal title="Editar perfil">
        <EditUserForm />
      </Modal>
      <Modal title="Deletar conta">
        <DeleteUserForm />
      </Modal>
      <Modal title="Editar contato">
        <EditContactForm contactInfo={contactInfo} />
      </Modal>
      <Modal title="Deletar contato">
        <DeleteContactForm contactId={contactInfo.id} />
      </Modal>
    </StyledDashboardPage>
  );
};
