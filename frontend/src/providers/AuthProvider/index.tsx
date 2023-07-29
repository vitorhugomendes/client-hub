import { ReactNode, createContext, useEffect } from 'react';
import { LoginData } from '../../components/Form/LoginForm/validator';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('client-hub:token');

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post('/login', data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('client-hub:token', token);

      navigate('dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
