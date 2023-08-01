import { ReactNode, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { LoginData } from '../../components/Form/LoginForm/validator';
import { RegisterData } from '../../components/Form/RegisterForm/validator';
import { api } from '../../services/api';
import axios, { AxiosError } from 'axios';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  signUp: (data: RegisterData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const token = localStorage.getItem('client-hub:token');

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post('/login/', data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('client-hub:token', token);

      enqueueSnackbar('Login feito com sucesso', { variant: 'default' });
      navigate('dashboard');
    } catch (error: unknown | AxiosError) {
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
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(`${error?.response?.data.message}`, {
          variant: 'error',
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
