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
} from '../components/Form/users.validators';
import { api } from '../services/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';

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
  user: IUser | null;
  contacts: IContacts[] | null;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContacts[] | null>(null);

  const token = localStorage.getItem('client-hub:token') || null;
  const userId = token ? jwt_decode<JwtPayload>(token).sub : null;

  const login = async (data: LoginData) => {
    try {
      const response = await api.post('/login/', data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('client-hub:token', token);

      enqueueSnackbar('Login feito com sucesso', { variant: 'default' });
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
      const response = await api.post('/users/', data);
      console.log(response);
      enqueueSnackbar('Registro feito com sucesso', { variant: 'default' });
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
      // setUser({...user, response.data})
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
      value={{ login, logout, registerUser, editUser, user, contacts }}
    >
      {children}
    </AuthContext.Provider>
  );
};
