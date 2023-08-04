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
  isEditContactOpen: boolean;
  toggleEditContact: () => void;
  isDeleteContactOpen: boolean;
  toggleDeleteContact: () => void;
  isRelatoryOpen: boolean;
  toggleRelatory: () => void;
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

  const [isEditContactOpen, setIsEditContactOpen] = useState(false);

  const toggleEditContact = () => {
    setIsEditContactOpen(!isEditContactOpen);
  };

  const [isDeleteContactOpen, setIsDeleteContactOpen] = useState(false);

  const toggleDeleteContact = () => {
    setIsDeleteContactOpen(!isDeleteContactOpen);
  };

  const [isRelatoryOpen, setIsRelatoryOpen] = useState(false);

  const toggleRelatory = () => {
    setIsRelatoryOpen(!isRelatoryOpen);
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
        isEditContactOpen,
        toggleEditContact,
        isDeleteContactOpen,
        toggleDeleteContact,
        isRelatoryOpen,
        toggleRelatory,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
