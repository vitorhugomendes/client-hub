import { GlobalStyles } from './styles/Global';
import { AuthProvider } from './providers/AuthProvider';
import { RoutesMain } from './routes';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};
