import { useAuth } from '../../../hooks/useAuth';
import { StyledForm } from '../style';
import { StyledTitle } from '../../../styles/Typography';
import { Button } from '../../Button';

interface IDeleteContactForm {
  contactId: string;
}

export const DeleteContactForm = ({ contactId }: IDeleteContactForm) => {
  const { deleteContact } = useAuth();

  return (
    <StyledForm>
      <StyledTitle fontFamily="one" fontSize="two" tag="h3">
        Tem certeza que deseja excluir esse contato?
      </StyledTitle>
      <Button
        size="medium"
        type="button"
        clickFunction={() => deleteContact(contactId)}
      >
        Excluir contato
      </Button>
    </StyledForm>
  );
};
