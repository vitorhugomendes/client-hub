import { useState } from 'react';
import { StyledHomePage } from './style';
import { StyledContainer } from '../../styles/Container';
import { Modal, LoginForm, RegisterUserForm, Button } from '../../components';
import { StyledTitle } from '../../styles/Typography';
import Logo from '../../assets/client-icon-color.png';

export const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  return (
    <StyledHomePage>
      <StyledContainer>
        <div className="logo-container">
          <img src={Logo} alt="Client Hub Logo" />
        </div>
        <div className="text-content">
          <StyledTitle tag="h1" fontSize="one" textAlign="center">
            Client Hub
          </StyledTitle>
          <div className="buttons-container">
            <Button size="big" type="button" clickFunction={toggleLogin}>
              Login
            </Button>
            <Button size="big" type="button" clickFunction={toggleRegister}>
              Registre-se
            </Button>
          </div>
        </div>
      </StyledContainer>
      <Modal
        title="Cadastre-se"
        isOpen={isRegisterOpen}
        toggle={toggleRegister}
      >
        <RegisterUserForm />
      </Modal>
      <Modal title="Login" isOpen={isLoginOpen} toggle={toggleLogin}>
        <LoginForm />
      </Modal>
    </StyledHomePage>
  );
};
