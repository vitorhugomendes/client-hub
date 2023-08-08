import ReactDOM from 'react-dom';
import { ReactNode } from 'react';
import { StyledModal } from './style';
import { StyledTitle } from '../../styles/Typography';
import { CloseRounded } from '@mui/icons-material';
import { TModalOptions } from '../../providers/ModalProvider';
import { useModal } from '../../hooks/useModal';

interface IModalProps {
  children: ReactNode;
  title: TModalOptions;
}

export const Modal = ({ children, title }: IModalProps) => {
  const { modal, setModal } = useModal();
  if (!modal) return null;
  if (modal === title)
    return ReactDOM.createPortal(
      <StyledModal onClick={() => setModal(null)}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <StyledTitle $fontFamily="one" $fontSize="three" tag="h2">
              {title}
            </StyledTitle>
            <button onClick={() => setModal(null)}>
              <CloseRounded />
            </button>
          </div>
          {children}
        </div>
      </StyledModal>,
      document.getElementById('modal')!
    );
};
