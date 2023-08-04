import { StyledRelatory } from './style';
import { useAuth } from '../../hooks/useAuth';
import {
  StyledParagraph,
  StyledTitle,
  StyledCaption,
} from '../../styles/Typography';

export const Relatory = () => {
  const { user, contacts } = useAuth();
  return (
    <StyledRelatory>
      <div>
        <div>
          <StyledTitle $fontFamily="two" $fontSize="two" tag="h3">
            {user?.name}
          </StyledTitle>
          <StyledParagraph>
            Email: <StyledCaption>{user?.email}</StyledCaption>
          </StyledParagraph>

          <StyledParagraph>
            Telefone: <StyledCaption>{user?.phone}</StyledCaption>
          </StyledParagraph>
        </div>
        <StyledTitle $fontFamily="one" $fontSize="four" tag="h4">
          Contatos
        </StyledTitle>
        <ul className="relatory-contacts-list">
          {contacts?.map((contact) => (
            <li className="relatory-contacts-card" key={contact.id}>
              <StyledParagraph>
                Nome: <StyledCaption>{contact.name}</StyledCaption>
              </StyledParagraph>
              <StyledParagraph>
                Email: <StyledCaption>{contact.email}</StyledCaption>
              </StyledParagraph>

              <StyledParagraph>
                Telefone: <StyledCaption>{contact.phone}</StyledCaption>
              </StyledParagraph>
            </li>
          ))}
        </ul>
      </div>
    </StyledRelatory>
  );
};
