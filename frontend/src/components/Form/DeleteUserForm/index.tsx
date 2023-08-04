import { useAuth } from '../../../hooks/useAuth';
import { StyledForm } from '../style';
import { StyledTitle, StyledParagraph } from '../../../styles/Typography';
import { Button } from '../../Button';

export const DeleteUserForm = () => {
  const { deleteUser } = useAuth();

  return (
    <StyledForm>
      <StyledTitle fontFamily="two" fontSize="two" tag="h3">
        Tem certeza que deseja deletar essa conta?
      </StyledTitle>
      <StyledParagraph>Essa ação é irreversível</StyledParagraph>
      <Button size="medium" type="button" clickFunction={deleteUser}>
        Deletar
      </Button>
    </StyledForm>
  );
};
