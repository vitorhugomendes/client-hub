import { ReactNode, createContext, useState } from 'react';

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalContextValues {
  isLoginOpen: boolean;
  toggleLogin: () => void;
  isRegisterUserOpen: boolean;
  toggleRegisterUser: () => void;
  isEditUserOpen: boolean;
  toggleEditUser: () => void;
  isDeleteUserOpen: boolean;
  toggleDeleteUser: () => void;
  isRegisterContactOpen: boolean;
  toggleRegisterContact: () => void;
}

export const ModalContext = createContext({} as IModalContextValues);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const [isRegisterUserOpen, setIsRegisterUserOpen] = useState(false);

  const toggleRegisterUser = () => {
    setIsRegisterUserOpen(!isRegisterUserOpen);
  };

  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  const toggleEditUser = () => {
    setIsEditUserOpen(!isEditUserOpen);
  };

  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);

  const toggleDeleteUser = () => {
    setIsDeleteUserOpen(!isDeleteUserOpen);
  };

  const [isRegisterContactOpen, setIsRegisterContactOpen] = useState(false);

  const toggleRegisterContact = () => {
    setIsRegisterContactOpen(!isRegisterContactOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        toggleLogin,
        isRegisterUserOpen,
        toggleRegisterUser,
        isEditUserOpen,
        toggleEditUser,
        isDeleteUserOpen,
        toggleDeleteUser,
        isRegisterContactOpen,
        toggleRegisterContact,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
