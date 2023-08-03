import { ReactNode } from 'react';
import { StyledModal } from './style';
import { CloseRounded } from '@mui/icons-material';

interface IModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  toggle: () => void;
}

export const Modal = ({ children, isOpen, toggle, title }: IModalProps) => {
  return (
    <>
      {isOpen && (
        <StyledModal onClick={toggle}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h1>{title}</h1>
              <button onClick={toggle}>
                <CloseRounded />
              </button>
            </div>
            {children}
          </div>
        </StyledModal>
      )}
    </>
  );
};
