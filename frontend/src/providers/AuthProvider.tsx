import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { LoginData } from '../components/Form/LoginForm/validator';
import { RegisterData } from '../components/Form/RegisterForm/validator';
import { api } from '../services/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from 'jwt-decode';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  signUp: (data: RegisterData) => Promise<void>;
  user: IUser | null;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  registerDate: string;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [user, setUser] = useState<IUser | null>(null);
  const token = localStorage.getItem('client-hub:token');

  const signIn = async (data: LoginData) => {
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

  const signUp = async (data: RegisterData) => {
    try {
      await api.post('/users/', data);

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

  const getUser = useCallback(async () => {
    const decodedToken = jwt_decode<JwtPayload>(token!);
    try {
      const response = await api.get(`/users/${decodedToken.sub}/`);
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
  }, [token, enqueueSnackbar]);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      getUser();
      navigate('dashboard');
    } else {
      navigate('/');
    }
  }, [token, navigate, getUser]);

  return (
    <AuthContext.Provider value={{ signIn, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
};
