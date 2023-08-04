import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  LoginData,
  RegisterUserData,
  EditUserData,
} from '../../components/Form/users.validators';
import {
  ContactData,
  EditContactData,
} from '../../components/Form/contacts.validators';
import { api } from '../../services/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { useModal } from '../../hooks/useModal';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  registerDate: string;
}

interface IContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  registerDate: string;
  userId: string;
}

interface IAuthContextValues {
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  registerUser: (data: RegisterUserData) => Promise<void>;
  editUser: (data: EditUserData) => Promise<void>;
  deleteUser: () => Promise<void>;
  user: IUser | null;
  contacts: IContacts[] | null;
  registerContact: (data: ContactData) => Promise<void>;
  editContact: (data: EditContactData, contactId: string) => Promise<void>;
  deleteContact: (contactId: string) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContacts[] | []>([]);

  const token = localStorage.getItem('client-hub:token') || null;
  const userId = token ? jwt_decode<JwtPayload>(token).sub : null;

  const {
    toggleRegisterUser,
    toggleEditUser,
    toggleRegisterContact,
    toggleEditContact,
    toggleDeleteContact,
  } = useModal();

  const login = async (data: LoginData) => {
    try {
      const response = await api.post('/login/', data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('client-hub:token', token);
      enqueueSnackbar('Login feito com sucesso', { variant: 'success' });
      navigate('dashboard');
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const registerUser = async (data: RegisterUserData) => {
    try {
      await api.post('/users/', data);
      navigate('/');
      toggleRegisterUser();
      enqueueSnackbar('Registro feito com sucesso', { variant: 'success' });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setUser(null);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await api.get(`/users/${userId}/`);
      setUser(response.data);
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  }, [userId, enqueueSnackbar]);

  const editUser = async (data: EditUserData) => {
    try {
      const response = await api.patch(`/users/${userId}/`, data);
      setUser(response.data);
      toggleEditUser();
      enqueueSnackbar('Dados editados com sucesso', { variant: 'success' });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/users/${userId}/`);
      enqueueSnackbar('Usuário deletado com sucesso', { variant: 'warning' });
      logout();
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const getContacts = useCallback(async () => {
    try {
      const response = await api.get(`/contacts/`);
      setContacts(response.data);
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  }, [enqueueSnackbar]);

  const registerContact = async (data: ContactData) => {
    try {
      const response = await api.post(`/contacts/`, data);
      setContacts([...contacts, response.data]);
      toggleRegisterContact();
      enqueueSnackbar('Contato registrado com sucesso', { variant: 'success' });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const editContact = async (data: EditContactData, contactId: string) => {
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    const newContactList = contacts.filter(
      (contact) => contact.id !== contactId
    );
    try {
      const response = await api.patch(`/contacts/${contactId}`, data);

      setContacts([
        ...newContactList.slice(0, contactIndex),
        response.data,
        ...newContactList.slice(contactIndex),
      ]);
      toggleEditContact();
      enqueueSnackbar('Contato editado com sucesso', { variant: 'info' });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  const deleteContact = async (contactId: string) => {
    const newContactList = contacts.filter(
      (contact) => contact.id !== contactId
    );
    try {
      await api.delete(`/contacts/${contactId}`);
      toggleDeleteContact();
      setContacts(newContactList);
      enqueueSnackbar('Contato deletado com sucesso', { variant: 'info' });
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      getUser();
      getContacts();
      navigate('dashboard');
    } else {
      navigate('/');
    }
  }, [token, navigate, getUser, getContacts]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        registerUser,
        editUser,
        deleteUser,
        user,
        contacts,
        registerContact,
        editContact,
        deleteContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
