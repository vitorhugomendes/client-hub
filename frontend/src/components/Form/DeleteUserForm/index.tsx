import { useAuth } from '../../../hooks/useAuth';
import { StyledForm } from '../style';
import { StyledTitle, StyledParagraph } from '../../../styles/Typography';
import { Button } from '../../Button';

export const DeleteUserForm = () => {
  const { deleteUser } = useAuth();

  return (
    <StyledForm>
      <StyledTitle
        $fontFamily="one"
        $fontSize="four"
        tag="h3"
        $textAlign="center"
      >
        Tem certeza que deseja deletar essa conta?
      </StyledTitle>
      <StyledParagraph $textAlign="center">
        Essa ação é irreversível
      </StyledParagraph>
      <Button
        size="medium"
        type="button"
        clickFunction={deleteUser}
        $irreversible="true"
      >
        Deletar
      </Button>
    </StyledForm>
  );
};
