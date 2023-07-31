import { ReactNode } from 'react';
import { StyledModal } from './style';

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
            <h1>{title}</h1>
            {children}
          </div>
        </StyledModal>
      )}
    </>
  );
};
