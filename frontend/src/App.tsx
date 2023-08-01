import { GlobalStyles } from './styles/Global';
import { SnackbarProvider } from 'notistack';
import { StyledMaterialDesignContent } from './styles/Notistack';
import { AuthProvider } from './providers/AuthProvider';
import { RoutesMain } from './routes';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
          warning: StyledMaterialDesignContent,
          info: StyledMaterialDesignContent,
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </SnackbarProvider>
    </>
  );
};
