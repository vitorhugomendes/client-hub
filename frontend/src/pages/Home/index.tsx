import { useState } from 'react';
import { Modal, LoginForm, RegisterForm } from '../../components';

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
    <main>
      <div>
        <div>
          <div className="wheel"></div>
          <div className="text-content">
            <div className="logo"></div>
            <div className="text">
              <h1>title</h1>
              <h2>description</h2>
            </div>
            <div className="buttons">
              <button onClick={toggleRegister}>register</button>

              <button onClick={toggleLogin}>login</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Cadastre-se"
        isOpen={isRegisterOpen}
        toggle={toggleRegister}
      >
        <RegisterForm />
      </Modal>
      <Modal title="Login" isOpen={isLoginOpen} toggle={toggleLogin}>
        <LoginForm />
      </Modal>
    </main>
  );
};
