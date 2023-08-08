import { ReactNode, createContext, useState } from 'react';

interface IModalProviderProps {
  children: ReactNode;
}

export type TModalOptions =
  | 'Login'
  | 'Cadastre-se'
  | 'Adicionar contato'
  | 'Editar contato'
  | 'Deletar contato'
  | 'Editar perfil'
  | 'Deletar conta'
  | 'Relatório de usuário'
  | null;

interface IModalContextValues {
  modal: TModalOptions;
  setModal: React.Dispatch<React.SetStateAction<TModalOptions>>;
}

export const ModalContext = createContext({} as IModalContextValues);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modal, setModal] = useState<TModalOptions>(null);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
