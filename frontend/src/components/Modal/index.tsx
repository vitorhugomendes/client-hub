import { ReactNode } from 'react';
import { StyledModal } from './style';
import { StyledTitle } from '../../styles/Typography';
import { CloseRounded } from '@mui/icons-material';
import ReactDOM from 'react-dom';

interface IModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  toggle: () => void;
}

export const Modal = ({ children, isOpen, toggle, title }: IModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <StyledModal onClick={toggle}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <StyledTitle $fontFamily="one" $fontSize="three" tag="h2">
            {title}
          </StyledTitle>
          <button onClick={toggle}>
            <CloseRounded />
          </button>
        </div>
        {children}
      </div>
    </StyledModal>,
    document.getElementById('modal')!
  );
};
