import { useModal } from '../../hooks/useModal';
import { StyledHomePage } from './style';
import { StyledContainer } from '../../styles/Container';
import { Modal, LoginForm, RegisterUserForm, Button } from '../../components';
import { StyledTitle } from '../../styles/Typography';
import Logo from '../../assets/client-icon-color.png';

export const Home = () => {
  const { setModal } = useModal();

  return (
    <StyledHomePage>
      <StyledContainer $containerwidth={500}>
        <div className="logo-container">
          <img src={Logo} alt="Client Hub Logo" />
        </div>
        <div className="text-content">
          <StyledTitle
            $fontFamily="two"
            tag="h1"
            $fontSize="one"
            $textAlign="center"
          >
            Client Hub
          </StyledTitle>
          <div className="buttons-container">
            <Button
              size="big"
              type="button"
              clickFunction={() => setModal('Login')}
            >
              Login
            </Button>
            <Button
              size="big"
              type="button"
              clickFunction={() => setModal('Cadastre-se')}
            >
              Registre-se
            </Button>
          </div>
        </div>
      </StyledContainer>
      <Modal title="Cadastre-se">
        <RegisterUserForm />
      </Modal>
      <Modal title="Login">
        <LoginForm />
      </Modal>
    </StyledHomePage>
  );
};
