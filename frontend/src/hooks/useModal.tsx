import { useContext } from 'react';
import { ModalContext } from '../providers/ModalProvider';

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  return modalContext;
};
